import React, { useState } from 'react';
import { DollarSign, MessageSquare, Users } from 'lucide-react';
import { useSlideData, PlaybookSectionTab } from './data';

export const Container: React.FC = () => {
  const slideData = useSlideData();
  const [activeTab, setActiveTab] = useState<PlaybookSectionTab>('budget');

  const cards = slideData.tabCards[activeTab] || [];

  const getTabIcon = (id: PlaybookSectionTab) => {
    if (id === 'budget') return DollarSign;
    if (id === 'conversation') return MessageSquare;
    return Users;
  };

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

      {/* 3 Section Tabs */}
      <div className="flex justify-center mb-6 sm:mb-7">
        <div className="inline-flex flex-wrap justify-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1">
          {slideData.sectionTabs.map((tab) => {
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

      {/* Directly 6 Cards: Title + Concise Description Only */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-start text-left"
          >
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-2">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
