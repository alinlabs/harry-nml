import { useLanguage } from '@/contexts/LanguageContext';

export type TerritoryPhaseId = 'phase1' | 'phase2' | 'phase3';

export type MapCategoryId =
  | 'semua'
  | 'klinik'
  | 'resto'
  | 'cafe'
  | 'barber'
  | 'konstruksi';

export interface MapCategoryTab {
  id: MapCategoryId;
  labelId: string;
  labelEn: string;
  color: string;
}

export interface TargetCategoryPoint {
  id: string;
  companyName: string;
  areaName: string;
  minPhase: 1 | 2 | 3;
  lat: number;
  lng: number;
  category: Exclude<MapCategoryId, 'semua'>;
}

export interface FocusAreaTab {
  id: TerritoryPhaseId;
  phaseNum: 1 | 2 | 3;
  tabLabel: string;
  heading: string;
  description: string;
  areas: string[];
  clustersLabel: string;
}

export interface TerritoryNode {
  id: string;
  name: string;
  group: 'tangerang' | 'jakarta' | 'bodetabek';
  minPhase: 1 | 2 | 3;
  lat: number;
  lng: number;
  radiusMeters: number;
  note: string;
}

export interface ClusterSubArea {
  id: string;
  name: string;
  parent: string;
  lat: number;
  lng: number;
}

export interface ProspectExampleRow {
  businessName: string;
  industry: string;
  area: string;
  digitalProfile: string;
  decisionMakerStatus: string;
  digitalAuditSummary: string;
  budgetQualification: string;
  pipelineStage: string;
}

export const TERRITORY_NODES: TerritoryNode[] = [
  // Phase 1: Tangerang Raya
  {
    id: 'kota-tangerang',
    name: 'Kota Tangerang',
    group: 'tangerang',
    minPhase: 1,
    lat: -6.1783,
    lng: 106.6319,
    radiusMeters: 6200,
    note: 'Area Target Fase 1 (Bulan 1–3)',
  },
  {
    id: 'kab-tangerang',
    name: 'Kabupaten Tangerang',
    group: 'tangerang',
    minPhase: 1,
    lat: -6.202,
    lng: 106.51,
    radiusMeters: 9500,
    note: 'Area Target Fase 1 (Bulan 1–3)',
  },
  {
    id: 'tangsel',
    name: 'Tangerang Selatan',
    group: 'tangerang',
    minPhase: 1,
    lat: -6.2886,
    lng: 106.7179,
    radiusMeters: 6800,
    note: 'Area Target Fase 1 (Bulan 1–3)',
  },
  // Phase 2: 5 Administrative Areas of Jakarta
  {
    id: 'jakbar',
    name: 'Jakarta Barat',
    group: 'jakarta',
    minPhase: 2,
    lat: -6.1674,
    lng: 106.7637,
    radiusMeters: 5200,
    note: 'Area Target Fase 2 (Bulan 3–6)',
  },
  {
    id: 'jaksel',
    name: 'Jakarta Selatan',
    group: 'jakarta',
    minPhase: 2,
    lat: -6.2615,
    lng: 106.8106,
    radiusMeters: 5500,
    note: 'Area Target Fase 2 (Bulan 3–6)',
  },
  {
    id: 'jakpus',
    name: 'Jakarta Pusat',
    group: 'jakarta',
    minPhase: 2,
    lat: -6.1865,
    lng: 106.8341,
    radiusMeters: 4200,
    note: 'Area Target Fase 2 (Bulan 3–6)',
  },
  {
    id: 'jakut',
    name: 'Jakarta Utara',
    group: 'jakarta',
    minPhase: 2,
    lat: -6.1384,
    lng: 106.8739,
    radiusMeters: 5400,
    note: 'Area Target Fase 2 (Bulan 3–6)',
  },
  {
    id: 'jaktim',
    name: 'Jakarta Timur',
    group: 'jakarta',
    minPhase: 2,
    lat: -6.225,
    lng: 106.9004,
    radiusMeters: 6000,
    note: 'Area Target Fase 2 (Bulan 3–6)',
  },
  // Phase 3: Bekasi, Depok, Bogor
  {
    id: 'kota-bekasi',
    name: 'Kota Bekasi',
    group: 'bodetabek',
    minPhase: 3,
    lat: -6.2383,
    lng: 106.9756,
    radiusMeters: 6200,
    note: 'Area Target Fase 3 (Bulan 7+)',
  },
  {
    id: 'kab-bekasi',
    name: 'Kabupaten Bekasi',
    group: 'bodetabek',
    minPhase: 3,
    lat: -6.263,
    lng: 107.12,
    radiusMeters: 8500,
    note: 'Area Target Fase 3 (Bulan 7+)',
  },
  {
    id: 'depok',
    name: 'Depok',
    group: 'bodetabek',
    minPhase: 3,
    lat: -6.4025,
    lng: 106.7942,
    radiusMeters: 6200,
    note: 'Area Target Fase 3 (Bulan 7+)',
  },
  {
    id: 'kota-bogor',
    name: 'Kota Bogor',
    group: 'bodetabek',
    minPhase: 3,
    lat: -6.5971,
    lng: 106.806,
    radiusMeters: 5500,
    note: 'Area Target Fase 3 (Bulan 7+)',
  },
  {
    id: 'kab-bogor',
    name: 'Kabupaten Bogor',
    group: 'bodetabek',
    minPhase: 3,
    lat: -6.495,
    lng: 106.87,
    radiusMeters: 8500,
    note: 'Area Target Fase 3 (Bulan 7+)',
  },
];

export const TANGERANG_CLUSTERS: ClusterSubArea[] = [
  { id: 'bsd', name: 'BSD', parent: 'Tangerang Selatan / Kab. Tangerang', lat: -6.3024, lng: 106.6522 },
  { id: 'gading-serpong', name: 'Gading Serpong', parent: 'Kabupaten Tangerang', lat: -6.2428, lng: 106.6285 },
  { id: 'alam-sutera', name: 'Alam Sutera', parent: 'Kota Tangerang / Tangsel', lat: -6.2244, lng: 106.6552 },
  { id: 'karawaci', name: 'Karawaci', parent: 'Kota Tangerang / Kab. Tangerang', lat: -6.2236, lng: 106.6075 },
  { id: 'bintaro', name: 'Bintaro', parent: 'Tangerang Selatan', lat: -6.2775, lng: 106.731 },
];

export const MAP_CATEGORY_TABS: MapCategoryTab[] = [
  { id: 'semua', labelId: 'Semua', labelEn: 'All', color: '#334155' },
  { id: 'klinik', labelId: 'Klinik', labelEn: 'Clinic', color: '#ec4899' },
  { id: 'resto', labelId: 'Resto', labelEn: 'Resto', color: '#ef4444' },
  { id: 'cafe', labelId: 'Cafe', labelEn: 'Cafe', color: '#92400e' },
  { id: 'barber', labelId: 'Barber', labelEn: 'Barber', color: '#2563eb' },
  { id: 'konstruksi', labelId: 'Konstruksi', labelEn: 'Construction', color: '#eab308' },
];

export const TARGET_CATEGORY_POINTS: TargetCategoryPoint[] = [
  // === PHASE 1: TANGERANG (76 Perusahaan Terverifikasi) ===
  // Klinik (Pink)
  { id: 'kl-1-1', companyName: 'Erha Clinic BSD', areaName: 'Lengkong Gudang, BSD City', minPhase: 1, lat: -6.29255, lng: 106.66563, category: 'klinik' },
  { id: 'kl-1-2', companyName: 'Klinik Amira BSD', areaName: 'Rawa Buntu, BSD City', minPhase: 1, lat: -6.30912, lng: 106.67959, category: 'klinik' },
  { id: 'kl-1-3', companyName: 'Sozo Skin Clinic BSD', areaName: 'Pasar Modern Timur 2, BSD City', minPhase: 1, lat: -6.3045, lng: 106.68483, category: 'klinik' },
  { id: 'kl-1-4', companyName: 'Klinik Estetika dr. Affandi BSD', areaName: 'Jl. Pahlawan Seribu, BSD City', minPhase: 1, lat: -6.2968, lng: 106.6668, category: 'klinik' },
  { id: 'kl-1-5', companyName: 'Klinik Sehat Plus BSD', areaName: 'Rawa Buntu, BSD City', minPhase: 1, lat: -6.30384, lng: 106.68596, category: 'klinik' },
  { id: 'kl-1-6', companyName: 'Bio Medika Gading Serpong', areaName: 'Paramount Centre, Gading Serpong', minPhase: 1, lat: -6.24617, lng: 106.62298, category: 'klinik' },
  { id: 'kl-1-7', companyName: 'Claudia Aesthetic Clinic', areaName: 'Boulevard Raya, Gading Serpong', minPhase: 1, lat: -6.24375, lng: 106.62884, category: 'klinik' },
  { id: 'kl-1-8', companyName: 'Klinik Ayoda Alam Sutera', areaName: 'Crystal Lane, Alam Sutera', minPhase: 1, lat: -6.2248, lng: 106.6524, category: 'klinik' },
  { id: 'kl-1-9', companyName: 'Lumina Aesthetics Clinic', areaName: 'Jalur Sutera, Alam Sutera', minPhase: 1, lat: -6.23469, lng: 106.65983, category: 'klinik' },
  { id: 'kl-1-10', companyName: 'ZAP Clinic Bintaro', areaName: 'Bintaro Jaya Xchange, Tangsel', minPhase: 1, lat: -6.28481, lng: 106.72736, category: 'klinik' },
  { id: 'kl-1-11', companyName: 'Blink Beauty Clinic Bintaro', areaName: 'Bintaro Jaya Sektor 7, Tangsel', minPhase: 1, lat: -6.28193, lng: 106.72933, category: 'klinik' },
  { id: 'kl-1-12', companyName: 'HAYYU Skin Clinic Tangerang', areaName: 'Sukasari, Kota Tangerang', minPhase: 1, lat: -6.1822, lng: 106.6378, category: 'klinik' },
  { id: 'kl-1-13', companyName: 'Kusuma Beauty Clinic Tangerang', areaName: 'Modernland, Kota Tangerang', minPhase: 1, lat: -6.1972, lng: 106.6442, category: 'klinik' },
  { id: 'kl-1-14', companyName: 'Aesthetic Clinic Mayapada Tangerang', areaName: 'Kota Modern, Kota Tangerang', minPhase: 1, lat: -6.1965, lng: 106.6392, category: 'klinik' },
  { id: 'kl-1-15', companyName: 'Klinik Kimia Farma Tangerang', areaName: 'Jl. Daan Mogot, Kota Tangerang', minPhase: 1, lat: -6.16789, lng: 106.6376, category: 'klinik' },
  { id: 'kl-1-16', companyName: 'Klinik Utama Siloam Karawaci', areaName: 'Lippo Village, Karawaci', minPhase: 1, lat: -6.22885, lng: 106.60651, category: 'klinik' },

  // Resto (Merah)
  { id: 're-1-17', companyName: 'Kayu-Kayu Restaurant', areaName: 'Jalur Sutera, Alam Sutera', minPhase: 1, lat: -6.2265, lng: 106.6548, category: 'resto' },
  { id: 're-1-18', companyName: 'Kayu Manis Resto (Hotel Tentrem)', areaName: 'Alam Sutera, Tangsel', minPhase: 1, lat: -6.24306, lng: 106.65638, category: 'resto' },
  { id: 're-1-19', companyName: 'Bandar Djakarta Alam Sutera', areaName: 'Flavor Bliss, Alam Sutera', minPhase: 1, lat: -6.24209, lng: 106.65155, category: 'resto' },
  { id: 're-1-20', companyName: 'Seporsi Mie Kari', areaName: 'Alam Sutera / Gading Serpong', minPhase: 1, lat: -6.23861, lng: 106.65245, category: 'resto' },
  { id: 're-1-21', companyName: 'Kaiia Gading Serpong', areaName: 'Maggiore, Gading Serpong', minPhase: 1, lat: -6.25419, lng: 106.63242, category: 'resto' },
  { id: 're-1-22', companyName: 'Bipang Ambawang Gading Serpong', areaName: 'Hampton Square, Gading Serpong', minPhase: 1, lat: -6.24694, lng: 106.61312, category: 'resto' },
  { id: 're-1-23', companyName: 'Kuilo Coffee & Kitchen', areaName: 'BSD City, Tangerang', minPhase: 1, lat: -6.29336, lng: 106.63379, category: 'resto' },
  { id: 're-1-24', companyName: 'Gubug Makan Mang Engking BSD', areaName: 'The Breeze, BSD City', minPhase: 1, lat: -6.30126, lng: 106.65437, category: 'resto' },
  { id: 're-1-25', companyName: 'Lembur Kuring BSD', areaName: 'Sunburst CBD, BSD City', minPhase: 1, lat: -6.29906, lng: 106.66519, category: 'resto' },
  { id: 're-1-26', companyName: 'Talaga Sampireun Bintaro', areaName: 'Bintaro Jaya Sektor 7, Tangsel', minPhase: 1, lat: -6.28154, lng: 106.73109, category: 'resto' },
  { id: 're-1-27', companyName: 'Lot 9 Cafe & Restaurant', areaName: 'Bintaro Sektor 7, Tangsel', minPhase: 1, lat: -6.2775, lng: 106.7235, category: 'resto' },
  { id: 're-1-28', companyName: 'Double U Steak by Chef Widhi', areaName: 'Bintaro, Tangerang Selatan', minPhase: 1, lat: -6.2795, lng: 106.7115, category: 'resto' },
  { id: 're-1-29', companyName: 'Sate Khas Senayan Karawaci', areaName: 'Supermal Karawaci, Tangerang', minPhase: 1, lat: -6.22672, lng: 106.60723, category: 'resto' },
  { id: 're-1-30', companyName: 'Myeong Ga Myeon Ok', areaName: 'Ruko Pinangsia, Karawaci', minPhase: 1, lat: -6.22347, lng: 106.6213, category: 'resto' },
  { id: 're-1-31', companyName: 'Bakmi Gang Kelinci Pasar Lama', areaName: 'Pasar Lama, Kota Tangerang', minPhase: 1, lat: -6.17866, lng: 106.63027, category: 'resto' },
  { id: 're-1-32', companyName: 'Istana Nelayan Restaurant', areaName: 'Kebon Nanas, Kota Tangerang', minPhase: 1, lat: -6.2125, lng: 106.6285, category: 'resto' },
  { id: 're-1-33', companyName: 'Laksa Tangerang Ny. Nasir', areaName: 'Kota Tangerang', minPhase: 1, lat: -6.1865, lng: 106.6335, category: 'resto' },
  { id: 're-1-34', companyName: 'Saung Pancoran Pamulang', areaName: 'Pamulang, Tangerang Selatan', minPhase: 1, lat: -6.3467, lng: 106.74541, category: 'resto' },
  { id: 're-1-35', companyName: 'Oase at Aria', areaName: 'Ciputat, Tangerang Selatan', minPhase: 1, lat: -6.31371, lng: 106.74466, category: 'resto' },
  { id: 're-1-36', companyName: 'Warung Kondre', areaName: 'Cipayung, Ciputat', minPhase: 1, lat: -6.32722, lng: 106.7549, category: 'resto' },

  // Cafe (Coklat)
  { id: 'ca-1-37', companyName: 'After Friday Coffee', areaName: 'The Breeze / BSD City, Tangsel', minPhase: 1, lat: -6.3005, lng: 106.6525, category: 'cafe' },
  { id: 'ca-1-38', companyName: 'Eternal Coffee BSD', areaName: 'QBig area, BSD City', minPhase: 1, lat: -6.28374, lng: 106.63622, category: 'cafe' },
  { id: 'ca-1-39', companyName: 'Sully\'s Homemade', areaName: 'The Loop, BSD City', minPhase: 1, lat: -6.29089, lng: 106.63296, category: 'cafe' },
  { id: 'ca-1-40', companyName: 'Intro Jazz Bistro & Cafe', areaName: 'Sunburst CBD, BSD City', minPhase: 1, lat: -6.29865, lng: 106.66685, category: 'cafe' },
  { id: 'ca-1-41', companyName: 'Papan Hobbies Cafe', areaName: 'ICE area, BSD City', minPhase: 1, lat: -6.3012, lng: 106.6365, category: 'cafe' },
  { id: 'ca-1-42', companyName: 'Kopi Nako Alam Sutera', areaName: 'Alam Sutera, Tangsel', minPhase: 1, lat: -6.2411, lng: 106.65331, category: 'cafe' },
  { id: 'ca-1-43', companyName: '1/15 Coffee Alam Sutera', areaName: 'Brooklyn, Alam Sutera', minPhase: 1, lat: -6.23868, lng: 106.65753, category: 'cafe' },
  { id: 'ca-1-44', companyName: 'Canabeans Coffee', areaName: 'Alam Sutera, Tangerang', minPhase: 1, lat: -6.24183, lng: 106.65656, category: 'cafe' },
  { id: 'ca-1-45', companyName: 'Noolstrala Coffee', areaName: 'Gading Serpong, Tangerang', minPhase: 1, lat: -6.24578, lng: 106.62474, category: 'cafe' },
  { id: 'ca-1-46', companyName: 'Monkeyhead Roastery', areaName: 'Gading Serpong, Tangerang', minPhase: 1, lat: -6.24067, lng: 106.62857, category: 'cafe' },
  { id: 'ca-1-47', companyName: 'Maison Tatei', areaName: 'Bintaro Sektor 9, Tangsel', minPhase: 1, lat: -6.2768, lng: 106.7165, category: 'cafe' },
  { id: 'ca-1-48', companyName: 'BCKYRD Coffee (The Backyard)', areaName: 'Pondok Aren, Bintaro', minPhase: 1, lat: -6.28311, lng: 106.69949, category: 'cafe' },
  { id: 'ca-1-49', companyName: 'Kopi Praja Bintaro', areaName: 'Bintaro Sektor 9, Tangsel', minPhase: 1, lat: -6.28365, lng: 106.71334, category: 'cafe' },
  { id: 'ca-1-50', companyName: 'Jurnal Risa Coffee Bintaro', areaName: 'Bintaro Jaya, Tangsel', minPhase: 1, lat: -6.27308, lng: 106.7125, category: 'cafe' },
  { id: 'ca-1-51', companyName: 'Kopiluvium Pamulang', areaName: 'Pamulang, Tangerang Selatan', minPhase: 1, lat: -6.3422, lng: 106.7375, category: 'cafe' },
  { id: 'ca-1-52', companyName: 'Bersenyawa Coffee', areaName: 'Pamulang, Tangerang Selatan', minPhase: 1, lat: -6.34562, lng: 106.73484, category: 'cafe' },
  { id: 'ca-1-53', companyName: 'Kopi Nako Ciputat', areaName: 'Ciputat, Tangerang Selatan', minPhase: 1, lat: -6.30127, lng: 106.77424, category: 'cafe' },
  { id: 'ca-1-54', companyName: 'Sajiva Coffee & Ceramics', areaName: 'Lippo Karawaci, Tangerang', minPhase: 1, lat: -6.2269, lng: 106.60864, category: 'cafe' },
  { id: 'ca-1-55', companyName: 'Coffee Rider Pasar Lama', areaName: 'Pasar Lama, Kota Tangerang', minPhase: 1, lat: -6.1765, lng: 106.6285, category: 'cafe' },
  { id: 'ca-1-56', companyName: 'Black Campaign Tangerang', areaName: 'Jl. MT Haryono, Kota Tangerang', minPhase: 1, lat: -6.1755, lng: 106.6345, category: 'cafe' },
  { id: 'ca-1-57', companyName: 'Sa.Tuang Coffee', areaName: 'Banjar Wijaya, Cipondoh', minPhase: 1, lat: -6.2045, lng: 106.6615, category: 'cafe' },

  // Barber (Biru)
  { id: 'ba-1-58', companyName: 'Tohang\'s Barber', areaName: 'Ruko Versailles, BSD', minPhase: 1, lat: -6.30727, lng: 106.67408, category: 'barber' },
  { id: 'ba-1-59', companyName: 'Di Bawah Pohon Barber & Shop', areaName: 'Griya Loka, BSD Sektor 1', minPhase: 1, lat: -6.30575, lng: 106.67952, category: 'barber' },
  { id: 'ba-1-60', companyName: 'Gans Barbershop', areaName: 'Golden Boulevard, BSD', minPhase: 1, lat: -6.27676, lng: 106.66446, category: 'barber' },
  { id: 'ba-1-61', companyName: 'Scissorhand & Clipperhand', areaName: 'Golden 8, Gading Serpong', minPhase: 1, lat: -6.2458, lng: 106.6335, category: 'barber' },
  { id: 'ba-1-62', companyName: 'Captain Barbershop Gading Serpong', areaName: 'Sorrento, Gading Serpong', minPhase: 1, lat: -6.26195, lng: 106.63138, category: 'barber' },
  { id: 'ba-1-63', companyName: 'Jack\'s Barbershop', areaName: 'Kelapa Gading Selatan, Serpong', minPhase: 1, lat: -6.23902, lng: 106.6341, category: 'barber' },
  { id: 'ba-1-64', companyName: 'Barcoes Barber & Coffee', areaName: 'Neo Arcade, Gading Serpong', minPhase: 1, lat: -6.2425, lng: 106.6215, category: 'barber' },
  { id: 'ba-1-65', companyName: 'Jakarta Barbershop (JBS)', areaName: 'Bintaro Taman Barat, Tangsel', minPhase: 1, lat: -6.27223, lng: 106.75624, category: 'barber' },
  { id: 'ba-1-66', companyName: 'Captain Barbershop Bintaro', areaName: 'Bintaro Plaza, Tangsel', minPhase: 1, lat: -6.2725, lng: 106.74229, category: 'barber' },
  { id: 'ba-1-67', companyName: 'Captain Barbershop Tangcity', areaName: 'Cikokol, Kota Tangerang', minPhase: 1, lat: -6.1932, lng: 106.6332, category: 'barber' },

  // Konstruksi (Kuning)
  { id: 'ko-1-68', companyName: 'Vimonia Bangun Jaya', areaName: 'Ruko Bolsena, Gading Serpong', minPhase: 1, lat: -6.25985, lng: 106.62032, category: 'konstruksi' },
  { id: 'ko-1-69', companyName: 'PT Richindo Cipta Mandiri', areaName: 'Gading Serpong, Kab. Tangerang', minPhase: 1, lat: -6.2435, lng: 106.6365, category: 'konstruksi' },
  { id: 'ko-1-70', companyName: 'Intermulti Kreasi', areaName: 'Foresta Business Loft, BSD', minPhase: 1, lat: -6.29592, lng: 106.64065, category: 'konstruksi' },
  { id: 'ko-1-71', companyName: 'PT Intinusa Persada (Persada Interior)', areaName: 'Alam Sutera, Tangsel', minPhase: 1, lat: -6.2225, lng: 106.6515, category: 'konstruksi' },
  { id: 'ko-1-72', companyName: 'PT Cipta Persona Interindo', areaName: 'Serpong / BSD, Tangsel', minPhase: 1, lat: -6.2712, lng: 106.6645, category: 'konstruksi' },
  { id: 'ko-1-73', companyName: 'Pojahome Design & Build', areaName: 'Emerald Avenue, Bintaro', minPhase: 1, lat: -6.2755, lng: 106.7115, category: 'konstruksi' },
  { id: 'ko-1-74', companyName: 'PT Total Bangun Persada (Site BSD)', areaName: 'BSD City, Tangerang', minPhase: 1, lat: -6.30068, lng: 106.63657, category: 'konstruksi' },
  { id: 'ko-1-75', companyName: 'Arif Konstruksi Tangerang', areaName: 'Cipondoh, Kota Tangerang', minPhase: 1, lat: -6.1915, lng: 106.6685, category: 'konstruksi' },
  { id: 'ko-1-76', companyName: 'PT Nusa Raya Cipta (Karawaci)', areaName: 'Lippo Karawaci, Tangerang', minPhase: 1, lat: -6.2215, lng: 106.6075, category: 'konstruksi' },

  // === PHASE 2: JAKARTA (42 Perusahaan Terverifikasi) ===
  // Klinik (Pink)
  { id: 'kl-2-77', companyName: 'Jakarta Aesthetic Clinic (JAC)', areaName: 'Kebayoran Baru, Jakarta Selatan', minPhase: 2, lat: -6.2435, lng: 106.8035, category: 'klinik' },
  { id: 'kl-2-78', companyName: 'ZAP Clinic Pondok Indah', areaName: 'Pondok Indah, Jakarta Selatan', minPhase: 2, lat: -6.2655, lng: 106.7835, category: 'klinik' },
  { id: 'kl-2-79', companyName: 'SOS Medika Clinic Cipete', areaName: 'Cipete, Jakarta Selatan', minPhase: 2, lat: -6.2725, lng: 106.8085, category: 'klinik' },
  { id: 'kl-2-80', companyName: 'Kusuma Beauty Clinic', areaName: 'Kembangan, Jakarta Barat', minPhase: 2, lat: -6.1885, lng: 106.7415, category: 'klinik' },
  { id: 'kl-2-81', companyName: 'Euroskinlab Puri Indah', areaName: 'Puri Indah, Jakarta Barat', minPhase: 2, lat: -6.1875, lng: 106.7345, category: 'klinik' },
  { id: 'kl-2-82', companyName: 'Derma Express Menteng', areaName: 'Menteng, Jakarta Pusat', minPhase: 2, lat: -6.1945, lng: 106.8365, category: 'klinik' },
  { id: 'kl-2-83', companyName: 'Insta Beauty Center', areaName: 'Pasar Baru, Jakarta Pusat', minPhase: 2, lat: -6.1655, lng: 106.8335, category: 'klinik' },
  { id: 'kl-2-84', companyName: 'Esther Aesthetic Clinic', areaName: 'Kelapa Gading, Jakarta Utara', minPhase: 2, lat: -6.1585, lng: 106.9055, category: 'klinik' },
  { id: 'kl-2-85', companyName: 'B Clinic Slimming & Aesthetic Kelapa Gading', areaName: 'Kelapa Gading, Jakarta Utara', minPhase: 2, lat: -6.1515, lng: 106.8925, category: 'klinik' },
  { id: 'kl-2-86', companyName: 'The Clinic Beautylounge PIK', areaName: 'Pantai Indah Kapuk, Jakarta Utara', minPhase: 2, lat: -6.1105, lng: 106.7435, category: 'klinik' },
  { id: 'kl-2-87', companyName: 'NMW Clinic Rawamangun', areaName: 'Rawamangun, Jakarta Timur', minPhase: 2, lat: -6.1975, lng: 106.8895, category: 'klinik' },
  { id: 'kl-2-88', companyName: 'Sozo Skin Clinic Rawamangun', areaName: 'Jl. Pemuda, Jakarta Timur', minPhase: 2, lat: -6.1935, lng: 106.8845, category: 'klinik' },
  { id: 'kl-2-89', companyName: 'Marvee Clinic by Kimia Farma', areaName: 'Cawang / Jakarta Timur', minPhase: 2, lat: -6.2445, lng: 106.8685, category: 'klinik' },

  // Resto (Merah)
  { id: 're-2-90', companyName: 'Scarlett\'s House Senopati', areaName: 'Senopati, Jakarta Selatan', minPhase: 2, lat: -6.2335, lng: 106.8115, category: 'resto' },
  { id: 're-2-91', companyName: 'SKYE Bar & Restaurant', areaName: 'Thamrin, Jakarta Pusat', minPhase: 2, lat: -6.1965, lng: 106.8235, category: 'resto' },
  { id: 're-2-92', companyName: 'Kokonut & Curtains', areaName: 'Senayan, Jakarta Pusat', minPhase: 2, lat: -6.2115, lng: 106.8015, category: 'resto' },
  { id: 're-2-93', companyName: 'Central Restaurant Tomang', areaName: 'Tomang, Jakarta Barat', minPhase: 2, lat: -6.1785, lng: 106.7955, category: 'resto' },
  { id: 're-2-94', companyName: 'Bandar Djakarta Ancol', areaName: 'Ancol, Jakarta Utara', minPhase: 2, lat: -6.1215, lng: 106.8455, category: 'resto' },
  { id: 're-2-95', companyName: 'Bakmi Aloi Kelapa Gading', areaName: 'Kelapa Gading, Jakarta Utara', minPhase: 2, lat: -6.1525, lng: 106.8985, category: 'resto' },
  { id: 're-2-96', companyName: 'Bruen Coffee & Kitchen', areaName: 'Duren Sawit, Jakarta Timur', minPhase: 2, lat: -6.2285, lng: 106.9095, category: 'resto' },

  // Cafe (Coklat)
  { id: 'ca-2-97', companyName: 'One Fifteenth (1/15) Coffee Gandaria', areaName: 'Gandaria, Jakarta Selatan', minPhase: 2, lat: -6.2455, lng: 106.7925, category: 'cafe' },
  { id: 'ca-2-98', companyName: 'Anomali Coffee Senopati', areaName: 'Senopati, Jakarta Selatan', minPhase: 2, lat: -6.2315, lng: 106.8085, category: 'cafe' },
  { id: 'ca-2-99', companyName: 'Tanatap Coffee Ampera', areaName: 'Ampera, Jakarta Selatan', minPhase: 2, lat: -6.2835, lng: 106.8215, category: 'cafe' },
  { id: 'ca-2-100', companyName: 'Coffee Dia', areaName: 'Kebon Jeruk, Jakarta Barat', minPhase: 2, lat: -6.1935, lng: 106.7685, category: 'cafe' },
  { id: 'ca-2-101', companyName: 'Pos Bloc Jakarta', areaName: 'Pasar Baru, Jakarta Pusat', minPhase: 2, lat: -6.1665, lng: 106.8345, category: 'cafe' },
  { id: 'ca-2-102', companyName: 'Aloha & By The Sea PIK', areaName: 'Pantai Indah Kapuk, Jakarta Utara', minPhase: 2, lat: -6.0985, lng: 106.7415, category: 'cafe' },
  { id: 'ca-2-103', companyName: 'Kyo Coffee Jakarta Timur', areaName: 'Pondok Bambu, Jakarta Timur', minPhase: 2, lat: -6.2355, lng: 106.9015, category: 'cafe' },
  { id: 'ca-2-104', companyName: 'Hakuna Matata Cijantung', areaName: 'Cijantung, Jakarta Timur', minPhase: 2, lat: -6.3125, lng: 106.8615, category: 'cafe' },
  { id: 'ca-2-105', companyName: 'Sudo Brew Jakarta Garden City', areaName: 'Cakung, Jakarta Timur', minPhase: 2, lat: -6.1735, lng: 106.9525, category: 'cafe' },

  // Barber (Biru)
  { id: 'ba-2-106', companyName: 'Chief Barbershop Kemang', areaName: 'Kemang Raya, Jakarta Selatan', minPhase: 2, lat: -6.2615, lng: 106.8155, category: 'barber' },
  { id: 'ba-2-107', companyName: 'Barberbox Senopati', areaName: 'Senopati, Jakarta Selatan', minPhase: 2, lat: -6.2365, lng: 106.8125, category: 'barber' },
  { id: 'ba-2-108', companyName: 'Paxi Barbershop Puri', areaName: 'Lippo Mall Puri, Jakarta Barat', minPhase: 2, lat: -6.1885, lng: 106.7385, category: 'barber' },
  { id: 'ba-2-109', companyName: 'Joe\'s Barbershop', areaName: 'Cempaka Putih, Jakarta Pusat', minPhase: 2, lat: -6.1755, lng: 106.8715, category: 'barber' },
  { id: 'ba-2-110', companyName: 'Elwood Barbershop', areaName: 'Kelapa Gading, Jakarta Utara', minPhase: 2, lat: -6.1565, lng: 106.9095, category: 'barber' },
  { id: 'ba-2-111', companyName: 'Brohist Barbershop', areaName: 'Duren Sawit, Jakarta Timur', minPhase: 2, lat: -6.2325, lng: 106.9225, category: 'barber' },

  // Konstruksi (Kuning)
  { id: 'ko-2-112', companyName: 'PT Wijaya Karya (WIKA)', areaName: 'Cawang, Jakarta Timur', minPhase: 2, lat: -6.2415, lng: 106.8765, category: 'konstruksi' },
  { id: 'ko-2-113', companyName: 'PT Total Bangun Persada', areaName: 'Slipi, Jakarta Barat', minPhase: 2, lat: -6.1865, lng: 106.7985, category: 'konstruksi' },
  { id: 'ko-2-114', companyName: 'PT Adhi Karya', areaName: 'Pasar Minggu, Jakarta Selatan', minPhase: 2, lat: -6.2655, lng: 106.8435, category: 'konstruksi' },
  { id: 'ko-2-115', companyName: 'PT Jaya Konstruksi', areaName: 'Pesanggrahan, Jakarta Selatan', minPhase: 2, lat: -6.2665, lng: 106.7635, category: 'konstruksi' },
  { id: 'ko-2-116', companyName: 'PT Pembangunan Perumahan (PTPP)', areaName: 'Pasar Rebo, Jakarta Timur', minPhase: 2, lat: -6.3035, lng: 106.8545, category: 'konstruksi' },
  { id: 'ko-2-117', companyName: 'PT Casa Prima Indonesia', areaName: 'Sunter, Jakarta Utara', minPhase: 2, lat: -6.1445, lng: 106.8725, category: 'konstruksi' },
  { id: 'ko-2-118', companyName: 'Intervisual Jakarta', areaName: 'Kebayoran Lama, Jakarta Selatan', minPhase: 2, lat: -6.2465, lng: 106.7815, category: 'konstruksi' },

  // === PHASE 3: JABODETABEK - BEKASI, DEPOK, BOGOR (30 Perusahaan Terverifikasi) ===
  // Klinik (Pink)
  { id: 'kl-3-119', companyName: 'Klinik Estetika dr. Ismael', areaName: 'Pekayon, Bekasi Selatan', minPhase: 3, lat: -6.2565, lng: 106.9825, category: 'klinik' },
  { id: 'kl-3-120', companyName: 'Klinik Mitra Medika Jatiasih', areaName: 'Jatiasih, Kota Bekasi', minPhase: 3, lat: -6.2895, lng: 106.9665, category: 'klinik' },
  { id: 'kl-3-121', companyName: 'B Clinic Bekasi', areaName: 'Grand Metropolitan, Bekasi', minPhase: 3, lat: -6.2485, lng: 106.9915, category: 'klinik' },
  { id: 'kl-3-122', companyName: 'Natasha Skin Clinic Margonda', areaName: 'Margonda, Kota Depok', minPhase: 3, lat: -6.3755, lng: 106.8325, category: 'klinik' },
  { id: 'kl-3-123', companyName: 'Klinik Satelit Makara UI', areaName: 'Kampus UI, Depok', minPhase: 3, lat: -6.3645, lng: 106.8265, category: 'klinik' },
  { id: 'kl-3-124', companyName: 'Klinik Utama Gracia', areaName: 'Jl. Pajajaran, Kota Bogor', minPhase: 3, lat: -6.5895, lng: 106.8055, category: 'klinik' },

  // Resto (Merah)
  { id: 're-3-125', companyName: 'Tamansari Resto & Cafe', areaName: 'Jatiasih, Kota Bekasi', minPhase: 3, lat: -6.2845, lng: 106.9625, category: 'resto' },
  { id: 're-3-126', companyName: 'de\'Clan Resto & Cafe', areaName: 'Tole Iskandar, Depok', minPhase: 3, lat: -6.4025, lng: 106.8425, category: 'resto' },
  { id: 're-3-127', companyName: 'De\' Leuit Botani', areaName: 'Pajajaran, Kota Bogor', minPhase: 3, lat: -6.6015, lng: 106.8075, category: 'resto' },
  { id: 're-3-128', companyName: 'Lemongrass Resto & Cafe', areaName: 'Jl. Raya Pajajaran, Bogor', minPhase: 3, lat: -6.5815, lng: 106.8075, category: 'resto' },

  // Cafe (Coklat)
  { id: 'ca-3-129', companyName: 'Greyhound Cafe Summarecon Bekasi', areaName: 'La Spezia, Summarecon Bekasi', minPhase: 3, lat: -6.2255, lng: 107.0012, category: 'cafe' },
  { id: 'ca-3-130', companyName: 'Nemu Cafe Bekasi', areaName: 'Ruko Ruby Commercial, Bekasi', minPhase: 3, lat: -6.2275, lng: 106.9995, category: 'cafe' },
  { id: 'ca-3-131', companyName: 'Kopi Nako Grand Galaxy', areaName: 'Grand Galaxy City, Bekasi', minPhase: 3, lat: -6.2695, lng: 106.9745, category: 'cafe' },
  { id: 'ca-3-132', companyName: 'Mellowfield Coffee Bekasi', areaName: 'Bekasi Selatan, Kota Bekasi', minPhase: 3, lat: -6.2625, lng: 106.9835, category: 'cafe' },
  { id: 'ca-3-133', companyName: 'Kopi Nako Depok', areaName: 'Margonda, Kota Depok', minPhase: 3, lat: -6.3705, lng: 106.8335, category: 'cafe' },
  { id: 'ca-3-134', companyName: 'Walking Drums Margonda', areaName: 'Margonda, Kota Depok', minPhase: 3, lat: -6.3825, lng: 106.8305, category: 'cafe' },
  { id: 'ca-3-135', companyName: 'Lumos Cafe Sawangan', areaName: 'Sawangan, Kota Depok', minPhase: 3, lat: -6.4045, lng: 106.7685, category: 'cafe' },
  { id: 'ca-3-136', companyName: 'Tier S Coffee', areaName: 'Tajur, Kota Bogor', minPhase: 3, lat: -6.6225, lng: 106.8215, category: 'cafe' },

  // Barber (Biru)
  { id: 'ba-3-137', companyName: 'Chief Barbershop Grand Galaxy', areaName: 'Grand Galaxy City, Bekasi', minPhase: 3, lat: -6.2735, lng: 106.9715, category: 'barber' },
  { id: 'ba-3-138', companyName: 'Uka Barbershop Bekasi', areaName: 'Bekasi Timur, Kota Bekasi', minPhase: 3, lat: -6.2455, lng: 107.0155, category: 'barber' },
  { id: 'ba-3-139', companyName: 'HAIRHAUS Studio Bekasi', areaName: 'Kemang Pratama, Bekasi', minPhase: 3, lat: -6.2785, lng: 106.9915, category: 'barber' },
  { id: 'ba-3-140', companyName: 'King Bagus Barbershop', areaName: 'Margonda, Kota Depok', minPhase: 3, lat: -6.3875, lng: 106.8285, category: 'barber' },
  { id: 'ba-3-141', companyName: 'Manhattan Barbershop Cinere', areaName: 'Cinere, Kota Depok', minPhase: 3, lat: -6.3265, lng: 106.7845, category: 'barber' },
  { id: 'ba-3-142', companyName: 'Bro\'s Barbershop Bogor', areaName: 'Jl. Ahmad Yani, Kota Bogor', minPhase: 3, lat: -6.5825, lng: 106.7985, category: 'barber' },

  // Konstruksi (Kuning)
  { id: 'ko-3-143', companyName: 'Dexora Interior Living', areaName: 'Bekasi Barat, Kota Bekasi', minPhase: 3, lat: -6.2385, lng: 106.9765, category: 'konstruksi' },
  { id: 'ko-3-144', companyName: 'PT Multi Dimensi Kontraktor', areaName: 'Summarecon, Kota Bekasi', minPhase: 3, lat: -6.22511, lng: 107.00326, category: 'konstruksi' },
  { id: 'ko-3-145', companyName: 'PT Yuuki General Contractor', areaName: 'Bekasi Selatan, Kota Bekasi', minPhase: 3, lat: -6.2645, lng: 106.9935, category: 'konstruksi' },
  { id: 'ko-3-146', companyName: 'Bintoro Build (PT Bintoro Marga Perkasa)', areaName: 'Beji, Kota Depok', minPhase: 3, lat: -6.3775, lng: 106.8145, category: 'konstruksi' },
  { id: 'ko-3-147', companyName: 'PT Depok Kontraktor Utama', areaName: 'Kukusan, Kota Depok', minPhase: 3, lat: -6.3695, lng: 106.8115, category: 'konstruksi' },
  { id: 'ko-3-148', companyName: 'PT Bogor Cipta Mandiri Kontraktor', areaName: 'Bogor Utara, Kota Bogor', minPhase: 3, lat: -6.5665, lng: 106.8165, category: 'konstruksi' },
];

export const slideDataId = {
  badge: "Bagian 3 • Peta Potensi Pasar",
  title: "MARKET OPPORTUNITY & PROSPECT MAPPING",
  subtitle: "Menemukan bisnis yang tepat di wilayah yang tepat.",
  focusAreaTabs: [
    {
      id: "phase1" as TerritoryPhaseId,
      phaseNum: 1 as const,
      tabLabel: "Tangerang",
      heading: "Fokus Area Tangerang",
      description:
        "Penetrasi awal difokuskan secara langsung di Tangerang Raya untuk membangun pijakan klien lokal yang kuat dan terukur.",
      areas: ["Kota Tangerang", "Kabupaten Tangerang", "Tangerang Selatan"],
      clustersLabel: "Klaster komersial utama: BSD, Gading Serpong, Alam Sutera, Karawaci, Bintaro",
    },
    {
      id: "phase2" as TerritoryPhaseId,
      phaseNum: 2 as const,
      tabLabel: "Jakarta",
      heading: "Fokus Area Jakarta",
      description:
        "Ekspansi bertahap membuka 5 wilayah administratif DKI Jakarta sambil tetap menjaga basis klien aktif di Tangerang Raya.",
      areas: [
        "Jakarta Barat",
        "Jakarta Selatan",
        "Jakarta Pusat",
        "Jakarta Utara",
        "Jakarta Timur",
      ],
      clustersLabel: "Seluruh 5 wilayah administratif DKI Jakarta + Tangerang Raya",
    },
    {
      id: "phase3" as TerritoryPhaseId,
      phaseNum: 3 as const,
      tabLabel: "Jabodetabek",
      heading: "Fokus Area Jabodetabek",
      description:
        "Perluasan cakupan ke Bekasi, Depok, dan Bogor seiring kesiapan pipeline, kapasitas tim, dan pengiriman layanan.",
      areas: [
        "Tangerang & Jakarta (dipertahankan)",
        "Kota Bekasi & Kabupaten Bekasi",
        "Depok",
        "Kota Bogor & Kabupaten Bogor",
      ],
      clustersLabel: "Cakupan terpadu seluruh wilayah Jabodetabek",
    },
  ] as FocusAreaTab[],
  segmentsTitle: "Kategori Bisnis Sasaran (UKM)",
  targetSegments: [
    {
      id: "fnb",
      title: "1. F&B & Kuliner",
      examples: "Kafe, coffee shop, restoran, dan bisnis kuliner",
      focus: "Mendorong visibilitas lokal, konsistensi konten menu/suasana, dan kunjungan pelanggan.",
    },
    {
      id: "services",
      title: "2. Bisnis Jasa (Appointment)",
      examples: "Klinik, barbershop, salon, gym, dan layanan berbasis janji temu",
      focus: "Membangun kepercayaan, edukasi layanan secara bertanggung jawab, dan alur booking yang jelas.",
    },
    {
      id: "project",
      title: "3. Bisnis Berbasis Proyek & B2B",
      examples: "Desain interior, kontraktor, properti, dan penyedia jasa B2B",
      focus: "Menampilkan portofolio proyek secara terstruktur untuk mendukung kredibilitas dan enquiry.",
    },
  ],
  prospectProfileTitle: "Profil Prospek Utama (Peluang Kanal Digital Kurang Optimal)",
  prospectProfilePoints: [
    "Sudah memiliki Instagram, TikTok, Google Business Profile, atau website",
    "Aktivitas posting berhenti atau berjalan tidak konsisten",
    "Konten cenderung muncul hanya saat ada promo musiman",
    "Belum memiliki kalender konten maupun alur konversi yang jelas",
    "Belum memiliki tim pemasaran khusus / kapasitas internal terbatas",
    "Memiliki kebutuhan bisnis nyata dan potensi alokasi anggaran pemasaran",
  ],
  phases: [
    {
      id: "phase1" as TerritoryPhaseId,
      phaseNum: 1 as const,
      tabLabel: "Bulan 1–3: Tangerang",
      period: "Bulan 1–3",
      territoryTitle: "Tangerang (Single Fighter)",
      operatingNote: "Harry menangani siklus penjualan penuh secara langsung di Tangerang Raya.",
      areas: ["Kota Tangerang", "Kabupaten Tangerang", "Tangerang Selatan"],
      clustersLabel: "Klaster komersial: BSD, Gading Serpong, Alam Sutera, Karawaci, Bintaro",
    },
    {
      id: "phase2" as TerritoryPhaseId,
      phaseNum: 2 as const,
      tabLabel: "Bulan 3–6: Tangerang + Jakarta",
      period: "Bulan 3–6",
      territoryTitle: "Tangerang + Jakarta (Pembentukan & Eksekusi Tim)",
      operatingNote:
        "Transisi sekitar Bulan ke-3 untuk rekrutmen & onboarding tim BD/Sales; Tangerang tetap dijaga sambil membuka 5 wilayah Jakarta.",
      areas: [
        "Tangerang Raya (Fase 1 dipertahankan)",
        "Jakarta Barat",
        "Jakarta Selatan",
        "Jakarta Pusat",
        "Jakarta Utara",
        "Jakarta Timur",
      ],
      clustersLabel: "Seluruh 5 wilayah administratif DKI Jakarta + Tangerang Raya",
    },
    {
      id: "phase3" as TerritoryPhaseId,
      phaseNum: 3 as const,
      tabLabel: "Bulan 7+: Jabodetabek",
      period: "Bulan 7 ke atas",
      territoryTitle: "Jabodetabek (Ekspansi Berbasis Tim)",
      operatingNote:
        "Memperluas cakupan ke Bekasi, Depok, dan Bogor sesuai kesiapan pipeline, kapasitas tim, dan pengiriman layanan.",
      areas: [
        "Tangerang & Jakarta (dipertahankan)",
        "Kota Bekasi & Kabupaten Bekasi",
        "Depok",
        "Kota Bogor & Kabupaten Bogor",
      ],
      clustersLabel: "Cakupan lengkap Jabodetabek (tidak mengklaim seluruh Indonesia)",
    },
  ],
  mapLabels: {
    mapTab: "Peta Wilayah Prioritas",
    databaseTab: "Database Prospek (Contoh Ilustratif)",
    activeLegend: "Wilayah Target Aktif",
    futureLegend: "Wilayah Ekspansi Berikutnya",
    markerDisclaimer:
      "Penanda peta menunjukkan Area Target (bukan data prospek aktual). Jumlah prospek terverifikasi: [ADD VERIFIED PROSPECT COUNT].",
  },
  databasePreview: {
    notice:
      "Contoh Ilustratif — Baris di bawah adalah contoh fiktif untuk menunjukkan struktur CRM yang akan dibangun, bukan data prospek aktual.",
    columns: [
      "Nama Bisnis",
      "Industri",
      "Wilayah",
      "Website / Sosial",
      "PIC / Status Kontak",
      "Ringkasan Audit Digital",
      "Kualifikasi Anggaran",
      "Tahap Pipeline",
    ],
    rows: [
      {
        businessName: "[Contoh Ilustratif] Kopi Ruang Senja",
        industry: "F&B (Coffee Shop)",
        area: "BSD, Tangerang Selatan",
        digitalProfile: "IG & Google Business Profile ada",
        decisionMakerStatus: "Pemilik — Belum dihubungi",
        digitalAuditSummary: "Unggahan terakhir >2 bulan lalu; info menu & jam buka belum rapi.",
        budgetQualification: "Perlu discovery kapasitas anggaran bulanan",
        pipelineStage: "Prospek Teridentifikasi",
      },
      {
        businessName: "[Contoh Ilustratif] Studio Ruang Rapi",
        industry: "Jasa Proyek (Desain Interior)",
        area: "Gading Serpong, Kab. Tangerang",
        digitalProfile: "IG & Website portofolio ada",
        decisionMakerStatus: "Managing Partner — Riset Awal",
        digitalAuditSummary: "Portofolio proyek tidak diperbarui; alur konsultasi di bio kurang jelas.",
        budgetQualification: "Potensi retainer konten / web maintenance (perlu kualifikasi)",
        pipelineStage: "Siap Outreach",
      },
      {
        businessName: "[Contoh Ilustratif] Klinik Sehat Harmoni",
        industry: "Jasa Layanan (Klinik)",
        area: "Bintaro, Tangerang Selatan",
        digitalProfile: "IG, TikTok & GBP ada",
        decisionMakerStatus: "Manajer Operasional — Riset Awal",
        digitalAuditSummary: "Konten hanya saat promo; edukasi layanan perlu komunikasi patuh regulasi.",
        budgetQualification: "Perlu validasi alokasi anggaran pemasaran",
        pipelineStage: "Riset & Audit Awal",
      },
    ] as ProspectExampleRow[],
  },
};

export const slideDataEn = {
  badge: "Part 3 • Market Potential Map",
  title: "MARKET OPPORTUNITY & PROSPECT MAPPING",
  subtitle: "Finding the right businesses in the right staged territories.",
  focusAreaTabs: [
    {
      id: "phase1" as TerritoryPhaseId,
      phaseNum: 1 as const,
      tabLabel: "Tangerang",
      heading: "Tangerang Area Focus",
      description:
        "Initial market penetration focuses directly on Tangerang Raya to build a strong, measurable local client base.",
      areas: ["Kota Tangerang", "Kabupaten Tangerang", "Tangerang Selatan"],
      clustersLabel: "Key commercial clusters: BSD, Gading Serpong, Alam Sutera, Karawaci, Bintaro",
    },
    {
      id: "phase2" as TerritoryPhaseId,
      phaseNum: 2 as const,
      tabLabel: "Jakarta",
      heading: "Jakarta Area Focus",
      description:
        "Phased expansion opens all 5 administrative areas of DKI Jakarta while maintaining the active Tangerang Raya client base.",
      areas: [
        "Jakarta Barat",
        "Jakarta Selatan",
        "Jakarta Pusat",
        "Jakarta Utara",
        "Jakarta Timur",
      ],
      clustersLabel: "All 5 Jakarta administrative areas + Tangerang Raya",
    },
    {
      id: "phase3" as TerritoryPhaseId,
      phaseNum: 3 as const,
      tabLabel: "Jabodetabek",
      heading: "Jabodetabek Area Focus",
      description:
        "Expanding coverage into Bekasi, Depok, and Bogor as pipeline readiness, team capacity, and service delivery align.",
      areas: [
        "Tangerang & Jakarta (retained)",
        "Kota Bekasi & Kabupaten Bekasi",
        "Depok",
        "Kota Bogor & Kabupaten Bogor",
      ],
      clustersLabel: "Integrated coverage across Jabodetabek",
    },
  ] as FocusAreaTab[],
  segmentsTitle: "Target SME Categories",
  targetSegments: [
    {
      id: "fnb",
      title: "1. F&B & Culinary",
      examples: "Cafes, coffee shops, restaurants, and culinary businesses",
      focus: "Improve local visibility, consistent menu/experience storytelling, and customer visits.",
    },
    {
      id: "services",
      title: "2. Service Businesses (Appointment)",
      examples: "Clinics, barber shops, salons, gyms, and appointment-based services",
      focus: "Build trust, compliant service education, and clearer booking enquiries.",
    },
    {
      id: "project",
      title: "3. Project-Based & B2B Services",
      examples: "Interior design, contractors, property, and B2B service providers",
      focus: "Showcase project portfolios consistently to support credibility and qualified enquiries.",
    },
  ],
  prospectProfileTitle: "Core Prospect Profile (Underused Digital Channels)",
  prospectProfilePoints: [
    "Already has Instagram, TikTok, Google Business Profile, or a website",
    "Posting has stopped or runs inconsistently",
    "Content appears mostly during occasional promotions only",
    "Lacks a structured content calendar or clear conversion path",
    "No dedicated marketing team / limited internal bandwidth",
    "Has a genuine business objective and plausible marketing budget capacity",
  ],
  phases: [
    {
      id: "phase1" as TerritoryPhaseId,
      phaseNum: 1 as const,
      tabLabel: "Months 1–3: Tangerang",
      period: "Months 1–3",
      territoryTitle: "Tangerang (Single Fighter)",
      operatingNote: "Harry handles the full sales cycle personally across Tangerang Raya.",
      areas: ["Kota Tangerang", "Kabupaten Tangerang", "Tangerang Selatan"],
      clustersLabel: "Commercial clusters: BSD, Gading Serpong, Alam Sutera, Karawaci, Bintaro",
    },
    {
      id: "phase2" as TerritoryPhaseId,
      phaseNum: 2 as const,
      tabLabel: "Months 3–6: Tangerang + Jakarta",
      period: "Months 3–6",
      territoryTitle: "Tangerang + Jakarta (Team Formation & Execution)",
      operatingNote:
        "Month 3 transition to recruit and onboard BD/sales capacity; maintain Tangerang while opening Jakarta's 5 areas.",
      areas: [
        "Tangerang Raya (Phase 1 retained)",
        "Jakarta Barat",
        "Jakarta Selatan",
        "Jakarta Pusat",
        "Jakarta Utara",
        "Jakarta Timur",
      ],
      clustersLabel: "All 5 Jakarta administrative areas + Tangerang Raya",
    },
    {
      id: "phase3" as TerritoryPhaseId,
      phaseNum: 3 as const,
      tabLabel: "Month 7+: Jabodetabek",
      period: "Month 7 onward",
      territoryTitle: "Jabodetabek (Team-Based Expansion)",
      operatingNote:
        "Expand into Bekasi, Depok, and Bogor only as pipeline, team capacity, delivery, and retention support it.",
      areas: [
        "Tangerang & Jakarta (retained)",
        "Kota Bekasi & Kabupaten Bekasi",
        "Depok",
        "Kota Bogor & Kabupaten Bogor",
      ],
      clustersLabel: "Full Jabodetabek territory (not nationwide Indonesia)",
    },
  ],
  mapLabels: {
    mapTab: "Priority Territory Map",
    databaseTab: "Prospect Database (Illustrative Example)",
    activeLegend: "Active Target Territory",
    futureLegend: "Future Expansion Territory",
    markerDisclaimer:
      "Map markers represent Target Areas (not actual leads). Verified prospect count: [ADD VERIFIED PROSPECT COUNT].",
  },
  databasePreview: {
    notice:
      "Illustrative example — Fictional entries below demonstrate the proposed CRM schema only, not actual prospect records.",
    columns: [
      "Business Name",
      "Industry",
      "Area",
      "Website / Social",
      "Decision-Maker / Status",
      "Digital Audit Summary",
      "Budget Qualification",
      "Pipeline Stage",
    ],
    rows: [
      {
        businessName: "[Illustrative example] Kopi Ruang Senja",
        industry: "F&B (Coffee Shop)",
        area: "BSD, Tangerang Selatan",
        digitalProfile: "IG & Google Business Profile active",
        decisionMakerStatus: "Owner — Not yet contacted",
        digitalAuditSummary: "Last post >2 months ago; menu & opening info unorganized.",
        budgetQualification: "Requires discovery on monthly budget capacity",
        pipelineStage: "Identified Prospect",
      },
      {
        businessName: "[Illustrative example] Studio Ruang Rapi",
        industry: "Project-Based (Interior Design)",
        area: "Gading Serpong, Kab. Tangerang",
        digitalProfile: "IG & Portfolio website exist",
        decisionMakerStatus: "Managing Partner — Initial research",
        digitalAuditSummary: "Portfolio rarely updated; consultation link unclear.",
        budgetQualification: "Potential content / web retainer (needs qualification)",
        pipelineStage: "Ready for Outreach",
      },
      {
        businessName: "[Illustrative example] Klinik Sehat Harmoni",
        industry: "Service Business (Clinic)",
        area: "Bintaro, Tangerang Selatan",
        digitalProfile: "IG, TikTok & GBP exist",
        decisionMakerStatus: "Ops Manager — Initial research",
        digitalAuditSummary: "Posts only during promos; service education requires compliant messaging.",
        budgetQualification: "Needs validation of recurring marketing budget",
        pipelineStage: "Initial Audit",
      },
    ] as ProspectExampleRow[],
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
  slideNumber: 3,
  folder: "03",
  sectionId: 1,
  navTitle: {
    in: "Peta Potensi Pasar",
    en: "Market Opportunity Map",
  },
  headerTitle: {
    in: "Peluang Pasar & Pemetaan Wilayah",
    en: "Market Opportunity & Prospect Mapping",
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
