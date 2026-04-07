"use client";
import { motion, Variants } from "framer-motion";
import {
  Wallet,
  Calendar,
  TrendingUp,
  Clock,
  Upload,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";
import Cta from "../components/ui/cta";
import Link from "next/link";
import Button from "../components/button";
import UploadFile from "../components/uploadFile";

export default function Careers() {
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
  const benefits = [
    {
      title: "Competitive Pay",
      icon: <Wallet className="text-[#FFD700]" />,
      desc: "Industry-leading rates with performance bonuses.",
    },
    {
      title: "Flexible Shifts",
      icon: <Calendar className="text-[#FFD700]" />,
      desc: "Full-time, part-time, or per-diem to fit your life.",
    },
    {
      title: "Weekly Pay",
      icon: <Clock className="text-[#FFD700]" />,
      desc: "Fast, reliable direct deposits every single week.",
    },
    {
      title: "Career Growth",
      icon: <TrendingUp className="text-[#FFD700]" />,
      desc: "Support for certifications and advanced placements.",
    },
  ];

  const roles = ["CNA", "GNA", "LPN", "RN", "NP", "Home Health Aides"];

  const steps = [
    {
      id: "01",
      title: "Apply Online",
      desc: "Fill out our brief digital application form.",
    },
    {
      id: "02",
      title: "Upload Credentials",
      desc: "Submit your license and certifications via our portal.",
    },
    {
      id: "03",
      title: "Verification",
      desc: "Our team validates your background and experience.",
    },
    {
      id: "04",
      title: "Job Matching",
      desc: "Get matched with premier facilities or home care cases.",
    },
  ];

  const requirements = ["Resume (PDF/DOC)", "Certifications", "License", "ID"];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="bg-[#000B40] pt-40  pb-20 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={topTextEntry}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-[0.4em]">
              Join Our Team
            </span>
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
          </div>
          <h1 className="text-white text-3xl md:text-6xl font-serif italic mb-6 max-w-2xl mx-auto">
            Empowering Careers in{" "}
            <span className="text-[#7C5CFC]">Compassionate</span> Care.
          </h1>
          <p className="text-white/60 md:text-lg text-md max-w-2xl mx-auto font-light leading-relaxed">
            Booming Grace LLC isn't just a staffing agency; we are a community
            dedicated to professional excellence and human dignity.
          </p>
        </motion.div>
      </section>

      {/* --- WHY WORK WITH US --- */}
      <section className="py-24 bg-[#D1D5F5] md:px-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center pb-10 gap-2">
            <span className="text-[#7C5CFC] font-bold text-2xl">✦</span>
            <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-widest">
              Why Work With Us
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#000B40] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-[#0A0F2D] font-bold text-xl mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROLES & APPLICATION PROCESS --- */}
      <section className="py-24 bg-[#E5E7FF]/30 md:px-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left: Roles */}
            <div className="lg:w-1/3">
              <h2 className="text-[#0A0F2D] text-3xl font-bold mb-6">
                Roles Available
              </h2>
              <p className="text-slate-600 mb-8">
                We are actively recruiting licensed professionals for home and
                facility placements.
              </p>
              <div className="flex flex-wrap gap-3">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="px-5 py-2 bg-white border border-[#7C5CFC]/20 text-[#7C5CFC] font-bold rounded-full text-sm shadow-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <div className="mt-12 p-6 bg-[#000B40] rounded-2xl text-white">
                <Stethoscope className="text-[#FFD700] mb-4" size={32} />
                <p className="text-sm font-light opacity-80 italic">
                  "Join a network that values your expertise as much as your
                  heart."
                </p>
              </div>
            </div>

            {/* Right: Process */}
            <div className="lg:w-2/3">
              <h2 className="text-[#0A0F2D] text-3xl font-bold mb-12">
                Application Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 relative">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <span className="text-5xl font-black text-[#7C5CFC]/10 absolute -top-4 -left-2 select-none">
                      {step.id}
                    </span>
                    <div className="relative z-10 pt-2">
                      <h3 className="text-[#0A0F2D] font-bold text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESUME UPLOAD REQUIREMENTS --- */}
      <section className="py-24 md:px-6 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-[#000B40] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C5CFC] blur-[120px] opacity-20" />

          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-white text-3xl font-bold mb-8">
              Ready to Start?
            </h2>
            <p className="text-white/60 mb-8 font-light">
              Please ensure you have the following documents ready for your
              application:
            </p>
            <ul className="space-y-4">
              {requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-center gap-3 text-white/90 font-medium"
                >
                  <CheckCircle2 size={20} className="text-[#FFD700]" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <UploadFile />
        </div>
      </section>
      <Cta />
    </>
  );
}
