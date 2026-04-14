"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import EnrollButton from "./EnrollButton";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "ABOUT", href: "/about" },
  { name: "PROGRAMS", href: "#courses" },
  { name: "BLOGS", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#00f59b] py-2 px-4 text-center">
        <p className="text-[10px] md:text-xs font-black text-black tracking-[0.2em] uppercase">
          ENROLL AND START YOUR TRADING JOURNEY TODAY &nbsp;
          <Link href="#courses" className="underline underline-offset-4 decoration-2">Enroll now</Link>
        </p>
      </div>

      <nav className={`transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md py-4 shadow-xl" : "bg-black/80 py-6"
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <Link href="/" className="flex items-center gap-4">
              <Image 
                src="/logo.png" 
                alt="Trading Spheres Icon" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain"
                priority
              />
              <div className="flex flex-col">
                <p className="text-sm font-black text-white tracking-[0.2em] leading-none uppercase font-outfit">Trading</p>
                <p className="text-[9px] font-bold text-[#00f59b] tracking-[0.4em] leading-none uppercase mt-1">Spheres</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center justify-center flex-1 space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-[10px] font-bold tracking-[0.2em] hover:text-[#00f59b] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <EnrollButton />
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0d0d] border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:gold-text py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <EnrollButton className="w-full mt-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}