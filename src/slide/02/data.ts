import { useLanguage } from '@/contexts/LanguageContext';

export type CompetitorTabId = 'campaign' | 'market' | 'pricing';

export interface CompetitorEntry {
  id: 'adsfort' | 'ads-digital-partner' | 'redcomm' | 'nova-media-lab';
  name: string;
  tag: string;
  isOurPosition?: boolean;
  logoUrl?: string;
  campaign: {
    headline: string;
    detail: string;
  };
  pricing: {
    headline: string;
    detail: string;
  };
  market: {
    headline: string;
    detail: string;
  };
}

export const slideDataId = {
  badge: "Bagian 2 • Intelijen Pasar & Positioning",
  title: "COMPETITOR RESEARCH & BRAND POSITIONING",
  subtitle: "Perbandingan lanskap kompetitor berdasarkan gaya campaign, target market, dan rate harga.",
  tabs: [
    {
      id: "campaign" as CompetitorTabId,
      label: "Campaign",
      aspectTitle: "Aspek Perbandingan: Gaya & Fokus Campaign",
    },
    {
      id: "market" as CompetitorTabId,
      label: "Market",
      aspectTitle: "Aspek Perbandingan: Pangsa Pasar & Target Klien",
    },
    {
      id: "pricing" as CompetitorTabId,
      label: "Harga",
      aspectTitle: "Aspek Perbandingan: Rate Harga & Kategori",
    },
  ],
  competitors: [
    {
      id: "nova-media-lab",
      name: "Nova Media Lab",
      tag: "Posisi Kita",
      isOurPosition: true,
      campaign: {
        headline: "Transparansi Penuh & Konversi Lokal",
        detail:
          "Fokus mendatangkan pelanggan nyata lewat paket siap pakai untuk mendominasi pencarian lokal (Google Maps), konten rutin, dan iklan berbayar.",
      },
      pricing: {
        headline: "Rp1.500.000 – Rp7.000.000 / paket atau bulan",
        detail:
          "Relatif sangat terjangkau dan transparan dengan skema tarif tetap (flat rate) tanpa biaya tersembunyi.",
      },
      market: {
        headline: "Bisnis Lokal & UMKM Berkembang",
        detail:
          "Usaha seperti klinik, kafe, resto, salon, hingga properti yang membutuhkan arus pelanggan rutin dengan biaya terprediksi.",
      },
    },
    {
      id: "adsfort",
      name: "Adsfort",
      tag: "Kompetitor",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjSP28AFryt0-Im2QDjbCRESdK9YXfA5qG4KYSsC3-A&s=10",
      campaign: {
        headline: "Garansi Viral & Konten Drama",
        detail:
          "Menggunakan penawaran berani berupa Garansi Uang Kembali jika video tidak viral, berfokus pada produksi drama pendek untuk mendongkrak views dan organic reach.",
      },
      pricing: {
        headline: "Rp1.000.000 – Rp15.000.000 / paket",
        detail:
          "Relatif terjangkau hingga menengah dengan sistem beli putus per paket konten atau paket khusus garansi viral.",
      },
      market: {
        headline: "UMKM Nasional & Brand D2C",
        detail:
          "Pebisnis online yang mengejar lonjakan brand awareness dan views jutaan secara cepat dengan risiko minim.",
      },
    },
    {
      id: "ads-digital-partner",
      name: "ADS Digital Partner",
      tag: "Kompetitor",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVyc2et05KJPNl9NjA74Ri4OSu_6nlgdjBOeiVOoh2-edt2VtFsK74Z8T&s=10",
      campaign: {
        headline: "Performance Marketing & Martech",
        detail:
          "Fokus pada eksekusi iklan berbayar terukur (Google, Meta, TikTok Ads), optimasi funnel penjualan, serta integrasi data dan analitik konversi.",
      },
      pricing: {
        headline: "Rp15.000.000 – Rp50.000.000+ / bulan",
        detail:
          "Relatif mahal (premium) dengan sistem custom retainer atau persentase management fee dari anggaran iklan.",
      },
      market: {
        headline: "Startup, Tech, & Perusahaan Menengah-Besar",
        detail:
          "Bisnis beranggaran iklan besar yang membutuhkan akselerasi leads dan skalabilitas trafik digital.",
      },
    },
    {
      id: "redcomm",
      name: "REDComm Indonesia",
      tag: "Kompetitor",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnqrCoHVQAGMncvT3VsktJVhJwH2E8H8Nch4iODPh0BSqMqt2pluZdes&s=10",
      campaign: {
        headline: "Integrated Full-Funnel & AI Content",
        detail:
          "Kampanye digital terpadu berskala besar yang menggabungkan manajemen media sosial, SEO berbasis AI, dan media buying jangka panjang.",
      },
      pricing: {
        headline: "Rp5.000.000 – Rp200.000.000 / bulan",
        detail:
          "Relatif menengah ke atas hingga sangat mahal menyesuaikan skala kebutuhan dari UKM hingga korporasi besar.",
      },
      market: {
        headline: "Korporasi Menengah hingga Enterprise",
        detail:
          "Merek mapan dan perusahaan nasional yang membutuhkan dukungan tim agensi multidivisi berskala penuh.",
      },
    },
  ] as CompetitorEntry[],
  proposedPositioning: {
    badge: "Posisi Brand Nova Media Lab",
    statementLine1: "Partner Pertumbuhan Digital",
    statementLine2: "untuk Bisnis Lokal dan UMKM Berkembang",
    supportingNote:
      "Menghubungkan visibilitas pencarian lokal (Google Maps), konten rutin, dan iklan terukur dalam skema biaya transparan dan terjangkau.",
  },
  positioningByTab: {
    campaign: {
      badge: "Posisi Brand Nova Media Lab • Aspek Campaign",
      statementLine1: "Konversi Lokal dan Konten Rutin Terukur",
      statementLine2: "Fokus Pelanggan Nyata Bukan Viral Sesaat",
      supportingNote:
        "Menggabungkan dominasi Google Maps, produksi konten rutin, dan iklan berbayar yang langsung mendorong kunjungan serta leads nyata bagi bisnis lokal.",
    },
    market: {
      badge: "Posisi Brand Nova Media Lab • Aspek Market",
      statementLine1: "Partner Pertumbuhan Digital",
      statementLine2: "Khusus Bisnis Lokal dan UMKM Berkembang",
      supportingNote:
        "Mengisi celah antara agensi konten online umum dan agensi enterprise dengan fokus khusus pada klinik, resto, kafe, barbershop, hingga konstruksi lokal.",
    },
    pricing: {
      badge: "Posisi Brand Nova Media Lab • Aspek Harga",
      statementLine1: "Tarif Tetap Transparan Rp1,5 Juta hingga Rp7 Juta",
      statementLine2: "Kepastian Anggaran Tanpa Biaya Tersembunyi",
      supportingNote:
        "Memberikan kepastian anggaran bulanan yang realistis bagi bisnis lokal, jauh lebih terjangkau dibanding retainer agensi besar Rp15 juta hingga Rp200 juta ke atas.",
    },
  } as Record<
    CompetitorTabId,
    { badge: string; statementLine1: string; statementLine2: string; supportingNote: string }
  >,
};

export const slideDataEn = {
  badge: "Part 2 • Market Intelligence & Positioning",
  title: "COMPETITOR RESEARCH & BRAND POSITIONING",
  subtitle: "Comparing the competitive landscape across campaign focus, target markets, and pricing tiers.",
  tabs: [
    {
      id: "campaign" as CompetitorTabId,
      label: "Campaign",
      aspectTitle: "Comparison Dimension: Campaign Style & Focus",
    },
    {
      id: "market" as CompetitorTabId,
      label: "Market",
      aspectTitle: "Comparison Dimension: Market Segment & Target Clients",
    },
    {
      id: "pricing" as CompetitorTabId,
      label: "Pricing",
      aspectTitle: "Comparison Dimension: Pricing Rate & Category",
    },
  ],
  competitors: [
    {
      id: "nova-media-lab",
      name: "Nova Media Lab",
      tag: "Our Position",
      isOurPosition: true,
      campaign: {
        headline: "Full Transparency & Local Conversion",
        detail:
          "Focused on bringing real customers through ready-to-deploy packages dominating local search (Google Maps), consistent content, and paid ads.",
      },
      pricing: {
        headline: "IDR 1,500,000 – IDR 7,000,000 / package or month",
        detail:
          "Highly accessible and transparent with predictable flat-rate pricing and zero hidden fees.",
      },
      market: {
        headline: "Local Businesses & Growing SMEs",
        detail:
          "Clinics, cafes, restaurants, salons, and property businesses seeking steady customer flow at predictable costs.",
      },
    },
    {
      id: "adsfort",
      name: "Adsfort",
      tag: "Competitor",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjSP28AFryt0-Im2QDjbCRESdK9YXfA5qG4KYSsC3-A&s=10",
      campaign: {
        headline: "Viral Guarantee & Drama Content",
        detail:
          "Uses bold money-back guarantee offers if videos do not go viral, focusing on short drama production to drive views and organic reach.",
      },
      pricing: {
        headline: "IDR 1,000,000 – IDR 15,000,000 / package",
        detail:
          "Affordable to mid-tier with one-off content package pricing or specialized viral-guarantee packages.",
      },
      market: {
        headline: "National SMEs & D2C Brands",
        detail:
          "Online merchants seeking rapid brand awareness spikes and high view volume with lower perceived upfront risk.",
      },
    },
    {
      id: "ads-digital-partner",
      name: "ADS Digital Partner",
      tag: "Competitor",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVyc2et05KJPNl9NjA74Ri4OSu_6nlgdjBOeiVOoh2-edt2VtFsK74Z8T&s=10",
      campaign: {
        headline: "Performance Marketing & Martech",
        detail:
          "Focuses on measurable paid advertising execution (Google, Meta, TikTok Ads), sales funnel optimization, data integration, and conversion analytics.",
      },
      pricing: {
        headline: "IDR 15,000,000 – IDR 50,000,000+ / month",
        detail:
          "Premium pricing using custom retainers or a percentage management fee based on advertising spend.",
      },
      market: {
        headline: "Startups, Tech & Mid-to-Large Enterprises",
        detail:
          "High-ad-spend organizations requiring rapid lead acceleration and scalable digital traffic.",
      },
    },
    {
      id: "redcomm",
      name: "REDComm Indonesia",
      tag: "Competitor",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnqrCoHVQAGMncvT3VsktJVhJwH2E8H8Nch4iODPh0BSqMqt2pluZdes&s=10",
      campaign: {
        headline: "Integrated Full-Funnel & AI Content",
        detail:
          "Large-scale integrated digital campaigns combining social media management, AI-assisted SEO, and long-term media buying.",
      },
      pricing: {
        headline: "IDR 5,000,000 – IDR 200,000,000 / month",
        detail:
          "Upper-mid to enterprise pricing scaling across service complexity from growing SMEs to major corporations.",
      },
      market: {
        headline: "Mid-Market Corporations to Enterprise",
        detail:
          "Established brands and national enterprises needing full multi-division agency support.",
      },
    },
  ] as CompetitorEntry[],
  proposedPositioning: {
    badge: "Nova Media Lab Brand Positioning",
    statementLine1: "Digital Growth Partner",
    statementLine2: "for Local Businesses and Growing SMEs",
    supportingNote:
      "Uniting local search visibility (Google Maps), consistent content, and paid advertising under transparent, predictable pricing.",
  },
  positioningByTab: {
    campaign: {
      badge: "Nova Media Lab Brand Position • Campaign Focus",
      statementLine1: "Local Conversion and Consistent Measurable Content",
      statementLine2: "Built for Real Customers Beyond Viral Hype",
      supportingNote:
        "Combining Google Maps dominance, routine content production, and targeted paid ads to drive real foot traffic and qualified local leads.",
    },
    market: {
      badge: "Nova Media Lab Brand Position • Target Market",
      statementLine1: "Dedicated Digital Growth Partner",
      statementLine2: "Tailored for Local Businesses and Growing SMEs",
      supportingNote:
        "Bridging the gap between generic online-seller packages and enterprise retainers by serving clinics, restaurants, cafes, barbers, and local builders.",
    },
    pricing: {
      badge: "Nova Media Lab Brand Position • Pricing Strategy",
      statementLine1: "Transparent Flat Rate IDR 1.5M to 7M",
      statementLine2: "Predictable Budgeting with Zero Hidden Fees",
      supportingNote:
        "Gives local businesses predictable monthly budgeting, far more accessible than IDR 15M to 200M+ enterprise retainers while staying structured.",
    },
  } as Record<
    CompetitorTabId,
    { badge: string; statementLine1: string; statementLine2: string; supportingNote: string }
  >,
};

export const getSlideData = (lang: 'id' | 'en' = 'id') => (lang === 'en' ? slideDataEn : slideDataId);

export function useSlideData() {
  const { language } = useLanguage();
  return language === 'en' ? slideDataEn : slideDataId;
}

export const slideData = slideDataId;
export default slideData;

export const slideMeta = {
  slideNumber: 2,
  folder: "02",
  sectionId: 1,
  navTitle: {
    in: "Riset Kompetitor & Positioning",
    en: "Competitor & Positioning",
  },
  headerTitle: {
    in: "Riset Kompetitor & Posisi Brand",
    en: "Competitor Research & Brand Positioning",
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
