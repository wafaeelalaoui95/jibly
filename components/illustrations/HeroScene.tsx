'use client';

import { motion } from 'framer-motion';

/**
 * HeroScene
 * Scène d'illustration premium pour le hero:
 *  - personnage moderne avec valise et chapeau
 *  - avion qui passe doucement
 *  - nuages flottants
 *  - éléments de globe stylisés
 *
 * Style: flat illustration, palette pastel violet/jaune.
 * Animations: micro-mouvements (float, plane-pass, wheel-spin).
 */
export function HeroScene({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Soft circular background */}
        <defs>
          <radialGradient id="heroBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ECE6FF" />
            <stop offset="60%" stopColor="#F6F4FF" />
            <stop offset="100%" stopColor="#FEFCF8" />
          </radialGradient>
          <linearGradient id="suitcase" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD966" />
            <stop offset="100%" stopColor="#F4B81E" />
          </linearGradient>
          <linearGradient id="suitcaseShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE899" />
            <stop offset="100%" stopColor="#FFD966" />
          </linearGradient>
          <linearGradient id="shirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A083FB" />
            <stop offset="100%" stopColor="#8466F0" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle cx="250" cy="250" r="230" fill="url(#heroBg)" />

        {/* Decorative ring */}
        <circle
          cx="250"
          cy="250"
          r="220"
          fill="none"
          stroke="#D9CCFF"
          strokeWidth="1.5"
          strokeDasharray="3 8"
          opacity="0.6"
        />

        {/* === Floating elements (back layer) === */}
        {/* Cloud back */}
        <motion.g
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="100" cy="120" rx="28" ry="14" fill="#FFFFFF" opacity="0.9" />
          <ellipse cx="118" cy="115" rx="22" ry="12" fill="#FFFFFF" opacity="0.9" />
          <ellipse cx="85" cy="125" rx="18" ry="10" fill="#FFFFFF" opacity="0.9" />
        </motion.g>

        {/* Cloud right */}
        <motion.g
          animate={{ x: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="400" cy="160" rx="32" ry="16" fill="#FFFFFF" opacity="0.9" />
          <ellipse cx="420" cy="153" rx="24" ry="13" fill="#FFFFFF" opacity="0.9" />
        </motion.g>

        {/* Plane crossing */}
        <motion.g
          initial={{ x: -100, y: 0 }}
          animate={{ x: [-100, 580], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          <g transform="translate(0, 90)">
            {/* Plane body */}
            <path
              d="M 0 0 L 38 -4 L 50 -2 L 50 6 L 38 8 L 0 4 Z"
              fill="#8466F0"
            />
            <path
              d="M 18 -4 L 24 -16 L 28 -16 L 26 -2 Z"
              fill="#6B4DD8"
            />
            <path
              d="M 18 4 L 24 18 L 28 18 L 26 6 Z"
              fill="#6B4DD8"
            />
            <path
              d="M 42 -2 L 50 -8 L 52 -2 L 50 2 Z"
              fill="#5538B8"
            />
            {/* Window */}
            <circle cx="34" cy="2" r="1.5" fill="#FFFBED" />
            {/* Trail */}
            <path
              d="M -2 2 Q -15 2, -25 2"
              stroke="#D9CCFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 4"
              fill="none"
              opacity="0.7"
            />
          </g>
        </motion.g>

        {/* Floating passport stamp circles */}
        <motion.g
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="80" cy="280" r="22" fill="#FFE899" opacity="0.4" />
          <circle cx="80" cy="280" r="22" fill="none" stroke="#F4B81E" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.6" />
          <text x="80" y="284" textAnchor="middle" fontSize="10" fill="#D49906" fontWeight="bold">✦</text>
        </motion.g>

        <motion.g
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <circle cx="430" cy="290" r="18" fill="#ECE6FF" opacity="0.6" />
          <text x="430" y="295" textAnchor="middle" fontSize="14">📍</text>
        </motion.g>

        {/* === Character (center) === */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <g transform="translate(180, 160)">
            {/* Character shadow */}
            <ellipse cx="70" cy="230" rx="55" ry="6" fill="#2A241D" opacity="0.08" />

            {/* === LEGS === */}
            {/* Back leg */}
            <motion.g
              style={{ transformOrigin: '60px 175px' }}
              animate={{ rotate: [3, -8, 3] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect x="55" y="170" width="14" height="50" rx="6" fill="#4F4639" />
              {/* Shoe */}
              <ellipse cx="62" cy="222" rx="10" ry="5" fill="#2A241D" />
            </motion.g>

            {/* Front leg */}
            <motion.g
              style={{ transformOrigin: '78px 175px' }}
              animate={{ rotate: [-3, 8, -3] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect x="73" y="170" width="14" height="50" rx="6" fill="#4F4639" />
              <ellipse cx="80" cy="222" rx="10" ry="5" fill="#2A241D" />
            </motion.g>

            {/* === BODY === */}
            {/* Torso */}
            <path
              d="M 50 110 Q 50 100, 60 95 L 85 95 Q 95 100, 95 110 L 95 175 Q 95 180, 90 180 L 55 180 Q 50 180, 50 175 Z"
              fill="url(#shirt)"
            />
            {/* Shirt highlight */}
            <path
              d="M 55 105 Q 55 100, 60 98 L 70 98 L 70 120 L 55 120 Z"
              fill="#BFA8FF"
              opacity="0.4"
            />

            {/* === ARMS === */}
            {/* Back arm (subtle swing) */}
            <motion.g
              style={{ transformOrigin: '53px 115px' }}
              animate={{ rotate: [-5, 8, -5] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect x="46" y="113" width="12" height="48" rx="6" fill="url(#shirt)" />
              {/* Hand */}
              <circle cx="52" cy="166" r="7" fill="#E5B896" />
            </motion.g>

            {/* Front arm holding suitcase */}
            <motion.g
              style={{ transformOrigin: '92px 115px' }}
              animate={{ rotate: [3, -2, 3] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <rect x="87" y="113" width="12" height="52" rx="6" fill="url(#shirt)" />
              <circle cx="93" cy="168" r="7" fill="#E5B896" />
            </motion.g>

            {/* === HEAD === */}
            {/* Neck */}
            <rect x="66" y="85" width="14" height="15" fill="#E5B896" />

            {/* Face */}
            <ellipse cx="73" cy="70" rx="22" ry="24" fill="#E5B896" />

            {/* Hair / hat */}
            <path
              d="M 51 65 Q 50 45, 73 42 Q 96 45, 95 65 Q 90 55, 73 53 Q 56 55, 51 65 Z"
              fill="#2A241D"
            />
            {/* Beanie style hat */}
            <path
              d="M 52 60 Q 52 38, 73 36 Q 94 38, 94 60 L 94 64 Q 73 56, 52 64 Z"
              fill="#8466F0"
            />
            <ellipse cx="73" cy="36" rx="6" ry="3" fill="#FFD966" />

            {/* Eyes */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.92, 0.95, 0.98, 1] }}
              style={{ transformOrigin: '73px 70px' }}
            >
              <circle cx="65" cy="70" r="2" fill="#2A241D" />
              <circle cx="81" cy="70" r="2" fill="#2A241D" />
            </motion.g>

            {/* Cheeks */}
            <circle cx="60" cy="78" r="3" fill="#FCE4E4" opacity="0.6" />
            <circle cx="86" cy="78" r="3" fill="#FCE4E4" opacity="0.6" />

            {/* Smile */}
            <path
              d="M 67 80 Q 73 85, 79 80"
              stroke="#2A241D"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* === SUITCASE === */}
            <g transform="translate(90, 130)">
              {/* Handle */}
              <rect x="8" y="-4" width="14" height="6" rx="2" fill="#4F4639" />
              <rect x="12" y="-12" width="6" height="12" fill="#4F4639" />

              {/* Body */}
              <rect x="0" y="2" width="30" height="44" rx="5" fill="url(#suitcase)" />
              <rect x="0" y="2" width="30" height="6" fill="url(#suitcaseShade)" />

              {/* Stripes */}
              <rect x="0" y="20" width="30" height="2" fill="#D49906" opacity="0.5" />
              <rect x="0" y="28" width="30" height="2" fill="#D49906" opacity="0.5" />

              {/* Tag */}
              <circle cx="6" cy="14" r="3" fill="#FFFBED" stroke="#D49906" strokeWidth="0.8" />

              {/* Wheels */}
              <motion.circle
                cx="6"
                cy="48"
                r="3"
                fill="#2A241D"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '6px 48px' }}
              />
              <motion.circle
                cx="24"
                cy="48"
                r="3"
                fill="#2A241D"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '24px 48px' }}
              />
            </g>
          </g>
        </motion.g>

        {/* === Decorative dots / stars === */}
        <motion.circle
          cx="60"
          cy="200"
          r="3"
          fill="#FFD966"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="450"
          cy="220"
          r="3"
          fill="#A083FB"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
        />
        <motion.circle
          cx="120"
          cy="380"
          r="3"
          fill="#8BC3DC"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
        <motion.circle
          cx="420"
          cy="400"
          r="2.5"
          fill="#FFD966"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
      </svg>
    </div>
  );
}

/**
 * Mini character (for cards / smaller usage)
 */
export function MiniTraveler({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="40" cy="40" r="38" fill="#ECE6FF" />
      <g transform="translate(22, 18)">
        <ellipse cx="18" cy="20" rx="11" ry="12" fill="#E5B896" />
        <path d="M 7 18 Q 7 8, 18 7 Q 29 8, 29 18 Q 26 13, 18 12 Q 10 13, 7 18 Z" fill="#8466F0" />
        <circle cx="14" cy="20" r="1.2" fill="#2A241D" />
        <circle cx="22" cy="20" r="1.2" fill="#2A241D" />
        <path d="M 15 25 Q 18 28, 21 25" stroke="#2A241D" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <rect x="10" y="32" width="16" height="20" rx="3" fill="#8466F0" />
        <rect x="28" y="38" width="10" height="14" rx="2" fill="#FFD966" />
      </g>
    </svg>
  );
}
