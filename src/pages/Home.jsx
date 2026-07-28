import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Cpu, ShieldCheck, FileText, CheckCircle2, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 paper-grid-bg border-b border-paper-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Status Stamp Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded stamp-badge text-blueprint font-mono text-xs mb-8">
            <span className="w-2 h-2 rounded-full bg-emeraldSeal animate-pulse"></span>
            <span className="font-bold">STATUS:</span>
            <span>RECHERCHE STAGE INGÉNIEUR (8 À 14 SEMAINES)</span>
            <span className="text-paper-border">|</span>
            <span className="font-semibold text-copper">DÈS JUIN 2027</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Hook Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink-dark leading-tight">
                Ingénierie Software, <br />
                <span className="text-blueprint underline decoration-copper/40 decoration-wavy">
                  Systèmes Embarqués
                </span> <br />
                & Simulation Numérique.
              </h1>

              <p className="text-ink-muted text-base sm:text-lg leading-relaxed font-serif">
                Je suis <strong className="text-ink-dark font-semibold">Dean Leveneur</strong>, élève-ingénieur en 3e année à l'INSA Lyon (spécialisation 3IF). J'allie la rigueur de la programmation système POSIX/C et des microcontrôleurs BLE à la modélisation physico-mathématique et l'automatisation LLM.
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                <div className="p-4 rounded bg-paper-card border border-paper-border space-y-1">
                  <div className="font-bold text-ink-dark flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blueprint" />
                    ZONES GÉOGRAPHIQUES
                  </div>
                  <div className="text-ink-muted text-[11px] leading-relaxed">
                    • Lyon / Villeurbanne (Réseau TCL)<br />
                    • La Réunion (Tampon / St-Pierre)
                  </div>
                </div>

                <div className="p-4 rounded bg-paper-card border border-paper-border space-y-1">
                  <div className="font-bold text-ink-dark flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-copper" />
                    CALENDRIER STAGE
                  </div>
                  <div className="text-ink-muted text-[11px] leading-relaxed">
                    • Mi-Juin à Mi-Septembre 2027<br />
                    • Convention Jumplyn CTI validée
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link 
                  to="/projets" 
                  className="px-6 py-3 rounded bg-blueprint text-white font-sans font-bold text-sm hover:bg-blueprint-hover transition-all shadow-sm flex items-center gap-2"
                >
                  Explorer la liste des projets
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link 
                  to="/contact" 
                  className="px-6 py-3 rounded bg-paper-card border border-paper-border hover:border-blueprint text-ink-dark font-mono text-xs transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-copper" />
                  Critères de Stage & Contact
                </Link>
              </div>

            </div>

            {/* Right Column: Lab Telemetry Card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-paper-card border border-paper-border p-6 shadow-md space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-paper-border font-mono text-xs">
                  <div className="flex items-center gap-2 font-bold text-blueprint">
                    <Terminal className="w-4 h-4" />
                    FICHE_TECHNIQUE_INGENIEUR.SYS
                  </div>
                  <span className="px-2 py-0.5 rounded bg-paper-bg text-[10px] text-ink-muted">INSA 3IF</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-ink-muted">
                  <div className="p-3 rounded bg-paper-bg border border-paper-border space-y-1">
                    <div className="text-ink-dark font-bold">Formation Majeure</div>
                    <div>INSA Lyon — Spécialisation Informatique (3IF)</div>
                  </div>

                  <div className="p-3 rounded bg-paper-bg border border-paper-border space-y-1">
                    <div className="text-ink-dark font-bold">Stack Principale</div>
                    <div className="text-blueprint">C, POSIX Threads, Python (NumPy/SciPy), Java, BLE, Arduino, Flask/OpenAI</div>
                  </div>

                  <div className="p-3 rounded bg-paper-bg border border-paper-border space-y-1">
                    <div className="text-ink-dark font-bold">Expérience en Production</div>
                    <div className="text-copper">Assistant IA chez Run Hélico (~50 emails/jour automatisés)</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Short Editorial Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-xl bg-paper-card border border-paper-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-3">
            <div className="font-mono text-xs text-blueprint font-bold uppercase">// L'APPROCHE INSA LYON</div>
            <h2 className="font-display text-2xl font-bold text-ink-dark">
              Une démarche de conception rigoureuse, du silicium au code haut-niveau
            </h2>
            <p className="text-ink-muted text-sm leading-relaxed font-serif">
              Mon parcours au département 3IF associe théorie informatique, systèmes distribués et modélisation physique. Je ne cherche pas les solutions prêtes à l'emploi mais la compréhension fine des mécanismes sous-jacents : temps d'exécution, gestion mémoire POSIX, convergence d'algorithmes et résilience aux pannes.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <Link 
              to="/a-propos" 
              className="px-5 py-2.5 rounded border border-blueprint text-blueprint font-mono text-xs font-bold hover:bg-blueprint hover:text-white transition-all text-center w-full lg:w-auto"
            >
              En savoir plus sur mon cursus ➔
            </Link>
          </div>

        </div>
      </section>

      {/* Featured Projects Preview (2-3 Projects Only) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-paper-border pb-4 gap-4">
          <div>
            <div className="font-mono text-xs text-copper font-bold uppercase">// SÉLECTION D'ÉTUDES DE CAS</div>
            <h2 className="font-display text-3xl font-bold text-ink-dark">
              Aperçu des Projets Phares
            </h2>
          </div>

          <Link 
            to="/projets" 
            className="font-mono text-xs text-blueprint font-bold hover:underline flex items-center gap-1"
          >
            Voir tous les projets de la liste ➔
          </Link>
        </div>

        {/* 2 Featured Project Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className="p-6 rounded-xl bg-paper-card border border-paper-border hover:border-blueprint transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2 py-0.5 rounded stamp-badge text-blueprint font-bold">
                    {project.category}
                  </span>
                  <span className="text-ink-subtle">{project.period}</span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-ink-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-ink-muted text-xs leading-relaxed font-serif">
                    {project.tagline}
                  </p>
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
                <span className="text-ink-muted">Étude de cas détaillée</span>
                <Link 
                  to={project.detailPath}
                  className="px-3 py-1.5 rounded bg-blueprint text-white font-bold hover:bg-blueprint-hover transition-colors flex items-center gap-1"
                >
                  Lire l'article ➔
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Banner to Projects Page */}
        <div className="p-6 rounded-xl bg-paper-card border border-paper-border text-center space-y-4">
          <h3 className="font-display text-xl font-bold text-ink-dark">
            Vous souhaitez voir l'ensemble de mes travaux ?
          </h3>
          <p className="text-ink-muted text-xs font-serif max-w-xl mx-auto">
            Retrouvez le simulateur de routage réseau, la résolution d'équations du double pendule, l'assistant IA Run Hélico et mes outils web.
          </p>
          <Link 
            to="/projets"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-blueprint text-white font-sans font-bold text-xs hover:bg-blueprint-hover transition-all"
          >
            Accéder au catalogue complet des projets ➔
          </Link>
        </div>

      </section>

    </div>
  );
}
