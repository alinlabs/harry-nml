import { useLanguage } from '@/contexts/LanguageContext';

export const slideDataId = {
  company: "Nova Media Lab",
  presentationTitle: "Sales Management & Market Expansion Strategy",
  titleLine1: "BUILD THE MARKET",
  titleLine2: "GO TO GROWTH",
  optimisticSlogan:
    "Dengan eksekusi yang terarah dan tim yang solid, kita siap membangun pertumbuhan nyata dan berkelanjutan bagi Nova Media Lab.",
  presenter: {
    name: "Harry Gultom",
    role: "Sales Manager Candidate",
    company: "Nova Media Lab",
  },
};

export const slideDataEn = {
  company: "Nova Media Lab",
  presentationTitle: "Sales Management & Market Expansion Strategy",
  titleLine1: "BUILD THE MARKET",
  titleLine2: "GO TO GROWTH",
  optimisticSlogan:
    "With disciplined execution and a dedicated team, we are ready to build lasting, meaningful growth for Nova Media Lab.",
  presenter: {
    name: "Harry Gultom",
    role: "Sales Manager Candidate",
    company: "Nova Media Lab",
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
  slideNumber: 6,
  folder: "07",
  sectionId: 4,
  navTitle: {
    in: "Pernyataan Penutup",
    en: "Closing Statement",
  },
  headerTitle: {
    in: "Pernyataan Penutup",
    en: "Closing Statement",
  },
  category: {
    in: "Penutup & Komitmen",
    en: "Closing & Commitment",
  },
  section: {
    in: "Penutup & Komitmen",
    en: "Closing & Commitment",
  },
};
