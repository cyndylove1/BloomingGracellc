"use client";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Upload, FileText } from "lucide-react";
import Button from "../components/button";
import React, { useState } from "react";
import UploadFile from "../components/uploadFile";

export default function Contact() {
  const [fileName, setFileName] = useState<string | null>(null);

  const BENTO_TRANSITION_BASE = {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const topTextEntry: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ...BENTO_TRANSITION_BASE,
        delay: 0.2,
      },
    },
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <>
      <section className="bg-[#000B40] pt-40 pb-20 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={topTextEntry}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-[0.4em]">
              Contact Us
            </span>
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
          </div>
          <h1 className="text-white text-3xl md:text-6xl font-serif italic mb-6 max-w-xl mx-auto">
            The Legacy & Trust <span className="text-[#7C5CFC]">Approach</span>
          </h1>
          <p className="text-white/60 text-md md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Ready to elevate your staffing standards? Fill out the form below
            and our coordination team will handle the rest. Excellence is just a
            message away.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#D1D5F5] pb-20 pt-[10rem] px-4 md:px-6 lg:px-12 relative overflow-hidden font-sans">
        {/* SVG Decorative Background */}
        <div className="absolute left-[-10%] bottom-0 h-[60%] w-[40%] opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 400 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path
              d="M-100 600C150 500 300 200 100 -100"
              stroke="white"
              strokeWidth="80"
              strokeLinecap="round"
            />
            <path
              d="M-150 650C200 550 350 250 150 -50"
              stroke="white"
              strokeWidth="60"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6 md:mb-0">
              <span className="text-[#7C5CFC] font-bold text-xl">✦</span>
              <span className="text-[#0A0F2D] font-bold text-sm uppercase tracking-wider">
                Contact Us
              </span>
            </div>
            <h2 className="text-xl md:text-3xl font-serif italics text-[#0A0F2D]">
              Let's Start the{" "}
              <span className="text-[#7C5CFC]">Conversation</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12">
            {/* Form Section */}
            <div className="flex-1">
              <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-2">
                Send Us A Message
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Our response time is within 30 minutes during business hours
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#F3F4F6] border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-[#7C5CFC] outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#F3F4F6] border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-[#7C5CFC] outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-[#F3F4F6] border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-[#7C5CFC] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#F3F4F6] border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-[#7C5CFC] outline-none"
                />

                <div className="md:col-span-2 relative">
                  <select className="w-full bg-[#F3F4F6] border-none rounded-lg p-4 text-sm text-gray-500 appearance-none outline-none focus:ring-2 focus:ring-[#7C5CFC]">
                    <option>Service Type</option>
                    <option>Estate Management</option>
                    <option>Private Chef Placement</option>
                    <option>Nanny & Childcare</option>
                    <option>Housekeeping Services</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    ▼
                  </div>
                </div>

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="md:col-span-2 bg-[#F3F4F6] border-none rounded-lg p-4 text-sm focus:ring-2 focus:ring-[#7C5CFC] outline-none resize-none"
                ></textarea>

                <div className="md:col-span-2 flex justify-end mt-4">
                  <Button text="Submit Now" className="rounded-md" />
                </div>
              </form>
            </div>

            {/* Contact Info Side */}
            <div className="w-full lg:w-[350px] space-y-6">
              <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:bg-[#7C5CFC] hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#7C5CFC]/10 rounded-full flex items-center justify-center text-[#8268EE] transition-colors group-hover:bg-white/20 group-hover:text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 transition-colors group-hover:text-white">
                    Our Location
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1 transition-colors group-hover:text-purple-100">
                    Baltimore, MD
                  </p>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:bg-[#7C5CFC] hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#7C5CFC]/10 rounded-full flex items-center justify-center text-[#8268EE] transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 transition-colors group-hover:text-white">
                    Call Or Text
                  </h4>
                  <p className="text-gray-700 text-lg font-semibold mt-1 transition-colors group-hover:text-white">
                    123-456-7890
                  </p>
                </div>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:bg-[#7C5CFC] hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#7C5CFC]/10 rounded-full flex items-center justify-center text-[#8268EE] transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 transition-colors group-hover:text-white">
                    Email us today
                  </h4>
                  <p className="text-gray-500 text-sm mt-1 transition-colors group-hover:text-purple-100">
                    info@bloominggracellc.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
