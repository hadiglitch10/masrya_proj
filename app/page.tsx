import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { STATS, CLIENT_CATEGORIES } from "@/lib/constants";
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
  title: "Home",
  description:
    "ECE – Egyptian Company for Commerce & Engineering. Engineering trust since day one. Telephone, CCTV, fire alarm, audio systems, facility maintenance nationwide."
};

export default function HomePage() {
  const highlightServices = SERVICES.slice(0, 4);

  return (
    <PageTransition>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80"
            alt="Engineering and facility control"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,81,0.08),transparent_50%)]" />
        </div>

        <div className="page-section relative pt-24 sm:pt-28 md:pt-32">
          <div className="section-inner">
            <Reveal className="flex flex-col items-center text-center">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 mb-6">
                <Image
                  src="/img/logo.png"
                  alt="ECE Logo"
                  fill
                  className="object-contain"
                  sizes="112px"
                  priority
                />
              </div>
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-2">
                ECE
              </h1>
              <p className="font-heading text-base sm:text-xl md:text-2xl text-accent mb-2">
                Egyptian Company for Commerce & Engineering
              </p>
              <p className="text-sm sm:text-lg md:text-xl text-white/80 mb-1" dir="rtl">
                المصريه للتجاره والهندسه
              </p>
              <p className="text-sm sm:text-base text-white/70 mb-6 sm:mb-8 max-w-md">
                Engineering Trust Since Day One
              </p>
              <Link href="/projects" className="btn-primary text-sm sm:text-base px-8 py-3">
                View Our Projects
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-secondary/80 p-4 sm:p-5 sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 border-white/10 sm:border-l first:border-l-0 pl-0 sm:pl-6 first:pl-0"
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

      <Section id="services" patterned>
        <Reveal>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-2">
            Our Services
          </h2>
          <p className="text-white/75 max-w-2xl mb-8">
            From telephone networks and CCTV to fire alarm systems and integrated
            facility maintenance — ECE delivers end-to-end solutions for
            government and private sectors.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {highlightServices.map((service, index) => {
              const Icon = SERVICE_ICONS[service.iconKey];
              return (
                <Reveal key={service.id} delay={0.05 + index * 0.05}>
                  <div className="card-surface flex h-full flex-col gap-4 p-4 sm:p-6 hover:border-accent/60 hover:shadow-[0_18px_60px_rgba(0,0,0,0.5)] transition">
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
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
            Clients & Sectors
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {CLIENT_CATEGORIES.map((cat) => (
              <div
                key={cat}
                className="card-surface flex items-center justify-center p-6"
              >
                <span className="font-heading text-lg text-accent">{cat}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section patterned>
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-4">
              Ready to work with us?
            </h2>
            <p className="text-white/75 max-w-xl mb-6">
              Partner with ECE for trusted engineering solutions. Contact our
              team to discuss your project requirements.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-3">
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </Section>
    </PageTransition>
  );
}
