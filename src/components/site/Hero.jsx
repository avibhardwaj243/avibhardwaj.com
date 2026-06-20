import { ArrowRight, Download, Linkedin, Mail, MapPin } from 'lucide-react';
import { HERO } from '@/constants/testIds';
import { PROFILE, STATS } from '@/data/content';

export const Hero = () => {
  return (
    <section id="top" data-testid={HERO.section} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left fade-up">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600 mb-6">
              Engineering Leadership · FinTech
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-950 leading-[1.05]">
              Building scalable<br className="hidden sm:block" /> FinTech products<br className="hidden sm:block" /> people can trust.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-600 leading-relaxed">
              I’m <span className="text-zinc-950 font-medium">{PROFILE.name}</span> — {PROFILE.role} at{' '}
              <span className="text-zinc-950 font-medium">{PROFILE.company}</span>. {PROFILE.tagline}
            </p>

            <div className="mt-6 inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to
              </span>
              {PROFILE.openTo.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-zinc-600 bg-white border border-zinc-200 px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                data-testid={HERO.ctaContact}
                className="inline-flex items-center gap-2 rounded-none px-6 py-3 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Get in touch <ArrowRight size={16} />
              </button>
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-testid={HERO.ctaResume}
                className="inline-flex items-center gap-2 rounded-none px-6 py-3 text-sm font-medium border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 transition-colors"
              >
                Download CV <Download size={16} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} /> {PROFILE.location}
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                data-testid={HERO.email}
                className="inline-flex items-center gap-2 hover:text-zinc-900 transition-colors"
              >
                <Mail size={14} /> {PROFILE.email}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid={HERO.linkedin}
                className="inline-flex items-center gap-2 hover:text-zinc-900 transition-colors"
              >
                <Linkedin size={14} /> /in/avibhardwaj243
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-square overflow-hidden border border-zinc-200 shadow-sm fade-up">
            <img
              src={PROFILE.avatar}
              alt={PROFILE.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/30 pointer-events-none" />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 text-xs font-mono text-zinc-700 border border-zinc-200">
              {PROFILE.role} @ {PROFILE.company}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white p-6 md:p-8">
              <div className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
