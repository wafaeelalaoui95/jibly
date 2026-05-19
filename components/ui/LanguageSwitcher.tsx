'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useI18n, LOCALES } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((l) => l.code === locale);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener('mousedown', onClickOutside);
      return () => document.removeEventListener('mousedown', onClickOutside);
    }
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-2 rounded-full transition-colors',
          compact
            ? 'px-2.5 py-2 hover:bg-lavender-50 text-ink-500'
            : 'px-3 py-2 hover:bg-lavender-50 text-ink-500'
        )}
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-semibold">{current?.flag}</span>
        {!compact && <span className="text-sm font-semibold">{current?.label}</span>}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 mt-2 w-48 bg-white border border-ink-50 rounded-2xl shadow-float overflow-hidden z-50"
          >
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors hover:bg-lavender-50 text-start',
                  locale === l.code ? 'text-lavender-700 bg-lavender-50' : 'text-ink-500'
                )}
              >
                <span className="text-lg">{l.flag}</span>
                <span className="flex-1 text-start">{l.label}</span>
                {locale === l.code && <Check className="w-4 h-4 text-lavender-600" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
