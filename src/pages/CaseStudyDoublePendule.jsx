import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { projectsData } from '../data/projects';
import { ArrowLeft, Github } from 'lucide-react';

export default function CaseStudyDoublePendule() {
  const project = projectsData.find(p => p.id === 'double-pendule');

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      
      <Breadcrumbs items={[
        { label: 'Projets', path: '/projets' },
        { label: 'Double Pendule' }
      ]} />

      {/* Hero Cover Card */}
      <div className="space-y-6 border-b border-minimal-border pb-8">
        <div className="w-full h-64 sm:h-80 rounded-xl bg-minimal-card border border-minimal-border flex items-center justify-center p-6 text-center">
          <div className="space-y-2">
            <span className="font-mono text-xs text-minimal-muted uppercase tracking-wider">
              [{project.category} • {project.period}]
            </span>
            <h1 className="font-bold text-3xl sm:text-4xl text-minimal-dark tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-minimal-card text-minimal-dark border border-minimal-border">
                {tech}
              </span>
            ))}
          </div>

          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded bg-minimal-dark text-white hover:bg-black transition-smooth flex items-center gap-1.5 font-sans font-medium text-xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Code Source</span>
          </a>
        </div>
      </div>

      {/* Short Direct Sections (Contexte, Ce qui a été fait, Résultat) */}
      <div className="space-y-10 text-minimal-dark text-sm sm:text-base leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="font-bold text-lg text-minimal-dark tracking-tight">
            Contexte
          </h2>
          <p className="text-minimal-muted text-sm leading-relaxed">
            {project.context}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-bold text-lg text-minimal-dark tracking-tight">
            Ce qui a été fait
          </h2>
          <ul className="space-y-2 text-sm text-minimal-muted font-sans">
            {project.whatWasDone.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-minimal-dark font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-bold text-lg text-minimal-dark tracking-tight">
            Résultat
          </h2>
          <ul className="space-y-2 text-sm text-minimal-muted font-sans">
            {project.results.map((res, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-minimal-dark font-bold">•</span>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Back Button */}
      <div className="pt-8 border-t border-minimal-border">
        <Link to="/projets" className="text-xs font-semibold text-minimal-muted hover:text-minimal-dark transition-colors inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux projets</span>
        </Link>
      </div>

    </div>
  );
}
