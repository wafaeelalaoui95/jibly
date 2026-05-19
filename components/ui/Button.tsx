'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-ink-500 text-cream-50 hover:bg-ink-600 shadow-soft hover:shadow-float',
  secondary:
    'bg-lavender-500 text-white hover:bg-lavender-600 shadow-glow hover:shadow-float',
  ghost: 'bg-transparent text-ink-500 hover:bg-ink-50',
  outline:
    'bg-white text-ink-500 border-2 border-ink-100 hover:border-ink-500 hover:bg-ink-500 hover:text-white',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2.5 text-base rounded-2xl',
  md: 'px-6 py-3.5 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-3xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
