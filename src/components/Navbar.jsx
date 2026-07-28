import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) => 
    `text-sm font-medium transition-colors ${
      isActive 
        ? 'text-minimal-dark font-bold border-b border-minimal-dark pb-0.5' 
        : 'text-minimal-muted hover:text-minimal-dark'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-minimal-bg/90 backdrop-blur-md border-b border-minimal-border py-5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Minimal Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-minimal-dark text-white font-bold text-xs flex items-center justify-center font-mono">
            DL
          </div>
          <div>
            <div className="font-bold text-base text-minimal-dark group-hover:text-minimal-muted transition-colors">
              Dean Leveneur
            </div>
            <div className="text-[11px] font-mono text-minimal-muted">
              INSA Lyon 3IF
            </div>
          </div>
        </Link>

        {/* Minimal Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={navLinkClass} end>
            Accueil
          </NavLink>
          <NavLink to="/projets" className={navLinkClass}>
            Projets
          </NavLink>
          <NavLink to="/a-propos" className={navLinkClass}>
            À propos
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link 
            to="/contact" 
            className="px-4 py-2 rounded bg-minimal-dark text-white font-medium text-xs hover:bg-black transition-smooth flex items-center gap-1"
          >
            <span>Stage 2027</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded text-minimal-muted hover:text-minimal-dark"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-minimal-card border-b border-minimal-border px-6 py-6 space-y-4 text-sm font-medium">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-minimal-dark" end>
            Accueil
          </NavLink>
          <NavLink to="/projets" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-minimal-dark">
            Projets
          </NavLink>
          <NavLink to="/a-propos" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-minimal-dark">
            À propos
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 font-bold text-minimal-dark">
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
