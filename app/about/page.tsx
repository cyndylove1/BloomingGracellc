"use client";
import { motion, Variants } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Award,
  Eye,
  Target,
  CheckCircle2,
} from "lucide-react";
import Cta from "../components/ui/cta";

export default function About() {
  const BENTO_TRANSITION_BASE = {
    duration: 0.8,

    ease: [0.22, 1, 0.36, 1] as const,
  };
  const topTextEntry: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...BENTO_TRANSITION_BASE,
        delay: 0.2,
      },
    },
  };
  const values = [
    {
      title: "Compassion",
      icon: <Heart className="text-[#7C5CFC]" size={28} />,
      desc: "Putting humanity at the center of every healthcare interaction.",
      borderColor: "border-[#7C5CFC]/30",
    },
    {
      title: "Integrity",
      icon: <ShieldCheck className="text-[#7C5CFC]" size={28} />,
      desc: "Upholding the highest ethical standards in staffing and care.",
      borderColor: "border-[#7C5CFC]/30",
    },
    {
      title: "Excellence",
      icon: <Award className="text-[#7C5CFC]" size={28} />,
      desc: "Commitment to superior clinical outcomes and professional growth.",
      borderColor: "border-[#7C5CFC]/30",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 px-6 bg-[#000B40] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-[#7C5CFC] to-transparent" />
        </div>

        <section className="bg-[#000B40]  pb-20 px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={topTextEntry}
            className="max-w-7xl mx-auto text-center"
          >
            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-[#FFD700]/50" />
              <span className="text-[#FFD700] font-bold text-sm uppercase tracking-[0.4em]">
                Our Story
              </span>
              <div className="h-[1px] w-12 bg-[#FFD700]/50" />
            </div>
            <h1 className="text-white text-3xl md:text-6xl font-serif italic mb-6">
              Booming Grace LLC in Care,{" "}
              <span className="text-[#7C5CFC]">Excellence</span> in Service.
            </h1>
            <p className="text-white/60 text-md md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Booming Grace LLC was founded on a simple premise: healthcare
              staffing should be as compassionate as the care itself. We bridge
              the gap between Maryland’s premier facilities and the elite
              professionals who power them.
            </p>
          </motion.div>
        </section>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-32 md:px-6 px-4 bg-[#D1D5F5]">
        <div className="flex items-center justify-center pb-10 gap-2">
          <span className="text-[#7C5CFC] font-bold text-2xl">✦</span>
          <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-widest">
            Our Mission
          </span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-10 shadow-md">
            <div className="group p-6 h-[300px] rounded-xl relative border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-300">
              <div className="w-10 h-10 bg-[#000B40] rounded-md flex items-center justify-center mb-8 shadow-lg text-[#FFD700] group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>

              <h2 className="text-[#0A0F2D]  text-xl font-bold mb-6 transition-colors duration-300">
                Our Mission
              </h2>

              <p className="text-slate-600 text-lg font-light leading-relaxed italic transition-colors duration-300">
                "To deliver compassionate, reliable, and professional healthcare
                staffing solutions that improve quality of life."
              </p>
            </div>

            <div className="group p-6 h-[300px] rounded-xl relative border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-10 h-10 bg-[#000B40] rounded-md opacity-10 blur-3xl" />
              <div className="w-10 h-10 bg-[#000B40] rounded-md flex items-center justify-center mb-8 shadow-lg text-[#FFD700] group-hover:scale-110 transition-transform">
                <Eye size={24} />
              </div>
              <h2 className="text-[#0A0F2D] text-xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-slate-600  text-lg font-light leading-relaxed italic">
                "To become a leading healthcare staffing provider across
                Maryland and beyond."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES SECTION --- */}
      <section className="py-24 md:px-6 px-4 bg-[#E5E7FF]/20 relative">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center pb-10 gap-2">
            <span className="text-[#7C5CFC] font-bold text-2xl">✦</span>
            <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-widest">
              Our Core Values
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className={`bg-white p-10 rounded-[2rem] border-b-4 ${value.borderColor} shadow-sm transition-shadow duration-300 relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-8">
                {value.icon}
              </div>
              <h3 className="text-[#0A0F2D] text-2xl font-bold mb-4">
                {value.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2 text-xs font-bold text-[#7C5CFC] uppercase tracking-widest">
                  <CheckCircle2 size={14} /> Verified Standard
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
