"use client";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  Users2,
  Zap,
  Home,
  CheckCircle2,
  FileText,
  Search,
  UserPlus,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import Cta from "../components/ui/cta";
import Button from "../components/button";

export default function Employers() {
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
  const solutions = [
    {
      title: "Temporary Staffing",
      icon: <Users2 className="text-[#FFD700]" />,
      desc: "Short-term coverage for vacations, sick leave, or seasonal surges.",
    },
    {
      title: "Permanent Placement",
      icon: <Building2 className="text-[#FFD700]" />, 
      desc: "Direct-hire solutions to find the perfect long-term fit for your team.",
    },
    {
      title: "Emergency Staffing",
      icon: <Zap className="text-[#FFD700]" />, 
      desc: "Rapid-response personnel for immediate, last-minute vacancies.",
    },
    {
      title: "Live-in Care",
      icon: <Home className="text-[#FFD700]" />, 
      desc: "Round-the-clock dedicated support for private residential needs.",
    },
  ];

  const steps = [
    {
      icon: <FileText size={24} />,
      title: "Submit Request",
      desc: "Share your specific staffing needs and facility requirements.",
    },
    {
      icon: <Search size={24} />,
      title: "Candidate Matching",
      desc: "We filter our elite pool to find the most qualified professionals.",
    },
    {
      icon: <UserPlus size={24} />,
      title: "Placement",
      desc: "Seamless integration of staff into your workflow and team.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Ongoing Support",
      desc: "Regular check-ins to ensure quality and compliance standards.",
    },
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="bg-[#000B40] pt-40 pb-20 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={topTextEntry}
          className="max-w-7xl mx-auto text-center flex flex-col items-center"
        >
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-[0.4em]">
              Employer Portal
            </span>
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
          </div>
          <h1 className="text-white text-3xl md:text-6xl font-serif italic mb-6 max-w-2xl mx-auto">
            Staffing Your Success with{" "}
            <span className="text-[#7C5CFC]">Precision.</span>
          </h1>
          <p className="text-white/60 md:text-lg text-md max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Need staff immediately? Start your request here and we will reach
            out within 2 hours.
          </p>
          <Link href="/contact" className="w-full flex justify-center">
            <Button text="Get Started" className="rounded-md" />
          </Link>
        </motion.div>
      </section>

      {/* --- OUR SOLUTIONS --- */}
      <section className="py-24 md:px-6 px-4 bg-[#D1D5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-[#000B40] md:text-4xl text-3xl font-serif italic mb-4">
                Flexible Workforce Solutions
              </h2>
              <p className="text-slate-500">
                From private homes to major hospitals, our models are designed
                to scale with your demand.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#000B40] rounded-md flex items-center justify-center mb-8 shadow-lg text-[#FFD700] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-[#000B40] font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS */}
      <section className="py-24 md:px-6 px-4 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#000B40] md:text-3xl text-2xl font-serif italic mb-16 text-center italic font-serif">
            The Partnership Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="absolute top-12 left-0 w-full h-[2px] bg-slate-200 hidden lg:block -z-0" />

            {steps.map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-[#F8F9FF] shadow-xl flex items-center justify-center text-[#7C5CFC] mb-6">
                  {step.icon}
                </div>
                <h3 className="text-[#000B40] font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY PARTNER WITH US --- */}
      <section className="py-24 md:px-6 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-[#000B40] text-4xl font-serif italic mb-8">
                Uncompromising Standards. <br />
                Faster Placements.
              </h2>
              <p className="text-slate-600 mb-10 text-lg font-light leading-relaxed">
                We understand that in healthcare, staffing isn't just about
                numbers—it's about patient safety and operational continuity.
              </p>
              <ul className="space-y-6">
                {[
                  {
                    t: "Pre-screened Candidates",
                    d: "Rigorous interviews and multi-layer background checks.",
                  },
                  {
                    t: "Fast Turnaround",
                    d: "Average fill time is 40% faster than industry standards.",
                  },
                  {
                    t: "Compliance Assurance",
                    d: "Continuous credential monitoring and HIPAA training.",
                  },
                ].map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 size={24} className="text-[#7C5CFC]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#000B40] text-lg">
                        {point.t}
                      </h4>
                      <p className="text-slate-500 text-sm">{point.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="w-full aspect-square bg-[#D1D5F5] rounded-[4rem] flex items-center justify-center p-12">
                <div className="w-full aspect-video bg-[#000B40] rounded-3xl shadow-2xl flex items-center justify-center p-8 relative">
                  <div className="text-center">
                    <p className="text-[#FFD700] text-6xl font-black mb-2">
                      98%
                    </p>
                    <p className="text-white font-bold uppercase tracking-widest text-xs">
                      Client Satisfaction Rate
                    </p>
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center border-8 border-white">
                    <CheckCircle2 className="text-[#000B40]" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
