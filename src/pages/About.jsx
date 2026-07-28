import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { skillsData, experiencesData, educationData } from '../data/experience';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      
      <Breadcrumbs items={[{ label: 'À propos' }]} />

      {/* Header with Monochrome Black INSA Lyon Logo */}
      <div className="border-b border-minimal-border pb-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl text-minimal-dark tracking-tight">
              À propos
            </h1>
            <p className="text-sm text-minimal-muted leading-relaxed font-medium max-w-xl">
              Élève-ingénieur en 3e année à l'INSA Lyon (département Informatique - 3IF). Mon profil combine la programmation bas-niveau POSIX/C, la modélisation physico-mathématique, les réseaux et l'automatisation LLM.
            </p>
          </div>

          {/* Monochrome Black INSA Lyon Vector Logo */}
          <div className="shrink-0 p-3 rounded-lg bg-white border border-minimal-border shadow-sm flex items-center justify-center">
            <img 
              src="./images/insa-lyon-logo.svg" 
              alt="INSA Lyon Logo Noir" 
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="space-y-6">
        <h2 className="font-bold text-lg text-minimal-dark tracking-tight border-b border-minimal-border pb-3">
          Parcours
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-minimal-card border border-minimal-border space-y-2 shadow-sm">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-minimal-muted">
                <span className="font-bold text-minimal-dark">{edu.institution}</span>
                <span>{edu.period}</span>
              </div>
              <h3 className="font-bold text-base text-minimal-dark">{edu.degree}</h3>
              <p className="text-xs text-minimal-muted leading-relaxed">{edu.description}</p>
            </div>
          ))}

          {experiencesData.map((exp, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-minimal-card border border-minimal-border space-y-2 shadow-sm">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono text-minimal-muted">
                <span className="font-bold text-minimal-dark">{exp.company} • {exp.location}</span>
                <span>{exp.period}</span>
              </div>
              <h3 className="font-bold text-base text-minimal-dark">{exp.role}</h3>
              <p className="text-xs text-minimal-muted leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-6">
        <h2 className="font-bold text-lg text-minimal-dark tracking-tight border-b border-minimal-border pb-3">
          Compétences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-minimal-card border border-minimal-border space-y-3 shadow-sm">
              <h3 className="font-bold text-sm text-minimal-dark border-b border-minimal-border pb-2">
                {cat.category}
              </h3>
              <div className="space-y-2 font-mono text-xs text-minimal-muted">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex justify-between items-center">
                    <span className="text-minimal-dark font-medium">{skill.name}</span>
                    <span className="text-[11px] text-minimal-subtle">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
