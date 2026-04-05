"use client"; // Required for all client-side logic
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link"; // Import Next.js Link
import React from "react";

// interface defining the properties of each state item for typesafety
interface StatItem {
  value: string;
  label: string;
}

export default function AboutSection() {
  // 1. STATS DATA ARRAY: Structured and organized for mapping
  const stats: StatItem[] = [
    { value: "15+", label: "Global Ultra-High-Net-Worth Clients" },
    { value: "35+", label: "Estates Currently Managed" },
    { value: "20+", label: "Years Private Service Experience" },
    { value: "500+", label: "Professional Placements Made" },
    { value: "98%", label: "Client Retainment Rate" },
    { value: "$5M+", label: "Household Assets Secured" },
  ];

  // 2. PRIDE POINTS DATA ARRAY: Defined for mapping
  const pridePoints = [
    "Integrity and confidentiality",
    "Thorough vetting and background checks",
    "Tailored staffing solutions",
    "Ongoing client and staff support",
  ];

  return (
    /* Changed bg-white to match the lavender tint in the image */
    <section className="bg-[#E5E7FF] pb-24 pt-[13rem] px-6 lg:px-12 md:px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto group-container">
        {/* Main CSS Flex Container: MD and above are split; mobile is column */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-20">
          {/* 3. LEFT MEDIA & STATS COLUMN: Image section moved here */}
          <div className="w-full md:w-[45%] flex flex-col justify-center md:justify-start mt-12 md:mt-0 relative z-0">
            {/* --- Image Section Container --- */}
            <div className="relative h-[450px] md:h-[400px] w-full mb-16 md:mb-20">
              {/* Subtle background accent */}
              <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-100/40 rounded-full scale-125 -z-10 -translate-x-1/2 -translate-y-1/2" />

              {/* Main Image */}
              <Image
                src="/assets/about.jpg"
                alt="Elite domestic staff team"
                fill
                className="object-cover h-full transition-transform duration-700 group-container:hover:scale-[1.03] rounded-3xl"
                // sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />

              {/* Floating '15+' experience card */}
              <div className="absolute -bottom-10 right-[-20px] bg-white px-8 py-5 rounded-2xl shadow-xl flex items-center gap-6 border border-blue-50 z-20">
                <div>
                  <p className="text-2xl font-extrabold text-[#0A0F2D] tracking-tight">
                    15+
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Years Of Experience
                  </p>
                </div>
              </div>
            </div>

            {/* --- 5. STATS SECTION (Sitting under the image) --- */}
            <div className="grid grid-cols-2 md:grid-cols-3  gap-x-8 md:gap-x-16 border-t border-purple-200 pt-4 z-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-3 group">
                  <span className="text-4xl md:text-4xl font-bold tracking-tighter text-[#6354E1] transition-transform duration-300 group-hover:-translate-y-1">
                    {stat.value}
                  </span>
                  <span className="text-gray-700 text-sm md:text-sm font-medium leading-snug max-w-[160px] opacity-90">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
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
              <h2 className="text-xl md:text-4xl font-serif text-slate-900 leading-tight pt-2 mb-4">
                Connect with <br />
                <span className="italic font-light">Blooming Grace LLC</span>
              </h2>

              <p className="text-slate-600 max-w-2xl leading-relaxed mb-4 text-lg opacity-90 font-light">
                Blooming Grace LLC is a residential healthcare staffing agency
                in Baltimore providing skilled professionals including CNA, GNA,
                LPN, RN, and NP to homes and healthcare facilities. We pride
                ourselves on delivering intuitive and impactful user-centred
                applications that solve real-world problems.
              </p>
            </div>

            {/* Pride Points & Button Block */}
            <div className="flex flex-col gap-10 border-t border-purple-200">
              <div className=" p-4 bg-purple/50 rounded-3xl border border-purple-100">
                <p className="font-bold mb-7 text-2xl text-[#0A0F2D]">
                  We pride ourselves on:
                </p>
                <div className="grid grid-cols-1 space-y-4 md:grid-cols-2">
                  {pridePoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircle2 className="text-[#6354E1] fill-purple-700/10 w-7 h-7 shrink-0" />
                      <span className="font-light text-gray-900 text-base">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/apply">
                <button className="mt-4 md:mt-0 bg-[#FFD700] text-[#0A0F2D] px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-md active:scale-95 group">
                  Work With Us{" "}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
