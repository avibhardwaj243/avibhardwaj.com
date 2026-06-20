import { PROFILE } from '@/data/content';

export const About = () => {
  return (
    <section id="about" className="bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
              About
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
              An engineer who leads. <br />
              A leader who still thinks like an engineer.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-5">
            {PROFILE.bio.map((p, i) => (
              <p key={i} className="text-lg text-zinc-600 leading-relaxed">
                {p}
              </p>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500">
                  Currently
                </div>
                <div className="mt-1 text-zinc-900">
                  {PROFILE.role} · {PROFILE.company}
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500">
                  Based in
                </div>
                <div className="mt-1 text-zinc-900">{PROFILE.location}</div>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500">
                  Focus
                </div>
                <div className="mt-1 text-zinc-900">
                  Architecture · Production stability · People
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500">
                  Open to
                </div>
                <div className="mt-1 text-zinc-900">Conversations, mentoring, advisory</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
