import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Logo from "../logo";
import Button from "../button";
import Socials from "../socials";

export default function Footer() {
  return (
    <div className="relative font-sans">
      <footer className="bg-[#000B40] text-white pt-32 pb-12 md:px-6 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4 space-y-6">
              <Logo />
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Booming Grace LLC is committed to delivering excellence in
                healthcare staffing through innovation, compassion, and
                professionalism.
              </p>
              <div className="flex gap-3 pt-2">
                <Socials icon={<FaFacebook size={18} />} />
                <Socials icon={<FaTwitter size={18} />} />
                <Socials icon={<FaLinkedin size={18} />} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-[#FFD700] transition">
                    Home
                  </Link>
                </li>
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
                    href="/careers"
                    className="hover:text-[#FFD700] transition"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employer"
                    className="hover:text-[#FFD700] transition"
                  >
                    Employer
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

            {/* Newsletter*/}
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
                <Button text="Subscribe" className="rounded-md" />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
            <p>© Copyright 2026 - BoomingGraceLLC. All Rights Reserved</p>
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
