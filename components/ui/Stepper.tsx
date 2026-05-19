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
                      ? 'bg-mint-300 border-mint-300 text-white'
                      : isActive
                      ? 'bg-lavender-500 border-lavender-500 text-white'
                      : 'bg-white border-ink-100 text-ink-300'
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
                <div className="flex-1 h-0.5 bg-ink-100 mx-2 relative -top-3 sm:-top-3">
                  <motion.div
                    className="h-full bg-mint-300"
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
