export type Project = {
  id: string;
  name: string;
  sectorId: string;
};

export type ProjectSector = {
  id: string;
  name: string;
  projects: Project[];
};

export const PROJECT_SECTORS: ProjectSector[] = [
  {
    id: "youth-sports",
    name: "Youth & Sports Ministry",
    projects: [
      { id: "shubra-sports", name: "Shubra El Kheima Sports Development Center", sectorId: "youth-sports" },
      { id: "nadi-sheraton", name: "El Nadi Club Sheraton", sectorId: "youth-sports" },
      { id: "nadi-6oct", name: "El Nadi Club 6th October", sectorId: "youth-sports" },
      { id: "fayoum-pool", name: "Fayoum Swimming Pool (Damo)", sectorId: "youth-sports" },
      { id: "fayoum-hall", name: "Fayoum Indoor Hall (Damo)", sectorId: "youth-sports" },
      { id: "6oct-hall", name: "6th October Indoor Hall", sectorId: "youth-sports" },
      { id: "zainhom", name: "Zainhom Youth Center", sectorId: "youth-sports" },
      { id: "abu-qir-youth", name: "Abu Qir Youth Center", sectorId: "youth-sports" },
      { id: "meet-oqba", name: "Meet Oqba Youth Center", sectorId: "youth-sports" },
      { id: "shubeen-hall", name: "Shubeen El Kom Indoor Hall & Pool", sectorId: "youth-sports" },
      { id: "new-valley-hall", name: "New Valley Indoor Hall", sectorId: "youth-sports" }
    ]
  },
  {
    id: "agriculture",
    name: "Agriculture Ministry",
    projects: [
      { id: "ag-minister", name: "Minister's Office", sectorId: "agriculture" },
      { id: "ag-financial", name: "Financial Affairs Dept", sectorId: "agriculture" },
      { id: "ag-seeds", name: "Seeds & Crops Authority", sectorId: "agriculture" },
      { id: "ag-companies", name: "Companies Dept", sectorId: "agriculture" },
      { id: "ag-locust", name: "Locust Control Dept", sectorId: "agriculture" },
      { id: "ag-guidance", name: "Agricultural Guidance Sector", sectorId: "agriculture" },
      { id: "ag-engineering", name: "Engineering Dept", sectorId: "agriculture" },
      { id: "ag-intl", name: "International Agriculture Center", sectorId: "agriculture" },
      { id: "ag-animal", name: "Animal Health Dept", sectorId: "agriculture" },
      { id: "ag-zoo", name: "Zoo Gardens Authority", sectorId: "agriculture" }
    ]
  },
  {
    id: "health",
    name: "Health Ministry",
    projects: [
      { id: "benha", name: "Benha Teaching Hospital", sectorId: "health" },
      { id: "sayed-galal", name: "Sayed Galal Hospital", sectorId: "health" },
      { id: "saidnawy", name: "Saidnawy Hospital", sectorId: "health" },
      { id: "health-insurance", name: "Health Insurance Authority", sectorId: "health" },
      { id: "railway-hospital", name: "Railway Hospital", sectorId: "health" },
      { id: "manshiet-bakry", name: "Manshiet El Bakry Hospital", sectorId: "health" },
      { id: "transport-hospital", name: "Public Transport Authority Hospital", sectorId: "health" },
      { id: "hassabo", name: "Hassabo International Hospital", sectorId: "health" },
      { id: "galaa", name: "El Galaa Maternity Hospital", sectorId: "health" },
      { id: "masr-dawly", name: "Masr El Dawly Hospital", sectorId: "health" },
      { id: "60bed", name: "60-Bed Hospital (10th of Ramadan)", sectorId: "health" },
      { id: "ahly-bank", name: "Ahly Bank Hospital (Maadi)", sectorId: "health" },
      { id: "zohour", name: "El Zohour Hospital (6th October)", sectorId: "health" },
      { id: "cancer-institute", name: "National Cancer Institute", sectorId: "health" }
    ]
  },
  {
    id: "interior",
    name: "Interior Ministry",
    projects: [
      { id: "mubarak-academy", name: "Mubarak Security Academy", sectorId: "interior" },
      { id: "police-sports", name: "Police Sports Union", sectorId: "interior" },
      { id: "cavalry", name: "Cavalry Dept", sectorId: "interior" },
      { id: "police-comms", name: "Police Communications", sectorId: "interior" },
      { id: "officers-institute", name: "Police Officers Institute", sectorId: "interior" },
      { id: "wadi-natrun", name: "Wadi El Natrun Prisons", sectorId: "interior" },
      { id: "assiut-prison", name: "Assiut Prison", sectorId: "interior" },
      { id: "alex-prison", name: "Alexandria Prison", sectorId: "interior" }
    ]
  },
  {
    id: "defense",
    name: "Defense Ministry",
    projects: [
      { id: "air-defense", name: "Air Defense Forces HQ", sectorId: "defense" },
      { id: "engineering-auth", name: "Armed Forces Engineering Authority", sectorId: "defense" },
      { id: "military-engineers", name: "Military Engineers Dept (El Shorouk Workshop, Wadi Houf)", sectorId: "defense" },
      { id: "armored", name: "Armored Forces Dept", sectorId: "defense" },
      { id: "electronic-warfare", name: "Electronic Warfare Dept", sectorId: "defense" },
      { id: "air-forces", name: "Air Forces", sectorId: "defense" }
    ]
  },
  {
    id: "government",
    name: "Government Entities",
    projects: [
      { id: "new-cairo-courts", name: "New Cairo Courts Complex", sectorId: "government" },
      { id: "ain-shams-eng", name: "Ain Shams Engineering Faculty", sectorId: "government" },
      { id: "ain-shams-arts", name: "Ain Shams Arts Faculty", sectorId: "government" },
      { id: "ain-shams-agri", name: "Ain Shams Agriculture Faculty", sectorId: "government" },
      { id: "antiquities", name: "Supreme Council of Antiquities", sectorId: "government" },
      { id: "auditing", name: "Central Auditing Organization", sectorId: "government" },
      { id: "amiri-press", name: "Amiri Press", sectorId: "government" },
      { id: "abu-qir-fire", name: "Abu Qir Youth Center (Fire & Audio)", sectorId: "government" }
    ]
  },
  {
    id: "arab-contractors",
    name: "Arab Contractors",
    projects: [
      { id: "el-saff-water", name: "El Saff Water Station", sectorId: "arab-contractors" },
      { id: "atfih-water", name: "Atfih Water Station", sectorId: "arab-contractors" },
      { id: "hurghada-palace", name: "Hurghada Culture Palace", sectorId: "arab-contractors" },
      { id: "gamasa-zone", name: "Gamasa Industrial Zone", sectorId: "arab-contractors" },
      { id: "sadat-academy", name: "Sadat Academy", sectorId: "arab-contractors" }
    ]
  },
  {
    id: "private",
    name: "Private & Tourism",
    projects: [
      { id: "atsuka", name: "Atsuka Medical Company", sectorId: "private" },
      { id: "new-zealand-dairy", name: "New Zealand Dairy Company", sectorId: "private" },
      { id: "astra-travel", name: "Astra Travel", sectorId: "private" },
      { id: "saudi-service", name: "Saudi Service Center (Cairo-Ismailia Road)", sectorId: "private" },
      { id: "btech-sharm", name: "B.Tech Showrooms (Sharm, Shubra, Roksy)", sectorId: "private" },
      { id: "badawia", name: "Badawia Village Marsa Alam", sectorId: "private" },
      { id: "sharm-life", name: "Sharm Life Hurghada", sectorId: "private" },
      { id: "el-basha", name: "El Basha Village Sahl Hasheesh", sectorId: "private" }
    ]
  },
  {
    id: "sales-tax",
    name: "Sales Tax Authority",
    projects: [
      { id: "mansoura-tax", name: "Mansoura Tax Office", sectorId: "sales-tax" },
      { id: "mersa-matrouh-tax", name: "Mersa Matrouh Tax Office", sectorId: "sales-tax" },
      { id: "nag-hammadi-tax", name: "Nag Hammadi Tax Office", sectorId: "sales-tax" },
      { id: "shubra-stamp", name: "Shubra El Kheima Stamp Office", sectorId: "sales-tax" },
      { id: "training-centers", name: "Training Centers (Tanta, Fayoum, Assiut)", sectorId: "sales-tax" }
    ]
  }
];
