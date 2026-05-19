'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  MessageCircle,
  Plane,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { HeroScene, MiniTraveler } from '@/components/illustrations/HeroScene';
import { LocationSelector, type LocationValue } from '@/components/ui/LocationSelector';
import { VerificationBadge } from '@/components/ui/Badge';
import { DEMO_TRAVELERS } from '@/lib/constants';
import { formatShortDate } from '@/lib/utils';
import { useI18n } from '@/lib/i18n/context';

export default function HomePage() {
  const { t, isRTL } = useI18n();
  const [from, setFrom] = useState<LocationValue>(null);
  const [to, setTo] = useState<LocationValue>(null);

  function handleSearch() {
    const params = new URLSearchParams();
    if (from) params.set('from', `${from.city}, ${from.country}`);
    if (to) params.set('to', `${to.city}, ${to.country}`);
    window.location.href = `/matches?${params.toString()}`;
  }

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="relative z-10 order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-lavender-200 text-sm font-semibold text-lavender-700 mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.hero_badge}</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-600 leading-[1.05] text-balance">
                  {t.hero_title_1}{' '}
                  <span className="text-gradient-lavender">{t.hero_title_2}</span>
                </h1>

                <p className="mt-5 text-lg text-ink-400 max-w-md">
                  {t.hero_subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 bg-white rounded-3xl p-3 shadow-float border border-ink-50"
              >
                <div className="flex flex-col gap-3">
                  <LocationSelector value={from} onChange={setFrom} placeholder={t.hero_search_from} icon="departure" />
                  <LocationSelector value={to} onChange={setTo} placeholder={t.hero_search_to} icon="arrival" />
                  <Button variant="secondary" size="lg" onClick={handleSearch} className="w-full">
                    <span>{t.hero_search_button}</span>
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'rtl-flip' : ''}`} />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 flex items-center gap-4 text-sm text-ink-400"
              >
                <div className="flex -space-x-2">
                  {['lavender', 'butter', 'mint', 'sky'].map((c) => (
                    <div
                      key={c}
                      className={`w-8 h-8 rounded-full border-2 border-cream-50 bg-${c}-200 flex items-center justify-center text-xs font-bold text-${c}-700`}
                    >
                      {c[0].toUpperCase()}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-butter-400 text-butter-400" />
                  <span className="font-semibold text-ink-500">4.9</span>
                  <span>· {t.hero_social_proof}</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative max-w-md mx-auto">
                <HeroScene className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-600 text-balance">
              {t.how_title}
            </h2>
            <p className="mt-3 text-ink-400">{t.how_subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: t.how_step1_title, text: t.how_step1_text, bg: 'bg-lavender-100', accent: 'text-lavender-600' },
              { num: '02', title: t.how_step2_title, text: t.how_step2_text, bg: 'bg-butter-100', accent: 'text-butter-600' },
              { num: '03', title: t.how_step3_title, text: t.how_step3_text, bg: 'bg-mint-100', accent: 'text-mint-500' },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`${step.bg} rounded-3xl p-8 h-full`}>
                  <div className={`text-5xl font-display font-bold ${step.accent} mb-4`}>{step.num}</div>
                  <h3 className="text-xl font-bold text-ink-600 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-ink-400">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVELERS PREVIEW */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-cream-50 to-lavender-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-600 text-balance">
                {t.travelers_title}
              </h2>
              <p className="mt-2 text-ink-400">{t.travelers_subtitle}</p>
            </div>
            <Link
              href="/matches"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-lavender-700 hover:text-lavender-800"
            >
              {t.travelers_see_all} <ArrowRight className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
            </Link>
          </div>

          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-0 md:px-0">
            {DEMO_TRAVELERS.slice(0, 6).map((tv, i) => (
              <motion.div
                key={tv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="flex-shrink-0 w-[280px] md:w-auto bg-white rounded-3xl p-5 shadow-card border border-ink-50"
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

                <div className="flex items-center gap-2 text-sm font-medium text-ink-500 mb-3">
                  <span>{tv.departure_flag}</span>
                  <span>{tv.departure_city}</span>
                  <Plane className="w-3.5 h-3.5 text-ink-300" />
                  <span>{tv.arrival_flag}</span>
                  <span>{tv.arrival_city}</span>
                </div>

                <div className="text-sm text-ink-400 mb-3">
                  {formatShortDate(tv.travel_date)} · {t.matches_min} {tv.compensation_min}{t.common_eur}
                </div>

                <VerificationBadge level={tv.verification_level} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/matches">
              <Button variant="outline">{t.travelers_see_all}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: ShieldCheck, label: t.trust_identity, color: 'lavender' },
              { icon: Star, label: t.trust_data, color: 'butter' },
              { icon: MessageCircle, label: t.trust_messaging, color: 'sky' },
              { icon: Heart, label: t.trust_support, color: 'blush' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-ink-50 flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-xl bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-5 h-5 text-${item.color}-500`} />
                </div>
                <span className="text-sm font-semibold text-ink-500">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <MiniTraveler className="w-16 h-16 mx-auto mb-6" />
            <blockquote className="font-display text-2xl sm:text-3xl font-medium text-ink-600 leading-snug text-balance">
              "{t.testimonial_quote}"
            </blockquote>
            <figcaption className="mt-5 text-sm text-ink-400">
              <span className="font-semibold text-ink-500">{t.testimonial_author}</span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-ink-500 rounded-4xl px-8 py-16 lg:px-16 lg:py-24 text-center">
            <div className="absolute top-8 start-8 w-3 h-3 rounded-full bg-butter-400 animate-pulse-soft" />
            <div className="absolute top-16 end-12 w-2 h-2 rounded-full bg-lavender-400 animate-pulse-soft" />
            <div className="absolute bottom-12 start-16 w-2 h-2 rounded-full bg-mint-300" />
            <div className="absolute bottom-8 end-20 w-3 h-3 rounded-full bg-lavender-300" />

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white text-balance max-w-2xl mx-auto leading-tight">
              {t.cta_ready}
            </h2>
            <p className="mt-4 text-ink-100 max-w-md mx-auto">
              {t.cta_subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/envoyer">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  {t.cta_send_btn}
                </Button>
              </Link>
              <Link href="/voyager">
                <Button size="lg" className="w-full sm:w-auto bg-white text-ink-500 hover:bg-cream-100">
                  {t.cta_travel_btn}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
