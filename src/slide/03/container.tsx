import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSlideData, TerritoryPhaseId } from './data';
import { TerritoryMap } from './TerritoryMap';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const slideData = useSlideData();
  const [selectedTabId, setSelectedTabId] = useState<TerritoryPhaseId>('phase1');

  const activeArea =
    slideData.focusAreaTabs.find((tab) => tab.id === selectedTabId) ||
    slideData.focusAreaTabs[0];

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

      {/* Main 2-Column Layout: Left (3 Tabs + Dynamic Focus Area Text, Top-Anchored), Right (Direct Map) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 flex-1 items-start">
        {/* LEFT COLUMN (5 cols): Top-anchored so tabs & heading stay fixed when switching tabs */}
        <div className="lg:col-span-5 flex flex-col items-start justify-start text-left px-1 lg:pt-2 lg:min-h-[460px]">
          {/* 3 Area Tabs: Tangerang | Jakarta | Jabodetabek */}
          <div className="inline-flex flex-wrap p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1">
            {slideData.focusAreaTabs.map((tab) => {
              const isActive = tab.id === activeArea.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedTabId(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-bold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60'
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>

          <h3 className="mt-5 max-w-sm lg:min-h-[2.24em] text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            {activeArea.heading}
          </h3>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md font-medium">
            {activeArea.description}
          </p>

          <div className="mt-4 pt-3 space-y-2 border-t border-slate-200 dark:border-slate-800 w-full max-w-md">
            <ul className="space-y-1.5">
              {activeArea.areas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
              {activeArea.clustersLabel}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN (7 cols): Direct Territory Map synced with selected tab */}
        <div className="lg:col-span-7 w-full">
          <TerritoryMap
            activePhaseNum={activeArea.phaseNum}
            language={language}
            showCategoryTabs
            className="territory-map-frame rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
