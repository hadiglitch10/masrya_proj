import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { STATS } from "@/lib/constants";
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
  title: "Home",
  description:
    "El Masrya provides integrated facility management for clubs, compounds, and commercial developments across Egypt."
};

export default function HomePage() {
  const highlightServices = SERVICES.slice(0, 4);

  return (
    <>
      <Section patterned className="pt-28 sm:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <Reveal className="space-y-6 text-center lg:text-left" delay={0.05}>
            <div className="flex justify-center lg:justify-start">
              <div className="stat-pill">Excellence in Every Detail</div>
            </div>
            <h1 className="font-heading text-[2.15rem] sm:text-5xl lg:text-6xl leading-tight">
              Integrated Facility Management
              <br />
              Crafted for Modern Egypt.
            </h1>
            <p className="mx-auto max-w-xl text-sm sm:text-base text-white/75 lg:mx-0">
              El Masrya is a leading Egyptian facility management company
              specializing in the comprehensive operation and maintenance of
              clubs, compounds, and commercial facilities. We handle every
              department so you do not have to.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="#services" className="btn-primary">
                View Services
              </a>
              <a href="/contact" className="btn-outline">
                Contact Our Team
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 bg-primary-soft shadow-card sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80"
                alt="Operations team overseeing a residential compound"
                fill
                priority
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Facilities We Manage
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Clubs · Compounds · Commercial Towers
                  </p>
                </div>
                <div className="rounded-full bg-black/60 px-4 py-2 text-xs text-white/80">
                  Cairo · North Coast · New Capital
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-10">
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-black/30 p-5 sm:grid-cols-4 sm:p-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 border-white/10 sm:border-l first:border-l-0 pl-0 sm:pl-5"
              >
                <span className="text-xl font-semibold text-accent sm:text-2xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="services">
        <SectionHeader
          eyebrow="Core Expertise"
          title="Comprehensive Facility Management Services"
          description="From hard services to soft services, El Masrya provides an integrated delivery model that keeps every asset performing at its best."
        />

        <Reveal className="mt-8">
          <div className="grid grid-auto-fit gap-6">
            {highlightServices.map((service, index) => {
              const Icon = SERVICE_ICONS[service.id];
              return (
                <Reveal key={service.id} delay={0.1 + index * 0.05}>
                  <div className="card-surface flex h-full flex-col gap-4 p-6 hover:border-accent/60 hover:shadow-[0_18px_60px_rgba(0,0,0,0.6)] transition">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <h3 className="font-heading text-lg">{service.name}</h3>
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
          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl sm:text-4xl">
                Trusted by Egypt&apos;s leading destinations.
              </h2>
              <p className="text-sm sm:text-base text-white/75">
                El Masrya supports large-scale residential communities, seaside
                destinations, sports and social clubs, and mixed-use commercial
                developments. Our teams operate behind the scenes so that
                residents and guests experience seamless, safe, and comfortable
                environments.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative h-32 overflow-hidden rounded-2xl border border-white/10 bg-primary-soft">
                <Image
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern business district in Cairo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-4 text-sm font-medium">
                  Commercial & Business Parks
                </div>
              </div>
              <div className="relative h-32 overflow-hidden rounded-2xl border border-white/10 bg-primary-soft">
                <Image
                  src="https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?auto=format&fit=crop&w=1000&q=80"
                  alt="Residential compound by the sea"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-4 text-sm font-medium">
                  Residential Compounds & Clubs
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

