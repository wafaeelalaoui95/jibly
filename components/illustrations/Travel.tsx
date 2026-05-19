'use client';

import { motion } from 'framer-motion';

export function Cloud({
  className = '',
  scale = 1,
}: {
  className?: string;
  scale?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 50"
      className={className}
      style={{ width: `${80 * scale}px` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 20 35 Q 5 35 10 22 Q 12 10 28 14 Q 32 4 48 8 Q 60 2 68 14 Q 88 12 88 28 Q 92 38 78 38 L 25 38 Q 18 38 20 35 Z"
        fill="#FDFAF5"
        stroke="#4A4136"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Airplane({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(-20 50 50)">
        <path
          d="M 50 20 L 58 45 L 85 55 L 85 62 L 58 58 L 56 75 L 65 80 L 65 85 L 50 82 L 35 85 L 35 80 L 44 75 L 42 58 L 15 62 L 15 55 L 42 45 Z"
          fill="#F26B3A"
          stroke="#2D2620"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="40" r="3" fill="#FDFAF5" stroke="#2D2620" strokeWidth="1.5" />
        <circle cx="50" cy="52" r="3" fill="#FDFAF5" stroke="#2D2620" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function FlyingAirplane({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ x: [0, 12, 0], y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Airplane className="w-full h-full" />
    </motion.div>
  );
}

export function Passport({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 130"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="80"
        height="110"
        rx="8"
        fill="#A24322"
        stroke="#2D2620"
        strokeWidth="2.5"
      />
      <rect
        x="15"
        y="15"
        width="70"
        height="100"
        rx="5"
        fill="none"
        stroke="#FFC9A8"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle
        cx="50"
        cy="50"
        r="14"
        fill="none"
        stroke="#FFE4D1"
        strokeWidth="2"
      />
      <path
        d="M 50 36 Q 60 50 50 64 Q 40 50 50 36 Z"
        fill="none"
        stroke="#FFE4D1"
        strokeWidth="1.5"
      />
      <line x1="36" y1="50" x2="64" y2="50" stroke="#FFE4D1" strokeWidth="1.5" />
      <text
        x="50"
        y="85"
        textAnchor="middle"
        fill="#FFE4D1"
        fontSize="8"
        fontFamily="serif"
        letterSpacing="2"
      >
        JIBLY
      </text>
      <text
        x="50"
        y="98"
        textAnchor="middle"
        fill="#FFE4D1"
        fontSize="6"
        fontFamily="sans-serif"
        opacity="0.7"
      >
        PASSEPORT
      </text>
    </svg>
  );
}

export function LuggageTag({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 130"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="50" y1="0" x2="50" y2="20" stroke="#4A4136" strokeWidth="2" />
      <path
        d="M 50 15 L 88 30 L 88 110 L 12 110 L 12 30 Z"
        fill="#D4BB7B"
        stroke="#2D2620"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="28" r="4" fill="#FDFAF5" stroke="#2D2620" strokeWidth="2" />
      <line
        x1="20"
        y1="55"
        x2="80"
        y2="55"
        stroke="#2D2620"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <line
        x1="20"
        y1="70"
        x2="65"
        y2="70"
        stroke="#2D2620"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <line
        x1="20"
        y1="85"
        x2="75"
        y2="85"
        stroke="#2D2620"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
    </svg>
  );
}

export function PassportStamp({
  className = '',
  city = 'PARIS',
}: {
  className?: string;
  city?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="#A24322"
        strokeWidth="2.5"
        strokeDasharray="4 2"
      />
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke="#A24322"
        strokeWidth="1.5"
      />
      <text
        x="50"
        y="45"
        textAnchor="middle"
        fill="#A24322"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1.5"
        fontFamily="serif"
      >
        {city}
      </text>
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fill="#A24322"
        fontSize="6"
        letterSpacing="1"
      >
        ✈ JIBLY ✈
      </text>
    </svg>
  );
}

export function ParisCasaRoute({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* City: Paris */}
      <g>
        <circle cx="40" cy="50" r="10" fill="#F26B3A" stroke="#2D2620" strokeWidth="2" />
        <text
          x="40"
          y="80"
          textAnchor="middle"
          fill="#2D2620"
          fontSize="14"
          fontFamily="Fraunces, serif"
          fontWeight="600"
        >
          Paris
        </text>
        <text x="40" y="30" textAnchor="middle" fontSize="14">🗼</text>
      </g>

      {/* Dashed curved route */}
      <motion.path
        d="M 50 50 Q 200 0 350 50"
        fill="none"
        stroke="#4A4136"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* Plane along path */}
      <motion.g
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        style={{
          offsetPath: 'path("M 50 50 Q 200 0 350 50")',
          offsetRotate: 'auto',
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <text fontSize="20">✈️</text>
      </motion.g>

      {/* City: Casablanca */}
      <g>
        <circle cx="360" cy="50" r="10" fill="#3A8BA3" stroke="#2D2620" strokeWidth="2" />
        <text
          x="360"
          y="80"
          textAnchor="middle"
          fill="#2D2620"
          fontSize="14"
          fontFamily="Fraunces, serif"
          fontWeight="600"
        >
          Casablanca
        </text>
        <text x="360" y="30" textAnchor="middle" fontSize="14">🌊</text>
      </g>
    </svg>
  );
}

export function BoardingPass({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main body */}
      <path
        d="M 5 10 L 140 10 Q 145 10 145 15 L 145 85 Q 145 90 140 90 L 5 90 Q 0 90 0 85 L 0 15 Q 0 10 5 10 Z"
        fill="#FFE4D1"
        stroke="#2D2620"
        strokeWidth="2.5"
      />
      {/* Tear-off stub */}
      <path
        d="M 155 10 L 195 10 Q 200 10 200 15 L 200 85 Q 200 90 195 90 L 155 90 Q 150 90 150 85 L 150 15 Q 150 10 155 10 Z"
        fill="#FFA678"
        stroke="#2D2620"
        strokeWidth="2.5"
      />
      {/* Perforated line */}
      <line
        x1="147.5"
        y1="14"
        x2="147.5"
        y2="86"
        stroke="#2D2620"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
      {/* Labels */}
      <text x="10" y="25" fontSize="6" fill="#A24322" fontWeight="700">JIBLY</text>
      <text x="10" y="45" fontSize="8" fill="#2D2620" fontWeight="700">PARIS</text>
      <text x="10" y="55" fontSize="5" fill="#4A4136">CDG</text>
      <text x="60" y="45" fontSize="8" fill="#2D2620" fontWeight="700">→</text>
      <text x="80" y="45" fontSize="8" fill="#2D2620" fontWeight="700">CASA</text>
      <text x="80" y="55" fontSize="5" fill="#4A4136">CMN</text>
      <text x="10" y="75" fontSize="5" fill="#4A4136">VOL 14:30</text>
      <text x="60" y="75" fontSize="5" fill="#4A4136">PORTE B12</text>
      {/* Barcode */}
      <g transform="translate(160, 20)">
        <rect width="1.5" height="60" fill="#2D2620" />
        <rect x="3" width="2" height="60" fill="#2D2620" />
        <rect x="7" width="1" height="60" fill="#2D2620" />
        <rect x="10" width="2.5" height="60" fill="#2D2620" />
        <rect x="15" width="1" height="60" fill="#2D2620" />
        <rect x="18" width="2" height="60" fill="#2D2620" />
        <rect x="22" width="1.5" height="60" fill="#2D2620" />
        <rect x="26" width="2" height="60" fill="#2D2620" />
      </g>
    </svg>
  );
}
