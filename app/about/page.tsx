import type { Metadata } from "next";
import Image from "next/image";
import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ECE – Egyptian Company for Commerce & Engineering. Our story, mission, vision, and why clients choose us for trusted engineering solutions."
};

export default function AboutPage() {
  return (
    <PageTransition>
      <Section patterned className="pt-24 sm:pt-28 pb-10 sm:pb-14">
        <SectionHeader
          eyebrow="About ECE"
          title="Egyptian Company for Commerce & Engineering"
          description="Engineering trust since day one. Serving Egypt with excellence in telecommunications, security systems, and facility services."
          align="center"
        />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr] lg:items-start">
          <Reveal>
            <div className="space-y-4 text-sm sm:text-base text-white/75">
              <h2 className="font-heading text-2xl text-white">Our Story</h2>
              <p>
                ECE – Egyptian Company for Commerce & Engineering – has built a
                strong reputation over decades as a trusted partner for
                government entities, ministries, and private sector clients
                across Egypt. From telephone networks and PBX systems to CCTV,
                fire alarm, audio systems, and integrated facility maintenance,
                we deliver end-to-end engineering solutions.
              </p>
              <p>
                Our track record includes major projects for the Youth & Sports
                Ministry, Agriculture Ministry, Health Ministry, Interior
                Ministry, Defense Ministry, and leading private and tourism
                organizations. We operate nationwide, from Cairo to the coasts
                and governorates, with a commitment to quality and timely
                delivery.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-secondary shadow-card sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80"
                alt="ECE engineering and facility work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section patterned>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="card-surface p-6 sm:p-8 space-y-3">
              <h3 className="font-heading text-2xl text-accent">Our Mission</h3>
              <p className="text-sm sm:text-base text-white/75">
                To provide reliable, high-quality engineering solutions in
                telecommunications, security, and facility services — supporting
                our clients&apos; operations and contributing to Egypt&apos;s
                infrastructure development.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-surface p-6 sm:p-8 space-y-3">
              <h3 className="font-heading text-2xl text-accent">Our Vision</h3>
              <p className="text-sm sm:text-base text-white/75">
                To be the trusted engineering partner of choice for government
                and private sectors across Egypt, known for integrity, technical
                excellence, and nationwide service delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why Choose ECE"
          title="Trusted by Government & Private Sector"
          description="Clients choose ECE for our experience, reliability, and comprehensive service portfolio."
        />

        <Reveal className="mt-8">
          <ul className="space-y-4">
            {[
              {
                title: "Decades of Experience",
                text: "Over 30 years of trusted service to government ministries and private clients."
              },
              {
                title: "Government-Certified",
                text: "Authorized and certified to work with government entities and major institutions."
              },
              {
                title: "Wide Range of Services",
                text: "From telephone networks and CCTV to fire alarm, audio, pool maintenance, and facility management."
              },
              {
                title: "Nationwide Coverage",
                text: "Serving all governorates — from Cairo and Alexandria to the Red Sea coast and Upper Egypt."
              }
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/75">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </PageTransition>
  );
}
