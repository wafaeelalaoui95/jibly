# Jibly ✈️

> Envoyez vos documents entre **Paris** et **Casablanca** grâce aux voyageurs de confiance.

Jibly est une **plateforme de mise en relation** entre des personnes qui doivent envoyer un objet simple (documents, clés, médicaments sur ordonnance, petits objets personnels) et des voyageurs déjà sur la route Paris ⇄ Casablanca.

> ⚠️ Jibly n'est **pas** un transporteur. Les utilisateurs restent responsables de vérifier que les objets sont autorisés.

---

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript** strict
- **Tailwind CSS** avec palette personnalisée (cream / peach / sky / sage / sand / terra / ink)
- **Framer Motion** pour les animations (mascotte, transitions, hovers)
- **Supabase** prêt à brancher (auth + base de données + storage)
- **Polices** : Fraunces (display) + Plus Jakarta Sans (corps)

---

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. (Optionnel) Configurer Supabase
cp .env.local.example .env.local
#    puis remplir NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY

# 3. Lancer en dev
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

> Sans variables d'environnement, le site tourne en **mode démo** avec des données factices (voir `lib/constants.ts`). Tous les formulaires fonctionnent côté client mais n'écrivent rien en base — vous pouvez explorer l'expérience complète sans aucune configuration.

---

## Structure du projet

```
jibly/
├── app/
│   ├── layout.tsx            # Layout racine (Navbar + Footer, polices, SEO)
│   ├── globals.css           # Tailwind + utilitaires custom (grain, mesh, route)
│   ├── page.tsx              # Landing page (hero animé, problème/solution, 3 étapes)
│   ├── envoyer/page.tsx      # Flux expéditeur (4 étapes)
│   ├── voyager/page.tsx      # Flux voyageur (4 étapes)
│   ├── matches/page.tsx      # Page de matching
│   ├── trust/page.tsx        # Page confiance & sécurité
│   └── admin/page.tsx        # Mockup dashboard admin
├── components/
│   ├── ui/                   # Primitives (Button, Card, Form, Badge, Stepper)
│   ├── illustrations/        # SVG custom (WalkingTraveler, Travel, Logo)
│   └── layout/               # Navbar, Footer
├── lib/
│   ├── constants.ts          # Villes, catégories, urgences, données démo
│   ├── utils.ts              # cn(), formatDate(), helpers
│   ├── types/index.ts        # Types TypeScript miroir du schéma SQL
│   └── supabase/
│       ├── client.ts         # Client Supabase (graceful fallback mode démo)
│       ├── schema.sql        # Schéma SQL complet (tables, enums, RLS)
│       └── queries.ts        # Exemples de requêtes (insert / list / update)
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## Pages

| Route        | Description                                                                      |
|--------------|----------------------------------------------------------------------------------|
| `/`          | Landing avec hero animé, mascotte voyageuse, route Paris–Casa, 3 étapes, trust   |
| `/envoyer`   | Formulaire expéditeur en 4 étapes (trajet → objet → détails → confirmation)      |
| `/voyager`   | Formulaire voyageur en 4 étapes (trajet → espace → identité → validation)        |
| `/matches`   | Cartes voyageurs avec filtres, badges de vérification, CTA mise en relation      |
| `/trust`     | 6 piliers de sécurité, objets autorisés/interdits, bonnes pratiques              |
| `/admin`     | Tableau de bord modération (mockup, données démo)                                |

---

## Brancher Supabase

### 1. Créer le projet

Créez un projet sur [supabase.com](https://supabase.com), récupérez **Project URL** et **anon public key**.

### 2. Remplir `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anon
```

### 3. Exécuter le schéma SQL

Ouvrez l'éditeur SQL Supabase, copiez/collez le contenu de [`lib/supabase/schema.sql`](./lib/supabase/schema.sql), puis exécutez. Cela crée :

- **8 tables** : `users`, `sender_requests`, `traveler_trips`, `matches`, `payments`, `verification_documents`, `item_categories`, `reports`
- Les **enums** (villes, catégories, urgences, statuts, espaces, niveaux de vérification…)
- Les **index** sur les colonnes filtrées (route, statut, date)
- Les **triggers** `updated_at` automatiques
- Les **policies RLS** de base
- Le **seed** des catégories d'objets

### 4. Connecter les flux

Les pages contiennent déjà des commentaires `// TODO: supabase.from(...).insert(...)` aux endroits clés. Importez les helpers depuis `lib/supabase/queries.ts` :

```ts
import { createSenderRequest } from "@/lib/supabase/queries";

await createSenderRequest({
  senderId: user.id,
  departureCity: "paris",
  arrivalCity: "casablanca",
  // ...
});
```

---

## Schéma de la base de données

### Vue d'ensemble

```
users ──┬── sender_requests ───┐
        │                      ├── matches ── payments
        └── traveler_trips ────┘
        │
        ├── verification_documents
        └── reports
```

### Tables

#### `users`
Profil utilisateur lié à `auth.users` (Supabase Auth).
- `id` (uuid, PK, FK → auth.users)
- `email`, `full_name`, `avatar_url`, `phone`, `bio`
- `city_of_residence` (city enum)
- `verification_level` (`none` / `email` / `id_verified` / `trusted`)
- `rating` (0–5), `total_trips`, `total_deliveries`
- `is_admin`, `is_banned`
- `created_at`, `updated_at`

#### `item_categories`
Table de référence (seed). Codes : `documents`, `cles`, `medicaments`, `petits_objets`.
- `code` (PK), `label_fr`, `description_fr`, `icon`
- `requires_proof` (true pour médicaments)
- `is_active`, `display_order`

#### `sender_requests`
Demandes d'envoi publiées par les expéditeurs.
- `sender_id` → `users.id`
- `departure_city`, `arrival_city` (≠), `desired_date`
- `item_category` → `item_categories.code`
- `description`, `urgency`, `budget_eur`
- `prescription_url` (requis si médicaments — contrainte CHECK)
- `rules_accepted`, `status`

#### `traveler_trips`
Trajets publiés par les voyageurs.
- `traveler_id` → `users.id`
- `departure_city`, `arrival_city` (≠), `travel_date`, `flight_time`
- `available_space` (`enveloppe` / `pochette` / `petit_sac`)
- `compensation_min_eur`, `compensation_max_eur`
- `responsibility_accepted`, `status`

#### `matches`
Mise en relation entre une `sender_request` et un `traveler_trip`.
- `sender_request_id`, `traveler_trip_id` (unique ensemble)
- `initiated_by` → `users.id`
- `status` (`requested` / `accepted` / `rejected` / `completed` / `cancelled`)
- `agreed_amount_eur`, `message`
- `accepted_at`, `completed_at`, `cancelled_at`

#### `payments`
Suivi de la compensation (séquestre simulé en MVP).
- `match_id` (unique) → `matches.id`
- `payer_id`, `payee_id` → `users.id`
- `amount_eur`, `platform_fee_eur`
- `status` (`pending` / `held` / `released` / `refunded` / `failed`)
- `provider`, `provider_ref` (pour brancher Stripe plus tard)

#### `verification_documents`
Pièces d'identité, ordonnances, selfies.
- `user_id` → `users.id`
- `doc_type`, `file_url` (Supabase Storage)
- `status` (`pending` / `approved` / `rejected`)
- `reviewed_by`, `reviewed_at`, `rejection_note`

#### `reports`
Signalements et modération.
- `reporter_id`, `reported_user_id`
- `related_request_id` / `related_trip_id` / `related_match_id` (optionnels)
- `reason`, `description`, `severity`, `status`
- `resolved_by`, `resolved_at`

---

## Règles métier importantes

### Objets **autorisés**
✅ Documents importants
✅ Clés
✅ Médicaments sur ordonnance (avec ordonnance + emballage d'origine)
✅ Petits objets personnels

### Objets **interdits**
❌ Nourriture, alcool
❌ Produits de luxe, bijoux, montres
❌ Argent liquide
❌ Électronique
❌ Substances illégales ou contrôlées, armes
❌ Contrefaçons, marchandises commerciales

Ces règles sont rappelées dans le formulaire `/envoyer`, sur `/trust`, et dans le footer.

---

## Design

- **Palette** : cream backgrounds, accents peach / sky / sage / sand / terra, ink (brun chaud à la place du noir)
- **Typo** : Fraunces (titres playful) + Plus Jakarta Sans (lecture)
- **Rounded** partout (`rounded-2xl`, `rounded-3xl`, `rounded-4xl`)
- **Mascotte** : personnage SVG animé qui marche avec une valise (`components/illustrations/WalkingTraveler.tsx`)
- **Animations** : Framer Motion (entrées, hovers, floats), keyframes Tailwind (`walk`, `float`, `cloud-drift`, `wiggle`)
- **Inspiration** : Airbnb × Duolingo × travel journaling

---

## Scripts

| Commande           | Description                       |
|--------------------|-----------------------------------|
| `npm run dev`      | Lance le serveur de développement |
| `npm run build`    | Build de production               |
| `npm run start`    | Lance le serveur de production    |
| `npm run lint`     | Lint                              |

---

## Prochaines étapes

- [ ] Brancher Supabase Auth (email magic link + Google)
- [ ] Stocker l'upload d'ordonnance dans Supabase Storage + URL signée
- [ ] Messagerie interne entre matches (table `messages`)
- [ ] Intégrer Stripe Connect pour le séquestre réel
- [ ] Notifications email (Resend / Postmark) sur match accepté
- [ ] Vérification d'identité automatisée (Stripe Identity ou similaire)
- [ ] Avis croisés après livraison

---

## Disclaimer

Jibly est une plateforme de mise en relation. Les utilisateurs sont responsables de vérifier que l'objet est autorisé au transport. Jibly n'est responsable d'aucune perte, retard ou problème survenu pendant le trajet. L'utilisation du service implique l'acceptation des CGU.
