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
} from 'lucide-react';
import { VerificationBadge } from '@/components/ui/Badge';
import { DEMO_TRAVELERS } from '@/lib/constants';
import { formatShortDate } from '@/lib/utils';
import { useI18n } from '@/lib/i18n/context';

const DEMO_REQUESTS = [
  { id: 'r1', sender: 'Lila M.', route: '🇫🇷 Paris → 🇲🇦 Rabat', category: 'Documents', date: '2026-06-05', status: 'pending' },
  { id: 'r2', sender: 'Yanis B.', route: '🇧🇪 Bruxelles → 🇲🇦 Casablanca', category: 'Médicaments', date: '2026-06-08', status: 'pending' },
  { id: 'r3', sender: 'Rachid O.', route: '🇪🇸 Madrid → 🇲🇦 Tanger', category: 'Clés', date: '2026-06-03', status: 'pending' },
];

const DEMO_REPORTS = [
  { id: 'rp1', reporter: 'Sophie L.', target: 'utilisateur Khalid V.', reason: 'Communication suspecte', severity: 'medium' as const },
  { id: 'rp2', reporter: 'Anonyme', target: 'demande #4821', reason: 'Objet potentiellement interdit', severity: 'high' as const },
];

export default function AdminPage() {
  const { t } = useI18n();
  const [tab, setTab] = useState('overview');

  const TABS = [
    { id: 'overview', label: t.admin_tab_overview, icon: LayoutGrid },
    { id: 'requests', label: t.admin_tab_requests, icon: Package },
    { id: 'trips', label: t.admin_tab_trips, icon: Plane },
    { id: 'reports', label: t.admin_tab_reports, icon: Flag },
    { id: 'users', label: t.admin_tab_users, icon: Users },
    { id: 'matches', label: t.admin_tab_matches, icon: Link2 },
  ];

  const KPIs = [
    { label: t.admin_kpi_active_requests, value: '128', delta: '+12%', color: 'lavender' },
    { label: t.admin_kpi_weekly_trips, value: '67', delta: '+8%', color: 'butter' },
    { label: t.admin_kpi_matches, value: '341', delta: '+24%', color: 'mint' },
    { label: t.admin_kpi_open_reports, value: '3', delta: '-2', color: 'blush' },
  ];

  const RECENT_ACTIVITY = [
    { icon: CheckCircle2, text: t.admin_activity_trip_validated, time: t.admin_ago_min.replace('{n}', '5'), color: 'mint' },
    { icon: Package, text: t.admin_activity_new_request, time: t.admin_ago_min.replace('{n}', '12'), color: 'lavender' },
    { icon: Flag, text: t.admin_activity_report, time: t.admin_ago_hour.replace('{n}', '1'), color: 'blush' },
    { icon: Users, text: t.admin_activity_id_verified, time: t.admin_ago_hour.replace('{n}', '2'), color: 'butter' },
  ];

  const MATCHES = [
    { s: 'Lila M.', tr: 'Yasmine B.', route: '🇫🇷 Paris → 🇲🇦 Casa', amount: '25€', status: t.admin_status_accepted, color: 'mint' },
    { s: 'Yanis B.', tr: 'Mehdi A.', route: '🇧🇪 Brux → 🇲🇦 Rabat', amount: '30€', status: t.admin_status_in_progress, color: 'butter' },
    { s: 'Rachid O.', tr: 'Karim T.', route: '🇪🇸 Madrid → 🇲🇦 Tanger', amount: '20€', status: t.admin_status_delivered, color: 'lavender' },
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender-100 text-xs font-semibold text-lavender-700 mb-2">
            <LayoutGrid className="w-3 h-3" />
            <span>{t.admin_badge}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-600">
            {t.admin_title}
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {TABS.map((tabItem) => (
            <button
              key={tabItem.id}
              onClick={() => setTab(tabItem.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-colors ${
                tab === tabItem.id
                  ? 'bg-ink-500 text-white'
                  : 'text-ink-400 hover:bg-lavender-50'
              }`}
            >
              <tabItem.icon className="w-4 h-4" />
              {tabItem.label}
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
                <h3 className="font-display text-xl font-bold text-ink-600 mb-4">{t.admin_recent_activity}</h3>
                <div className="space-y-3">
                  {RECENT_ACTIVITY.map((a, i) => (
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
                <h3 className="font-display text-xl font-bold text-ink-600 mb-4">{t.admin_queue}</h3>
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
              <div className="col-span-3">{t.admin_col_sender}</div>
              <div className="col-span-4">{t.admin_col_route}</div>
              <div className="col-span-2">{t.admin_col_category}</div>
              <div className="col-span-1">{t.admin_col_date}</div>
              <div className="col-span-2 text-end">{t.admin_col_action}</div>
            </div>
            {DEMO_REQUESTS.map((r) => (
              <div key={r.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-ink-50 items-center">
                <div className="col-span-3 text-sm font-semibold text-ink-600">{r.sender}</div>
                <div className="col-span-4 text-sm text-ink-500">{r.route}</div>
                <div className="col-span-2 text-sm text-ink-400">{r.category}</div>
                <div className="col-span-1 text-xs text-ink-400">{formatShortDate(r.date)}</div>
                <div className="col-span-2 flex gap-2 justify-end">
                  <button className="px-3 py-1.5 rounded-lg bg-mint-100 text-mint-600 text-xs font-bold hover:bg-mint-200">{t.admin_action_approve}</button>
                  <button className="px-3 py-1.5 rounded-lg bg-blush-100 text-blush-500 text-xs font-bold hover:bg-blush-200">{t.admin_action_reject}</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'trips' && (
          <div className="bg-white rounded-3xl border border-ink-50 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-cream-100 text-xs font-bold text-ink-400 uppercase tracking-wider">
              <div className="col-span-3">{t.admin_col_traveler}</div>
              <div className="col-span-4">{t.admin_col_route}</div>
              <div className="col-span-2">{t.admin_col_space}</div>
              <div className="col-span-2">{t.admin_col_compensation}</div>
              <div className="col-span-1">{t.admin_col_status}</div>
            </div>
            {DEMO_TRAVELERS.map((tr) => (
              <div key={tr.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-ink-50 items-center">
                <div className="col-span-3 text-sm font-semibold text-ink-600">{tr.name}</div>
                <div className="col-span-4 text-sm text-ink-500">{tr.departure_flag} {tr.departure_city} → {tr.arrival_flag} {tr.arrival_city}</div>
                <div className="col-span-2 text-sm text-ink-400 capitalize">{tr.available_space}</div>
                <div className="col-span-2 text-sm font-semibold text-ink-600">{t.admin_starts_at} {tr.compensation_min}€</div>
                <div className="col-span-1"><VerificationBadge level={tr.verification_level} /></div>
              </div>
            ))}
          </div>
        )}

        {tab === 'reports' && (
          <div className="space-y-3">
            {DEMO_REPORTS.map((r) => (
              <div key={r.id} className={`bg-white rounded-2xl p-5 border-s-4 ${r.severity === 'high' ? 'border-blush-400' : 'border-butter-400'} border-y border-e border-ink-50`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Flag className={`w-4 h-4 ${r.severity === 'high' ? 'text-blush-500' : 'text-butter-500'}`} />
                    <span className="font-semibold text-ink-600">{r.reason}</span>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${r.severity === 'high' ? 'bg-blush-100 text-blush-500' : 'bg-butter-100 text-butter-600'}`}>
                    {r.severity === 'high' ? t.admin_severity_high : t.admin_severity_medium}
                  </span>
                </div>
                <div className="text-sm text-ink-400">
                  {t.admin_report_by} {r.reporter} · {t.admin_report_concerns} {r.target}
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1.5 rounded-lg bg-ink-500 text-white text-xs font-bold hover:bg-ink-600">{t.admin_action_review}</button>
                  <button className="px-3 py-1.5 rounded-lg bg-cream-100 text-ink-500 text-xs font-bold hover:bg-cream-200">{t.admin_action_ignore}</button>
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
                    <div className="text-xs text-ink-400">{u.trips_completed} {t.admin_trips_count}</div>
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
              <div className="col-span-3">{t.admin_col_sender}</div>
              <div className="col-span-3">{t.admin_col_traveler}</div>
              <div className="col-span-3">{t.admin_col_route}</div>
              <div className="col-span-2">{t.admin_col_amount}</div>
              <div className="col-span-1">{t.admin_col_status}</div>
            </div>
            {MATCHES.map((m, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-ink-50 items-center">
                <div className="col-span-3 text-sm font-semibold text-ink-600">{m.s}</div>
                <div className="col-span-3 text-sm text-ink-500">{m.tr}</div>
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
