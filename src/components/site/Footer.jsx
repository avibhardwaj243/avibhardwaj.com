import { Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '@/data/content';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-3">
              <img
                src="/avi-logo-mark-white.png"
                alt="AB monogram"
                className="h-9 w-auto"
                width="80"
                height="36"
                loading="lazy"
              />
              <span className="font-heading text-xl font-semibold text-white">
                Avi Bhardwaj
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-400 max-w-md leading-relaxed">
              {PROFILE.role} @ {PROFILE.company}. Building scalable FinTech products from{' '}
              {PROFILE.location}.
            </p>
            <p className="mt-2 text-[10px] font-mono tracking-[0.25em] uppercase text-zinc-500">
              Engineering · Systems · People
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex h-10 w-10 items-center justify-center border border-zinc-800 hover:border-blue-500 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center border border-zinc-800 hover:border-blue-500 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-zinc-500">
          <span>© {year} {PROFILE.name}. All rights reserved.</span>
          <span className="font-mono">{PROFILE.domain}</span>
        </div>
      </div>
    </footer>
  );
};
