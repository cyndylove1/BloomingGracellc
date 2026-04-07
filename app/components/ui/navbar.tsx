"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../logo";
import Button from "../button";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Employer", href: "/employer" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6 lg:px-12 ${
        isScrolled || isMenuOpen
          ? "bg-[#000B40] py-4 shadow-xl"
          : "bg-[#000B40] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Logo />
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
            <Button text="Request Staff" className="rounded-full" />
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
          <Button text="Request Staff" className="rounded-full" />
        </Link>
      </div>
    </nav>
  );
}
