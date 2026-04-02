"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import CaseStudies from "@/components/CaseStudies";
import ClientLogos from "@/components/ClientLogos";
import AwardBanner from "@/components/AwardBanner";
import GroowEfekt from "@/components/GroowEfekt";
import CtaSection from "@/components/CtaSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollAnimation();

  return (
    <main>
      <Header />
      <Hero />
      <Testimonial />
      <CaseStudies />
      <ClientLogos />
      <AwardBanner />
      <GroowEfekt />
      <CtaSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
