export default function WhyUs() {
  const steps = [
    {
      number: "1",
      title: "Experienced & Highly Trained Professionals",
      description:
        "We carefully select candidates with proven experience in private households. From nannies to estate managers, every professional is trained to deliver exceptional service, adapt to your lifestyle, and maintain the highest standards of care and professionalism within your home.",
      imageUrl: "/assets/consult13.PNG",
    },
    {
      number: "2",
      title: "Rigorous Screening & Vetting Process",
      description:
        "Your safety and peace of mind are our priority. Every candidate undergoes thorough background checks, identity verification, reference validation, and in-depth interviews to ensure they meet our strict standards before being introduced to your household.",
      imageUrl: "/assets/screening.jpg",
    },

    {
      number: "3",
      title: "Commitment to Excellence",
      description:
        "We are dedicated to delivering the highest level of service by consistently maintaining quality standards, building trust, and exceeding expectations for every client we serve.",
      imageUrl: "/assets/commitment.jpg",
    },
  ];

  return (
    <section className="bg-[#D1D5F5] py-24 px-4 md:px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#7C5CFC] font-bold text-xl">✦</span>
            <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-wider">
              Why Choose Our Agency
            </span>
          </div>

          <h2 className="text-[#0A0F2D] text-xl md:text-3xl font-bold leading-tight max-w-xl mb-24">
            Choosing the right staffing agency is essential for your{" "}
            <span className="text-[#8268EE]">home’s comfort </span> and{" "}
            <span className="text-[#8268EE]">security.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Image & Diamond Container */}
              <div className="relative mb-20">
                {/* The Floating Diamond Frame - Rotates slightly on hover */}
                <div className="absolute -inset-6 border border-gray-300 rotate-45 z-0 transition-all duration-500 group-hover:rotate-[135deg] group-hover:border-[#7C5CFC]/40" />

                {/* Step Number Badge */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center font-bold text-black z-20 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </div>

                {/* The Actual Image Container */}
                <div className="relative w-full h-64 overflow-hidden rounded-2xl z-10 shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={step.imageUrl}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Info Card - Changes to Purple on Hover */}
              <div
                className="w-full max-w-[340px] h-[300px] rounded-xl p-8 text-center transition-all duration-500 ease-out min-h-[180px] flex flex-col justify-center 
                  bg-[#F8FBF8] text-gray-900 border border-gray-50
                  group-hover:bg-[#7C5CFC] group-hover:text-white group-hover:shadow-2xl group-hover:-translate-y-2"
              >
                <h3 className="text-lg font-bold mb-3 tracking-wide uppercase transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-purple-50">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
