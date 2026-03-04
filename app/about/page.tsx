import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover El Masrya's story, mission, vision, and values as a leading facility management company in Egypt."
};

export default function AboutPage() {
  return (
    <>
      <Section patterned className="pt-28 pb-14">
        <SectionHeader
          eyebrow="About El Masrya"
          title="Pioneers in Facility Management"
          description="Since our inception, El Masrya has focused on delivering consistent, high-quality facility management services for Egypt’s most demanding developments."
          align="center"
        />
      </Section>

      <Section>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.3fr,1fr] lg:items-start">
          <Reveal>
            <div className="space-y-4 text-sm sm:text-base text-white/75">
              <p>
                El Masrya specializes in the integrated operation and maintenance
                of clubs, residential compounds, and commercial facilities across
                Egypt. By combining hard services, soft services, and specialist
                systems under one umbrella, we provide our clients with a single,
                accountable partner for every asset.
              </p>
              <p>
                Our teams bring together engineers, supervisors, and technicians
                with deep experience in electrical networks, HVAC systems,
                plumbing, firefighting, security systems, and civil works. We
                operate according to structured preventive maintenance plans,
                supported by clear reporting and performance indicators.
              </p>
              <p>
                Whether mobilizing a new compound or taking over an existing
                facility, we focus on stability in operations and transparency in
                communication—protecting our clients&apos; investments and the
                day-to-day experience of their communities.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 bg-primary-soft shadow-card sm:h-80">
              <Image
                src="https://images.unsplash.com/photo-1590496793130-42dd2350140d?auto=format&fit=crop&w=1000&q=80"
                alt="Operations team inspecting mechanical equipment"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-5 rounded-full bg-black/70 px-4 py-2 text-xs text-white/80">
                24/7 operations · On-ground supervision · Proactive maintenance
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section patterned>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="card-surface p-6 sm:p-8 space-y-3">
              <h3 className="font-heading text-2xl">Our Mission</h3>
              <p className="text-sm sm:text-base text-white/75">
                To protect and enhance the value of our clients&apos; assets by
                delivering reliable, transparent, and professional facility
                management and maintenance services across every discipline.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-surface p-6 sm:p-8 space-y-3">
              <h3 className="font-heading text-2xl">Our Vision</h3>
              <p className="text-sm sm:text-base text-white/75">
                To be the trusted partner of choice for integrated facility
                management in Egypt, known for our technical expertise, responsive
                teams, and commitment to excellence in every detail.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Our DNA"
          title="Values That Guide Every Site"
          description="From day one, we build teams and processes around a shared set of values that show up in every interaction."
        />

        <Reveal className="mt-8">
          <div className="grid grid-auto-fit gap-6">
            {[
              {
                title: "Reliability",
                body: "We show up, follow through, and stand behind our commitments in every contract."
              },
              {
                title: "Safety First",
                body: "Our teams operate under strict HSE procedures, protecting people, assets, and reputation."
              },
              {
                title: "Transparency",
                body: "Clear reporting, documented procedures, and open communication with asset owners."
              },
              {
                title: "Proactive Mindset",
                body: "We focus on prevention and optimization instead of reactive firefighting."
              },
              {
                title: "Customer Focus",
                body: "We understand the expectations of residents, tenants, and visitors and design our services around them."
              },
              {
                title: "Continuous Improvement",
                body: "We capture lessons learned from each site and feed them into our standards."
              }
            ].map((value) => (
              <div
                key={value.title}
                className="card-surface p-6 hover:border-accent/60 transition"
              >
                <h3 className="font-heading text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-white/75">{value.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}

