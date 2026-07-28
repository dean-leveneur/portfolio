export const projectsData = [
  {
    id: "escablind",
    slug: "escablind",
    featured: true,
    title: "EscaBlind — Guidage Haptique pour Escalade Inclusive",
    category: "Embarqué & IoT",
    tagline: "Dispositif d'aide à l'escalade pour personnes malvoyantes — Balises UWB Pozyx, BLE, vibreur haptique PWM et application Flutter.",
    period: "2023 – 2024",
    techStack: ["Balises UWB Pozyx", "Arduino / ESP32", "BLE 4.2+", "Vibreur Haptique (PWM)", "Flutter / Dart (TTS)"],
    githubUrl: "https://github.com/dean-leveneur/escablind",
    detailPath: "/projets/escablind",
    image: "./images/escablind-cover.svg",
    
    context: "Permettre à une personne malvoyante ou non-voyante de grimpée en toute autonomie sur un mur d'escalade grâce au positionnement ultra-précis UWB Pozyx, un guidage vocal oralisé et un retour haptique par vibration.",
    whatWasDone: [
      "Intégration des balises UWB Pozyx pour la géolocalisation 3D exacte du grimpeur et protocole BLE d'appairage avec le smartphone.",
      "Développement du firmware Arduino contrôlant un vibreur haptique avec intensité PWM proportionnelle à la proximité de la cible.",
      "Conception de l'application Flutter intégrant la création de parcours (enregistrement de positions successives) et la sélection de voies.",
      "Implémentation du guidage vocal en temps réel énonçant à l'oral les coordonnées relatives (X, Y, Z) de la prochaine prise par rapport à l'Arduino."
    ],
    results: [
      "Validation expérimentale sur mur d'escalade d'essai avec guidage centimétrique haptique et vocal.",
      "Autonomie complète du grimpeur sans besoin d'assistance humaine permanente."
    ]
  },

  {
    id: "mapmynet",
    slug: "mapmynet",
    featured: true,
    title: "MapMyNet — Routage Réseau & Chaos Engineering",
    category: "Réseaux & Algorithmique",
    tagline: "Simulateur de routage réseau interactif — BFS, DFS, Dijkstra et A* avec moteur de pannes sous Tkinter.",
    period: "2025",
    techStack: ["Python 3", "Tkinter", "Dijkstra & A*", "Link State & Distance Vector"],
    githubUrl: "https://github.com/dean-leveneur/mapmynet",
    detailPath: "/projets/mapmynet",
    image: "./images/mapmynet-cover.png",
    
    context: "Visualiser et comprendre la reconvergence dynamique des tables de routage IP face à des pannes imprévues sur une topologie complexe.",
    whatWasDone: [
      "Implémentation sous Python des algorithmes d'exploration de graphes et de plus court chemin (BFS, DFS, Dijkstra, A*).",
      "Développement d'une interface graphique vectorielle Tkinter permettant d'ajouter/supprimer routeurs et de modifier les métriques de liaisons.",
      "Création d'un moteur d'injection de pannes (Chaos Engineering de liens et routeurs) forçant la mise à jour instantanée des routes."
    ],
    results: [
      "Test de résilience et mesure des temps de convergence sur des topographies jusqu'à 50 nœuds.",
      "Démonstrateur dynamique d'algorithmes de routage réseaux ISO/IP."
    ]
  },

  {
    id: "double-pendule",
    slug: "double-pendule",
    featured: true,
    title: "Double Pendule — Modélisation du Chaos Numérique",
    category: "Physique & Modélisation",
    tagline: "Résolution RK4 des équations de Lagrange, cartes de temps de retournement et banc physique MDF.",
    period: "2025",
    techStack: ["Python", "NumPy & SciPy", "Runge-Kutta 4 (RK4)", "Banc MDF Laser"],
    githubUrl: "https://github.com/dean-leveneur/double-pendulum",
    detailPath: "/projets/double-pendule",
    image: "./images/double-pendulum-cover.png",
    
    context: "Étudier et modéliser la transition du régime périodique au chaos déterministe dans un système mécanique non-linéaire à deux degrés de liberté.",
    whatWasDone: [
      "Dérivation analytique des équations du mouvement de Lagrange à 4 variables d'état (θ1, θ2, ω1, ω2).",
      "Résolution numérique par intégration Runge-Kutta d'ordre 4 (RK4) sous SciPy/NumPy.",
      "Génération des cartes de temps de retournement (échelle logarithmique) en fonction des angles initiaux (θ1, θ2) et calcul des exposants de Lyapunov.",
      "Fabrication d'un banc d'essai mécanique réel en MDF découpé au laser."
    ],
    results: [
      "Visualisation précise des zones fractales de divergence et d'instabilité du système.",
      "Comparaison entre le modèle théorique sans frottement et les mesures expérimentales du banc MDF."
    ]
  },

  {
    id: "run-helico-ai",
    slug: "run-helico-ai",
    featured: false,
    title: "RunMail — Automatisation IA de Réponses E-mails",
    category: "IA & Automatisation",
    tagline: "Assistant IA autonome générant des réponses e-mails contextuelles via OpenAI LLM et interface web.",
    period: "2026",
    techStack: ["Python", "Flask", "OpenAI LLM API", "IMAP / SMTP"],
    githubUrl: "https://github.com/dean-leveneur/RunMail",
    detailPath: "/projets/run-helico-ai",
    image: "./images/runmail-cover.png",
    
    context: "Traiter automatiquement ~50 demandes e-mails clients par jour pour une entreprise sur l'île de La Réunion (Run Hélico) sans délai de réponse manuel.",
    whatWasDone: [
      "Développement d'un service Flask analysant les messages entrants via le protocole IMAP.",
      "Intégration de l'API OpenAI avec règles de prompt personnalisées pour formuler des réponses adaptées à la charte et aux disponibilités.",
      "Expédition automatique ou création de brouillons via SMTP avec interface web de contrôle."
    ],
    results: [
      "~50 e-mails/jour traités automatiquement en environnement réel.",
      "Division par 5 du temps de traitement des demandes d'information et réservations."
    ]
  },

  {
    id: "inventory-app",
    slug: "inventory-app",
    featured: false,
    title: "Gestion de Stock & Ventes Terrain",
    category: "Web & Outils",
    tagline: "Application mobile métier pour le suivi du chiffre d'affaires, des dépenses et la gestion de stock.",
    period: "2025",
    techStack: ["Glide App", "Data Modeling", "Calculateur de Marges"],
    githubUrl: null, // No GitHub repository for Glide App
    detailPath: "/projets/inventory-app",
    image: "./images/inventory-glide-app.png",
    
    context: "Offrir une solution mobile simple aux vendeurs terrain pour comptabiliser les ventes, analyser la rentabilité par catégorie et suivre l'état du stock sans tableur complexe.",
    whatWasDone: [
      "Conception du modèle de données relationnel sur Glide App pour plus de 300 références d'articles.",
      "Implémentation des calculs en temps réel : Chiffre d'affaires (39 085 €), Total des charges (18 261 €) et Bénéfice net (20 823 €).",
      "Création du tableau de bord visuel avec graphiques de répartition par catégorie d'articles."
    ],
    results: [
      "Application déployée en production et utilisée quotidiennement pour la gestion des ventes au comptoir."
    ]
  }
];
