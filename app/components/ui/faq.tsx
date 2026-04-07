import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>();

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

  return (
    <>
      {/* --- FAQ SECTION --- */}
      <section className="pt-40 pb-24 md:px-6 px-4 bg-[#FAFAFB]">
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
    </>
  );
}
