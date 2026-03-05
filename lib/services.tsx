export type Service = {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  iconKey: string;
};

export const SERVICES = [
  {
    id: "telephone",
    name: "Telephone Networks & PBX Systems",
    nameAr: "أعمال السنترال والشبكات",
    description: "Design, installation, and maintenance of telephone networks and PBX systems for enterprises.",
    iconKey: "phone"
  },
  {
    id: "cctv",
    name: "CCTV & Surveillance Systems",
    nameAr: "كاميرات المراقبة التليفزيونية",
    description: "Professional CCTV installation and monitoring solutions for security and surveillance.",
    iconKey: "video"
  },
  {
    id: "fire-alarm",
    name: "Fire Alarm & Detection Systems",
    nameAr: "أنظمة إنذار الحريق",
    description: "Fire detection, alarm, and suppression systems meeting safety regulations.",
    iconKey: "flame"
  },
  {
    id: "audio",
    name: "Public Address & Audio Systems",
    nameAr: "أعمال الصوتيات",
    description: "PA systems, sound reinforcement, and audio solutions for facilities.",
    iconKey: "volume"
  },
  {
    id: "facility",
    name: "Integrated Facility Maintenance",
    nameAr: "الصيانة المتكاملة",
    description: "Comprehensive maintenance services for buildings and infrastructure.",
    iconKey: "wrench"
  },
  {
    id: "pool",
    name: "Swimming Pool Maintenance",
    nameAr: "صيانة حمامات السباحة",
    description: "Pool maintenance, filtration, and water treatment for commercial and residential pools.",
    iconKey: "droplets"
  },
  {
    id: "access",
    name: "Security Gates & Access Control",
    nameAr: "بوابات أمنية وتحكم بالدخول",
    description: "Access control systems, security gates, and integrated entry management.",
    iconKey: "shield"
  },
  {
    id: "it",
    name: "IT Networks & Computer Systems",
    nameAr: "شبكات الحاسب والكمبيوتر",
    description: "IT infrastructure, networking, and computer systems for enterprises.",
    iconKey: "monitor"
  }
];
