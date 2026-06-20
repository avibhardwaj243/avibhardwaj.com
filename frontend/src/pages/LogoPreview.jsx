import { Logo, LOGO_VARIANTS } from '@/components/site/Logo';

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
            Logo concepts
          </span>
          <h1 className="mt-2 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
            Pick a logo for the top-left.
          </h1>
          <p className="mt-3 text-zinc-600 max-w-xl">
            Six options below — each shown in a mock header bar so you can see how it looks in
            context. Reply with the option number (1–6).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LOGO_VARIANTS.map((v, i) => (
            <article
              key={v.id}
              className="bg-white border border-zinc-200 overflow-hidden"
              data-testid={`logo-option-${v.id}`}
            >
              {/* mock header */}
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
                    {String(i + 1).padStart(2, '0')} / Option
                  </div>
                  <div className="mt-1 font-heading text-lg font-medium text-zinc-950">
                    {v.label}
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500 border border-zinc-200 px-2 py-1">
                  {v.tag}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-white border border-zinc-200 p-6">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
            Side-by-side dark on light
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-6">
            {LOGO_VARIANTS.map((v, i) => (
              <div key={v.id} className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-400 w-6">
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
