import { Logo, LOGO_VARIANTS, CODE_VARIANTS } from '@/components/site/Logo';

const Section = ({ eyebrow, title, items, startIndex = 0 }) => (
  <div className="mt-12">
    <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
      {eyebrow}
    </span>
    <h2 className="mt-2 font-heading text-2xl md:text-3xl font-semibold tracking-tight text-zinc-950">
      {title}
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((v, i) => (
        <article
          key={v.id}
          className="bg-white border border-zinc-200 overflow-hidden"
          data-testid={`logo-option-${v.id}`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-zinc-200 bg-white">
            <Logo variant={v.id} />
            <div className="hidden sm:flex items-center gap-6 text-xs text-zinc-400">
              <span>About</span>
              <span>Experience</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="px-6 py-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-blue-600">
                {String(startIndex + i + 1).padStart(2, '0')} / Option
              </div>
              <div className="mt-1 font-heading text-lg font-medium text-zinc-950">{v.label}</div>
            </div>
            <span className="text-xs font-mono text-zinc-500 border border-zinc-200 px-2 py-1">
              {v.tag}
            </span>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
            Logo concepts
          </span>
          <h1 className="mt-2 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
            Pick a logo for the top-left.
          </h1>
          <p className="mt-3 text-zinc-600 max-w-xl">
            Mock header bars below show each option in context. Reply with the option number.
          </p>
        </div>

        <Section
          eyebrow="Set A · Brand marks"
          title="Geometric & monogram"
          items={LOGO_VARIANTS}
          startIndex={0}
        />

        <Section
          eyebrow="Set B · Code-flavoured (Node / JS)"
          title="For the engineer in you."
          items={CODE_VARIANTS}
          startIndex={LOGO_VARIANTS.length}
        />

        <div className="mt-12 bg-white border border-zinc-200 p-6">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
            All options side-by-side
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[...LOGO_VARIANTS, ...CODE_VARIANTS].map((v, i) => (
              <div key={v.id} className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-400 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Logo variant={v.id} size="lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
