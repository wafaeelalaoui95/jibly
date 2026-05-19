'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, Upload, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Textarea, Checkbox, Input } from '@/components/ui/Form';
import { Stepper } from '@/components/ui/Stepper';
import { LocationSelector, type LocationValue } from '@/components/ui/LocationSelector';
import {
  ITEM_CATEGORIES,
  URGENCY_LEVELS,
  FORBIDDEN_CATEGORIES,
} from '@/lib/constants';
import type { ItemCategory, Urgency } from '@/lib/types';

const STEPS = ['Trajet', 'Objet', 'Détails', 'Confirmation'];

export default function EnvoyerPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [from, setFrom] = useState<LocationValue>(null);
  const [to, setTo] = useState<LocationValue>(null);
  const [date, setDate] = useState('');

  const [category, setCategory] = useState<ItemCategory | null>(null);
  const [description, setDescription] = useState('');
  const [prescription, setPrescription] = useState<File | null>(null);

  const [urgency, setUrgency] = useState<Urgency>('standard');
  const [budget, setBudget] = useState(30);
  const [terms, setTerms] = useState(false);

  const canNext = () => {
    if (step === 0) return from && to && date;
    if (step === 1) {
      if (!category || !description) return false;
      if (category === 'medicaments' && !prescription) return false;
      return true;
    }
    if (step === 2) return urgency && budget > 0;
    if (step === 3) return terms;
    return false;
  };

  function handleSubmit() {
    // TODO: supabase.from('sender_requests').insert(...)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-mesh-soft flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-mint-300 mx-auto flex items-center justify-center mb-6"
          >
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </motion.div>
          <h1 className="font-display text-3xl font-bold text-ink-600 mb-3">
            C'est publié !
          </h1>
          <p className="text-ink-400 mb-8">
            On vous prévient dès qu'un voyageur correspond à votre trajet.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/matches">
              <Button variant="secondary" fullWidth>Voir les voyageurs</Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" fullWidth>Retour à l'accueil</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mesh-soft py-10 lg:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-600 mb-2">
            Envoyer quelque chose
          </h1>
          <p className="text-ink-400">Cela prend 2 minutes.</p>
        </div>

        {/* Stepper */}
        <div className="mb-10">
          <Stepper steps={STEPS} current={step} />
        </div>

        {/* Step content */}
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
                  <h2 className="font-display text-2xl font-bold text-ink-600">D'où vers où ?</h2>
                  <LocationSelector
                    value={from}
                    onChange={setFrom}
                    label="Départ"
                    placeholder="Choisir la ville de départ"
                    icon="departure"
                  />
                  <LocationSelector
                    value={to}
                    onChange={setTo}
                    label="Arrivée"
                    placeholder="Choisir la ville d'arrivée"
                    icon="arrival"
                  />
                  <Input
                    type="date"
                    label="Date souhaitée"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-ink-600">Qu'envoyez-vous ?</h2>

                  <div className="grid grid-cols-2 gap-3">
                    {ITEM_CATEGORIES.map((c) => (
                      <button
                        key={c.value}
                        type="button"
                        onClick={() => setCategory(c.value)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all ${
                          category === c.value
                            ? 'border-lavender-500 bg-lavender-50'
                            : 'border-ink-100 bg-white hover:border-lavender-300'
                        }`}
                      >
                        <div className="text-3xl mb-1.5">{c.icon}</div>
                        <div className="font-semibold text-sm text-ink-600">{c.label}</div>
                        <div className="text-xs text-ink-400 mt-0.5">{c.description}</div>
                      </button>
                    ))}
                  </div>

                  {category === 'medicaments' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-butter-50 border border-butter-200 rounded-2xl p-4"
                    >
                      <p className="text-sm text-ink-500 font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-butter-600" />
                        Ordonnance obligatoire
                      </p>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => setPrescription(e.target.files?.[0] || null)}
                          className="hidden"
                        />
                        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-butter-200 text-sm font-semibold text-ink-500 hover:bg-butter-100 transition-colors">
                          <Upload className="w-4 h-4" />
                          {prescription ? prescription.name : 'Téléverser l\'ordonnance'}
                        </span>
                      </label>
                    </motion.div>
                  )}

                  <Textarea
                    label="Description"
                    placeholder="Ex: passeport français, dans une enveloppe scellée"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <div className="rounded-2xl bg-blush-50 border border-blush-100 p-4">
                    <p className="text-xs font-bold text-blush-500 uppercase tracking-wider mb-2">
                      Objets interdits
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {FORBIDDEN_CATEGORIES.map((c) => (
                        <span key={c} className="text-xs text-ink-400 bg-white px-2 py-1 rounded-full border border-blush-100">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-bold text-ink-600">Quand et combien ?</h2>

                  <div>
                    <label className="block text-sm font-semibold text-ink-500 mb-3">Urgence</label>
                    <div className="grid grid-cols-3 gap-2">
                      {URGENCY_LEVELS.map((u) => (
                        <button
                          key={u.value}
                          type="button"
                          onClick={() => setUrgency(u.value)}
                          className={`p-3 rounded-2xl border-2 text-center transition-all ${
                            urgency === u.value
                              ? 'border-lavender-500 bg-lavender-50'
                              : 'border-ink-100 bg-white hover:border-lavender-300'
                          }`}
                        >
                          <div className="font-semibold text-sm text-ink-600">{u.label}</div>
                          <div className="text-xs text-ink-400">{u.hint}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-500 mb-3">
                      Budget : <span className="text-lavender-600">{budget}€</span>
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={80}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full h-2 bg-ink-100 rounded-full appearance-none accent-lavender-500"
                    />
                    <div className="flex justify-between text-xs text-ink-300 mt-1">
                      <span>10€</span>
                      <span>80€</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-ink-600">Tout est bon ?</h2>

                  <div className="bg-lavender-50 rounded-2xl p-5 space-y-2.5 text-sm">
                    <Row label="Trajet" value={`${from?.flag} ${from?.city} → ${to?.flag} ${to?.city}`} />
                    <Row label="Date" value={date} />
                    <Row label="Objet" value={ITEM_CATEGORIES.find(c => c.value === category)?.label || '—'} />
                    <Row label="Urgence" value={URGENCY_LEVELS.find(u => u.value === urgency)?.label || '—'} />
                    <Row label="Budget" value={`${budget}€`} />
                  </div>

                  <Checkbox
                    name="terms"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    label={
                      <span>
                        J'accepte que Jibly est une plateforme de mise en relation. Je suis responsable de vérifier que mon objet est autorisé.
                      </span>
                    }
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex gap-3 mt-8 pt-6 border-t border-ink-50">
            {step > 0 && (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="w-4 h-4" />
                Précédent
              </Button>
            )}
            <div className="flex-1" />
            {step < STEPS.length - 1 ? (
              <Button
                variant="secondary"
                disabled={!canNext()}
                onClick={() => setStep(step + 1)}
              >
                Suivant
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button variant="secondary" disabled={!canNext()} onClick={handleSubmit}>
                Publier
                <Check className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-ink-400">{label}</span>
      <span className="font-semibold text-ink-600 text-right">{value}</span>
    </div>
  );
}
