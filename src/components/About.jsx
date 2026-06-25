import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Layers, Code, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    {
      id: 1,
      label: 'CGPA',
      value: '8.97',
      sub: 'Out of 10.0 (Up to 5th Sem)',
      icon: Award,
      color: 'from-violet-600 to-fuchsia-600',
    },
    {
      id: 2,
      label: 'Projects Completed',
      value: '3+',
      sub: 'Full Stack & Embedded',
      icon: Layers,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 3,
      label: 'Languages',
      value: '3',
      sub: 'Java, Python, C',
      icon: Code,
      color: 'from-emerald-600 to-teal-600',
    },
    {
      id: 4,
      label: 'Certifications',
      value: '2',
      sub: 'Java & CSS Design',
      icon: BookOpen,
      color: 'from-amber-600 to-orange-600',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-violet-600/5 dark:bg-violet-600/10 glow-orb pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-violet-600 rounded-full mt-3 mx-auto md:mx-0"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            <h3 className="font-display font-bold text-2xl text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <Zap className="w-5 h-5 text-violet-500" />
              Bridging Engineering & Code
            </h3>
            <p>
              I am currently pursuing a Bachelor of Engineering in <span className="text-violet-600 dark:text-violet-400 font-semibold">Electrical and Electronics Engineering</span> at Shree Venkateshwara Hi-Tech Engineering College (Batch 2023 – 2027). Throughout my academic journey, I discovered a profound interest in software development.
            </p>
            <p>
              By leveraging my analytical engineering background, I specialize in structuring clean database schemas, orchestrating secure backend logic with <span className="text-violet-600 dark:text-violet-400 font-semibold">Java & Spring Boot</span>, and crafting responsive user interfaces.
            </p>
            <p>
              I thrive on problem-solving, collaborative engineering challenges, and constantly adapting to learn cutting-edge tools. I'm excited about opportunities to collaborate as a Software Developer intern or junior engineer on impactful, large-scale systems.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-2xl glass-panel relative group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Hover Accent Background Gradient */}
                  <span className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Floating Icon */}
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white w-fit mb-4 shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Value */}
                  <div className="font-display font-black text-4xl text-gray-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="font-display font-semibold text-base text-gray-800 dark:text-gray-200 mt-1">
                    {stat.label}
                  </div>

                  {/* Sub */}
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1 font-medium">
                    {stat.sub}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
