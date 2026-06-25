import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Flame, GraduationCap, Globe2, Languages } from 'lucide-react';

export default function SoftSkills() {
  const softSkills = [
    {
      id: 1,
      title: 'Team Work',
      desc: 'Collaborative mindset. Value peer perspectives, coordinate roles, and align outputs to collective milestones.',
      icon: Users,
      color: 'from-violet-500/10 to-indigo-500/10 text-violet-600 dark:text-violet-400',
    },
    {
      id: 2,
      title: 'Time Management',
      desc: 'Punctual planner. Efficiently schedule tasks, prioritize bottlenecks, and hit deliverables ahead of deadlines.',
      icon: Clock,
      color: 'from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400',
    },
    {
      id: 3,
      title: 'Adaptability',
      desc: 'Flexibly shift across tech stacks and methodologies. Welcome constructive reviews and system refinements.',
      icon: Flame,
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 4,
      title: 'Quick Learner',
      desc: 'Intense technical curiosity. Rapidly digest programming languages, abstract patterns, and core systems.',
      icon: GraduationCap,
      color: 'from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400',
    },
  ];

  const languages = [
    { name: 'Tamil', type: 'Native / Bilingual', level: '100%' },
    { name: 'English', type: 'Professional Working', level: '85%' },
    { name: 'Telugu', type: 'Conversational', level: '60%' },
  ];

  return (
    <section id="softskills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-[30%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 dark:bg-blue-500/10 glow-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white"
          >
            Interpersonal & Languages
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-violet-600 rounded-full mt-3 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Soft Skills Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="p-6 rounded-3xl glass-panel relative group shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50"
                >
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${skill.color} w-fit mb-4`}>
                    <SkillIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    {skill.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Languages Segment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 p-8 rounded-3xl glass-panel relative shadow-lg border border-gray-200/50 dark:border-gray-800/50"
          >
            {/* Background Accent */}
            <span className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />

            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 shadow-inner">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-gray-900 dark:text-white flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-violet-500" />
                <span>Languages Known</span>
              </h3>
            </div>

            <div className="space-y-6">
              {languages.map((lang, lIdx) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200 text-sm block">
                        {lang.name}
                      </span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                        {lang.type}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-violet-600 dark:text-violet-400">
                      {lang.level}
                    </span>
                  </div>
                  
                  {/* Miniature progress track */}
                  <div className="h-1.5 w-full bg-gray-200/50 dark:bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: lIdx * 0.15 }}
                      className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
