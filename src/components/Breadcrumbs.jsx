import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-xs text-minimal-muted flex items-center gap-2 mb-8 font-medium">
      <Link to="/" className="hover:text-minimal-dark transition-colors">
        Accueil
      </Link>
      
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-minimal-subtle shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-minimal-dark transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-minimal-dark font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
