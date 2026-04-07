import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingCard from "./floatingCard";
import AboutStat from "../aboutStat";
import PointSection from "../ui/pointSection";
import Button from "../button";

export default function AboutSection() {
  const BENTO_TRANSITION_BASE = {
    duration: 0.8,

    ease: [0.22, 1, 0.36, 1] as const,
  };
  const rightImageEntry: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ...BENTO_TRANSITION_BASE,
        duration: 0.9,
        delay: 0.4,
      },
    },
  };
  return (
    <section className="bg-[#E5E7FF] pb-24 pt-[13rem] px-4 lg:px-12 md:px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto group-container">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-20">
          <div className="w-full md:w-[45%] flex flex-col justify-center md:justify-start mt-12 md:mt-0 relative z-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={rightImageEntry}
              className="relative h-[450px] md:h-[400px]  mb-16 md:mb-20"
            >
              <div className="absolute top-1/2 left-1/2 w-[400px] md:h-[400px] h-full w-full bg-purple-100/40 rounded-full scale-125 -z-10 -translate-x-1/2 -translate-y-1/2" />

              {/* Main Image */}
              <Image
                src="/assets/care.jpg"
                alt="Elite domestic staff team"
                fill
                className="object-cover h-full transition-transform duration-700 group-container:hover:scale-[1.03] rounded-3xl"
                priority
              />
              {/* Floating experience card */}
              <FloatingCard />
            </motion.div>
            {/* --- about Stat) --- */}
            <AboutStat />
          </div>

          {/* 4. RIGHT CONTENT COLUMN: Text content moved here */}
          <div className="w-full md:w-[50%] flex flex-col gap-10 md:gap-10 pr-8 z-20">
            {/* Header Text Section */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[#7C5CFC] font-bold text-2xl">✦</span>
                <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-widest">
                  About Our Agency
                </span>
              </div>
              <h2 className="text-xl md:text-4xl font-serif text-slate-900 leading-tight pt-2 mb-4 max-w-xl">
                Connect with&nbsp;
                <span className="italic font-light">Booming Grace LLC</span>
              </h2>

              <p className="text-slate-600 max-w-2xl leading-relaxed mb-4 md:text-lg text-md opacity-90 font-light">
                Booming Grace LLC is a residential healthcare staffing agency in
                Baltimore providing skilled professionals including CNA, GNA,
                LPN, RN, and NP to homes and healthcare facilities. We pride
                ourselves on delivering intuitive and impactful user-centred
                applications that solve real-world problems.
              </p>
            </div>

            {/* Pride Points */}
            <PointSection />
            {/* button */}
            <Link href="/apply">
              <div className="flex items-center gap-6 mb-12">
                <Button text="Work With Us" className="rounded-md" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
