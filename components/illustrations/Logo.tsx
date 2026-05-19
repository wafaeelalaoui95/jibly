import { cn } from '@/lib/utils';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        viewBox="0 0 44 44"
        className="h-9 w-9"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rounded background */}
        <rect
          x="2"
          y="2"
          width="40"
          height="40"
          rx="12"
          fill="#F26B3A"
          stroke="#2D2620"
          strokeWidth="2"
        />
        {/* Small plane curve */}
        <path
          d="M 11 28 Q 22 14 33 22"
          fill="none"
          stroke="#FDFAF5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 2"
        />
        <g transform="translate(28, 18) rotate(20)">
          <path
            d="M 0 0 L 6 -2 L 9 0 L 10 2 L 9 3 L 6 2 L 2 5 L 0 4 L 2 1 Z"
            fill="#FDFAF5"
            stroke="#2D2620"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </g>
        {/* Origin dot */}
        <circle cx="11" cy="28" r="2.5" fill="#FDFAF5" stroke="#2D2620" strokeWidth="1.2" />
      </svg>
      <span className="font-display text-2xl font-bold tracking-tight text-ink-500">
        Jibly
      </span>
    </div>
  );
}
