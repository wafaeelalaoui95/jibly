'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plane, Star, Clock, MessageCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { VerificationBadge } from '@/components/ui/Badge';
import { DEMO_TRAVELERS } from '@/lib/constants';
import { formatShortDate } from '@/lib/utils';
import { useI18n } from '@/lib/i18n/context';

export default function MatchesPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-mesh-soft py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-600 mb-2">{t.matches_title}</h1>
            <p className="text-ink-400">
              <span className="font-semibold text-ink-500">{DEMO_TRAVELERS.length}</span> {t.matches_subtitle}
            </p>
          </div>
          <Link href="/envoyer">
            <Button variant="secondary" size="sm">
              <Search className="w-4 h-4" />
              {t.matches_publish_btn}
            </Button>
          </Link>
        </motion.div>

        {DEMO_TRAVELERS.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-ink-50">
            <h2 className="font-bold text-ink-600 mb-2">{t.matches_empty_title}</h2>
            <p className="text-sm text-ink-400 mb-6">{t.matches_empty_text}</p>
            <Link href="/envoyer">
              <Button variant="secondary">{t.matches_publish_btn}</Button>
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEMO_TRAVELERS.map((tv, i) => (
              <motion.div
                key={tv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="bg-white rounded-3xl p-5 shadow-card border border-ink-50 hover:shadow-float transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-${tv.avatar_color}-200 flex items-center justify-center font-bold text-${tv.avatar_color}-700`}>
                    {tv.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-ink-600 truncate">{tv.name}</div>
                    <div className="flex items-center gap-1 text-sm text-ink-400">
                      <Star className="w-3 h-3 fill-butter-400 text-butter-400" />
                      <span className="font-semibold">{tv.rating}</span>
                      <span>· {tv.trips_completed} {t.travelers_trips}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-cream-100/60 rounded-2xl p-3 mb-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink-600 mb-1">
                    <span>{tv.departure_flag}</span>
                    <span>{tv.departure_city}</span>
                    <Plane className="w-3.5 h-3.5 text-ink-300" />
                    <span>{tv.arrival_flag}</span>
                    <span>{tv.arrival_city}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-ink-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatShortDate(tv.travel_date)} · {tv.flight_time}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-ink-400 mb-3 line-clamp-2">{tv.bio}</p>

                <div className="flex items-center justify-between mb-4">
                  <VerificationBadge level={tv.verification_level} />
                  <div className="text-end">
                    <div className="text-xs text-ink-400">{t.matches_min}</div>
                    <div className="font-bold text-ink-600">{tv.compensation_min}{t.common_eur}</div>
                  </div>
                </div>

                <Button variant="secondary" size="sm" fullWidth>
                  <MessageCircle className="w-3.5 h-3.5" />
                  {t.matches_contact}
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
