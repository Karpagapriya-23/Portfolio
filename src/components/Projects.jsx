import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Car, SunDim, ExternalLink, Github, Layers } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Spring Boot Login Page',
      category: 'Backend Security',
      icon: ShieldAlert,
      iconColor: 'text-emerald-500 bg-emerald-500/10',
      description: 'A fully secure user authentication and authorization module built using Spring Boot and Spring Security. Implements best-practice credentials protection and authorization routing.',
      tags: ['Spring Boot', 'Spring Security', 'BCrypt', 'SQL Database', 'RBAC'],
      features: [
        'Role-Based Access Control (Admin / User permissions)',
        'BCrypt password encryption hashing for database storage',
        'Session security management and custom authorization filters'
      ],
      github: 'https://github.com/Karpagapriya-23/Spring-Boot-Login-Page',
      demo: '#'
    },
    {
      id: 2,
      title: 'Uber Management System',
      category: 'Software Engineering',
      icon: Car,
      iconColor: 'text-blue-500 bg-blue-500/10',
      description: 'A Java-based rideshare infrastructure simulation modeling real-world trip tracking, driver availability matching, and transactional fare calculations.',
      tags: ['Core Java', 'OOPs', 'MySQL Connectivity', 'Driver Allocation'],
      features: [
        'Dynamic driver allocation based on coordinate calculations',
        'Trip status flow tracking (Requested, Ongoing, Completed)',
        'Simulated payment management system integration'
      ],
      github: 'https://github.com/Karpagapriya-23/Uber-Management-System',
      demo: '#'
    },
    {
      id: 3,
      title: 'Next-Gen Solar Panel Cleaning System',
      category: 'Automation & Hardware',
      icon: SunDim,
      iconColor: 'text-amber-500 bg-amber-500/10',
      description: 'An automated industrial cleaning controller design optimized for solar panel dust detection, cleaning fluid spray, and automated motor wiping to restore energy capture efficiency.',
      tags: ['Automation', 'Renewable Energy', 'Control Logic', 'Energy Efficiency'],
      features: [
        'Automated sensors for dirt/dust accumulation alerts',
        'Basic control logic designed to optimize electricity consumption',
        'Substantially reduces human effort and cleaning down-time'
      ],
      github: 'https://github.com/Karpagapriya-23',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-violet-600/5 dark:bg-violet-600/10 glow-orb pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-600/5 dark:bg-blue-600/10 glow-orb pointer-events-none" />

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
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-violet-600 rounded-full mt-3 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base"
          >
            Exploring software architectures, databases, and control logic systems.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl glass-panel relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full border border-gray-200/50 dark:border-gray-800/50"
              >
                {/* Visual Glow Gradient Accent */}
                <span className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card Top / Details */}
                <div className="p-8">
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                      {project.category}
                    </span>
                    <div className={`p-3 rounded-2xl ${project.iconColor} shadow-inner`}>
                      <ProjectIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600 flex items-center gap-1">
                      <Layers className="w-3 h-3" /> Key Implementations
                    </div>
                    <ul className="list-none space-y-1.5 pl-0">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-1.5">
                          <span className="text-violet-500 mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom / Tags & Buttons */}
                <div className="px-8 pb-8 pt-4 border-t border-gray-150 dark:border-gray-800/30">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-900/60 text-gray-600 dark:text-gray-400 border border-gray-200/40 dark:border-gray-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl border border-gray-250 dark:border-gray-800 bg-white/40 dark:bg-black/40 hover:bg-white/80 dark:hover:bg-black/80 hover:border-violet-500 dark:hover:border-violet-500 text-gray-700 dark:text-gray-300 font-medium text-xs transition-all duration-300 flex items-center justify-center gap-1.5 hover:scale-[1.02]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>

                    <a
                      href={project.demo}
                      onClick={(e) => {
                        if (project.demo === '#') {
                          e.preventDefault();
                          alert('Project simulation/demo placeholder. Feel free to replace it with real links!');
                        }
                      }}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs transition-all duration-300 flex items-center justify-center gap-1.5 hover:scale-[1.02] shadow-[0_0_12px_rgba(139,92,246,0.15)] hover:shadow-[0_0_18px_rgba(139,92,246,0.3)]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
