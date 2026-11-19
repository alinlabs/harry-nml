import React, { useMemo, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  AreaChart,
  Area,
} from 'recharts';
import {
  Activity,
  Award,
  BarChart3,
  CheckCircle2,
  Filter,
  Info,
  LayoutDashboard,
  TrendingUp,
} from 'lucide-react';
import { useSlideData, PerformanceTabId } from './data';

export const Container: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const slideData = useSlideData();

  const [activeTab, setActiveTab] = useState<PerformanceTabId>('achievements');

  // Interactive Client Growth Simulation (purely client count & retention %)
  const [initialClients, setInitialClients] = useState<number>(4);
  const [newClientsPerMonth, setNewClientsPerMonth] = useState<number>(3);
  const [retentionRatePercent, setRetentionRatePercent] = useState<number>(90);

  // Interactive Sales Funnel editable planning assumptions
  const [newProspects, setNewProspects] = useState<number>(100);
  const [contactRate, setContactRate] = useState<number>(60);
  const [qualRate, setQualRate] = useState<number>(50);
  const [meetingRate, setMeetingRate] = useState<number>(60);
  const [proposalRate, setProposalRate] = useState<number>(65);
  const [winRate, setWinRate] = useState<number>(30);

  // 6-Month Client Growth Trajectory calculation (whole client counts, zero currency)
  const clientGrowthSeries = useMemo(() => {
    const series: { month: string; clients: number }[] = [];
    let current = initialClients;

    for (let m = 1; m <= 6; m += 1) {
      if (m > 1) {
        current = Math.round(current * (retentionRatePercent / 100) + newClientsPerMonth);
      }
      series.push({
        month: `${slideData.growthSimulator.monthPrefix} ${m}`,
        clients: current,
      });
    }
    return series;
  }, [initialClients, newClientsPerMonth, retentionRatePercent, slideData.growthSimulator.monthPrefix]);

  const month6Clients = clientGrowthSeries[clientGrowthSeries.length - 1]?.clients ?? initialClients;
  const netAddedClients = month6Clients - initialClients;
  const clientGrowthPercent =
    initialClients > 0 ? Math.round(((month6Clients - initialClients) / initialClients) * 100) : 0;

  // Funnel calculations
  const funnelData = useMemo(() => {
    const contacted = Math.round(newProspects * (contactRate / 100));
    const qualified = Math.round(contacted * (qualRate / 100));
    const meetings = Math.round(qualified * (meetingRate / 100));
    const proposals = Math.round(meetings * (proposalRate / 100));
    const closed = Math.round(proposals * (winRate / 100));

    return [
      { stage: slideData.funnelSection.stageNames.newProspects, count: newProspects, color: '#2563eb' },
      { stage: slideData.funnelSection.stageNames.contacted, count: contacted, color: '#0284c7' },
      { stage: slideData.funnelSection.stageNames.qualified, count: qualified, color: '#0891b2' },
      { stage: slideData.funnelSection.stageNames.meetings, count: meetings, color: '#0d9488' },
      { stage: slideData.funnelSection.stageNames.proposals, count: proposals, color: '#059669' },
      { stage: slideData.funnelSection.stageNames.closed, count: closed, color: '#16a34a' },
    ];
  }, [
    newProspects,
    contactRate,
    qualRate,
    meetingRate,
    proposalRate,
    winRate,
    slideData.funnelSection.stageNames,
  ]);

  return (
    <div className="w-full flex-1 flex flex-col justify-start py-1.5 max-w-7xl mx-auto px-2 font-sans text-slate-800 dark:text-slate-100 select-text">
      {/* Header Slide */}
      <div className="text-center mb-4 sm:mb-5">
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          {slideData.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-1">
          {slideData.subtitle}
        </p>
      </div>

      {/* Interactive Section Switcher */}
      <div className="flex justify-center mb-4 sm:mb-5">
        <div className="inline-flex flex-wrap justify-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 gap-1">
          {slideData.tabs.map((tab) => {
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
                {tab.id === 'achievements' && <Award size={14} />}
                {tab.id === 'funnel' && <Filter size={14} />}
                {tab.id === 'dashboard' && <LayoutDashboard size={14} />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: Client Milestones & Client Growth Simulator (Non-Monetary) */}
      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch">
          {/* Left (5 cols): Key Sales Achievement Milestones */}
          <div className="lg:col-span-5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-3">
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
                <Award size={16} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>{slideData.achievementSection.title}</span>
              </h3>

              <div className="space-y-2">
                {slideData.achievementSection.milestones.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70"
                  >
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 shrink-0">
                        {item.metricBadge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug pl-5">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 flex items-start gap-2 text-[11px] text-blue-900 dark:text-cyan-200">
              <Info size={14} className="shrink-0 mt-0.5 text-blue-600 dark:text-cyan-400" />
              <span className="font-medium leading-snug">
                {slideData.achievementSection.notice}
              </span>
            </div>
          </div>

          {/* Right (7 cols): Interactive Client Count & Growth Simulator */}
          <div className="lg:col-span-7 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-3">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <TrendingUp size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{slideData.growthSimulator.title}</span>
                </h3>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold border border-slate-200 dark:border-slate-700">
                  {slideData.growthSimulator.badgeLabel}
                </span>
              </div>

              {/* 3 Interactive Non-Monetary Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <label
                      htmlFor="sim-init-clients"
                      className="text-[11px] font-bold text-slate-700 dark:text-slate-200"
                    >
                      {slideData.growthSimulator.initialClientsLabel}
                    </label>
                    <span className="text-xs font-black text-blue-600 dark:text-cyan-400 shrink-0">
                      {initialClients}
                    </span>
                  </div>
                  <input
                    id="sim-init-clients"
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={initialClients}
                    onChange={(e) => setInitialClients(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <label
                      htmlFor="sim-new-clients"
                      className="text-[11px] font-bold text-slate-700 dark:text-slate-200"
                    >
                      {slideData.growthSimulator.newClientsLabel}
                    </label>
                    <span className="text-xs font-black text-blue-600 dark:text-cyan-400 shrink-0">
                      +{newClientsPerMonth}
                    </span>
                  </div>
                  <input
                    id="sim-new-clients"
                    type="range"
                    min={1}
                    max={15}
                    step={1}
                    value={newClientsPerMonth}
                    onChange={(e) => setNewClientsPerMonth(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <label
                      htmlFor="sim-retention"
                      className="text-[11px] font-bold text-slate-700 dark:text-slate-200"
                    >
                      {slideData.growthSimulator.retentionLabel}
                    </label>
                    <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 shrink-0">
                      {retentionRatePercent}%
                    </span>
                  </div>
                  <input
                    id="sim-retention"
                    type="range"
                    min={70}
                    max={100}
                    step={2}
                    value={retentionRatePercent}
                    onChange={(e) => setRetentionRatePercent(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* 3 Client Growth Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
                <div className="p-3 rounded-xl bg-blue-600 text-white shadow-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-100">
                    {slideData.growthSimulator.month6ClientsLabel}
                  </div>
                  <div className="text-lg sm:text-xl font-black mt-0.5">
                    {month6Clients} {slideData.growthSimulator.clientsUnit}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-600 text-white shadow-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-100">
                    {slideData.growthSimulator.growthPercentLabel}
                  </div>
                  <div className="text-lg sm:text-xl font-black mt-0.5">
                    {clientGrowthPercent >= 0 ? `+${clientGrowthPercent}%` : `${clientGrowthPercent}%`}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {slideData.growthSimulator.netAddedLabel}
                  </div>
                  <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-0.5">
                    {netAddedClients >= 0 ? `+${netAddedClients}` : netAddedClients}{' '}
                    {slideData.growthSimulator.clientsUnit}
                  </div>
                </div>
              </div>

              {/* Client Growth Area Chart */}
              <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60">
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-200 mb-2">
                  {slideData.growthSimulator.chartHeading}
                </div>
                <div className="h-[155px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={clientGrowthSeries} margin={{ top: 6, right: 12, left: -18, bottom: 0 }}>
                      <defs>
                        <linearGradient id="clientGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={isDark ? '#1e293b' : '#e2e8f0'}
                        vertical={false}
                      />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 11, fontWeight: 600 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        allowDecimals={false}
                        tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 11, fontWeight: 600 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        formatter={(val: number) => [
                          `${val} ${slideData.growthSimulator.clientsUnit}`,
                          language === 'en' ? 'Active Clients' : 'Klien Aktif',
                        ]}
                        contentStyle={{
                          backgroundColor: isDark ? '#0f172a' : '#ffffff',
                          borderColor: isDark ? '#334155' : '#cbd5e1',
                          borderRadius: '0.75rem',
                          fontSize: '11px',
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="clients"
                        stroke="#2563eb"
                        strokeWidth={2.5}
                        fill="url(#clientGrowthGrad)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="text-[10.5px] font-semibold text-slate-500 dark:text-slate-400">
              {slideData.growthSimulator.disclaimer}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Editable Sales Funnel + 12 Non-Monetary KPIs */}
      {activeTab === 'funnel' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 flex-1 items-stretch">
          {/* Left (5 cols): Editable Sales Funnel */}
          <div className="lg:col-span-5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-2.5">
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Filter size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>{slideData.funnelSection.title}</span>
              </h3>
              <div className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-semibold text-slate-600 dark:text-slate-300 mb-2.5">
                {slideData.funnelSection.assumptionBanner}
              </div>

              {/* Editable Assumption Sliders */}
              <div className="grid grid-cols-2 gap-2 mb-2.5 text-[10.5px]">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between font-bold mb-1">
                    <span>{slideData.funnelSection.prospectsInputLabel}</span>
                    <span className="text-blue-600 dark:text-cyan-400">{newProspects}</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={300}
                    step={10}
                    value={newProspects}
                    onChange={(e) => setNewProspects(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between font-bold mb-1">
                    <span>{slideData.funnelSection.contactRateLabel}</span>
                    <span className="text-blue-600 dark:text-cyan-400">{contactRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={90}
                    step={5}
                    value={contactRate}
                    onChange={(e) => setContactRate(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between font-bold mb-1">
                    <span>{slideData.funnelSection.qualRateLabel}</span>
                    <span className="text-blue-600 dark:text-cyan-400">{qualRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={80}
                    step={5}
                    value={qualRate}
                    onChange={(e) => setQualRate(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between font-bold mb-1">
                    <span>{slideData.funnelSection.meetingRateLabel}</span>
                    <span className="text-blue-600 dark:text-cyan-400">{meetingRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={90}
                    step={5}
                    value={meetingRate}
                    onChange={(e) => setMeetingRate(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between font-bold mb-1">
                    <span>{slideData.funnelSection.proposalRateLabel}</span>
                    <span className="text-blue-600 dark:text-cyan-400">{proposalRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={90}
                    step={5}
                    value={proposalRate}
                    onChange={(e) => setProposalRate(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between font-bold mb-1">
                    <span>{slideData.funnelSection.winRateLabel}</span>
                    <span className="text-emerald-600 dark:text-emerald-400">{winRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={60}
                    step={5}
                    value={winRate}
                    onChange={(e) => setWinRate(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Funnel Bar Visualization */}
            <div className="h-[195px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={funnelData}
                  layout="vertical"
                  margin={{ top: 4, right: 20, left: 6, bottom: 4 }}
                >
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="stage"
                    width={130}
                    tick={{
                      fill: isDark ? '#e2e8f0' : '#1e293b',
                      fontSize: 10.5,
                      fontWeight: 600,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={(val: number) => [
                      `${val} ${language === 'en' ? '(Assumed)' : '(Asumsi)'}`,
                      language === 'en' ? 'Volume' : 'Jumlah',
                    ]}
                    contentStyle={{
                      backgroundColor: isDark ? '#0f172a' : '#ffffff',
                      borderColor: isDark ? '#334155' : '#cbd5e1',
                      borderRadius: '0.75rem',
                      fontSize: '11px',
                    }}
                  />
                  <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={18}>
                    {funnelData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right (7 cols): 12 Non-Monetary Sales Manager KPIs */}
          <div className="lg:col-span-7 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
                <Activity size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>{slideData.kpiSection.title}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {slideData.kpiSection.items.map((kpi) => (
                  <div
                    key={kpi.id}
                    className="p-2.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] font-black text-slate-900 dark:text-white leading-tight">
                          {kpi.name}
                        </span>
                        <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 shrink-0">
                          {kpi.category}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-snug">
                        {kpi.formulaOrDefinition}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Team Achievement Tracker */}
      {activeTab === 'dashboard' && (
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex-1 flex flex-col justify-between gap-3">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart3 size={16} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>{slideData.dashboardSection.title}</span>
              </h3>
              <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-cyan-300 text-[10px] font-bold border border-blue-200 dark:border-blue-800">
                {language === 'en' ? 'Non-Monetary Tracker' : 'Pemantauan Pencapaian'}
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-300 mb-3">
              <Info size={14} className="shrink-0 mt-0.5 text-blue-600 dark:text-cyan-400" />
              <span>{slideData.dashboardSection.notice}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {slideData.dashboardSection.cards.map((card, idx) => (
                <div
                  key={card.id}
                  className="p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-black text-blue-600 dark:text-cyan-400">
                        #{idx + 1}
                      </span>
                      <span className="text-[9.5px] font-bold text-slate-500 dark:text-slate-400">
                        {card.granularity}
                      </span>
                    </div>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white mb-1 leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-snug">
                      {card.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
