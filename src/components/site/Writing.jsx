import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { WRITING } from '@/data/content';

export const Writing = () => {
  const latest = [...WRITING]
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 3);

  return (
    <section id="writing" className="bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500">
              Writing
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
              Notes from the trenches.
            </h2>
          </div>
          <Link
            to="/notes"
            data-testid="view-all-notes"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group"
          >
            View all notes
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200 bg-white">
          {latest.map((post) => (
            <Link
              key={post.slug}
              to={`/notes/${post.slug}`}
              data-testid={`home-note-${post.slug}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-6 py-6 md:px-8 md:py-8 hover:bg-zinc-50 transition-colors"
            >
              <div className="md:col-span-2 text-xs font-mono text-zinc-500">
                {formatDate(post.date)}
              </div>
              <div className="md:col-span-8">
                <h3 className="font-heading text-lg md:text-xl font-medium text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="md:col-span-2 flex md:justify-end items-start">
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  {post.tag}
                  <ArrowUpRight size={14} className="text-zinc-400" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

function formatDate(iso) {
  if (!iso) return 'Coming soon';
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}
