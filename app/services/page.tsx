import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/services";
import type { LucideIcon } from "lucide-react";
import {
  Phone,
  Video,
  Flame,
  Volume2,
  Wrench,
  Droplets,
  Shield,
  Monitor
} from "lucide-react";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  phone: Phone,
  video: Video,
  flame: Flame,
  volume: Volume2,
  wrench: Wrench,
  droplets: Droplets,
  shield: Shield,
  monitor: Monitor
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "ECE services: Telephone networks & PBX, CCTV, fire alarm, audio systems, facility maintenance, pool maintenance, access control, IT networks."
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <Section patterned className="pt-24 sm:pt-28 pb-10 sm:pb-14">
        <SectionHeader
          eyebrow="Our Services"
          title="Engineering Solutions Across Egypt"
          description="From telephone networks and surveillance to fire alarm, audio, facility maintenance, and IT — ECE delivers trusted solutions for government and private sectors."
          align="center"
        />
      </Section>

      <Section>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.iconKey];
            return (
              <Reveal key={service.id} delay={0.03 + index * 0.03}>
                <div className="card-surface flex h-full flex-col gap-4 p-4 sm:p-6 hover:border-accent/60 transition">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg">{service.name}</h3>
                      <p className="text-xs text-white/60" dir="rtl">
                        {service.nameAr}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-white/75">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </PageTransition>
  );
}
