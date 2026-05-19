'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid,
  Package,
  Plane,
  Bell,
  User,
  Plus,
  ShieldCheck,
  Mail,
  Phone,
  TrendingUp,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge, VerificationBadge } from '@/components/ui/Badge';
import {
  DEMO_MY_REQUESTS,
  DEMO_MY_TRIPS,
  DEMO_MY_MATCHES,
  ITEM_CATEGORIES,
  SPACE_OPTIONS,
} from '@/lib/constants';
import { formatShortDate } from '@/lib/utils';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';
import type { Translations } from '@/lib/i18n/translations';

type TabId = 'overview' | 'requests' | 'trips' | 'matches' | 'profile';

export default function MyPage() {
  const { t, isRTL } = useI18n();
  const [tab, setTab] = useState<TabId>('overview');

  const stats = {
    active: DEMO_MY_REQUESTS.filter((r) => r.status === 'open' || r.status === 'matched').length,
    pending: DEMO_MY_MATCHES.length,
    earned: DEMO_MY_TRIPS.filter((t) => t.status === 'completed').reduce((sum, t) => sum + (t.earned ?? 0), 0),
    completed: DEMO_MY_REQUESTS.filter((r) => r.status === 'completed').length + DEMO_MY_TRIPS.filter((t) => t.status === 'completed').length,
  };

  const TABS: { id: TabId; label: string; icon: typeof LayoutGrid }[] = [
    { id: 'overview', label: t.me_tab_overview, icon: LayoutGrid },
    { id: 'requests', label: t.me_tab_requests, icon: Package },
    { id: 'trips', label: t.me_tab_trips, icon: Plane },
    { id: 'matches', label: t.me_tab_matches, icon: Bell },
    { id: 'profile', label: t.me_tab_profile, icon: User },
  ];

  return (
    <div className="min-h-screen bg-mesh-soft py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="w-14 h-14 rounded-full bg-lavender-200 flex items-center justify-center font-display font-bold text-2xl text-lavender-700">
            S
          </div>
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-600">
              {t.me_title}
            </h1>
            <p className="text-sm text-ink-400">Salma · salma@example.com</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="inline-flex gap-1 p-1.5 bg-white rounded-2xl border border-ink-50 shadow-card">
            {TABS.map((tabItem) => {
              const active = tab === tabItem.id;
              return (
                <button
                  key={tabItem.id}
                  onClick={() => setTab(tabItem.id)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap',
                    active
                      ? 'bg-lavender-100 text-lavender-700'
                      : 'text-ink-400 hover:text-ink-600 hover:bg-ink-50'
                  )}
                >
                  <tabItem.icon className="w-4 h-4" />
                  <span>{tabItem.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tab === 'overview' && <OverviewTab stats={stats} t={t} isRTL={isRTL} />}
            {tab === 'requests' && <RequestsTab t={t} />}
            {tab === 'trips' && <TripsTab t={t} />}
            {tab === 'matches' && <MatchesTab t={t} />}
            {tab === 'profile' && <ProfileTab t={t} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// === OVERVIEW ===
function OverviewTab({
  stats,
  t,
  isRTL,
}: {
  stats: { active: number; pending: number; earned: number; completed: number };
  t: Translations;
  isRTL: boolean;
}) {
  return (
    <div className="space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label={t.me_stats_active} value={stats.active.toString()} icon={Package} color="lavender" />
        <StatCard label={t.me_stats_pending} value={stats.pending.toString()} icon={Bell} color="butter" />
        <StatCard label={t.me_stats_earned} value={`${stats.earned}${t.common_eur}`} icon={TrendingUp} color="mint" />
        <StatCard label={t.me_stats_completed} value={stats.completed.toString()} icon={CheckCircle2} color="sky" />
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          href="/envoyer"
          className="group bg-white rounded-3xl p-6 border border-ink-50 shadow-card hover:shadow-float transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-lavender-100 flex items-center justify-center group-hover:bg-lavender-200 transition-colors">
            <Plus className="w-5 h-5 text-lavender-600" />
          </div>
          <div className="flex-1">
            <div className="font-bold text-ink-600">{t.me_new_request}</div>
            <div className="text-sm text-ink-400">{t.send_subtitle}</div>
          </div>
          <ArrowRight className={cn('w-4 h-4 text-ink-300 group-hover:text-lavender-600 transition-colors', isRTL && 'rtl-flip')} />
        </Link>

        <Link
          href="/voyager"
          className="group bg-white rounded-3xl p-6 border border-ink-50 shadow-card hover:shadow-float transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-butter-100 flex items-center justify-center group-hover:bg-butter-200 transition-colors">
            <Plane className="w-5 h-5 text-butter-600" />
          </div>
          <div className="flex-1">
            <div className="font-bold text-ink-600">{t.me_new_trip}</div>
            <div className="text-sm text-ink-400">{t.trip_subtitle}</div>
          </div>
          <ArrowRight className={cn('w-4 h-4 text-ink-300 group-hover:text-butter-600 transition-colors', isRTL && 'rtl-flip')} />
        </Link>
      </div>

      {/* Pending matches preview */}
      {DEMO_MY_MATCHES.length > 0 && (
        <div className="bg-white rounded-3xl p-6 border border-ink-50 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-ink-600 flex items-center gap-2">
              <Bell className="w-4 h-4 text-butter-500" />
              {t.me_section_pending_matches}
            </h2>
            <Badge variant="butter">{DEMO_MY_MATCHES.length}</Badge>
          </div>
          <div className="space-y-3">
            {DEMO_MY_MATCHES.map((m) => (
              <MatchCard key={m.id} match={m} t={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  icon: typeof LayoutGrid;
  color: 'lavender' | 'butter' | 'mint' | 'sky';
}) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-ink-50 shadow-card">
      <div className={`w-10 h-10 rounded-xl bg-${color}-100 flex items-center justify-center mb-3`}>
        <Icon className={`w-5 h-5 text-${color}-500`} />
      </div>
      <div className="text-2xl font-display font-bold text-ink-600">{value}</div>
      <div className="text-xs text-ink-400 mt-0.5">{label}</div>
    </div>
  );
}

// === REQUESTS ===
function RequestsTab({ t }: { t: Translations }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-2xl font-bold text-ink-600">{t.me_section_my_requests}</h2>
        <Link href="/envoyer">
          <Button variant="secondary" size="sm">
            <Plus className="w-4 h-4" />
            {t.me_new_request}
          </Button>
        </Link>
      </div>

      {DEMO_MY_REQUESTS.length === 0 ? (
        <EmptyState message={t.me_empty_requests} />
      ) : (
        <div className="space-y-3">
          {DEMO_MY_REQUESTS.map((r) => (
            <RequestCard key={r.id} request={r} t={t} />
          ))}
        </div>
      )}
    </div>
  );
}

function RequestCard({ request, t }: { request: typeof DEMO_MY_REQUESTS[number]; t: Translations }) {
  const cat = ITEM_CATEGORIES.find((c) => c.value === request.category);
  return (
    <div className="bg-white rounded-3xl p-5 border border-ink-50 shadow-card hover:shadow-float transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-lavender-100 flex items-center justify-center text-2xl">
          {cat?.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <div className="font-bold text-ink-600 flex items-center gap-2 flex-wrap">
                <span>{request.departure_flag}</span>
                <span>{request.departure_city}</span>
                <ArrowRight className="w-3.5 h-3.5 text-ink-300" />
                <span>{request.arrival_flag}</span>
                <span>{request.arrival_city}</span>
              </div>
              <div className="text-sm text-ink-400 mt-0.5">
                {cat ? t[cat.labelKey] : ''} · {formatShortDate(request.date)} · {request.budget}{t.common_eur}
              </div>
            </div>
            <StatusBadge status={request.status} t={t} />
          </div>

          {request.traveler_name && (
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-ink-50">
              <div className={`w-7 h-7 rounded-full bg-${request.traveler_color}-200 flex items-center justify-center text-xs font-bold text-${request.traveler_color}-700`}>
                {request.traveler_avatar}
              </div>
              <span className="text-sm text-ink-500">
                {request.status === 'completed' ? '✓ ' : ''}
                {request.traveler_name}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// === TRIPS ===
function TripsTab({ t }: { t: Translations }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-2xl font-bold text-ink-600">{t.me_section_my_trips}</h2>
        <Link href="/voyager">
          <Button variant="secondary" size="sm">
            <Plus className="w-4 h-4" />
            {t.me_new_trip}
          </Button>
        </Link>
      </div>

      {DEMO_MY_TRIPS.length === 0 ? (
        <EmptyState message={t.me_empty_trips} />
      ) : (
        <div className="space-y-3">
          {DEMO_MY_TRIPS.map((trip) => (
            <TripCard key={trip.id} trip={trip} t={t} />
          ))}
        </div>
      )}
    </div>
  );
}

function TripCard({ trip, t }: { trip: typeof DEMO_MY_TRIPS[number]; t: Translations }) {
  const space = SPACE_OPTIONS.find((s) => s.value === trip.space);
  return (
    <div className="bg-white rounded-3xl p-5 border border-ink-50 shadow-card hover:shadow-float transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-butter-100 flex items-center justify-center text-2xl">
          {space?.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <div className="font-bold text-ink-600 flex items-center gap-2 flex-wrap">
                <span>{trip.departure_flag}</span>
                <span>{trip.departure_city}</span>
                <Plane className="w-3.5 h-3.5 text-ink-300" />
                <span>{trip.arrival_flag}</span>
                <span>{trip.arrival_city}</span>
              </div>
              <div className="text-sm text-ink-400 mt-0.5">
                {formatShortDate(trip.date)} · {space ? t[space.labelKey] : ''} · {t.matches_min} {trip.min_compensation}{t.common_eur}
              </div>
            </div>
            <StatusBadge status={trip.status} t={t} />
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-ink-50">
            {trip.status === 'open' && trip.requests_count !== undefined ? (
              <span className="text-sm text-ink-400 flex items-center gap-1.5">
                <Bell className="w-3.5 h-3.5 text-butter-500" />
                {trip.requests_count} {t.me_section_pending_matches.toLowerCase()}
              </span>
            ) : trip.status === 'completed' && trip.earned !== undefined ? (
              <span className="text-sm font-semibold text-mint-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                +{trip.earned}{t.common_eur} {t.me_payment_released.toLowerCase()}
              </span>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// === MATCHES ===
function MatchesTab({ t }: { t: Translations }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-ink-600 mb-5">
        {t.me_section_pending_matches}
      </h2>

      {DEMO_MY_MATCHES.length === 0 ? (
        <EmptyState message={t.me_empty_matches} />
      ) : (
        <div className="space-y-3">
          {DEMO_MY_MATCHES.map((m) => (
            <MatchCard key={m.id} match={m} t={t} expanded />
          ))}
        </div>
      )}
    </div>
  );
}

function MatchCard({
  match,
  t,
  expanded = false,
}: {
  match: typeof DEMO_MY_MATCHES[number];
  t: Translations;
  expanded?: boolean;
}) {
  const cat = ITEM_CATEGORIES.find((c) => c.value === match.category);
  return (
    <div className={cn(
      'bg-cream-50 rounded-2xl p-4 border border-butter-100',
      expanded && 'bg-white border-ink-50 shadow-card'
    )}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-${match.sender_color}-200 flex items-center justify-center font-bold text-sm text-${match.sender_color}-700`}>
          {match.sender_avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-ink-600">{match.sender_name}</div>
          <div className="text-sm text-ink-400 flex items-center gap-1.5 flex-wrap">
            <span>{cat?.icon}</span>
            <span>{cat ? t[cat.labelKey] : ''}</span>
            <span>·</span>
            <span>{match.departure_city} → {match.arrival_city}</span>
            <span>·</span>
            <span className="font-semibold text-lavender-600">{match.proposed_budget}{t.common_eur}</span>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="flex gap-2 mt-4 pt-4 border-t border-ink-50">
          <Button variant="secondary" size="sm" className="flex-1">
            {t.matches_contact}
          </Button>
          <Button variant="ghost" size="sm">
            {t.common_cancel}
          </Button>
        </div>
      )}
    </div>
  );
}

// === PROFILE ===
function ProfileTab({ t }: { t: Translations }) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Main card */}
      <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-ink-50 shadow-card">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-ink-50">
          <div className="w-16 h-16 rounded-full bg-lavender-200 flex items-center justify-center font-display font-bold text-2xl text-lavender-700">
            S
          </div>
          <div className="flex-1">
            <div className="font-display text-xl font-bold text-ink-600">Salma El Amrani</div>
            <VerificationBadge level="id_verified" />
          </div>
        </div>

        <div className="space-y-4">
          <ProfileRow icon={User} label={t.me_profile_name} value="Salma El Amrani" />
          <ProfileRow icon={Mail} label={t.me_profile_email} value="salma@example.com" />
          <ProfileRow icon={Phone} label={t.me_profile_phone} value="+33 6 12 34 56 78" />
          <ProfileRow icon={MapPin} label={t.send_label_from} value="🇫🇷 Paris" />
        </div>
      </div>

      {/* Verification card */}
      <div className="bg-gradient-to-br from-lavender-100 to-butter-50 rounded-3xl p-6 border border-lavender-200">
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4">
          <ShieldCheck className="w-6 h-6 text-lavender-600" />
        </div>
        <h3 className="font-display text-xl font-bold text-ink-600 mb-2">
          {t.me_profile_verification}
        </h3>
        <div className="space-y-2 mb-5">
          <CheckRow label={t.verif_email} done />
          <CheckRow label={t.verif_id} done />
          <CheckRow label={t.verif_trusted} done={false} />
        </div>
        <Button variant="secondary" size="sm" fullWidth>
          <Sparkles className="w-4 h-4" />
          {t.me_profile_verify_now}
        </Button>
      </div>
    </div>
  );
}

function ProfileRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof User;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="w-9 h-9 rounded-xl bg-ink-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-ink-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-ink-300 uppercase tracking-wider font-semibold">{label}</div>
        <div className="text-sm font-medium text-ink-600">{value}</div>
      </div>
    </div>
  );
}

function CheckRow({ label, done }: { label: string; done: boolean }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div
        className={cn(
          'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
          done ? 'bg-mint-300' : 'bg-white border border-ink-200'
        )}
      >
        {done && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
      </div>
      <span className={done ? 'text-ink-500 font-medium' : 'text-ink-400'}>{label}</span>
    </div>
  );
}

// === SHARED ===
function StatusBadge({ status, t }: { status: string; t: Translations }) {
  const map: Record<string, { variant: 'mint' | 'butter' | 'lavender' | 'sky' | 'ink'; key: keyof Translations }> = {
    pending: { variant: 'butter', key: 'me_status_pending' },
    open: { variant: 'lavender', key: 'me_status_open' },
    matched: { variant: 'sky', key: 'me_status_matched' },
    in_transit: { variant: 'sky', key: 'me_status_in_transit' },
    completed: { variant: 'mint', key: 'me_status_completed' },
    cancelled: { variant: 'ink', key: 'me_status_cancelled' },
  };
  const entry = map[status] ?? map.pending;
  return <Badge variant={entry.variant}>{t[entry.key]}</Badge>;
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="bg-white rounded-3xl p-12 border border-ink-50 text-center">
      <div className="inline-flex w-14 h-14 rounded-full bg-lavender-100 items-center justify-center mb-4">
        <Sparkles className="w-6 h-6 text-lavender-500" />
      </div>
      <p className="text-ink-400">{message}</p>
    </div>
  );
}
