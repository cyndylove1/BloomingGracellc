"use client";
import Hero from "./components/hero";
import HowWeWork from "./components/howWeWork";
import WhyUs from "./components/whyus";
import Testimonials from "./components/testimonial";
import FAQ from "./components/faq";
import Cta from "./components/cta";
import AboutSection from "./components/aboutSection";
import ServicesSection from "./components/servicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUs />
      <HowWeWork />
      <Testimonials />
      <FAQ />
      <Cta />
    </>
  );
}
