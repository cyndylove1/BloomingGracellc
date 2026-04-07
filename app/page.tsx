"use client";
import Hero from "./components/ui/hero";
import WhyUs from "./components/ui/whyus";
import Testimonials from "./components/ui/testimonial";
import FAQ from "./components/ui/faq";
import AboutSection from "./components/ui/aboutSection";
import Features from "./components/ui/features";
import Cta from "./components/ui/cta";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      {/* <ServicesSection /> */}
      <WhyUs />
      {/* <HowWeWork /> */}
      <Testimonials />
      <FAQ />
      <Features/>
      <Cta />
    </>
  );
}
