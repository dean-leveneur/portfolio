import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import Breadcrumbs from '../components/Breadcrumbs';
import { Layers, ArrowRight, Github } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', 'Embarqué & IoT', 'Réseaux & Algorithmique', 'Physique & Modélisation', 'IA & Automatisation', 'Web & Outils Ingénieur'];

  const filteredProjects = filter === 'Tous' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Projets Phares & Catalogue' }]} />

      {/* Header */}
      <div className="border-b border-paper-border pb-6 space-y-2">
        <div className="font-mono text-xs text-blueprint font-bold uppercase">// CATALOGUE TECHNIQUE COMPLET</div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-dark">
          Projets & Travaux d'Ingénierie
        </h1>
        <p className="text-ink-muted text-sm font-serif max-w-2xl">
          Sélection de réalisations développées dans le cadre du cursus INSA Lyon 3IF et de projets personnels. Chaque fiche détaille les problématiques, le choix des architectures et les résultats mesurés.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-2 rounded border transition-all ${
              filter === cat
                ? 'bg-blueprint text-white font-bold border-blueprint shadow-sm'
                : 'bg-paper-card text-ink-muted hover:text-ink-dark border-paper-border hover:border-blueprint'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Asymmetric Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {filteredProjects.map((project, idx) => {
          // Asymmetrical layout: some cards take 8 cols, others take 4 cols or 6 cols
          const colSpanClass = idx === 0 || idx === 1 ? 'md:col-span-6' : idx === 2 ? 'md:col-span-12' : 'md:col-span-4';

          return (
            <div 
              key={project.id} 
              className={`${colSpanClass} p-6 rounded-xl bg-paper-card border border-paper-border hover:border-blueprint transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2 py-0.5 rounded stamp-badge text-blueprint font-bold">
                    {project.category}
                  </span>
                  <span className="text-ink-subtle">{project.period}</span>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-ink-dark mb-2">
                    {project.title}
                  </h2>
                  <p className="text-ink-muted text-xs leading-relaxed font-serif">
                    {project.tagline}
                  </p>
                </div>

                <div className="p-3 rounded bg-paper-bg border border-paper-border font-mono text-xs text-ink-muted">
                  <div className="text-[10px] text-blueprint font-bold mb-1">// DÉFI RÉSOLU</div>
                  <p className="text-[11px] leading-normal">{project.problem}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="font-mono text-[10px] px-2 py-0.5 rounded bg-paper-bg text-ink-dark border border-paper-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-paper-border flex items-center justify-between font-mono text-xs">
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-ink-muted hover:text-blueprint transition-colors flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                ) : (
                  <span></span>
                )}

                <Link 
                  to={project.detailPath}
                  className="px-3.5 py-1.5 rounded bg-blueprint text-white font-bold hover:bg-blueprint-hover transition-colors flex items-center gap-1.5"
                >
                  <span>Consulter l'étude</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
