"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you. Your message has been recorded for this demo.");
  };

  return (
    <form
      className="space-y-4 card-surface p-5 sm:p-6 md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-white/60">
            Your Name *
          </label>
          <input className="input" type="text" required />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-white/60">
            Your Email *
          </label>
          <input className="input" type="email" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-white/60">
            Phone
          </label>
          <input className="input" type="tel" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-white/60">
            Facility Type
          </label>
          <input
            className="input"
            type="text"
            placeholder="Compound, club, commercial, mixed-use..."
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-white/60">
          Your Message *
        </label>
        <textarea className="textarea" required />
      </div>
      <button type="submit" className="btn-primary">
        Send Message
      </button>
    </form>
  );
}

