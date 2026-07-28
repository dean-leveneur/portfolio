import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Projets' }]} />

      {/* Header */}
      <div className="border-b border-minimal-border pb-6 space-y-2">
        <h1 className="font-bold text-3xl text-minimal-dark tracking-tight">
          Projets
        </h1>
        <p className="text-sm text-minimal-muted max-w-xl">
          Sélection de réalisations en ingénierie logicielle, embarqué BLE, simulation numérique et automatisation LLM.
        </p>
      </div>

      {/* Projects Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <Link 
            key={project.id} 
            to={project.detailPath}
            className="group rounded-xl bg-minimal-card border border-minimal-border hover:border-minimal-dark transition-smooth p-6 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="w-full h-52 rounded-lg bg-minimal-bg border border-minimal-border overflow-hidden flex items-center justify-center p-2 group-hover:opacity-95 transition-opacity">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-minimal-muted">
                  <span>{project.period}</span>
                  <ArrowUpRight className="w-4 h-4 text-minimal-muted group-hover:text-minimal-dark transition-colors" />
                </div>
                <h2 className="font-bold text-xl text-minimal-dark group-hover:text-minimal-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-minimal-muted leading-relaxed">
                  {project.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-minimal-border">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-minimal-bg text-minimal-dark border border-minimal-border">
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
