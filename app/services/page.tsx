import { ArrowUpRight, Check } from "lucide-react";
import Cta from "../components/cta";
import Link from "next/link";

const services = [
  {
    category: "Residential Care Services",
    description:
      "Flexible, intelligent care tailored to your home environment and personal comfort.",
    price: "$25", // Optional price placeholder to match your image
    items: [
      "Personal Care Assistance",
      "Companionship",
      "Medication Reminders",
      "Mobility Assistance",
    ],
  },
  {
    category: "Skilled Nursing Services",
    description:
      "Professional medical support for recovery and long-term health management.",
    price: "$45",
    items: [
      "Post-Surgery Care",
      "Chronic Illness Management",
      "In-home Nursing Care",
    ],
  },
  {
    category: "Facility Staffing",
    description:
      "Reliable staffing solutions for institutions requiring consistent care excellence.",
    price: "$150",
    items: ["Nursing Homes", "Assisted Living", "Hospitals"],
  },
  {
    category: "Specialized Staffing",
    description:
      "Expert care for specific medical conditions and sensitive life stages.",
    price: "$60",
    items: ["Dementia Care", "Hospice Support", "Rehabilitation Support"],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-[#000B40] pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-[0.4em]">
              Expert Solutions
            </span>
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
          </div>
          <h1 className="text-white text-5xl md:text-6xl font-serif italic mb-6">
            Our Care <span className="text-[#7C5CFC]">Specialties.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From private home care to large-scale facility staffing, Blooming
            Grace LLC provides the professional expertise your health journey
            demands.
          </p>
        </div>
      </section>
      <section className="bg-[#D1D5F5] pt-[10rem] pb-20 px-4 md:px-8">
        <div className="flex items-center justify-center pb-10 gap-2">
          <span className="text-[#7C5CFC] font-bold text-2xl">✦</span>
          <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-widest">
            Our Services
          </span>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-300 rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  {service.category}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* List Items */}
                <ul className="space-y-4 mb-10 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#7C5CFC] group-hover:text-[#FFD700] transition-colors">
                        •
                      </span>

                      <span className="text-[#333333] font-medium text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Footer */}
                <div className="mt-auto">
                  <Link href="/careers">
                    <button className="bg-[#FFD700] w-full md:w-[200px] text-[#0A0F2D] px-8 py-4 flex justify-center rounded-lg font-bold text-base flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-md">
                      Apply Now <ArrowUpRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
