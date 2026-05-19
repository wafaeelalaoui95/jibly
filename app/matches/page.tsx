'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Star,
  Calendar,
  Plane,
  Sparkles,
  ArrowRight,
  Clock,
  Filter,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge, VerificationBadge } from '@/components/ui/Badge';
import { Select } from '@/components/ui/Form';
import { DEMO_TRAVELERS, CITIES, SPACE_OPTIONS } from '@/lib/constants';
import type { City } from '@/lib/types';
import { formatShortDate } from '@/lib/utils';

export default function MatchesPage() {
  const [from, setFrom] = useState<City | ''>('');
  const [to, setTo] = useState<City | ''>('');

  const filtered = useMemo(() => {
    return DEMO_TRAVELERS.filter((t) => {
      if (from && t.departure_city !== from) return false;
      if (to && t.arrival_city !== to) return false;
      return true;
    });
  }, [from, to]);

  return (
    <div className="bg-cream-50 min-h-[calc(100vh-4rem)]">
      <section className="bg-warm-mesh py-12 sm:py-16 border-b border-cream-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="sage" icon={<Sparkles className="h-3 w-3" />}>
            Voyageurs disponibles
          </Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-ink-600 text-balance max-w-3xl">
            Trouvez le <span className="italic text-sage-500">bon voyageur</span> pour
            votre envoi
          </h1>
          <p className="mt-3 text-ink-400 max-w-2xl">
            Voici les voyageurs prêts à dépanner la communauté sur la route
            Paris ↔ Casablanca.
          </p>

          {/* Filter bar */}
          <div className="mt-8 rounded-3xl bg-cream-50 border-2 border-cream-200 p-4 sm:p-5 shadow-soft">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-ink-400" />
              <span className="text-sm font-semibold text-ink-500">Filtrer</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Select
                value={from}
                onChange={(e) => setFrom(e.target.value as City | '')}
              >
                <option value="">Toute ville de départ</option>
                {CITIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    Départ : {c.emoji} {c.label}
                  </option>
                ))}
              </Select>
              <Select
                value={to}
                onChange={(e) => setTo(e.target.value as City | '')}
              >
                <option value="">Toute ville d'arrivée</option>
                {CITIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    Arrivée : {c.emoji} {c.label}
                  </option>
                ))}
              </Select>
              <Button
                variant="ghost"
                onClick={() => {
                  setFrom('');
                  setTo('');
                }}
              >
                Réinitialiser
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-ink-400 mb-6">
            <strong className="text-ink-600">{filtered.length}</strong>{' '}
            voyageur(s) trouvé(s).
          </p>

          {filtered.length === 0 ? (
            <Card className="text-center py-16" hover={false}>
              <div className="text-5xl mb-4">🧐</div>
              <h3 className="text-xl font-bold text-ink-600 mb-2">
                Aucun voyageur sur ce trajet
              </h3>
              <p className="text-ink-400 mb-6">
                Publiez votre demande, nous notifierons les voyageurs dès qu'un
                trajet correspondra.
              </p>
              <Link href="/envoyer">
                <Button variant="secondary">Publier une demande</Button>
              </Link>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <TravelerCard traveler={t} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function TravelerCard({ traveler }: { traveler: typeof DEMO_TRAVELERS[number] }) {
  const space = SPACE_OPTIONS.find((s) => s.value === traveler.available_space);
  const initials = traveler.avatar;
  const fromEmoji = CITIES.find((c) => c.value === traveler.departure_city)?.emoji;
  const toEmoji = CITIES.find((c) => c.value === traveler.arrival_city)?.emoji;

  return (
    <Card className="h-full flex flex-col gap-4 bg-cream-50">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-peach-200 flex items-center justify-center font-bold text-ink-600">
            {initials}
          </div>
          <div>
            <div className="font-bold text-ink-600">{traveler.name}</div>
            <div className="flex items-center gap-1 text-xs text-ink-400">
              <Star className="h-3 w-3 fill-sand-400 text-sand-400" />
              {traveler.rating} · {traveler.trips_completed} voyages
            </div>
          </div>
        </div>
      </div>

      <VerificationBadge level={traveler.verification_level} />

      {/* Route */}
      <div className="rounded-2xl bg-cream-100 p-4">
        <div className="flex items-center justify-between text-sm font-semibold text-ink-600">
          <span>
            {fromEmoji} {traveler.departure_city}
          </span>
          <Plane className="h-4 w-4 text-peach-400 mx-2" />
          <span>
            {toEmoji} {traveler.arrival_city}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-ink-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatShortDate(traveler.travel_date)}
          </span>
          {traveler.flight_time && (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {traveler.flight_time}
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-ink-400">Espace</span>
          <Badge variant="sky">
            {space?.icon} {space?.label}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-ink-400">Compensation</span>
          <span className="font-semibold text-ink-600">
            {traveler.compensation_min} – {traveler.compensation_max} €
          </span>
        </div>
      </div>

      <p className="text-xs text-ink-400 italic leading-relaxed border-l-2 border-cream-200 pl-3">
        « {traveler.bio} »
      </p>

      <Button variant="secondary" fullWidth size="sm" className="mt-auto">
        Demander une mise en relation
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Card>
  );
}
