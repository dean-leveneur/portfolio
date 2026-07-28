import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import RoutingSimWidget from './components/RoutingSimWidget';
import GradeCalcWidget from './components/GradeCalcWidget';
import TechnicalSkills from './components/TechnicalSkills';
import Timeline from './components/Timeline';
import StageBanner from './components/StageBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-tech-darkest text-tech-light font-body">
      
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About & Engineering Philosophy */}
      <AboutSection />

      {/* Core Engineering Projects (Detailed Case Studies) */}
      <ProjectsSection />

      {/* Interactive Live Demonstrators Section */}
      <section id="demo-interactive" className="py-20 bg-tech-dark border-b border-tech-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-tech-border/60">
            <div>
              <div className="font-mono text-xs text-tech-cyan mb-2">02.1 DÉMONSTRATEURS INTERACTIFS</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-tech-light">
                Expérimentez le Code en Direct
              </h2>
            </div>
            <p className="text-tech-muted text-sm max-w-md mt-4 md:mt-0 font-mono">
              // Testez directement les moteurs de calcul et les algorithmes développés.
            </p>
          </div>

          {/* Widget 1: Network Routing & Chaos Simulator */}
          <RoutingSimWidget />

          {/* Widget 2: INSA 3IF Grade & ECTS Calculator */}
          <GradeCalcWidget />

        </div>
      </section>

      {/* Technical Skills Matrix */}
      <TechnicalSkills />

      {/* Experience & Education Timeline */}
      <Timeline />

      {/* Internship Focus Campaign Banner */}
      <StageBanner />

      {/* Contact Section */}
      <ContactSection />

      {/* Technical Footer */}
      <Footer />

    </div>
  );
}
