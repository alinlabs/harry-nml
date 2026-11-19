import React from 'react';
import { motion } from 'framer-motion';
import DmsLogo from '../../components/DmsLogo';
import { useSlideData } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 w-full min-h-[65vh] px-4 py-4 max-w-5xl mx-auto font-sans text-slate-800 dark:text-slate-100 select-text">
      {/* Brand Monogram */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center relative"
      >
        <DmsLogo size="lg" showText={false} />
      </motion.div>

      {/* Company & Presentation Badge */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.45 }}
        className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold tracking-wide text-slate-700 dark:text-slate-200"
      >
        <span className="text-blue-600 dark:text-cyan-400 uppercase">{slideData.company}</span>
        <span className="text-slate-300 dark:text-slate-600">•</span>
        <span>{slideData.presentationTitle}</span>
      </motion.div>

      {/* Main Headline (Same as Executive Summary) */}
      <motion.h1
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.55 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-tight select-none"
      >
        <span className="block text-slate-900 dark:text-white">
          {slideData.titleLine1}
        </span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 pt-1">
          {slideData.titleLine2}
        </span>
      </motion.h1>

      {/* Single Optimistic Slogan Sentence */}
      <motion.p
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.32, duration: 0.5 }}
        className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-semibold"
      >
        {slideData.optimisticSlogan}
      </motion.p>

      {/* Presenter Attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.45 }}
        className="pt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium"
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
