export type Service = {
  id: string;
  name: string;
  description: string;
  iconKey: string;
  category: "hard" | "soft" | "special";
};

export const SERVICES: Service[] = [
  {
    id: "electrical",
    name: "Electrical Maintenance",
    description:
      "Preventive and corrective electrical maintenance for low-voltage networks, panels, lighting, and backup systems across compounds and clubs.",
    iconKey: "bolt",
    category: "hard"
  },
  {
    id: "plumbing",
    name: "Plumbing & Drainage",
    description:
      "Operation and maintenance of domestic water, firefighting networks, pumps, and drainage systems to keep facilities running 24/7.",
    iconKey: "droplets",
    category: "hard"
  },
  {
    id: "hvac",
    name: "HVAC Systems",
    description:
      "Comprehensive HVAC services for chillers, package units, VRF systems, and ventilation to ensure comfortable, efficient environments.",
    iconKey: "thermometerSun",
    category: "hard"
  },
  {
    id: "civil",
    name: "Civil & General Works",
    description:
      "Civil maintenance, finishes, and minor construction works to keep façades, roads, and common areas in pristine condition.",
    iconKey: "hammer",
    category: "hard"
  },
  {
    id: "cleaning",
    name: "Cleaning & Housekeeping",
    description:
      "Soft services teams delivering daily cleaning, façade washing, and specialized deep cleaning for clubs, compounds, and commercial towers.",
    iconKey: "broom",
    category: "soft"
  },
  {
    id: "security",
    name: "Security Systems",
    description:
      "CCTV, access control, and integrated security systems monitoring to safeguard residents, visitors, and assets.",
    iconKey: "shieldCheck",
    category: "special"
  },
  {
    id: "landscaping",
    name: "Landscaping & Irrigation",
    description:
      "Hard and soft landscaping, turf care, and irrigation system maintenance for vibrant, sustainable outdoor spaces.",
    iconKey: "sprout",
    category: "soft"
  },
  {
    id: "firefighting",
    name: "Firefighting Systems",
    description:
      "Inspection, testing, and maintenance of firefighting systems, pumps, and life-safety equipment in line with local regulations.",
    iconKey: "flame",
    category: "special"
  }
];

