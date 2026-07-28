import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { projectsData } from '../data/projects';
import RoutingSimWidget from '../components/RoutingSimWidget';
import { Network, Zap, CheckCircle2, Github, ArrowLeft, Cpu, ShieldCheck } from 'lucide-react';

export default function CaseStudyMapmynet() {
  const project = projectsData.find(p => p.id === 'mapmynet');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Projets Phares', path: '/projets' },
        { label: 'MapMyNet (Simulateur de Routage)' }
      ]} />

      {/* Article Header */}
      <div className="space-y-4 border-b border-paper-border pb-8">
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-2.5 py-1 rounded stamp-badge text-blueprint font-bold">
            {project.category}
          </span>
          <span className="text-copper font-semibold">{project.period}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-dark">
          {project.title}
        </h1>

        <p className="text-ink-muted text-lg font-serif leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="font-mono text-xs px-2.5 py-1 rounded bg-paper-card text-ink-dark border border-paper-border">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Main Technical Content Article Body */}
      <article className="space-y-10 font-serif text-ink-dark leading-relaxed">
        
        {/* Section 1: Context & Chaos Engineering */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink-dark flex items-center gap-2">
            <Zap className="w-5 h-5 text-copper" />
            1. Problématique de Résilience & Chaos Engineering
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            Comprendre le comportement des algorithmes de routage dans un réseau réel nécessite de visualiser comment les paquets et les tables de routage s'adaptent dynamiquement lors d'une rupture soudaine de lien ou du crash d'un routeur central.
          </p>
          <p className="text-ink-muted text-sm sm:text-base">
            Inspiré par les principes du Chaos Engineering de Netflix (Chaos Monkey), MapMyNet intègre un moteur d'injection de pannes pour tester en direct la convergence des algorithmes de routage.
          </p>
        </section>

        {/* Section 2: Interactive Live Demo Component */}
        <section className="space-y-4">
          <div className="font-mono text-xs text-blueprint font-bold uppercase">// EXPÉRIMENTATION EN DIRECT</div>
          <h2 className="font-display text-2xl font-bold text-ink-dark">
            2. Simulateur de Routage Dijkstra Intégré
          </h2>
          <p className="text-ink-muted text-sm font-serif">
            Cliquez sur n'importe quel routeur intermédiaire (ex: R2 ou R3) pour simuler une panne d'équipement et observer le recalcul instantané du chemin le plus court.
          </p>

          {/* Interactive Routing Simulator Component */}
          <RoutingSimWidget />
        </section>

        {/* Section 3: Engineering Choices */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink-dark flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blueprint" />
            3. Algorithmes de Graphes & Différences Link State / Distance Vector
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            Le projet compare la vitesse de convergence des algorithmes à état de lien (Link State / OSPF via Dijkstra) et à vecteur de distance (Distance Vector / RIP via Bellman-Ford).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs my-4">
            {project.engineeringChoices.map((choice, i) => (
              <div key={i} className="p-4 rounded bg-paper-card border border-paper-border space-y-2">
                <div className="font-bold text-blueprint">{choice.topic}</div>
                <p className="text-ink-muted text-xs">{choice.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Results */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink-dark flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emeraldSeal" />
            4. Résultats & Enseignements
          </h2>
          <div className="space-y-2 font-mono text-xs text-ink-dark">
            {project.results.map((res, i) => (
              <div key={i} className="p-3 rounded bg-paper-card border border-paper-border flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emeraldSeal shrink-0" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </section>

      </article>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-paper-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <Link to="/projets" className="text-blueprint font-bold hover:underline flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au catalogue des projets</span>
        </Link>

        <a 
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-paper-card border border-paper-border hover:border-blueprint text-ink-dark flex items-center gap-2 font-bold"
        >
          <Github className="w-4 h-4" />
          <span>Voir le dépôt GitHub</span>
        </a>
      </div>

    </div>
  );
}
