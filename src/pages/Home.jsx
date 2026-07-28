import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24 space-y-24">
      
      {/* Hero Minimalist */}
      <section className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-minimal-dark text-white font-bold text-base flex items-center justify-center font-mono shadow-sm">
            DL
          </div>
          <div>
            <h1 className="font-bold text-xl text-minimal-dark tracking-tight">
              Dean Leveneur
            </h1>
            <p className="text-xs text-minimal-muted font-medium">
              Élève-Ingénieur INSA Lyon — Département 3IF
            </p>
          </div>
        </div>

        <p className="text-xl sm:text-2xl font-bold text-minimal-dark leading-snug tracking-tight">
          Développement software, systèmes embarqués POSIX/BLE et simulation numérique du chaos.
        </p>

        <div className="flex items-center gap-4 pt-2 font-medium text-xs">
          <Link 
            to="/contact" 
            className="px-5 py-2.5 rounded bg-minimal-dark text-white hover:bg-black transition-smooth flex items-center gap-1.5"
          >
            <span>Me contacter / Stage 2027</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link 
            to="/a-propos" 
            className="px-5 py-2.5 rounded border border-minimal-border hover:border-minimal-dark text-minimal-dark transition-smooth"
          >
            À propos & Cursus
          </Link>
        </div>
      </section>

      {/* Featured Projects Visual Grid */}
      <section className="space-y-10">
        <div className="flex items-end justify-between border-b border-minimal-border pb-4">
          <h2 className="font-bold text-lg text-minimal-dark tracking-tight">
            Projets phares
          </h2>

          <Link 
            to="/projets" 
            className="text-xs font-semibold text-minimal-muted hover:text-minimal-dark transition-colors flex items-center gap-1"
          >
            <span>Voir les 5 projets</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link 
              key={project.id} 
              to={project.detailPath}
              className="group rounded-xl bg-minimal-card border border-minimal-border hover:border-minimal-dark transition-smooth overflow-hidden flex flex-col justify-between p-6 space-y-6 shadow-sm hover:shadow-md"
            >
              {/* Project Image Illustration */}
              <div className="space-y-4">
                <div className="w-full h-44 rounded-lg bg-minimal-bg border border-minimal-border/80 overflow-hidden flex items-center justify-center group-hover:opacity-95 transition-opacity">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain p-2" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-minimal-muted">
                    {project.period}
                  </div>
                  <h3 className="font-bold text-lg text-minimal-dark group-hover:text-minimal-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-minimal-muted line-clamp-2 leading-relaxed">
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
      </section>

    </div>
  );
}
