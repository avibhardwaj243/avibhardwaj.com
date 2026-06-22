import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { PageShell } from '@/components/site/PageShell';
import { SEO } from '@/components/site/SEO';
import { WRITING } from '@/data/content';

export default function AllNotes() {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState([]);

  // Build flat tag list with counts
  const tagCounts = useMemo(() => {
    const map = new Map();
    WRITING.forEach((n) => {
      (n.tags || []).forEach((t) => map.set(t, (map.get(t) || 0) + 1));
    });
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const sorted = useMemo(() => {
    return [...WRITING].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((n) => {
      // tag filter (AND across selected tags)
      if (activeTags.length > 0) {
        const has = activeTags.every((t) => (n.tags || []).includes(t));
        if (!has) return false;
      }
      if (!q) return true;
      const hay = [
        n.title,
        n.excerpt,
        n.content,
        (n.tags || []).join(' '),
        n.tag || '',
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [sorted, query, activeTags]);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setActiveTags([]);
    setQuery('');
  };

  return (
    <>
      <SEO
        title="Writing & Notes"
        description="Notes on engineering leadership, architecture and FinTech by Avi Bhardwaj. Search by keyword or filter by tag."
        path="/notes"
      />
      <PageShell eyebrow="Writing" title="Notes from the trenches." backLabel="Back to home">
      <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mb-10">
        Long-form thoughts on engineering leadership, architecture and FinTech. Search by keyword
        or filter by tag.
      </p>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
        />
        <input
          type="search"
          data-testid="notes-search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keyword, e.g. on-call, partners, hiring..."
          className="w-full border border-zinc-200 bg-white pl-10 pr-10 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
        />
        {(query || activeTags.length > 0) && (
          <button
            onClick={clearFilters}
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-950 px-2 py-1"
            data-testid="notes-clear-filters"
          >
            <X size={12} /> Clear
          </button>
        )}
      </div>

      {/* Tag chips */}
      {tagCounts.length > 0 && (
        <div className="mb-10 flex flex-wrap gap-2">
          {tagCounts.map(([tag, count]) => {
            const active = activeTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                data-testid={`tag-${tag}`}
                className={`text-xs font-mono px-2.5 py-1 border transition-colors ${
                  active
                    ? 'bg-zinc-950 border-zinc-950 text-white'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400'
                }`}
              >
                #{tag} <span className={active ? 'text-zinc-400' : 'text-zinc-400'}>· {count}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="border border-zinc-200 p-10 text-center text-sm text-zinc-500">
          No notes match your search.{' '}
          <button onClick={clearFilters} className="underline hover:text-zinc-900">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              to={`/notes/${post.slug}`}
              data-testid={`note-card-${post.slug}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 md:py-8 hover:bg-zinc-50 transition-colors"
            >
              <div className="md:col-span-2 text-xs font-mono text-zinc-500">
                {formatDate(post.date)}
              </div>
              <div className="md:col-span-8">
                <h2 className="font-heading text-lg md:text-xl font-medium text-zinc-950 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{post.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(post.tags || []).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-zinc-500 bg-zinc-50 border border-zinc-200 px-1.5 py-0.5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 flex md:justify-end items-start">
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  {post.readingTime || '—'}
                  <ArrowUpRight size={14} className="text-zinc-400" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </PageShell>
    </>
  );
}

function formatDate(iso) {
  if (!iso) return 'Coming soon';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  } catch {
    return iso;
  }
}
