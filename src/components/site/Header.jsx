import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/constants/testIds';
import { PROFILE } from '@/data/content';

const links = [
  { id: 'about', label: 'About', testid: NAV.about },
  { id: 'experience', label: 'Experience', testid: NAV.experience },
  { id: 'skills', label: 'Skills', testid: NAV.skills },
  { id: 'projects', label: 'Projects', testid: NAV.projects },
  { id: 'writing', label: 'Writing', testid: NAV.writing },
  { id: 'contact', label: 'Contact', testid: NAV.contact },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-colors ${
        scrolled ? 'bg-white/80 border-b border-zinc-200' : 'bg-white/60 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center h-16">
        <a
          href="#top"
          data-testid={NAV.logo}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2.5"
          aria-label="Avi Bhardwaj — home"
        >
          <img
            src="/avi-logo-mark.png"
            alt="AB monogram"
            className="h-9 w-auto"
            width="80"
            height="36"
            loading="eager"
          />
          <span className="hidden sm:inline font-heading text-base font-semibold tracking-tight text-zinc-950">
            Avi <span className="text-zinc-500 font-normal">Bhardwaj</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={l.testid}
              onClick={() => handleNav(l.id)}
              className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            data-testid={NAV.resume}
            className="inline-flex items-center gap-2 rounded-none px-5 py-2.5 text-sm font-medium bg-zinc-950 text-white hover:bg-zinc-800 transition-colors"
          >
            Download CV
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 text-zinc-700"
          data-testid={NAV.mobileToggle}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={l.testid}
                onClick={() => handleNav(l.id)}
                className="text-left py-2.5 text-sm text-zinc-700 hover:text-zinc-950"
              >
                {l.label}
              </button>
            ))}
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-none px-5 py-2.5 text-sm font-medium bg-zinc-950 text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
