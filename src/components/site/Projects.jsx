import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/content';

export const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
              Selected work
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
              Projects I’ve led or shaped.
            </h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-sm">
            Snapshots from the last few years. Many details are NDA — happy to share more in
            person.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col bg-white border border-zinc-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)]"
            >
              <div className="aspect-video w-full overflow-hidden bg-zinc-100 mb-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-xl font-medium text-zinc-950">{p.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-400 group-hover:text-blue-600 transition-colors mt-1 shrink-0"
                />
              </div>
              <p className="mt-3 text-sm text-zinc-500 leading-relaxed flex-1">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs font-mono bg-zinc-50 text-zinc-700 border border-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
