import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const pillarIcons = [Target, Users, TrendingUp];

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-5 md:space-y-6 w-full min-h-[65vh] px-4 py-2 max-w-6xl mx-auto">
      {/* Presentation Category & Company Badge */}
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold tracking-wide text-slate-700 dark:text-slate-200"
      >
        <span className="text-blue-600 dark:text-cyan-400 uppercase">{slideData.company}</span>
        <span className="text-slate-300 dark:text-slate-600">•</span>
        <span>{slideData.presentationTitle}</span>
      </motion.div>

      {/* Main Headline */}
      <div className="relative max-w-5xl">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-tight select-none"
        >
          <span className="block text-slate-900 dark:text-white">
            {slideData.titleLine1}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 pt-1">
            {slideData.titleLine3}
          </span>
        </motion.h1>
      </div>

      {/* Supporting Copy */}
      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.55 }}
        className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
      >
        {slideData.subtitle}
      </motion.p>

      {/* 3 Strategic Pillars */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.55 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 w-full max-w-5xl items-stretch"
      >
        {slideData.pillars.map((pillar, idx) => {
          const Icon = pillarIcons[idx] || Target;
          const isHighlight = idx === 1;

          return (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl bg-white/85 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm text-center flex flex-col items-center justify-start hover:border-blue-500/40 transition-all hover:scale-[1.01] w-full ${
                isHighlight
                  ? 'border-blue-500/40 shadow-blue-500/5 bg-gradient-to-b from-blue-50/40 via-white/85 to-white/95 dark:from-blue-950/25 dark:via-slate-900/70 dark:to-slate-900/85'
                  : ''
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 flex items-center justify-center mb-2.5 border border-blue-100 dark:border-blue-800/40 shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-blue-600 dark:text-cyan-400 mb-1 font-bold text-sm sm:text-base">
                {pillar.label}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </motion.div>


      {/* Presenter Footer Attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="pt-1 flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium"
      >
        <span className="font-bold text-slate-800 dark:text-slate-200">{slideData.presenter.name}</span>
        <span className="text-slate-300 dark:text-slate-600">•</span>
        <span>{slideData.presenter.role}</span>
        <span className="text-slate-300 dark:text-slate-600">•</span>
        <span className="font-semibold text-blue-600 dark:text-cyan-400">{slideData.presenter.company}</span>
      </motion.div>
    </div>
  );
};

export default Container;
