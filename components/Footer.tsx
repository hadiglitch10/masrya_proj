import Link from "next/link";
import Image from "next/image";
import { navLinks, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/60">
      <div className="page-section pb-8 pt-10">
        <div className="section-inner grid gap-10 md:grid-cols-[1.4fr,1fr,1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 flex-shrink-0">
                <Image
                  src="/img/logof-nobg.png"
                  alt="ECE Logo"
                  fill
                  className="object-contain"
                  sizes="44px"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-lg font-semibold tracking-wide">
                  ECE
                </span>
                <span className="text-xs text-white/60">
                  المصريه للتجاره والهندسه
                </span>
              </div>
            </div>
            <p className="max-w-md text-sm text-white/70">
              Egyptian Company for Commerce & Engineering — Engineering trust
              since day one. Serving government and private sectors across Egypt.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Contact
            </h3>
            <div className="space-y-1.5 text-sm text-white/70">
              <p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-white">
                  {CONTACT_INFO.mobile}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>{CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>

        <div className="section-inner mt-8 border-t border-white/10 pt-4 text-xs text-white/50 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ECE – Egyptian Company for Commerce &
            Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
