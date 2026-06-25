import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Download, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection logic for active navigation section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // offset for nav height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-white/70 dark:bg-black/75 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-800/30' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group font-display font-bold text-xl tracking-tight text-gray-900 dark:text-white"
        >
          <span className="p-1.5 rounded-lg bg-violet-600 text-white group-hover:rotate-12 transition-transform duration-300">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Karpagapriya.K
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-gray-200/30 dark:bg-gray-800/20 border border-gray-200/20 dark:border-gray-800/10 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 focus:outline-none ${
                  isActive 
                    ? 'text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full z-[-1]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Resume Buttons (desktop) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/40 text-violet-600 dark:text-violet-400 text-sm font-medium transition-all duration-300 hover:bg-violet-500/10 hover:scale-[1.03]"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
            <span>View</span>
          </a>
          <a
            href="/resume.pdf"
            download="Karpagapriya_Resume.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-[1.03]"
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
          
          {/* Mobile hamburger menu trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-gray-200/50 dark:border-gray-800/50 bg-white/40 dark:bg-black/40 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden w-full bg-white/95 dark:bg-black/95 border-b border-gray-200 dark:border-gray-800 backdrop-blur-lg overflow-hidden absolute top-full left-0 shadow-xl"
          >
            <div className="flex flex-col gap-3 px-6 py-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-all ${
                      isActive 
                        ? 'bg-violet-600/10 text-violet-600 dark:text-violet-400 border-l-4 border-violet-600' 
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-violet-600' : 'bg-transparent'}`} />
                  </button>
                );
              })}

              {/* Resume buttons in mobile menu */}
              <div className="flex gap-2 mt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 border border-violet-500/30 font-medium transition-all hover:bg-violet-600/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>View</span>
                </a>
                <a
                  href="/resume.pdf"
                  download="Karpagapriya_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium transition-all hover:opacity-90"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
