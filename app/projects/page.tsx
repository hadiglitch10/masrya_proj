import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore ECE's project portfolio. Government, military, health, private sector, and more. Youth & Sports, Agriculture, Health, Interior, Defense ministries, Arab Contractors, and nationwide projects."
};

export default function ProjectsPage() {
  return (
    <>
      <Section patterned className="pt-24 sm:pt-28 pb-10 sm:pb-14">
        <Reveal>
          <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">
            Our Projects
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-white/80">
            Over 100 projects delivered across government ministries, defense,
            health, agriculture, and private sector. Filter by sector to explore
            our track record.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <ProjectGrid />
        </Reveal>
      </Section>
    </>
  );
}
