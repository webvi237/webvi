export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'surveillance' | 'access' | 'network' | 'automation';
  badge?: string;
  image: string;
  features: string[];
  specs: { [key: string]: string };
  applications: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'videosurveillance',
    title: 'Vidéosurveillance IP & 4K',
    category: 'surveillance',
    badge: 'Populaire',
    shortDesc: 'Caméras Hikvision dôme et tube ultra haute définition avec vision nocturne infrarouge et couleur, intelligence artificielle de détection et visualisation smartphone.',
    fullDesc: 'Protégez vos résidences, magasins et sites industriels avec nos systèmes de vidéosurveillance ultra haute définition Hikvision. Nos caméras intelligentes intègrent la reconnaissance des silhouettes humaines et de véhicules, réduisant les fausses alertes à zéro. Enregistrement sécurisé local NVR et sauvegarde Cloud accessible 24/7.',
    image: '/assets/images/camera_hikvision_mur_1792554568874.jpg',
    features: [
      'Résolution 4K Ultra HD & Full HD 1080p Hikvision',
      'Vision nocturne couleur & infrarouge jusqu\'à 60m',
      'Intelligence artificielle : détection humaine et véhicules',
      'Application mobile iOS / Android gratuite et sans abonnement',
      'Stockage sur disque dur haute endurance pour NVR'
    ],
    specs: {
      'Technologies': 'IP PoE, Hikvision / Dahua / Uniview',
      'Protection': 'Boîtiers étanches IP67 anti-vandalisme IK10',
      'Accès': 'Application smartphone, PC et moniteur de contrôle',
      'Garantie': '2 ans pièces et main d\'œuvre'
    },
    applications: ['Entreprises & Bureaux', 'Résidences & Villas', 'Entrepôts & Parkings', 'Boutiques & Supermarchés']
  },
  {
    id: 'controle-acces',
    title: 'Contrôle d\'Accès Biométrique',
    category: 'access',
    badge: 'Haute Sécurité',
    shortDesc: 'Terminaux biométriques Hikvision à empreintes digitales, reconnaissance faciale sans contact anti-usurpation et badges RFID sécurisés.',
    fullDesc: 'Maîtrisez et auditez les flux de personnes dans vos bâtiments. Nos solutions de contrôle d\'accès permettent de restreindre les zones sensibles, d\'enregistrer les heures d\'entrée et de sortie des employés (pointage horaire) et de gérer les droits en temps réel.',
    image: '/assets/images/controle_acces_africains_1792554568332.jpg',
    features: [
      'Reconnaissance faciale instantanée < 0.2s anti-usurpation',
      'Lecteur d\'empreintes digitales optique ou capacitif',
      'Badges sans contact RFID / NFC 13.56 MHz',
      'Logiciel de gestion centralisée et export pour la paie',
      'Déverrouillage d\'urgence et conformité issue de secours'
    ],
    specs: {
      'Capacité': 'Jusqu\'à 10 000 visages et 50 000 badges',
      'Communication': 'TCP/IP, Wi-Fi, RS485, Wiegand',
      'Verrouillage': 'Ventouses électromagnétiques 300/600kg, gâches électriques',
      'Autonomie': 'Alimentation secourue par batterie'
    },
    applications: ['Sièges sociaux', 'Salles serveurs & Data centers', 'Cliniques & Hôpitaux', 'Établissements scolaires']
  },
  {
    id: 'tourniquets',
    title: 'Tourniquets & Couloirs Rapides',
    category: 'access',
    shortDesc: 'Tourniquets tripodes inox et couloirs motorisés à vantaux battants pour canaliser le passage piéton unitaire.',
    fullDesc: 'Indispensables pour les entrées d\'entreprises, usines et complexes scolaires, nos tourniquets tripodes en acier inoxydable 304/316 et couloirs rapides swing-gates assurent un contrôle d\'accès unitaire rigoureux, empêchant le talonnage tout en garantissant un débit élevé.',
    image: '/assets/images/tourniquets_africains_webvi_1792553866513.jpg',
    features: [
      'Structure robuste en acier inoxydable résistant à la corrosion',
      'Intégration transparente avec nos lecteurs biométriques et badges',
      'Mécanisme motorisé bidirectionnel avec amortisseur hydraulique',
      'Fonction anti-panique : bras tombant automatique en cas d\'alarme',
      'Indicateurs LED visuels de passage vert / rouge'
    ],
    specs: {
      'Matériau': 'Acier inoxydable AISI 304 brossé',
      'Débit de passage': '30 à 40 personnes par minute',
      'Alimentation': '220V avec batterie de secours interne',
      'Environnement': 'Usage intérieur ou extérieur sous abri'
    },
    applications: ['Immeubles de bureaux', 'Usines & Zones industrielles', 'Universités & Écoles', 'Salles de sport & Stades']
  },
  {
    id: 'barrieres-levantes',
    title: 'Barrières Levantes Automatiques',
    category: 'access',
    shortDesc: 'Barrières levantes électromécaniques rapides de 3m à 6m pour parkings d\'entreprises, résidences fermées et péages.',
    fullDesc: 'Contrôlez l\'accès des véhicules avec nos barrières levantes automatiques conçues pour un usage intensif. Équipées de cellules photoélectriques de sécurité, détection par boucle magnétique et commande par télécommandes, badges longue portée ou lecture automatique de plaques d\'immatriculation (LAPI).',
    image: '/assets/images/barriere_levante_parking_webvi_1792553867704.jpg',
    features: [
      'Longueur de lisse télescopique de 3m à 6m avec bandes réfléchissantes',
      'Vitesse d\'ouverture rapide de 1.5 à 4 secondes',
      'Cellules photoélectriques anti-écrasement et feu clignotant LED',
      'Déverrouillage manuel à clé personnalisée en cas de panne de courant',
      'Compatible télécommandes, badges RFID et boucle d\'induction'
    ],
    specs: {
      'Motorisation': 'Moteur 24V DC usage continu intensif',
      'Indice de protection': 'IP54 carter anticorrosion laqué',
      'Fréquence': 'Jusqu\'à 5 000 cycles par jour',
      'Options': 'Éclairage LED sur la lisse, lisse articulée pour sous-sol'
    },
    applications: ['Parkings privés & publics', 'Résidences sécurisées', 'Centres logistiques & Entrepôts', 'Hôtels & Cliniques']
  },
  {
    id: 'alarme-intrusion',
    title: 'Alarme Anti-Intrusion Connectée',
    category: 'surveillance',
    badge: 'Indispensable',
    shortDesc: 'Tablette tactile d\'activation d\'alarme, détecteurs infrarouges de présence, sirène 120 dB et alertes smartphone.',
    fullDesc: 'Protégez vos biens et collaborateurs contre toute tentative d\'intrusion ou de cambriolage. Dès qu\'un mouvement suspect ou une tentative de forçage est détecté, la sirène puissante retentit et vous recevez immédiatement une alerte d\'urgence par appel téléphonique, SMS et notification mobile.',
    image: '/assets/images/tablette_alarme_capteur_1792554569581.jpg',
    features: [
      'Tablette tactile centrale d\'armement et désarmement mural',
      'Détecteurs infrarouges passifs et capteurs de présence volumétriques',
      'Sirène intérieure 110 dB et sirène extérieure 120 dB avec flash',
      'Transmetteur double voie IP / Wi-Fi + carte SIM GSM secours',
      'Pilotage à distance via smartphone, télécommandes et badges'
    ],
    specs: {
      'Portée radio': 'Jusqu\'à 2 000 mètres en champ libre',
      'Autonomie': 'Batterie de secours 24h à 48h en cas de coupure Eneo',
      'Certifications': 'Norme EN 50131 Grade 2',
      'Historique': 'Journal d\'événements complet horodaté'
    },
    applications: ['Villas & Appartements', 'Boutiques & Bijouteries', 'Entrepôts de stockage', 'Agences bancaires & Bureaux']
  },
  {
    id: 'alarme-incendie',
    title: 'Alarme Anti-Incendie SSI',
    category: 'surveillance',
    shortDesc: 'Extincteurs certifiés, détecteurs de fumée, déclencheurs manuels d\'urgence "brise-glace" et centrales de sécurité incendie.',
    fullDesc: 'La détection incendie précoce est la garantie de sauver des vies et de préserver vos installations industrielles et commerciales. WEBVI dimensionne, installe et maintient des centrales conventionnelles et adressables répondant rigoureusement aux normes de sécurité en vigueur au Cameroun, accompagnées d\'extincteurs conformes.',
    image: '/assets/images/extincteur_alarme_incendie_1792554570344.jpg',
    features: [
      'Extincteurs à poudre polyvalente ABC et CO2 avec support mural',
      'Détecteurs optiques de fumée à haute sensibilité et thermovélocimétriques',
      'Déclencheurs manuels "brise-glace" d\'évacuation incendie',
      'Centrale de détection conventionnelle ou adressable multipoints',
      'Commande asservissement : désenfumage, coupure ventilation, portes coupe-feu'
    ],
    specs: {
      'Normes': 'Conformité NF SSI / EN 54',
      'Secours': 'Batteries étanches rechargeables 72h de veille',
      'Adressage': 'Localisation exacte de la zone sinistrée en direct',
      'Maintenance': 'Contrat annuel de contrôle et audit de sécurité'
    },
    applications: ['Usines & Ateliers industriels', 'Hôtels & Établissements recevant du public', 'Bureaux & Immeubles', 'Supermarchés']
  },
  {
    id: 'reseau-entreprise',
    title: 'Réseau Informatique & Télécoms',
    category: 'network',
    badge: 'Infrastructure',
    shortDesc: 'Câblage structuré cuivre & fibre Cat 6A/7, réseau informatique d\'entreprise, baies de brassage avec patch panels, switches manageables et Wi-Fi 6 professionnel.',
    fullDesc: 'Une connectivité informatique robuste est le pilier de votre productivité. WEBVI conçoit et réalise vos infrastructures réseau de A à Z : passage de câbles propre en goulottes, pose et organisation de baies de brassage, configuration VLAN, sécurité pare-feu et couverture Wi-Fi professionnelle sans coupure.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    features: [
      'Câblage structuré cuivre blindé Cat 6A / Cat 7 et liaison fibre optique',
      'Installation et organisation de baie de brassage 19 pouces avec patch panel',
      'Switchs Gigabit PoE manageable avec isolation par VLANs',
      'Réseau Wi-Fi 6 maillé haute densité pour bureaux et salles de réunion',
      'Audit de réseau existant, certification Fluke et plan de câblage fourni'
    ],
    specs: {
      'Débit supporté': '1 Gbps à 10 Gbps',
      'Équipements': 'Cisco, MikroTik, Ubiquiti UniFi, TP-Link Omada',
      'Onduleurs': 'Protection parafoudre et régulation de tension',
      'Test & Recette': 'Test de continuité et certification de chaque prise'
    },
    applications: ['PME & Grandes entreprises', 'Cabinets d\'avocats & Notaires', 'Cliniques & Laboratoires', 'Coworkings & Hôtels']
  },
  {
    id: 'gps-tracking',
    title: 'GPS Tracking & Flotte Véhicules',
    category: 'automation',
    badge: 'Économie',
    shortDesc: 'Traceurs GPS professionnels avec application mobile en direct sur smartphone pour suivre le trajet et couper le moteur.',
    fullDesc: 'Gardez le contrôle total sur votre flotte automobile et moto partout au Cameroun et en Afrique centrale. Suivez la position géographique en direct, vérifiez les trajets parcourus, surveillez la consommation de carburant et immobilisez le véhicule à distance en un clic en cas de vol ou d\'utilisation non autorisée.',
    image: '/assets/images/gps_tracking_main_africain_1792802553170.jpg',
    features: [
      'Positionnement GPS + GLONASS en temps réel haute précision',
      'Application mobile intuitive avec carte interactive et vitesse en direct',
      'Coupure d\'alimentation carburant / moteur à distance par SMS ou appli',
      'Création de zones géographiques virtuelles (Geofencing) avec alertes',
      'Bouton SOS d\'urgence discret pour chauffeur en danger'
    ],
    specs: {
      'Réseau': '4G LTE / 2G multibande avec carte SIM préconfigurée',
      'Batterie': 'Batterie interne de secours avec alerte débranchement',
      'Plateforme': 'Accessible sur smartphone Android/iOS et portail Web',
      'Installation': 'Pose invisible et sécurisée par nos techniciens experts'
    },
    applications: ['Flottes de livraison & Camions', 'Taxis & Véhicules de location', 'Motos & Tricycles de livraison', 'Véhicules de fonction & Personnels']
  },
  {
    id: 'motorisation-portail',
    title: 'Motorisation de Portail Automatique',
    category: 'automation',
    shortDesc: 'Portail fermé et opaque motorisé avec moteur électrique et commande d\'ouverture à distance depuis smartphone.',
    fullDesc: 'Ouvrez votre portail sans descendre de voiture sous la pluie ou dans la nuit. Nous équipons les portails pleins ou ajourés de moteurs puissants, silencieux et durables, dotés de ralentissement en fin de course, télécommandes sécurisées et ouverture connectée via smartphone.',
    image: '/assets/images/portail_moteur_smartphone_africain_1792554571810.jpg',
    features: [
      'Ouverture et fermeture directe depuis application mobile smartphone',
      'Moteurs puissants pour portails coulissants opaques jusqu\'à 2 000 kg',
      'Vérins électromécaniques ou bras articulés pour portails à battants',
      'Télécommandes sécurisées rolling-code à longue portée',
      'Déverrouillage mécanique d\'urgence par clé en cas de coupure Eneo'
    ],
    specs: {
      'Marques de référence': 'Nice, BFT, Faac, Sommer',
      'Vitesse': 'Ouverture fluide et silencieuse avec crémaillère en acier',
      'Sécurité': 'Détection d\'obstacles intégrée + gyrobroyeur clignotant',
      'Garantie': 'Garantie constructeur et pièces d\'usure'
    },
    applications: ['Portails de villas privées', 'Résidences et copropriétés', 'Entrées d\'usines & Hangars', 'Bâtiments institutionnels']
  },
  {
    id: 'interphone-video',
    title: 'Interphone Vidéo Connecté (Visiophone)',
    category: 'access',
    shortDesc: 'Écran intérieur tactile de visiophone mural affichant en direct les visiteurs devant le portail avec ouverture à distance.',
    fullDesc: 'Identifiez et dialoguez avec vos visiteurs avant de leur ouvrir l\'accès. Même lorsque vous êtes absent de votre domicile ou de votre bureau, recevez la sonnerie directement sur votre écran intérieur ou sur votre téléphone portable, visualisez qui sonne en vidéo HD et déclenchez l\'ouverture du portail à distance.',
    image: '/assets/images/visiophone_ecran_africain_portail_1792554571930.jpg',
    features: [
      'Écran tactile couleur mural 7 pouces avec affichage HD des visiteurs',
      'Caméra grand angle Full HD 1080p avec vision de nuit infrarouge au portail',
      'Renvoi d\'appel en temps réel sur smartphone partout dans le monde',
      'Commande d\'ouverture directe de portillon piéton et de portail motorisé',
      'Enregistrement automatique de photos ou clips des visiteurs'
    ],
    specs: {
      'Câblage': 'IP PoE 2 fils ou RJ45 direct',
      'Indice': 'Platine de rue IP65 étanche avec visière anti-pluie',
      'Audio': 'Micro et haut-parleur haute fidélité avec annulation d\'écho',
      'Compatibilité': 'Intégration directe avec caméras de surveillance'
    },
    applications: ['Villas de standing', 'Immeubles d\'habitation & Duplex', 'Cabinets médicaux & Bureaux', 'Guérites de sécurité']
  },
  {
    id: 'starlink',
    title: 'Installation Internet Starlink',
    category: 'network',
    badge: 'Haute Vitesse',
    shortDesc: 'Pose rigide sur mât toiture, protection parafoudre, câblage étanche et intégration routeur de l\'antenne satellite Starlink.',
    fullDesc: 'Profitez d\'un débit internet ultra rapide (100 à 250 Mbps) et stable partout au Cameroun grâce à la technologie satellite en orbite basse Starlink. Nos techniciens qualifiés assurent l\'installation physique propre sur mât ou toiture, le passage de câble étanche, la protection parafoudre et l\'interconnexion avec votre réseau d\'entreprise.',
    image: '/assets/images/technicien_starlink_logo_webvi_1792802568925.jpg',
    features: [
      'Positionnement précis de l\'antenne Starlink avec champ de vision dégagé à 100%',
      'Support mât rigide ou fixation toiture renforcée anti-vent violent',
      'Passage de câble protégé en gaine étanche et presse-étoupe',
      'Intégration en secours automatique (Failover / Dual WAN) sur routeur pro',
      'Déploiement d\'antennes Wi-Fi longue portée pour couvrir tout le domaine'
    ],
    specs: {
      'Débit moyen': '150 - 250 Mbps en réception, 20 - 40 Mbps en émission',
      'Latence': 'Faible latence (25 à 45 ms) adaptée aux visioconférences',
      'Protection électrique': 'Onduleur régulateur et parasurtenseur dédié inclus',
      'Couverture': 'Douala, Yaoundé, zones rurales, sites isolés et chantiers'
    },
    applications: ['Entreprises & Sièges isolés', 'Résidences & Villas modernes', 'Bases-vie de chantiers & Plantations', 'Hôtels & Éco-lodges']
  }
];
