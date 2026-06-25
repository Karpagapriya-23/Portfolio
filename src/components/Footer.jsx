import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-200/20 dark:border-gray-800/30 bg-white/30 dark:bg-black/30 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2 font-display font-bold text-lg text-gray-900 dark:text-white">
          <span className="p-1 rounded bg-violet-600 text-white">
            <Terminal className="w-3.5 h-3.5" />
          </span>
          <span>Karpagapriya K</span>
        </div>

        {/* Statement */}
        <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm text-center font-medium max-w-md leading-relaxed italic">
          "Building innovative software solutions with passion and continuous learning."
        </p>

        {/* Copyright */}
        <div className="text-xs text-gray-400 dark:text-gray-600 font-mono">
          &copy; {currentYear} Karpagapriya. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
