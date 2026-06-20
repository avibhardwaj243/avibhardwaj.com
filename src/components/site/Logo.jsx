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

  // ----- CODE / NODE.JS FLAVOUR -----

  // 7. JSX self-closing tag
  jsx: () => (
    <span className="inline-flex items-baseline font-mono text-[15px] leading-none">
      <span className="text-zinc-400">{'<'}</span>
      <span className="text-blue-600 font-semibold">Avi</span>
      <span className="text-zinc-400">{' />'}</span>
    </span>
  ),

  // 8. Terminal prompt
  terminal: () => (
    <span className="inline-flex items-center gap-1.5 font-mono text-[14px] leading-none">
      <span className="text-emerald-600 font-semibold">$</span>
      <span className="text-zinc-900">avi</span>
      <span className="inline-block w-[7px] h-[14px] bg-zinc-900 animate-pulse" />
    </span>
  ),

  // 9. const declaration
  constDecl: () => (
    <span className="inline-flex items-baseline gap-1 font-mono text-[14px] leading-none">
      <span className="text-fuchsia-600">const</span>
      <span className="text-zinc-900 font-semibold">avi</span>
      <span className="text-zinc-400">=</span>
      <span className="text-amber-600">{'{}'}</span>
    </span>
  ),

  // 10. Node hexagon + ab
  nodeHex: () => (
    <span className="inline-flex items-center gap-2">
      <svg width="26" height="28" viewBox="0 0 26 28" fill="none" aria-hidden>
        <path
          d="M13 1 L24 7 V21 L13 27 L2 21 V7 Z"
          fill="#0B0B0F"
          stroke="#0B0B0F"
          strokeLinejoin="round"
        />
        <text
          x="13"
          y="18"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontWeight="700"
          fontSize="9"
          fill="#5BD66B"
        >
          ab
        </text>
      </svg>
    </span>
  ),

  // 11. .js file extension chip
  jsChip: () => (
    <span className="inline-flex items-center gap-0 font-mono text-[13px] leading-none">
      <span className="text-zinc-900 font-semibold">avi</span>
      <span className="inline-flex h-5 px-1.5 items-center bg-amber-400 text-zinc-900 font-bold ml-0.5">
        .js
      </span>
    </span>
  ),

  // 12. import statement
  importStmt: () => (
    <span className="inline-flex items-baseline gap-1 font-mono text-[13px] leading-none">
      <span className="text-fuchsia-600">import</span>
      <span className="text-zinc-900 font-semibold">avi</span>
      <span className="text-fuchsia-600">from</span>
      <span className="text-emerald-600">'fin'</span>
    </span>
  ),

  // 13. arrow function
  arrowFn: () => (
    <span className="inline-flex items-baseline gap-1 font-mono text-[14px] leading-none">
      <span className="text-zinc-400">()</span>
      <span className="text-blue-600">{'=>'}</span>
      <span className="text-zinc-900 font-semibold">avi</span>
    </span>
  ),

  // 14. Backtick template literal
  templateLit: () => (
    <span className="inline-flex items-baseline font-mono text-[14px] leading-none text-zinc-900">
      <span className="text-emerald-600">`</span>
      <span className="font-semibold px-0.5">avi</span>
      <span className="text-blue-600">{'${EM}'}</span>
      <span className="text-emerald-600">`</span>
    </span>
  ),

  // 15. Node.js inspired — green hex with white "AB"
  nodeGreen: () => (
    <svg width="30" height="32" viewBox="0 0 30 32" aria-hidden>
      <path
        d="M15 1 L28 8 V24 L15 31 L2 24 V8 Z"
        fill="#3C873A"
      />
      <text
        x="15"
        y="20"
        textAnchor="middle"
        fontFamily="Outfit, sans-serif"
        fontWeight="700"
        fontSize="11"
        fill="#FFFFFF"
      >
        ab
      </text>
    </svg>
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

export const CODE_VARIANTS = [
  { id: 'jsx', label: '<Avi /> — JSX tag', tag: 'React · Frontend' },
  { id: 'terminal', label: '$ avi  with blinking cursor', tag: 'CLI · Hacker' },
  { id: 'constDecl', label: 'const avi = {}', tag: 'JavaScript · Modern' },
  { id: 'nodeHex', label: 'Node hexagon + ab', tag: 'Node.js · Iconic' },
  { id: 'jsChip', label: 'avi.js file chip', tag: 'Filename · Playful' },
  { id: 'importStmt', label: "import avi from 'fin'", tag: 'ESM · Statement' },
  { id: 'arrowFn', label: '() => avi', tag: 'Arrow fn · Minimal' },
  { id: 'templateLit', label: '`avi${EM}`', tag: 'Template literal' },
  { id: 'nodeGreen', label: 'Node.js green hex', tag: 'Brand-adjacent' },
];
