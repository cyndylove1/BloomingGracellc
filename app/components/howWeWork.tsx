import React from "react";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We discuss your needs, preferences, and expectations in detail.",
    },
    {
      number: "02",
      title: "Candidate Selection",
      description:
        "We shortlist and present the most suitable candidates for your review.",
    },
    {
      number: "03",
      title: "Interviews",
      description:
        "You interview selected candidates to ensure the perfect fit.",
    },
  ];

  return (
    <section className="bg-[#DAE0F5] py-20 px-4 md:px-8 font-sans text-[#1A1A1A]">
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#7C5CFC] font-bold text-xl">✦</span>
            <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-wider">
              HOW WE WORK
            </span>
          </div>
          <h2 className="text-[#0A0F2D] text-xl md:text-3xl font-bold leading-tight max-w-lg">
            Simple & Efficient Hiring Process&nbsp;
            <span className="text-[#7C5CFC]">Hiring Process </span>
          </h2>
        </div>

        <div className="mt-6 md:mt-10 max-w-sm">
          <p className="text-gray-600 leading-relaxed">
            Our seamless process ensures you are matched with trusted, highly
            qualified household professionals tailored to your needs.
          </p>
        </div>
      </div>

      {/* Interactive Process Cards */}
      {/* CHANGED: flex-col for mobile, lg:flex-row for desktop. Height is auto on mobile to fit stacked content */}
      <div className="max-w-[1400px] mx-auto overflow-hidden rounded-3xl relative min-h-[600px] lg:h-[500px] flex flex-col lg:flex-row group/container shadow-2xl">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/container:scale-105"
          style={{
            backgroundImage: `url('/assets/why.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        </div>

        {/* Sections */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex-1 flex flex-col justify-end p-8 md:p-10 transition-all duration-500 ease-in-out border-b lg:border-b-0 lg:border-r border-white/10 last:border-none group cursor-pointer overflow-hidden min-h-[250px] lg:min-h-full"
          >
            {/* Purple Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#715FDB] via-[#715FDB]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

            {/* Content Layer */}
            <div className="relative z-10 text-white">
              {/* Step Number */}
              <span
                className="text-5xl md:text-6xl font-bold opacity-40 mb-4 block"
                style={{ WebkitTextStroke: "1px white", color: "transparent" }}
              >
                {step.number}
              </span>

              {/* Title & Description */}
              {/* On mobile, we reduce the translate-y so content is partially visible or use lg prefix */}
              <div className="transform translate-y-4 lg:translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-2 lg:mb-4">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
