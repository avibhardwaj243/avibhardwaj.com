// Logo concepts — each is a small SVG mark + the text "Avi Bhardwaj".
// Pass `variant` to render a different mark.

const Mark = ({ children, className = '' }) => (
  <span className={`inline-flex items-center justify-center ${className}`}>{children}</span>
);

const variants = {
  // 1. Filled blue square with white "ab" monogram
  square: () => (
    <Mark className="h-8 w-8 bg-blue-600 text-white">
      <span className="font-heading text-[13px] font-bold tracking-tight">ab</span>
    </Mark>
  ),

  // 2. Bordered square with diagonal split (zinc + blue)
  diagonal: () => (
    <Mark className="h-8 w-8 border border-zinc-900 relative overflow-hidden">
      <span className="absolute inset-0 bg-blue-600" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
      <span className="relative z-10 font-heading text-[13px] font-bold text-zinc-900">ab</span>
    </Mark>
  ),

  // 3. Circle with initials
  circle: () => (
    <Mark className="h-8 w-8 rounded-full bg-zinc-950 text-white">
      <span className="font-heading text-[12px] font-semibold tracking-tight">AB</span>
    </Mark>
  ),

  // 4. Developer slash — minimal, technical
  slash: () => (
    <span className="font-mono text-blue-600 text-base font-semibold leading-none">{'</>'}</span>
  ),

  // 5. Stacked blocks (architecture / engineering vibe)
  stack: () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="2" y="2" width="11" height="11" fill="#2563EB" />
      <rect x="15" y="2" width="11" height="11" fill="#0B0B0F" />
      <rect x="2" y="15" width="11" height="11" fill="#0B0B0F" />
      <rect x="15" y="15" width="11" height="11" stroke="#2563EB" strokeWidth="2" />
    </svg>
  ),

  // 6. Bracketed monogram — fintech / terminal aesthetic
  bracket: () => (
    <span className="inline-flex items-baseline font-mono text-base text-zinc-900 leading-none">
      <span className="text-blue-600">[</span>
      <span className="font-bold px-0.5">ab</span>
      <span className="text-blue-600">]</span>
    </span>
  ),
};

export const Logo = ({ variant = 'square', size = 'md', className = '' }) => {
  const Mk = variants[variant] || variants.square;
  const textSize = size === 'lg' ? 'text-lg' : 'text-base';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mk />
      <span className={`font-heading ${textSize} font-semibold tracking-tight text-zinc-950`}>
        Avi <span className="text-zinc-500 font-normal">Bhardwaj</span>
      </span>
    </span>
  );
};

export const LOGO_VARIANTS = [
  { id: 'square', label: 'Filled square (blue)', tag: 'Bold · Brandable' },
  { id: 'diagonal', label: 'Diagonal split', tag: 'Editorial · Distinctive' },
  { id: 'circle', label: 'Black circle monogram', tag: 'Classic · Executive' },
  { id: 'slash', label: 'Code brackets </>', tag: 'Developer · Minimal' },
  { id: 'stack', label: 'Stacked blocks', tag: 'Architecture · Technical' },
  { id: 'bracket', label: '[ab] terminal', tag: 'FinTech · Mono' },
];
