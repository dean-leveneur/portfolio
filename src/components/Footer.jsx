import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  return (
    <footer className="bg-paper-card border-t border-paper-border py-12 font-mono text-xs text-ink-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2 text-ink-dark font-bold font-display text-base">
              <Terminal className="w-4 h-4 text-blueprint" />
              Dean LEVENEUR
            </div>
            <p className="text-ink-muted text-xs leading-relaxed">
              Élève-Ingénieur INSA Lyon — Département Informatique (3IF)<br />
              Ingénierie Software, POSIX/C, Systèmes Embarqués & Simulation Numérique.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[11px] text-blueprint font-bold uppercase">// PLAN DU CARNET</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link to="/" className="hover:text-blueprint transition-colors">01. Accueil</Link>
              <Link to="/projets" className="hover:text-blueprint transition-colors">02. Projets Phares</Link>
              <Link to="/a-propos" className="hover:text-blueprint transition-colors">03. À Propos</Link>
              <Link to="/contact" className="hover:text-blueprint transition-colors">04. Contact & Stage</Link>
            </div>
          </div>

          {/* External Links & Stamp */}
          <div className="md:col-span-3 space-y-3 flex flex-col items-start md:items-end">
            <div className="flex items-center gap-3">
              <a 
                href={profileData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded bg-paper-bg border border-paper-border hover:border-blueprint text-ink-dark transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded bg-paper-bg border border-paper-border hover:border-blueprint text-ink-dark transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href={`mailto:${profileData.email}`} 
                className="p-2 rounded bg-paper-bg border border-paper-border hover:border-blueprint text-ink-dark transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="px-3 py-1 rounded stamp-badge text-[11px] font-bold text-blueprint">
              STAGE 2027 • LYON / LA RÉUNION
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-paper-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-subtle">
          <div>
            © {new Date().getFullYear()} Dean Leveneur. Carnet d'Ingénierie éditorial. Tous droits réservés.
          </div>

          <div>
            INSA Lyon 3IF • Convention Jumplyn CTI
          </div>
        </div>

      </div>
    </footer>
  );
}
