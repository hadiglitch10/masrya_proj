"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
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

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:py-3 sm:px-6 lg:px-10 transition-all duration-300 ${
          scrolled ? "nav-blur bg-primary-muted/95 shadow-lg shadow-black/40" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0">
            <Image
              src="/img/logo.png"
              alt="ECE Logo"
              fill
              className="object-contain"
              sizes="44px"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-heading text-base sm:text-lg font-semibold tracking-wide">
              ECE
            </span>
            <span className="text-xs text-white/60 hidden sm:block">
              Egyptian Company for Commerce & Engineering
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 text-sm font-medium text-white/80 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline hover:text-white ${
                  isActive ? "text-accent [&::after]:w-full" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`btn-primary text-xs ${
              pathname === "/contact"
                ? "ring-2 ring-white/50 ring-offset-2 ring-offset-primary"
                : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-primary-soft/80 p-2.5 text-white md:hidden min-w-[44px] min-h-[44px]"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-primary-soft/95 nav-blur border-b border-white/10"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-4 pt-2 sm:px-6 lg:px-10">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 text-sm min-h-[44px] flex items-center ${
                      isActive ? "text-accent" : "text-white/85 hover:text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className={`mt-2 w-full justify-center min-h-[44px] py-3 flex items-center rounded-full font-semibold text-sm ${
                  pathname === "/contact"
                    ? "ring-2 ring-white/50 bg-accent/90 text-primary"
                    : "btn-primary"
                }`}
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
