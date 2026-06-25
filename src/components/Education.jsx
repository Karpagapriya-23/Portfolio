import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Calendar, Award } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      id: 1,
      institution: 'Shree Venkateshwara Hi-Tech Engineering College',
      degree: 'Bachelor of Engineering (BE) - Electrical and Electronics Engineering',
      duration: '2023 – 2027',
      grade: 'CGPA: 8.97 / 10.0',
      gradeSub: '(Cumulative grade point average up to 5th Semester)',
      description: 'Acquiring solid analytical fundamentals in electrical circuits, control systems design, power electronics, and industrial microprocessors, alongside coding coursework.'
    },
    {
      id: 2,
      institution: 'Gandhi Kalvi Nilayam Higher Secondary School',
      degree: 'HSC (Higher Secondary Certificate)',
      duration: '2022 – 2023',
      grade: 'Percentage: 71%',
      gradeSub: 'Focus in Mathematics, Physics, Chemistry, and Computer Science',
      description: 'Strengthened early mathematical, computing logic, and physics problem-solving skills.'
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 dark:bg-blue-500/10 glow-orb pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white"
          >
            Academic Foundation
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-violet-600 rounded-full mt-3 mx-auto"
          />
        </div>

        {/* Education Blocks */}
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl glass-panel relative group shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50"
            >
              {/* Hover Glow */}
              <span className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                {/* Institution & Degree */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 mt-1 shadow-inner">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl md:text-2xl text-gray-900 dark:text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="text-gray-700 dark:text-gray-300 font-semibold text-sm md:text-base mt-2 flex items-center gap-1.5">
                      <Landmark className="w-4 h-4 text-violet-500" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Date & Grade Badges */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-2 shrink-0">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200/40 dark:border-gray-800/40 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-violet-500" />
                    <span>{edu.duration}</span>
                  </span>
                  
                  <span className="px-3.5 py-1 rounded-full text-xs font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.grade}</span>
                  </span>
                </div>

              </div>

              {/* Detail Descriptions */}
              <div className="mt-6 pl-0 md:pl-14 space-y-2 border-t border-gray-150 dark:border-gray-800/30 pt-4">
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium italic">
                  {edu.gradeSub}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
