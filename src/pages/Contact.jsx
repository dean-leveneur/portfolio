import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { profileData } from '../data/profile';
import { Mail, Linkedin, Github, FileText, Check, Copy, Send, MapPin, Calendar, ShieldCheck, Terminal } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Contact & Proposition de Stage' }]} />

      {/* Header */}
      <div className="border-b border-paper-border pb-6 space-y-2">
        <div className="font-mono text-xs text-blueprint font-bold uppercase">// PRENDRE CONTACT DIRECTEMENT</div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink-dark">
          Recherche de Stage Ingénieur — Été 2027
        </h1>
        <p className="text-ink-muted text-sm font-serif max-w-2xl">
          N'hésitez pas à me contacter par e-mail ou via LinkedIn pour me proposer un sujet de stage ou échanger sur vos projets.
        </p>
      </div>

      {/* Internship Criteria Card */}
      <div className="p-8 rounded-xl bg-paper-card border border-paper-border space-y-6 shadow-sm">
        <div className="flex items-center gap-2 font-mono text-xs text-blueprint font-bold uppercase">
          <ShieldCheck className="w-4 h-4 text-emeraldSeal" />
          FICHE RECAPITULATIVE DE LA RECHERCHE DE STAGE 3IF
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-ink-dark">
          
          <div className="p-4 rounded bg-paper-bg border border-paper-border space-y-2">
            <div className="font-bold text-blueprint flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Période & Durée
            </div>
            <div className="text-ink-muted text-xs">
              • Minimum <strong className="text-ink-dark">8 semaines</strong> (recommandé 12-14 sem.)<br />
              • Début : <strong className="text-copper">Mi-Juin 2027</strong><br />
              • Fin max : Mi-Septembre 2027
            </div>
          </div>

          <div className="p-4 rounded bg-paper-bg border border-paper-border space-y-2">
            <div className="font-bold text-copper flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              Zones Autorisées
            </div>
            <div className="text-ink-muted text-xs">
              1. <strong className="text-ink-dark">Lyon & Villeurbanne</strong> (Métropole TCL)<br />
              2. <strong className="text-ink-dark">La Réunion</strong> (Le Tampon / Saint-Pierre)
            </div>
          </div>

          <div className="p-4 rounded bg-paper-bg border border-paper-border space-y-2">
            <div className="font-bold text-emeraldSeal flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Convention & Cadre
            </div>
            <div className="text-ink-muted text-xs">
              • Validation par la plateforme <strong className="text-ink-dark">Jumplyn</strong><br />
              • Entreprises (ESN, éditeur, grand groupe, startup)<br />
              • Signature officielle INSA Lyon
            </div>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contacts & CV Download */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="p-6 rounded-xl bg-paper-card border border-paper-border space-y-4 shadow-sm">
            <h2 className="font-display font-bold text-xl text-ink-dark flex items-center gap-2">
              <Terminal className="w-5 h-5 text-blueprint" />
              Coordonnées Directes
            </h2>

            {/* Email Copy Card */}
            <div className="p-4 rounded bg-paper-bg border border-paper-border flex items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-ink-dark truncate">
                <Mail className="w-4 h-4 text-blueprint shrink-0" />
                <span className="truncate">{profileData.email}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded bg-paper-card hover:bg-paper-border border border-paper-border text-ink-dark transition-all shrink-0 flex items-center gap-1.5 font-bold"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emeraldSeal" />
                    <span className="text-emeraldSeal">Copié</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copier</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-paper-bg border border-paper-border hover:border-blueprint text-ink-dark hover:bg-paper-card transition-all flex items-center justify-center gap-2 font-bold"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn / dean-leveneur</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-paper-bg border border-paper-border hover:border-blueprint text-ink-dark hover:bg-paper-card transition-all flex items-center justify-center gap-2 font-bold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub / dean-leveneur</span>
              </a>
            </div>

          </div>

          {/* CV Download Card */}
          <div className="p-6 rounded-xl bg-paper-card border border-paper-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-paper-bg border border-paper-border flex items-center justify-center text-copper">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-bold text-sm text-ink-dark">
                  Curriculum Vitae (PDF ATS Format)
                </div>
                <div className="font-mono text-xs text-ink-muted">
                  Dean LEVENEUR — INSA Lyon 3IF
                </div>
              </div>
            </div>

            <a
              href="/cv_dean_leveneur_ats.pdf"
              download
              className="w-full sm:w-auto px-4 py-2.5 rounded bg-copper text-white font-mono text-xs font-bold hover:bg-copper-hover transition-all text-center"
            >
              Télécharger le CV PDF
            </a>
          </div>

        </div>

        {/* Right Column: Direct Mail Form */}
        <div className="lg:col-span-6">
          <div className="p-6 rounded-xl bg-paper-card border border-paper-border space-y-4 shadow-sm font-mono text-xs">
            <div className="text-blueprint font-bold uppercase flex items-center gap-2">
              <Send className="w-4 h-4" />
              FORMULAIRE DE MESSAGE DIRECT
            </div>

            <form 
              action={`mailto:${profileData.email}`}
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-ink-muted mb-1">Votre Nom & Entreprise / Organisation</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Ex: Marc Lemaire (Tech Lead / RH)" 
                  className="w-full px-3 py-2 rounded bg-paper-bg border border-paper-border text-ink-dark focus:border-blueprint focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-ink-muted mb-1">Objet</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  placeholder="Proposition de sujet de stage INSA 3IF 2027" 
                  className="w-full px-3 py-2 rounded bg-paper-bg border border-paper-border text-ink-dark focus:border-blueprint focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-ink-muted mb-1">Détails de la mission</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="Bonjour Dean, nous serions intéressés par votre profil pour un stage de 12 semaines..." 
                  className="w-full px-3 py-2 rounded bg-paper-bg border border-paper-border text-ink-dark focus:border-blueprint focus:outline-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 rounded bg-blueprint text-white font-sans font-bold text-sm hover:bg-blueprint-hover transition-all shadow-sm flex items-center justify-center gap-2"
              >
                Envoyer le message ➔
              </button>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
}
