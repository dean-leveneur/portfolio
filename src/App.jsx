import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import CaseStudyEscablind from './pages/CaseStudyEscablind';
import CaseStudyMapmynet from './pages/CaseStudyMapmynet';
import CaseStudyDoublePendule from './pages/CaseStudyDoublePendule';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top component on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper-bg text-ink-dark font-serif flex flex-col justify-between">
      <ScrollToTop />
      
      <div>
        {/* Sticky Blueprint Header */}
        <Navbar />

        {/* Main Route Views */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/projets/escablind" element={<CaseStudyEscablind />} />
            <Route path="/projets/mapmynet" element={<CaseStudyMapmynet />} />
            <Route path="/projets/double-pendule" element={<CaseStudyDoublePendule />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      {/* Persistent Technical Lab Footer */}
      <Footer />

    </div>
  );
}
