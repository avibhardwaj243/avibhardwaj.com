import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '@/data/content';

export const PageShell = ({ title, eyebrow, children, backLabel = 'Back to home' }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* slim header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-950 transition-colors"
            data-testid="page-back"
          >
            <ArrowLeft size={16} /> {backLabel}
          </button>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hidden sm:inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
          >
            <Mail size={14} /> {PROFILE.email}
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20">
        {eyebrow && (
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-4">
            {eyebrow}
          </div>
        )}
        {title && (
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.1] mb-10">
            {title}
          </h1>
        )}
        {children}
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
              <Mail size={12} /> Email
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
              <Linkedin size={12} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
