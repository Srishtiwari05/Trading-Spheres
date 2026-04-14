"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import EnrollButton from "./EnrollButton";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000" 
          alt="Trading Workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-black text-white max-w-6xl font-outfit leading-[1.1] tracking-tight"
        >
          Unlock the Trader <br />
          You're <span className="text-[#00f59b]">Meant to Be</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <EnrollButton className="text-xl px-14 py-5 shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gold animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}