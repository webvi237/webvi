export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  avatar: string;
  initials: string;
  rating: number; // 4 to 5
  serviceUsed: string;
  date: string;
  comment: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Jean-Paul Mbarga',
    role: 'Directeur Général',
    companyOrLocation: 'Cabinet Conseil Akwa, Douala',
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=250&h=250&q=80',
    initials: 'JM',
    rating: 5,
    serviceUsed: 'Vidéosurveillance 4K & Contrôle d\'accès',
    date: 'Il y a 3 semaines',
    comment: 'Installation impeccable de notre système de 16 caméras IP 4K et de deux pointeuses biométriques. Les techniciens de WEBVI ont travaillé un week-end entier pour ne pas perturber nos réunions. L\'application sur nos téléphones est ultra fluide et le suivi après-vente est exceptionnel.',
    verified: true
  },
  {
    id: 't2',
    name: 'Christiane Ewandé',
    role: 'Propriétaire Résidence Privée',
    companyOrLocation: 'Bonapriso, Douala',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&h=250&q=80',
    initials: 'CE',
    rating: 5,
    serviceUsed: 'Motorisation de portail & Visiophone connecté',
    date: 'Il y a 1 mois',
    comment: 'Depuis la motorisation de notre portail et la mise en place du visiophone connecté par WEBVI, nous nous sentons en parfaite sécurité. Je reçois les appels des visiteurs directement sur mon smartphone même quand je suis au bureau. Merci à toute l\'équipe pour la gentillesse et le professionnalisme !',
    verified: true
  },
  {
    id: 't3',
    name: 'Dr. Serge Kamga',
    role: 'Médecin Chef & Fondateur',
    companyOrLocation: 'Clinique Médico-Chirurgicale, Bépanda Douala',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=250&h=250&q=80',
    initials: 'SK',
    rating: 5,
    serviceUsed: 'Alarme incendie SSI & Réseau informatique',
    date: 'Il y a 2 mois',
    comment: 'Pour une clinique, les normes anti-incendie et la stabilité du réseau informatique sont non négociables. WEBVI a installé une centrale SSI et recâblé toutes nos armoires de brassage avec un niveau de rigueur chirurgical. Une entreprise camerounaise d\'un très haut standing technologique.',
    verified: true
  },
  {
    id: 't4',
    name: 'Patrick Nsangou',
    role: 'Directeur Logistique & Transit',
    companyOrLocation: 'Zone Portuaire Bonanjo, Douala',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&h=250&q=80',
    initials: 'PN',
    rating: 4.8,
    serviceUsed: 'GPS Tracking de Flotte',
    date: 'Il y a 2 mois',
    comment: 'Nous avons équipé 24 camions de transport avec les balises GPS de WEBVI. La précision du suivi en direct et la coupure moteur à distance nous ont déjà permis de déjouer un vol de marchandises. La consommation de carburant a baissé de 18% grâce à la surveillance des trajets.',
    verified: true
  },
  {
    id: 't5',
    name: 'Chantal Ngo Biboum',
    role: 'Directrice d\'Établissement',
    companyOrLocation: 'Complexe Scolaire Privé, Beedi Douala',
    avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=250&h=250&q=80',
    initials: 'CN',
    rating: 5,
    serviceUsed: 'Tourniquets d\'accès & Installation Starlink',
    date: 'Il y a 3 mois',
    comment: 'Voisins directs de WEBVI à Beedi, nous leur avons confié la sécurisation des entrées élèves avec des tourniquets tripodes et le raccordement de notre campus à Starlink. La vitesse de navigation a transformé nos salles informatiques et la sécurité des élèves est garantie à 100%.',
    verified: true
  },
  {
    id: 't6',
    name: 'Henri Tchakounte',
    role: 'Gérant de Supermarché',
    companyOrLocation: 'Carrefour Deïdo, Douala',
    avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=250&h=250&q=80',
    initials: 'HT',
    rating: 4.9,
    serviceUsed: 'Barrière levante & Alarme anti-intrusion',
    date: 'Il y a 3 mois',
    comment: 'Notre parking est désormais ordonné et sécurisé grâce à la barrière levante automatique de WEBVI. L\'alarme anti-intrusion avec sirène puissante et alertes sur téléphone dissuade immédiatement les rôdeurs. Matériel de qualité et pose très soignée.',
    verified: true
  },
  {
    id: 't7',
    name: 'Alain Fotso',
    role: 'Promoteur Immobilier & BTP',
    companyOrLocation: 'Résidences Haut Standing, Logbessou Douala',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&h=250&q=80',
    initials: 'AF',
    rating: 5,
    serviceUsed: 'Interphone vidéo & Réseau Fibre & Vidéosurveillance',
    date: 'Il y a 4 mois',
    comment: 'WEBVI est notre partenaire officiel pour l\'intégration de la domotique et de la sécurité électronique sur tous nos chantiers d\'immeubles et villas. Leurs devis sont détaillés, les délais toujours respectés et le résultat valorise considérablement nos biens immobiliers.',
    verified: true
  }
];
