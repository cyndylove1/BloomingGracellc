import {
  ArrowUpRight,
  Activity,
  Newspaper,
  Monitor,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Cta from "../components/cta";
import Link from "next/link";

export default function Services() {
  const serviceCards = [
    {
      title: "Housekeepers",
      description:
        "Our professional housekeepers maintain cleanliness, organization, and hygiene in your home. They are trained to handle everything from daily chores to deep cleaning.",
      image: "/assets/cleaner.jpg",
    },
    {
      title: "Nannies & Babysitters",
      description:
        "We provide experienced and caring nannies who prioritize your child’s safety, development, and well-being. From newborn care specialists to live-in nannies, we ensure your family is supported at every stage.",
      image: "/assets/nanny.jpg",
    },
    {
      title: "Private Chefs & Culinary Experts",
      description:
        "Enjoy personalized meals prepared by skilled chefs who cater to your dietary preferences and lifestyle. Whether it’s everyday meals or special events, we’ve got you covered.",
      image: "/assets/chef.jpg",
    },
    {
      image: "/assets/driver.jpg",
      title: "Drivers",
      description:
        "Our professional drivers provide more than just transportation—they deliver comfort, safety, and reliability for your daily lifestyle.",
    },
    {
      image: "/assets/assistant.jpg",
      title: "Personal Assistants",
      description:
        "Our assistants help manage your daily schedules, errands, and household coordination, ensuring your life runs smoothly and efficiently.",
    },
    {
      image: "/assets/security.jpg",
      title: "Security Personnel",
      description:
        "Your safety and peace of mind are our top priorities. We provide highly trained residential security personnel who are equipped to protect your home, family, and property with professionalism and discretion.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className=" bg-[#DAE0F5] py-24 md:px-6 lg:px-12 px-4 font-sans pt-[10rem]">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#7C5CFC] font-bold text-xl">✦</span>
                <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-wider">
                  Our Services
                </span>
              </div>

              <h2 className="text-[#0A0F2D] text-xl md:text-3xl font-bold leading-tight max-w-lg">
                We offer a wide range of residential staffing services to meet
                your&nbsp;
                <span className="text-[#8268EE]">household needs.</span>
              </h2>
            </div>
            <Link href="/contact">
              <button className="mt-8 md:mt-0 bg-[#FFD700] text-[#0A0F2D] px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-md">
                Apply Now
                <ArrowUpRight size={16} />
              </button>
            </Link>
          </div>

          {/* Top Feature Cards - Updated with Purple Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceCards.map((card, idx) => (
              <div
                key={idx}
                className="group rounded-[10px] p-4 shadow-xl overflow-hidden border-[1px] border-black/10 bg-[#8268EE]/30 transition-all duration-300 hover:bg-[#8268EE] cursor-pointer"
              >
                <div className="rounded-[10px] overflow-hidden mb-6 h-64 border border-black/5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[#0A0F2D] text-lg font-bold mb-4 transition-colors duration-300 group-hover:text-white">
                  {card.title}
                </h3>
                <p className="text-gray-900 font-light mb-6 text-md transition-colors duration-300 group-hover:text-white/80">
                  {card.description}
                </p>
                {/* <button className="flex items-center gap-1 text-[#0A0F2D] font-bold text-sm transition-colors duration-300 group-hover:text-[#FFD700]">
                Read More{" "}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
