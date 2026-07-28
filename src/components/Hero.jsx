import React from 'react';
import { Terminal, MapPin, Calendar, Cpu, ArrowRight, ShieldCheck, FileText, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 tech-grid-bg border-b border-tech-border overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-tech-amber/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* System Telemetry Header Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-tech-card border border-tech-border text-tech-muted font-mono text-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-tech-emerald animate-pulse"></span>
          <span className="text-tech-emerald font-semibold">STATUS:</span>
          <span>RECHERCHE STAGE INGÉNIEUR (8 À 14 SEMAINES)</span>
          <span className="text-tech-subtle">|</span>
          <span className="text-tech-cyan">DÈS JUIN 2027</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Hero Hook Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-tech-light leading-tight">
              Ingénierie Logicielle, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan via-tech-light to-tech-emerald">
                Systèmes Embarqués
              </span> <br />
              & Simulation Numérique.
            </h1>

            <p className="text-tech-muted text-base sm:text-lg max-w-2xl leading-relaxed">
              Je suis <strong className="text-tech-light font-semibold">Dean Leveneur</strong>, élève-ingénieur en 3e année à l'INSA Lyon (spécialisation 3IF). J'allie la rigueur du bas-niveau (POSIX, C/C++, embarqué BLE) à la puissance du calcul scientifique (Python, RK4) et à l'automatisation intelligente par LLM.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-tech-card/80 border border-tech-border flex items-start gap-3">
                <MapPin className="w-4 h-4 text-tech-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-tech-light font-semibold">Zones Géographiques</div>
                  <div className="text-tech-muted text-[11px] mt-0.5">
                    • Lyon / Villeurbanne (TCL)<br />
                    • La Réunion (Tampon / St-Pierre)
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-tech-card/80 border border-tech-border flex items-start gap-3">
                <Calendar className="w-4 h-4 text-tech-emerald shrink-0 mt-0.5" />
                <div>
                  <div className="text-tech-light font-semibold">Disponibilité Stage</div>
                  <div className="text-tech-muted text-[11px] mt-0.5">
                    Mi-Juin à Mi-Septembre 2027<br />
                    Convention Jumplyn validée
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projets" 
                className="px-6 py-3 rounded-lg bg-tech-cyan text-tech-darkest font-display font-bold text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] flex items-center gap-2"
              >
                Explorer les Études de Cas
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-tech-card hover:bg-tech-cardHover border border-tech-border hover:border-tech-cyan text-tech-light font-mono text-xs transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-tech-amber" />
                Proposer un Stage / Contact
              </a>
            </div>

          </div>

          {/* Right Column: Engineering System Dashboard Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-tech-card border border-tech-border shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-tech-dark border-b border-tech-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-tech-muted text-[11px] ml-2">dean_leveneur_profile.sys</span>
                </div>
                <div className="text-[10px] text-tech-subtle px-2 py-0.5 rounded bg-tech-darkest">
                  v3.0.3IF
                </div>
              </div>

              {/* Terminal Body Content */}
              <div className="p-5 space-y-4 text-tech-muted">
                <div>
                  <span className="text-tech-cyan">$</span> cat System_Capabilities.json
                </div>

                <div className="p-3 bg-tech-darkest/70 rounded border border-tech-border/60 text-[11px] space-y-2">
                  <div>
                    <span className="text-tech-amber">"formation":</span> <span className="text-tech-light">"INSA Lyon — Département 3IF"</span>,
                  </div>
                  <div>
                    <span className="text-tech-amber">"core_languages":</span> [<span className="text-tech-emerald">"C"</span>, <span className="text-tech-emerald">"Python"</span>, <span className="text-tech-emerald">"Java"</span>, <span className="text-tech-emerald">"C++"</span>],
                  </div>
                  <div>
                    <span className="text-tech-amber">"specialties":</span> [
                    <div className="pl-4 text-tech-light">
                      "Programmations POSIX & Threads",<br />
                      "IoT & BLE (Arduino / Flutter)",<br />
                      "Simulation Physico-Mathématique (RK4)",<br />
                      "Automatisation LLM & Python"
                    </div>
                    ],
                  </div>
                  <div>
                    <span className="text-tech-amber">"internship_ready":</span> <span className="text-tech-cyan">true</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-tech-border/40">
                  <div className="text-[11px] text-tech-subtle mb-2">/* TÉLÉMÉTRIE DU CURSUS */</div>
                  <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                    <div className="p-2 rounded bg-tech-dark border border-tech-border/50">
                      <div className="text-tech-cyan font-bold text-sm">3IF</div>
                      <div className="text-tech-subtle text-[10px]">INSA Lyon Informatique</div>
                    </div>
                    <div className="p-2 rounded bg-tech-dark border border-tech-border/50">
                      <div className="text-tech-emerald font-bold text-sm">C / POSIX</div>
                      <div className="text-tech-subtle text-[10px]">Systèmes & Gdb</div>
                    </div>
                    <div className="p-2 rounded bg-tech-dark border border-tech-border/50">
                      <div className="text-tech-amber font-bold text-sm">50/jour</div>
                      <div className="text-tech-subtle text-[10px]">Emails IA Run Hélico</div>
                    </div>
                    <div className="p-2 rounded bg-tech-dark border border-tech-border/50">
                      <div className="text-tech-purple font-bold text-sm">RK4</div>
                      <div className="text-tech-subtle text-[10px]">Modélisation Chaos</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
