import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const stats = [
    { value: "15+", label: "Global Ultra-High-Net-Worth Clients" },
    { value: "35+", label: "Estates Currently Managed" },
    { value: "20+", label: "Years Private Service Experience" },
    { value: "500+", label: "Professional Placements Made" },
    { value: "98%", label: "Client Retainment Rate" },
    { value: "$5M+", label: "Household Assets Secured" },
  ];

  return (
    <section className="bg-[#D1D5F5] pt-[10rem] lg:pt-[15rem] pb-20 px-4 md:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        {/* Changed grid-cols-2 to grid-cols-1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-start mb-12 md:mb-20 gap-8">
          <div className="flex items-center gap-2">
            <span className="text-[#7C5CFC] font-bold text-xl">✦</span>
            <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-wider">
              About Our Agency
            </span>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-[#0A0F2D] text-lg md:text-xl font-light leading-relaxed mb-8">
              We are a premier residential staffing agency dedicated to
              providing top-tier household professionals to families and
              individuals. Our mission is to simplify your life by connecting
              you with skilled, trustworthy, and experienced staff who deliver
              excellence in every task.
            </h2>
            <Link href="/contact">
              <button className="bg-[#FFD700] text-[#0A0F2D] px-8 py-4 rounded-lg font-bold text-base flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-md active:scale-95">
                Work With Us <ArrowUpRight size={18} />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Container */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[300px] md:h-[400px]">
              <Image
                src="/assets/about.jpg"
                alt="Elite domestic staff team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Stats Grid */}
          {/* Adjusted to 2 cols on mobile, 3 on tablet/desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6 md:gap-x-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-2">
                <span className="text-3xl md:text-4xl  font-bold tracking-tight text-[#6354E1]">
                  {stat.value}
                </span>
                <span className="text-gray-600 text-xs md:text-sm font-medium leading-tight max-w-[140px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
