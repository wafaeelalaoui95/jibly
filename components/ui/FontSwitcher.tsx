'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Type, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type FontKey = 'manrope' | 'dmsans' | 'jakarta';

const FONTS: { key: FontKey; label: string; preview: string }[] = [
  { key: 'manrope', label: 'Manrope', preview: 'Aa' },
  { key: 'dmsans', label: 'DM Sans', preview: 'Aa' },
  { key: 'jakarta', label: 'Plus Jakarta', preview: 'Aa' },
];

const STORAGE_KEY = 'jibly-font';

export function FontSwitcher() {
  const [font, setFont] = useState<FontKey>('manrope');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as FontKey | null;
      if (saved && ['manrope', 'dmsans', 'jakarta'].includes(saved)) {
        setFont(saved);
        document.documentElement.setAttribute('data-font', saved);
      } else {
        document.documentElement.setAttribute('data-font', 'manrope');
      }
    } catch {}
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener('mousedown', onClickOutside);
      return () => document.removeEventListener('mousedown', onClickOutside);
    }
  }, [open]);

  function selectFont(f: FontKey) {
    setFont(f);
    document.documentElement.setAttribute('data-font', f);
    try {
      window.localStorage.setItem(STORAGE_KEY, f);
    } catch {}
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2.5 py-2 rounded-full hover:bg-lavender-50 text-ink-500 transition-colors"
        aria-label="Change font"
      >
        <Type className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 mt-2 w-52 bg-white border border-ink-50 rounded-2xl shadow-float overflow-hidden z-50"
          >
            <div className="px-4 py-2.5 text-xs font-bold text-ink-400 uppercase tracking-wider border-b border-ink-50">
              Police
            </div>
            {FONTS.map((f) => (
              <button
                key={f.key}
                onClick={() => selectFont(f.key)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-lavender-50 text-start',
                  font === f.key ? 'text-lavender-700 bg-lavender-50' : 'text-ink-500'
                )}
                style={{
                  fontFamily:
                    f.key === 'manrope'
                      ? 'Manrope, sans-serif'
                      : f.key === 'dmsans'
                      ? '"DM Sans", sans-serif'
                      : '"Plus Jakarta Sans", sans-serif',
                }}
              >
                <span className="text-xl font-bold w-7 text-center">{f.preview}</span>
                <span className="flex-1 font-semibold text-start">{f.label}</span>
                {font === f.key && <Check className="w-4 h-4 text-lavender-600" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
