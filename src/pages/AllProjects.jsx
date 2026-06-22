import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { SEO } from '@/components/site/SEO';
import { PROJECTS } from '@/data/content';

export default function AllProjects() {
  const sorted = [...PROJECTS].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  return (
    <>
      <SEO
        title="All projects"
        description="A collection of projects Avi Bhardwaj has led or shaped — engineering platforms, partner integrations, and customer experiences in FinTech."
        path="/projects"
      />
      <PageShell eyebrow="Selected work" title="All projects.">
      <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mb-12">
        Projects I’ve led or shaped over the years. Many details are NDA — happy to share more in
        person.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="all-projects-grid">
        {sorted.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            data-testid={`project-card-${p.slug}`}
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
              <h2 className="font-heading text-xl font-medium text-zinc-950">{p.title}</h2>
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
          </Link>
        ))}
      </div>
    </PageShell>
    </>
  );
}
