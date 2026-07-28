import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { projectsData } from '../data/projects';
import { Activity, Cpu, CheckCircle2, Github, ArrowLeft, ShieldCheck, Layers } from 'lucide-react';

export default function CaseStudyDoublePendule() {
  const project = projectsData.find(p => p.id === 'double-pendule');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Projets Phares', path: '/projets' },
        { label: 'Double Pendule (Modélisation du Chaos)' }
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
        
        {/* Section 1: Physical Context & Non-Linear ODEs */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink-dark flex items-center gap-2">
            <Activity className="w-5 h-5 text-copper" />
            1. Physique du Chaos & Sensibilité aux Conditions Initiales
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            Le double pendule est le système dynamique classique démontrant le comportement chaotique : deux pendules simples couplés bout à bout forment un système déterministe mais imprédictible sur le long terme (effet papillon).
          </p>
          <p className="text-ink-muted text-sm sm:text-base">
            À partir du lagrangien du système L = T - V, les équations d'Euler-Lagrange mènent à deux équations différentielles couplées du second ordre non-linéaires portant sur les angles θ1 et θ2.
          </p>
        </section>

        {/* Section 2: Numerical Integration RK4 & Lyapunov */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink-dark flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blueprint" />
            2. Intégration RK4 & Quantification des Exposants de Lyapunov
          </h2>
          <p className="text-ink-muted text-sm sm:text-base">
            Pour intégrer numériquement le système, nous avons implémenté en Python (NumPy/SciPy) l'algorithme de Runge-Kutta d'ordre 4 (RK4) à pas de temps adaptatif.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs my-4">
            <div className="p-4 rounded bg-paper-card border border-paper-border space-y-2">
              <div className="font-bold text-blueprint">Intégration RK4</div>
              <p className="text-ink-muted text-xs">
                Discrétisation des 4 variables d'état (θ1, θ2, ω1, ω2) avec conservation d'énergie contrôlée.
              </p>
            </div>

            <div className="p-4 rounded bg-paper-card border border-paper-border space-y-2">
              <div className="font-bold text-copper">Exposants de Lyapunov</div>
              <p className="text-ink-muted text-xs">
                Calcul matriciel de la vitesse de divergence de deux trajectoires aux conditions initiales distantes de 10⁻⁸ rad.
              </p>
            </div>

            <div className="p-4 rounded bg-paper-card border border-paper-border space-y-2">
              <div className="font-bold text-emeraldSeal">Banc Physique MDF</div>
              <p className="text-ink-muted text-xs">
                Fabrication low-tech en MDF récupéré pour mesurer l'atténuation réelle par frottement mécanique.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-paper-card border border-paper-border font-mono text-xs text-ink-muted space-y-2">
            <div className="text-blueprint font-bold">// SCHÉMA DU PROCESSUS DE SIMULATION</div>
            <pre className="text-blueprint leading-snug overflow-x-auto p-2 bg-paper-bg rounded">{project.architectureSnippet}</pre>
          </div>
        </section>

        {/* Section 3: Results */}
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-ink-dark flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emeraldSeal" />
            3. Résultats & Cartographie des Zones Chaotiques
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
