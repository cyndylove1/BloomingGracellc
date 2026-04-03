"use client";
import React from "react";
import Link from "next/link";
import {
  // Facebook,
  // Linkedin,
  // Youtube,
  // Twitter,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="relative font-sans">
      <footer className="bg-[#000B40] text-white pt-32 pb-12 md:px-6 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Grid: Standardized spacing with better column distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
            {/* 1. Brand Column (Takes 4 spans for a wider description) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="relative">
                  <div className="w-5 h-5 border-2 border-white rotate-45 transition-colors"></div>
                  <div className="absolute inset-0 w-5 h-5 bg-[#FFD700] rotate-45 scale-50"></div>
                </div>
                <span className="text-white text-2xl font-serif tracking-tight italic">
                  BloomingGrace-LLC
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                We combine industry expertise with a personal touch to help
                families find, train, and manage the perfect domestic staff with
                total confidence.
              </p>
              {/* <div className="flex gap-3 pt-2">
                <SocialCircle icon={<Facebook size={18} />} active />
                <SocialCircle icon={<Linkedin size={18} />} />
                <SocialCircle icon={<Youtube size={18} />} />
                <SocialCircle icon={<Twitter size={18} />} />
              </div> */}
            </div>

            {/* 2. Support Column (Takes 2 spans) */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#FFD700] transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[#FFD700] transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#FFD700] transition"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#FFD700] transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. Links Column (Takes 2 spans) */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-6">Top Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-[#FFD700] transition"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/screening"
                    className="hover:text-[#FFD700] transition"
                  >
                    Staff Screening
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impact"
                    className="hover:text-[#FFD700] transition"
                  >
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-[#FFD700] transition"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="hover:text-[#FFD700] transition"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4. Newsletter Column (Takes 4 spans to prevent input shrinking) */}
            <div className="lg:col-span-4">
              <h4 className="text-lg font-semibold mb-6">
                Subscribe Newsletter
              </h4>
              <p className="text-gray-400 text-sm mb-6">
                Stay updated with the latest in luxury estate management.
              </p>
              <div className="flex flex-col sm:flex-row items-center bg-white/10 border border-white/10 rounded-xl p-1.5 w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent text-white px-4 py-3 outline-none w-full text-sm placeholder:text-gray-400"
                />
                <button className="bg-[#FFD700] text-[#000B40] font-bold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all text-sm w-full sm:w-auto mt-2 sm:mt-0">
                  Subscribe <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
            <p>© Copyright 2026 - BloomingGraceLLC. All Rights Reserved</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-white transition">
                Privacy & Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-component for Social Icons
const SocialCircle = ({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) => (
  <div
    className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
      active
        ? "bg-[#FFD700] text-[#000B40]"
        : "bg-white/10 text-white hover:bg-[#FFD700] hover:text-[#000B40]"
    }`}
  >
    {icon}
  </div>
);
