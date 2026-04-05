"use client";
import React from "react";
import { ShieldCheck, Zap, CalendarClock, Headset, MapPin } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Licensed & Verified Professionals",
      desc: "Every staff member undergoes rigorous multi-layer background checks and credential validation.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Fast Placement",
      desc: "Our streamlined matching process cuts wait times significantly, filling vacancies in record time.",
      icon: <Zap size={24} />,
    },
    {
      title: "24/7 Dedicated Support",
      desc: "Our coordination team is on-call round the clock to handle emergencies and schedule changes.",
      icon: <Headset size={24} />,
    },
    {
      title: "Flexible Scheduling",
      desc: "Customized staffing solutions that adapt to your evolving facility needs and patient volumes.",
      icon: <CalendarClock size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFB]">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side: Static Content */}
          <div className="lg:sticky lg:top-24 flex flex-col justify-center h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#7C5CFC] font-bold text-2xl">✦</span>
              <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-widest">
                Why Us
              </span>
            </div>
            <h2 className="text-5xl md:text-4xl leading-tight font-serif italic text-[#0A0F2D] mb-8">
              Elevating the&nbsp;
              <span className="font-serif italic text-[#7C5CFC]">
                standard
              </span>{" "}
              of <br />
              healthcare staffing.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10">
              We specialize in bridging the gap between elite medical
              professionals and the facilities that need them most, ensuring
              continuity of care through precision matching.
            </p>

            {/* Local Expertise Card */}
            <div className="bg-[#000B40] p-8 rounded-3xl text-white overflow-hidden relative group mt-auto">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-[#FFD700]">
                  <MapPin size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Maryland Regional Office
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Rooted in Maryland.</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  We understand the unique facility standards and regulatory
                  requirements of our local healthcare landscape.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10" />
            </div>
          </div>

          {/* Right Side: Feature List */}
          <div className="grid grid-cols-1 gap-6">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500"
              >
                <div className="flex gap-6">
                  {/* Updated Icon Container */}
                  <div className="shrink-0 w-12 h-12 bg-[#000B40] text-[#FFD700] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ">
                    {reason.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0A0F2D] mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm font-light">
                      {reason.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-[1px] w-6 bg-slate-200 group-hover:w-12 group-hover:bg-[#7C5CFC] transition-all duration-500"></div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-[#7C5CFC]">
                        Feature 0{idx + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
