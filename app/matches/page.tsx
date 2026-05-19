'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Plane, Clock, MessageCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { VerificationBadge } from '@/components/ui/Badge';
import { LocationSelector, type LocationValue } from '@/components/ui/LocationSelector';
import { DEMO_TRAVELERS } from '@/lib/constants';
import { formatShortDate } from '@/lib/utils';
import { SPACE_OPTIONS } from '@/lib/constants';

export default function MatchesPage() {
  const [from, setFrom] = useState<LocationValue>(null);
  const [to, setTo] = useState<LocationValue>(null);

  const filtered = useMemo(() => {
    return DEMO_TRAVELERS.filter((t) => {
      if (from && t.departure_city !== from.city) return false;
      if (to && t.arrival_city !== to.city) return false;
      return true;
    });
  }, [from, to]);

  return (
    <div className="min-h-screen bg-mesh-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-600 mb-2">
            Voyageurs disponibles
          </h1>
          <p className="text-ink-400">{filtered.length} personne{filtered.length > 1 ? 's' : ''} prête{filtered.length > 1 ? 's' : ''} à aider.</p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-3 shadow-card border border-ink-50 mb-8"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <LocationSelector
              value={from}
              onChange={setFrom}
              placeholder="Départ"
              icon="departure"
            />
            <LocationSelector
              value={to}
              onChange={setTo}
              placeholder="Arrivée"
              icon="arrival"
            />
          </div>
        </motion.div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex w-16 h-16 rounded-full bg-lavender-100 items-center justify-center mb-4">
              <Search className="w-7 h-7 text-lavender-500" />
            </div>
            <h3 className="font-display text-2xl font-bold text-ink-600 mb-2">
              Aucun voyageur pour le moment
            </h3>
            <p className="text-ink-400 mb-6">Publiez votre demande, on vous prévient dès qu'un voyageur passe.</p>
            <Link href="/envoyer">
              <Button variant="secondary">Publier ma demande</Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((t, i) => {
              const space = SPACE_OPTIONS.find((s) => s.value === t.available_space);
              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-6 shadow-card border border-ink-50 transition-shadow hover:shadow-float"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-14 h-14 rounded-full bg-${t.avatar_color}-200 flex items-center justify-center font-bold text-${t.avatar_color}-700 text-lg`}>
                      {t.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-ink-600 truncate">{t.name}</div>
                      <div className="flex items-center gap-1 text-xs text-ink-400">
                        <Star className="w-3 h-3 fill-butter-400 text-butter-400" />
                        <span className="font-semibold">{t.rating}</span>
                        <span>· {t.trips_completed} trajets</span>
                      </div>
                    </div>
                  </div>

                  {/* Route */}
                  <div className="flex items-center justify-between text-sm font-semibold text-ink-600 mb-3 bg-lavender-50 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span>{t.departure_flag}</span>
                      <span>{t.departure_city}</span>
                    </div>
                    <Plane className="w-4 h-4 text-lavender-400" />
                    <div className="flex items-center gap-1.5">
                      <span>{t.arrival_flag}</span>
                      <span>{t.arrival_city}</span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-ink-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{formatShortDate(t.travel_date)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>{space?.icon}</span>
                      <span>{space?.label}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-ink-400 italic mb-4 line-clamp-2">"{t.bio}"</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mb-4">
                    <VerificationBadge level={t.verification_level} />
                    <span className="text-sm font-bold text-ink-600">
                      {t.compensation_min}-{t.compensation_max}€
                    </span>
                  </div>

                  <Button variant="secondary" size="sm" fullWidth>
                    <MessageCircle className="w-4 h-4" />
                    Contacter
                  </Button>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
