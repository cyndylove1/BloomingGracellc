"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  // Initializing with index 1 (the second FAQ) to match your comment
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: "What types of households do you work with?",
      answer:
        "We support a wide range of residences, from busy city apartments requiring part-time help to expansive country estates needing full management teams.",
    },
    {
      question: "Will we work with a dedicated consultant?",
      answer:
        "Yes—100%. At Bloominggracellc, we don't believe in one-size-fits-all staffing. Every search is managed by a dedicated specialist tailored to your specific household culture.",
    },
    {
      question: "Are your staffing services customizable?",
      answer:
        "Absolutely. Whether you need a short-term placement for a special event or a permanent live-in estate manager, we flex our process to meet your timeline.",
    },
    {
      question: "What makes your domestic screening different?",
      answer:
        "Beyond standard background checks, we conduct deep-dive personality matching and multi-stage interviews to ensure the candidate shares your family values.",
    },
    {
      question: "How do we get started with Bloominggracellc?",
      answer:
        "Simply book an initial discovery call. We'll discuss your household needs, lifestyle requirements, and create a roadmap for your ideal staffing solution.",
    },
  ];

  return (
    <section className="bg-[#D1D5F5] py-12 md:py-20 px-4 md:px-6 lg:px-12 font-sans text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Featured Image */}
        {/* order-2 lg:order-1 ensures image stays on top on mobile if preferred, 
            or remove order classes to keep image above text on mobile */}
        <div className="w-full order-2 lg:order-1">
          <div className="relative rounded-[20px] overflow-hidden shadow-2xl h-[350px] md:h-[500px] lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=1000"
              alt="Bloominggracellc Staff"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="space-y-8 order-1 lg:order-2">
          {/* Section Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#7C5CFC] font-bold text-xl">✦</span>
              <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-[#0A0F2D] text-xl md:text-3xl font-bold leading-tight">
              Helping You Understand Our <br className="hidden md:block" />
              <span className="text-[#7C5CFC]">Process & Support</span>
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-0 divide-y divide-gray-400/30">
            {faqs.map((faq, index) => (
              <div key={index} className="py-2 md:py-4">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-start justify-between text-left py-4 group gap-4"
                >
                  <span
                    className={`text-lg md:text-xl font-bold transition-colors ${
                      openIndex === index
                        ? "text-[#1A1A1A]"
                        : "text-[#1A1A1A]/80"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Circular Icon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all mt-1 ${
                      openIndex === index
                        ? "bg-[#FFD700] text-black rotate-180"
                        : "bg-[#7C5CFC] text-white"
                    }`}
                  >
                    {openIndex === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-full lg:max-w-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
