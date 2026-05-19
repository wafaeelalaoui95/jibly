'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowLeft, ArrowRight, ShieldCheck, Upload } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input, Checkbox } from '@/components/ui/Form';
import { Stepper } from '@/components/ui/Stepper';
import { LocationSelector, type LocationValue } from '@/components/ui/LocationSelector';
import { SPACE_OPTIONS } from '@/lib/constants';
import type { AvailableSpace } from '@/lib/types';

const STEPS = ['Trajet', 'Espace', 'Identité', 'Validation'];

export default function VoyagerPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [from, setFrom] = useState<LocationValue>(null);
  const [to, setTo] = useState<LocationValue>(null);
  const [date, setDate] = useState('');
  const [flightTime, setFlightTime] = useState('');

  const [space, setSpace] = useState<AvailableSpace | null>(null);
  const [compMin, setCompMin] = useState(15);
  const [compMax, setCompMax] = useState(30);

  const [idDoc, setIdDoc] = useState<File | null>(null);
  const [responsibility, setResponsibility] = useState(false);

  const canNext = () => {
    if (step === 0) return from && to && date;
    if (step === 1) return space && compMin >= 0 && compMax >= compMin;
    if (step === 2) return true; // ID upload is optional
    if (step === 3) return responsibility;
    return false;
  };

  function handleSubmit() {
    // TODO: supabase.from('traveler_trips').insert(...)
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
            Bon voyage ✈️
          </h1>
          <p className="text-ink-400 mb-8">
            Votre trajet est publié. On vous prévient si quelqu'un veut envoyer quelque chose.
          </p>
          <Link href="/">
            <Button variant="secondary" fullWidth>Retour à l'accueil</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mesh-soft py-10 lg:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-600 mb-2">
            Je voyage bientôt
          </h1>
          <p className="text-ink-400">Aidez quelqu'un, gagnez un peu en chemin.</p>
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
                  <h2 className="font-display text-2xl font-bold text-ink-600">Votre trajet</h2>
                  <LocationSelector
                    value={from}
                    onChange={setFrom}
                    label="Départ"
                    placeholder="Ville de départ"
                    icon="departure"
                  />
                  <LocationSelector
                    value={to}
                    onChange={setTo}
                    label="Arrivée"
                    placeholder="Ville d'arrivée"
                    icon="arrival"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      type="date"
                      label="Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <Input
                      type="time"
                      label="Heure (optionnel)"
                      value={flightTime}
                      onChange={(e) => setFlightTime(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-bold text-ink-600">Que pouvez-vous transporter ?</h2>

                  <div className="space-y-2.5">
                    {SPACE_OPTIONS.map((s) => (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setSpace(s.value)}
                        className={`w-full p-4 rounded-2xl border-2 text-left flex items-center gap-4 transition-all ${
                          space === s.value
                            ? 'border-lavender-500 bg-lavender-50'
                            : 'border-ink-100 bg-white hover:border-lavender-300'
                        }`}
                      >
                        <div className="text-3xl">{s.icon}</div>
                        <div>
                          <div className="font-semibold text-ink-600">{s.label}</div>
                          <div className="text-xs text-ink-400">{s.size}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-500 mb-3">
                      Compensation souhaitée
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-ink-400 mb-1.5">Min : <span className="font-semibold text-lavender-600">{compMin}€</span></div>
                        <input
                          type="range"
                          min={0}
                          max={80}
                          value={compMin}
                          onChange={(e) => {
                            const v = Number(e.target.value);
                            setCompMin(v);
                            if (v > compMax) setCompMax(v);
                          }}
                          className="w-full h-2 bg-ink-100 rounded-full appearance-none accent-lavender-500"
                        />
                      </div>
                      <div>
                        <div className="text-xs text-ink-400 mb-1.5">Max : <span className="font-semibold text-lavender-600">{compMax}€</span></div>
                        <input
                          type="range"
                          min={0}
                          max={80}
                          value={compMax}
                          onChange={(e) => setCompMax(Math.max(Number(e.target.value), compMin))}
                          className="w-full h-2 bg-ink-100 rounded-full appearance-none accent-lavender-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-ink-600">Vérifier votre identité</h2>
                  <p className="text-sm text-ink-400">Optionnel mais recommandé. Les profils vérifiés reçoivent 3× plus de demandes.</p>

                  <div className="bg-lavender-50 rounded-2xl p-5 space-y-3">
                    {[
                      'Badge "Identité vérifiée" sur votre profil',
                      'Plus de visibilité',
                      'Communauté plus rassurée',
                    ].map((b) => (
                      <div key={b} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-lavender-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-ink-500">{b}</span>
                      </div>
                    ))}
                  </div>

                  <label className="block">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => setIdDoc(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                    <span className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white border-2 border-ink-100 text-sm font-semibold text-ink-500 hover:border-lavender-300 cursor-pointer transition-colors">
                      <Upload className="w-4 h-4" />
                      {idDoc ? idDoc.name : 'Téléverser une pièce d\'identité'}
                    </span>
                  </label>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-ink-600">Vos engagements</h2>

                  <div className="space-y-3">
                    {[
                      'Je transporte uniquement des objets autorisés',
                      'Je vérifie le contenu avant le départ',
                      'Je traite les envois avec soin et confidentialité',
                      'Je remets l\'objet à la bonne personne',
                    ].map((e, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-lavender-50">
                        <div className="w-6 h-6 rounded-full bg-lavender-500 flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
                          {i + 1}
                        </div>
                        <span className="text-sm text-ink-500">{e}</span>
                      </div>
                    ))}
                  </div>

                  <Checkbox
                    name="resp"
                    checked={responsibility}
                    onChange={(e) => setResponsibility(e.target.checked)}
                    label={
                      <span>
                        Je m'engage à respecter ces règles et j'accepte les conditions d'utilisation de Jibly.
                      </span>
                    }
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 mt-8 pt-6 border-t border-ink-50">
            {step > 0 && (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="w-4 h-4" />
                Précédent
              </Button>
            )}
            <div className="flex-1" />
            {step < STEPS.length - 1 ? (
              <Button variant="secondary" disabled={!canNext()} onClick={() => setStep(step + 1)}>
                Suivant
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button variant="secondary" disabled={!canNext()} onClick={handleSubmit}>
                Publier mon trajet
                <Check className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
