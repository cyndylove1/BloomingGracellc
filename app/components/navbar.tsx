"use client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 lg:px-12 ${
          isScrolled || isMenuOpen
            ? "bg-[#000B40] py-4 shadow-xl"
            : "bg-[#000B40] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer z-50"
          >
            <div className="relative">
              <div className="w-5 h-5 border-2 border-white rotate-45 transition-colors"></div>
              <div className="absolute inset-0 w-5 h-5 bg-[#FFD700] rotate-45 scale-50 transition-opacity"></div>
            </div>
            <span className="text-white text-xl md:text-2xl font-serif tracking-tight italic">
              BloomingGrace-LLC
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wide">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`cursor-pointer transition-colors duration-300 ${
                      isActive
                        ? "text-[#FFD700]"
                        : "text-white hover:text-[#FFD700]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Action Section */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/contact">
              <button className="bg-[#FFD700] text-[#0A0F2D] px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-400/10">
                Hire Staff <ArrowUpRight size={14} />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed inset-0 bg-[#000B40] transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center gap-8 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-xl font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${
                      isActive ? "text-[#FFD700]" : "text-white"
                    } active:text-[#FFD700]`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile CTA Button */}
          <Link href="/contact" className="mt-4">
            <button className="bg-[#FFD700] text-[#0A0F2D] px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 shadow-xl">
              Hire Staff <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
