import AnimatedStat from "./AnimatedStat";

interface StatItem {
  value: string;
  label: string;
}

export default function AboutStat() {
  const stats: StatItem[] = [
    { value: "15+", label: "Global Ultra-High-Net-Worth Clients" },
    { value: "35+", label: "Estates Currently Managed" },
    { value: "20+", label: "Years Private Service Experience" },
    { value: "500+", label: "Professional Placements Made" },
    { value: "98%", label: "Client Retainment Rate" },
    { value: "$5M+", label: "Household Assets Secured" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-x-8 md:gap-x-16 border-t border-purple-200 pt-4 z-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-3 group">
            <span className="text-4xl md:text-4xl font-bold tracking-tighter text-[#6354E1] transition-transform duration-300 group-hover:-translate-y-1">
              <AnimatedStat value={stat.value} duration={1500} />
            </span>

            <span className="text-gray-700 text-sm md:text-sm font-medium leading-snug max-w-[160px] opacity-90 transition-opacity">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
