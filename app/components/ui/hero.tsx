import { ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Button from "../button";
import Link from "next/link";
import Image from "next/image";

const BENTO_TRANSITION_BASE = {
  duration: 0.8,

  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Hero() {
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

  const rightImageEntry: Variants = {
    hidden: { opacity: 0, x: 100 },
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

  const containerStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  };

  const listItemEntry: Variants = {
    hidden: { opacity: 0, y: 20 },

    visible: {
      opacity: 1,
      y: 0,
      transition: { ...BENTO_TRANSITION_BASE, duration: 0.5, ease: "backOut" },
    },
  };

  return (
    <div className="min-h-screen font-sans selection:bg-yellow-400">
      <section className="bg-[#000B40] px-4 md:px-6 lg:px-12 pt-6 pb-0 relative">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto pt-[10rem]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={topTextEntry}
            className="flex flex-col pr-6"
          >
            <h1 className="text-white text-2xl font-serif md:text-6xl italic leading-[1.05] mb-14 md:max-w-5xl tracking-tighter">
              Compassionate Care. Qualified Professionals.&nbsp;
              <span className="text-[#FFD700] border-b-4 border-[#FFD700] italic">
                Trusted Staffing
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerStagger}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            <div className="lg:col-span-4 flex flex-col justify-between self-stretch pb-12">
              <motion.div variants={listItemEntry}>
                <p className="text-gray-400 text-md leading-relaxed mb-10 md:max-w-sm">
                  Connecting healthcare facilities and families in Baltimore
                  with licensed, vetted, and experienced caregivers.
                </p>
                <Link href="/contact">
                  <div className="flex items-center gap-6 mb-12">
                    <Button text="Apply as Caregiver" className="rounded-md" />
                  </div>
                </Link>
              </motion.div>

              <motion.div
                variants={listItemEntry}
                className="bg-[#7C5CFC] text-white md:p-8 p-4 rounded-3xl md:w-64 w-56 shadow-2xl relative overflow-hidden group mt-auto lg:translate-y-16 z-20 cursor-pointer transition-all duration-300 group-hover:bg-[#6354E1]"
              >
                <ShieldCheck className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10 group-hover:scale-110 transition-transform stroke-[1.5]" />
                <h3 className="md:text-4xl text-2xl font-bold mb-2">200+</h3>
                <p className="md:text-[12px] text-[10px] font-medium opacity-80 uppercase tracking-widest leading-tight">
                  Vetted Professionals <br /> Placed Annually
                </p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={rightImageEntry}
              className="lg:col-span-8 relative"
            >
              <div className="rounded-[20px] w-full border-[15px] border-[#0A0F2D] border-b-0 shadow-2xl translate-y-8 lg:translate-y-16 group transition-all duration-700 hover:scale-[1.03] cursor-pointer">
                <Image
                  width={200}
                  height={200}
                  src="/assets/nanny.jpg"
                  alt="Compassionate nanny care session" 
                  className="w-full h-auto min-h-[400px] object-cover rounded-t-[35px]"
                />

                {/* Floated guarantee badge --- */}
                <div className="absolute bottom-12 left-12 bg-white py-4 px-4 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-[#0A0F2D] font-bold text-sm">
                    ✓ 100% Confidentiality Guaranteed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
