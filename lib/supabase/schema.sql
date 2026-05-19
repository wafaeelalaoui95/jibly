-- ============================================================================
-- Jibly — Supabase Schema
-- ----------------------------------------------------------------------------
-- Plateforme de mise en relation entre expéditeurs et voyageurs
-- Paris ⇄ Casablanca
--
-- Usage:
--   1. Open the Supabase SQL editor
--   2. Paste this entire file and run it
--   3. RLS is enabled by default. Tune policies for your needs.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Extensions
-- ----------------------------------------------------------------------------
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- ----------------------------------------------------------------------------
-- Enums
-- ----------------------------------------------------------------------------
-- Note: city/country are flexible text fields to support worldwide locations.
-- The curated list (countries with strong Moroccan diaspora) is maintained
-- in lib/countries.ts on the application side.

do $$ begin
  create type verification_level as enum ('none', 'email', 'id_verified', 'trusted');
exception when duplicate_object then null; end $$;

do $$ begin
  create type item_category_code as enum ('documents', 'cles', 'medicaments', 'petits_objets');
exception when duplicate_object then null; end $$;

do $$ begin
  create type urgency as enum ('standard', 'rapide', 'urgent');
exception when duplicate_object then null; end $$;

do $$ begin
  create type available_space as enum ('enveloppe', 'pochette', 'petit_sac');
exception when duplicate_object then null; end $$;

do $$ begin
  create type request_status as enum ('draft', 'pending_review', 'open', 'matched', 'completed', 'cancelled', 'rejected');
exception when duplicate_object then null; end $$;

do $$ begin
  create type trip_status as enum ('draft', 'pending_review', 'open', 'matched', 'completed', 'cancelled', 'rejected');
exception when duplicate_object then null; end $$;

do $$ begin
  create type match_status as enum ('requested', 'accepted', 'rejected', 'completed', 'cancelled');
exception when duplicate_object then null; end $$;

do $$ begin
  create type payment_status as enum ('pending', 'held', 'released', 'refunded', 'failed');
exception when duplicate_object then null; end $$;

do $$ begin
  create type report_severity as enum ('low', 'medium', 'high');
exception when duplicate_object then null; end $$;

do $$ begin
  create type report_status as enum ('open', 'investigating', 'resolved', 'dismissed');
exception when duplicate_object then null; end $$;

-- ============================================================================
-- USERS
-- ----------------------------------------------------------------------------
-- Profil utilisateur lié à auth.users (Supabase Auth).
-- Une ligne par utilisateur authentifié.
-- ============================================================================
create table if not exists public.users (
  id                  uuid primary key references auth.users(id) on delete cascade,
  email               text unique not null,
  full_name           text,
  avatar_url          text,
  phone               text,
  bio                 text,
  city_of_residence   text,
  country_of_residence text,  -- ISO 3166-1 alpha-2 (e.g. 'FR', 'MA')
  verification_level  verification_level not null default 'none',
  rating              numeric(2,1) check (rating is null or (rating >= 0 and rating <= 5)),
  total_trips         integer not null default 0,
  total_deliveries    integer not null default 0,
  is_admin            boolean not null default false,
  is_banned           boolean not null default false,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

create index if not exists users_verification_idx on public.users(verification_level);
create index if not exists users_city_idx on public.users(city_of_residence);

-- ============================================================================
-- ITEM_CATEGORIES
-- ----------------------------------------------------------------------------
-- Catégories d'objets autorisées (table de référence).
-- Seed data inséré en bas du fichier.
-- ============================================================================
create table if not exists public.item_categories (
  code            item_category_code primary key,
  label_fr        text not null,
  description_fr  text,
  icon            text,
  requires_proof  boolean not null default false,
  is_active       boolean not null default true,
  display_order   integer not null default 0
);

-- ============================================================================
-- SENDER_REQUESTS
-- ----------------------------------------------------------------------------
-- Demandes d'envoi publiées par les expéditeurs.
-- ============================================================================
create table if not exists public.sender_requests (
  id                  uuid primary key default uuid_generate_v4(),
  sender_id           uuid not null references public.users(id) on delete cascade,
  departure_country   text not null,  -- ISO code, e.g. 'FR'
  departure_city      text not null,
  arrival_country     text not null,
  arrival_city        text not null,
  desired_date        date not null,
  item_category       item_category_code not null references public.item_categories(code),
  description         text not null,
  urgency             urgency not null default 'standard',
  budget_eur          integer not null check (budget_eur >= 0 and budget_eur <= 500),
  prescription_url    text,                  -- requis si item_category = 'medicaments'
  rules_accepted      boolean not null default false,
  status              request_status not null default 'pending_review',
  rejection_reason    text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  constraint different_cities check (departure_city <> arrival_city),
  constraint medication_requires_prescription check (
    item_category <> 'medicaments' or prescription_url is not null
  )
);

create index if not exists sender_requests_sender_idx on public.sender_requests(sender_id);
create index if not exists sender_requests_status_idx on public.sender_requests(status);
create index if not exists sender_requests_route_idx on public.sender_requests(departure_city, arrival_city, desired_date);

-- ============================================================================
-- TRAVELER_TRIPS
-- ----------------------------------------------------------------------------
-- Trajets publiés par les voyageurs.
-- ============================================================================
create table if not exists public.traveler_trips (
  id                       uuid primary key default uuid_generate_v4(),
  traveler_id              uuid not null references public.users(id) on delete cascade,
  departure_country        text not null,
  departure_city           text not null,
  arrival_country          text not null,
  arrival_city             text not null,
  travel_date              date not null,
  flight_time              time,
  available_space          available_space not null,
  compensation_min_eur     integer not null check (compensation_min_eur >= 0),
  compensation_max_eur     integer not null check (compensation_max_eur >= compensation_min_eur),
  notes                    text,
  responsibility_accepted  boolean not null default false,
  status                   trip_status not null default 'pending_review',
  rejection_reason         text,
  created_at               timestamptz not null default now(),
  updated_at               timestamptz not null default now(),
  constraint different_cities_trip check (departure_city <> arrival_city)
);

create index if not exists traveler_trips_traveler_idx on public.traveler_trips(traveler_id);
create index if not exists traveler_trips_status_idx on public.traveler_trips(status);
create index if not exists traveler_trips_route_idx on public.traveler_trips(departure_city, arrival_city, travel_date);

-- ============================================================================
-- MATCHES
-- ----------------------------------------------------------------------------
-- Mise en relation entre une demande d'envoi et un trajet voyageur.
-- ============================================================================
create table if not exists public.matches (
  id                  uuid primary key default uuid_generate_v4(),
  sender_request_id   uuid not null references public.sender_requests(id) on delete cascade,
  traveler_trip_id    uuid not null references public.traveler_trips(id) on delete cascade,
  initiated_by        uuid not null references public.users(id),
  status              match_status not null default 'requested',
  agreed_amount_eur   integer check (agreed_amount_eur >= 0),
  message             text,                  -- message initial de la mise en relation
  accepted_at         timestamptz,
  completed_at        timestamptz,
  cancelled_at        timestamptz,
  cancellation_reason text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  unique (sender_request_id, traveler_trip_id)
);

create index if not exists matches_sender_request_idx on public.matches(sender_request_id);
create index if not exists matches_traveler_trip_idx on public.matches(traveler_trip_id);
create index if not exists matches_status_idx on public.matches(status);

-- ============================================================================
-- PAYMENTS
-- ----------------------------------------------------------------------------
-- Suivi des paiements / compensation (séquestre simulé pour le MVP).
-- ============================================================================
create table if not exists public.payments (
  id                  uuid primary key default uuid_generate_v4(),
  match_id            uuid not null unique references public.matches(id) on delete cascade,
  payer_id            uuid not null references public.users(id),
  payee_id            uuid not null references public.users(id),
  amount_eur          integer not null check (amount_eur >= 0),
  platform_fee_eur    integer not null default 0 check (platform_fee_eur >= 0),
  status              payment_status not null default 'pending',
  provider            text,                  -- ex: 'stripe', 'mock'
  provider_ref        text,                  -- ex: id paiement chez le prestataire
  held_at             timestamptz,
  released_at         timestamptz,
  refunded_at         timestamptz,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

create index if not exists payments_payer_idx on public.payments(payer_id);
create index if not exists payments_payee_idx on public.payments(payee_id);
create index if not exists payments_status_idx on public.payments(status);

-- ============================================================================
-- VERIFICATION_DOCUMENTS
-- ----------------------------------------------------------------------------
-- Documents soumis pour vérification (pièce d'identité, ordonnance, etc.).
-- ============================================================================
create table if not exists public.verification_documents (
  id              uuid primary key default uuid_generate_v4(),
  user_id         uuid not null references public.users(id) on delete cascade,
  doc_type        text not null,             -- 'id_card', 'passport', 'prescription', 'selfie'
  file_url        text not null,             -- chemin Supabase Storage
  status          text not null default 'pending', -- 'pending', 'approved', 'rejected'
  reviewed_by     uuid references public.users(id),
  reviewed_at     timestamptz,
  rejection_note  text,
  expires_at      date,
  created_at      timestamptz not null default now()
);

create index if not exists verification_docs_user_idx on public.verification_documents(user_id);
create index if not exists verification_docs_status_idx on public.verification_documents(status);

-- ============================================================================
-- REPORTS
-- ----------------------------------------------------------------------------
-- Signalements utilisateurs / modération.
-- ============================================================================
create table if not exists public.reports (
  id                  uuid primary key default uuid_generate_v4(),
  reporter_id         uuid not null references public.users(id) on delete set null,
  reported_user_id    uuid references public.users(id) on delete set null,
  related_request_id  uuid references public.sender_requests(id) on delete set null,
  related_trip_id     uuid references public.traveler_trips(id) on delete set null,
  related_match_id    uuid references public.matches(id) on delete set null,
  reason              text not null,
  description         text,
  severity            report_severity not null default 'medium',
  status              report_status not null default 'open',
  resolution_note     text,
  resolved_by         uuid references public.users(id),
  resolved_at         timestamptz,
  created_at          timestamptz not null default now()
);

create index if not exists reports_status_idx on public.reports(status);
create index if not exists reports_severity_idx on public.reports(severity);

-- ============================================================================
-- Triggers — updated_at automatique
-- ============================================================================
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$ begin
  create trigger users_updated_at before update on public.users
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger sender_requests_updated_at before update on public.sender_requests
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger traveler_trips_updated_at before update on public.traveler_trips
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger matches_updated_at before update on public.matches
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

do $$ begin
  create trigger payments_updated_at before update on public.payments
    for each row execute function public.set_updated_at();
exception when duplicate_object then null; end $$;

-- ============================================================================
-- Seed — Item Categories
-- ============================================================================
insert into public.item_categories (code, label_fr, description_fr, icon, requires_proof, display_order)
values
  ('documents',    'Documents importants',     'Passeports, papiers administratifs, contrats', 'file-text', false, 1),
  ('cles',         'Clés',                     'Clés de maison, de voiture, de boîte aux lettres', 'key', false, 2),
  ('medicaments',  'Médicaments sur ordonnance','Uniquement avec ordonnance et emballage d''origine', 'pill', true, 3),
  ('petits_objets','Petits objets personnels', 'Lunettes, charger, livre, objet sentimental léger', 'package', false, 4)
on conflict (code) do nothing;

-- ============================================================================
-- Row Level Security (RLS)
-- ----------------------------------------------------------------------------
-- Activez RLS partout. Les policies ci-dessous sont des bases de départ —
-- adaptez-les à vos besoins réels avant la mise en production.
-- ============================================================================
alter table public.users                  enable row level security;
alter table public.sender_requests        enable row level security;
alter table public.traveler_trips         enable row level security;
alter table public.matches                enable row level security;
alter table public.payments               enable row level security;
alter table public.verification_documents enable row level security;
alter table public.reports                enable row level security;
alter table public.item_categories        enable row level security;

-- item_categories : lecture publique
drop policy if exists "Anyone can read categories" on public.item_categories;
create policy "Anyone can read categories"
  on public.item_categories for select
  using (true);

-- users : chacun lit/édite son profil, lecture publique d'un sous-ensemble
drop policy if exists "Users can read own profile" on public.users;
create policy "Users can read own profile"
  on public.users for select
  using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.users;
create policy "Users can update own profile"
  on public.users for update
  using (auth.uid() = id);

-- sender_requests : un utilisateur gère ses propres demandes ; les demandes 'open' sont visibles
drop policy if exists "Users can read open sender requests" on public.sender_requests;
create policy "Users can read open sender requests"
  on public.sender_requests for select
  using (status = 'open' or sender_id = auth.uid());

drop policy if exists "Users can insert own sender requests" on public.sender_requests;
create policy "Users can insert own sender requests"
  on public.sender_requests for insert
  with check (auth.uid() = sender_id);

drop policy if exists "Users can update own sender requests" on public.sender_requests;
create policy "Users can update own sender requests"
  on public.sender_requests for update
  using (auth.uid() = sender_id);

-- traveler_trips : idem
drop policy if exists "Users can read open trips" on public.traveler_trips;
create policy "Users can read open trips"
  on public.traveler_trips for select
  using (status = 'open' or traveler_id = auth.uid());

drop policy if exists "Users can insert own trips" on public.traveler_trips;
create policy "Users can insert own trips"
  on public.traveler_trips for insert
  with check (auth.uid() = traveler_id);

drop policy if exists "Users can update own trips" on public.traveler_trips;
create policy "Users can update own trips"
  on public.traveler_trips for update
  using (auth.uid() = traveler_id);

-- matches : visible uniquement aux deux parties impliquées
drop policy if exists "Match visible to participants" on public.matches;
create policy "Match visible to participants"
  on public.matches for select
  using (
    auth.uid() = initiated_by
    or auth.uid() in (
      select sender_id from public.sender_requests where id = sender_request_id
      union
      select traveler_id from public.traveler_trips where id = traveler_trip_id
    )
  );

drop policy if exists "Users can create matches" on public.matches;
create policy "Users can create matches"
  on public.matches for insert
  with check (auth.uid() = initiated_by);

-- payments : visible aux parties
drop policy if exists "Payments visible to payer/payee" on public.payments;
create policy "Payments visible to payer/payee"
  on public.payments for select
  using (auth.uid() in (payer_id, payee_id));

-- verification_documents : seul le propriétaire lit ses docs
drop policy if exists "Users read own verification docs" on public.verification_documents;
create policy "Users read own verification docs"
  on public.verification_documents for select
  using (auth.uid() = user_id);

drop policy if exists "Users insert own verification docs" on public.verification_documents;
create policy "Users insert own verification docs"
  on public.verification_documents for insert
  with check (auth.uid() = user_id);

-- reports : un utilisateur voit ses propres signalements
drop policy if exists "Reporters read own reports" on public.reports;
create policy "Reporters read own reports"
  on public.reports for select
  using (auth.uid() = reporter_id);

drop policy if exists "Users can create reports" on public.reports;
create policy "Users can create reports"
  on public.reports for insert
  with check (auth.uid() = reporter_id);

-- ============================================================================
-- Note: pour l'admin, créez un rôle Postgres dédié ou ajoutez des policies
-- conditionnées sur public.users.is_admin = true via une fonction security
-- definer. Exemple :
--
--   create policy "Admins see all sender_requests"
--     on public.sender_requests for select
--     using (
--       exists (select 1 from public.users where id = auth.uid() and is_admin)
--     );
-- ============================================================================
