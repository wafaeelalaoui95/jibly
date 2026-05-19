'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import { Logo } from '@/components/illustrations/Logo';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { FontSwitcher } from '@/components/ui/FontSwitcher';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { href: '/envoyer', label: t.nav_send },
    { href: '/voyager', label: t.nav_travel },
    { href: '/matches', label: t.nav_discover },
    { href: '/trust', label: t.nav_trust },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-cream-50/80 border-b border-ink-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo size="sm" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'px-4 py-2 text-sm font-semibold text-ink-400 rounded-full',
                  'hover:text-ink-600 hover:bg-lavender-50 transition-colors'
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-1">
            <FontSwitcher />
            <LanguageSwitcher compact />
            <Link
              href="/me"
              className="p-2 rounded-full hover:bg-lavender-50 text-ink-500 transition-colors"
              aria-label={t.nav_my_space}
              title={t.nav_my_space}
            >
              <User className="w-4 h-4" />
            </Link>
            <Link href="/envoyer" className="ms-1">
              <Button size="sm" variant="secondary">
                {t.nav_start}
              </Button>
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <LanguageSwitcher compact />
            <button
              className="p-2 rounded-xl hover:bg-lavender-50 text-ink-500"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-ink-50 bg-cream-50/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-3 text-base font-semibold text-ink-500 rounded-2xl hover:bg-lavender-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/me"
                className="px-4 py-3 text-base font-semibold text-ink-500 rounded-2xl hover:bg-lavender-50 flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <User className="w-4 h-4" />
                {t.nav_my_space}
              </Link>
              <div className="flex items-center gap-2 px-4 py-2 mt-1 border-t border-ink-50">
                <FontSwitcher />
                <span className="text-xs text-ink-400">Police</span>
              </div>
              <Link href="/envoyer" onClick={() => setOpen(false)}>
                <Button fullWidth variant="secondary" className="mt-2">
                  {t.nav_start}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
