"use client";
import React, { useState } from "react";
import {
  Plus,
  Minus,
  UploadCloud,
  ShieldCheck,
  LayoutDashboard,
  BellRing,
  CalendarCheck,
  MonitorCheck,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";
import Cta from "../components/cta";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      category: "For Clients",
      question: "How fast can I get staff?",
      answer:
        "We understand that healthcare needs are urgent. We provide staffing solutions same-day or within 24 hours, depending on the specific complexity of the role and your facility's requirements.",
    },
    {
      category: "For Applicants",
      question: "How long does onboarding take?",
      answer:
        "Once all required documents (certifications, IDs, and background checks) are submitted, our typical onboarding window is 24–72 hours before you are cleared for placement.",
    },
  ];

  const techFeatures = [
    {
      title: "Resume Upload System",
      icon: <UploadCloud size={24} />,
      desc: "Smart parsing technology that extracts key clinical skills automatically.",
    },
    {
      title: "Credential Tracking",
      icon: <ShieldCheck size={24} />,
      desc: "Real-time monitoring of licenses and certifications to ensure 100% compliance.",
    },
    {
      title: "Employer Portal",
      icon: <MonitorCheck size={24} />,
      desc: "A dedicated space for facilities to request staff and manage active shifts.",
    },
    {
      title: "Admin Dashboard",
      icon: <LayoutDashboard size={24} />,
      desc: "Complete visibility over staffing analytics and placement performance.",
    },
    {
      title: "Automated Notifications",
      icon: <BellRing size={24} />,
      desc: "Instant SMS and Email alerts for new job matches and shift updates.",
    },
    {
      title: "Interview Scheduling",
      icon: <CalendarCheck size={24} />,
      desc: "Integrated calendar sync for seamless coordination between talent and facilities.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* --- FAQ SECTION --- */}
      <section className="pt-40 pb-24 px-6 bg-[#FAFAFB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#7C5CFC] font-bold text-2xl">✦</span>
              <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-widest">
                FAQ
              </span>
            </div>

            <h1 className="text-[#000B40] text-xl md:text-4xl font-serif italic">
              How can we <span className="text-[#7C5CFC]">help you?</span>
            </h1>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-3xl transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#7C5CFC] shadow-lg shadow-purple-100 bg-white"
                    : "border-slate-100 bg-transparent"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div>
                    <span className="text-[#7C5CFC] text-[10px] font-bold uppercase tracking-widest block mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-[#000B40] text-lg md:text-xl font-bold">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }} // Rotate the icon container
                    className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? "bg-[#7C5CFC] text-white"
                        : "bg-slate-50 text-[#000B40]"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </motion.div>
                </button>

                {/* --- ANIMATED CONTENT --- */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8">
                        <p className="text-slate-500 leading-relaxed max-w-2xl border-t border-slate-50 pt-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGY SECTION --- */}
      <section className="py-24 px-6 bg-[#000B40] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#7C5CFC] rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#FFD700] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Sidebar Content */}
            <div className="lg:col-span-1">
              <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">
                  Next-Gen Platform
                </span>
              </div>
              <h2 className="text-white text-4xl md:text-5xl font-serif italic mb-6">
                Our Digital <br />{" "}
                <span className="text-[#7C5CFC] not-italic font-sans font-black">
                  Ecosystem.
                </span>
              </h2>
              <p className="text-white/50 font-light leading-relaxed mb-8">
                We leverage proprietary technology to streamline the staffing
                lifecycle, ensuring zero friction between hiring and healing.
              </p>
              <ul className="space-y-4">
                {["HIPAA Compliant", "Cloud-Based", "Real-time Sync"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-white/80 text-sm font-medium"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#7C5CFC]/20 flex items-center justify-center">
                        <ChevronRight size={14} className="text-[#7C5CFC]" />
                      </div>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Feature Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {techFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-[#7C5CFC]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#7C5CFC] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
