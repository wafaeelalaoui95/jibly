'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  FileText,
  Search,
  PackageCheck,
  Clock,
  Wallet,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WalkingTraveler } from '@/components/illustrations/WalkingTraveler';
import {
  Cloud,
  ParisCasaRoute,
  PassportStamp,
  BoardingPass,
  LuggageTag,
  Passport,
} from '@/components/illustrations/Travel';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative bg-warm-mesh pt-12 pb-20 sm:pt-20 sm:pb-32">
        {/* Drifting clouds */}
        <Cloud
          className="absolute top-12 left-[5%] opacity-70 animate-cloud-drift"
          scale={0.8}
        />
        <Cloud
          className="absolute top-32 right-[8%] opacity-60 animate-cloud-drift"
          scale={1}
        />
        <Cloud
          className="absolute top-48 left-[40%] opacity-40 animate-cloud-drift"
          scale={0.6}
        />

        {/* Grain overlay for warmth */}
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left side - copy */}
            <div className="lg:col-span-7 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="peach" icon={<Sparkles className="h-3 w-3" />}>
                  Communauté Paris ↔ Casablanca
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-ink-600 leading-[1.05] text-balance"
              >
                Envoyez vos documents{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-peach-500">
                    entre Paris
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 2 8 Q 100 -2 198 6"
                      fill="none"
                      stroke="#FFC9A8"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                et Casablanca grâce aux voyageurs de confiance.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-ink-400 leading-relaxed max-w-2xl"
              >
                Une plateforme communautaire qui met en relation expéditeurs et
                voyageurs déjà sur la route. Pour vos documents, vos clés ou un
                petit objet qui doit absolument arriver à bon port.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link href="/envoyer">
                  <Button size="lg" variant="secondary" className="group">
                    Je veux envoyer un item
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/voyager">
                  <Button size="lg" variant="outline">
                    Je voyage bientôt
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 flex flex-wrap gap-6 items-center"
              >
                <div className="flex -space-x-2">
                  {['YB', 'MA', 'SL', 'KT'].map((initials, i) => {
                    const colors = ['bg-peach-300', 'bg-sky-300', 'bg-sage-300', 'bg-sand-300'];
                    return (
                      <div
                        key={initials}
                        className={`h-10 w-10 rounded-full ${colors[i]} border-2 border-cream-50 flex items-center justify-center text-xs font-bold text-ink-600`}
                      >
                        {initials}
                      </div>
                    );
                  })}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-ink-500">
                    Déjà 1200+ voyageurs
                  </p>
                  <p className="text-ink-400 text-xs">
                    qui rendent service à la communauté
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right side - mascot illustration */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                {/* Background blob */}
                <div className="absolute inset-0 -m-8">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <path
                      d="M 200 30 Q 340 60 360 200 Q 340 360 200 370 Q 60 360 40 200 Q 60 60 200 30 Z"
                      fill="#FFE4D1"
                      opacity="0.6"
                    />
                  </svg>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute top-0 right-4 z-20"
                  animate={{ rotate: [0, -10, 0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <PassportStamp className="w-24 h-24" city="CASA" />
                </motion.div>

                <motion.div
                  className="absolute bottom-12 left-0 z-20"
                  animate={{ rotate: [-8, 8, -8] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <LuggageTag className="w-20 h-26" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-4 z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <BoardingPass className="w-40 h-20 rotate-12" />
                </motion.div>

                {/* The walking traveler mascot */}
                <div className="relative z-10 flex justify-center">
                  <WalkingTraveler className="w-72 h-72 sm:w-80 sm:h-80" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Animated route */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <ParisCasaRoute className="w-full h-24" />
          </motion.div>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <section className="py-20 sm:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="terra">Le problème</Badge>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-ink-600 leading-tight text-balance">
                Envoyer un simple document peut coûter{' '}
                <span className="italic text-terra-500">une fortune</span>.
              </h2>
              <p className="mt-6 text-lg text-ink-400 leading-relaxed">
                Vous avez oublié des clés chez votre mère à Casablanca ? Votre
                cousin attend une attestation administrative urgente à Paris ?
              </p>
              <p className="mt-4 text-lg text-ink-400 leading-relaxed">
                Les services de courrier express facturent souvent{' '}
                <strong className="text-ink-500">60 à 150 €</strong> pour une
                enveloppe, avec des délais incertains et beaucoup de paperasse.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: '60-150€', l: 'Coût moyen', c: 'terra' },
                  { v: '5-10j', l: 'Délai', c: 'sand' },
                  { v: '∞', l: 'Paperasse', c: 'peach' },
                ].map((s, i) => (
                  <Card
                    key={s.l}
                    tilt={i === 1 ? 'right' : i === 0 ? 'left' : 'none'}
                    className="text-center bg-cream-100"
                  >
                    <div className="text-3xl font-bold text-ink-600 font-display">
                      {s.v}
                    </div>
                    <div className="text-xs text-ink-400 mt-1">{s.l}</div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Illustrated comparison */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-cream-100 to-peach-50 p-8" hover={false}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-lg font-semibold">
                    Service classique
                  </span>
                  <Badge variant="terra">Cher</Badge>
                </div>
                <div className="space-y-3">
                  {[
                    'Tarifs élevés pour de petits objets',
                    'Aller au bureau de poste',
                    'Délais variables',
                    'Aucune relation humaine',
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-ink-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-terra-400" />
                      {t}
                    </div>
                  ))}
                </div>
              </Card>

              <Card
                tilt="right"
                className="absolute -bottom-8 -right-4 bg-gradient-to-br from-sage-100 to-cream-100 max-w-sm"
                hover={false}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-lg font-semibold">
                    Avec Jibly
                  </span>
                  <Badge variant="sage">Communauté</Badge>
                </div>
                <div className="space-y-3">
                  {[
                    '15-45€ de compensation conviviale',
                    'Tout se passe en ligne',
                    'Délai aligné sur un vol réel',
                    'Un humain qui rend service',
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-ink-500 font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-sage-400" />
                      {t}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTION / 3 STEPS ============ */}
      <section className="py-20 sm:py-28 bg-cream-100 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 opacity-10">
          <Passport className="w-80 h-80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="sage">La solution</Badge>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-ink-600 leading-tight text-balance">
              Quelqu'un de la communauté fait{' '}
              <span className="italic text-sage-500">déjà le trajet</span>.
              <br /> Pourquoi pas avec votre envoi ?
            </h2>
            <p className="mt-6 text-lg text-ink-400">
              Chaque jour, des dizaines de voyageurs font Paris-Casablanca. Jibly
              les met en relation avec ceux qui en ont besoin.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                icon: FileText,
                step: '01',
                title: 'Publiez votre demande',
                desc: 'Décrivez votre objet (autorisé), la date souhaitée et votre compensation. Cela prend 2 minutes.',
                color: 'peach',
                bg: 'bg-peach-100',
                tilt: 'left' as const,
              },
              {
                icon: Search,
                step: '02',
                title: 'Trouvez un voyageur',
                desc: 'Découvrez les voyageurs vérifiés qui font le trajet aux dates qui vous arrangent.',
                color: 'sky',
                bg: 'bg-sky-100',
                tilt: 'none' as const,
              },
              {
                icon: PackageCheck,
                step: '03',
                title: 'Remettez en toute sécurité',
                desc: 'Convenez d\'un point de rencontre, échangez les coordonnées et confirmez la réception.',
                color: 'sage',
                bg: 'bg-sage-100',
                tilt: 'right' as const,
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card tilt={s.tilt} className={`${s.bg} border-2 border-cream-50 h-full`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-cream-50 flex items-center justify-center shadow-soft">
                      <s.icon className="h-7 w-7 text-ink-500" />
                    </div>
                    <span className="font-display text-5xl font-bold text-ink-200 opacity-50">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-ink-600 leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base text-ink-400 leading-relaxed">
                    {s.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST ============ */}
      <section className="py-20 sm:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="sky" icon={<ShieldCheck className="h-3 w-3" />}>
              Confiance & sécurité
            </Badge>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-ink-600 leading-tight text-balance">
              Une communauté{' '}
              <span className="italic text-sky-500">vérifiée et bienveillante</span>
            </h2>
            <p className="mt-6 text-lg text-ink-400">
              Jibly repose sur la confiance entre membres. Chaque profil est
              vérifié, et chaque échange est encadré.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Identité vérifiée',
                desc: 'Tous les voyageurs présentent une pièce d\'identité valide avant leur premier trajet.',
              },
              {
                icon: HeartHandshake,
                title: 'Communauté de confiance',
                desc: 'Notes, avis et historique transparents. Vous savez à qui vous avez affaire.',
              },
              {
                icon: Users,
                title: 'Objets autorisés uniquement',
                desc: 'Notre liste claire d\'objets acceptés vous protège, vous et le voyageur.',
              },
            ].map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <div className="h-12 w-12 rounded-2xl bg-sky-100 flex items-center justify-center mb-4">
                    <t.icon className="h-6 w-6 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-600 mb-2 font-display">
                    {t.title}
                  </h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{t.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/trust">
              <Button variant="outline" size="md">
                En savoir plus sur la sécurité
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ DISCLAIMER ============ */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card
            className="bg-sand-50 border-sand-200 border-2 text-center"
            hover={false}
          >
            <div className="flex items-center justify-center mb-3">
              <div className="h-12 w-12 rounded-full bg-sand-200 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-sand-500" />
              </div>
            </div>
            <p className="text-base text-ink-500 leading-relaxed max-w-2xl mx-auto">
              <strong className="text-ink-600">
                Jibly est une plateforme de mise en relation.
              </strong>{' '}
              Les utilisateurs sont responsables de vérifier que l'objet est
              autorisé au transport. Jibly n'est pas un transporteur et
              n'effectue aucune livraison physique.
            </p>
          </Card>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card
            className="bg-gradient-to-br from-ink-500 to-ink-600 border-ink-500 text-cream-50 p-12 text-center relative overflow-hidden"
            hover={false}
          >
            <div className="absolute top-4 right-8 opacity-20">
              <Passport className="w-32 h-40" />
            </div>
            <div className="absolute bottom-4 left-8 opacity-20">
              <LuggageTag className="w-24 h-32" />
            </div>

            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-balance text-cream-50">
                Prêt à rejoindre la communauté ?
              </h2>
              <p className="mt-4 text-lg text-cream-200 max-w-xl mx-auto">
                Que vous soyez expéditeur ou voyageur, votre prochain envoi commence ici.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/envoyer">
                  <Button size="lg" variant="secondary">
                    Envoyer un item
                  </Button>
                </Link>
                <Link href="/voyager">
                  <Button
                    size="lg"
                    className="bg-cream-50 text-ink-500 hover:bg-cream-100"
                  >
                    Je voyage bientôt
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
