/**
 * Jibly i18n — French / English / Darija (Moroccan Arabic)
 *
 * Translations are hand-crafted, not Google-translated.
 * French: natural for FR/Maghreb users
 * Darija: warm, familiar, casual but professional for a service platform
 * RTL: enabled automatically for 'ar' locale
 */

export type Locale = 'fr' | 'en' | 'ar';

export const LOCALES: { code: Locale; label: string; flag: string; rtl: boolean }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷', rtl: false },
  { code: 'en', label: 'English', flag: '🇬🇧', rtl: false },
  { code: 'ar', label: 'الدارجة', flag: '🇲🇦', rtl: true },
];

export type Translations = {
  // Navbar
  nav_send: string;
  nav_travel: string;
  nav_discover: string;
  nav_trust: string;
  nav_my_space: string;
  nav_start: string;

  // Hero / Landing
  hero_badge: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_search_from: string;
  hero_search_to: string;
  hero_search_button: string;
  hero_social_proof: string;

  // How it works
  how_title: string;
  how_subtitle: string;
  how_step1_title: string;
  how_step1_text: string;
  how_step2_title: string;
  how_step2_text: string;
  how_step3_title: string;
  how_step3_text: string;

  // Travelers preview
  travelers_title: string;
  travelers_subtitle: string;
  travelers_see_all: string;
  travelers_trips: string;

  // Trust pillars
  trust_identity: string;
  trust_data: string;
  trust_messaging: string;
  trust_support: string;

  // Testimonial
  testimonial_quote: string;
  testimonial_author: string;

  // Final CTA
  cta_ready: string;
  cta_subtitle: string;
  cta_send_btn: string;
  cta_travel_btn: string;

  // Sender flow
  send_title: string;
  send_subtitle: string;
  send_step_route: string;
  send_step_item: string;
  send_step_details: string;
  send_step_confirm: string;
  send_route_title: string;
  send_label_from: string;
  send_label_to: string;
  send_placeholder_from: string;
  send_placeholder_to: string;
  send_label_date: string;
  send_item_title: string;
  send_label_description: string;
  send_placeholder_description: string;
  send_prescription_required: string;
  send_upload_prescription: string;
  send_forbidden_title: string;
  send_details_title: string;
  send_label_urgency: string;
  send_label_budget: string;
  send_confirm_title: string;
  send_recap_route: string;
  send_recap_date: string;
  send_recap_item: string;
  send_recap_urgency: string;
  send_recap_budget: string;
  send_terms: string;
  send_publish: string;
  send_success_title: string;
  send_success_text: string;
  send_success_see_travelers: string;
  send_success_back: string;

  // Traveler flow
  trip_title: string;
  trip_subtitle: string;
  trip_step_route: string;
  trip_step_space: string;
  trip_step_identity: string;
  trip_step_validation: string;
  trip_route_title: string;
  trip_label_time: string;
  trip_space_title: string;
  trip_label_min_comp: string;
  trip_min_comp_hint: string;
  trip_identity_title: string;
  trip_identity_subtitle: string;
  trip_identity_benefit_1: string;
  trip_identity_benefit_2: string;
  trip_identity_benefit_3: string;
  trip_upload_id: string;
  trip_validation_title: string;
  trip_engagement_1: string;
  trip_engagement_2: string;
  trip_engagement_3: string;
  trip_engagement_4: string;
  trip_engagement_terms: string;
  trip_publish: string;
  trip_success_title: string;
  trip_success_text: string;

  // Matches page
  matches_title: string;
  matches_subtitle: string;
  matches_empty_title: string;
  matches_empty_text: string;
  matches_publish_btn: string;
  matches_from: string;
  matches_to: string;
  matches_contact: string;
  matches_min: string;

  // Trust page
  trust_badge: string;
  trust_hero_title_1: string;
  trust_hero_title_2: string;
  trust_hero_subtitle: string;
  trust_pillar_identity_title: string;
  trust_pillar_identity_desc: string;
  trust_pillar_data_title: string;
  trust_pillar_data_desc: string;
  trust_pillar_messaging_title: string;
  trust_pillar_messaging_desc: string;
  trust_pillar_report_title: string;
  trust_pillar_report_desc: string;
  trust_pillar_reviews_title: string;
  trust_pillar_reviews_desc: string;
  trust_pillar_support_title: string;
  trust_pillar_support_desc: string;
  trust_allowed_title: string;
  trust_allowed_subtitle: string;
  trust_allowed: string;
  trust_forbidden: string;
  trust_cgu_title: string;
  trust_cgu_text: string;
  trust_cgu_btn: string;

  // My Space (dashboard)
  me_title: string;
  me_tab_overview: string;
  me_tab_requests: string;
  me_tab_trips: string;
  me_tab_matches: string;
  me_tab_profile: string;
  me_stats_active: string;
  me_stats_pending: string;
  me_stats_earned: string;
  me_stats_completed: string;
  me_section_my_requests: string;
  me_section_my_trips: string;
  me_section_pending_matches: string;
  me_section_active: string;
  me_section_completed: string;
  me_section_profile: string;
  me_empty_requests: string;
  me_empty_trips: string;
  me_empty_matches: string;
  me_new_request: string;
  me_new_trip: string;
  me_status_pending: string;
  me_status_open: string;
  me_status_matched: string;
  me_status_in_transit: string;
  me_status_completed: string;
  me_status_cancelled: string;
  me_payment_pending: string;
  me_payment_held: string;
  me_payment_released: string;
  me_profile_name: string;
  me_profile_email: string;
  me_profile_phone: string;
  me_profile_verification: string;
  me_profile_verify_now: string;

  // Common
  common_back: string;
  common_next: string;
  common_cancel: string;
  common_save: string;
  common_loading: string;
  common_optional: string;
  common_eur: string;
  common_message: string;
  common_search_placeholder: string;
  common_no_results: string;
  common_clear: string;

  // Item categories
  cat_documents: string;
  cat_documents_desc: string;
  cat_keys: string;
  cat_keys_desc: string;
  cat_medication: string;
  cat_medication_desc: string;
  cat_small: string;
  cat_small_desc: string;

  // Urgency
  urgency_standard: string;
  urgency_standard_hint: string;
  urgency_fast: string;
  urgency_fast_hint: string;
  urgency_urgent: string;
  urgency_urgent_hint: string;

  // Space
  space_envelope: string;
  space_envelope_size: string;
  space_pouch: string;
  space_pouch_size: string;
  space_bag: string;
  space_bag_size: string;

  // Verification
  verif_trusted: string;
  verif_id: string;
  verif_email: string;
  verif_none: string;

  // Footer
  footer_tagline: string;
  footer_platform: string;
  footer_trust: string;
  footer_community: string;
  footer_made_with: string;

  // Admin
  admin_badge: string;
  admin_title: string;
  admin_tab_overview: string;
  admin_tab_requests: string;
  admin_tab_trips: string;
  admin_tab_reports: string;
  admin_tab_users: string;
  admin_tab_matches: string;
  admin_kpi_active_requests: string;
  admin_kpi_weekly_trips: string;
  admin_kpi_matches: string;
  admin_kpi_open_reports: string;
  admin_recent_activity: string;
  admin_queue: string;
  admin_col_sender: string;
  admin_col_traveler: string;
  admin_col_route: string;
  admin_col_category: string;
  admin_col_date: string;
  admin_col_action: string;
  admin_col_space: string;
  admin_col_compensation: string;
  admin_col_status: string;
  admin_col_amount: string;
  admin_action_approve: string;
  admin_action_reject: string;
  admin_action_review: string;
  admin_action_ignore: string;
  admin_status_accepted: string;
  admin_status_in_progress: string;
  admin_status_delivered: string;
  admin_report_by: string;
  admin_report_concerns: string;
  admin_severity_high: string;
  admin_severity_medium: string;
  admin_trips_count: string;
  admin_starts_at: string;
  admin_ago_min: string;
  admin_ago_hour: string;
  admin_activity_trip_validated: string;
  admin_activity_new_request: string;
  admin_activity_report: string;
  admin_activity_id_verified: string;
};

export const translations: Record<Locale, Translations> = {
  fr: {
    nav_send: 'Envoyer',
    nav_travel: 'Voyager',
    nav_discover: 'Découvrir',
    nav_trust: 'Confiance',
    nav_my_space: 'Mon espace',
    nav_start: 'Commencer',

    hero_badge: 'Communauté de voyageurs vérifiés',
    hero_title_1: 'Quelqu\'un voyage déjà',
    hero_title_2: 'dans votre direction.',
    hero_subtitle: 'Envoyez vos affaires avec un voyageur. Simple, humain, partout dans le monde.',
    hero_search_from: 'Ville de départ',
    hero_search_to: 'Ville d\'arrivée',
    hero_search_button: 'Trouver un voyageur',
    hero_social_proof: '+2 000 voyageurs',

    how_title: 'Comment ça marche',
    how_subtitle: 'Trois étapes, c\'est tout.',
    how_step1_title: 'Publiez',
    how_step1_text: 'Décrivez ce que vous voulez envoyer.',
    how_step2_title: 'Matchez',
    how_step2_text: 'Choisissez un voyageur vérifié.',
    how_step3_title: 'Recevez',
    how_step3_text: 'Suivez votre envoi de bout en bout.',

    travelers_title: 'Des voyageurs prêts à aider',
    travelers_subtitle: 'Réels, vérifiés, bien notés.',
    travelers_see_all: 'Tout voir',
    travelers_trips: 'trajets',

    trust_identity: 'Identité vérifiée',
    trust_data: 'Données protégées',
    trust_messaging: 'Messagerie sécurisée',
    trust_support: 'Support 7/7',

    testimonial_quote: 'J\'ai envoyé les papiers de ma mère depuis Bruxelles. Reçus en 36h. Une magie.',
    testimonial_author: 'Salma — Casablanca',

    cta_ready: 'Prêt à commencer ?',
    cta_subtitle: 'Publiez votre demande en 2 minutes.',
    cta_send_btn: 'Envoyer quelque chose',
    cta_travel_btn: 'Je voyage bientôt',

    send_title: 'Envoyer quelque chose',
    send_subtitle: 'Cela prend 2 minutes.',
    send_step_route: 'Trajet',
    send_step_item: 'Objet',
    send_step_details: 'Détails',
    send_step_confirm: 'Confirmation',
    send_route_title: 'D\'où vers où ?',
    send_label_from: 'Départ',
    send_label_to: 'Arrivée',
    send_placeholder_from: 'Choisir la ville de départ',
    send_placeholder_to: 'Choisir la ville d\'arrivée',
    send_label_date: 'Date souhaitée',
    send_item_title: 'Qu\'envoyez-vous ?',
    send_label_description: 'Description',
    send_placeholder_description: 'Ex: passeport français, dans une enveloppe scellée',
    send_prescription_required: 'Ordonnance obligatoire',
    send_upload_prescription: 'Téléverser l\'ordonnance',
    send_forbidden_title: 'Objets interdits',
    send_details_title: 'Quand et combien ?',
    send_label_urgency: 'Urgence',
    send_label_budget: 'Budget proposé',
    send_confirm_title: 'Tout est bon ?',
    send_recap_route: 'Trajet',
    send_recap_date: 'Date',
    send_recap_item: 'Objet',
    send_recap_urgency: 'Urgence',
    send_recap_budget: 'Budget',
    send_terms: 'J\'accepte que Jibly est une plateforme de mise en relation. Je suis responsable de vérifier que mon objet est autorisé.',
    send_publish: 'Publier',
    send_success_title: 'C\'est publié !',
    send_success_text: 'On vous prévient dès qu\'un voyageur correspond à votre trajet.',
    send_success_see_travelers: 'Voir les voyageurs',
    send_success_back: 'Retour à l\'accueil',

    trip_title: 'Je voyage bientôt',
    trip_subtitle: 'Aidez quelqu\'un, gagnez un peu en chemin.',
    trip_step_route: 'Trajet',
    trip_step_space: 'Espace',
    trip_step_identity: 'Identité',
    trip_step_validation: 'Validation',
    trip_route_title: 'Votre trajet',
    trip_label_time: 'Heure (optionnel)',
    trip_space_title: 'Que pouvez-vous transporter ?',
    trip_label_min_comp: 'Compensation minimum acceptée',
    trip_min_comp_hint: 'L\'expéditeur peut proposer plus. Vous êtes libre de refuser.',
    trip_identity_title: 'Vérifier votre identité',
    trip_identity_subtitle: 'Optionnel mais recommandé. Les profils vérifiés reçoivent 3× plus de demandes.',
    trip_identity_benefit_1: 'Badge "Identité vérifiée" sur votre profil',
    trip_identity_benefit_2: 'Plus de visibilité',
    trip_identity_benefit_3: 'Communauté plus rassurée',
    trip_upload_id: 'Téléverser une pièce d\'identité',
    trip_validation_title: 'Vos engagements',
    trip_engagement_1: 'Je transporte uniquement des objets autorisés',
    trip_engagement_2: 'Je vérifie le contenu avant le départ',
    trip_engagement_3: 'Je traite les envois avec soin et confidentialité',
    trip_engagement_4: 'Je remets l\'objet à la bonne personne',
    trip_engagement_terms: 'Je m\'engage à respecter ces règles et j\'accepte les conditions d\'utilisation de Jibly.',
    trip_publish: 'Publier mon trajet',
    trip_success_title: 'Bon voyage ✈️',
    trip_success_text: 'Votre trajet est publié. On vous prévient si quelqu\'un veut envoyer quelque chose.',

    matches_title: 'Voyageurs disponibles',
    matches_subtitle: 'personnes prêtes à aider.',
    matches_empty_title: 'Aucun voyageur pour le moment',
    matches_empty_text: 'Publiez votre demande, on vous prévient dès qu\'un voyageur passe.',
    matches_publish_btn: 'Publier ma demande',
    matches_from: 'Départ',
    matches_to: 'Arrivée',
    matches_contact: 'Contacter',
    matches_min: 'À partir de',

    trust_badge: 'Sécurité & confiance',
    trust_hero_title_1: 'Une communauté',
    trust_hero_title_2: 'de confiance.',
    trust_hero_subtitle: 'Six piliers pour protéger chaque envoi.',
    trust_pillar_identity_title: 'Identité vérifiée',
    trust_pillar_identity_desc: 'Documents officiels validés.',
    trust_pillar_data_title: 'Données protégées',
    trust_pillar_data_desc: 'Coordonnées partagées uniquement après match.',
    trust_pillar_messaging_title: 'Messagerie interne',
    trust_pillar_messaging_desc: 'Pas de partage de numéro avant accord.',
    trust_pillar_report_title: 'Signalement rapide',
    trust_pillar_report_desc: 'Modération sous 24h.',
    trust_pillar_reviews_title: 'Notes & avis',
    trust_pillar_reviews_desc: 'Communauté basée sur la confiance.',
    trust_pillar_support_title: 'Support 7/7',
    trust_pillar_support_desc: 'Une équipe à votre écoute.',
    trust_allowed_title: 'Ce qui peut voyager',
    trust_allowed_subtitle: 'Et ce qui ne peut pas.',
    trust_allowed: 'Autorisé',
    trust_forbidden: 'Interdit',
    trust_cgu_title: 'Jibly est une plateforme de mise en relation',
    trust_cgu_text: 'Les utilisateurs sont responsables de vérifier que l\'objet est autorisé. Jibly n\'est pas un transporteur.',
    trust_cgu_btn: 'Publier ma demande',

    me_title: 'Mon espace',
    me_tab_overview: 'Aperçu',
    me_tab_requests: 'Mes envois',
    me_tab_trips: 'Mes trajets',
    me_tab_matches: 'Mises en relation',
    me_tab_profile: 'Profil',
    me_stats_active: 'Demandes actives',
    me_stats_pending: 'En attente',
    me_stats_earned: 'Gagné',
    me_stats_completed: 'Livraisons',
    me_section_my_requests: 'Mes envois publiés',
    me_section_my_trips: 'Mes trajets publiés',
    me_section_pending_matches: 'Demandes en attente',
    me_section_active: 'Livraisons en cours',
    me_section_completed: 'Livraisons terminées',
    me_section_profile: 'Mon profil',
    me_empty_requests: 'Aucun envoi pour le moment.',
    me_empty_trips: 'Aucun trajet pour le moment.',
    me_empty_matches: 'Aucune mise en relation en attente.',
    me_new_request: 'Nouveau envoi',
    me_new_trip: 'Nouveau trajet',
    me_status_pending: 'En attente',
    me_status_open: 'Ouvert',
    me_status_matched: 'Matché',
    me_status_in_transit: 'En cours',
    me_status_completed: 'Terminé',
    me_status_cancelled: 'Annulé',
    me_payment_pending: 'Paiement en attente',
    me_payment_held: 'Bloqué',
    me_payment_released: 'Versé',
    me_profile_name: 'Nom complet',
    me_profile_email: 'Email',
    me_profile_phone: 'Téléphone',
    me_profile_verification: 'Vérification',
    me_profile_verify_now: 'Vérifier mon identité',

    common_back: 'Précédent',
    common_next: 'Suivant',
    common_cancel: 'Annuler',
    common_save: 'Enregistrer',
    common_loading: 'Chargement...',
    common_optional: 'optionnel',
    common_eur: '€',
    common_message: 'Message',
    common_search_placeholder: 'Rechercher une ville ou un pays...',
    common_no_results: 'Aucune ville trouvée',
    common_clear: 'Effacer',

    cat_documents: 'Documents',
    cat_documents_desc: 'Papiers, contrats, attestations',
    cat_keys: 'Clés',
    cat_keys_desc: 'Logement, voiture',
    cat_medication: 'Médicaments',
    cat_medication_desc: 'Sur ordonnance uniquement',
    cat_small: 'Petits objets',
    cat_small_desc: 'Lunettes, livre, souvenirs',

    urgency_standard: 'Standard',
    urgency_standard_hint: '2 semaines',
    urgency_fast: 'Rapide',
    urgency_fast_hint: '7 jours',
    urgency_urgent: 'Urgent',
    urgency_urgent_hint: '48-72h',

    space_envelope: 'Enveloppe',
    space_envelope_size: 'jusqu\'à 200g',
    space_pouch: 'Pochette',
    space_pouch_size: 'jusqu\'à 500g',
    space_bag: 'Petit sac',
    space_bag_size: 'jusqu\'à 1,5 kg',

    verif_trusted: 'Membre de confiance',
    verif_id: 'Identité vérifiée',
    verif_email: 'Email confirmé',
    verif_none: 'Non vérifié',

    footer_tagline: 'Une communauté de voyageurs vérifiés, partout dans le monde.',
    footer_platform: 'Plateforme',
    footer_trust: 'Confiance',
    footer_community: 'Communauté',
    footer_made_with: 'Fait avec',

    admin_badge: 'Admin',
    admin_title: 'Modération',
    admin_tab_overview: 'Vue d\'ensemble',
    admin_tab_requests: 'Demandes',
    admin_tab_trips: 'Trajets',
    admin_tab_reports: 'Signalements',
    admin_tab_users: 'Utilisateurs',
    admin_tab_matches: 'Mises en relation',
    admin_kpi_active_requests: 'Demandes actives',
    admin_kpi_weekly_trips: 'Trajets cette semaine',
    admin_kpi_matches: 'Matches réussis',
    admin_kpi_open_reports: 'Signalements ouverts',
    admin_recent_activity: 'Activité récente',
    admin_queue: 'File d\'attente',
    admin_col_sender: 'Expéditeur',
    admin_col_traveler: 'Voyageur',
    admin_col_route: 'Trajet',
    admin_col_category: 'Catégorie',
    admin_col_date: 'Date',
    admin_col_action: 'Action',
    admin_col_space: 'Espace',
    admin_col_compensation: 'Compensation',
    admin_col_status: 'Statut',
    admin_col_amount: 'Montant',
    admin_action_approve: 'Approuver',
    admin_action_reject: 'Rejeter',
    admin_action_review: 'Examiner',
    admin_action_ignore: 'Ignorer',
    admin_status_accepted: 'accepté',
    admin_status_in_progress: 'en cours',
    admin_status_delivered: 'livré',
    admin_report_by: 'Par',
    admin_report_concerns: 'concerne',
    admin_severity_high: 'élevée',
    admin_severity_medium: 'moyenne',
    admin_trips_count: 'trajets',
    admin_starts_at: 'à partir de',
    admin_ago_min: 'il y a {n} min',
    admin_ago_hour: 'il y a {n}h',
    admin_activity_trip_validated: 'Yasmine B. — trajet validé',
    admin_activity_new_request: 'Nouvelle demande de Lila M.',
    admin_activity_report: 'Signalement #4821',
    admin_activity_id_verified: 'Karim T. — ID vérifié',
  },

  en: {
    nav_send: 'Send',
    nav_travel: 'Travel',
    nav_discover: 'Discover',
    nav_trust: 'Trust',
    nav_my_space: 'My Space',
    nav_start: 'Get Started',

    hero_badge: 'Verified traveler community',
    hero_title_1: 'Someone is already going',
    hero_title_2: 'your way.',
    hero_subtitle: 'Send your stuff with a traveler. Simple, human, worldwide.',
    hero_search_from: 'Departure city',
    hero_search_to: 'Arrival city',
    hero_search_button: 'Find a traveler',
    hero_social_proof: '+2,000 travelers',

    how_title: 'How it works',
    how_subtitle: 'Three steps, that\'s it.',
    how_step1_title: 'Post',
    how_step1_text: 'Describe what you want to send.',
    how_step2_title: 'Match',
    how_step2_text: 'Pick a verified traveler.',
    how_step3_title: 'Receive',
    how_step3_text: 'Track your delivery end-to-end.',

    travelers_title: 'Travelers ready to help',
    travelers_subtitle: 'Real, verified, well-rated.',
    travelers_see_all: 'See all',
    travelers_trips: 'trips',

    trust_identity: 'Verified identity',
    trust_data: 'Protected data',
    trust_messaging: 'Secure messaging',
    trust_support: '7/7 support',

    testimonial_quote: 'I sent my mum\'s papers from Brussels. Received in 36h. Pure magic.',
    testimonial_author: 'Salma — Casablanca',

    cta_ready: 'Ready to start?',
    cta_subtitle: 'Post your request in 2 minutes.',
    cta_send_btn: 'Send something',
    cta_travel_btn: 'I\'m traveling soon',

    send_title: 'Send something',
    send_subtitle: 'Takes 2 minutes.',
    send_step_route: 'Route',
    send_step_item: 'Item',
    send_step_details: 'Details',
    send_step_confirm: 'Confirm',
    send_route_title: 'From where to where?',
    send_label_from: 'From',
    send_label_to: 'To',
    send_placeholder_from: 'Pick departure city',
    send_placeholder_to: 'Pick arrival city',
    send_label_date: 'Preferred date',
    send_item_title: 'What are you sending?',
    send_label_description: 'Description',
    send_placeholder_description: 'E.g. French passport, in a sealed envelope',
    send_prescription_required: 'Prescription required',
    send_upload_prescription: 'Upload prescription',
    send_forbidden_title: 'Forbidden items',
    send_details_title: 'When and how much?',
    send_label_urgency: 'Urgency',
    send_label_budget: 'Proposed budget',
    send_confirm_title: 'All good?',
    send_recap_route: 'Route',
    send_recap_date: 'Date',
    send_recap_item: 'Item',
    send_recap_urgency: 'Urgency',
    send_recap_budget: 'Budget',
    send_terms: 'I understand Jibly is a matching platform. I\'m responsible for verifying my item is allowed.',
    send_publish: 'Publish',
    send_success_title: 'It\'s live!',
    send_success_text: 'We\'ll let you know as soon as a traveler matches your route.',
    send_success_see_travelers: 'See travelers',
    send_success_back: 'Back to home',

    trip_title: 'I\'m traveling soon',
    trip_subtitle: 'Help someone, earn a bit along the way.',
    trip_step_route: 'Route',
    trip_step_space: 'Space',
    trip_step_identity: 'Identity',
    trip_step_validation: 'Validation',
    trip_route_title: 'Your trip',
    trip_label_time: 'Time (optional)',
    trip_space_title: 'What can you carry?',
    trip_label_min_comp: 'Minimum compensation accepted',
    trip_min_comp_hint: 'Senders can offer more. You\'re free to decline.',
    trip_identity_title: 'Verify your identity',
    trip_identity_subtitle: 'Optional but recommended. Verified profiles get 3× more requests.',
    trip_identity_benefit_1: '"Verified" badge on your profile',
    trip_identity_benefit_2: 'More visibility',
    trip_identity_benefit_3: 'A more confident community',
    trip_upload_id: 'Upload ID document',
    trip_validation_title: 'Your commitments',
    trip_engagement_1: 'I only carry allowed items',
    trip_engagement_2: 'I check the contents before departure',
    trip_engagement_3: 'I handle items with care and confidentiality',
    trip_engagement_4: 'I hand the item to the right person',
    trip_engagement_terms: 'I commit to these rules and accept Jibly\'s terms of use.',
    trip_publish: 'Publish my trip',
    trip_success_title: 'Safe travels ✈️',
    trip_success_text: 'Your trip is live. We\'ll let you know if someone wants to send something.',

    matches_title: 'Available travelers',
    matches_subtitle: 'people ready to help.',
    matches_empty_title: 'No travelers right now',
    matches_empty_text: 'Post your request — we\'ll notify you as soon as someone matches.',
    matches_publish_btn: 'Post my request',
    matches_from: 'From',
    matches_to: 'To',
    matches_contact: 'Contact',
    matches_min: 'From',

    trust_badge: 'Safety & trust',
    trust_hero_title_1: 'A community',
    trust_hero_title_2: 'you can trust.',
    trust_hero_subtitle: 'Six pillars to protect every delivery.',
    trust_pillar_identity_title: 'Verified identity',
    trust_pillar_identity_desc: 'Official documents validated.',
    trust_pillar_data_title: 'Protected data',
    trust_pillar_data_desc: 'Contact info shared only after a match.',
    trust_pillar_messaging_title: 'Internal messaging',
    trust_pillar_messaging_desc: 'No phone sharing before agreement.',
    trust_pillar_report_title: 'Quick reporting',
    trust_pillar_report_desc: 'Moderation within 24h.',
    trust_pillar_reviews_title: 'Ratings & reviews',
    trust_pillar_reviews_desc: 'Trust-based community.',
    trust_pillar_support_title: '7/7 support',
    trust_pillar_support_desc: 'A team here to help.',
    trust_allowed_title: 'What can travel',
    trust_allowed_subtitle: 'And what can\'t.',
    trust_allowed: 'Allowed',
    trust_forbidden: 'Forbidden',
    trust_cgu_title: 'Jibly is a matching platform',
    trust_cgu_text: 'Users are responsible for verifying that the item is allowed. Jibly is not a carrier.',
    trust_cgu_btn: 'Post my request',

    me_title: 'My Space',
    me_tab_overview: 'Overview',
    me_tab_requests: 'My sends',
    me_tab_trips: 'My trips',
    me_tab_matches: 'Matches',
    me_tab_profile: 'Profile',
    me_stats_active: 'Active requests',
    me_stats_pending: 'Pending',
    me_stats_earned: 'Earned',
    me_stats_completed: 'Deliveries',
    me_section_my_requests: 'My posted sends',
    me_section_my_trips: 'My posted trips',
    me_section_pending_matches: 'Pending requests',
    me_section_active: 'Active deliveries',
    me_section_completed: 'Completed deliveries',
    me_section_profile: 'My profile',
    me_empty_requests: 'No sends yet.',
    me_empty_trips: 'No trips yet.',
    me_empty_matches: 'No pending matches.',
    me_new_request: 'New send',
    me_new_trip: 'New trip',
    me_status_pending: 'Pending',
    me_status_open: 'Open',
    me_status_matched: 'Matched',
    me_status_in_transit: 'In transit',
    me_status_completed: 'Completed',
    me_status_cancelled: 'Cancelled',
    me_payment_pending: 'Payment pending',
    me_payment_held: 'Held',
    me_payment_released: 'Released',
    me_profile_name: 'Full name',
    me_profile_email: 'Email',
    me_profile_phone: 'Phone',
    me_profile_verification: 'Verification',
    me_profile_verify_now: 'Verify my identity',

    common_back: 'Back',
    common_next: 'Next',
    common_cancel: 'Cancel',
    common_save: 'Save',
    common_loading: 'Loading...',
    common_optional: 'optional',
    common_eur: '€',
    common_message: 'Message',
    common_search_placeholder: 'Search a city or country...',
    common_no_results: 'No city found',
    common_clear: 'Clear',

    cat_documents: 'Documents',
    cat_documents_desc: 'Papers, contracts, certificates',
    cat_keys: 'Keys',
    cat_keys_desc: 'Home, car',
    cat_medication: 'Medication',
    cat_medication_desc: 'Prescription only',
    cat_small: 'Small items',
    cat_small_desc: 'Glasses, book, keepsakes',

    urgency_standard: 'Standard',
    urgency_standard_hint: '2 weeks',
    urgency_fast: 'Fast',
    urgency_fast_hint: '7 days',
    urgency_urgent: 'Urgent',
    urgency_urgent_hint: '48-72h',

    space_envelope: 'Envelope',
    space_envelope_size: 'up to 200g',
    space_pouch: 'Pouch',
    space_pouch_size: 'up to 500g',
    space_bag: 'Small bag',
    space_bag_size: 'up to 1.5 kg',

    verif_trusted: 'Trusted member',
    verif_id: 'Verified identity',
    verif_email: 'Email confirmed',
    verif_none: 'Not verified',

    footer_tagline: 'A verified traveler community, worldwide.',
    footer_platform: 'Platform',
    footer_trust: 'Trust',
    footer_community: 'Community',
    footer_made_with: 'Made with',

    admin_badge: 'Admin',
    admin_title: 'Moderation',
    admin_tab_overview: 'Overview',
    admin_tab_requests: 'Requests',
    admin_tab_trips: 'Trips',
    admin_tab_reports: 'Reports',
    admin_tab_users: 'Users',
    admin_tab_matches: 'Matches',
    admin_kpi_active_requests: 'Active requests',
    admin_kpi_weekly_trips: 'Trips this week',
    admin_kpi_matches: 'Successful matches',
    admin_kpi_open_reports: 'Open reports',
    admin_recent_activity: 'Recent activity',
    admin_queue: 'Queue',
    admin_col_sender: 'Sender',
    admin_col_traveler: 'Traveler',
    admin_col_route: 'Route',
    admin_col_category: 'Category',
    admin_col_date: 'Date',
    admin_col_action: 'Action',
    admin_col_space: 'Space',
    admin_col_compensation: 'Compensation',
    admin_col_status: 'Status',
    admin_col_amount: 'Amount',
    admin_action_approve: 'Approve',
    admin_action_reject: 'Reject',
    admin_action_review: 'Review',
    admin_action_ignore: 'Ignore',
    admin_status_accepted: 'accepted',
    admin_status_in_progress: 'in progress',
    admin_status_delivered: 'delivered',
    admin_report_by: 'By',
    admin_report_concerns: 'concerns',
    admin_severity_high: 'high',
    admin_severity_medium: 'medium',
    admin_trips_count: 'trips',
    admin_starts_at: 'from',
    admin_ago_min: '{n} min ago',
    admin_ago_hour: '{n}h ago',
    admin_activity_trip_validated: 'Yasmine B. — trip validated',
    admin_activity_new_request: 'New request from Lila M.',
    admin_activity_report: 'Report #4821',
    admin_activity_id_verified: 'Karim T. — ID verified',
  },

  ar: {
    nav_send: 'صيفط',
    nav_travel: 'سافر',
    nav_discover: 'كتشف',
    nav_trust: 'الثقة',
    nav_my_space: 'الفضاء ديالي',
    nav_start: 'بدا',

    hero_badge: 'مجتمع ديال مسافرين موثوقين',
    hero_title_1: 'شي واحد كيمشي',
    hero_title_2: 'فطريقك.',
    hero_subtitle: 'صيفط حوايجك مع مسافر. ساهلة، إنسانية، فجميع بلدان العالم.',
    hero_search_from: 'مدينة الإنطلاق',
    hero_search_to: 'مدينة الوصول',
    hero_search_button: 'لقا مسافر',
    hero_social_proof: '+2 000 مسافر',

    how_title: 'كيفاش كيخدم',
    how_subtitle: 'ثلاث خطوات، صافي.',
    how_step1_title: 'نشر',
    how_step1_text: 'وصف اللي بغيتي تصيفط.',
    how_step2_title: 'لقا',
    how_step2_text: 'ختار مسافر موثوق.',
    how_step3_title: 'تسلم',
    how_step3_text: 'تبع الإرسال من البداية للنهاية.',

    travelers_title: 'مسافرين مستعدين يعاونوك',
    travelers_subtitle: 'حقيقيين، موثوقين، ومنقطين مزيان.',
    travelers_see_all: 'شوف الكل',
    travelers_trips: 'رحلة',

    trust_identity: 'هوية موثقة',
    trust_data: 'بياناتك محمية',
    trust_messaging: 'مراسلة آمنة',
    trust_support: 'دعم 7/7',

    testimonial_quote: 'صيفطت الأوراق ديال يما من بروكسيل. وصلاوها ف36 ساعة. سحر.',
    testimonial_author: 'سلمى — الدار البيضاء',

    cta_ready: 'واجد تبدا؟',
    cta_subtitle: 'نشر طلبك ف2 دقايق.',
    cta_send_btn: 'صيفط شي حاجة',
    cta_travel_btn: 'غادي نسافر قريب',

    send_title: 'صيفط شي حاجة',
    send_subtitle: 'كيدوز 2 دقايق.',
    send_step_route: 'الطريق',
    send_step_item: 'الشي',
    send_step_details: 'التفاصيل',
    send_step_confirm: 'تأكيد',
    send_route_title: 'من فين لفين؟',
    send_label_from: 'من',
    send_label_to: 'ل',
    send_placeholder_from: 'ختار مدينة الإنطلاق',
    send_placeholder_to: 'ختار مدينة الوصول',
    send_label_date: 'التاريخ المرغوب',
    send_item_title: 'أش غادي تصيفط؟',
    send_label_description: 'الوصف',
    send_placeholder_description: 'مثلا: باسبور فرنسي، فظرف مختوم',
    send_prescription_required: 'الوصفة الطبية ضرورية',
    send_upload_prescription: 'رفع الوصفة',
    send_forbidden_title: 'الحوايج الممنوعة',
    send_details_title: 'إيمتى وبشحال؟',
    send_label_urgency: 'الإستعجال',
    send_label_budget: 'الميزانية المقترحة',
    send_confirm_title: 'كلشي مزيان؟',
    send_recap_route: 'الطريق',
    send_recap_date: 'التاريخ',
    send_recap_item: 'الشي',
    send_recap_urgency: 'الإستعجال',
    send_recap_budget: 'الميزانية',
    send_terms: 'كنفهم بللي جيبلي هي منصة وصل بين الناس. أنا المسؤول باش نتأكد بللي الشي اللي كنصيفط مسموح.',
    send_publish: 'نشر',
    send_success_title: 'تنشر!',
    send_success_text: 'غادي نخبروك ملي يكون شي مسافر مناسب لطريقك.',
    send_success_see_travelers: 'شوف المسافرين',
    send_success_back: 'رجع للرئيسية',

    trip_title: 'غادي نسافر قريب',
    trip_subtitle: 'عاون شي واحد، وربح شي حاجة فالطريق.',
    trip_step_route: 'الطريق',
    trip_step_space: 'المساحة',
    trip_step_identity: 'الهوية',
    trip_step_validation: 'التأكيد',
    trip_route_title: 'الرحلة ديالك',
    trip_label_time: 'الساعة (إختياري)',
    trip_space_title: 'أش تقدر تحمل؟',
    trip_label_min_comp: 'أقل تعويض مقبول',
    trip_min_comp_hint: 'المرسل يقدر يقترح كثر. وأنت حر ترفض.',
    trip_identity_title: 'وثق هويتك',
    trip_identity_subtitle: 'إختياري ولكن منصوح به. البروفايلات الموثقة كتاخد 3× كثر ديال الطلبات.',
    trip_identity_benefit_1: 'شارة "موثق" فالبروفايل ديالك',
    trip_identity_benefit_2: 'كثر ديال الظهور',
    trip_identity_benefit_3: 'مجتمع كثر مطمئن',
    trip_upload_id: 'رفع وثيقة الهوية',
    trip_validation_title: 'الإلتزامات ديالك',
    trip_engagement_1: 'كنحمل غير الحوايج المسموحة',
    trip_engagement_2: 'كنتحقق من المحتوى قبل الإنطلاق',
    trip_engagement_3: 'كنتعامل مع الإرسال بحذر وسرية',
    trip_engagement_4: 'كنسلم الشي للشخص الصحيح',
    trip_engagement_terms: 'كنلتزم بهاد القواعد وكنقبل شروط الإستخدام ديال جيبلي.',
    trip_publish: 'نشر الرحلة',
    trip_success_title: 'تريك السلامة ✈️',
    trip_success_text: 'الرحلة ديالك تنشرات. غادي نخبروك إلا بغى شي واحد يصيفط شي حاجة.',

    matches_title: 'المسافرين المتاحين',
    matches_subtitle: 'ناس مستعدين يعاونوك.',
    matches_empty_title: 'حتى مسافر دابا',
    matches_empty_text: 'نشر طلبك، غادي نخبروك ملي شي واحد يدوز.',
    matches_publish_btn: 'نشر الطلب ديالي',
    matches_from: 'من',
    matches_to: 'ل',
    matches_contact: 'تواصل',
    matches_min: 'إبتداءا من',

    trust_badge: 'الأمان والثقة',
    trust_hero_title_1: 'مجتمع',
    trust_hero_title_2: 'تقدر تثق فيه.',
    trust_hero_subtitle: 'ستة أركان باش نحمي كل إرسال.',
    trust_pillar_identity_title: 'هوية موثقة',
    trust_pillar_identity_desc: 'وثائق رسمية موثقة.',
    trust_pillar_data_title: 'بياناتك محمية',
    trust_pillar_data_desc: 'الإتصالات كتنشار غير بعد التأكيد.',
    trust_pillar_messaging_title: 'مراسلة داخلية',
    trust_pillar_messaging_desc: 'ماكاينش مشاركة الرقم قبل الإتفاق.',
    trust_pillar_report_title: 'إبلاغ سريع',
    trust_pillar_report_desc: 'مراقبة ف24 ساعة.',
    trust_pillar_reviews_title: 'تنقيط وآراء',
    trust_pillar_reviews_desc: 'مجتمع مبني على الثقة.',
    trust_pillar_support_title: 'دعم 7/7',
    trust_pillar_support_desc: 'فريق فخدمتك.',
    trust_allowed_title: 'الحوايج اللي تقدر تسافر',
    trust_allowed_subtitle: 'والحوايج اللي ما تقدرش.',
    trust_allowed: 'مسموح',
    trust_forbidden: 'ممنوع',
    trust_cgu_title: 'جيبلي هي منصة وصل',
    trust_cgu_text: 'المستخدمين هما المسؤولين باش يتحققو بللي الشي مسموح. جيبلي ماشي شركة نقل.',
    trust_cgu_btn: 'نشر الطلب ديالي',

    me_title: 'الفضاء ديالي',
    me_tab_overview: 'نظرة عامة',
    me_tab_requests: 'الإرساليات ديالي',
    me_tab_trips: 'الرحلات ديالي',
    me_tab_matches: 'الإتصالات',
    me_tab_profile: 'البروفايل',
    me_stats_active: 'طلبات نشيطة',
    me_stats_pending: 'فالإنتظار',
    me_stats_earned: 'تربح',
    me_stats_completed: 'تسليمات',
    me_section_my_requests: 'الإرساليات اللي نشرت',
    me_section_my_trips: 'الرحلات اللي نشرت',
    me_section_pending_matches: 'طلبات فالإنتظار',
    me_section_active: 'تسليمات جارية',
    me_section_completed: 'تسليمات مكملة',
    me_section_profile: 'البروفايل ديالي',
    me_empty_requests: 'مازال حتى إرسالية.',
    me_empty_trips: 'مازال حتى رحلة.',
    me_empty_matches: 'مكاينش إتصالات فالإنتظار.',
    me_new_request: 'إرسالية جديدة',
    me_new_trip: 'رحلة جديدة',
    me_status_pending: 'فالإنتظار',
    me_status_open: 'مفتوح',
    me_status_matched: 'تلقى',
    me_status_in_transit: 'فالطريق',
    me_status_completed: 'تكمل',
    me_status_cancelled: 'تلغى',
    me_payment_pending: 'الخلاص فالإنتظار',
    me_payment_held: 'محتجز',
    me_payment_released: 'تخلص',
    me_profile_name: 'الإسم الكامل',
    me_profile_email: 'البريد',
    me_profile_phone: 'الهاتف',
    me_profile_verification: 'التوثيق',
    me_profile_verify_now: 'وثق هويتي',

    common_back: 'لور',
    common_next: 'التالي',
    common_cancel: 'إلغاء',
    common_save: 'حفظ',
    common_loading: 'كنشد...',
    common_optional: 'إختياري',
    common_eur: '€',
    common_message: 'رسالة',
    common_search_placeholder: 'قلب على مدينة ولا بلاد...',
    common_no_results: 'حتى مدينة ما لقات',
    common_clear: 'مسح',

    cat_documents: 'وثائق',
    cat_documents_desc: 'أوراق، عقود، شهادات',
    cat_keys: 'مفاتيح',
    cat_keys_desc: 'دار، طوموبيل',
    cat_medication: 'دوا',
    cat_medication_desc: 'بالوصفة فقط',
    cat_small: 'حوايج صغيرة',
    cat_small_desc: 'نظارات، كتاب، تذكارات',

    urgency_standard: 'عادي',
    urgency_standard_hint: '2 جمعات',
    urgency_fast: 'سريع',
    urgency_fast_hint: '7 أيام',
    urgency_urgent: 'مستعجل',
    urgency_urgent_hint: '48-72 ساعة',

    space_envelope: 'ظرف',
    space_envelope_size: 'حتى 200 غرام',
    space_pouch: 'كيس صغير',
    space_pouch_size: 'حتى 500 غرام',
    space_bag: 'ساك صغير',
    space_bag_size: 'حتى 1.5 كيلو',

    verif_trusted: 'عضو موثوق',
    verif_id: 'هوية موثقة',
    verif_email: 'البريد مأكد',
    verif_none: 'غير موثق',

    footer_tagline: 'مجتمع ديال مسافرين موثوقين، فجميع بلدان العالم.',
    footer_platform: 'المنصة',
    footer_trust: 'الثقة',
    footer_community: 'المجتمع',
    footer_made_with: 'تصنع ب',

    admin_badge: 'الإدارة',
    admin_title: 'المراقبة',
    admin_tab_overview: 'نظرة عامة',
    admin_tab_requests: 'الطلبات',
    admin_tab_trips: 'الرحلات',
    admin_tab_reports: 'البلاغات',
    admin_tab_users: 'المستخدمين',
    admin_tab_matches: 'الربط',
    admin_kpi_active_requests: 'الطلبات النشطة',
    admin_kpi_weekly_trips: 'الرحلات هاد السيمانة',
    admin_kpi_matches: 'الربط الناجح',
    admin_kpi_open_reports: 'البلاغات المفتوحة',
    admin_recent_activity: 'النشاط الأخير',
    admin_queue: 'الانتظار',
    admin_col_sender: 'المرسل',
    admin_col_traveler: 'المسافر',
    admin_col_route: 'الطريق',
    admin_col_category: 'الصنف',
    admin_col_date: 'التاريخ',
    admin_col_action: 'الإجراء',
    admin_col_space: 'المكان',
    admin_col_compensation: 'التعويض',
    admin_col_status: 'الحالة',
    admin_col_amount: 'المبلغ',
    admin_action_approve: 'قبول',
    admin_action_reject: 'رفض',
    admin_action_review: 'تفحص',
    admin_action_ignore: 'تجاهل',
    admin_status_accepted: 'مقبول',
    admin_status_in_progress: 'فالطريق',
    admin_status_delivered: 'تسلم',
    admin_report_by: 'من',
    admin_report_concerns: 'خاص',
    admin_severity_high: 'عالية',
    admin_severity_medium: 'متوسطة',
    admin_trips_count: 'رحلة',
    admin_starts_at: 'بدا من',
    admin_ago_min: 'هادي {n} دقيقة',
    admin_ago_hour: 'هادي {n} ساعة',
    admin_activity_trip_validated: 'ياسمين ب. — الرحلة تصادقات',
    admin_activity_new_request: 'طلب جديد من ليلى م.',
    admin_activity_report: 'بلاغ #4821',
    admin_activity_id_verified: 'كريم ت. — البطاقة موثوقة',
  },
};
