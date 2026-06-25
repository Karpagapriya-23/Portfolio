import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen transition-colors duration-500 font-sans">
      {/* Premium custom mouse trailing cursor (desktop-only) */}
      <CustomCursor />

      {/* Glassmorphic navbar */}
      <Navbar />

      {/* Portfolio Main Content Flow */}
      <main className="w-full relative">
        <Hero />
        
        <About />
        
        <Skills />
        
        <Projects />
        
        <Experience />
        
        <Certifications />
        
        <Education />
        
        <SoftSkills />
        
        <Contact />
      </main>

      {/* Signature footer */}
      <Footer />
    </div>
  );
}
