from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone

import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'avibhardwaj243@gmail.com')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="Avi Bhardwaj Portfolio API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default="New message from avibhardwaj.com", max_length=180)
    message: str = Field(..., min_length=1, max_length=4000)


class ContactRecord(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    email_sent: bool = False
    email_id: Optional[str] = None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Avi Bhardwaj Portfolio API is running"}


@api_router.get("/health")
async def health():
    return {
        "status": "ok",
        "resend_configured": bool(RESEND_API_KEY),
        "time": datetime.now(timezone.utc).isoformat(),
    }


def _build_html(payload: ContactCreate) -> str:
    safe_msg = payload.message.replace("\n", "<br/>")
    return f"""
    <table style="font-family:Arial,Helvetica,sans-serif;color:#18181b;max-width:560px;margin:0 auto;border-collapse:collapse;">
      <tr><td style="padding:16px 0;border-bottom:1px solid #e4e4e7;">
        <h2 style="margin:0;color:#2563eb;font-size:20px;">New message from avibhardwaj.com</h2>
      </td></tr>
      <tr><td style="padding:16px 0;">
        <p style="margin:0 0 6px 0;"><b>Name:</b> {payload.name}</p>
        <p style="margin:0 0 6px 0;"><b>Email:</b> {payload.email}</p>
        <p style="margin:0 0 6px 0;"><b>Subject:</b> {payload.subject}</p>
      </td></tr>
      <tr><td style="padding:8px 0;border-top:1px solid #e4e4e7;">
        <p style="margin:0;line-height:1.6;">{safe_msg}</p>
      </td></tr>
      <tr><td style="padding:16px 0;color:#71717a;font-size:12px;">
        Sent via the contact form on avibhardwaj.com
      </td></tr>
    </table>
    """


@api_router.post("/contact")
async def submit_contact(payload: ContactCreate):
    record = ContactRecord(
        name=payload.name,
        email=payload.email,
        subject=payload.subject or "New message from avibhardwaj.com",
        message=payload.message,
    )

    email_id = None
    if RESEND_API_KEY:
        params = {
            "from": f"Avi Portfolio <{SENDER_EMAIL}>",
            "to": [RECIPIENT_EMAIL],
            "reply_to": payload.email,
            "subject": f"[Portfolio] {record.subject}",
            "html": _build_html(payload),
        }
        try:
            email = await asyncio.to_thread(resend.Emails.send, params)
            email_id = email.get("id") if isinstance(email, dict) else None
            record.email_sent = True
            record.email_id = email_id
        except Exception as e:
            logger.error(f"Resend send failed: {e}")
            # Still persist message so it's never lost
            record.email_sent = False
    else:
        logger.warning("RESEND_API_KEY not configured — saving submission only.")

    try:
        await db.contact_messages.insert_one(record.model_dump())
    except Exception as e:
        logger.error(f"Failed to persist contact message: {e}")

    if not RESEND_API_KEY:
        return {
            "status": "received",
            "delivered": False,
            "note": "Message saved. Email delivery not yet configured.",
        }

    if not record.email_sent:
        raise HTTPException(status_code=502, detail="Email delivery failed. Please try again later.")

    return {"status": "sent", "delivered": True, "email_id": email_id}


@api_router.get("/contact", response_model=List[ContactRecord])
async def list_contacts(limit: int = 100):
    docs = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return docs


# Register router & middleware
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
