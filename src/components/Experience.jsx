import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    {
      title: 'Motor Coil Rewinding',
      desc: 'Executed electromagnetic motor coil rewinding, ensuring precise wire gauge counts, insulation barriers, and test validations for operational conductivity.'
    },
    {
      title: 'Transformer Maintenance',
      desc: 'Assisted in standard transformer checkups, insulating fluid diagnostics, core cleanings, and safety threshold testing under senior oversight.'
    },
    {
      title: 'Fault Diagnosis',
      desc: 'Utilized digital multimeters, insulation testers (Megger), and diagnostic schematics to isolate open-circuits and leakage currents in industrial modules.'
    },
    {
      title: 'Electrical Repair Systems',
      desc: 'Collaborated on repairing industrial control panels, contactors, relays, and emergency power shutoff systems.'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative bg-dot-pattern">
      <div className="absolute top-[40%] right-[-5%] w-[25vw] h-[25vw] rounded-full bg-violet-600/5 dark:bg-violet-600/10 glow-orb pointer-events-none" />

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
            Practical Experience
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
            Bridging conceptual engineering with hands-on industrial systems.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-32 pl-8 md:pl-12 py-4 space-y-12">
          
          {/* Timeline Dot */}
          <div className="absolute -left-[13px] top-6 w-6 h-6 rounded-full bg-violet-600 border-4 border-white dark:border-[#030014] shadow-md flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>

          {/* Time stamp indicator on desktop (left of line) */}
          <div className="absolute left-[-160px] top-[18px] hidden md:block w-32 text-right">
            <span className="text-sm font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              July 2025
            </span>
            <div className="text-[10px] text-gray-400 dark:text-gray-600 font-mono mt-1">
              (1-Month Intern)
            </div>
          </div>

          {/* Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-3xl glass-panel relative group shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Hover visual accent */}
            <span className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Mobile-only Date */}
            <div className="md:hidden flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>July 2025</span>
            </div>

            {/* Title & Organization */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight">
                  Junior Engineer Intern
                </h3>
                <div className="text-gray-700 dark:text-gray-300 font-semibold text-base mt-1 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-violet-500" />
                  <span>Coral Engineering Works</span>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/10 w-fit">
                Industrial Internship
              </span>
            </div>

            {/* Responsibilities list */}
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600 flex items-center gap-1.5 border-b border-gray-150 dark:border-gray-800/30 pb-2">
                <Zap className="w-3.5 h-3.5 text-violet-500" /> Core Contributions & Learnings
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {responsibilities.map((resp, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0" />
                      <span>{resp.title}</span>
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pl-6">
                      {resp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
