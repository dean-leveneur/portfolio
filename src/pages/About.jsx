import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { skillsData, experiencesData, educationData } from '../data/experience';
import { GraduationCap, Briefcase, Code, Terminal, Network, Cpu, Database, CheckCircle2, Award } from 'lucide-react';

export default function About() {
  const getCategoryIcon = (category) => {
    if (category.includes('Langages')) return Code;
    if (category.includes('Systèmes')) return Terminal;
    if (category.includes('Réseaux')) return Network;
    if (category.includes('Mobile')) return Cpu;
    return Database;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'À Propos & Cursus INSA 3IF' }]} />

      {/* Header */}
      <div className="border-b border-paper-border pb-6 space-y-2">
        <div className="font-mono text-xs text-blueprint font-bold uppercase">// PROFIL & ARCHITECTURE DES COMPÉTENCES</div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-dark">
          À Propos de Dean Leveneur
        </h1>
        <p className="text-ink-muted text-sm font-serif max-w-2xl">
          Élève-ingénieur en 3e année à l'INSA Lyon (département Informatique - 3IF). Passionné par les systèmes bas-niveau, la programmation POSIX/C, la simulation physico-mathématique et l'automatisation LLM.
        </p>
      </div>

      {/* Core Engineering Identity Banner */}
      <div className="p-8 rounded-xl bg-paper-card border border-paper-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-8 space-y-4 font-serif">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded stamp-badge text-blueprint font-mono text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            COMPÉTENCES INSA 3IF VALIDÉES (CTI)
          </div>

          <h2 className="font-display text-2xl font-bold text-ink-dark">
            Une approche globale du matériel au logiciel haut-niveau
          </h2>

          <p className="text-ink-muted text-sm leading-relaxed">
            Formé au sein de l'une des meilleures écoles d'ingénieurs de France, je combine une base scientifique solide en mathématiques et physique (cycle FIMI) avec des spécialisations concrètes en programmation POSIX, réseaux IP et ingénierie logicielle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-ink-dark">
            <div className="flex items-center gap-2 p-2.5 rounded bg-paper-bg border border-paper-border">
              <CheckCircle2 className="w-4 h-4 text-emeraldSeal shrink-0" />
              <span>Programmation POSIX C, Threads, Mutex, GDB</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded bg-paper-bg border border-paper-border">
              <CheckCircle2 className="w-4 h-4 text-emeraldSeal shrink-0" />
              <span>Réseaux ISO/OSI, Routage IP (Dijkstra, A*)</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 p-6 rounded bg-paper-bg border border-paper-border font-mono text-xs space-y-3">
          <div className="text-blueprint font-bold uppercase">// SPÉCIFICATIONS STAGE</div>
          <div className="text-ink-muted text-xs space-y-1">
            <div>• <strong className="text-ink-dark">Durée :</strong> 8 à 14 semaines</div>
            <div>• <strong className="text-ink-dark">Période :</strong> Mi-Juin à Mi-Septembre 2027</div>
            <div>• <strong className="text-ink-dark">Convention :</strong> Jumplyn CTI</div>
            <div>• <strong className="text-ink-dark">Zones :</strong> Lyon / Villeurbanne (TCL) | La Réunion</div>
          </div>
        </div>

      </div>

      {/* Grouped Skills Matrix */}
      <div className="space-y-6">
        <div className="border-b border-paper-border pb-3">
          <div className="font-mono text-xs text-copper font-bold uppercase">// MATRICE DE COMPÉTENCES</div>
          <h2 className="font-display text-2xl font-bold text-ink-dark">
            Compétences Techniques par Domaine
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);

            return (
              <div key={idx} className="p-6 rounded-xl bg-paper-card border border-paper-border space-y-4 shadow-sm">
                <div className="flex items-center gap-3 pb-3 border-b border-paper-border">
                  <div className="w-9 h-9 rounded bg-paper-bg border border-paper-border flex items-center justify-center text-blueprint font-bold">
                    <Icon className="w-5 h-5 text-blueprint" />
                  </div>
                  <h3 className="font-display font-bold text-base text-ink-dark">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-2.5 rounded bg-paper-bg border border-paper-border/80 space-y-0.5">
                      <div className="text-ink-dark font-bold">{skill.name}</div>
                      <div className="text-[11px] text-ink-muted">{skill.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        
        {/* Education Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-paper-border">
            <GraduationCap className="w-6 h-6 text-blueprint" />
            <h2 className="font-display font-bold text-xl text-ink-dark">
              Formation Académique (INSA Lyon)
            </h2>
          </div>

          {educationData.map((edu, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-paper-card border border-paper-border space-y-3">
              <div className="flex justify-between items-start font-mono text-xs">
                <div>
                  <h3 className="font-display font-bold text-base text-ink-dark">{edu.degree}</h3>
                  <div className="text-blueprint font-semibold mt-0.5">{edu.institution}</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-paper-bg border border-paper-border text-ink-subtle">{edu.period}</span>
              </div>
              <p className="text-ink-muted text-xs font-serif leading-relaxed">{edu.description}</p>
              <div className="space-y-1 pt-2 font-mono text-xs">
                {edu.details.map((d, dIdx) => (
                  <div key={dIdx} className="text-[11px] text-ink-dark flex items-start gap-1.5">
                    <span className="text-blueprint">•</span> {d}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-paper-border">
            <Briefcase className="w-6 h-6 text-copper" />
            <h2 className="font-display font-bold text-xl text-ink-dark">
              Expérience en Entreprise
            </h2>
          </div>

          {experiencesData.map((exp, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-paper-card border border-paper-border space-y-3">
              <div className="flex justify-between items-start font-mono text-xs">
                <div>
                  <h3 className="font-display font-bold text-base text-ink-dark">{exp.role}</h3>
                  <div className="text-copper font-semibold mt-0.5">{exp.company} • {exp.location}</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-paper-bg border border-paper-border text-ink-subtle">{exp.period}</span>
              </div>
              <p className="text-ink-muted text-xs font-serif leading-relaxed">{exp.description}</p>
              <div className="space-y-1 pt-2 font-mono text-xs">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="text-[11px] text-ink-dark flex items-start gap-1.5">
                    <span className="text-copper">•</span> {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
