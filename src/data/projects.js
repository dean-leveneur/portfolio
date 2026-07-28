export const projectsData = [
  {
    id: "escablind",
    featured: true,
    title: "EscaBlind — Guidage Haptique & Audio pour Escalade Inclusive",
    category: "Embarqué & IoT",
    tagline: "Dispositif embarqué et application mobile d'aide à la prise d'escalade pour personnes malvoyantes via Bluetooth Low Energy.",
    period: "Septembre 2023 – Juin 2024",
    techStack: ["Arduino", "BLE (Bluetooth 4.2+)", "Flutter/Dart", "Capteurs Haptiques", "Audio Temps Réel", "Electronique Embarquée"],
    githubUrl: "https://github.com/dean-leveneur/escablind",
    
    // Case Study Structure
    problem: "En escalade, la perception spatiale des prises repose quasi-exclusivement sur la vue. Pour un grimpeur déficient visuel, repérer la prise suivante sans assistance humaine constante sur la voie est complexe et nuit à l'autonomie.",
    
    solution: "Conception d'un système complet hardware & software. Une carte microcontrôleur embarquée communique via BLE à faible latence avec une application mobile Flutter pour transmettre des instructions sonores tridimensionnelles et des vibrations haptiques guidant la main vers la cible.",
    
    engineeringChoices: [
      {
        topic: "Gestion de la latence BLE",
        detail: "Choix de paquets de télémétrie personnalisés légers pour garantir un temps d'aller-retour (RTT) < 40ms entre les capteurs et l'application mobile."
      },
      {
        topic: "Prototypage Matériel & Autonomie",
        detail: "Sélection de composant basse consommation (Arduino 3.3V) avec gestion d'énergie pour tenir plusieurs séances d'escalade sans recharge."
      },
      {
        topic: "Feedback Multisensoriel",
        detail: "Combinaison d'audio spatialisé (bips dont la fréquence s'accélère avec la proximité) et de retour haptique pour ne pas surcharger l'audition de l'utilisateur."
      }
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
    featured: true,
    title: "MapMyNet — Simulateur de Routage Réseau & Chaos Engineering",
    category: "Réseaux & Algorithmique",
    tagline: "Simulateur visuel et dynamique d'algorithmes de routage inspiré par la résilience réseau et le Chaos Engineering de Netflix.",
    period: "Janvier 2025 – Juin 2025",
    techStack: ["Python", "Tkinter", "Graph Theory (Dijkstra, A*, BFS, DFS)", "Link State & Distance Vector", "Chaos Injection Engine"],
    githubUrl: "https://github.com/dean-leveneur/mapmynet-routing",
    
    problem: "Comprendre le comportement des algorithmes de routage dans un réseau réel nécessite de visualiser comment les paquets et les tables de routage s'adaptent dynamiquement lors d'une rupture soudaine de lien ou du crash d'un routeur central.",
    
    solution: "Développement en Python d'un moteur de simulation de graphes réseau avec interface interactive. Intégration d'un module d'injection de pannes aléatoires (Chaos Engine) forçant les routeurs à recalculer leurs chemins optimaux en temps réel.",
    
    engineeringChoices: [
      {
        topic: "Algorithmique de Graphes",
        detail: "Implémentation d'une structure de données ad hoc pour représenter la matrice d'adjacence pondérée avec support du calcul distribué de Distance Vector et Link State."
      },
      {
        topic: "Chaos Injection",
        detail: "Moteur de dégradation probabiliste simulant des pertes de paquets, de la saturation de bande passante et des pannes franches d'équipements pour évaluer la vitesse de convergence."
      },
      {
        topic: "Visualisation Temps Réel",
        detail: "Interface Tkinter customisée avec rendu vectoriel des paquets en transit et surbrillance immédiate des routes modifiées."
      }
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
    id: "double-pendulum",
    featured: true,
    title: "Modélisation Numérique du Chaos — Double Pendule & Lyapunov",
    category: "Physique & Modélisation",
    tagline: "Résolution numérique d'équations différentielles non-linéaires par RK4, calcul d'exposants de Lyapunov et fabrication physique en MDF.",
    period: "Janvier 2025 – Juin 2025",
    techStack: ["Python", "NumPy & SciPy", "Matplotlib / Animation", "Runge-Kutta 4 (RK4)", "Bifurcation Maps", "MDF Low-Tech Fabrication"],
    githubUrl: "https://github.com/dean-leveneur/double-pendulum-chaos",
    
    problem: "Le double pendule est le système physique classique par excellence démontrant la sensibilité extrême aux conditions initiales (effet papillon). Comment prédire la transition de l'ordre au chaos et valider la théorie par un banc d'essai physique ?",
    
    solution: "Mise en place d'une chaîne complète : dérivation analytique des équations de Lagrange, intégration numérique par Runge-Kutta d'ordre 4 (RK4), calcul quantitatif du plus grand exposant de Lyapunov, et fabrication d'un prototype physique en MDF découpé au laser.",
    
    engineeringChoices: [
      {
        topic: "Résolution Équations de Lagrange",
        detail: "Formulation des équations différentielles couplées non-linéaires à 4 variables d'état (θ1, θ2, ω1, ω2) et discrétisation RK4 à pas adaptatif."
      },
      {
        topic: "Quantification du Chaos",
        detail: "Calcul matriciel des trajectoires perturbées dans l'espace des phases pour extraire le temps de divergence et tracer les cartes d'exposants de Lyapunov."
      },
      {
        topic: "Fabrication Low-Tech",
        detail: "Conception du modèle physique avec du MDF récupéré et roulements à billes ajustés pour mesurer le frottement réel et affiner le modèle de simulation."
      }
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
    featured: true,
    title: "Assistant IA LLM d'Automatisation E-mails — Run Hélico",
    category: "IA & Automatisation",
    tagline: "Développement en autonomie d'un outil d'IA traitant et automatisant ~50 e-mails clients par jour pour une entreprise d'hélicoptères à La Réunion.",
    period: "Juin 2026 – Août 2026",
    techStack: ["Python", "Flask", "OpenAI API (GPT-4/3.5)", "IMAP (imaplib)", "SMTP (smtplib)", "Parsing & Prompt Engineering"],
    githubUrl: "https://github.com/dean-leveneur/run-helico-ai-assistant",
    
    problem: "La gestion manuelle de dizaines de demandes de réservation et renseignements par e-mail chaque jour monopolisait un temps précieux du personnel de Run Hélico, entraînant parfois des délais de réponse allongés.",
    
    solution: "Création d'un microservice Flask autonome qui scrute les e-mails entrants via IMAP, extrait les informations métier (dates, nombre de passagers, circuits souhaités), génère une réponse personnalisée et pertinente via l'API OpenAI, et prépare ou expédie la réponse via SMTP.",
    
    engineeringChoices: [
      {
        topic: "Robustesse du Parsing IMAP/MIME",
        detail: "Nettoyage et extraction rigoureuse du corps de texte brut, gestion des encodages multiples et filtrage du spams / spams réseaux."
      },
      {
        topic: "Prompt Engineering & Garde-Fous",
        detail: "Définition d'un système de règles strictes (tarifs réels, conditions météorologiques, disponibilités) injectées dans le contexte pour zéro hallucination."
      },
      {
        topic: "Cycle de Vie & Déploiement",
        detail: "Prise en charge intégrale de la conception au déploiement en production, avec journalisation des échanges pour contrôle humain."
      }
    ],

    architectureSnippet: `[ Client Email (Entrant) ] ──► [ Microservice Python (IMAP Parsing) ]
                                              │
                                              ▼
[ Prompt Builder & Context ] ──► [ OpenAI LLM API Processing ]
                                              │
                                              ▼
[ Validation & Envoi SMTP ] ◄──── [ Réponse Formatée Métier ]`,

    results: [
      "Réduction drastique du temps moyen de premier contact client (traitement quasi-instantanné).",
      "Gain d'efficacité d'environ 15h/semaine pour l'équipe opérationnelle sur l'île de La Réunion.",
      "Application robuste exploitée pendant toute la saison touristique."
    ]
  },

  {
    id: "fimi-3if-grade-calc",
    featured: true,
    title: "Calculateur de Notes & ECTS Interactif INSA Lyon",
    category: "Web & Outils Ingénieur",
    tagline: "Outil web interactif conçu pour simuler la validation des Unités d'Enseignement (UE), Éléments Constitutifs (EC) et crédits ECTS du cursus FIMI/3IF.",
    period: "Septembre 2024 – Présent",
    techStack: ["JavaScript / React", "Calculateur Algorithmique", "Règles Académiques INSA", "Tailwind CSS", "Data Persistence (LocalStorage)"],
    githubUrl: "https://github.com/dean-leveneur/insa-3if-grade-calculator",
    
    problem: "Le système d'évaluation à l'INSA Lyon s'appuie sur une structure complexe de coefficients, de compensation au sein des UEs et de seuils de validation ECTS. Les étudiants manquent souvent de lisibilité sur leurs moyennes cibles pour valider leur semestre.",
    
    solution: "Création d'une application intuitive modélisant la grille exacte du cursus FIMI et du département 3IF, permettant de tester des combinaisons de notes, de calculer la moyenne générale pondérée et d'identifier immédiatement les UEs validées ou en risque.",
    
    engineeringChoices: [
      {
        topic: "Modélisation de l'Arborescence UE / EC",
        detail: "Structure de données récursive gérant les coefficients par matière, les règles de rattrapage et les totaux d'ECTS."
      },
      {
        topic: "Calcul Dynamic de Notes Cibles",
        detail: "Algorithme calculant automatiquement la note minimale requise à l'examen final pour valider une UE donnée."
      }
    ],

    architectureSnippet: `[ Formulaire / Saisie Notes ] ──► [ Moteur de Calcul Coefficients INSA ]
                                               │
                                               ▼
[ Tableau de Bord UEs & ECTS ] ◄── [ Validation des Seuils & Simulation Cible ]`,

    results: [
      "Utilisé par de nombreux camarades de la promotion 3IF pour le suivi des semestres.",
      "Gain de transparence sur la gestion des crédits ECTS et des règles académiques.",
      "Démonstrateur fonctionnel intégré directement dans ce portfolio !"
    ]
  },

  {
    id: "inventory-app",
    featured: false,
    title: "Application de Gestion de Stock & Ventes",
    category: "Web & Outils Ingénieur",
    tagline: "Application métier sur-mesure pour le suivi du chiffre d'affaires, calcul des marges et gestion de stock pour un commerce réel.",
    period: "Janvier 2025 – Présent",
    techStack: ["Glide App", "Data Modeling", "Real-Time Analytics", "Calculateur de Marges"],
    githubUrl: "https://github.com/dean-leveneur/inventory-sales-app",
    
    problem: "Un commerce local avait besoin d'un outil mobile et réactif pour enregistrer rapidement les ventes sur le terrain, mettre à jour le stock en temps réel et visualiser les bénéfices sans passer par des fichiers Excel complexes.",
    
    solution: "Développement d'une application sur Glide orientée usage mobile avec modélisation optimisée de plusieurs centaines de références d'articles et calcul automatique des marges et statistiques de CA.",
    
    engineeringChoices: [
      { topic: "Ergonomie Métier", detail: "Interface pensée pour une saisie rapide au comptoir avec répercussion instantanée sur les stocks." },
      { topic: "Analytique", detail: "Calcul dynamique du chiffre d'affaires quotidien, hebdomadaire et mensuel avec indicateurs de rentabilité." }
    ],
    architectureSnippet: `[ Enregistrement Ventes Mobile ] ──► [ Moteur de Calcul de Marges & Stock ] ──► [ Dashboard CA & Analytique ]`,
    results: ["Plus de 300 références gérées.", "Adaptation itérative continue selon les retours terrain."]
  }
];
