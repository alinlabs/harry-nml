import React, { useState } from 'react';
import {
  Megaphone,
  Tag,
  Store,
} from 'lucide-react';
import { useSlideData, CompetitorTabId } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<CompetitorTabId>('campaign');

  const getTabIcon = (id: CompetitorTabId) => {
    if (id === 'campaign') return Megaphone;
    if (id === 'pricing') return Tag;
    return Store;
  };

  const activePositioning =
    slideData.positioningByTab?.[activeTab] ?? slideData.proposedPositioning;

  return (
    <div className="w-full flex-1 flex flex-col justify-start py-1.5 max-w-7xl mx-auto px-2 font-sans text-slate-800 dark:text-slate-100 select-text">
      {/* Header Slide */}
      <div className="text-center mb-5 sm:mb-6">
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-1">
          {slideData.subtitle}
        </p>
      </div>

      {/* 3 Interactive Comparison Tabs */}
      <div className="flex flex-col items-center gap-2 mb-6 sm:mb-7">
        <div className="inline-flex flex-wrap justify-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1">
          {slideData.tabs.map((tab) => {
            const Icon = getTabIcon(tab.id);
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4-Column Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3.5 gap-y-14 mt-10 mb-5 items-stretch">
        {slideData.competitors.map((comp) => {
          const content = comp[activeTab];
          const isOurs = Boolean(comp.isOurPosition);

          return (
            <div
              key={comp.id}
              className={`relative pt-5 px-4 pb-5 rounded-2xl flex flex-col items-center text-center justify-start bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 ${
                isOurs
                  ? 'border-2 border-blue-600 dark:border-cyan-400 shadow-md shadow-blue-500/10'
                  : 'border border-slate-200 dark:border-slate-800 shadow-xs'
              }`}
            >
              {/* Floating Centered Brand Logo Above Card (no card wrapper for Nova Media Lab) */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-11 flex items-center justify-center pointer-events-none">
                {isOurs ? (
                  <>
                    <img
                      src="/logo-hitam.webp"
                      alt={comp.name}
                      className="h-10 w-auto object-contain block dark:hidden"
                    />
                    <img
                      src="/logo-putih.webp"
                      alt={comp.name}
                      className="h-10 w-auto object-contain hidden dark:block"
                    />
                  </>
                ) : comp.logoUrl ? (
                  <img
                    src={comp.logoUrl}
                    alt={comp.name}
                    className="h-10 w-10 rounded-xl object-contain shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                ) : null}
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Company Name (no bottom divider) */}
                <h3 className="text-sm sm:text-base font-black leading-tight mb-2.5 text-slate-900 dark:text-white">
                  {comp.name}
                </h3>

                {/* Dimension Headline */}
                <div className="text-xs sm:text-[13.5px] font-black leading-snug mb-2 text-blue-700 dark:text-cyan-300">
                  {content.headline}
                </div>

                {/* Dimension Description */}
                <p className="text-xs leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                  {content.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Brand Positioning Callout (updates per active tab) */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-white dark:from-slate-900 dark:via-blue-950/35 dark:to-slate-900 border border-blue-200/80 dark:border-blue-900/60 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
            {activePositioning.badge}
          </span>
          <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5 leading-snug">
            <span className="block">{activePositioning.statementLine1}</span>
            <span className="block">{activePositioning.statementLine2}</span>
          </h3>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 max-w-lg md:text-right font-medium">
          {activePositioning.supportingNote}
        </p>
      </div>
    </div>
  );
};

export default Container;
