import { Mail } from 'lucide-react';
import { PROFILE } from '@/data/content';

// Substack embed URL — derived from PROFILE.substack
// (Substack provides https://<publication>.substack.com/embed)
const SUBSTACK_EMBED = `${PROFILE.substack}/embed`;

export const Subscribe = ({ variant = 'home' }) => {
  return (
    <section
      id="subscribe"
      data-testid="subscribe-section"
      className={
        variant === 'home'
          ? 'bg-white border-t border-zinc-200'
          : 'bg-zinc-50 border-y border-zinc-200'
      }
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-600">
              Newsletter
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">
              Get new notes in your inbox.
            </h2>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed max-w-xl">
              Occasional, low-volume thoughts on engineering leadership, architecture and FinTech.
              No spam, unsubscribe anytime — powered by Substack.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-500">
              <Mail size={14} /> One short email per published note.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-zinc-200 bg-white overflow-hidden">
              <iframe
                src={SUBSTACK_EMBED}
                title="Subscribe to Avi Bhardwaj's newsletter"
                width="100%"
                height="320"
                style={{ border: 0, background: 'white' }}
                frameBorder="0"
                scrolling="no"
                loading="lazy"
                data-testid="substack-embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
