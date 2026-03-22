/* ── Lotus ornament above section headings ── */
export function LotusOrnament({ color = '#FFCC02', size = 36 }) {
  return (
    <div className="lotus-ornament">
      <svg width={size} height={size * 0.7} viewBox="0 0 60 42" fill="none" aria-hidden="true">
        {/* centre petal */}
        <path d="M30 38 C30 38 18 26 18 16 C18 8 24 4 30 4 C36 4 42 8 42 16 C42 26 30 38 30 38Z"
          fill="none" stroke={color} strokeWidth="1.6" />
        {/* left petal */}
        <path d="M30 38 C30 38 10 30 8 20 C6 12 12 6 18 8 C24 10 30 38 30 38Z"
          fill="none" stroke={color} strokeWidth="1.4" opacity="0.7" />
        {/* right petal */}
        <path d="M30 38 C30 38 50 30 52 20 C54 12 48 6 42 8 C36 10 30 38 30 38Z"
          fill="none" stroke={color} strokeWidth="1.4" opacity="0.7" />
        {/* far-left */}
        <path d="M30 38 C30 38 4 28 4 18 C4 10 10 6 16 10 C22 14 30 38 30 38Z"
          fill="none" stroke={color} strokeWidth="1.1" opacity="0.4" />
        {/* far-right */}
        <path d="M30 38 C30 38 56 28 56 18 C56 10 50 6 44 10 C38 14 30 38 30 38Z"
          fill="none" stroke={color} strokeWidth="1.1" opacity="0.4" />
        {/* stem */}
        <line x1="30" y1="38" x2="30" y2="42" stroke={color} strokeWidth="1.4" />
        <line x1="24" y1="41" x2="36" y2="41" stroke={color} strokeWidth="1.4" />
      </svg>
    </div>
  )
}

/* ── Wavy orange dotted divider ── */
export function WavyDivider({ flip = false, color = '#E65100', opacity = 0.55 }) {
  return (
    <div className="wavy-divider" style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 28" preserveAspectRatio="none" height="28" aria-hidden="true">
        <path
          d="M0,14 C120,28 240,0 360,14 C480,28 600,0 720,14 C840,28 960,0 1080,14 C1200,28 1320,0 1440,14"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray="6 5"
          opacity={opacity}
        />
      </svg>
    </div>
  )
}

/* ── Hero bottom orange wave ── */
export function HeroWave() {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" height="48" aria-hidden="true">
        <path d="M0,24 C180,48 360,0 540,24 C720,48 900,0 1080,24 C1260,48 1380,12 1440,24 L1440,48 L0,48Z"
          fill="#E65100" opacity="0.18" />
        <path d="M0,32 C200,48 400,16 600,32 C800,48 1000,16 1200,32 C1320,40 1400,28 1440,32"
          fill="none" stroke="#E65100" strokeWidth="2.5" strokeDasharray="7 5" opacity="0.6" />
      </svg>
    </div>
  )
}

/* ── Temple + palm sketch for hero ── */
export function TempleSketch({ style = {} }) {
  return (
    <svg viewBox="0 0 160 200" width="160" height="200" fill="none" aria-hidden="true"
      style={{ position: 'absolute', opacity: 0.12, pointerEvents: 'none', ...style }}>
      {/* Temple tower */}
      <rect x="55" y="120" width="50" height="70" stroke="white" strokeWidth="1.5" />
      <polygon points="80,60 45,120 115,120" stroke="white" strokeWidth="1.5" fill="none" />
      <polygon points="80,30 55,70 105,70" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="80" y1="10" x2="80" y2="30" stroke="white" strokeWidth="1.5" />
      <circle cx="80" cy="8" r="4" stroke="white" strokeWidth="1.5" />
      {/* Pillars */}
      <line x1="65" y1="120" x2="65" y2="190" stroke="white" strokeWidth="1.2" />
      <line x1="95" y1="120" x2="95" y2="190" stroke="white" strokeWidth="1.2" />
      {/* Steps */}
      <line x1="45" y1="190" x2="115" y2="190" stroke="white" strokeWidth="1.5" />
      <line x1="40" y1="196" x2="120" y2="196" stroke="white" strokeWidth="1.5" />
    </svg>
  )
}

export function PalmSketch({ style = {} }) {
  return (
    <svg viewBox="0 0 80 160" width="80" height="160" fill="none" aria-hidden="true"
      style={{ position: 'absolute', opacity: 0.15, pointerEvents: 'none', ...style }}>
      {/* Trunk */}
      <path d="M40,160 C38,130 36,100 40,70 C44,40 42,20 40,10" stroke="white" strokeWidth="2" />
      {/* Fronds */}
      <path d="M40,30 C20,20 5,10 2,2" stroke="white" strokeWidth="1.5" />
      <path d="M40,30 C55,15 68,8 72,2" stroke="white" strokeWidth="1.5" />
      <path d="M40,40 C18,35 4,30 0,22" stroke="white" strokeWidth="1.3" />
      <path d="M40,40 C62,35 76,30 80,22" stroke="white" strokeWidth="1.3" />
      <path d="M40,50 C25,50 12,48 6,42" stroke="white" strokeWidth="1.2" />
      <path d="M40,50 C55,50 68,48 74,42" stroke="white" strokeWidth="1.2" />
      {/* Coconuts */}
      <circle cx="36" cy="32" r="3" stroke="white" strokeWidth="1" />
      <circle cx="44" cy="34" r="3" stroke="white" strokeWidth="1" />
    </svg>
  )
}

/* ── Why-Choose-Us SVG sketch icons — forest green on cream ── */
export const WHY_ICONS = {
  fresh: (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="#1B4D2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 36 C20 36 6 26 6 16 C6 8 12 4 20 8 C28 4 34 8 34 16 C34 26 20 36 20 36Z" />
      <path d="M20 8 L20 22" />
      <path d="M14 14 L20 20 L26 14" />
    </svg>
  ),
  slowcook: (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="#1B4D2E" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="20" cy="22" r="12" />
      <path d="M20 10 L20 6" />
      <path d="M14 12 L12 8" />
      <path d="M26 12 L28 8" />
      <path d="M20 22 L20 16 L24 20" />
      <path d="M14 4 C14 4 16 2 18 4 C20 6 22 2 24 4" />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="#1B4D2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="14" width="24" height="16" rx="2" />
      <path d="M26 20 L34 20 L38 28 L38 30 L26 30Z" />
      <circle cx="9" cy="32" r="3" />
      <circle cx="31" cy="32" r="3" />
      <path d="M6 14 L10 6 L22 6 L26 14" />
    </svg>
  ),
  recipe: (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="#1B4D2E" strokeWidth="1.8" strokeLinecap="round">
      <path d="M10 36 L10 8 C10 6 12 4 14 4 L30 4 C32 4 34 6 34 8 L34 36Z" />
      <path d="M10 36 L34 36" />
      <path d="M16 12 L28 12" />
      <path d="M16 18 L28 18" />
      <path d="M16 24 L22 24" />
    </svg>
  ),
  spice: (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="#1B4D2E" strokeWidth="1.8" strokeLinecap="round">
      <path d="M20 34 C14 34 8 28 8 20 C8 12 14 6 20 6 C26 6 32 12 32 20 C32 28 26 34 20 34Z" />
      <path d="M20 6 C22 2 26 2 26 2" />
      <path d="M14 16 C16 14 20 14 22 16" />
      <path d="M14 22 C16 20 20 20 22 22" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="#1B4D2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4 C11 4 4 11 4 20 C4 23 5 26 7 28 L4 36 L12 33 C14 34 17 35 20 35 C29 35 36 28 36 20 C36 11 29 4 20 4Z" />
      <path d="M14 16 C14 14 16 12 18 13 L20 17 C20 18 19 19 18 20 C20 22 22 24 24 24 C25 23 26 22 27 22 L31 24 C32 26 30 28 28 28 C20 28 12 20 14 16Z" />
    </svg>
  ),
}
