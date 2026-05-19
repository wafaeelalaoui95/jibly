'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Package,
  Plane,
  Flag,
  CheckCircle2,
  XCircle,
  Eye,
  Sparkles,
  TrendingUp,
  Clock,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge, VerificationBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Tab = 'overview' | 'requests' | 'trips' | 'flagged' | 'users' | 'matches';

const DEMO = {
  stats: [
    { label: 'Demandes en attente', value: 23, trend: '+12%', icon: Package, color: 'bg-peach-100 text-peach-500' },
    { label: 'Trajets actifs', value: 47, trend: '+8%', icon: Plane, color: 'bg-sky-100 text-sky-500' },
    { label: 'Signalements ouverts', value: 3, trend: '-2', icon: Flag, color: 'bg-terra-100 text-terra-500' },
    { label: 'Membres vérifiés', value: 1284, trend: '+34', icon: Users, color: 'bg-sage-100 text-sage-500' },
  ],
  pendingRequests: [
    { id: 'r1', user: 'Amine K.', avatar: 'AK', route: 'Paris → Casablanca', date: '6 juin', category: 'documents', budget: 25, status: 'pending' },
    { id: 'r2', user: 'Leila M.', avatar: 'LM', route: 'Casablanca → Paris', date: '8 juin', category: 'medicaments', budget: 40, status: 'pending' },
    { id: 'r3', user: 'Pierre D.', avatar: 'PD', route: 'Paris → Casablanca', date: '10 juin', category: 'cles', budget: 20, status: 'pending' },
    { id: 'r4', user: 'Nadia R.', avatar: 'NR', route: 'Casablanca → Paris', date: '12 juin', category: 'petits_objets', budget: 35, status: 'pending' },
  ],
  pendingTrips: [
    { id: 't1', user: 'Yasmine B.', avatar: 'YB', route: 'Paris → Casablanca', date: '4 juin', space: 'enveloppe', compensation: '15-25 €', verification: 'id_verified' as const },
    { id: 't2', user: 'Karim T.', avatar: 'KT', route: 'Casablanca → Paris', date: '9 juin', space: 'enveloppe', compensation: '15-20 €', verification: 'email' as const },
    { id: 't3', user: 'Sophie L.', avatar: 'SL', route: 'Paris → Casablanca', date: '7 juin', space: 'petit_sac', compensation: '25-45 €', verification: 'id_verified' as const },
  ],
  flagged: [
    { id: 'f1', target: 'Demande #2841', user: 'Anonyme', reason: 'Catégorie suspecte (potentiellement électronique)', when: 'Il y a 2h', severity: 'high' as const },
    { id: 'f2', target: 'Profil voyageur', user: 'Marc V.', reason: 'Compensation anormalement élevée (>100€)', when: 'Il y a 5h', severity: 'medium' as const },
    { id: 'f3', target: 'Demande #2837', user: 'Léa F.', reason: 'Description floue', when: 'Hier', severity: 'low' as const },
  ],
  verifiedUsers: [
    { id: 'u1', name: 'Mehdi A.', avatar: 'MA', email: 'm.adel@email.fr', trips: 27, rating: 5.0, verification: 'trusted' as const },
    { id: 'u2', name: 'Yasmine B.', avatar: 'YB', email: 'y.bennani@email.com', trips: 12, rating: 4.9, verification: 'id_verified' as const },
    { id: 'u3', name: 'Sophie L.', avatar: 'SL', email: 's.leroy@email.fr', trips: 8, rating: 4.8, verification: 'id_verified' as const },
    { id: 'u4', name: 'Karim T.', avatar: 'KT', email: 'k.tahiri@email.com', trips: 4, rating: 4.7, verification: 'email' as const },
  ],
  matches: [
    { id: 'm1', sender: 'Amine K.', traveler: 'Yasmine B.', route: 'Paris → Casablanca', status: 'proposed' as const, compensation: 22 },
    { id: 'm2', sender: 'Leila M.', traveler: 'Mehdi A.', route: 'Casablanca → Paris', status: 'accepted' as const, compensation: 35 },
    { id: 'm3', sender: 'Pierre D.', traveler: 'Sophie L.', route: 'Paris → Casablanca', status: 'completed' as const, compensation: 18 },
  ],
};

const CATEGORY_LABELS: Record<string, string> = {
  documents: '📄 Documents',
  cles: '🔑 Clés',
  medicaments: '💊 Médicaments',
  petits_objets: '🎁 Petits objets',
};

const tabs: { id: Tab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'overview', label: 'Vue d\'ensemble', icon: TrendingUp },
  { id: 'requests', label: 'Demandes', icon: Package },
  { id: 'trips', label: 'Trajets', icon: Plane },
  { id: 'flagged', label: 'Signalements', icon: Flag },
  { id: 'users', label: 'Membres', icon: Users },
  { id: 'matches', label: 'Mises en relation', icon: Sparkles },
];

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>('overview');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-cream-100">
      {/* Header */}
      <section className="bg-cream-50 border-b border-cream-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="ink">Espace équipe — Mockup</Badge>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-600 font-display">
            Tableau de bord administrateur
          </h1>
          <p className="mt-2 text-sm text-ink-400">
            Modération, vérifications et suivi des mises en relation.
          </p>
        </div>
      </section>

      {/* Tab navigation */}
      <div className="bg-cream-50 border-b border-cream-200 sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto -mb-px">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors',
                  tab === t.id
                    ? 'border-peach-400 text-ink-600'
                    : 'border-transparent text-ink-400 hover:text-ink-600'
                )}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* OVERVIEW */}
        {tab === 'overview' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {DEMO.stats.map((s) => (
                <Card key={s.label} className="bg-cream-50">
                  <div className={`h-10 w-10 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold text-ink-600 font-display">
                    {s.value}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-xs text-ink-400">{s.label}</div>
                    <Badge variant="sage" className="text-[10px]">
                      {s.trend}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card hover={false} className="bg-cream-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-ink-600 font-display">Activité récente</h3>
                  <Badge variant="sky">7 derniers jours</Badge>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Package, text: '23 nouvelles demandes publiées', time: 'cette semaine', color: 'bg-peach-100 text-peach-500' },
                    { icon: Plane, text: '47 nouveaux trajets enregistrés', time: 'cette semaine', color: 'bg-sky-100 text-sky-500' },
                    { icon: CheckCircle2, text: '38 mises en relation acceptées', time: 'cette semaine', color: 'bg-sage-100 text-sage-500' },
                    { icon: Flag, text: '3 signalements résolus', time: 'cette semaine', color: 'bg-terra-100 text-terra-500' },
                  ].map((a, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-cream-100">
                      <div className={`h-9 w-9 rounded-xl ${a.color} flex items-center justify-center`}>
                        <a.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-ink-600">{a.text}</div>
                        <div className="text-xs text-ink-300 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {a.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card hover={false} className="bg-cream-50">
                <h3 className="font-bold text-ink-600 mb-4 font-display">Files d'attente</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Vérifications d\'identité à examiner', n: 8, urgent: false },
                    { label: 'Demandes contenant "médicament" à valider', n: 4, urgent: true },
                    { label: 'Signalements ouverts', n: 3, urgent: true },
                    { label: 'Nouveaux profils à modérer', n: 12, urgent: false },
                  ].map((q) => (
                    <div
                      key={q.label}
                      className="flex items-center justify-between p-3 rounded-2xl bg-cream-100"
                    >
                      <span className="text-sm text-ink-500">{q.label}</span>
                      <Badge variant={q.urgent ? 'terra' : 'sand'}>{q.n}</Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        )}

        {/* REQUESTS */}
        {tab === 'requests' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-bold text-ink-600 mb-4 font-display">
              Demandes d'expéditeurs en attente ({DEMO.pendingRequests.length})
            </h2>
            <Card hover={false} className="bg-cream-50 p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-cream-100 text-left text-xs text-ink-400 font-semibold">
                    <tr>
                      <Th>Utilisateur</Th>
                      <Th>Trajet</Th>
                      <Th>Date</Th>
                      <Th>Catégorie</Th>
                      <Th>Budget</Th>
                      <Th>Actions</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEMO.pendingRequests.map((r, i) => (
                      <tr key={r.id} className={cn('border-t border-cream-200', i % 2 && 'bg-cream-100/40')}>
                        <Td>
                          <div className="flex items-center gap-2">
                            <Avatar text={r.avatar} />
                            <span className="font-semibold text-ink-600">{r.user}</span>
                          </div>
                        </Td>
                        <Td>{r.route}</Td>
                        <Td>{r.date}</Td>
                        <Td>{CATEGORY_LABELS[r.category]}</Td>
                        <Td>{r.budget} €</Td>
                        <Td>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="secondary">
                              <CheckCircle2 className="h-3 w-3" />
                              Approuver
                            </Button>
                            <Button size="sm" variant="ghost" className="text-terra-500">
                              <XCircle className="h-3 w-3" />
                            </Button>
                          </div>
                        </Td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}

        {/* TRIPS */}
        {tab === 'trips' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-bold text-ink-600 mb-4 font-display">
              Trajets de voyageurs en attente ({DEMO.pendingTrips.length})
            </h2>
            <Card hover={false} className="bg-cream-50 p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-cream-100 text-left text-xs text-ink-400 font-semibold">
                    <tr>
                      <Th>Voyageur</Th>
                      <Th>Trajet</Th>
                      <Th>Date</Th>
                      <Th>Espace</Th>
                      <Th>Compensation</Th>
                      <Th>Vérification</Th>
                      <Th>Actions</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEMO.pendingTrips.map((t, i) => (
                      <tr key={t.id} className={cn('border-t border-cream-200', i % 2 && 'bg-cream-100/40')}>
                        <Td>
                          <div className="flex items-center gap-2">
                            <Avatar text={t.avatar} />
                            <span className="font-semibold text-ink-600">{t.user}</span>
                          </div>
                        </Td>
                        <Td>{t.route}</Td>
                        <Td>{t.date}</Td>
                        <Td className="capitalize">{t.space}</Td>
                        <Td>{t.compensation}</Td>
                        <Td>
                          <VerificationBadge level={t.verification} />
                        </Td>
                        <Td>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="secondary">
                              <CheckCircle2 className="h-3 w-3" />
                              Approuver
                            </Button>
                          </div>
                        </Td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}

        {/* FLAGGED */}
        {tab === 'flagged' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-bold text-ink-600 mb-4 font-display">
              Signalements ouverts
            </h2>
            <div className="space-y-3">
              {DEMO.flagged.map((f) => {
                const sevColor =
                  f.severity === 'high' ? 'terra' : f.severity === 'medium' ? 'sand' : 'sky';
                return (
                  <Card key={f.id} hover={false} className="bg-cream-50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="h-10 w-10 rounded-2xl bg-terra-100 flex items-center justify-center flex-shrink-0">
                          <Flag className="h-5 w-5 text-terra-500" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-semibold text-ink-600">
                              {f.target}
                            </span>
                            <Badge variant={sevColor as any}>
                              Sévérité {f.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-ink-400">{f.reason}</p>
                          <p className="text-xs text-ink-300 mt-1">
                            Signalé par {f.user} · {f.when}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Examiner
                        </Button>
                        <Button size="sm" variant="secondary">
                          Résoudre
                        </Button>
                        <Button size="sm" variant="ghost" className="text-terra-500">
                          Suspendre compte
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* USERS */}
        {tab === 'users' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-bold text-ink-600 mb-4 font-display">
              Membres vérifiés
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DEMO.verifiedUsers.map((u) => (
                <Card key={u.id} className="bg-cream-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-2xl bg-sage-200 flex items-center justify-center font-bold text-ink-600">
                      {u.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-ink-600">{u.name}</div>
                      <div className="text-xs text-ink-400 truncate max-w-[160px]">
                        {u.email}
                      </div>
                    </div>
                  </div>
                  <VerificationBadge level={u.verification} />
                  <div className="mt-3 text-xs text-ink-400 grid grid-cols-2 gap-2">
                    <div>
                      <div className="font-bold text-ink-600 text-lg font-display">
                        {u.trips}
                      </div>
                      <div>voyages</div>
                    </div>
                    <div>
                      <div className="font-bold text-ink-600 text-lg font-display">
                        {u.rating}
                      </div>
                      <div>note</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* MATCHES */}
        {tab === 'matches' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-bold text-ink-600 mb-4 font-display">
              Mises en relation
            </h2>
            <Card hover={false} className="bg-cream-50 p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-cream-100 text-left text-xs text-ink-400 font-semibold">
                    <tr>
                      <Th>Expéditeur</Th>
                      <Th>Voyageur</Th>
                      <Th>Trajet</Th>
                      <Th>Compensation</Th>
                      <Th>Statut</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEMO.matches.map((m, i) => {
                      const statusBadge =
                        m.status === 'completed'
                          ? { v: 'sage', label: 'Complété' }
                          : m.status === 'accepted'
                          ? { v: 'sky', label: 'Accepté' }
                          : { v: 'sand', label: 'Proposé' };
                      return (
                        <tr
                          key={m.id}
                          className={cn(
                            'border-t border-cream-200',
                            i % 2 && 'bg-cream-100/40'
                          )}
                        >
                          <Td className="font-semibold text-ink-600">{m.sender}</Td>
                          <Td className="font-semibold text-ink-600">{m.traveler}</Td>
                          <Td>{m.route}</Td>
                          <Td>{m.compensation} €</Td>
                          <Td>
                            <Badge variant={statusBadge.v as any}>
                              {statusBadge.label}
                            </Badge>
                          </Td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 font-semibold">{children}</th>;
}

function Td({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={cn('px-4 py-3 align-middle text-ink-500', className)}>{children}</td>;
}

function Avatar({ text }: { text: string }) {
  return (
    <div className="h-8 w-8 rounded-xl bg-peach-200 flex items-center justify-center text-xs font-bold text-ink-600">
      {text}
    </div>
  );
}
