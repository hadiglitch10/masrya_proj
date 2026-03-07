"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECT_SECTORS } from "@/lib/projects";

const LOGO_ONLY_IDS = new Set<string>([
  // Health Ministry (from Manshiet El Bakry onwards)
  "manshiet-bakry",
  "transport-hospital",
  "hassabo",
  "galaa",
  "masr-dawly",
  "60bed",
  "ahly-bank",
  "zohour",
  "cancer-institute",

  // Interior Ministry
  "mubarak-academy",
  "police-sports",
  "cavalry",
  "police-comms",
  "officers-institute",
  "wadi-natrun",
  "assiut-prison",
  "alex-prison",

  // Defense Ministry
  "air-defense",
  "engineering-auth",
  "military-engineers",
  "armored",
  "electronic-warfare",
  "air-forces",

  // Government Entities
  "new-cairo-courts",
  "ain-shams-eng",
  "ain-shams-arts",
  "ain-shams-agri",
  "antiquities",
  "auditing",
  "amiri-press",
  "abu-qir-fire",

  // Arab Contractors
  "el-saff-water",
  "atfih-water",
  "hurghada-palace",
  "gamasa-zone",
  "sadat-academy",

  // Private & Tourism
  "atsuka",
  "new-zealand-dairy",
  "astra-travel",
  "saudi-service",
  "btech-sharm",
  "badawia",
  "sharm-life",
  "el-basha",

  // Sales Tax Authority
  "mansoura-tax",
  "mersa-matrouh-tax",
  "nag-hammadi-tax",
  "shubra-stamp",
  "training-centers"
]);

const SECTOR_STYLES: Record<
  string,
  { badge: string; border: string }
> = {
  "youth-sports": {
    badge: "bg-blue-500/20 text-blue-300",
    border: "border-l-blue-400"
  },
  agriculture: {
    badge: "bg-green-500/20 text-green-300",
    border: "border-l-green-400"
  },
  health: {
    badge: "bg-red-500/20 text-red-300",
    border: "border-l-red-400"
  },
  interior: {
    badge: "bg-amber-500/20 text-amber-300",
    border: "border-l-amber-400"
  },
  defense: {
    badge: "bg-slate-400/20 text-slate-300",
    border: "border-l-slate-400"
  },
  government: {
    badge: "bg-violet-500/20 text-violet-300",
    border: "border-l-violet-400"
  },
  "arab-contractors": {
    badge: "bg-cyan-500/20 text-cyan-300",
    border: "border-l-cyan-400"
  },
  private: {
    badge: "bg-pink-500/20 text-pink-300",
    border: "border-l-pink-400"
  },
  "sales-tax": {
    badge: "bg-orange-500/20 text-orange-300",
    border: "border-l-orange-400"
  }
};

export default function ProjectGrid() {
  const [activeSector, setActiveSector] = useState<string | "all">("all");

  const projects =
    activeSector === "all"
      ? PROJECT_SECTORS.flatMap((s) => s.projects)
      : PROJECT_SECTORS.find((s) => s.id === activeSector)?.projects ?? [];

  const sectorName =
    activeSector === "all"
      ? "All Projects"
      : PROJECT_SECTORS.find((s) => s.id === activeSector)?.name ?? "All";

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide flex-nowrap md:flex-wrap md:overflow-visible">
        <button
          onClick={() => setActiveSector("all")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition whitespace-nowrap flex-shrink-0 ${activeSector === "all"
              ? "border-accent bg-accent/20 text-accent"
              : "border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:text-white"
            }`}
        >
          All
        </button>
        {PROJECT_SECTORS.map((sector) => (
          <button
            key={sector.id}
            onClick={() => setActiveSector(sector.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition whitespace-nowrap flex-shrink-0 ${activeSector === sector.id
                ? "border-accent bg-accent/20 text-accent"
                : "border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:text-white"
              }`}
          >
            {sector.name}
          </button>
        ))}
      </div>

      <p className="text-sm text-white/60">
        Showing {projects.length} project{projects.length !== 1 ? "s" : ""} in{" "}
        {sectorName}
      </p>

      <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => {
          const sector = PROJECT_SECTORS.find(
            (s) => s.id === project.sectorId
          );
          const style =
            SECTOR_STYLES[project.sectorId] ?? {
              badge: "bg-white/10 text-white/80",
              border: "border-l-white/30"
            };

          const useLogoOnly = LOGO_ONLY_IDS.has(project.id);
          const imageSrc = useLogoOnly ? "/img/logof.jpeg" : `/img/${project.id}.jpg`;

          return (
            <div
              key={`${project.sectorId}-${project.id}-${index}`}
              className={`card-surface group flex flex-col gap-2 sm:gap-3 border-l-4 pl-3 pr-3 py-3 sm:pl-4 sm:pr-4 sm:py-4 hover:border-accent/40 transition ${style.border}`}
            >
              <div className="relative mb-2 sm:mb-3 h-36 w-full overflow-hidden rounded-xl bg-primary-muted/70">
                <Image
                  src={imageSrc}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                />
              </div>
              <span
                className={`inline-flex w-fit rounded px-2 py-0.5 text-xs font-medium ${style.badge}`}
              >
                {sector?.name ?? project.sectorId}
              </span>
              <h3 className="font-heading text-lg text-white leading-snug group-hover:text-accent transition">
                {project.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
