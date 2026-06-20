import { EXPERIENCE } from '@/data/content';

export const Experience = () => {
  return (
    <section id="experience" className="bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
            Experience
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
            16 years of building, leading and shipping.
          </h2>
        </div>

        <div className="mt-12 space-y-16">
          {EXPERIENCE.map((company) => (
            <div key={company.company} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <div className="font-heading text-xl font-medium text-zinc-950">
                    {company.company}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">{company.location}</div>
                  <div className="mt-2 text-xs font-mono text-blue-600">{company.duration}</div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="relative border-l border-zinc-200 ml-2 space-y-10">
                  {company.roles.map((role) => (
                    <div key={role.title + role.period} className="relative pl-8">
                      <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-blue-600 ring-4 ring-zinc-50" />
                      <div className="font-heading text-lg md:text-xl font-medium text-zinc-950">
                        {role.title}
                      </div>
                      <div className="mt-1 text-xs font-mono text-zinc-500">{role.period}</div>
                      <p className="mt-3 text-zinc-600 leading-relaxed">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
