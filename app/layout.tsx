import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Jibly — Envoyez vos affaires avec un voyageur',
  description:
    'Quelqu\'un voyage déjà dans votre direction. Confiez-lui vos documents, clés ou petits objets. Une communauté de voyageurs vérifiés à travers le monde.',
  keywords: [
    'Jibly',
    'envoi documents',
    'voyageurs',
    'communauté',
    'transport peer-to-peer',
    'envoi international',
  ],
  openGraph: {
    title: 'Jibly — Quelqu\'un voyage déjà dans votre direction',
    description:
      'Envoyez vos documents, clés ou petits objets via une communauté de voyageurs vérifiés.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-cream-50 text-ink-500">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
