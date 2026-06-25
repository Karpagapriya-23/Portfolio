import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Layers, Braces, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'Java', level: '90%', desc: 'OOP, Collections, Multi-threading, File handling' },
        { name: 'Python', level: '75%', desc: 'Scripting, Basics, Data parsing' },
        { name: 'C', level: '70%', desc: 'Basic logic, Memory basics, Structures' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'HTML5', level: '85%', desc: 'Semantic layout, DOM structure' },
        { name: 'CSS3', level: '80%', desc: 'Mastering CSS, Flexbox, Grid, Responsive' },
        { name: 'JavaScript', level: '75%', desc: 'ES6+, DOM manipulation, Event handling' }
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: Cpu,
      skills: [
        { name: 'Spring Boot', level: '80%', desc: 'MVC, Security, Rest APIs, Data JPA' },
        { name: 'VS Code', level: '85%', desc: 'Primary IDE, Extensions, Git integration' },
        { name: 'Figma / Canva', level: '75%', desc: 'UI/UX prototyping, Visual design' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-dot-pattern">
      <div className="absolute top-[20%] left-[-5%] w-[25vw] h-[25vw] rounded-full bg-blue-500/5 dark:bg-blue-500/10 glow-orb pointer-events-none" />

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
            Technical Expertise
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
            A breakdown of my software engineering capabilities and the systems I work with.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                className="p-8 rounded-3xl glass-panel relative group shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent line on hover */}
                <span className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 shadow-inner">
                      <CatIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        {/* Name and Level */}
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/10">
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress Bar Track */}
                        <div className="h-2 w-full bg-gray-200/50 dark:bg-gray-800/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-violet-600 to-blue-500 rounded-full"
                          />
                        </div>

                        {/* Description */}
                        <p className="text-[11px] text-gray-500 dark:text-gray-500 leading-snug">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating graphic footer for visual richness */}
                <div className="mt-8 pt-4 border-t border-gray-150 dark:border-gray-800/30 flex justify-between items-center text-xs text-gray-400 dark:text-gray-600">
                  <span className="font-mono">ENV: DEV</span>
                  <span className="font-mono">STATUS: ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
