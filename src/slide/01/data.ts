import { useLanguage } from '@/contexts/LanguageContext';

export const slideDataId = {
  company: "Nova Media Lab",
  presentationTitle: "Sales Management & Market Expansion Strategy",
  title: "BUILD THE MARKET — GO TO GROWTH",
  titleLine1: "BUILD THE MARKET",
  titleLine2: "",
  titleLine3: "GO TO GROWTH",
  subtitle:
    "Strategi pertumbuhan Nova Media Lab dimulai dengan membangun basis pelanggan di Tangerang, mengembangkan tim penjualan untuk Tangerang dan Jakarta, lalu memperluas operasi ke seluruh Jabodetabek.",
  presenter: {
    name: "Harry Gultom",
    role: "Sales Manager Candidate",
    company: "Nova Media Lab",
  },
  pillars: [
    {
      label: "Akuisisi Pasar",
      enLabel: "Market Acquisition",
      desc: "Mengidentifikasi dan mengonversi prospek UKM yang sesuai melalui pendekatan audit digital dan solusi bernilai bisnis.",
    },
    {
      label: "Pengembangan Tim",
      enLabel: "Team Development",
      desc: "Bertransformasi dari eksekusi individual menjadi organisasi BD dan sales yang terstruktur serta dapat direplikasi.",
    },
    {
      label: "Pertumbuhan Pendapatan",
      enLabel: "Revenue Growth",
      desc: "Membangun hubungan klien jangka panjang, retensi sehat, dan performa penjualan berulang yang terukur.",
    },
  ],
};

export const slideDataEn = {
  company: "Nova Media Lab",
  presentationTitle: "Sales Management & Market Expansion Strategy",
  title: "BUILD THE MARKET — GO TO GROWTH",
  titleLine1: "BUILD THE MARKET",
  titleLine2: "",
  titleLine3: "GO TO GROWTH",
  subtitle:
    "Nova Media Lab's growth strategy starts by building a customer base in Tangerang, developing a sales team across Tangerang and Jakarta, and then expanding operations across Jabodetabek.",
  presenter: {
    name: "Harry Gultom",
    role: "Sales Manager Candidate",
    company: "Nova Media Lab",
  },
  pillars: [
    {
      label: "Market Acquisition",
      enLabel: "Market Acquisition",
      desc: "Identify and convert suitable SME prospects through structured digital presence audits and business-value conversations.",
    },
    {
      label: "Team Development",
      enLabel: "Team Development",
      desc: "Transition from individual selling into a repeatable, coached BD and sales organization.",
    },
    {
      label: "Revenue Growth",
      enLabel: "Revenue Growth",
      desc: "Build recurring client relationships, sustainable retention, and measurable sales performance.",
    },
  ],
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 1,
  folder: "01",
  sectionId: 0,
  navTitle: {
    in: "Executive Summary",
    en: "Executive Summary",
  },
  headerTitle: {
    in: "Executive Summary — Nova Media Lab",
    en: "Executive Summary — Nova Media Lab",
  },
  category: {
    in: "Executive Summary",
    en: "Executive Summary",
  },
  section: {
    in: "Cover",
    en: "Cover",
  },
};
