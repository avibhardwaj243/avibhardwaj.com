import { useParams, Navigate, Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { Markdown } from '@/components/site/Markdown';
import { WRITING } from '@/data/content';

export default function NoteDetail() {
  const { slug } = useParams();
  const post = WRITING.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/notes" replace />;

  return (
    <PageShell eyebrow={post.tag || 'Note'} title={post.title} backLabel="All notes">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500 mb-10 -mt-4">
        <span className="font-mono">{formatDate(post.date)}</span>
        {post.readingTime && (
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} /> {post.readingTime}
          </span>
        )}
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mb-10 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <Link
              key={t}
              to={`/notes?tag=${t}`}
              className="text-[11px] font-mono text-zinc-500 bg-zinc-50 border border-zinc-200 px-1.5 py-0.5 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
            >
              #{t}
            </Link>
          ))}
        </div>
      )}

      <Markdown>{post.content}</Markdown>
    </PageShell>
  );
}

function formatDate(iso) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}
