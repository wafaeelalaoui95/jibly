import type { City, ItemCategory, Urgency, AvailableSpace } from '@/lib/types';

export const CITIES: { value: City; label: string; emoji: string }[] = [
  { value: 'Paris', label: 'Paris', emoji: '🗼' },
  { value: 'Casablanca', label: 'Casablanca', emoji: '🌊' },
];

export const ITEM_CATEGORIES: {
  value: ItemCategory;
  label: string;
  description: string;
  icon: string;
}[] = [
  {
    value: 'documents',
    label: 'Documents importants',
    description: 'Papiers administratifs, contrats, attestations',
    icon: '📄',
  },
  {
    value: 'cles',
    label: 'Clés',
    description: 'Clés de logement, de voiture, oubliées chez un proche',
    icon: '🔑',
  },
  {
    value: 'medicaments',
    label: 'Médicaments sur ordonnance',
    description: 'Uniquement avec ordonnance et emballage d\'origine',
    icon: '💊',
  },
  {
    value: 'petits_objets',
    label: 'Petits objets personnels',
    description: 'Petits objets non commerciaux et non sensibles',
    icon: '🎁',
  },
];

export const FORBIDDEN_CATEGORIES = [
  'Nourriture',
  'Alcool',
  'Articles de luxe',
  'Argent liquide',
  'Bijoux',
  'Appareils électroniques',
  'Substances illégales',
  'Armes',
  'Contrefaçons',
  'Marchandises commerciales',
];

export const URGENCY_LEVELS: {
  value: Urgency;
  label: string;
  hint: string;
}[] = [
  { value: 'standard', label: 'Standard', hint: 'Dans les 2 semaines' },
  { value: 'rapide', label: 'Rapide', hint: 'Sous 7 jours' },
  { value: 'urgent', label: 'Urgent', hint: 'Sous 48 à 72h' },
];

export const SPACE_OPTIONS: {
  value: AvailableSpace;
  label: string;
  size: string;
  icon: string;
}[] = [
  {
    value: 'enveloppe',
    label: 'Enveloppe',
    size: 'A4, jusqu\'à 200g',
    icon: '✉️',
  },
  {
    value: 'pochette',
    label: 'Petite pochette',
    size: 'Jusqu\'à 500g',
    icon: '👝',
  },
  {
    value: 'petit_sac',
    label: 'Petit sac',
    size: 'Jusqu\'à 1,5 kg',
    icon: '🎒',
  },
];

// Demo data for the matching page when Supabase isn't connected yet.
export const DEMO_TRAVELERS = [
  {
    id: 't1',
    name: 'Yasmine B.',
    avatar: 'YB',
    departure_city: 'Paris' as City,
    arrival_city: 'Casablanca' as City,
    travel_date: '2026-06-04',
    flight_time: '14:30',
    available_space: 'enveloppe' as AvailableSpace,
    compensation_min: 15,
    compensation_max: 25,
    verification_level: 'id_verified' as const,
    rating: 4.9,
    trips_completed: 12,
    bio: 'Étudiante à Sciences Po, je rentre voir ma famille chaque mois.',
  },
  {
    id: 't2',
    name: 'Mehdi A.',
    avatar: 'MA',
    departure_city: 'Casablanca' as City,
    arrival_city: 'Paris' as City,
    travel_date: '2026-06-02',
    flight_time: '09:15',
    available_space: 'pochette' as AvailableSpace,
    compensation_min: 20,
    compensation_max: 35,
    verification_level: 'trusted' as const,
    rating: 5.0,
    trips_completed: 27,
    bio: 'Consultant, je fais le trajet toutes les 3 semaines.',
  },
  {
    id: 't3',
    name: 'Sophie L.',
    avatar: 'SL',
    departure_city: 'Paris' as City,
    arrival_city: 'Casablanca' as City,
    travel_date: '2026-06-07',
    flight_time: '18:45',
    available_space: 'petit_sac' as AvailableSpace,
    compensation_min: 25,
    compensation_max: 45,
    verification_level: 'id_verified' as const,
    rating: 4.8,
    trips_completed: 8,
    bio: 'Architecte, je voyage pour un projet de rénovation à Casa.',
  },
  {
    id: 't4',
    name: 'Karim T.',
    avatar: 'KT',
    departure_city: 'Casablanca' as City,
    arrival_city: 'Paris' as City,
    travel_date: '2026-06-09',
    flight_time: '07:00',
    available_space: 'enveloppe' as AvailableSpace,
    compensation_min: 15,
    compensation_max: 20,
    verification_level: 'email' as const,
    rating: 4.7,
    trips_completed: 4,
    bio: 'Photographe en déplacement pro régulier.',
  },
];
