"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <h1 className="font-heading text-[#3d0088] text-[2.5rem] md:text-[3.5rem] font-bold leading-tight text-left">
              Chcete aby váš biznis porástol? Tak nás kontaktujte, bude to rast,
              dva!
            </h1>
          </div>
          <div className="md:col-span-6">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="font-heading text-[#3d0088] text-2xl font-bold">
                  Ďakujeme za váš záujem!
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Meno a priezvisko"
                  autoComplete="given-name"
                  className="w-full h-[2em] px-4 py-6 border border-gray-300 rounded-[3px] text-lg focus:outline-none focus:border-[#57fd05] focus:shadow-[0_0_0_1px_#57fd05] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="w-full h-[2em] px-4 py-6 border border-gray-300 rounded-[3px] text-lg focus:outline-none focus:border-[#57fd05] focus:shadow-[0_0_0_1px_#57fd05] transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tel.číslo"
                  autoComplete="tel"
                  className="w-full h-[2em] px-4 py-6 border border-gray-300 rounded-[3px] text-lg focus:outline-none focus:border-[#57fd05] focus:shadow-[0_0_0_1px_#57fd05] transition-all"
                />
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="confirm-existence"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-b from-[#3d0088] to-[#260055] border border-[#402266] text-[#57fd05] font-heading font-bold text-xl hover:opacity-90 transition-opacity"
                >
                  Poslať kontakt
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
