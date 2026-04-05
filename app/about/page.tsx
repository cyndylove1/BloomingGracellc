// "use client";
// import { ArrowUpRight, CheckCircle2 } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import Cta from "../components/cta";

// interface StatItem {
//   value: string;
//   label: string;
// }

// export default function About() {
//   const [activeTab, setActiveTab] = useState("Our Mission");

//   const stats: StatItem[] = [
//     { value: "15+", label: "Global Ultra-High-Net-Worth Clients" },
//     { value: "35+", label: "Estates Currently Managed" },
//     { value: "20+", label: "Years Private Service Experience" },
//     { value: "500+", label: "Professional Placements Made" },
//     { value: "98%", label: "Client Retainment Rate" },
//     { value: "$5M+", label: "Household Assets Secured" },
//   ];

//   const tabContent = {
//     "Our Mission": {
//       title: "Compassionate & Professional Care",
//       content:
//         "To deliver compassionate, reliable, and professional healthcare staffing solutions that improve quality of life for every individual we serve.",
//     },
//     "Our Vision": {
//       content:
//         "To become a leading healthcare staffing provider across Maryland and beyond, setting the standard for excellence in home and facility care.",
//     },
//     "Our Values": {
//       content:
//         "Our core foundation is built on Compassion, Integrity, and Excellence. We believe that every interaction is an opportunity to provide dignity and respect.",
//     },
//   };

//   const tabs = Object.keys(tabContent);
//   const pridePoints = [
//     "Integrity and confidentiality",
//     "Thorough vetting and background checks",
//     "Tailored staffing solutions",
//     "Ongoing client and staff support",
//   ];

//   return (
//     <>
//       <section className="bg-[#000B40] pt-40 pb-20 px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex justify-center items-center gap-2 mb-6">
//             <div className="h-[1px] w-12 bg-[#FFD700]/50" />
//             <span className="text-[#FFD700] font-bold text-sm uppercase tracking-[0.4em]">
//               Our Mission
//             </span>
//             <div className="h-[1px] w-12 bg-[#FFD700]/50" />
//           </div>
//           <h1 className="text-white text-5xl md:text-6xl font-serif italic mb-6">
//             Our Care <span className="text-[#7C5CFC]">Specialties.</span>
//           </h1>
//           <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
//             From private home care to large-scale facility staffing, Blooming
//             Grace LLC provides the professional expertise your health journey
//             demands.
//           </p>
//         </div>
//       </section>
//       <section className="bg-[#E5E7FF] pb-24 pt-[13rem] px-6 md:px-12 overflow-hidden relative">
//         <div className="max-w-7xl mx-auto group-container">
//           <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-20">
//             {/* LEFT MEDIA & STATS COLUMN */}
//             <div className="w-full md:w-[45%] flex flex-col justify-center md:justify-start mt-12 md:mt-0 relative z-0">
//               <div className="relative h-[450px] md:h-[400px] w-full mb-16 md:mb-20">
//                 <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-100/40 rounded-full scale-125 -z-10 -translate-x-1/2 -translate-y-1/2" />
//                 <Image
//                   src="/assets/about.jpg"
//                   alt="Elite domestic staff team"
//                   fill
//                   className="object-cover h-full transition-transform duration-700 group-container:hover:scale-[1.03] rounded-3xl"
//                   priority
//                 />
//                 <div className="absolute -bottom-10 right-[-20px] bg-white px-8 py-5 rounded-2xl shadow-xl flex items-center gap-6 border border-blue-50 z-20">
//                   <div>
//                     <p className="text-2xl font-extrabold text-[#0A0F2D] tracking-tight">
//                       15+
//                     </p>
//                     <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
//                       Years Of Experience
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-16 border-t border-purple-200 pt-4 z-10">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="flex flex-col gap-3 group">
//                     <span className="text-4xl md:text-4xl font-bold tracking-tighter text-[#6354E1] transition-transform duration-300 group-hover:-translate-y-1">
//                       {stat.value}
//                     </span>
//                     <span className="text-gray-700 text-sm font-medium leading-snug max-w-[160px] opacity-90">
//                       {stat.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT CONTENT COLUMN */}
//             <div className="w-full md:w-[50%] flex flex-col gap-10 md:gap-10 pr-8 z-20">
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-2">
//                   <span className="text-[#7C5CFC] font-bold text-2xl">✦</span>
//                   <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-widest">
//                     About Our Agency
//                   </span>
//                 </div>
//                 <h2 className="text-xl md:text-4xl font-serif text-slate-900 leading-tight pt-2 mb-4">
//                   Connect with <br />
//                   <span className="italic font-light">Blooming Grace LLC</span>
//                 </h2>
//                 <p className="text-slate-600 max-w-2xl leading-relaxed mb-4 text-lg opacity-90 font-light">
//                   Blooming Grace LLC is a residential healthcare staffing agency
//                   in Baltimore providing skilled professionals including CNA,
//                   GNA, LPN, RN, and NP to homes and healthcare facilities. We
//                   pride ourselves on delivering intuitive and impactful
//                   user-centred applications that solve real-world problems.
//                 </p>
//               </div>

//               <div className="flex flex-col gap-10 border-t border-purple-200 pt-8">
//                 <div className="p-4 bg-purple/50 rounded-3xl border border-purple-100">
//                   <p className="font-bold mb-7 text-2xl text-[#0A0F2D]">
//                     We pride ourselves on:
//                   </p>
//                   <div className="grid grid-cols-1 space-y-4 md:grid-cols-2">
//                     {pridePoints.map((point, index) => (
//                       <div key={index} className="flex items-center gap-4">
//                         <CheckCircle2 className="text-[#6354E1] fill-purple-700/10 w-7 h-7 shrink-0" />
//                         <span className="font-light text-gray-900 text-base">
//                           {point}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <Link href="/apply">
//                   <button className="bg-[#FFD700] text-[#0A0F2D] px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-md active:scale-95 group w-fit">
//                     Work With Us{" "}
//                     <ArrowUpRight
//                       size={16}
//                       className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                     />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* MISSION & VISION SECTION */}
//           <div className="mt-20 max-w-4xl">
//             <div className="inline-block bg-[#FFC107] px-6 py-2 rounded-full mb-6">
//               <span className="text-black font-extrabold text-xs uppercase tracking-widest">
//                 Mission & Vision
//               </span>
//             </div>

//             <div className="relative border-b border-gray-200 mb-10">
//               <div className="flex gap-8 md:gap-16 overflow-x-auto no-scrollbar">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`pb-4 text-md font-bold transition-all whitespace-nowrap relative ${
//                       activeTab === tab
//                         ? "text-gray-900"
//                         : "text-gray-900 hover:text-gray-700"
//                     }`}
//                   >
//                     {tab}
//                     {activeTab === tab && (
//                       <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2D433D]" />
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="min-h-[120px]">
//               <p className="text-gray-600 text-md leading-relaxed max-w-xl animate-in fade-in duration-500">
//                 {tabContent[activeTab as keyof typeof tabContent]?.content}
//               </p>

//               {activeTab === "Our Values" && (
//                 <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl">
//                   {[
//                     "Compassion",
//                     "Integrity",
//                     "Excellence",
//                     "Reliability",
//                     "Professionalism",
//                   ].map((val) => (
//                     <div
//                       key={val}
//                       className="text-[#2D433D] font-semibold text-sm tracking-tighter border-l-2 border-[#FFC107] pl-3"
//                     >
//                       {val}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//       <Cta />
//     </>
//   );
// }
"use client";
import React from "react";
import {
  Heart,
  ShieldCheck,
  Award,
  Eye,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/navbar";
import Cta from "../components/cta";

export default function About() {
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
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-[#FFD700]/50" />
              <span className="text-[#FFD700] font-bold text-sm uppercase tracking-[0.4em]">
                Our Story
              </span>
              <div className="h-[1px] w-12 bg-[#FFD700]/50" />
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-serif italic mb-6">
              Blooming Grace LLC in Care,{" "}
              <span className="text-[#7C5CFC]">Excellence</span> in Service.
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Blooming Grace LLC was founded on a simple premise: healthcare
              staffing should be as compassionate as the care itself. We bridge
              the gap between Maryland’s premier facilities and the elite
              professionals who power them.
            </p>
          </div>
        </section>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-32 px-6 bg-[#D1D5F5]">
        <div className="flex items-center justify-center pb-10 gap-2">
          <span className="text-[#7C5CFC] font-bold text-2xl">✦</span>
          <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-widest">
            Our Mission
          </span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-10 shadow-md">
            {/* Mission Card: Added 'group' to parent */}
            <div className="group p-6 h-[300px] rounded-xl relative border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-300">
              <div className="w-10 h-10 bg-[#000B40] rounded-md flex items-center justify-center mb-8 shadow-lg text-[#FFD700] group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>

              {/* Headline: Changed 'hover:text-white' to 'group-hover:text-white' */}
              <h2 className="text-[#0A0F2D]  text-xl font-bold mb-6 transition-colors duration-300">
                Our Mission
              </h2>

              {/* Description: Changed 'hover:text-white' to 'group-hover:text-white' */}
              <p className="text-slate-600 text-lg font-light leading-relaxed italic transition-colors duration-300">
                "To deliver compassionate, reliable, and professional healthcare
                staffing solutions that improve quality of life."
              </p>
            </div>

            {/* Vision Card: Unchanged */}
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
      <section className="py-24 px-6 bg-[#E5E7FF]/20 relative">
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
