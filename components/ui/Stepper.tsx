'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface StepperProps {
  steps: string[];
  current: number;
}

export function Stepper({ steps, current }: StepperProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-2">
        {steps.map((label, i) => {
          const isDone = i < current;
          const isActive = i === current;
          return (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-2 relative">
                <motion.div
                  className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold text-sm border-2 ${
                    isDone
                      ? 'bg-sage-300 border-sage-300 text-cream-50'
                      : isActive
                      ? 'bg-peach-400 border-peach-400 text-cream-50'
                      : 'bg-cream-50 border-cream-200 text-ink-300'
                  }`}
                  animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {isDone ? <Check className="h-5 w-5" /> : i + 1}
                </motion.div>
                <span
                  className={`hidden sm:block text-xs font-medium ${
                    isActive ? 'text-ink-500' : 'text-ink-300'
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-cream-200 mx-2 relative -top-3 sm:-top-3">
                  <motion.div
                    className="h-full bg-sage-300"
                    initial={{ width: 0 }}
                    animate={{ width: isDone ? '100%' : '0%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
