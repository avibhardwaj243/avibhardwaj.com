import { SKILLS } from '@/data/content';

export const Skills = () => {
  return (
    <section id="skills" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
            Skills & Stack
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
            The tools I reach for to ship reliable FinTech systems.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.title}
              className="bg-white border border-zinc-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="text-xs font-semibold tracking-[0.1em] uppercase text-blue-600 mb-3">
                {String(SKILLS.indexOf(group) + 1).padStart(2, '0')} /
              </div>
              <h3 className="font-heading text-lg font-medium text-zinc-950 mb-5">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <span
                    key={it}
                    className="px-3 py-1 bg-zinc-50 text-zinc-700 text-sm border border-zinc-200"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
