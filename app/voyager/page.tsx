'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Plane,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Stepper } from '@/components/ui/Stepper';
import { Input, Select, Checkbox } from '@/components/ui/Form';
import { CITIES, SPACE_OPTIONS } from '@/lib/constants';
import type { City, AvailableSpace } from '@/lib/types';
import { ParisCasaRoute } from '@/components/illustrations/Travel';

type TripState = {
  departure_city: City | '';
  arrival_city: City | '';
  travel_date: string;
  flight_time: string;
  available_space: AvailableSpace | '';
  compensation_min: number;
  compensation_max: number;
  id_file: string;
  responsibility_accepted: boolean;
};

const STEPS = ['Trajet', 'Espace', 'Identité', 'Validation'];

export default function VoyagerPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<TripState>({
    departure_city: '',
    arrival_city: '',
    travel_date: '',
    flight_time: '',
    available_space: '',
    compensation_min: 15,
    compensation_max: 35,
    id_file: '',
    responsibility_accepted: false,
  });

  const update = <K extends keyof TripState>(key: K, value: TripState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canNext = (() => {
    if (step === 0)
      return (
        form.departure_city &&
        form.arrival_city &&
        form.departure_city !== form.arrival_city &&
        form.travel_date
      );
    if (step === 1) return form.available_space;
    if (step === 2) return true; // ID upload is encouraged but not blocking
    if (step === 3) return form.responsibility_accepted;
    return false;
  })();

  const handleSubmit = () => {
    // Production: supabase.from('traveler_trips').insert({...})
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] bg-warm-mesh flex items-center justify-center p-4">
        <Card className="max-w-lg w-full text-center" hover={false}>
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 250 }}
            className="h-20 w-20 rounded-full bg-sage-200 mx-auto flex items-center justify-center mb-6"
          >
            <Plane className="h-10 w-10 text-sage-500" />
          </motion.div>
          <h1 className="text-3xl font-bold text-ink-600 mb-3">
            Bon voyage ! ✈️
          </h1>
          <p className="text-ink-400 mb-8">
            Votre trajet est désormais visible. Les expéditeurs vous
            contacteront s'ils ont besoin d'aide sur cette route.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/matches">
              <Button variant="secondary">Voir les demandes</Button>
            </Link>
            <Link href="/">
              <Button variant="ghost">Retour à l'accueil</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-warm-mesh min-h-[calc(100vh-4rem)] py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="sky" icon={<Plane className="h-3 w-3" />}>
            Voyageur
          </Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-ink-600 text-balance">
            Partagez votre <span className="italic text-sky-500">prochain vol</span>
          </h1>
          <p className="mt-3 text-ink-400">
            Aidez la communauté tout en gagnant une compensation conviviale.
          </p>
        </div>

        <div className="mb-10">
          <Stepper steps={STEPS} current={step} />
        </div>

        <Card className="bg-cream-50 p-8 sm:p-10" hover={false}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              {/* STEP 0 */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink-600 font-display">
                      Quel est votre trajet ?
                    </h2>
                    <p className="text-sm text-ink-400 mt-1">
                      Renseignez vos villes et la date de votre vol.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Départ"
                      value={form.departure_city}
                      onChange={(e) =>
                        update('departure_city', e.target.value as City)
                      }
                    >
                      <option value="">Choisir...</option>
                      {CITIES.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.emoji} {c.label}
                        </option>
                      ))}
                    </Select>
                    <Select
                      label="Arrivée"
                      value={form.arrival_city}
                      onChange={(e) =>
                        update('arrival_city', e.target.value as City)
                      }
                    >
                      <option value="">Choisir...</option>
                      {CITIES.map((c) => (
                        <option
                          key={c.value}
                          value={c.value}
                          disabled={c.value === form.departure_city}
                        >
                          {c.emoji} {c.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  {form.departure_city && form.arrival_city && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-cream-100 rounded-2xl p-4"
                    >
                      <ParisCasaRoute className="w-full h-20" />
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="date"
                      label="Date du vol"
                      value={form.travel_date}
                      onChange={(e) => update('travel_date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                    <Input
                      type="time"
                      label="Heure de vol (optionnel)"
                      hint="Cela aide à planifier le point de rencontre."
                      value={form.flight_time}
                      onChange={(e) => update('flight_time', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink-600 font-display">
                      Combien d'espace pouvez-vous offrir ?
                    </h2>
                    <p className="text-sm text-ink-400 mt-1">
                      Soyez réaliste : votre bagage cabine reste prioritaire.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {SPACE_OPTIONS.map((opt) => {
                      const selected = form.available_space === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => update('available_space', opt.value)}
                          className={`flex items-center gap-4 text-left p-4 rounded-2xl border-2 transition-all ${
                            selected
                              ? 'border-sky-400 bg-sky-50 shadow-soft'
                              : 'border-cream-200 bg-cream-50 hover:border-sky-200'
                          }`}
                        >
                          <div className="text-3xl">{opt.icon}</div>
                          <div className="flex-1">
                            <div className="font-semibold text-ink-600">
                              {opt.label}
                            </div>
                            <div className="text-xs text-ink-400 mt-0.5">
                              {opt.size}
                            </div>
                          </div>
                          {selected && (
                            <Check className="h-5 w-5 text-sky-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-500 mb-3">
                      Compensation souhaitée (fourchette)
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-ink-400 mb-1">Min</div>
                        <div className="rounded-2xl bg-cream-100 px-4 py-3 font-bold text-ink-600 text-xl">
                          {form.compensation_min} €
                        </div>
                        <input
                          type="range"
                          min={10}
                          max={form.compensation_max}
                          step={5}
                          value={form.compensation_min}
                          onChange={(e) =>
                            update('compensation_min', Number(e.target.value))
                          }
                          className="w-full mt-2 accent-sky-400"
                        />
                      </div>
                      <div>
                        <div className="text-xs text-ink-400 mb-1">Max</div>
                        <div className="rounded-2xl bg-cream-100 px-4 py-3 font-bold text-ink-600 text-xl">
                          {form.compensation_max} €
                        </div>
                        <input
                          type="range"
                          min={form.compensation_min}
                          max={100}
                          step={5}
                          value={form.compensation_max}
                          onChange={(e) =>
                            update('compensation_max', Number(e.target.value))
                          }
                          className="w-full mt-2 accent-sky-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 - ID */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink-600 font-display">
                      Vérification d'identité
                    </h2>
                    <p className="text-sm text-ink-400 mt-1">
                      La vérification renforce la confiance et augmente vos
                      chances d'être choisi.
                    </p>
                  </div>

                  <div className="rounded-2xl border-2 border-dashed border-sky-300 p-8 bg-sky-50 text-center">
                    <div className="h-16 w-16 rounded-2xl bg-sky-100 flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="h-8 w-8 text-sky-500" />
                    </div>
                    <h3 className="font-semibold text-ink-600 mb-2">
                      Pièce d'identité (recommandé)
                    </h3>
                    <p className="text-sm text-ink-400 mb-4 max-w-sm mx-auto">
                      Carte d'identité, passeport ou permis. Vos documents
                      restent strictement confidentiels.
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-cream-50 border-2 border-sky-300 hover:bg-sky-100 transition-colors text-sm font-semibold text-sky-500"
                    >
                      <Upload className="h-4 w-4" />
                      {form.id_file || 'Téléverser un document'}
                    </button>
                  </div>

                  <div className="rounded-2xl bg-cream-100 p-5">
                    <h4 className="font-semibold text-ink-600 text-sm mb-2">
                      Pourquoi vérifier mon identité ?
                    </h4>
                    <ul className="space-y-2 text-xs text-ink-400">
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-sage-500 flex-shrink-0" />
                        Badge "Identité vérifiée" sur votre profil
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-sage-500 flex-shrink-0" />
                        Priorité dans les résultats de recherche
                      </li>
                      <li className="flex gap-2">
                        <Check className="h-4 w-4 text-sage-500 flex-shrink-0" />
                        Plus de demandes acceptées par les expéditeurs
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* STEP 3 - Validation */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink-600 font-display">
                      Engagements du voyageur
                    </h2>
                    <p className="text-sm text-ink-400 mt-1">
                      Une lecture rapide avant de publier.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Je ne transporte que les objets autorisés par Jibly (documents, clés, médicaments sur ordonnance, petits objets personnels).',
                      'Je m\'engage à refuser tout objet suspect, fermé, ou dont la nature n\'est pas claire.',
                      'Je n\'accepterai aucune somme d\'argent en liquide, ni objet à caractère commercial.',
                      'Je conviens d\'un point de rencontre clair avec l\'expéditeur et le destinataire.',
                    ].map((text, i) => (
                      <div
                        key={i}
                        className="flex gap-3 p-4 rounded-2xl bg-cream-100"
                      >
                        <div className="h-6 w-6 rounded-full bg-sage-200 text-sage-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-sm text-ink-500 leading-relaxed">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Checkbox
                    name="responsibility_accepted"
                    checked={form.responsibility_accepted}
                    onChange={(e) =>
                      update('responsibility_accepted', e.target.checked)
                    }
                    label={
                      <>
                        J'accepte la <strong>responsabilité de refuser</strong>{' '}
                        tout objet suspect et j'ai lu les{' '}
                        <Link
                          href="/trust"
                          className="underline text-peach-500"
                        >
                          règles de Jibly
                        </Link>
                        .
                      </>
                    }
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className={step === 0 ? 'invisible' : ''}
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>

            {step < STEPS.length - 1 ? (
              <Button
                variant="secondary"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext}
              >
                Continuer
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="secondary"
                onClick={handleSubmit}
                disabled={!canNext}
              >
                Publier mon trajet
                <Check className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
