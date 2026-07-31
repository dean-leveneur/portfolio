export const experiencesData = [
  {
    type: "work",
    role: "Assistant IA (Intelligence Artificielle) & Automatisation",
    company: "Run Hélico",
    location: "La Réunion, France",
    period: "Juin 2026 – Août 2026",
    description: "Développement en autonomie d'un outil basé sur l'API OpenAI (LLM) et Flask pour automatiser la gestion des réponses clients (~50 e-mails/jour).",
    highlights: [
      "Conception du parsing des e-mails entrants via imaplib, génération de réponses contextuelles et envoi automatique via smtplib.",
      "Gestion complète du projet : de l'analyse du besoin au déploiement et à la maintenance."
    ],
    tags: ["Python", "Flask", "OpenAI API", "LLM", "IMAP", "SMTP", "Automatisation"]
  }
];

export const educationData = [
  {
    type: "education",
    degree: "Diplôme d'Ingénieur en Informatique — Cursus 3IF",
    institution: "INSA Lyon (Institut National des Sciences Appliquées)",
    location: "Villeurbanne, France",
    period: "Septembre 2024 – Juin 2029",
    description: "Formation d'ingénieur généraliste de haut niveau en informatique.",
    details: [
      "Cycle Ingénieur 3IF : Programmation Orientée Objet (Java/C++), Systèmes d'exploitation POSIX & Threads, Réseaux & Protocoles (ISO, IP, Routage), Bases de Données (SQL, Oracle, MongoDB), Modélisation UML & Web Java EE.",
      "Cycle FIMI (Formation Initiale aux Métiers d'Ingénieur) : Mathématiques appliquées, physique fondamentale, algorithmique avancée et programmation C."
    ],
    tags: ["C", "C++", "Java", "POSIX", "Réseaux", "SQL", "Maths Appliquées", "UML"]
  }
];

export const skillsData = [
  {
    category: "Langages & Développement",
    skills: [
      { name: "Python", level: "Avancé (Numpy, SciPy, Flask, OpenAI)" },
      { name: "C / C++", level: "Avancé (POSIX, Microcontrôleurs, Threads)" },
      { name: "Java", level: "Intermédiaire (POO, Java EE)" },
      { name: "Matlab", level: "Pratique scientifique" },
      { name: "JavaScript", level: "Web, Ajax, HTML5/CSS3" }
    ]
  },
  {
    category: "Systèmes, POSIX & Bas-Niveau",
    skills: [
      { name: "Linux / Unix", level: "Environnement quotidien" },
      { name: "POSIX Threads", level: "Mutex, Sémaphores, Synchronisation" },
      { name: "Outillage C", level: "Make, GDB, Valgrind" },
      { name: "Architecture matérielle", level: "Circuits logiques, Assembleur, Drivers E/S" }
    ]
  },
  {
    category: "Réseaux & Protocoles",
    skills: [
      { name: "Architecture ISO/OSI", level: "Compréhension couches 1-7" },
      { name: "Algorithmes de Routage", level: "Dijkstra, A*, Link State, Distance Vector" },
      { name: "Protocoles", level: "IP, TCP/UDP, DHCP, DNS, LAN/WiFi" },
      { name: "Embarqué sans fil", level: "BLE (Bluetooth Low Energy), GATT/GAP" }
    ]
  },
  {
    category: "Mobile, Embarqué & Modélisation",
    skills: [
      { name: "Arduino / Microcontrôleurs", level: "Capteurs, Haptique, PWM" },
      { name: "Flutter / Dart", level: "Applications mobiles réactives" },
      { name: "Modélisation numérique", level: "Résolution RK4 d'équations non-linéaires" },
      { name: "Conception", level: "UML, Modèle Entité-Association" }
    ]
  },
  {
    category: "Bases de Données & Outillage",
    skills: [
      { name: "SGBD", level: "SQL, Oracle, MongoDB, XQuery" },
      { name: "Environnement", level: "Git, VS Code, Eclipse, Visual Studio" },
      { name: "Langues", level: "Français (Maternel) | Anglais C1 Technique" }
    ]
  }
];
