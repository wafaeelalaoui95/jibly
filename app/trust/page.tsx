'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, MessageCircle, Flag, Star, Heart, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ITEM_CATEGORIES, FORBIDDEN_CATEGORIES } from '@/lib/constants';
import { useI18n } from '@/lib/i18n/context';

export default function TrustPage() {
  const { t } = useI18n();

  const PILLARS = [
    { icon: ShieldCheck, title: t.trust_pillar_identity_title, desc: t.trust_pillar_identity_desc, color: 'lavender' },
    { icon: Lock, title: t.trust_pillar_data_title, desc: t.trust_pillar_data_desc, color: 'butter' },
    { icon: MessageCircle, title: t.trust_pillar_messaging_title, desc: t.trust_pillar_messaging_desc, color: 'sky' },
    { icon: Flag, title: t.trust_pillar_report_title, desc: t.trust_pillar_report_desc, color: 'blush' },
    { icon: Star, title: t.trust_pillar_reviews_title, desc: t.trust_pillar_reviews_desc, color: 'mint' },
    { icon: Heart, title: t.trust_pillar_support_title, desc: t.trust_pillar_support_desc, color: 'lavender' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-mesh py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-lavender-200 text-xs font-semibold text-lavender-700 mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.trust_badge}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-600 text-balance leading-tight">
              {t.trust_hero_title_1} <span className="text-gradient-lavender">{t.trust_hero_title_2}</span>
            </h1>
            <p className="mt-5 text-lg text-ink-400 max-w-xl mx-auto">{t.trust_hero_subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-3xl p-6 border border-ink-50 shadow-card"
              >
                <div className={`w-11 h-11 rounded-2xl bg-${p.color}-100 flex items-center justify-center mb-4`}>
                  <p.icon className={`w-5 h-5 text-${p.color}-500`} />
                </div>
                <h3 className="font-bold text-ink-600 mb-1.5">{p.title}</h3>
                <p className="text-sm text-ink-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="objets" className="py-20 bg-cream-100/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-600 mb-3">
              {t.trust_allowed_title}
            </h2>
            <p className="text-ink-400">{t.trust_allowed_subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-mint-50 rounded-3xl p-6 border border-mint-200">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-mint-300 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-bold text-ink-600">{t.trust_allowed}</h3>
              </div>
              <div className="space-y-2.5">
                {ITEM_CATEGORIES.map((c) => (
                  <div key={c.value} className="flex items-center gap-3 bg-white rounded-2xl p-3">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <div className="font-semibold text-sm text-ink-600">{t[c.labelKey]}</div>
                      <div className="text-xs text-ink-400">{t[c.descKey]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blush-50 rounded-3xl p-6 border border-blush-200">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-blush-400 flex items-center justify-center">
                  <X className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <h3 className="font-bold text-ink-600">{t.trust_forbidden}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {FORBIDDEN_CATEGORIES.map((c) => (
                  <span key={c} className="text-sm bg-white text-ink-500 px-3 py-1.5 rounded-full border border-blush-100">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cgu" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="bg-ink-500 rounded-3xl p-8 lg:p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">{t.trust_cgu_title}</h3>
            <p className="text-ink-100 text-sm leading-relaxed mb-6 max-w-xl mx-auto">{t.trust_cgu_text}</p>
            <Link href="/envoyer">
              <Button variant="secondary">{t.trust_cgu_btn}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
