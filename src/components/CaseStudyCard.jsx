import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Cpu, CheckCircle2, Code, Terminal, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function CaseStudyCard({ project, index }) {
  const [activeTab, setActiveTab] = useState('problem'); // 'problem', 'engineering', 'results'

  return (
    <div className="rounded-xl bg-tech-card border border-tech-border hover:border-tech-cyan/50 transition-all duration-300 overflow-hidden shadow-xl">
      
      {/* Case Study Header Bar */}
      <div className="px-6 py-4 bg-tech-dark border-b border-tech-border flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-tech-cyan px-2.5 py-1 rounded bg-tech-cyan/10 border border-tech-cyan/20">
            PROJET_0{index + 1}
          </span>
          <span className="font-mono text-xs text-tech-amber px-2 py-0.5 rounded bg-tech-amber/10 border border-tech-amber/20">
            {project.category}
          </span>
          <span className="font-mono text-xs text-tech-muted hidden sm:inline">
            {project.period}
          </span>
        </div>

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-xs text-tech-muted hover:text-tech-cyan transition-colors flex items-center gap-1.5 px-3 py-1 rounded bg-tech-darkest border border-tech-border/80"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Code Source</span>
          </a>
        )}
      </div>

      {/* Main Body */}
      <div className="p-6 space-y-6">
        
        {/* Title & Tagline */}
        <div>
          <h3 className="font-display text-2xl font-bold text-tech-light mb-2">
            {project.title}
          </h3>
          <p className="text-tech-muted text-sm font-body">
            {project.tagline}
          </p>
        </div>

        {/* Tech Badges Row */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="font-mono text-xs px-2.5 py-1 rounded bg-tech-darkest text-tech-light border border-tech-border">
              {tech}
            </span>
          ))}
        </div>

        {/* Case Study Navigation Tabs */}
        <div className="border-b border-tech-border/60">
          <nav className="flex gap-4 font-mono text-xs">
            <button
              onClick={() => setActiveTab('problem')}
              className={`pb-2 transition-all border-b-2 font-medium flex items-center gap-1.5 ${
                activeTab === 'problem'
                  ? 'border-tech-cyan text-tech-cyan'
                  : 'border-transparent text-tech-muted hover:text-tech-light'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Problème & Solution
            </button>
            <button
              onClick={() => setActiveTab('engineering')}
              className={`pb-2 transition-all border-b-2 font-medium flex items-center gap-1.5 ${
                activeTab === 'engineering'
                  ? 'border-tech-cyan text-tech-cyan'
                  : 'border-transparent text-tech-muted hover:text-tech-light'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Choix Techniques
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`pb-2 transition-all border-b-2 font-medium flex items-center gap-1.5 ${
                activeTab === 'results'
                  ? 'border-tech-cyan text-tech-cyan'
                  : 'border-transparent text-tech-muted hover:text-tech-light'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Résultats & Télémétrie
            </button>
          </nav>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[160px] text-sm">
          
          {/* TAB 1: PROBLEM & SOLUTION */}
          {activeTab === 'problem' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-lg bg-tech-darkest/80 border border-tech-border/60">
                <div className="font-mono text-xs text-tech-amber font-semibold mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  LE DÉFI INGÉNIEUR
                </div>
                <p className="text-tech-muted text-xs leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-tech-darkest/80 border border-tech-border/60">
                <div className="font-mono text-xs text-tech-emerald font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  LA SOLUTION APPORTÉE
                </div>
                <p className="text-tech-light text-xs leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ENGINEERING CHOICES & ARCHITECTURE */}
          {activeTab === 'engineering' && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {project.engineeringChoices?.map((item, i) => (
                  <div key={i} className="p-3 rounded bg-tech-darkest border border-tech-border">
                    <div className="font-mono text-xs text-tech-cyan font-bold mb-1">
                      {item.topic}
                    </div>
                    <p className="text-tech-muted text-xs">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {project.architectureSnippet && (
                <div className="p-3 rounded bg-tech-darkest font-mono text-[11px] text-tech-muted border border-tech-border overflow-x-auto">
                  <div className="text-[10px] text-tech-subtle mb-1">// SHEMA D'ARCHITECTURE PIPELINE</div>
                  <pre className="text-tech-cyan leading-snug">{project.architectureSnippet}</pre>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: RESULTS */}
          {activeTab === 'results' && (
            <div className="space-y-3 animate-fade-in">
              <div className="font-mono text-xs text-tech-emerald mb-2">/* RÉSULTATS ET IMPACT MESURÉ */</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.results?.map((res, i) => (
                  <div key={i} className="p-3 rounded bg-tech-darkest border border-tech-border flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-tech-emerald shrink-0 mt-0.5" />
                    <span className="text-tech-light text-xs font-mono">{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
