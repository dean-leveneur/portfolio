import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Terminal, Menu, X, FileText, Check, Award } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinkClass = ({ isActive }) => 
    `font-sans text-xs uppercase tracking-wider font-semibold transition-all border-b-2 py-1 ${
      isActive 
        ? 'border-blueprint text-blueprint font-bold' 
        : 'border-transparent text-ink-muted hover:text-ink-dark'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-paper-bg/95 backdrop-blur-sm border-b border-paper-border py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Editorial Stamp */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-paper-card border border-paper-border flex items-center justify-center font-mono font-bold text-blueprint text-sm shadow-sm group-hover:border-blueprint transition-colors">
            DL
          </div>
          <div>
            <div className="font-display font-bold text-lg text-ink-dark group-hover:text-blueprint transition-colors flex items-center gap-2">
              Dean LEVENEUR
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded stamp-badge text-blueprint font-bold uppercase">
                INSA 3IF
              </span>
            </div>
            <div className="font-mono text-[11px] text-ink-muted flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emeraldSeal"></span>
              CARNET D'INGÉNIERIE • STAGE 2027
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs">
          <NavLink to="/" className={navLinkClass} end>
            01. Accueil
          </NavLink>
          <NavLink to="/projets" className={navLinkClass}>
            02. Projets Phares
          </NavLink>
          <NavLink to="/a-propos" className={navLinkClass}>
            03. À Propos & Cursus
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            04. Contact & Stage
          </NavLink>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 font-mono text-xs">
          <button 
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded bg-paper-card border border-paper-border hover:border-blueprint text-ink-muted hover:text-ink-dark transition-all flex items-center gap-1.5"
            title="Copier l'e-mail"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emeraldSeal" />
                <span className="text-emeraldSeal font-bold">Email Copié !</span>
              </>
            ) : (
              <>
                <span className="text-blueprint font-semibold">email:</span> {profileData.email}
              </>
            )}
          </button>

          <Link 
            to="/contact" 
            className="px-4 py-1.5 rounded bg-blueprint text-white font-sans font-bold text-xs hover:bg-blueprint-hover transition-all shadow-sm flex items-center gap-2"
          >
            Proposer un Stage
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded border border-paper-border bg-paper-card text-ink-dark"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper-card border-b border-paper-border px-4 py-6 space-y-4 font-mono text-sm">
          <NavLink 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ink-dark py-2 border-b border-paper-border/60"
            end
          >
            01. Accueil
          </NavLink>
          <NavLink 
            to="/projets" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ink-dark py-2 border-b border-paper-border/60"
          >
            02. Tous les Projets
          </NavLink>
          <NavLink 
            to="/a-propos" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ink-dark py-2 border-b border-paper-border/60"
          >
            03. À Propos & Cursus INSA 3IF
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-blueprint font-bold py-2"
          >
            04. Contact & Proposition de Stage
          </NavLink>
        </div>
      )}
    </header>
  );
}
