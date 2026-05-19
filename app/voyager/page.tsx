'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, Upload, ShieldCheck, Sparkles, Plane } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Checkbox, Input } from '@/components/ui/Form';
import { Stepper } from '@/components/ui/Stepper';
import { LocationSelector, type LocationValue } from '@/components/ui/LocationSelector';
import { SPACE_OPTIONS } from '@/lib/constants';
import { useI18n } from '@/lib/i18n/context';
import type { AvailableSpace } from '@/lib/types';

export default function VoyagerPage() {
  const { t, isRTL } = useI18n();
  const STEPS = [t.trip_step_route, t.trip_step_space, t.trip_step_identity, t.trip_step_validation];

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [from, setFrom] = useState<LocationValue>(null);
  const [to, setTo] = useState<LocationValue>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [space, setSpace] = useState<AvailableSpace | null>(null);
  const [minComp, setMinComp] = useState(20);

  const [idFile, setIdFile] = useState<File | null>(null);
  const [terms, setTerms] = useState(false);

  const canNext = () => {
    if (step === 0) return from && to && date;
    if (step === 1) return space && minComp > 0;
    if (step === 2) return true; // identity is optional
    if (step === 3) return terms;
    return false;
  };

  function handleSubmit() {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-mesh-soft flex items-center justify-center px-4 py-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-butter-300 mx-auto flex items-center justify-center mb-6"
          >
            <Plane className="w-10 h-10 text-white" strokeWidth={2.5} />
          </motion.div>
          <h1 className="font-display text-3xl font-bold text-ink-600 mb-3">{t.trip_success_title}</h1>
          <p className="text-ink-400 mb-8">{t.trip_success_text}</p>
          <div className="flex flex-col gap-3">
            <Link href="/me">
              <Button variant="secondary" fullWidth>{t.nav_my_space}</Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" fullWidth>{t.send_success_back}</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mesh-soft py-10 lg:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-600 mb-2">{t.trip_title}</h1>
          <p className="text-ink-400">{t.trip_subtitle}</p>
        </div>

        <div className="mb-10">
          <Stepper steps={STEPS} current={step} />
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-ink-50">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {step === 0 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-ink-600">{t.trip_route_title}</h2>
                  <LocationSelector value={from} onChange={setFrom} label={t.send_label_from} placeholder={t.send_placeholder_from} icon="departure" />
                  <LocationSelector value={to} onChange={setTo} label={t.send_label_to} placeholder={t.send_placeholder_to} icon="arrival" />
                  <div className="grid grid-cols-2 gap-3">
                    <Input type="date" label={t.send_label_date} value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />
                    <Input type="time" label={t.trip_label_time} value={time} onChange={(e) => setTime(e.target.value)} />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-bold text-ink-600">{t.trip_space_title}</h2>

                  <div className="grid grid-cols-3 gap-3">
                    {SPACE_OPTIONS.map((s) => (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setSpace(s.value)}
                        className={`p-4 rounded-2xl border-2 text-center transition-all ${
                          space === s.value ? 'border-butter-500 bg-butter-50' : 'border-ink-100 bg-white hover:border-butter-300'
                        }`}
                      >
                        <div className="text-3xl mb-1.5">{s.icon}</div>
                        <div className="font-semibold text-sm text-ink-600">{t[s.labelKey]}</div>
                        <div className="text-xs text-ink-400 mt-0.5">{t[s.sizeKey]}</div>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-500 mb-3">
                      {t.trip_label_min_comp} : <span className="text-butter-600">{minComp}{t.common_eur}</span>
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={80}
                      step={5}
                      value={minComp}
                      onChange={(e) => setMinComp(Number(e.target.value))}
                      className="w-full h-2 bg-ink-100 rounded-full appearance-none accent-butter-500"
                    />
                    <div className="flex justify-between text-xs text-ink-300 mt-1">
                      <span>0{t.common_eur}</span>
                      <span>80{t.common_eur}</span>
                    </div>
                    <p className="text-xs text-ink-400 mt-3 leading-relaxed">{t.trip_min_comp_hint}</p>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-ink-600">{t.trip_identity_title}</h2>
                  <p className="text-sm text-ink-400">{t.trip_identity_subtitle}</p>

                  <div className="bg-lavender-50 rounded-2xl p-5 space-y-2.5">
                    {[t.trip_identity_benefit_1, t.trip_identity_benefit_2, t.trip_identity_benefit_3].map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-lavender-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-ink-500">{b}</span>
                      </div>
                    ))}
                  </div>

                  <label className="block">
                    <input type="file" accept="image/*,.pdf" onChange={(e) => setIdFile(e.target.files?.[0] || null)} className="hidden" />
                    <div className="border-2 border-dashed border-ink-200 rounded-2xl p-6 text-center cursor-pointer hover:border-lavender-300 hover:bg-lavender-50/30 transition-colors">
                      <Upload className="w-6 h-6 text-ink-300 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-ink-500">
                        {idFile ? idFile.name : t.trip_upload_id}
                      </div>
                      <div className="text-xs text-ink-400 mt-1">{t.common_optional}</div>
                    </div>
                  </label>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-ink-600">{t.trip_validation_title}</h2>

                  <div className="bg-mint-50 rounded-2xl p-5 space-y-3">
                    {[t.trip_engagement_1, t.trip_engagement_2, t.trip_engagement_3, t.trip_engagement_4].map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-mint-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-ink-500">{b}</span>
                      </div>
                    ))}
                  </div>

                  <Checkbox name="terms" checked={terms} onChange={(e) => setTerms(e.target.checked)} label={<span>{t.trip_engagement_terms}</span>} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 mt-8 pt-6 border-t border-ink-50">
            {step > 0 && (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>
                <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
                {t.common_back}
              </Button>
            )}
            <div className="flex-1" />
            {step < STEPS.length - 1 ? (
              <Button variant="secondary" disabled={!canNext()} onClick={() => setStep(step + 1)}>
                {t.common_next}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
              </Button>
            ) : (
              <Button variant="secondary" disabled={!canNext()} onClick={handleSubmit}>
                {t.trip_publish}
                <Plane className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
