import React, { useState, useEffect } from 'react';
import { Terminal, Download, Menu, X, Check, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-tech-darkest/90 backdrop-blur-md border-b border-tech-border py-3 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Telemetry */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-tech-card border border-tech-border group-hover:border-tech-cyan flex items-center justify-center transition-colors">
            <Terminal className="w-5 h-5 text-tech-cyan" />
          </div>
          <div>
            <div className="font-display font-bold text-lg text-tech-light group-hover:text-tech-cyan transition-colors flex items-center gap-2">
              Dean LEVENEUR
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-tech-cyan/10 text-tech-cyan border border-tech-cyan/20">
                INSA 3IF
              </span>
            </div>
            <div className="font-mono text-xs text-tech-muted flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tech-emerald animate-pulse"></span>
              STAGE 2027 • LYON / LA RÉUNION
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
          <a href="#projets" className="text-tech-muted hover:text-tech-cyan transition-colors">
            <span className="text-tech-cyan mr-1">01.</span>Projets
          </a>
          <a href="#demo-interactive" className="text-tech-muted hover:text-tech-cyan transition-colors">
            <span className="text-tech-cyan mr-1">02.</span>Démos Live
          </a>
          <a href="#competences" className="text-tech-muted hover:text-tech-cyan transition-colors">
            <span className="text-tech-cyan mr-1">03.</span>Compétences
          </a>
          <a href="#parcours" className="text-tech-muted hover:text-tech-cyan transition-colors">
            <span className="text-tech-cyan mr-1">04.</span>Parcours
          </a>
          <a href="#contact" className="text-tech-muted hover:text-tech-cyan transition-colors">
            <span className="text-tech-cyan mr-1">05.</span>Contact
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button 
            onClick={handleCopyEmail}
            className="font-mono text-xs px-3 py-2 rounded border border-tech-border hover:border-tech-cyan/50 bg-tech-card hover:bg-tech-cardHover text-tech-muted hover:text-tech-light transition-all flex items-center gap-1.5"
            title="Copier l'e-mail"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-tech-emerald" />
                <span className="text-tech-emerald">Copié !</span>
              </>
            ) : (
              <>
                <span className="text-tech-cyan">email:</span> {profileData.email}
              </>
            )}
          </button>

          <a 
            href="#contact" 
            className="font-mono text-xs px-4 py-2 rounded bg-tech-cyan/10 hover:bg-tech-cyan/20 border border-tech-cyan/40 text-tech-cyan font-semibold transition-all shadow-[0_0_15px_rgba(0,229,255,0.15)] flex items-center gap-2"
          >
            Discuter du Stage
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded border border-tech-border bg-tech-card text-tech-muted hover:text-tech-light"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-tech-dark border-b border-tech-border px-4 py-6 space-y-4 font-mono text-sm">
          <a 
            href="#projets" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-tech-muted hover:text-tech-cyan py-2 border-b border-tech-border/40"
          >
            01. Projets Phares
          </a>
          <a 
            href="#demo-interactive" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-tech-muted hover:text-tech-cyan py-2 border-b border-tech-border/40"
          >
            02. Démonstrateurs Live
          </a>
          <a 
            href="#competences" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-tech-muted hover:text-tech-cyan py-2 border-b border-tech-border/40"
          >
            03. Compétences Techniques
          </a>
          <a 
            href="#parcours" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-tech-muted hover:text-tech-cyan py-2 border-b border-tech-border/40"
          >
            04. Cursus & Expérience
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-tech-cyan font-semibold py-2"
          >
            05. Me contacter / Offre de Stage
          </a>
        </div>
      )}
    </header>
  );
}
