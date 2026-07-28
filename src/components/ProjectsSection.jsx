import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import CaseStudyCard from './CaseStudyCard';
import { Layers } from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', 'Embarqué & IoT', 'Réseaux & Algorithmique', 'Physique & Modélisation', 'IA & Automatisation', 'Web & Outils Ingénieur'];

  const filteredProjects = filter === 'Tous' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projets" className="py-20 tech-grid-bg border-b border-tech-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-tech-border/60">
          <div>
            <div className="font-mono text-xs text-tech-cyan mb-2">02. RÉALISATIONS & ÉTUDES DE CAS</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-tech-light">
              Projets Phares d'Ingénierie
            </h2>
          </div>
          <p className="text-tech-muted text-sm max-w-md mt-4 md:mt-0 font-mono">
            // Chaque projet raconte le "pourquoi", les contraintes et le résultat mesurable.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-2 rounded-lg border transition-all ${
                filter === cat
                  ? 'bg-tech-cyan text-tech-darkest font-bold border-tech-cyan shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                  : 'bg-tech-card text-tech-muted hover:text-tech-light border-tech-border hover:border-tech-cyan/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Case Study List */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => (
            <CaseStudyCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
