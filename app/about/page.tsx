import React from "react";
import { ArrowUpRight, Activity, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Cta from "../components/cta";
import Navbar from "../components/navbar";
import WhyUs from "../components/whyus";

export default function About() {
  const stats = [
    { value: "15+", label: "Global Ultra-High-Net-Worth Clients" },
    { value: "35+", label: "Estates Currently Managed" },
    { value: "20+", label: "Years Private Service Experience" },
    { value: "500+", label: "Professional Placements Made" },
    { value: "98%", label: "Client Retainment Rate" },
    { value: "$5M+", label: "Household Assets Secured" },
  ];

  const pridePoints = [
    "Integrity and confidentiality",
    "Thorough vetting and background checks",
    "Tailored staffing solutions",
    "Ongoing client and staff support",
  ];

  return (
    <>
      <Navbar />
      <section className="bg-[#D1D5F5] pt-[10rem] pb-24 px-4 md:px-6 lg:px-12  font-sans text-[#0A0F2D]">
        <div className="lg:col-span-3 flex items-center gap-2 mb-4 lg:mb-0">
          <span className="text-[#7C5CFC] font-bold text-xl">✦</span>
          <span className="font-bold text-sm uppercase tracking-wider">
            About Our Agency
          </span>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Top Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-9">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                Empowering Households <br />
                With The Best Right Talent
              </h2>

              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
                At our Residential Staffing Agency, we understand that your home
                is more than just a place—it’s a reflection of your lifestyle,
                values, and personal comfort. That’s why we are committed to
                providing highly skilled, trustworthy, and discreet
                professionals who seamlessly integrate into your household.
              </p>

              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-10 max-w-4xl">
                With years of experience in the staffing industry, we have built
                a reputation for excellence by consistently delivering
                personalized staffing solutions. Our team works closely with
                clients to understand their specific requirements and ensures
                that every placement aligns with their expectations.
              </p>

              {/* "We Pride Ourselves" Section - Styled like the Talent image */}
              <div className="mb-10">
                <p className="font-bold mb-6 text-lg">We pride ourselves on:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {pridePoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#6354E1] fill-purple-700/10 w-6 h-6" />
                      <span className="font-semibold text-gray-800">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-[#FFD700] text-[#0A0F2D] px-8 py-4 rounded-lg font-bold text-base flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-md uppercase tracking-wide">
                Join Our Network <ArrowUpRight size={18} />
              </button>
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
      <WhyUs />
      <Cta />
    </>
  );
}
