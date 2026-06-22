import { Award } from 'lucide-react';
import { AWARDS } from '@/data/content';

export const Awards = () => {
  if (!AWARDS || AWARDS.length === 0) return null;

  return (
    <section id="awards" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
            Awards & Recognition
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
            Honours earned along the way.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
          {AWARDS.map((a) => (
            <article
              key={a.title + a.year}
              className="bg-white p-8 flex flex-col gap-4 transition-colors hover:bg-zinc-50"
              data-testid={`award-${a.year}`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-amber-100 border border-amber-200 text-amber-700">
                  <Award size={18} />
                </span>
                <span className="font-mono text-xs text-zinc-500">{a.year}</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium text-zinc-950 leading-tight">
                  {a.title}
                </h3>
                <div className="mt-1 text-sm text-zinc-500">{a.org}</div>
              </div>
              {a.note && (
                <p className="text-sm text-zinc-600 leading-relaxed mt-auto">{a.note}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
