export const projectsData = [
  {
    id: "escablind",
    slug: "escablind",
    featured: true,
    title: "EscaBlind — Guidage Haptique pour Escalade Inclusive",
    category: "Embarqué & IoT",
    tagline: "Dispositif embarqué et application mobile d'aide à l'escalade pour personnes malvoyantes via Bluetooth Low Energy.",
    period: "2023 – 2024",
    techStack: ["Arduino", "BLE 4.2+", "Flutter / Dart", "Capteurs Haptiques"],
    githubUrl: "https://github.com/dean-leveneur/escablind",
    detailPath: "/projets/escablind",
    image: "./images/escablind-cover.svg",
    
    context: "En escalade, repérer les prises sans voir la voie nécessite une assistance constante. EscaBlind permet une autonomie sur le mur.",
    whatWasDone: [
      "Conception d'une carte microcontrôleur Arduino avec gestion BLE à latence < 40ms.",
      "Développement de l'application Flutter intégrant guidage audio spatialisé et vibrations haptiques.",
      "Optimisation de la consommation énergétique pour une autonomie longue durée."
    ],
    results: [
      "Prototype fonctionnel validé sur mur d'escalade d'essai.",
      "Appairage BLE stable et guidage fluide en temps réel."
    ]
  },

  {
    id: "mapmynet",
    slug: "mapmynet",
    featured: true,
    title: "MapMyNet — Routage Réseau & Chaos Engineering",
    category: "Réseaux & Algorithmique",
    tagline: "Simulateur dynamique d'algorithmes de routage IP avec injection de pannes réseau en direct.",
    period: "2025",
    techStack: ["Python", "Tkinter", "Dijkstra & A*", "Link State & Distance Vector"],
    githubUrl: "https://github.com/dean-leveneur/mapmynet-routing",
    detailPath: "/projets/mapmynet",
    image: "./images/mapmynet-cover.svg",
    
    context: "Visualiser comment les tables de routage s'adaptent lors d'une panne soudaine de lien ou de routeur.",
    whatWasDone: [
      "Implémentation des algorithmes de graphes Dijkstra, A*, Link State et Distance Vector sous Python.",
      "Création d'un moteur d'injection de pannes (Chaos Engineering) forçant le recalcul des routes en temps réel.",
      "Interface Tkinter vectorielle avec affichage du trafic et des coûts de liens."
    ],
    results: [
      "Test de résilience et de vitesse de convergence sur topologies de 50 routeurs.",
      "Outil pédagogique de démonstration des réseaux ISO/IP."
    ]
  },

  {
    id: "double-pendule",
    slug: "double-pendule",
    featured: true,
    title: "Double Pendule — Modélisation du Chaos Numérique",
    category: "Physique & Modélisation",
    tagline: "Résolution d'équations différentielles non-linéaires par RK4, exposants de Lyapunov et banc MDF.",
    period: "2025",
    techStack: ["Python", "NumPy & SciPy", "Runge-Kutta 4 (RK4)", "Banc MDF"],
    githubUrl: "https://github.com/dean-leveneur/double-pendulum-chaos",
    detailPath: "/projets/double-pendule",
    image: "./images/double-pendulum-cover.svg",
    
    context: "Prédire la transition de l'ordre au chaos dans un système à forte sensibilité aux conditions initiales.",
    whatWasDone: [
      "Dérivation analytique des équations de Lagrange à 4 variables d'état (θ1, θ2, ω1, ω2).",
      "Résolution numérique par intégration RK4 à pas adaptatif (SciPy/NumPy).",
      "Calcul des exposants de Lyapunov et fabrication d'un banc d'essai physique en MDF découpé au laser."
    ],
    results: [
      "Cartographie précise des zones de divergence dans l'espace des phases.",
      "Mesure de l'impact des frottements mécaniques réels du MDF comparés au modèle idéal."
    ]
  },

  {
    id: "run-helico-ai",
    slug: "run-helico-ai",
    featured: false,
    title: "Run Hélico — Automatisation IA de Réponses E-mails",
    category: "IA & Automatisation",
    tagline: "Assistant LLM autonome traitant ~50 e-mails clients par jour pour une entreprise sur l'île de La Réunion.",
    period: "2026",
    techStack: ["Python", "Flask", "OpenAI API", "IMAP / SMTP"],
    githubUrl: "https://github.com/dean-leveneur/run-helico-ai-assistant",
    detailPath: "/projets/run-helico-ai",
    image: "./images/run-helico-cover.svg",
    
    context: "Réduire le temps de réponse manuel sur des dizaines de demandes de réservation quotidiennes.",
    whatWasDone: [
      "Développement autonome d'un microservice Flask analysant les e-mails entrants via IMAP.",
      "Génération de réponses contextuelles structurées via l'API OpenAI avec règles métier strictes.",
      "Expédition automatique ou préparation de brouillons via SMTP."
    ],
    results: [
      "~50 e-mails/jour automatisés en production.",
      "Gain estimé de 15h/semaine pour l'équipe opérationnelle."
    ]
  },

  {
    id: "inventory-app",
    slug: "inventory-app",
    featured: false,
    title: "Gestion de Stock & Ventes Terrain",
    category: "Web & Outils",
    tagline: "Application mobile métier pour le suivi du chiffre d'affaires et la gestion des stocks en temps réel.",
    period: "2025",
    techStack: ["Glide App", "Calculateur de Marges", "Data Modeling"],
    githubUrl: "https://github.com/dean-leveneur/inventory-sales-app",
    detailPath: "/projets/inventory-app",
    image: "./images/inventory-glide-app.png",
    
    context: "Permettre la saisie rapide des ventes au comptoir et la mise à jour instantanée du stock sans tableur complexe.",
    whatWasDone: [
      "Modélisation de la base d'articles pour plus de 300 références.",
      "Calcul dynamique du CA quotidien et des bénéfices par catégorie d'articles."
    ],
    results: [
      "Outil déployé et utilisé quotidiennement par un commerce local."
    ]
  }
];
