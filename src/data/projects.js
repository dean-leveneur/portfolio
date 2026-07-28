export const projectsData = [
  {
    id: "escablind",
    slug: "escablind",
    featured: true,
    title: "EscaBlind — Guidage Haptique & Audio pour Escalade Inclusive",
    category: "Embarqué & IoT",
    tagline: "Dispositif embarqué et application mobile d'aide à la prise d'escalade pour personnes malvoyantes via Bluetooth Low Energy.",
    period: "Septembre 2023 – Juin 2024",
    techStack: ["Arduino", "BLE (Bluetooth 4.2+)", "Flutter/Dart", "Capteurs Haptiques", "Audio Temps Réel"],
    githubUrl: "https://github.com/dean-leveneur/escablind",
    detailPath: "/projets/escablind",
    
    problem: "En escalade, la perception spatiale des prises repose quasi-exclusivement sur la vue. Pour un grimpeur déficient visuel, repérer la prise suivante sans assistance humaine constante sur la voie est complexe et nuit à l'autonomie.",
    solution: "Conception d'un système complet hardware & software. Une carte microcontrôleur embarquée communique via BLE à faible latence avec une application mobile Flutter pour transmettre des instructions sonores tridimensionnelles et des vibrations haptiques guidant la main vers la cible.",
    
    engineeringChoices: [
      { topic: "Gestion de la latence BLE", detail: "Choix de paquets de télémétrie personnalisés légers pour garantir un temps d'aller-retour (RTT) < 40ms entre les capteurs et l'application mobile." },
      { topic: "Prototypage Matériel & Autonomie", detail: "Sélection de composants basse consommation (Arduino 3.3V) avec gestion d'énergie pour tenir plusieurs séances d'escalade sans recharge." },
      { topic: "Feedback Multisensoriel", detail: "Combinaison d'audio spatialisé (bips dont la fréquence s'accélère avec la proximité) et de retour haptique pour ne pas surcharger l'audition de l'utilisateur." }
    ],

    architectureSnippet: `[ Capteurs Voie / Boutons ] 
       │ (Signal numérique / I2C)
       ▼
[ Carte Microcontrôleur Arduino ]
       │ (Télémétrie BLE GAP/GATT - 40ms)
       ▼
[ Application Smartphone Flutter ]
       │ (Traitement spatial des coordonnées)
       ▼
[ Feedback Audio & Vibrations Haptiques ]`,

    results: [
      "Prototype fonctionnel validé sur mur d'escalade d'essai.",
      "Guidage réactif testé avec succès sur des parcours définis.",
      "Validation de l'architecture temps réel et de la fiabilité de l'appairage BLE."
    ]
  },

  {
    id: "mapmynet",
    slug: "mapmynet",
    featured: true,
    title: "MapMyNet — Simulateur de Routage Réseau & Chaos Engineering",
    category: "Réseaux & Algorithmique",
    tagline: "Simulateur visuel et dynamique d'algorithmes de routage inspiré par la résilience réseau et le Chaos Engineering de Netflix.",
    period: "Janvier 2025 – Juin 2025",
    techStack: ["Python", "Tkinter", "Dijkstra & A*", "Link State & Distance Vector", "Chaos Engine"],
    githubUrl: "https://github.com/dean-leveneur/mapmynet-routing",
    detailPath: "/projets/mapmynet",
    
    problem: "Comprendre le comportement des algorithmes de routage dans un réseau réel nécessite de visualiser comment les paquets et les tables de routage s'adaptent dynamiquement lors d'une rupture soudaine de lien ou du crash d'un routeur central.",
    solution: "Développement en Python d'un moteur de simulation de graphes réseau avec interface interactive. Intégration d'un module d'injection de pannes aléatoires (Chaos Engine) forçant les routeurs à recalculer leurs chemins optimaux en temps réel.",
    
    engineeringChoices: [
      { topic: "Algorithmique de Graphes", detail: "Implémentation d'une structure de données ad hoc pour représenter la matrice d'adjacence pondérée avec support du calcul distribué de Distance Vector et Link State." },
      { topic: "Chaos Injection", detail: "Moteur de dégradation probabiliste simulant des pertes de paquets, de la saturation de bande passante et des pannes franches d'équipements pour évaluer la vitesse de convergence." },
      { topic: "Visualisation Temps Réel", detail: "Interface Tkinter customisée avec rendu vectoriel des paquets en transit et surbrillance immédiate des routes modifiées." }
    ],

    architectureSnippet: `[ Topology Graph Engine ] ──► [ Chaos Engine (Failure Injector) ]
          │                                  │
          ▼                                  ▼
[ Routing Table Recalculator ] ◄── [ Link State / Dijkstra / Distance Vector ]
          │
          ▼
[ Real-Time Interactive Canvas Visualizer ]`,

    results: [
      "Visualisation directe de la vitesse de convergence des algorithmes (Link State vs Distance Vector).",
      "Test de résilience sur des topologies jusqu'à 50 routeurs interconnectés.",
      "Projet réutilisable comme outil pédagogique pour l'apprentissage des réseaux ISO/IP."
    ]
  },

  {
    id: "double-pendule",
    slug: "double-pendule",
    featured: true,
    title: "Modélisation Numérique du Chaos — Double Pendule & Lyapunov",
    category: "Physique & Modélisation",
    tagline: "Résolution numérique d'équations différentielles non-linéaires par RK4, calcul d'exposants de Lyapunov et fabrication physique en MDF.",
    period: "Janvier 2025 – Juin 2025",
    techStack: ["Python", "NumPy & SciPy", "Runge-Kutta 4 (RK4)", "Bifurcation Maps", "Découpe Laser MDF"],
    githubUrl: "https://github.com/dean-leveneur/double-pendulum-chaos",
    detailPath: "/projets/double-pendule",
    
    problem: "Le double pendule est le système physique classique par excellence démontrant la sensibilité extrême aux conditions initiales (effet papillon). Comment prédire la transition de l'ordre au chaos et valider la théorie par un banc d'essai physique ?",
    solution: "Mise en place d'une chaîne complète : dérivation analytique des équations de Lagrange, intégration numérique par Runge-Kutta d'ordre 4 (RK4), calcul quantitatif du plus grand exposant de Lyapunov, et fabrication d'un prototype physique en MDF découpé au laser.",
    
    engineeringChoices: [
      { topic: "Résolution Équations de Lagrange", detail: "Formulation des équations différentielles couplées non-linéaires à 4 variables d'état (θ1, θ2, ω1, ω2) et discrétisation RK4 à pas adaptatif." },
      { topic: "Quantification du Chaos", detail: "Calcul matriciel des trajectoires perturbées dans l'espace des phases pour extraire le temps de divergence et tracer les cartes d'exposants de Lyapunov." },
      { topic: "Fabrication Low-Tech", detail: "Conception du modèle physique avec du MDF récupéré et roulements à billes ajustés pour mesurer le frottement réel et affiner le modèle de simulation." }
    ],

    architectureSnippet: `[ Équations de Lagrange ] ──► [ Moteur Intégration RK4 (NumPy/SciPy) ]
                                            │
                                            ▼
[ Diagrammes de Phase & Lyapunov ] ◄── [ Analyse de Divergence Espaces d'États ]
                                            │
                                            ▼
[ Validation vs Banc Physique MDF ]`,

    results: [
      "Génération de cartographies haute définition montrant les régions chaotiques vs stables.",
      "Confrontation directe entre la simulation idéale et les pertes d'énergie réelles (frottements mécaniques du MDF).",
      "Maîtrise des méthodes avancées de calcul scientifique Python (SciPy solve_ivp)."
    ]
  },

  {
    id: "run-helico-ai",
    slug: "run-helico-ai",
    featured: false,
    title: "Assistant IA LLM d'Automatisation E-mails — Run Hélico",
    category: "IA & Automatisation",
    tagline: "Développement en autonomie d'un outil d'IA traitant et automatisant ~50 e-mails clients par jour pour une entreprise d'hélicoptères à La Réunion.",
    period: "Juin 2026 – Août 2026",
    techStack: ["Python", "Flask", "OpenAI API", "IMAP", "SMTP", "Prompt Engineering"],
    githubUrl: "https://github.com/dean-leveneur/run-helico-ai-assistant",
    detailPath: "/projets/run-helico-ai",
    
    problem: "La gestion manuelle de dizaines de demandes de réservation par e-mail chaque jour monopolisait un temps précieux du personnel de Run Hélico.",
    solution: "Création d'un microservice Flask autonome qui scrute les e-mails entrants via IMAP, extrait les informations métier, génère une réponse contextuelle via l'API OpenAI, et prépare l'envoi via SMTP.",
    
    engineeringChoices: [
      { topic: "Parsing IMAP/MIME", detail: "Nettoyage et extraction du corps de texte brut, gestion des encodages multiples et filtrage." },
      { topic: "Prompt Engineering & Garde-Fous", detail: "Système de règles strictes (tarifs réels, météo, disponibilités) injectées dans le contexte." }
    ],

    architectureSnippet: `[ Client Email Entrant ] ──► [ Parsing Python IMAP ] ──► [ OpenAI LLM API ] ──► [ Envoi SMTP ]`,
    results: [
      "Réduction drastique du temps de premier contact client.",
      "Gain d'efficacité d'environ 15h/semaine pour l'équipe opérationnelle à La Réunion."
    ]
  },

  {
    id: "fimi-3if-grade-calc",
    slug: "fimi-3if-grade-calc",
    featured: false,
    title: "Calculateur de Notes & ECTS Interactif INSA Lyon",
    category: "Web & Outils Ingénieur",
    tagline: "Outil web interactif conçu pour simuler la validation des Unités d'Enseignement (UE), Éléments Constitutifs (EC) et crédits ECTS du cursus FIMI/3IF.",
    period: "Septembre 2024 – Présent",
    techStack: ["JavaScript", "React", "Algorithmique Académique", "Tailwind CSS"],
    githubUrl: "https://github.com/dean-leveneur/insa-3if-grade-calculator",
    detailPath: "/projets/fimi-3if-grade-calc",
    
    problem: "Le système d'évaluation à l'INSA Lyon s'appuie sur une structure complexe de coefficients et de compensation au sein des UEs.",
    solution: "Création d'une application intuitive modélisant la grille exacte du cursus FIMI/3IF pour calculer la moyenne générale pondérée et identifier les UEs validées.",
    
    engineeringChoices: [
      { topic: "Arborescence UE/EC", detail: "Structure de données récursive gérant les coefficients et compensations." }
    ],
    architectureSnippet: `[ Formulaire Saisie Notes ] ──► [ Calculateur Coefficients INSA ] ──► [ Validation ECTS ]`,
    results: ["Utilisé par la promotion 3IF pour le suivi des semestres."]
  },

  {
    id: "inventory-app",
    slug: "inventory-app",
    featured: false,
    title: "Application de Gestion de Stock & Ventes",
    category: "Web & Outils Ingénieur",
    tagline: "Application métier sur-mesure pour le suivi du chiffre d'affaires, calcul des marges et gestion de stock pour un commerce réel.",
    period: "Janvier 2025 – Présent",
    techStack: ["Glide App", "Data Modeling", "Calculateur de Marges"],
    githubUrl: "https://github.com/dean-leveneur/inventory-sales-app",
    detailPath: "/projets/inventory-app",
    
    problem: "Un commerce local avait besoin d'un outil mobile pour enregistrer les ventes et mettre à jour le stock en temps réel.",
    solution: "Développement d'une application sur Glide avec modélisation de plusieurs centaines d'articles et calcul automatique des marges.",
    
    engineeringChoices: [
      { topic: "Ergonomie Métier", detail: "Interface pensée pour une saisie rapide au comptoir." }
    ],
    architectureSnippet: `[ Enregistrement Ventes Mobile ] ──► [ Moteur Marges & Stock ] ──► [ Dashboard CA ]`,
    results: ["Plus de 300 références d'articles gérées en production."]
  }
];
