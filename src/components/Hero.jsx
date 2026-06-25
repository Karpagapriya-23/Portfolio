import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Download, Mail, ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const titles = [
    'Java Developer',
    'Spring Boot Enthusiast',
    'Software Engineer',
    'Problem Solver'
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && displayedText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? fullText.substring(0, displayedText.length - 1)
            : fullText.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const handleContactScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92svh] flex flex-col justify-center items-center px-6 pt-24 overflow-hidden bg-dot-pattern"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-violet-600/10 dark:bg-violet-600/15 glow-orb pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-blue-500/10 dark:bg-blue-500/15 glow-orb pointer-events-none translate-x-1/2 translate-y-1/2" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-6xl w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left px-4">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-8 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Available for Internships & Placement
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-gray-900 dark:text-white"
          >
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Karpagapriya K
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl md:text-3xl font-display font-medium text-gray-700 dark:text-gray-300 h-10 flex items-center justify-center lg:justify-start"
          >
            <span className="mr-2">Aspiring</span>
            <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent font-bold">
              {displayedText}
            </span>
            <span className="w-1 h-7 bg-violet-500 animate-pulse ml-0.5" />
          </motion.div>

          {/* Introduction Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-sans"
          >
            Electrical and Electronics Engineering student with a strong passion for Software Development and a solid foundation in Java. Driven to build real-world applications and engineer innovative, robust software solutions that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full sm:w-auto"
          >
            {/* Contact Button */}
            <button
              onClick={handleContactScroll}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download="Karpagapriya_Resume.pdf"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-black/40 hover:bg-white/80 dark:hover:bg-black/80 hover:border-violet-500 dark:hover:border-violet-500 text-gray-800 dark:text-gray-200 font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 text-violet-500" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-4 text-gray-500 dark:text-gray-400 justify-center lg:justify-start w-full"
          >
            <a 
              href="https://github.com/Karpagapriya-23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-200/50 dark:border-gray-800/50 bg-white/30 dark:bg-black/30 hover:border-violet-500 hover:text-violet-500 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/karpagapriya-k-39572b323" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-200/50 dark:border-gray-800/50 bg-white/30 dark:bg-black/30 hover:border-violet-500 hover:text-violet-500 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Picture */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-tr from-violet-600 via-indigo-500 to-blue-500 shadow-[0_20px_50px_rgba(139,92,246,0.15)] hover:shadow-[0_20px_60px_rgba(139,92,246,0.3)] transition-all duration-500 group"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-950 p-1">
              <img 
                src={profileImg} 
                alt="Karpagapriya K" 
                className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Tech Icons in Background */}
      <div className="absolute inset-0 pointer-events-none hidden md:block select-none overflow-hidden">
        {/* Java Floating Badge */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[30%] left-[10%] px-4 py-2 rounded-2xl glass-panel text-sm font-semibold flex items-center gap-2 shadow-lg"
        >
          <span className="text-xl">☕</span>
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Java</span>
        </motion.div>

        {/* Spring Boot Floating Badge */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute top-[45%] right-[8%] px-4 py-2 rounded-2xl glass-panel text-sm font-semibold flex items-center gap-2 shadow-lg"
        >
          <span className="text-xl">🍃</span>
          <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Spring Boot</span>
        </motion.div>

        {/* Python Floating Badge */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[25%] left-[15%] px-4 py-2 rounded-2xl glass-panel text-sm font-semibold flex items-center gap-2 shadow-lg"
        >
          <span className="text-xl">🐍</span>
          <span className="bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">Python</span>
        </motion.div>

        {/* SQL / Automation Floating Badge */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-[35%] right-[15%] px-4 py-2 rounded-2xl glass-panel text-sm font-semibold flex items-center gap-2 shadow-lg"
        >
          <span className="text-xl">⚡</span>
          <span className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">EEE & Control</span>
        </motion.div>
      </div>

      {/* Down arrow link indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-6 flex flex-col items-center text-gray-400 dark:text-gray-600 text-xs font-semibold cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="mb-1 uppercase tracking-widest scale-90">Explore</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
