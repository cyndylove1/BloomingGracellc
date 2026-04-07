import {
  UploadCloud,
  ShieldCheck,
  LayoutDashboard,
  BellRing,
  CalendarCheck,
  MonitorCheck,
  ChevronRight,
} from "lucide-react";
export default function Features() {
  const techFeatures = [
    {
      title: "Resume Upload System",
      icon: <UploadCloud size={24} />,
      desc: "Smart parsing technology that extracts key clinical skills automatically.",
    },
    {
      title: "Credential Tracking",
      icon: <ShieldCheck size={24} />,
      desc: "Real-time monitoring of licenses and certifications to ensure 100% compliance.",
    },
    {
      title: "Employer Portal",
      icon: <MonitorCheck size={24} />,
      desc: "A dedicated space for facilities to request staff and manage active shifts.",
    },
    {
      title: "Admin Dashboard",
      icon: <LayoutDashboard size={24} />,
      desc: "Complete visibility over staffing analytics and placement performance.",
    },
    {
      title: "Automated Notifications",
      icon: <BellRing size={24} />,
      desc: "Instant SMS and Email alerts for new job matches and shift updates.",
    },
    {
      title: "Interview Scheduling",
      icon: <CalendarCheck size={24} />,
      desc: "Integrated calendar sync for seamless coordination between talent and facilities.",
    },
  ];
  return (
    <section className="py-24 px-6 bg-[#000B40] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#7C5CFC] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#FFD700] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">
                Next-Gen Platform
              </span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-serif italic mb-6">
              Our Digital <br />{" "}
              <span className="text-[#7C5CFC] not-italic font-sans font-black">
                Ecosystem.
              </span>
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              We leverage proprietary technology to streamline the staffing
              lifecycle, ensuring zero friction between hiring and healing.
            </p>
            <ul className="space-y-4">
              {["HIPAA Compliant", "Cloud-Based", "Real-time Sync"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white/80 text-sm font-medium"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#7C5CFC]/20 flex items-center justify-center">
                      <ChevronRight size={14} className="text-[#7C5CFC]" />
                    </div>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Feature Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {techFeatures.map((feature, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-[#7C5CFC]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#7C5CFC] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
