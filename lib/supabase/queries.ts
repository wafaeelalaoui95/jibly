/**
 * Exemples de requêtes Supabase pour Jibly.
 *
 * Référence pour brancher les flux (envoyer / voyager / matches) sur la base.
 * Les pages utilisent un mode démo tant que .env.local n'est pas configuré.
 */

import { getSupabaseClient } from './client';
import type {
  SenderRequest,
  TravelerTrip,
  Match,
  ItemCategory,
  Urgency,
  AvailableSpace,
} from '@/lib/types';

// ----------------------------------------------------------------------------
// Sender requests
// ----------------------------------------------------------------------------

export async function createSenderRequest(input: {
  senderId: string;
  departureCountry: string;
  departureCity: string;
  arrivalCountry: string;
  arrivalCity: string;
  desiredDate: string;
  itemCategory: ItemCategory;
  description: string;
  urgency: Urgency;
  budgetEur: number;
  prescriptionUrl?: string | null;
  rulesAccepted: boolean;
}) {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error('Supabase non configuré');

  const { data, error } = await supabase
    .from('sender_requests')
    .insert({
      sender_id: input.senderId,
      departure_country: input.departureCountry,
      departure_city: input.departureCity,
      arrival_country: input.arrivalCountry,
      arrival_city: input.arrivalCity,
      desired_date: input.desiredDate,
      item_category: input.itemCategory,
      description: input.description,
      urgency: input.urgency,
      budget_eur: input.budgetEur,
      prescription_url: input.prescriptionUrl ?? null,
      rules_accepted: input.rulesAccepted,
      status: 'pending_review',
    })
    .select()
    .single();

  if (error) throw error;
  return data as SenderRequest;
}

export async function listOpenSenderRequests(filters?: {
  departureCity?: string;
  arrivalCity?: string;
}) {
  const supabase = getSupabaseClient();
  if (!supabase) return [];

  let query = supabase
    .from('sender_requests')
    .select('*')
    .eq('status', 'open')
    .order('desired_date', { ascending: true });

  if (filters?.departureCity) query = query.eq('departure_city', filters.departureCity);
  if (filters?.arrivalCity) query = query.eq('arrival_city', filters.arrivalCity);

  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as SenderRequest[];
}

// ----------------------------------------------------------------------------
// Traveler trips
// ----------------------------------------------------------------------------

export async function createTravelerTrip(input: {
  travelerId: string;
  departureCountry: string;
  departureCity: string;
  arrivalCountry: string;
  arrivalCity: string;
  travelDate: string;
  flightTime?: string | null;
  availableSpace: AvailableSpace;
  compensationMinEur: number;
  compensationMaxEur: number;
  notes?: string;
  responsibilityAccepted: boolean;
}) {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error('Supabase non configuré');

  const { data, error } = await supabase
    .from('traveler_trips')
    .insert({
      traveler_id: input.travelerId,
      departure_country: input.departureCountry,
      departure_city: input.departureCity,
      arrival_country: input.arrivalCountry,
      arrival_city: input.arrivalCity,
      travel_date: input.travelDate,
      flight_time: input.flightTime ?? null,
      available_space: input.availableSpace,
      compensation_min_eur: input.compensationMinEur,
      compensation_max_eur: input.compensationMaxEur,
      notes: input.notes ?? null,
      responsibility_accepted: input.responsibilityAccepted,
      status: 'pending_review',
    })
    .select()
    .single();

  if (error) throw error;
  return data as TravelerTrip;
}

export async function listOpenTrips(filters?: {
  departureCity?: string;
  arrivalCity?: string;
}) {
  const supabase = getSupabaseClient();
  if (!supabase) return [];

  let query = supabase
    .from('traveler_trips')
    .select('*, traveler:users!traveler_trips_traveler_id_fkey(*)')
    .eq('status', 'open')
    .order('travel_date', { ascending: true });

  if (filters?.departureCity) query = query.eq('departure_city', filters.departureCity);
  if (filters?.arrivalCity) query = query.eq('arrival_city', filters.arrivalCity);

  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

// ----------------------------------------------------------------------------
// Matches
// ----------------------------------------------------------------------------

export async function requestMatch(input: {
  senderRequestId: string;
  travelerTripId: string;
  initiatedBy: string;
  message: string;
  agreedAmountEur: number;
}) {
  const supabase = getSupabaseClient();
  if (!supabase) throw new Error('Supabase non configuré');

  const { data, error } = await supabase
    .from('matches')
    .insert({
      sender_request_id: input.senderRequestId,
      traveler_trip_id: input.travelerTripId,
      initiated_by: input.initiatedBy,
      message: input.message,
      agreed_amount_eur: input.agreedAmountEur,
      status: 'requested',
    })
    .select()
    .single();

  if (error) throw error;
  return data as Match;
}
