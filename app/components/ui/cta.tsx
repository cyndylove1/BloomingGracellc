import { Mail } from "lucide-react";
import Button from "../button";

export default function Cta() {
  return (
    <section className="bg-white py-12 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative w-full bg-white rounded-[40px] p-8 md:p-20 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#8268EE] opacity-20 blur-[120px] rounded-full" />

            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] bg-[#FFD700] opacity-10 blur-[100px] rounded-full" />

            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 bg-gray-400/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
              <span className="text-[#FFD700] font-bold text-xl">✦</span>
              <span className="text-gray-900 text-xs font-bold uppercase tracking-[0.2em]">
                Elevate Your Lifestyle
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-6 max-w-xl">
              Ready to find the{" "}
              <span className="text-[#FFD700] italic">perfect</span> match for
              your home?
            </h2>
            <p className="text-gray-900 text-base md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
              Join elite households who trust Booming Grace LLC for bespoke
              residential staffing and unparalleled service excellence.
            </p>
            {/* subscribe */}
            <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto md:mx-0 bg-white p-1.5 rounded-lg shadow-inner border border-purple-100 gap-2 sm:gap-0">
              <div className="flex items-center flex-grow">
                <div className="hidden sm:flex items-center justify-center p-3 text-gray-400">
                  <Mail size={18} />
                </div>

                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 sm:px-2 py-2 text-gray-800 placeholder-gray-400 outline-none rounded-xl text-sm md:text-base bg-transparent"
                />
              </div>
               <Button text="Subscribe" className="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
