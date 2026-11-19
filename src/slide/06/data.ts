import { useLanguage } from '@/contexts/LanguageContext';

export type PerformanceTabId = 'achievements' | 'funnel' | 'dashboard';

export interface KpiDefinition {
  id: string;
  name: string;
  formulaOrDefinition: string;
  category: 'Pipeline' | 'Growth' | 'Productivity';
}

export interface AchievementDriver {
  title: string;
  metricBadge: string;
  detail: string;
}

export interface DashboardMetricCard {
  id: string;
  title: string;
  focus: string;
  granularity: string;
}

export const slideDataId = {
  badge: "Bagian 5 • Pencapaian & Performa Penjualan",
  title: "SALES PERFORMANCE & ACHIEVEMENTS",
  subtitle: "Mengukur pencapaian akuisisi klien, pertumbuhan aktif, dan efektivitas konversi penjualan.",
  tabs: [
    { id: "achievements" as PerformanceTabId, label: "Pencapaian & Pertumbuhan Klien" },
    { id: "funnel" as PerformanceTabId, label: "Funnel Pencapaian & 12 KPI" },
    { id: "dashboard" as PerformanceTabId, label: "Indikator Pencapaian Tim" },
  ],
  achievementSection: {
    title: "Fokus Pencapaian Kunci Penjualan",
    notice:
      "Fokus pada pencapaian jumlah klien, konsistensi retensi, dan pertumbuhan cakupan wilayah secara terukur.",
    milestones: [
      {
        title: "Akuisisi Klien Awal (Validasi Pasar)",
        metricBadge: "Fase 1 • Tangerang",
        detail: "Membuka klien perdana secara langsung di klaster Tangerang dan membuktikan pola closing yang dapat diulang.",
      },
      {
        title: "Pertumbuhan Jumlah Klien Aktif",
        metricBadge: "Pertumbuhan Bulanan",
        detail: "Penambahan klien baru secara konsisten setiap bulan di segmen F&B, jasa appointment, dan B2B/proyek.",
      },
      {
        title: "Tingkat Retensi & Kepercayaan Klien",
        metricBadge: "Target Retensi Tinggi",
        detail: "Menjaga klien tetap aktif melalui eksekusi terukur sehingga pertumbuhan klien terus terakumulasi.",
      },
      {
        title: "Ekspansi Cakupan pada Klien Aktif",
        metricBadge: "Peningkatan Kolaborasi",
        detail: "Menambah cakupan layanan bagi klien yang telah puas dan merasakan dampak nyata pada bisnisnya.",
      },
      {
        title: "Perluasan Pencapaian Multi-Wilayah",
        metricBadge: "Tangerang → Jabodetabek",
        detail: "Membuka pencapaian klien di 5 wilayah Jakarta hingga Bekasi, Depok, dan Bogor seiring kesiapan tim.",
      },
    ] as AchievementDriver[],
  },
  growthSimulator: {
    title: "Simulasi Pertumbuhan Jumlah Klien (6 Bulan)",
    badgeLabel: "Asumsi Perencanaan",
    initialClientsLabel: "Klien Aktif Awal",
    newClientsLabel: "Tambahan Klien Baru / Bulan",
    retentionLabel: "Tingkat Retensi Bulanan (%)",
    month6ClientsLabel: "Estimasi Klien Aktif (Bulan 6)",
    growthPercentLabel: "Pertumbuhan Klien",
    netAddedLabel: "Penambahan Bersih",
    retainedRateLabel: "Tingkat Retensi",
    chartHeading: "Proyeksi Pertumbuhan Klien (Bulan 1 – Bulan 6)",
    monthPrefix: "Bln",
    clientsUnit: "klien",
    disclaimer:
      "Simulasi perencanaan pertumbuhan jumlah klien, bukan data historis atau jaminan hasil aktual.",
  },
  funnelSection: {
    title: "Funnel Pencapaian Klien (Asumsi Perencanaan)",
    assumptionBanner:
      "Asumsi Perencanaan Ilustratif — bukan data historis atau hasil aktual Nova Media Lab.",
    prospectsInputLabel: "Prospek Baru / Periode",
    contactRateLabel: "Contact Rate (%)",
    qualRateLabel: "Qualification Rate (%)",
    meetingRateLabel: "Meeting Rate (%)",
    proposalRateLabel: "Proposal Rate (%)",
    winRateLabel: "Closing / Win Rate (%)",
    stageNames: {
      newProspects: "1. Prospek Baru",
      contacted: "2. Dihubungi",
      qualified: "3. Lead Terkualifikasi",
      meetings: "4. Pertemuan Terlaksana",
      proposals: "5. Proposal Terkirim",
      closed: "6. Klien Closing",
    },
  },
  kpiSection: {
    title: "12 KPI Pencapaian Sales Manager (Non-Nominal)",
    items: [
      {
        id: "lead-gen",
        name: "Lead Generation",
        formulaOrDefinition: "Jumlah prospek baru terverifikasi yang masuk CRM per periode.",
        category: "Pipeline",
      },
      {
        id: "contact-rate",
        name: "Contact Rate",
        formulaOrDefinition: "Prospek Berhasil Dihubungi ÷ Total Prospek Baru × 100%",
        category: "Pipeline",
      },
      {
        id: "qual-rate",
        name: "Qualification Rate",
        formulaOrDefinition: "Lead Terkualifikasi ÷ Prospek Dihubungi × 100%",
        category: "Pipeline",
      },
      {
        id: "meeting-rate",
        name: "Meeting Rate",
        formulaOrDefinition: "Pertemuan Terlaksana ÷ Lead Terkualifikasi × 100%",
        category: "Pipeline",
      },
      {
        id: "proposal-rate",
        name: "Proposal Rate",
        formulaOrDefinition: "Proposal Terkirim ÷ Pertemuan Terlaksana × 100%",
        category: "Pipeline",
      },
      {
        id: "win-rate",
        name: "Closing / Win Rate",
        formulaOrDefinition: "Klien Closing ÷ Proposal Terkirim × 100%",
        category: "Growth",
      },
      {
        id: "client-growth",
        name: "Active Client Growth (%)",
        formulaOrDefinition: "(Klien Aktif Akhir − Klien Awal) ÷ Klien Awal × 100%",
        category: "Growth",
      },
      {
        id: "net-new-clients",
        name: "Net New Clients",
        formulaOrDefinition: "Jumlah Klien Baru Masuk − Jumlah Klien Berhenti per periode.",
        category: "Growth",
      },
      {
        id: "retention",
        name: "Client Retention Rate",
        formulaOrDefinition: "Persentase klien aktif yang bertahan (100% − Churn Rate) per periode.",
        category: "Growth",
      },
      {
        id: "scope-expansion",
        name: "Client Expansion Rate",
        formulaOrDefinition: "Persentase klien aktif yang menambah cakupan layanan kolaborasi.",
        category: "Growth",
      },
      {
        id: "bd-prod",
        name: "BD Productivity",
        formulaOrDefinition: "Prospek baru, aktivitas outreach & meeting terkualifikasi per BD/SDR.",
        category: "Productivity",
      },
      {
        id: "sales-prod",
        name: "Sales Productivity",
        formulaOrDefinition: "Proposal terkirim, win rate & kecepatan closing per Sales Executive.",
        category: "Productivity",
      },
    ] as KpiDefinition[],
  },
  dashboardSection: {
    title: "Indikator Pencapaian Tim yang Diusulkan",
    notice:
      "Rancangan pemantauan pencapaian operasional tim secara mingguan/bulanan (berbasis jumlah aktivitas, klien, dan persentase pertumbuhan).",
    cards: [
      {
        id: "bd-leads",
        title: "Total Prospek per BD",
        focus: "Melacak jumlah prospek baru dan kontak terkualifikasi yang dihasilkan tiap BD/SDR.",
        granularity: "Mingguan / per BD",
      },
      {
        id: "se-meetings",
        title: "Pertemuan per Sales Executive",
        focus: "Memantau volume pertemuan discovery dan presentasi solusi yang terlaksana.",
        granularity: "Mingguan / per Sales Exec",
      },
      {
        id: "proposal-pipeline",
        title: "Jumlah Proposal Aktif",
        focus: "Memantau jumlah proposal yang sedang berjalan beserta tahap tindak lanjut dan durasinya.",
        granularity: "Real-time di CRM",
      },
      {
        id: "closed-deals",
        title: "Pencapaian Klien Baru",
        focus: "Jumlah klien baru yang resmi bergabung beserta kelengkapan serah terima ke tim delivery.",
        granularity: "Bulanan / Kuartalan",
      },
      {
        id: "client-territory",
        title: "Pertumbuhan Klien per Wilayah",
        focus: "Memantau sebaran dan pertumbuhan klien dari Tangerang, Jakarta, hingga Bodetabek.",
        granularity: "Tangerang → Jakarta → Jabodetabek",
      },
      {
        id: "client-industry",
        title: "Pertumbuhan Klien per Segmen",
        focus: "Melihat segmen paling responsif: F&B, Jasa (Appointment), atau Proyek/B2B.",
        granularity: "Per 3 segmen UKM",
      },
      {
        id: "retention-rate",
        title: "Retensi & Perpanjangan Klien (%)",
        focus: "Persentase klien aktif bertahan, perpanjangan kontrak, dan evaluasi kepuasan layanan.",
        granularity: "Evaluasi bulanan",
      },
      {
        id: "team-conv",
        title: "Konversi & Produktivitas Tim (%)",
        focus: "Perbandingan rasio konversi antar tahap guna menentukan fokus coaching tim.",
        granularity: "Coaching mingguan",
      },
    ] as DashboardMetricCard[],
  },
};

export const slideDataEn = {
  badge: "Part 5 • Sales Performance & Achievements",
  title: "SALES PERFORMANCE & ACHIEVEMENTS",
  subtitle: "Measuring client acquisition milestones, active growth, and sales conversion effectiveness.",
  tabs: [
    { id: "achievements" as PerformanceTabId, label: "Client Milestones & Growth" },
    { id: "funnel" as PerformanceTabId, label: "Conversion Funnel & 12 KPIs" },
    { id: "dashboard" as PerformanceTabId, label: "Team Achievement Tracker" },
  ],
  achievementSection: {
    title: "Key Sales Achievement Milestones",
    notice:
      "Focused on client count milestones, retention consistency, and measurable territory growth.",
    milestones: [
      {
        title: "Initial Client Acquisition (Market Validation)",
        metricBadge: "Phase 1 • Tangerang",
        detail: "Win initial clients directly across Tangerang clusters and validate a repeatable closing workflow.",
      },
      {
        title: "Consistent Active Client Growth",
        metricBadge: "Monthly Growth",
        detail: "Steady monthly new-client additions across F&B, appointment services, and project/B2B segments.",
      },
      {
        title: "High Client Retention & Trust",
        metricBadge: "Retention Target",
        detail: "Keep active clients engaged through structured execution so total active client base compounds.",
      },
      {
        title: "Service Scope Expansion on Active Clients",
        metricBadge: "Account Growth",
        detail: "Expand collaboration scope with satisfied clients once initial digital execution proves helpful.",
      },
      {
        title: "Multi-Territory Achievement Scaling",
        metricBadge: "Tangerang → Jabodetabek",
        detail: "Extend active client footprint into Jakarta's 5 areas and Bekasi, Depok, and Bogor as team capacity scales.",
      },
    ] as AchievementDriver[],
  },
  growthSimulator: {
    title: "Client Growth Simulation (6 Months)",
    badgeLabel: "Planning Assumption",
    initialClientsLabel: "Starting Active Clients",
    newClientsLabel: "New Clients Added / Month",
    retentionLabel: "Monthly Retention Rate (%)",
    month6ClientsLabel: "Projected Active Clients (Month 6)",
    growthPercentLabel: "Client Growth",
    netAddedLabel: "Net Client Gain",
    retainedRateLabel: "Retention Rate",
    chartHeading: "Client Growth Trajectory (Month 1 – Month 6)",
    monthPrefix: "Mo",
    clientsUnit: "clients",
    disclaimer:
      "Illustrative client growth planning simulation — not historical performance or guaranteed results.",
  },
  funnelSection: {
    title: "Client Conversion Funnel (Planning Assumptions)",
    assumptionBanner:
      "Illustrative Planning Assumptions — not historical Nova Media Lab performance data.",
    prospectsInputLabel: "New Prospects / Period",
    contactRateLabel: "Contact Rate (%)",
    qualRateLabel: "Qualification Rate (%)",
    meetingRateLabel: "Meeting Rate (%)",
    proposalRateLabel: "Proposal Rate (%)",
    winRateLabel: "Closing / Win Rate (%)",
    stageNames: {
      newProspects: "1. New Prospects",
      contacted: "2. Contacted",
      qualified: "3. Qualified Leads",
      meetings: "4. Meetings Held",
      proposals: "5. Proposals Sent",
      closed: "6. Closed Customers",
    },
  },
  kpiSection: {
    title: "12 Non-Monetary Sales Achievement KPIs",
    items: [
      {
        id: "lead-gen",
        name: "Lead Generation",
        formulaOrDefinition: "Number of relevant new prospects added to CRM per period.",
        category: "Pipeline",
      },
      {
        id: "contact-rate",
        name: "Contact Rate",
        formulaOrDefinition: "Contacted Prospects ÷ New Prospects × 100%",
        category: "Pipeline",
      },
      {
        id: "qual-rate",
        name: "Qualification Rate",
        formulaOrDefinition: "Qualified Leads ÷ Contacted Prospects × 100%",
        category: "Pipeline",
      },
      {
        id: "meeting-rate",
        name: "Meeting Rate",
        formulaOrDefinition: "Meetings Held ÷ Qualified Leads × 100%",
        category: "Pipeline",
      },
      {
        id: "proposal-rate",
        name: "Proposal Rate",
        formulaOrDefinition: "Proposals Sent ÷ Meetings Held × 100%",
        category: "Pipeline",
      },
      {
        id: "win-rate",
        name: "Closing / Win Rate",
        formulaOrDefinition: "Closed Customers ÷ Proposals Sent × 100%",
        category: "Growth",
      },
      {
        id: "client-growth",
        name: "Active Client Growth (%)",
        formulaOrDefinition: "(Ending Active Clients − Starting Clients) ÷ Starting Clients × 100%",
        category: "Growth",
      },
      {
        id: "net-new-clients",
        name: "Net New Clients",
        formulaOrDefinition: "New Closed Clients − Churned Clients per period.",
        category: "Growth",
      },
      {
        id: "retention",
        name: "Client Retention Rate",
        formulaOrDefinition: "Percentage of retained active clients (100% − Churn Rate) per period.",
        category: "Growth",
      },
      {
        id: "scope-expansion",
        name: "Client Expansion Rate",
        formulaOrDefinition: "Percentage of active clients expanding into broader collaboration scope.",
        category: "Growth",
      },
      {
        id: "bd-prod",
        name: "BD Productivity",
        formulaOrDefinition: "New prospects, outreach volume & qualified meetings per BD/SDR.",
        category: "Productivity",
      },
      {
        id: "sales-prod",
        name: "Sales Productivity",
        formulaOrDefinition: "Proposals sent, win rate & closing speed per Sales Executive.",
        category: "Productivity",
      },
    ] as KpiDefinition[],
  },
  dashboardSection: {
    title: "Proposed Team Achievement Tracker",
    notice:
      "Proposed weekly and monthly operational view tracking team activities, client counts, and growth percentages.",
    cards: [
      {
        id: "bd-leads",
        title: "Total Leads per BD",
        focus: "Tracks new prospects and qualified leads generated per BD/SDR.",
        granularity: "Weekly / per BD",
      },
      {
        id: "se-meetings",
        title: "Meetings per Sales Executive",
        focus: "Monitors discovery calls and solution presentation volume.",
        granularity: "Weekly / per Sales Exec",
      },
      {
        id: "proposal-pipeline",
        title: "Active Proposal Pipeline",
        focus: "Open proposal count, follow-up stage, and pipeline aging in CRM.",
        granularity: "Live CRM view",
      },
      {
        id: "closed-deals",
        title: "New Closed Clients",
        focus: "Newly onboarded clients and creative delivery handover readiness.",
        granularity: "Monthly / Quarterly",
      },
      {
        id: "client-territory",
        title: "Client Growth by Territory",
        focus: "Tracks client expansion across Tangerang, Jakarta, and Bodetabek.",
        granularity: "Tangerang → Jakarta → Jabodetabek",
      },
      {
        id: "client-industry",
        title: "Client Growth by Segment",
        focus: "Tracks traction across F&B, Appointment Services, and Project/B2B.",
        granularity: "Across 3 SME segments",
      },
      {
        id: "retention-rate",
        title: "Client Retention & Renewal (%)",
        focus: "Active retention percentage, renewals, and service satisfaction health.",
        granularity: "Monthly review",
      },
      {
        id: "team-conv",
        title: "Team Conversion & Productivity (%)",
        focus: "Stage-by-stage conversion benchmarks to guide targeted coaching.",
        granularity: "Weekly coaching",
      },
    ] as DashboardMetricCard[],
  },
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 5,
  folder: "06",
  sectionId: 1,
  navTitle: {
    in: "Pencapaian & Performa",
    en: "Achievements & Performance",
  },
  headerTitle: {
    in: "Pencapaian & Performa Penjualan",
    en: "Sales Performance & Achievements",
  },
  category: {
    in: "Strategi",
    en: "Strategy",
  },
  section: {
    in: "Strategi",
    en: "Strategy",
  },
};
