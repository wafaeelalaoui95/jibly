'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Sparkles, Upload, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Stepper } from '@/components/ui/Stepper';
import { Input, Textarea, Select, Checkbox } from '@/components/ui/Form';
import {
  CITIES,
  ITEM_CATEGORIES,
  URGENCY_LEVELS,
  FORBIDDEN_CATEGORIES,
} from '@/lib/constants';
import type { City, ItemCategory, Urgency } from '@/lib/types';
import { ParisCasaRoute } from '@/components/illustrations/Travel';

type FormState = {
  departure_city: City | '';
  arrival_city: City | '';
  desired_delivery_date: string;
  category: ItemCategory | '';
  description: string;
  urgency: Urgency;
  compensation_budget: number;
  prescription_file: string;
  terms_accepted: boolean;
};

const STEP_LABELS = ['Trajet', 'Objet', 'Détails', 'Confirmation'];

export default function EnvoyerPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    departure_city: '',
    arrival_city: '',
    desired_delivery_date: '',
    category: '',
    description: '',
    urgency: 'standard',
    compensation_budget: 25,
    prescription_file: '',
    terms_accepted: false,
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const canNext = (() => {
    if (step === 0) {
      return (
        form.departure_city &&
        form.arrival_city &&
        form.departure_city !== form.arrival_city &&
        form.desired_delivery_date
      );
    }
    if (step === 1) {
      return form.category && form.description.trim().length > 5;
    }
    if (step === 2) {
      return form.compensation_budget > 0;
    }
    if (step === 3) {
      return form.terms_accepted;
    }
    return false;
  })();

  const handleSubmit = () => {
    // In production: send to Supabase via /lib/supabase/client
    // const supabase = getSupabaseClient();
    // await supabase.from('sender_requests').insert({...});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] bg-warm-mesh flex items-center justify-center p-4">
        <Card className="max-w-lg w-full text-center bg-cream-50" hover={false}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 250 }}
            className="h-20 w-20 rounded-full bg-sage-200 mx-auto flex items-center justify-center mb-6"
          >
            <Check className="h-10 w-10 text-sage-500" strokeWidth={3} />
          </motion.div>
          <h1 className="text-3xl font-bold text-ink-600 mb-3">
            Demande publiée !
          </h1>
          <p className="text-ink-400 mb-8">
            Votre demande est maintenant visible par la communauté des
            voyageurs. Nous vous notifierons dès qu'un voyageur correspondra à
            votre trajet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/matches">
              <Button variant="secondary">Voir les voyageurs disponibles</Button>
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
          <Badge variant="peach" icon={<Sparkles className="h-3 w-3" />}>
            Expéditeur
          </Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-ink-600 text-balance">
            Publiez votre <span className="italic text-peach-500">demande</span>
          </h1>
          <p className="mt-3 text-ink-400">
            Cela prend 2 minutes. Promis.
          </p>
        </div>

        <div className="mb-10">
          <Stepper steps={STEP_LABELS} current={step} />
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
              {/* STEP 0: Route + Date */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink-600 font-display">
                      Quel est le trajet ?
                    </h2>
                    <p className="text-sm text-ink-400 mt-1">
                      Jibly couvre la route Paris ↔ Casablanca.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Ville de départ"
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
                      label="Ville d'arrivée"
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

                  <Input
                    type="date"
                    label="Date de livraison souhaitée"
                    hint="Soyez réaliste : laissez le temps qu'un voyageur fasse le trajet."
                    value={form.desired_delivery_date}
                    onChange={(e) =>
                      update('desired_delivery_date', e.target.value)
                    }
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              )}

              {/* STEP 1: Item */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink-600 font-display">
                      Que souhaitez-vous envoyer ?
                    </h2>
                    <p className="text-sm text-ink-400 mt-1">
                      Choisissez la catégorie qui correspond le mieux.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ITEM_CATEGORIES.map((cat) => {
                      const selected = form.category === cat.value;
                      return (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => update('category', cat.value)}
                          className={`text-left p-4 rounded-2xl border-2 transition-all ${
                            selected
                              ? 'border-peach-400 bg-peach-50 shadow-warm'
                              : 'border-cream-200 bg-cream-50 hover:border-peach-200'
                          }`}
                        >
                          <div className="text-2xl mb-2">{cat.icon}</div>
                          <div className="font-semibold text-ink-600">
                            {cat.label}
                          </div>
                          <div className="text-xs text-ink-400 mt-1">
                            {cat.description}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {form.category === 'medicaments' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl border-2 border-dashed border-sky-300 p-5 bg-sky-50"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <AlertCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-ink-500 leading-relaxed">
                          Les médicaments doivent être envoyés dans leur{' '}
                          <strong>emballage d'origine</strong> et accompagnés
                          d'une <strong>ordonnance valide</strong>.
                        </p>
                      </div>
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-dashed border-sky-300 hover:border-sky-400 hover:bg-sky-100 transition-colors text-sm font-semibold text-sky-500"
                      >
                        <Upload className="h-4 w-4" />
                        {form.prescription_file
                          ? form.prescription_file
                          : 'Téléverser l\'ordonnance'}
                      </button>
                    </motion.div>
                  )}

                  <Textarea
                    label="Description de l'objet"
                    hint="Soyez précis : taille, poids approximatif, état."
                    placeholder="Ex : Une enveloppe A4 contenant un acte de naissance, environ 50g..."
                    value={form.description}
                    onChange={(e) => update('description', e.target.value)}
                  />

                  <div className="rounded-2xl border-2 border-terra-200 bg-terra-50 p-4">
                    <p className="text-xs font-semibold text-terra-500 mb-2">
                      ⚠️ Objets refusés
                    </p>
                    <p className="text-xs text-ink-400 leading-relaxed">
                      {FORBIDDEN_CATEGORIES.join(' • ')}.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 2: Urgency + budget */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink-600 font-display">
                      Urgence et compensation
                    </h2>
                    <p className="text-sm text-ink-400 mt-1">
                      Une compensation symbolique encourage les voyageurs à
                      accepter.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-500 mb-3">
                      Niveau d'urgence
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {URGENCY_LEVELS.map((u) => {
                        const selected = form.urgency === u.value;
                        return (
                          <button
                            key={u.value}
                            type="button"
                            onClick={() => update('urgency', u.value)}
                            className={`p-3 rounded-2xl border-2 transition-all text-center ${
                              selected
                                ? 'border-peach-400 bg-peach-50 shadow-warm'
                                : 'border-cream-200 bg-cream-50 hover:border-peach-200'
                            }`}
                          >
                            <div className="font-semibold text-ink-600 text-sm">
                              {u.label}
                            </div>
                            <div className="text-xs text-ink-400 mt-0.5">
                              {u.hint}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between mb-3">
                      <label className="text-sm font-semibold text-ink-500">
                        Compensation estimée
                      </label>
                      <span className="font-display text-3xl font-bold text-peach-500">
                        {form.compensation_budget} €
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={80}
                      step={5}
                      value={form.compensation_budget}
                      onChange={(e) =>
                        update('compensation_budget', Number(e.target.value))
                      }
                      className="w-full h-2 rounded-full bg-cream-200 appearance-none cursor-pointer accent-peach-400"
                    />
                    <div className="flex justify-between text-xs text-ink-300 mt-2">
                      <span>10 €</span>
                      <span>80 €</span>
                    </div>
                    <p className="text-xs text-ink-400 mt-3 leading-relaxed">
                      Conseil : 15-25 € pour une enveloppe, 25-45 € pour une
                      petite pochette, 35-60 € pour un petit sac.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 3: Confirmation */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink-600 font-display">
                      Récapitulatif
                    </h2>
                    <p className="text-sm text-ink-400 mt-1">
                      Vérifiez et confirmez votre demande.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cream-100 p-5 space-y-3">
                    <Row
                      label="Trajet"
                      value={`${form.departure_city} → ${form.arrival_city}`}
                    />
                    <Row
                      label="Date souhaitée"
                      value={
                        form.desired_delivery_date
                          ? new Date(
                              form.desired_delivery_date
                            ).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })
                          : '—'
                      }
                    />
                    <Row
                      label="Objet"
                      value={
                        ITEM_CATEGORIES.find((c) => c.value === form.category)
                          ?.label ?? '—'
                      }
                    />
                    <Row
                      label="Urgence"
                      value={
                        URGENCY_LEVELS.find((u) => u.value === form.urgency)
                          ?.label ?? '—'
                      }
                    />
                    <Row
                      label="Compensation"
                      value={`${form.compensation_budget} €`}
                    />
                  </div>

                  <Checkbox
                    name="terms_accepted"
                    checked={form.terms_accepted}
                    onChange={(e) =>
                      update('terms_accepted', e.target.checked)
                    }
                    label={
                      <>
                        Je confirme que mon objet est{' '}
                        <strong>légal, non commercial</strong> et conforme aux{' '}
                        <Link
                          href="/trust"
                          className="underline text-peach-500"
                        >
                          règles de Jibly
                        </Link>
                        . Je comprends que Jibly est une plateforme de mise en
                        relation et non un transporteur.
                      </>
                    }
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
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

            {step < STEP_LABELS.length - 1 ? (
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
                Publier ma demande
                <Check className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-ink-400">{label}</span>
      <span className="font-semibold text-ink-600">{value}</span>
    </div>
  );
}
