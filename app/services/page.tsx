import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { SERVICES, type Service } from "@/lib/services";
import type { LucideIcon } from "lucide-react";
import {
  Bolt,
  Droplets,
  ThermometerSun,
  Hammer,
  Broom,
  ShieldCheck,
  Sprout,
  Flame
} from "lucide-react";

const SERVICE_ICONS: Record<Service["id"], LucideIcon> = {
  electrical: Bolt,
  plumbing: Droplets,
  hvac: ThermometerSun,
  civil: Hammer,
  cleaning: Broom,
  security: ShieldCheck,
  landscaping: Sprout,
  firefighting: Flame
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore El Masrya's integrated facility management services including electrical, plumbing, HVAC, civil works, cleaning, security systems, landscaping, and more."
};

export default function ServicesPage() {
  return (
    <>
      <Section patterned className="pt-28 pb-14">
        <SectionHeader
          eyebrow="Our Services"
          title="Integrated Facility Management Portfolio"
          description="A single partner to manage every technical and soft service inside your development—planned, executed, and monitored by specialists."
          align="center"
        />
      </Section>

      <Section>
        <Reveal>
          <div className="grid grid-auto-fit gap-6">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[service.id];
              return (
                <Reveal key={service.id} delay={0.05 + index * 0.04}>
                  <div className="card-surface flex h-full flex-col gap-4 p-6 hover:border-accent/70 hover:shadow-[0_18px_60px_rgba(0,0,0,0.6)] transition">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                          {service.category === "hard"
                            ? "Hard Services"
                            : service.category === "soft"
                              ? "Soft Services"
                              : "Specialist Systems"}
                        </p>
                        <h3 className="font-heading text-lg">{service.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-white/75">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </Section>

      <Section patterned>
        <Reveal>
          <div className="grid gap-8 md:grid-cols-4">
            {["Assessment", "Mobilization", "Steady Operations", "Reporting"].map(
              (step, index) => (
                <div
                  key={step}
                  className="card-surface flex flex-col gap-2 p-5 text-sm text-white/80"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">
                    Step {index + 1}
                  </span>
                  <h3 className="font-heading text-base">{step}</h3>
                  <p className="text-xs sm:text-sm text-white/70">
                    {index === 0 &&
                      "Technical and commercial review of assets, documents, and current operation model."}
                    {index === 1 &&
                      "Deployment of teams, tools, and systems with clear procedures and SLAs."}
                    {index === 2 &&
                      "Day-to-day operations under preventive maintenance plans and checklists."}
                    {index === 3 &&
                      "Transparent reporting, dashboards, and regular review meetings with stakeholders."}
                  </p>
                </div>
              )
            )}
          </div>
        </Reveal>
      </Section>
    </>
  );
}

