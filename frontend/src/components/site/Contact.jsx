import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Send, Loader2, Linkedin, Mail } from 'lucide-react';
import { CONTACT } from '@/constants/testIds';
import { PROFILE } from '@/data/content';

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in your name, email and message.');
      return;
    }
    setLoading(true);
    setSuccess(false);
    try {
      const subject = form.subject.trim() || 'New message from avibhardwaj.com';
      await axios.post(
        WEB3FORMS_URL,
        {
          access_key: WEB3FORMS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          subject: `[Portfolio] ${subject}`,
          message: form.message.trim(),
          from_name: 'avibhardwaj.com',
          replyto: form.email.trim(),
          botcheck: '',
        },
        { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
      );
      toast.success('Message sent. I’ll get back to you soon.');
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      const detail =
        err?.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(detail);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid={CONTACT.section} className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
              Contact
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
              Let’s talk.
            </h2>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
              Whether it’s a role, an idea worth building, or a conversation about engineering
              leadership — my inbox is open.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group flex items-center gap-3 text-zinc-800 hover:text-blue-600 transition-colors"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center border border-zinc-200 bg-white">
                  <Mail size={16} />
                </span>
                <span className="text-sm">{PROFILE.email}</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-zinc-800 hover:text-blue-600 transition-colors"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center border border-zinc-200 bg-white">
                  <Linkedin size={16} />
                </span>
                <span className="text-sm">linkedin.com/in/avibhardwaj243</span>
              </a>
            </div>
          </div>

          <form
            onSubmit={submit}
            data-testid={CONTACT.form}
            className="lg:col-span-7 bg-white border border-zinc-200 p-6 md:p-10 space-y-5"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Your name" required>
                <input
                  type="text"
                  required
                  data-testid={CONTACT.name}
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Doe"
                  className="w-full border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  required
                  data-testid={CONTACT.email}
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@company.com"
                  className="w-full border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </Field>
            </div>

            <Field label="Subject">
              <input
                type="text"
                data-testid={CONTACT.subject}
                value={form.subject}
                onChange={update('subject')}
                placeholder="What’s this about?"
                className="w-full border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </Field>

            <Field label="Message" required>
              <textarea
                required
                rows={6}
                data-testid={CONTACT.message}
                value={form.message}
                onChange={update('message')}
                placeholder="A few sentences about what you’d like to discuss..."
                className="w-full border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 resize-y"
              />
            </Field>

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-zinc-500">
                I usually reply within 1–2 business days.
              </p>
              <button
                type="submit"
                disabled={loading}
                data-testid={CONTACT.submit}
                className="inline-flex items-center gap-2 rounded-none px-6 py-3 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <Send size={14} />
                  </>
                )}
              </button>
            </div>

            {success && (
              <div
                data-testid={CONTACT.success}
                className="mt-2 border border-blue-100 bg-blue-50 text-blue-700 text-sm px-4 py-3"
              >
                Thanks — your message landed safely. I’ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, required, children }) => (
  <label className="block">
    <span className="block text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500 mb-2">
      {label} {required && <span className="text-blue-600">*</span>}
    </span>
    {children}
  </label>
);
