import React from 'react';
import { Cpu, Network, Activity, Bot, MapPin, CheckCircle2, Award } from 'lucide-react';
import { profileData } from '../data/profile';

export default function AboutSection() {
  const pillars = [
    {
      icon: Cpu,
      color: "text-tech-amber",
      borderColor: "border-tech-amber/30",
      title: "Bas-Niveau & Embarqué",
      desc: "Conception de prototypes physiques et logiciels réactifs. Maîtrise de la programmation microcontrôleur Arduino, de la communication Bluetooth Low Energy (BLE) et des problématiques d'autonomie et de latence."
    },
    {
      icon: Network,
      color: "text-tech-cyan",
      borderColor: "border-tech-cyan/30",
      title: "Systèmes, POSIX & Réseaux",
      desc: "Compétences solides en programmation C sous environnement POSIX (threads, sémaphores, mutex). Compréhension approfondie des algorithmes de routage IP (Link State, Distance Vector) et de l'architecture ISO."
    },
    {
      icon: Activity,
      color: "text-tech-purple",
      borderColor: "border-tech-purple/30",
      title: "Physique Numérique & Simulation",
      desc: "Résolution numérique d'équations différentielles non-linéaires par Runge-Kutta d'ordre 4 (RK4). Quantification du chaos via les exposants de Lyapunov et confrontation des modèles avec des bancs physiques (MDF)."
    },
    {
      icon: Bot,
      color: "text-tech-emerald",
      borderColor: "border-tech-emerald/30",
      title: "IA & Automatisation Métier",
      desc: "Développement d'outils d'automatisation s'appuyant sur des LLM (OpenAI API, Flask, Python). Expérience concrète de déploiement en autonomie chez Run Hélico avec gestion complète du cycle de vie logiciel."
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-tech-dark border-b border-tech-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-tech-border/60">
          <div>
            <div className="font-mono text-xs text-tech-cyan mb-2">01. PHILOSOPHIE & APPROCHE</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-tech-light">
              L'Approche Ingénieur 3IF
            </h2>
          </div>
          <p className="text-tech-muted text-sm max-w-md mt-4 md:mt-0 font-mono">
            // Relier le monde physique, les contraintes algorithmiques et la valeur métier brute.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`p-6 rounded-xl bg-tech-card border ${item.borderColor} hover:border-tech-cyan transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="w-12 h-12 rounded-lg bg-tech-darkest border border-tech-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-display font-bold text-lg text-tech-light mb-2">
                  {item.title}
                </h3>
                <p className="text-tech-muted text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Target Locations & INSA Context Card */}
        <div className="rounded-xl bg-tech-darkest border border-tech-border p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-tech-cyan/10 border border-tech-cyan/30 text-tech-cyan font-mono text-xs">
              <Award className="w-3.5 h-3.5" />
              INSA Lyon — Département Informatique (3IF)
            </div>
            
            <h3 className="font-display text-2xl font-bold text-tech-light">
              À la recherche d'un stage technique exigeant
            </h3>
            
            <p className="text-tech-muted text-sm leading-relaxed">
              Actuellement élève-ingénieur en 3e année à l'INSA Lyon (spécialisation 3IF), je cherche un stage ingénieur d'une durée de <strong className="text-tech-light">8 à 14 semaines</strong> (à partir de mi-juin 2027) dans une entreprise innovante.
            </p>

            <div className="space-y-2 font-mono text-xs text-tech-muted pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tech-emerald" />
                <span>Formation d'ingénieur visée par la CTI (Compétences 3IF)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-tech-emerald" />
                <span>Rigueur technique CTI (Compétences 3IF validées)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-tech-card p-5 rounded-lg border border-tech-border space-y-4">
            <div className="font-mono text-xs text-tech-amber font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              ZONES GÉOGRAPHIQUES CIBLÉES
            </div>

            <div className="space-y-3">
              {profileData.status.geography.map((geo, idx) => (
                <div key={idx} className="p-3 rounded bg-tech-dark border border-tech-border/80">
                  <div className="font-display font-bold text-sm text-tech-light flex items-center justify-between">
                    {geo.city}
                    <span className="font-mono text-[10px] text-tech-cyan px-2 py-0.5 rounded bg-tech-cyan/10">Valide</span>
                  </div>
                  <div className="text-tech-muted text-xs font-mono mt-1">
                    {geo.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
