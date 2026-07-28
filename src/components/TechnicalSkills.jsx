import React from 'react';
import { skillsData } from '../data/experience';
import { Cpu, Terminal, Network, Code, Database, Check } from 'lucide-react';

export default function TechnicalSkills() {
  const getCategoryIcon = (category) => {
    if (category.includes('Langages')) return Code;
    if (category.includes('Systèmes')) return Terminal;
    if (category.includes('Réseaux')) return Network;
    if (category.includes('Mobile')) return Cpu;
    return Database;
  };

  return (
    <section id="competences" className="py-20 bg-tech-dark border-b border-tech-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-tech-border/60">
          <div>
            <div className="font-mono text-xs text-tech-cyan mb-2">03. COMPÉTENCES TECHNIQUES</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-tech-light">
              Matrice de Compétences 3IF
            </h2>
          </div>
          <p className="text-tech-muted text-sm max-w-md mt-4 md:mt-0 font-mono">
            // Groupement sémantique par domaine d'ingénierie et niveau de maîtrise opérationnel.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);

            return (
              <div 
                key={idx} 
                className="p-6 rounded-xl bg-tech-card border border-tech-border hover:border-tech-cyan/50 transition-all duration-300 space-y-4"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-tech-border/60">
                  <div className="w-9 h-9 rounded-lg bg-tech-darkest border border-tech-border flex items-center justify-center">
                    <Icon className="w-5 h-5 text-tech-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-base text-tech-light">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-2.5 rounded bg-tech-darkest border border-tech-border/60 flex items-start justify-between gap-2">
                      <div>
                        <div className="text-tech-light font-semibold flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-tech-emerald" />
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-tech-muted mt-0.5 pl-5">
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
