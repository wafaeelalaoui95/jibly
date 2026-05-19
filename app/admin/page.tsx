'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutGrid,
  Package,
  Plane,
  Flag,
  Users,
  Link2,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { VerificationBadge } from '@/components/ui/Badge';
import { DEMO_TRAVELERS } from '@/lib/constants';
import { formatShortDate } from '@/lib/utils';

const TABS = [
  { id: 'overview', label: 'Vue d\'ensemble', icon: LayoutGrid },
  { id: 'requests', label: 'Demandes', icon: Package },
  { id: 'trips', label: 'Trajets', icon: Plane },
  { id: 'reports', label: 'Signalements', icon: Flag },
  { id: 'users', label: 'Utilisateurs', icon: Users },
  { id: 'matches', label: 'Matches', icon: Link2 },
];

const KPIs = [
  { label: 'Demandes actives', value: '128', delta: '+12%', color: 'lavender' },
  { label: 'Trajets cette semaine', value: '67', delta: '+8%', color: 'butter' },
  { label: 'Matches réussis', value: '341', delta: '+24%', color: 'mint' },
  { label: 'Signalements ouverts', value: '3', delta: '-2', color: 'blush' },
];

const DEMO_REQUESTS = [
  { id: 'r1', sender: 'Lila M.', route: '🇫🇷 Paris → 🇲🇦 Rabat', category: 'Documents', date: '2026-06-05', status: 'pending' },
  { id: 'r2', sender: 'Yanis B.', route: '🇧🇪 Bruxelles → 🇲🇦 Casablanca', category: 'Médicaments', date: '2026-06-08', status: 'pending' },
  { id: 'r3', sender: 'Rachid O.', route: '🇪🇸 Madrid → 🇲🇦 Tanger', category: 'Clés', date: '2026-06-03', status: 'pending' },
];

const DEMO_REPORTS = [
  { id: 'rp1', reporter: 'Sophie L.', target: 'utilisateur Khalid V.', reason: 'Communication suspecte', severity: 'medium' },
  { id: 'rp2', reporter: 'Anonyme', target: 'demande #4821', reason: 'Objet potentiellement interdit', severity: 'high' },
];

export default function AdminPage() {
  const [tab, setTab] = useState('overview');

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-100 text-xs font-semibold text-lavender-700 mb-2">
            <LayoutGrid className="w-3 h-3" />
            <span>Admin</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-600">
            Modération
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-colors ${
                tab === t.id
                  ? 'bg-ink-500 text-white'
                  : 'text-ink-400 hover:bg-lavender-50'
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {KPIs.map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-3xl p-5 border border-ink-50 shadow-card"
                >
                  <div className="text-xs font-semibold text-ink-400 mb-2 uppercase tracking-wider">{kpi.label}</div>
                  <div className="flex items-end justify-between">
                    <div className="text-3xl font-display font-bold text-ink-600">{kpi.value}</div>
                    <div className={`text-xs font-bold px-2 py-1 rounded-full bg-${kpi.color}-100 text-${kpi.color}-600 flex items-center gap-1`}>
                      <TrendingUp className="w-3 h-3" />
                      {kpi.delta}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-ink-50">
                <h3 className="font-display text-xl font-bold text-ink-600 mb-4">Activité récente</h3>
                <div className="space-y-3">
                  {[
                    { icon: CheckCircle2, text: 'Yasmine B. — trajet validé', time: 'il y a 5 min', color: 'mint' },
                    { icon: Package, text: 'Nouvelle demande de Lila M.', time: 'il y a 12 min', color: 'lavender' },
                    { icon: Flag, text: 'Signalement #4821', time: 'il y a 1h', color: 'blush' },
                    { icon: Users, text: 'Karim T. — ID vérifié', time: 'il y a 2h', color: 'butter' },
                  ].map((a, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <div className={`w-9 h-9 rounded-xl bg-${a.color}-100 flex items-center justify-center flex-shrink-0`}>
                        <a.icon className={`w-4 h-4 text-${a.color}-500`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-ink-600">{a.text}</div>
                        <div className="text-xs text-ink-300">{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-ink-50">
                <h3 className="font-display text-xl font-bold text-ink-600 mb-4">File d'attente</h3>
                <div className="space-y-3">
                  {DEMO_REQUESTS.map((r) => (
                    <div key={r.id} className="flex items-center justify-between py-2 border-b border-ink-50 last:border-0">
                      <div>
                        <div className="text-sm font-semibold text-ink-600">{r.sender}</div>
                        <div className="text-xs text-ink-400">{r.route}</div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-ink-300">
                        <Clock className="w-3 h-3" />
                        {formatShortDate(r.date)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 'requests' && (
          <div className="bg-white rounded-3xl border border-ink-50 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-cream-100 text-xs font-bold text-ink-400 uppercase tracking-wider">
              <div className="col-span-3">Expéditeur</div>
              <div className="col-span-4">Trajet</div>
              <div className="col-span-2">Catégorie</div>
              <div className="col-span-1">Date</div>
              <div className="col-span-2 text-right">Action</div>
            </div>
            {DEMO_REQUESTS.map((r) => (
              <div key={r.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-ink-50 items-center">
                <div className="col-span-3 text-sm font-semibold text-ink-600">{r.sender}</div>
                <div className="col-span-4 text-sm text-ink-500">{r.route}</div>
                <div className="col-span-2 text-sm text-ink-400">{r.category}</div>
                <div className="col-span-1 text-xs text-ink-400">{formatShortDate(r.date)}</div>
                <div className="col-span-2 flex gap-2 justify-end">
                  <button className="px-3 py-1.5 rounded-lg bg-mint-100 text-mint-600 text-xs font-bold hover:bg-mint-200">Approuver</button>
                  <button className="px-3 py-1.5 rounded-lg bg-blush-100 text-blush-500 text-xs font-bold hover:bg-blush-200">Rejeter</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'trips' && (
          <div className="bg-white rounded-3xl border border-ink-50 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-cream-100 text-xs font-bold text-ink-400 uppercase tracking-wider">
              <div className="col-span-3">Voyageur</div>
              <div className="col-span-4">Trajet</div>
              <div className="col-span-2">Espace</div>
              <div className="col-span-2">Compensation</div>
              <div className="col-span-1">Statut</div>
            </div>
            {DEMO_TRAVELERS.map((t) => (
              <div key={t.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-ink-50 items-center">
                <div className="col-span-3 text-sm font-semibold text-ink-600">{t.name}</div>
                <div className="col-span-4 text-sm text-ink-500">{t.departure_flag} {t.departure_city} → {t.arrival_flag} {t.arrival_city}</div>
                <div className="col-span-2 text-sm text-ink-400 capitalize">{t.available_space}</div>
                <div className="col-span-2 text-sm font-semibold text-ink-600">{t.compensation_min}-{t.compensation_max}€</div>
                <div className="col-span-1"><VerificationBadge level={t.verification_level} /></div>
              </div>
            ))}
          </div>
        )}

        {tab === 'reports' && (
          <div className="space-y-3">
            {DEMO_REPORTS.map((r) => (
              <div key={r.id} className={`bg-white rounded-2xl p-5 border-l-4 ${r.severity === 'high' ? 'border-blush-400' : 'border-butter-400'} border-y border-r border-ink-50`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Flag className={`w-4 h-4 ${r.severity === 'high' ? 'text-blush-500' : 'text-butter-500'}`} />
                    <span className="font-semibold text-ink-600">{r.reason}</span>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${r.severity === 'high' ? 'bg-blush-100 text-blush-500' : 'bg-butter-100 text-butter-600'}`}>
                    {r.severity}
                  </span>
                </div>
                <div className="text-sm text-ink-400">
                  Par {r.reporter} · concerne {r.target}
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1.5 rounded-lg bg-ink-500 text-white text-xs font-bold hover:bg-ink-600">Examiner</button>
                  <button className="px-3 py-1.5 rounded-lg bg-cream-100 text-ink-500 text-xs font-bold hover:bg-cream-200">Ignorer</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'users' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEMO_TRAVELERS.map((u) => (
              <div key={u.id} className="bg-white rounded-3xl p-5 border border-ink-50 shadow-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-full bg-${u.avatar_color}-200 flex items-center justify-center font-bold text-${u.avatar_color}-700`}>
                    {u.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-ink-600">{u.name}</div>
                    <div className="text-xs text-ink-400">{u.trips_completed} trajets</div>
                  </div>
                </div>
                <VerificationBadge level={u.verification_level} />
              </div>
            ))}
          </div>
        )}

        {tab === 'matches' && (
          <div className="bg-white rounded-3xl border border-ink-50 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-cream-100 text-xs font-bold text-ink-400 uppercase tracking-wider">
              <div className="col-span-3">Expéditeur</div>
              <div className="col-span-3">Voyageur</div>
              <div className="col-span-3">Trajet</div>
              <div className="col-span-2">Montant</div>
              <div className="col-span-1">Statut</div>
            </div>
            {[
              { s: 'Lila M.', t: 'Yasmine B.', route: '🇫🇷 Paris → 🇲🇦 Casa', amount: '25€', status: 'accepté', color: 'mint' },
              { s: 'Yanis B.', t: 'Mehdi A.', route: '🇧🇪 Brux → 🇲🇦 Rabat', amount: '30€', status: 'en cours', color: 'butter' },
              { s: 'Rachid O.', t: 'Karim T.', route: '🇪🇸 Madrid → 🇲🇦 Tanger', amount: '20€', status: 'livré', color: 'lavender' },
            ].map((m, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-ink-50 items-center">
                <div className="col-span-3 text-sm font-semibold text-ink-600">{m.s}</div>
                <div className="col-span-3 text-sm text-ink-500">{m.t}</div>
                <div className="col-span-3 text-sm text-ink-500">{m.route}</div>
                <div className="col-span-2 text-sm font-semibold text-ink-600">{m.amount}</div>
                <div className="col-span-1">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-${m.color}-100 text-${m.color}-600`}>{m.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
