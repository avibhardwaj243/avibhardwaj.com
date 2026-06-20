"""Backend tests for Avi Bhardwaj Portfolio API.
Covers /api/health and /api/contact endpoints.
"""
import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
if not BASE_URL:
    # Fall back to reading frontend .env directly
    env_path = '/app/frontend/.env'
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
                    break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_health_ok_and_reports_resend_unconfigured(self, client):
        r = client.get(f"{API}/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        # Resend key intentionally empty
        assert data.get("resend_configured") is False
        assert "time" in data


# ---------- Contact POST ----------
class TestContactPost:
    def test_post_valid_payload_received(self, client):
        unique_subject = f"TEST_subject_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": "TEST_User",
            "email": "test_user@example.com",
            "subject": unique_subject,
            "message": "Hello from the backend test suite.",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body.get("status") == "received"
        assert body.get("delivered") is False

        # Verify persistence via GET
        g = client.get(f"{API}/contact?limit=200", timeout=15)
        assert g.status_code == 200
        items = g.json()
        assert isinstance(items, list)
        found = [i for i in items if i.get("subject") == unique_subject]
        assert len(found) == 1, "Submission not persisted in MongoDB"
        rec = found[0]
        assert rec["name"] == "TEST_User"
        assert rec["email"] == "test_user@example.com"
        assert rec["email_sent"] is False
        assert "id" in rec and isinstance(rec["id"], str)
        assert "_id" not in rec  # Mongo ObjectId must be excluded

    def test_post_invalid_email_returns_422(self, client):
        r = client.post(
            f"{API}/contact",
            json={
                "name": "TEST_BadEmail",
                "email": "not-an-email",
                "subject": "x",
                "message": "Hello",
            },
            timeout=15,
        )
        assert r.status_code == 422

    def test_post_missing_message_returns_422(self, client):
        r = client.post(
            f"{API}/contact",
            json={"name": "TEST_NoMsg", "email": "ok@example.com", "subject": "x"},
            timeout=15,
        )
        assert r.status_code == 422

    def test_post_missing_name_returns_422(self, client):
        r = client.post(
            f"{API}/contact",
            json={"email": "ok@example.com", "message": "Hello"},
            timeout=15,
        )
        assert r.status_code == 422

    def test_post_empty_name_returns_422(self, client):
        r = client.post(
            f"{API}/contact",
            json={"name": "", "email": "ok@example.com", "message": "Hi"},
            timeout=15,
        )
        assert r.status_code == 422


# ---------- Contact GET ----------
class TestContactList:
    def test_list_returns_json_array(self, client):
        r = client.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        for item in data:
            assert "_id" not in item
            assert "id" in item
            assert "email" in item
