import React from 'react';
import { ShieldCheck, MapPin, Calendar, FileCheck, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profile';

export default function StageBanner() {
  return (
    <section className="py-16 bg-tech-darkest border-b border-tech-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-gradient-to-r from-tech-card via-tech-dark to-tech-card border border-tech-cyan/30 p-8 md:p-10 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none font-mono text-8xl font-bold text-tech-cyan">
            3IF
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-tech-emerald/10 border border-tech-emerald/30 text-tech-emerald font-mono text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                STAGE INGÉNIEUR INSA LYON (3IF)
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-tech-light">
                À la recherche d'un Stage Ingénieur — Été 2027
              </h2>

              <p className="text-tech-muted text-sm leading-relaxed max-w-2xl">
                Je suis ouvert aux propositions de stage technique dans des équipes de développement logiciel, d'ingénierie système, de simulation numérique ou d'IoT. 
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-tech-light">
                <div className="flex items-center gap-2 p-2.5 rounded bg-tech-darkest/70 border border-tech-border/60">
                  <Calendar className="w-4 h-4 text-tech-cyan shrink-0" />
                  <span>Durée : <strong className="text-tech-cyan">8 à 14 semaines</strong> (Juin 2027)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded bg-tech-darkest/70 border border-tech-border/60">
                  <MapPin className="w-4 h-4 text-tech-cyan shrink-0" />
                  <span>Secteurs : <strong className="text-tech-cyan">Lyon / Villeurbanne ou La Réunion</strong></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-tech-cyan text-tech-darkest font-display font-bold text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] flex items-center justify-center gap-2"
              >
                Proposer une mission
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-tech-muted hover:text-tech-cyan transition-colors"
              >
                // Consulter mes dépôts GitHub ➔
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
