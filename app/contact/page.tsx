import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { CONTACT_INFO } from "@/lib/constants";
import { Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ECE – Egyptian Company for Commerce & Engineering. We serve all governorates across Egypt. نخدم جميع محافظات مصر"
};

export default function ContactPage() {
  return (
    <PageTransition>
      <Section patterned className="pt-24 sm:pt-28 pb-10 sm:pb-14">
        <SectionHeader
          eyebrow="Contact"
          title="Get in Touch"
          description="Reach out to discuss your project requirements."
          align="center"
        />
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center space-y-10 sm:space-y-12 py-6 sm:py-8 px-2">
            <div className="space-y-8 sm:space-y-10 flex flex-col items-center">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex flex-col items-center gap-3 group min-h-[80px] min-w-[44px] justify-center"
              >
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Phone className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Landline
                </span>
                <span className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-white group-hover:text-accent transition tabular-nums">
                  {CONTACT_INFO.phone}
                </span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.mobile}`}
                className="flex flex-col items-center gap-3 group min-h-[80px] min-w-[44px] justify-center"
              >
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Phone className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Mobile
                </span>
                <span className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-white group-hover:text-accent transition tabular-nums">
                  {CONTACT_INFO.mobile}
                </span>
              </a>

              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <MapPin className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Address
                </span>
                <p className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-white max-w-md leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-lg sm:text-xl text-accent font-medium" dir="rtl">
                نخدم جميع محافظات مصر
              </p>
              <p className="mt-1 text-white/80">
                We serve all Egyptian governorates
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </PageTransition>
  );
}
