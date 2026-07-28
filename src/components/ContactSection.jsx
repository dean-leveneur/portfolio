import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, Check, Copy, Send, MapPin, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-tech-dark border-b border-tech-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-tech-border/60">
          <div>
            <div className="font-mono text-xs text-tech-cyan mb-2">05. PRENDRE CONTACT</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-tech-light">
              Discuter d'une Opportunité de Stage
            </h2>
          </div>
          <p className="text-tech-muted text-sm max-w-md mt-4 md:mt-0 font-mono">
            // Réponse garantie sous 24-48h pour les offres de stage Lyon / La Réunion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & CV Download */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 rounded-xl bg-tech-card border border-tech-border space-y-4">
              <h3 className="font-display font-bold text-xl text-tech-light flex items-center gap-2">
                <Terminal className="w-5 h-5 text-tech-cyan" />
                Dean LEVENEUR
              </h3>
              
              <p className="text-tech-muted text-xs leading-relaxed">
                N'hésitez pas à me contacter directement par e-mail ou sur LinkedIn pour toute question concernant mon profil, mes projets ou une proposition de sujet de stage.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-lg bg-tech-darkest border border-tech-border/80 flex items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-tech-light truncate">
                  <Mail className="w-4 h-4 text-tech-cyan shrink-0" />
                  <span className="truncate">{profileData.email}</span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-tech-card hover:bg-tech-cardHover border border-tech-border hover:border-tech-cyan text-tech-muted hover:text-tech-light transition-all shrink-0 flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-tech-emerald" />
                      <span className="text-tech-emerald font-bold">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-tech-darkest border border-tech-border hover:border-tech-cyan text-tech-light font-mono text-xs hover:bg-tech-card transition-all flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>Profil LinkedIn</span>
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-tech-darkest border border-tech-border hover:border-tech-cyan text-tech-light font-mono text-xs hover:bg-tech-card transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4 text-tech-light" />
                  <span>GitHub (@dean-leveneur)</span>
                </a>
              </div>

            </div>

            {/* CV Download Card */}
            <div className="p-6 rounded-xl bg-tech-card border border-tech-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-tech-amber/10 border border-tech-amber/30 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-tech-amber" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-tech-light">
                    Curriculum Vitae ATS Format (PDF)
                  </div>
                  <div className="font-mono text-xs text-tech-muted">
                    Dean LEVENEUR — INSA Lyon 3IF
                  </div>
                </div>
              </div>

              <a
                href="./CV_Dean_LEVENEUR.pdf"
                download="CV_Dean_LEVENEUR.pdf"
                className="w-full sm:w-auto px-4 py-2 rounded bg-tech-amber/10 hover:bg-tech-amber/20 border border-tech-amber/40 text-tech-amber font-mono text-xs font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                Télécharger le CV PDF
              </a>
            </div>

          </div>

          {/* Right Column: Direct Mailto Form Card */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-xl bg-tech-card border border-tech-border space-y-4">
              <div className="font-mono text-xs text-tech-cyan font-bold flex items-center gap-2">
                <Send className="w-4 h-4" />
                ENVOYER UN MESSAGE DIRECT
              </div>

              <form 
                action={`mailto:${profileData.email}`}
                method="post"
                encType="text/plain"
                className="space-y-4 font-mono text-xs"
              >
                <div>
                  <label className="block text-tech-muted mb-1">Votre Nom & Entreprise</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Ex: Jean Dupont (Responsable RH / Tech Lead)" 
                    className="w-full px-3 py-2 rounded bg-tech-darkest border border-tech-border text-tech-light focus:border-tech-cyan focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-tech-muted mb-1">Sujet du Message</label>
                  <input 
                    type="text" 
                    name="subject" 
                    required 
                    placeholder="Proposition de stage ingénieur 3IF 2027" 
                    className="w-full px-3 py-2 rounded bg-tech-darkest border border-tech-border text-tech-light focus:border-tech-cyan focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-tech-muted mb-1">Détails de la mission / Message</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    required 
                    placeholder="Bonjour Dean, nous serions intéressés par votre profil pour un stage au sein de notre équipe..." 
                    className="w-full px-3 py-2 rounded bg-tech-darkest border border-tech-border text-tech-light focus:border-tech-cyan focus:outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 rounded-lg bg-tech-cyan text-tech-darkest font-display font-bold text-sm hover:bg-white transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] flex items-center justify-center gap-2"
                >
                  Envoyer l'E-mail
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
