import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { projectsData } from '../data/projects';
import { Cpu, AlertTriangle, CheckCircle2, Github, ArrowLeft, Radio, Volume2, ShieldCheck } from 'lucide-react';

export default function CaseStudyEscablind() {
  const project = projectsData.find(p => p.id === 'escablind');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Projets Phares', path: '/projets' },
        { label: 'EscaBlind (Embarqué & BLE)' }
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
        
        {/* Section 1: Context & Problem */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink-dark flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-copper" />
            1. Contexte & Problématique d'Accessibilité
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            En escalade, la perception spatiale des prises repose quasi-exclusivement sur la vue. Pour un grimpeur déficient visuel, repérer la prise suivante sans assistance humaine constante sur la voie est complexe et nuit à l'autonomie.
          </p>
          <div className="p-4 rounded-lg bg-paper-card border border-paper-border space-y-2 font-mono text-xs text-ink-muted">
            <div className="text-blueprint font-bold">// DÉFI DE LATENCE ET DE PERCEPTION</div>
            <p className="leading-relaxed text-xs">
              Le système doit fournir une indication spatiale instantanée : si le délai de transmission entre le capteur de la prise et le bracelet haptique dépasse 50ms, le grimpeur ressent une hésitation perturbante.
            </p>
          </div>
        </section>

        {/* Section 2: Technical Architecture */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink-dark flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blueprint" />
            2. Choix d'Architecture Hardware & Software
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            Pour répondre aux contraintes d'autonomie et de réactivité, nous avons conçu une chaîne de communication à deux étages :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs my-4">
            <div className="p-4 rounded bg-paper-card border border-paper-border space-y-2">
              <div className="font-bold text-blueprint flex items-center gap-1.5">
                <Radio className="w-4 h-4" />
                Bluetooth Low Energy (BLE)
              </div>
              <p className="text-ink-muted text-xs">
                Format de paquets personnalisés légers (GAP/GATT) garantissant un RTT &lt; 40ms.
              </p>
            </div>

            <div className="p-4 rounded bg-paper-card border border-paper-border space-y-2">
              <div className="font-bold text-copper flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                Microcontrôleur Arduino
              </div>
              <p className="text-ink-muted text-xs">
                Gestion basse consommation à 3.3V avec interruptions matérielles directes.
              </p>
            </div>

            <div className="p-4 rounded bg-paper-card border border-paper-border space-y-2">
              <div className="font-bold text-emeraldSeal flex items-center gap-1.5">
                <Volume2 className="w-4 h-4" />
                Audio & Haptique Flutter
              </div>
              <p className="text-ink-muted text-xs">
                Signal sonore spatialisé à fréquence variable selon la proximité de la cible.
              </p>
            </div>
          </div>

          {/* Architecture Diagram Box */}
          <div className="p-5 rounded-xl bg-paper-card border border-paper-border font-mono text-xs text-ink-muted space-y-2">
            <div className="text-blueprint font-bold">// SCHÉMA DU PIPELINE DE TRANSMISSION</div>
            <pre className="text-blueprint leading-snug overflow-x-auto p-2 bg-paper-bg rounded">{project.architectureSnippet}</pre>
          </div>
        </section>

        {/* Section 3: Results & Validation */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink-dark flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emeraldSeal" />
            3. Résultats & Validation sur Mur d'Essai
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            Le prototype complet a été assemblé et testé sur un mur d'escalade expérimental. Les tests ont confirmé la stabilité de la liaison BLE et l'efficacité du guidage audio-haptique.
          </p>

          <div className="space-y-2 font-mono text-xs text-ink-dark pt-2">
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
