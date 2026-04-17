"use client";

import { motion } from "framer-motion";
import EnrollButton from "./EnrollButton";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f5ff]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#b026ff]/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-var(--dark-bg)/50 to-var(--dark-bg)" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative inline-flex flex-wrap justify-center"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00f5ff]/20 to-[#b026ff]/20 blur-2xl rounded-full opacity-50" />
          <span className="relative inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-medium text-white mb-8 max-w-[90vw]">
            <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse" />
            The Future of Trading Education
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white max-w-5xl font-outfit leading-[1.05] tracking-tighter"
        >
          Elevate Your Trading Beyond Instinct
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl font-inter leading-relaxed"
        >
          Learn real strategies, trade with discipline, and execute with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <EnrollButton className="relative group text-lg px-10 py-4 font-bold bg-white text-black hover:bg-gray-100 transition-all rounded-full overflow-hidden flex items-center gap-2">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] to-[#b026ff] opacity-0 group-hover:opacity-20 transition-opacity" />
          </EnrollButton>
          
          <a href="#courses" className="text-gray-300 hover:text-white transition-colors font-semibold flex items-center gap-2">
            Explore Programs
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
}