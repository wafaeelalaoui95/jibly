'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  XCircle,
  CheckCircle2,
  MessageCircle,
  Flag,
  Lock,
  Heart,
  Sparkles,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ITEM_CATEGORIES, FORBIDDEN_CATEGORIES } from '@/lib/constants';

export default function TrustPage() {
  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="bg-warm-mesh py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="sky" icon={<ShieldCheck className="h-3 w-3" />}>
            Confiance & sécurité
          </Badge>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold text-ink-600 leading-tight text-balance">
            La confiance est{' '}
            <span className="italic text-sky-500">le cœur</span> de Jibly
          </h1>
          <p className="mt-6 text-lg text-ink-400 max-w-2xl mx-auto leading-relaxed">
            Une communauté ne fonctionne que si chacun se sent en sécurité. Voici
            comment Jibly protège ses membres, expéditeurs comme voyageurs.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-600 text-center mb-12 font-display">
            Nos engagements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Vérification d\'identité',
                desc: 'Tous les voyageurs réguliers passent par une vérification d\'identité (CNI, passeport ou permis).',
                color: 'sky',
                bg: 'bg-sky-100',
              },
              {
                icon: Lock,
                title: 'Données protégées',
                desc: 'Vos informations personnelles ne sont jamais partagées sans votre accord. Les documents d\'identité sont chiffrés.',
                color: 'sage',
                bg: 'bg-sage-100',
              },
              {
                icon: MessageCircle,
                title: 'Messagerie sécurisée',
                desc: 'Toute communication passe par notre messagerie. Les numéros de téléphone ne sont échangés qu\'après accord.',
                color: 'peach',
                bg: 'bg-peach-100',
              },
              {
                icon: Flag,
                title: 'Signalement rapide',
                desc: 'Un bouton "Signaler" sur chaque profil. Notre équipe traite chaque signalement en moins de 24h.',
                color: 'terra',
                bg: 'bg-terra-100',
              },
              {
                icon: Sparkles,
                title: 'Système de notation',
                desc: 'Après chaque échange, expéditeur et voyageur s\'évaluent. La transparence prime.',
                color: 'sand',
                bg: 'bg-sand-100',
              },
              {
                icon: Heart,
                title: 'Communauté bienveillante',
                desc: 'Nous favorisons un climat humain et bienveillant. Pas de logistique froide, juste des gens qui se rendent service.',
                color: 'ink',
                bg: 'bg-cream-200',
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full">
                  <div
                    className={`h-12 w-12 rounded-2xl ${p.bg} flex items-center justify-center mb-4`}
                  >
                    <p.icon className="h-6 w-6 text-ink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-600 mb-2 font-display">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-400 leading-relaxed">
                    {p.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Allowed items */}
      <section id="objets" className="py-16 sm:py-20 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="sage">Catégories</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-ink-600 font-display">
              Ce que vous pouvez envoyer
            </h2>
            <p className="mt-3 text-ink-400">
              Jibly est dédié aux <strong>petits objets personnels</strong> et
              utiles. Pas de marchandises, pas de revente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Allowed */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-sage-500" />
                <h3 className="font-bold text-ink-600 font-display text-lg">
                  Objets autorisés
                </h3>
              </div>
              <div className="space-y-3">
                {ITEM_CATEGORIES.map((cat) => (
                  <Card key={cat.value} className="flex gap-4 items-start bg-cream-50">
                    <div className="text-3xl">{cat.icon}</div>
                    <div>
                      <div className="font-semibold text-ink-600">
                        {cat.label}
                      </div>
                      <p className="text-sm text-ink-400 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Forbidden */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="h-5 w-5 text-terra-500" />
                <h3 className="font-bold text-ink-600 font-display text-lg">
                  Strictement interdit
                </h3>
              </div>
              <Card className="bg-terra-50 border-terra-100" hover={false}>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">
                  Pour la sécurité de tous, ces catégories sont{' '}
                  <strong className="text-terra-500">
                    formellement interdites
                  </strong>{' '}
                  sur Jibly :
                </p>
                <div className="flex flex-wrap gap-2">
                  {FORBIDDEN_CATEGORIES.map((c) => (
                    <Badge key={c} variant="terra">
                      {c}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-ink-400 mt-5 leading-relaxed">
                  Tout compte qui tente d'envoyer ces objets est{' '}
                  <strong>suspendu immédiatement</strong> et peut faire l'objet
                  d'un signalement aux autorités.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Best practices */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-600 text-center mb-10 font-display">
            Quelques bons réflexes
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '1',
                title: 'Vérifiez le contenu',
                text: 'Voyageur, vous avez le droit (et le devoir) de vérifier ce que vous transportez. Un objet fermé sans visibilité ? Refusez.',
              },
              {
                num: '2',
                title: 'Convenez d\'un point de rencontre clair',
                text: 'Lieu public, horaire confirmé. Échangez vos numéros uniquement lorsque la mise en relation est validée.',
              },
              {
                num: '3',
                title: 'Confirmez la livraison dans l\'app',
                text: 'Cela libère la compensation et alimente vos notations de confiance.',
              },
              {
                num: '4',
                title: 'Signalez le moindre doute',
                text: 'Un comportement bizarre, un objet suspect, une pression. Un seul clic et notre équipe prend le relais.',
              },
            ].map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="flex gap-5 items-start">
                  <div className="h-12 w-12 rounded-2xl bg-peach-100 flex items-center justify-center font-display font-bold text-2xl text-peach-500 flex-shrink-0">
                    {b.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-600 mb-1 font-display text-lg">
                      {b.title}
                    </h3>
                    <p className="text-sm text-ink-400 leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CGU disclaimer */}
      <section id="cgu" className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-ink-500 text-cream-50 p-10" hover={false}>
            <h2 className="text-3xl font-bold mb-4 font-display text-cream-50">
              Notre rôle, votre responsabilité
            </h2>
            <p className="text-cream-200 leading-relaxed mb-4">
              <strong className="text-cream-50">Jibly est une plateforme de mise en relation.</strong>{' '}
              Nous facilitons le contact entre expéditeurs et voyageurs mais nous
              n'effectuons aucune livraison physique et nous ne sommes pas un
              transporteur.
            </p>
            <p className="text-cream-200 leading-relaxed mb-4">
              Les utilisateurs sont entièrement responsables de vérifier que les
              objets échangés sont autorisés, légaux et conformes à nos règles
              ainsi qu'aux lois en vigueur dans les pays de départ et d'arrivée
              (France et Maroc).
            </p>
            <p className="text-cream-200 leading-relaxed">
              Jibly se réserve le droit de suspendre tout compte ne respectant
              pas ces règles et de coopérer avec les autorités en cas
              d'infraction.
            </p>
            <div className="mt-8">
              <Link href="/envoyer">
                <Button variant="secondary">
                  J'ai compris, je commence
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
