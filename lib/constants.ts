import type { ItemCategory, Urgency, AvailableSpace } from '@/lib/types';

export const ITEM_CATEGORIES: {
  value: ItemCategory;
  label: string;
  description: string;
  icon: string;
}[] = [
  {
    value: 'documents',
    label: 'Documents',
    description: 'Papiers, contrats, attestations',
    icon: '📄',
  },
  {
    value: 'cles',
    label: 'Clés',
    description: 'Logement, voiture',
    icon: '🔑',
  },
  {
    value: 'medicaments',
    label: 'Médicaments',
    description: 'Sur ordonnance uniquement',
    icon: '💊',
  },
  {
    value: 'petits_objets',
    label: 'Petits objets',
    description: 'Lunettes, livre, souvenirs',
    icon: '🎁',
  },
];

export const FORBIDDEN_CATEGORIES = [
  'Nourriture',
  'Alcool',
  'Articles de luxe',
  'Argent liquide',
  'Bijoux',
  'Électronique',
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
  { value: 'standard', label: 'Standard', hint: '2 semaines' },
  { value: 'rapide', label: 'Rapide', hint: '7 jours' },
  { value: 'urgent', label: 'Urgent', hint: '48-72h' },
];

export const SPACE_OPTIONS: {
  value: AvailableSpace;
  label: string;
  size: string;
  icon: string;
}[] = [
  { value: 'enveloppe', label: 'Enveloppe', size: 'jusqu\'à 200g', icon: '✉️' },
  { value: 'pochette', label: 'Pochette', size: 'jusqu\'à 500g', icon: '👝' },
  { value: 'petit_sac', label: 'Petit sac', size: 'jusqu\'à 1,5 kg', icon: '🎒' },
];

// Demo data — international scope
export const DEMO_TRAVELERS = [
  {
    id: 't1',
    name: 'Yasmine B.',
    avatar: 'YB',
    avatar_color: 'lavender',
    departure_country: 'France',
    departure_flag: '🇫🇷',
    departure_city: 'Paris',
    arrival_country: 'Maroc',
    arrival_flag: '🇲🇦',
    arrival_city: 'Casablanca',
    travel_date: '2026-06-04',
    flight_time: '14:30',
    available_space: 'enveloppe' as AvailableSpace,
    compensation_min: 15,
    compensation_max: 25,
    verification_level: 'id_verified' as const,
    rating: 4.9,
    trips_completed: 12,
    bio: 'Étudiante, je rentre voir ma famille chaque mois.',
  },
  {
    id: 't2',
    name: 'Mehdi A.',
    avatar: 'MA',
    avatar_color: 'butter',
    departure_country: 'Belgique',
    departure_flag: '🇧🇪',
    departure_city: 'Bruxelles',
    arrival_country: 'Maroc',
    arrival_flag: '🇲🇦',
    arrival_city: 'Rabat',
    travel_date: '2026-06-02',
    flight_time: '09:15',
    available_space: 'pochette' as AvailableSpace,
    compensation_min: 20,
    compensation_max: 35,
    verification_level: 'trusted' as const,
    rating: 5.0,
    trips_completed: 27,
    bio: 'Consultant, trajets réguliers.',
  },
  {
    id: 't3',
    name: 'Sophie L.',
    avatar: 'SL',
    avatar_color: 'mint',
    departure_country: 'France',
    departure_flag: '🇫🇷',
    departure_city: 'Marseille',
    arrival_country: 'Maroc',
    arrival_flag: '🇲🇦',
    arrival_city: 'Marrakech',
    travel_date: '2026-06-07',
    flight_time: '18:45',
    available_space: 'petit_sac' as AvailableSpace,
    compensation_min: 25,
    compensation_max: 45,
    verification_level: 'id_verified' as const,
    rating: 4.8,
    trips_completed: 8,
    bio: 'Architecte, projet de rénovation.',
  },
  {
    id: 't4',
    name: 'Karim T.',
    avatar: 'KT',
    avatar_color: 'sky',
    departure_country: 'Espagne',
    departure_flag: '🇪🇸',
    departure_city: 'Madrid',
    arrival_country: 'Maroc',
    arrival_flag: '🇲🇦',
    arrival_city: 'Tanger',
    travel_date: '2026-06-09',
    flight_time: '07:00',
    available_space: 'enveloppe' as AvailableSpace,
    compensation_min: 15,
    compensation_max: 20,
    verification_level: 'email' as const,
    rating: 4.7,
    trips_completed: 4,
    bio: 'Photographe, déplacements pro.',
  },
  {
    id: 't5',
    name: 'Amélie R.',
    avatar: 'AR',
    avatar_color: 'blush',
    departure_country: 'Canada',
    departure_flag: '🇨🇦',
    departure_city: 'Montréal',
    arrival_country: 'France',
    arrival_flag: '🇫🇷',
    arrival_city: 'Paris',
    travel_date: '2026-06-12',
    flight_time: '22:00',
    available_space: 'pochette' as AvailableSpace,
    compensation_min: 30,
    compensation_max: 50,
    verification_level: 'trusted' as const,
    rating: 4.95,
    trips_completed: 19,
    bio: 'Doctorante, allers-retours fréquents.',
  },
  {
    id: 't6',
    name: 'Hamza K.',
    avatar: 'HK',
    avatar_color: 'lavender',
    departure_country: 'Pays-Bas',
    departure_flag: '🇳🇱',
    departure_city: 'Amsterdam',
    arrival_country: 'Maroc',
    arrival_flag: '🇲🇦',
    arrival_city: 'Casablanca',
    travel_date: '2026-06-14',
    flight_time: '11:30',
    available_space: 'petit_sac' as AvailableSpace,
    compensation_min: 25,
    compensation_max: 40,
    verification_level: 'id_verified' as const,
    rating: 4.85,
    trips_completed: 11,
    bio: 'Designer, je rentre voir mes parents.',
  },
];
