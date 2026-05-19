import Link from 'next/link';
import { Logo } from '@/components/illustrations/Logo';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-200 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-ink-400 max-w-xs leading-relaxed">
              La communauté qui rapproche Paris et Casablanca, un voyage à la fois.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink-500 mb-3 font-sans">
              Plateforme
            </h4>
            <ul className="space-y-2 text-sm text-ink-400">
              <li>
                <Link href="/envoyer" className="hover:text-peach-500">
                  Envoyer un item
                </Link>
              </li>
              <li>
                <Link href="/voyager" className="hover:text-peach-500">
                  Je voyage bientôt
                </Link>
              </li>
              <li>
                <Link href="/matches" className="hover:text-peach-500">
                  Voir les voyageurs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink-500 mb-3 font-sans">
              Confiance
            </h4>
            <ul className="space-y-2 text-sm text-ink-400">
              <li>
                <Link href="/trust" className="hover:text-peach-500">
                  Sécurité
                </Link>
              </li>
              <li>
                <Link href="/trust#objets" className="hover:text-peach-500">
                  Objets autorisés
                </Link>
              </li>
              <li>
                <Link href="/trust#cgu" className="hover:text-peach-500">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink-500 mb-3 font-sans">
              Communauté
            </h4>
            <ul className="space-y-2 text-sm text-ink-400">
              <li>Instagram</li>
              <li>Newsletter</li>
              <li>Nous contacter</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-300">
            © 2026 Jibly. Tous droits réservés.
          </p>
          <p className="text-xs text-ink-300 flex items-center gap-1.5">
            Fait avec <Heart className="h-3 w-3 fill-peach-400 text-peach-400" /> entre
            Paris et Casablanca
          </p>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-cream-50 border border-cream-200">
          <p className="text-xs text-ink-300 text-center leading-relaxed">
            <strong className="text-ink-400">Mention importante :</strong> Jibly
            est une plateforme de mise en relation. Les utilisateurs sont
            responsables de vérifier que l'objet est autorisé au transport. Jibly
            n'est pas un transporteur et n'effectue pas la livraison physique des
            objets.
          </p>
        </div>
      </div>
    </footer>
  );
}
