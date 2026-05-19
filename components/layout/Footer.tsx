import Link from 'next/link';
import { Logo } from '@/components/illustrations/Logo';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-ink-50 mt-24 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo size="sm" />
            <p className="mt-4 text-sm text-ink-300 max-w-xs leading-relaxed">
              Une communauté de voyageurs vérifiés, partout dans le monde.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-ink-500 mb-3 uppercase tracking-wider">
              Plateforme
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-300">
              <li>
                <Link href="/envoyer" className="hover:text-lavender-600 transition-colors">
                  Envoyer
                </Link>
              </li>
              <li>
                <Link href="/voyager" className="hover:text-lavender-600 transition-colors">
                  Voyager
                </Link>
              </li>
              <li>
                <Link href="/matches" className="hover:text-lavender-600 transition-colors">
                  Découvrir
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-ink-500 mb-3 uppercase tracking-wider">
              Confiance
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-300">
              <li>
                <Link href="/trust" className="hover:text-lavender-600 transition-colors">
                  Sécurité
                </Link>
              </li>
              <li>
                <Link href="/trust#objets" className="hover:text-lavender-600 transition-colors">
                  Objets autorisés
                </Link>
              </li>
              <li>
                <Link href="/trust#cgu" className="hover:text-lavender-600 transition-colors">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-ink-500 mb-3 uppercase tracking-wider">
              Communauté
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-300">
              <li className="hover:text-lavender-600 transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-lavender-600 transition-colors cursor-pointer">Newsletter</li>
              <li className="hover:text-lavender-600 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-300">© 2026 Jibly</p>
          <p className="text-xs text-ink-300 flex items-center gap-1.5">
            Fait avec <Heart className="h-3 w-3 fill-lavender-400 text-lavender-400" /> pour les voyageurs
          </p>
        </div>
      </div>
    </footer>
  );
}
