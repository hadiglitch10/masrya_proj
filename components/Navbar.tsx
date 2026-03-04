"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:py-3 sm:px-6 lg:px-10 transition-all duration-300 ${
          scrolled ? "nav-blur bg-primary-muted/95 shadow-lg shadow-black/40" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-primary font-heading text-base sm:text-lg font-semibold">
            EM
          </div>
          <div className="ml-1 flex flex-col leading-tight">
            <span className="font-heading text-base sm:text-lg font-semibold tracking-wide">
              El Masrya
            </span>
            <span className="text-xs text-white/60">
              Facility Management
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-xs">
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-primary-soft/80 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary-soft/95 nav-blur border-b border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4 pt-2 sm:px-6 lg:px-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1.5 text-sm text-white/85"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 btn-primary w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

