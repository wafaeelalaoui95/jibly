'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/illustrations/Logo';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/envoyer', label: 'Envoyer un item' },
  { href: '/voyager', label: 'Je voyage bientôt' },
  { href: '/matches', label: 'Voir les voyageurs' },
  { href: '/trust', label: 'Confiance & sécurité' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream-50/80 border-b border-cream-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'px-4 py-2 text-sm font-semibold text-ink-400 rounded-full',
                  'hover:text-ink-600 hover:bg-cream-100 transition-colors'
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/envoyer">
              <Button size="sm" variant="secondary">
                Commencer
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-cream-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cream-200 bg-cream-50"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-3 text-sm font-semibold text-ink-500 rounded-2xl hover:bg-cream-100"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/envoyer" onClick={() => setOpen(false)}>
                <Button fullWidth variant="secondary" className="mt-2">
                  Commencer
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
