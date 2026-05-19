import { cn } from '@/lib/utils';

export function Logo({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { box: 'h-7 w-7', text: 'text-lg' },
    md: { box: 'h-9 w-9', text: 'text-2xl' },
    lg: { box: 'h-12 w-12', text: 'text-3xl' },
  };
  const s = sizes[size];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        viewBox="0 0 44 44"
        className={s.box}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A083FB" />
            <stop offset="100%" stopColor="#8466F0" />
          </linearGradient>
        </defs>
        {/* Rounded background */}
        <rect x="2" y="2" width="40" height="40" rx="12" fill="url(#logo-bg)" />

        {/* Yellow accent dot */}
        <circle cx="11" cy="28" r="3" fill="#FFD966" />

        {/* Plane path */}
        <path
          d="M 11 28 Q 22 14 33 22"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2.5 2"
          opacity="0.85"
        />

        {/* Tiny plane */}
        <g transform="translate(30, 18) rotate(25)">
          <path
            d="M 0 0 L 7 -2 L 10 0 L 10 2 L 7 2 L 0 1 Z"
            fill="#FFFBED"
          />
          <path
            d="M 3 -2 L 4 -4 L 5 -4 L 4.5 -1 Z"
            fill="#FFFBED"
          />
        </g>
      </svg>
      <span className={cn('font-display font-bold tracking-tight text-ink-500', s.text)}>
        Jibly
      </span>
    </div>
  );
}
