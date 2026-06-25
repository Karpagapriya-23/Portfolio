import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Terminal, Compass } from 'lucide-react';

export default function Certifications() {
  const certificationsList = [
    {
      id: 1,
      title: 'Java Course Completion Certificate',
      issuer: 'Bharat Sevak Samaj (BSS)',
      icon: Terminal,
      iconColor: 'text-orange-500 bg-orange-500/10',
      description: 'Comprehensive core programming credentials validating object-oriented logic architecture, data structures, and foundational frameworks.',
      topics: [
        'Core Java Fundamentals & Syntax',
        'Object-Oriented Programming (OOP) Concepts',
        'Exception Handling & Robust Code Design',
        'Java Collections Framework',
        'Framework Architecture Basics'
      ]
    },
    {
      id: 2,
      title: 'Mastering CSS Design Class',
      issuer: 'Professional Design Course',
      icon: Compass,
      iconColor: 'text-sky-500 bg-sky-500/10',
      description: 'Visual layout design credentials covering advanced positioning systems, grid architectures, animations, responsive design systems, and device optimization.',
      topics: [
        'Advanced CSS Grid & Flexbox Architectures',
        'Responsive Web Design & Media Queries',
        'Keyframes, Animations & UI Transitions',
        'Modern Design Systems & Utility Frameworks'
      ]
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 relative bg-dot-pattern">
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-violet-600/5 dark:bg-violet-600/10 glow-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white"
          >
            Certifications
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-violet-600 rounded-full mt-3 mx-auto"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsList.map((cert, index) => {
            const CertIcon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 rounded-3xl glass-panel relative group shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between border border-gray-200/50 dark:border-gray-800/50 overflow-hidden"
              >
                {/* Shiny diagonal metallic reflection highlight on hover */}
                <span className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out pointer-events-none" />

                <div>
                  {/* Header info */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex gap-3.5 items-center">
                      <div className={`p-3 rounded-2xl ${cert.iconColor} shadow-inner`}>
                        <CertIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mt-1">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    
                    <span className="p-2 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                    {cert.description}
                  </p>

                  {/* Topics Covered */}
                  <div className="space-y-2 border-t border-gray-150 dark:border-gray-800/30 pt-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600">
                      Curriculum Competencies
                    </div>
                    <ul className="space-y-1.5 pl-0">
                      {cert.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between text-xs text-gray-400 dark:text-gray-600 border-t border-gray-150 dark:border-gray-800/30">
                  <span className="font-mono">ID: BSS-JVM-CS0{cert.id}</span>
                  <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                    <Award className="w-3.5 h-3.5" /> Certified
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
