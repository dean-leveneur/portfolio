import React from 'react';
import { experiencesData, educationData } from '../data/experience';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="parcours" className="py-20 tech-grid-bg border-b border-tech-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-tech-border/60">
          <div>
            <div className="font-mono text-xs text-tech-cyan mb-2">04. TIMELINE & PARCOURS</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-tech-light">
              Formation & Expérience
            </h2>
          </div>
          <p className="text-tech-muted text-sm max-w-md mt-4 md:mt-0 font-mono">
            // Du cycle fondamental FIMI aux projets d'ingénierie 3IF et en entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Professional Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-tech-border/60">
              <div className="w-10 h-10 rounded-lg bg-tech-card border border-tech-border flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-tech-amber" />
              </div>
              <h3 className="font-display font-bold text-xl text-tech-light">
                Expérience en Entreprise
              </h3>
            </div>

            <div className="space-y-6">
              {experiencesData.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-xl bg-tech-card border border-tech-border hover:border-tech-amber/50 transition-all duration-300 space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-lg text-tech-light">
                        {exp.role}
                      </h4>
                      <div className="font-mono text-xs text-tech-amber font-semibold mt-0.5">
                        {exp.company} • <span className="text-tech-muted font-normal">{exp.location}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-tech-darkest text-tech-muted border border-tech-border">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-tech-muted text-xs leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {exp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-tech-light">
                        <CheckCircle2 className="w-4 h-4 text-tech-emerald shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] px-2 py-0.5 rounded bg-tech-darkest text-tech-subtle border border-tech-border/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-tech-border/60">
              <div className="w-10 h-10 rounded-lg bg-tech-card border border-tech-border flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-tech-cyan" />
              </div>
              <h3 className="font-display font-bold text-xl text-tech-light">
                Formation Ingénieur INSA Lyon
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-xl bg-tech-card border border-tech-border hover:border-tech-cyan/50 transition-all duration-300 space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-lg text-tech-light">
                        {edu.degree}
                      </h4>
                      <div className="font-mono text-xs text-tech-cyan font-semibold mt-0.5">
                        {edu.institution} • <span className="text-tech-muted font-normal">{edu.location}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-tech-darkest text-tech-muted border border-tech-border">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-tech-muted text-xs leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {edu.details.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs font-mono text-tech-light">
                        <CheckCircle2 className="w-4 h-4 text-tech-cyan shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {edu.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] px-2 py-0.5 rounded bg-tech-darkest text-tech-subtle border border-tech-border/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
