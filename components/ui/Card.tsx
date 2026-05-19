'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  tilt?: 'none' | 'left' | 'right';
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ tilt = 'none', hover = true, className, children, ...props }, ref) => {
    const tiltClass =
      tilt === 'left'
        ? '-rotate-1'
        : tilt === 'right'
        ? 'rotate-1'
        : 'rotate-0';

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4, rotate: 0 } : undefined}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className={cn(
          'rounded-3xl bg-white p-6 shadow-card border border-ink-50',
          tiltClass,
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
