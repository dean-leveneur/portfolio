import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { profileData } from '../data/profile';
import { Mail, Linkedin, Github, FileText, Check, Copy, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-12">
      
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      {/* Header */}
      <div className="border-b border-minimal-border pb-6 space-y-2">
        <h1 className="font-bold text-3xl text-minimal-dark tracking-tight">
          Contact
        </h1>
        <p className="text-sm text-minimal-muted max-w-xl">
          Recherche de stage ingénieur de 8 à 14 semaines à partir de mi-juin 2027.
        </p>
      </div>

      {/* Stage Criteria Minimal Summary */}
      <div className="p-6 rounded-xl bg-minimal-card border border-minimal-border space-y-4 shadow-sm">
        <h2 className="font-bold text-sm text-minimal-dark font-mono uppercase tracking-wider">
          // CRITÈRES DE STAGE 3IF
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-minimal-muted">
          <div>
            <div className="font-bold text-minimal-dark">Durée</div>
            <div>8 à 14 semaines (Juin 2027)</div>
          </div>
          <div>
            <div className="font-bold text-minimal-dark">Localisation</div>
            <div>Lyon (TCL) / La Réunion</div>
          </div>
          <div>
            <div className="font-bold text-minimal-dark">Convention</div>
            <div>Validée Jumplyn INSA 3IF</div>
          </div>
        </div>
      </div>

      {/* Direct Contact Links */}
      <div className="space-y-4">
        
        {/* Email Card */}
        <div className="p-6 rounded-xl bg-minimal-card border border-minimal-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-minimal-dark" />
            <div>
              <div className="font-bold text-minimal-dark">{profileData.email}</div>
              <div className="text-xs text-minimal-muted">E-mail principal</div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded border border-minimal-border hover:border-minimal-dark text-xs font-bold text-minimal-dark transition-smooth flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-600">Copié</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copier l'email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${profileData.email}`}
              className="px-4 py-2 rounded bg-minimal-dark text-white hover:bg-black text-xs font-bold transition-smooth flex items-center justify-center gap-1 w-full sm:w-auto"
            >
              <span>Envoyer</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-minimal-card border border-minimal-border hover:border-minimal-dark transition-smooth flex items-center justify-between text-xs font-bold text-minimal-dark shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-minimal-muted" />
          </a>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-minimal-card border border-minimal-border hover:border-minimal-dark transition-smooth flex items-center justify-between text-xs font-bold text-minimal-dark shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-minimal-muted" />
          </a>

          <a
            href="/cv_dean_leveneur_ats.pdf"
            download
            className="p-5 rounded-xl bg-minimal-card border border-minimal-border hover:border-minimal-dark transition-smooth flex items-center justify-between text-xs font-bold text-minimal-dark shadow-sm"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-minimal-dark" />
              <span>CV (PDF)</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-minimal-muted" />
          </a>
        </div>

      </div>

    </div>
  );
}
