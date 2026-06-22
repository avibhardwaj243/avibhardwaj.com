import { useParams, Navigate } from 'react-router-dom';
import { PageShell } from '@/components/site/PageShell';
import { Markdown } from '@/components/site/Markdown';
import { SEO } from '@/components/site/SEO';
import { PROJECTS } from '@/data/content';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <>
      <SEO
        title={project.title}
        description={project.summary}
        path={`/projects/${project.slug}`}
        type="article"
        publishedAt={project.date}
        tags={project.stack}
        image={project.image}
      />
      <PageShell
        eyebrow={`Project · ${project.date}`}
        title={project.title}
        backLabel="All projects"
      >
      <div className="aspect-[2/1] w-full overflow-hidden bg-zinc-100 mb-10 border border-zinc-200">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 mb-12">
        <div className="bg-white p-5">
          <div className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500">Role</div>
          <div className="mt-1 text-zinc-900 font-medium">{project.role || '—'}</div>
        </div>
        <div className="bg-white p-5">
          <div className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500">
            Duration
          </div>
          <div className="mt-1 text-zinc-900 font-medium">{project.duration || '—'}</div>
        </div>
        <div className="bg-white p-5">
          <div className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-500">
            Stack
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-[11px] font-mono bg-zinc-50 text-zinc-700 border border-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.impact && project.impact.length > 0 && (
        <div className="mb-10 bg-blue-50 border border-blue-100 p-6">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-700 mb-3">
            Impact
          </div>
          <ul className="space-y-1.5">
            {project.impact.map((i) => (
              <li key={i} className="text-zinc-800 flex items-start gap-2">
                <span className="text-blue-600 mt-1">→</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Markdown>{project.content}</Markdown>
    </PageShell>
    </>
  );
}
