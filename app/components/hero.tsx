import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="min-h-screen font-sans selection:bg-yellow-400">
      {/* Main Dark Section */}
      <section className="bg-(--primary) px-4 md:px-6 lg:px-12 pt-6 pb-0 px-4 relative">
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Navigation */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto pt-[10rem]">
          <h1 className="text-white text-5xl font-serif md:text-6xl italic leading-[1.05] mb-14 max-w-5xl tracking-tighter">
            Compassionate Care. Qualified Professionals.&nbsp;
            <span className="text-[#FFD700] border-b-4 border-[#FFD700] italic">
              Trusted Staffing
            </span>
          </h1>

          {/* Grid Container: Content Left, Large Image Right/Bottom */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Text & CTA & Badge */}
            <div className="lg:col-span-4 flex flex-col justify-between self-stretch pb-12">
              <div>
                <p className="text-gray-400 text-md leading-relaxed mb-10 max-w-sm">
                  Connecting healthcare facilities and families in Baltimore
                  with licensed, vetted, and experienced caregivers.
                </p>

                <div className="flex items-center gap-6 mb-12">
                  <button className="bg-[#FFD700] text-[#0A0F2D] px-8 py-4 rounded-lg font-bold text-base flex items-center gap-2 hover:bg-yellow-400  shadow-md transition-all duration-300">
                    Apply as Caregiver
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>

              {/* Experience Badge - Placed at the bottom left */}
              <div className="bg-[#7C5CFC] text-white p-8 rounded-3xl w-64 shadow-2xl relative overflow-hidden group mt-auto lg:translate-y-16 z-20">
                <ShieldCheck className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-bold mb-2">200+</h3>
                <p className="text-[12px] font-medium opacity-80 uppercase tracking-widest leading-tight">
                  Vetted Professionals <br /> Placed Annually
                </p>
              </div>
            </div>

            {/* Right Column: Image positioned to sit at the bottom */}
            <div className="lg:col-span-8 relative">
              <div className="rounded-[20px] overflow-hidden border-[15px] border-[#0A0F2D] border-b-0 shadow-2xl translate-y-8 lg:translate-y-16">
                <img
                  src="/assets/nanny.jpg"
                  alt="Luxury modern estate interior"
                  className="w-full h-auto min-h-[400px] object-cover rounded-t-[35px]"
                />

                {/* Floating tag inside the image area */}
                <div className="absolute bottom-12 left-12 bg-white py-4 px-4 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-[#0A0F2D] font-bold text-sm">
                    ✓ 100% Confidentiality Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
