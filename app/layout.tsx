import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Jibly — Envoyez vos documents entre Paris et Casablanca',
  description:
    'Jibly met en relation des expéditeurs et des voyageurs déjà sur la route Paris–Casablanca pour acheminer documents, clés et petits objets personnels en toute confiance.',
  keywords: [
    'Jibly',
    'Paris Casablanca',
    'envoi documents',
    'voyageurs',
    'transport peer-to-peer',
    'communauté franco-marocaine',
  ],
  openGraph: {
    title: 'Jibly — La communauté qui transporte vos petits envois',
    description:
      'Envoyez vos documents, clés ou médicaments entre Paris et Casablanca grâce à des voyageurs de confiance.',
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
