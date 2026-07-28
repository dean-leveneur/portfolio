export const insa3ifData = {
  semesterName: "INSA Lyon — Cursus 3IF (Semestre 5)",
  totalEctsTarget: 30,
  ues: [
    {
      id: "ue-algo-sys",
      name: "UE Algorithmique & Systèmes",
      ects: 8,
      ecs: [
        { id: "ec-posix", name: "Systèmes d'Exploitation & POSIX (C)", weight: 3, defaultGrade: 14.5 },
        { id: "ec-algo", name: "Algorithmique Avancée & Graphes", weight: 3, defaultGrade: 16.0 },
        { id: "ec-arch", name: "Architecture des Ordinateurs & Assembleur", weight: 2, defaultGrade: 13.0 }
      ]
    },
    {
      id: "ue-poo-web",
      name: "UE Génie Logiciel & Web",
      ects: 8,
      ecs: [
        { id: "ec-java", name: "POO & Java Avancé", weight: 4, defaultGrade: 15.0 },
        { id: "ec-web", name: "Développement Web & Java EE", weight: 2, defaultGrade: 14.0 },
        { id: "ec-uml", name: "Conception & UML", weight: 2, defaultGrade: 13.5 }
      ]
    },
    {
      id: "ue-net-db",
      name: "UE Réseaux & Données",
      ects: 7,
      ecs: [
        { id: "ec-net", name: "Réseaux & Routage IP", weight: 4, defaultGrade: 15.5 },
        { id: "ec-bd", name: "Bases de Données Relationnelles (SQL)", weight: 3, defaultGrade: 14.0 }
      ]
    },
    {
      id: "ue-humanites",
      name: "UE Humanités & Langues",
      ects: 7,
      ecs: [
        { id: "ec-anglais", name: "Anglais Technique (C1)", weight: 3, defaultGrade: 16.5 },
        { id: "ec-shs", name: "Sciences Humaines & Entreprise", weight: 2, defaultGrade: 14.0 },
        { id: "ec-eps", name: "EPS / Engagement", weight: 2, defaultGrade: 15.0 }
      ]
    }
  ]
};
