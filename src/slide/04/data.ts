import { useLanguage } from '@/contexts/LanguageContext';

export type PlaybookSectionTab = 'budget' | 'conversation' | 'team';

export interface PlaybookCardItem {
  id: string;
  title: string;
  description: string;
}

export interface Slide04Data {
  badge: string;
  title: string;
  subtitle: string;
  sectionTabs: { id: PlaybookSectionTab; label: string }[];
  tabCards: Record<PlaybookSectionTab, PlaybookCardItem[]>;
}

export const slideDataId: Slide04Data = {
  badge: "Bagian 4 • Sistem Eksekusi Penjualan",
  title: "SALES EXECUTION PLAYBOOK",
  subtitle:
    "Menciptakan kebutuhan, mengubah peluang menjadi pelanggan, dan membangun sistem penjualan.",
  sectionTabs: [
    { id: "budget", label: "Masalah Pasar & Strategi Budget" },
    { id: "conversation", label: "Pendekatan Klien & Keberatan" },
    { id: "team", label: "Model Tim & Ritme Operasi" },
  ],
  tabCards: {
    budget: [
      {
        id: "b1",
        title: "1. Identifikasi Celah Digital",
        description:
          "Audit akun sosial, Google Business Profile, dan website prospek yang berhenti posting atau belum terarah.",
      },
      {
        id: "b2",
        title: "2. Tunjukkan Dampak Bisnis",
        description:
          "Hubungkan inkonsistensi konten dengan dampaknya terhadap awareness, kepercayaan, enquiry, kunjungan, dan booking.",
      },
      {
        id: "b3",
        title: "3. Hadirkan Peluang Solusi",
        description:
          "Rekomendasikan pilar konten dan alur konversi sederhana yang sesuai karakter bisnis F&B, jasa, atau B2B.",
      },
      {
        id: "b4",
        title: "4. Susun Proposal Anggaran",
        description:
          "Ajukan alokasi bulanan realistis lengkap dengan ruang lingkup kerja, deliverable, dan pembagian peran yang jelas.",
      },
      {
        id: "b5",
        title: "5. Mulai dari Program Terukur",
        description:
          "Mulai lewat paid pilot berbayar dengan indikator aktivitas awal yang disepakati tanpa menekan kapasitas klien.",
      },
      {
        id: "b6",
        title: "6. Bangun Kemitraan Panjang",
        description:
          "Evaluasi progres secara berkala dan kembangkan cakupan retainer seiring nilai bisnis terbukti nyata.",
      },
    ],
    conversation: [
      {
        id: "c1",
        title: "1. Opening & Relevansi Lokal",
        description:
          "Bangun relevansi melalui pengamatan singkat profil digital bisnis di wilayahnya tanpa pendekatan hard-selling.",
      },
      {
        id: "c2",
        title: "2. Discovery & Kualifikasi",
        description:
          "Gali pengelola konten saat ini, target usaha, akses pengambil keputusan, serta kelayakan kapasitas anggaran.",
      },
      {
        id: "c3",
        title: "3. Audit Digital & Solusi",
        description:
          "Paparkan temuan celah eksekusi digital dan rancangan pilar konten yang selaras dengan tujuan konversi klien.",
      },
      {
        id: "c4",
        title: "4. Respons “Sudah Punya Admin”",
        description:
          "Posisikan Nova Media Lab sebagai mitra strategi dan produksi yang membantu admin internal, bukan menggantikan.",
      },
      {
        id: "c5",
        title: "5. Respons “Belum Ada Budget / Trauma”",
        description:
          "Tawarkan ruang lingkup bertahap atau paid pilot dengan transparansi proses kerja tanpa janji hasil muluk.",
      },
      {
        id: "c6",
        title: "6. Proposal, Closing & Handover",
        description:
          "Sepakati lingkup kerja, jadwal kickoff, dan serahkan brief discovery ke tim produksi agar onboarding berjalan rapi.",
      },
    ],
    team: [
      {
        id: "t1",
        title: "1. Bulan 1–3: Single Fighter",
        description:
          "Harry menangani siklus penjualan penuh di Tangerang sambil mendokumentasikan SOP dan playbook tim pertama.",
      },
      {
        id: "t2",
        title: "2. Bulan 3–6: Pembentukan Tim",
        description:
          "Rekrutmen BD/SDR pembuka pipeline dan Sales Executive untuk menjaga Tangerang sambil ekspansi ke Jakarta.",
      },
      {
        id: "t3",
        title: "3. Bulan 7+: Ekspansi Jabodetabek",
        description:
          "Perluasan cakupan klaster Jabodetabek dan fungsi retensi akun mengikuti kesiapan pipeline dan tim delivery.",
      },
      {
        id: "t4",
        title: "4. Ritme Harian (Daily)",
        description:
          "Disiplin prospecting, riset bisnis sasaran, outreach terjadwal, follow-up aktif, dan pembaruan CRM harian.",
      },
      {
        id: "t5",
        title: "5. Ritme Mingguan (Weekly)",
        description:
          "Tinjauan progres pipeline, deal coaching peluang kunci, analisis keberatan pasar, dan forecast jangka pendek.",
      },
      {
        id: "t6",
        title: "6. Ritme Bulanan (Monthly)",
        description:
          "Evaluasi pendapatan, retensi klien, rasio konversi antar tahap penjualan, dan performa setiap wilayah.",
      },
    ],
  },
};

export const slideDataEn: Slide04Data = {
  badge: "Part 4 • Sales Execution System",
  title: "SALES EXECUTION PLAYBOOK",
  subtitle:
    "Creating demand, converting opportunities into paying clients, and building a repeatable sales system.",
  sectionTabs: [
    { id: "budget", label: "Market Problem & Budget Strategy" },
    { id: "conversation", label: "Client Approach & Objections" },
    { id: "team", label: "Team Model & Operating Rhythm" },
  ],
  tabCards: {
    budget: [
      {
        id: "b1",
        title: "1. Identify the Gap",
        description:
          "Audit social profiles, Google Business Profile, and websites that stopped posting or lack clear direction.",
      },
      {
        id: "b2",
        title: "2. Show Business Impact",
        description:
          "Connect inconsistent content directly to business awareness, customer trust, enquiries, visits, and bookings.",
      },
      {
        id: "b3",
        title: "3. Present the Opportunity",
        description:
          "Recommend tailored content pillars and simple conversion paths suited to F&B, appointment services, or B2B.",
      },
      {
        id: "b4",
        title: "4. Create Budget Proposal",
        description:
          "Propose a realistic monthly allocation with transparent scope, deliverables, and clear role division.",
      },
      {
        id: "b5",
        title: "5. Start Measurable Program",
        description:
          "Begin with a structured paid pilot and agreed initial indicators without pressuring SME business capacity.",
      },
      {
        id: "b6",
        title: "6. Build Long-Term Partnership",
        description:
          "Review agreed progress regularly and expand the retainer scope once commercial value is clearly proven.",
      },
    ],
    conversation: [
      {
        id: "c1",
        title: "1. Opening & Local Relevance",
        description:
          "Establish local relevance with a brief, respectful observation on their digital channels without hard-selling.",
      },
      {
        id: "c2",
        title: "2. Discovery & Qualification",
        description:
          "Uncover current content ownership, business goals, decision-maker access, and realistic budget capacity.",
      },
      {
        id: "c3",
        title: "3. Digital Audit & Solution",
        description:
          "Walk through digital execution gaps and present tailored content pillars aligned with conversion goals.",
      },
      {
        id: "c4",
        title: "4. Handle “Already Have Admin”",
        description:
          "Position Nova Media Lab as a strategy and production partner supporting internal admin, not replacing them.",
      },
      {
        id: "c5",
        title: "5. Handle “No Budget / Past Agency”",
        description:
          "Offer a phased scope or paid pilot with transparent workflow expectations and no unrealistic guarantees.",
      },
      {
        id: "c6",
        title: "6. Proposal, Closing & Handover",
        description:
          "Align on scope, kickoff schedule, and hand over discovery briefs cleanly to the creative delivery team.",
      },
    ],
    team: [
      {
        id: "t1",
        title: "1. Months 1–3: Single Fighter",
        description:
          "Harry executes the full sales cycle in Tangerang while documenting the first repeatable team playbook.",
      },
      {
        id: "t2",
        title: "2. Months 3–6: Team Formation",
        description:
          "Onboard BD/SDR for pipeline generation and Sales Executives to maintain Tangerang while opening Jakarta.",
      },
      {
        id: "t3",
        title: "3. Month 7+: Jabodetabek Scaling",
        description:
          "Scale Jabodetabek cluster coverage and add account retention as pipeline health and delivery allow.",
      },
      {
        id: "t4",
        title: "4. Daily Operating Rhythm",
        description:
          "Disciplined daily prospecting, target business research, scheduled outreach, active follow-ups, and CRM updates.",
      },
      {
        id: "t5",
        title: "5. Weekly Operating Rhythm",
        description:
          "Weekly pipeline reviews, key deal coaching, market objection analysis, and short-term forecasting.",
      },
      {
        id: "t6",
        title: "6. Monthly Operating Rhythm",
        description:
          "Monthly revenue and retention reviews, stage conversion analysis, and territory performance evaluation.",
      },
    ],
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
  slideNumber: 4,
  folder: "04",
  sectionId: 1,
  navTitle: {
    in: "Playbook Penjualan",
    en: "Sales Playbook",
  },
  headerTitle: {
    in: "Sales Execution Playbook",
    en: "Sales Execution Playbook",
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
