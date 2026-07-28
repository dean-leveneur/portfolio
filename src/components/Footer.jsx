import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-minimal-border py-12 text-xs text-minimal-muted">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Dean Leveneur. INSA Lyon 3IF.
        </div>

        <div className="flex items-center gap-6 font-medium text-minimal-dark">
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href={`mailto:${profileData.email}`} className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
