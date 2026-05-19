'use client';

import { motion } from 'framer-motion';

/**
 * The Jibly mascot: an illustrated traveler walking with a suitcase.
 * Animates legs/arms and looks around occasionally.
 */
export function WalkingTraveler({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Shadow */}
      <motion.ellipse
        cx="100"
        cy="226"
        rx="50"
        ry="5"
        fill="#4A4136"
        opacity="0.15"
        animate={{ rx: [50, 45, 50] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Suitcase wheels */}
      <circle cx="148" cy="200" r="5" fill="#2D2620" />
      <circle cx="148" cy="200" r="2" fill="#7C7264" />

      {/* Suitcase body */}
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect
          x="128"
          y="138"
          width="40"
          height="62"
          rx="6"
          fill="#F26B3A"
          stroke="#2D2620"
          strokeWidth="2.5"
        />
        <rect
          x="128"
          y="158"
          width="40"
          height="3"
          fill="#2D2620"
          opacity="0.7"
        />
        {/* Luggage tag */}
        <rect
          x="135"
          y="148"
          width="14"
          height="9"
          rx="2"
          fill="#FDFAF5"
          stroke="#2D2620"
          strokeWidth="1.5"
        />
        <line
          x1="142"
          y1="144"
          x2="142"
          y2="148"
          stroke="#2D2620"
          strokeWidth="1.5"
        />
        {/* Handle */}
        <rect
          x="142"
          y="118"
          width="12"
          height="22"
          fill="none"
          stroke="#2D2620"
          strokeWidth="2.5"
          rx="2"
        />
      </motion.g>

      {/* Body (torso) */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Legs (walking animation) */}
        <motion.g
          animate={{
            rotate: [-15, 15, -15],
          }}
          style={{ transformOrigin: '92px 168px' }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect
            x="86"
            y="168"
            width="12"
            height="45"
            rx="6"
            fill="#3A8BA3"
            stroke="#2D2620"
            strokeWidth="2.5"
          />
          <rect
            x="84"
            y="208"
            width="18"
            height="10"
            rx="3"
            fill="#2D2620"
          />
        </motion.g>

        <motion.g
          animate={{
            rotate: [15, -15, 15],
          }}
          style={{ transformOrigin: '102px 168px' }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect
            x="100"
            y="168"
            width="12"
            height="45"
            rx="6"
            fill="#3A8BA3"
            stroke="#2D2620"
            strokeWidth="2.5"
          />
          <rect
            x="98"
            y="208"
            width="18"
            height="10"
            rx="3"
            fill="#2D2620"
          />
        </motion.g>

        {/* Torso (jacket) */}
        <path
          d="M 76 110 Q 76 100 86 100 L 116 100 Q 126 100 126 110 L 126 170 Q 126 175 121 175 L 81 175 Q 76 175 76 170 Z"
          fill="#7A9F60"
          stroke="#2D2620"
          strokeWidth="2.5"
        />
        {/* Jacket buttons */}
        <circle cx="101" cy="125" r="2" fill="#2D2620" />
        <circle cx="101" cy="140" r="2" fill="#2D2620" />
        <circle cx="101" cy="155" r="2" fill="#2D2620" />

        {/* Arm holding suitcase (right) */}
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          style={{ transformOrigin: '125px 115px' }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect
            x="120"
            y="112"
            width="11"
            height="32"
            rx="5"
            fill="#7A9F60"
            stroke="#2D2620"
            strokeWidth="2.5"
          />
          {/* Hand */}
          <circle
            cx="125"
            cy="142"
            r="6"
            fill="#E5C5A8"
            stroke="#2D2620"
            strokeWidth="2"
          />
        </motion.g>

        {/* Arm swinging (left) */}
        <motion.g
          animate={{ rotate: [20, -20, 20] }}
          style={{ transformOrigin: '76px 115px' }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect
            x="70"
            y="112"
            width="11"
            height="32"
            rx="5"
            fill="#7A9F60"
            stroke="#2D2620"
            strokeWidth="2.5"
          />
          <circle
            cx="75"
            cy="142"
            r="6"
            fill="#E5C5A8"
            stroke="#2D2620"
            strokeWidth="2"
          />
        </motion.g>

        {/* Head */}
        <motion.g
          animate={{ rotate: [0, -8, 0, 8, 0] }}
          style={{ transformOrigin: '100px 90px' }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          {/* Hair (back) */}
          <path
            d="M 78 78 Q 75 60 100 56 Q 125 60 122 78 Q 122 70 100 68 Q 78 70 78 78 Z"
            fill="#2D2620"
          />
          {/* Face */}
          <circle
            cx="100"
            cy="84"
            r="20"
            fill="#E5C5A8"
            stroke="#2D2620"
            strokeWidth="2.5"
          />
          {/* Hair front */}
          <path
            d="M 82 75 Q 90 64 100 66 Q 110 64 118 75 Q 115 70 100 70 Q 85 70 82 75 Z"
            fill="#2D2620"
          />
          {/* Eyes */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            style={{ transformOrigin: 'center' }}
            transition={{
              duration: 4,
              repeat: Infinity,
              times: [0, 0.45, 0.5, 0.55, 1],
            }}
          >
            <circle cx="93" cy="86" r="1.8" fill="#2D2620" />
            <circle cx="107" cy="86" r="1.8" fill="#2D2620" />
          </motion.g>
          {/* Smile */}
          <path
            d="M 94 94 Q 100 99 106 94"
            stroke="#2D2620"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Cheek */}
          <circle cx="89" cy="92" r="2.5" fill="#FFA678" opacity="0.5" />
          <circle cx="111" cy="92" r="2.5" fill="#FFA678" opacity="0.5" />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}
