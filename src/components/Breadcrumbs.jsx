import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="font-mono text-xs text-ink-muted flex items-center gap-2 py-3 px-4 rounded bg-paper-card border border-paper-border mb-8 overflow-x-auto">
      <Link to="/" className="hover:text-blueprint transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>Accueil</span>
      </Link>
      
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-ink-subtle shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-blueprint transition-colors whitespace-nowrap">
              {item.label}
            </Link>
          ) : (
            <span className="text-blueprint font-bold whitespace-nowrap">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
