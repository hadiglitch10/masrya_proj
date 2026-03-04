import type { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact El Masrya to discuss facility management and maintenance requirements for your clubs, compounds, or commercial developments."
};

export default function ContactPage() {
  return (
    <>
      <Section patterned className="pt-28 pb-14">
        <SectionHeader
          eyebrow="Contact"
          title="How can we assist you?"
          description="Share a few details about your facility and our team will connect with you to discuss the right service model."
          align="center"
        />
      </Section>

      <Section className="pb-12 sm:pb-16">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-start">
            <ContactForm />

            <div className="space-y-4">
              <div className="card-surface p-6 sm:p-8 space-y-3">
                <h3 className="font-heading text-xl">Contact Information</h3>
                <div className="space-y-2 text-sm text-white/75">
                  <p>
                    <span className="font-medium text-white">Hotline: </span>
                    {CONTACT_INFO.phone}
                  </p>
                  <p>
                    <span className="font-medium text-white">Email: </span>
                    {CONTACT_INFO.email}
                  </p>
                  <p>
                    <span className="font-medium text-white">Office Address: </span>
                    {CONTACT_INFO.address}
                  </p>
                </div>
                <button className="btn-outline mt-2 w-full justify-center">
                  Location
                </button>
              </div>

              <div className="card-surface relative h-56 overflow-hidden p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-soft via-primary-muted to-black" />
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <span className="badge-soft mb-3">
                    Maps Integration
                  </span>
                  <h3 className="font-heading text-lg mb-1">
                    Google Maps Embed Placeholder
                  </h3>
                  <p className="max-w-xs text-xs text-white/70">
                    In production, this area will embed a live Google Maps view
                    of El Masrya&apos;s head office in Cairo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

