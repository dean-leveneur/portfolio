import React from 'react';
import { Terminal, ShieldCheck, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  return (
    <footer className="bg-tech-darkest border-t border-tech-border py-12 font-mono text-xs text-tech-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Left Column */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-tech-light font-bold font-display text-base">
              <Terminal className="w-4 h-4 text-tech-cyan" />
              Dean LEVENEUR
            </div>
            <p className="text-tech-subtle text-xs">
              Élève-Ingénieur INSA Lyon — Département Informatique (3IF)<br />
              Spécialisation Développement Software, Embarqué & Simulation Numérique.
            </p>
          </div>

          {/* Center Column: Telemetry Status */}
          <div className="md:col-span-3 space-y-1">
            <div className="text-[11px] text-tech-subtle">// TÉLÉMÉTRIE DÉPLOIEMENT</div>
            <div className="flex items-center gap-2 text-tech-emerald text-xs">
              <span className="w-2 h-2 rounded-full bg-tech-emerald animate-pulse"></span>
              BUILD: V3.0.3IF_OK
            </div>
            <div className="text-tech-muted text-[11px]">
              REACT + VITE + TAILWIND CSS
            </div>
          </div>

          {/* Right Column: Quick Links */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4">
            <a 
              href={profileData.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded bg-tech-dark border border-tech-border hover:border-tech-cyan text-tech-muted hover:text-tech-light transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a 
              href={profileData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded bg-tech-dark border border-tech-border hover:border-tech-cyan text-tech-muted hover:text-tech-light transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a 
              href={`mailto:${profileData.email}`} 
              className="p-2 rounded bg-tech-dark border border-tech-border hover:border-tech-cyan text-tech-muted hover:text-tech-light transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-tech-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-tech-subtle">
          <div>
            © {new Date().getFullYear()} Dean Leveneur. Conçu avec rigueur d'ingénieur (aucun template générique).
          </div>

          <div>
            Zones de stage : <span className="text-tech-muted">Lyon / Villeurbanne (TCL)</span> | <span className="text-tech-muted">La Réunion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
