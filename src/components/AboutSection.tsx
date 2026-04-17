"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Send, TrendingUp, Shield, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative bg-transparent overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-gold/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-[#00f5ff]/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content - Spans 7 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              <TrendingUp size={14} /> The Visionary
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-4 font-outfit leading-tight tracking-tight">
              Prabhjot Singh <br />
              <span className="text-white/40">Kukreja</span>
            </h2>
            <p className="text-[#00f5ff] text-lg mb-10 font-mono tracking-widest uppercase text-sm">Founder — Trading Spheres</p>

            <div className="glass-card p-8 rounded-3xl futuristic-border relative overflow-hidden mb-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Prabhjot brings real-market experience to every cohort. His programs are built for serious
                traders who want structured systems, live mentorship, and the confidence to trade with 
                discipline and clarity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 text-[#00f5ff]">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Risk First</h4>
                  <p className="text-sm text-gray-400">Focused on practical risk management and trader discipline.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 text-[#b026ff]">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Community Driven</h4>
                  <p className="text-sm text-gray-400">Leads live classes, mentorship and trading community support.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href="https://wa.me/919464807614" target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:border-gold/50 bg-white/5 hover:bg-gold/10 transition-all duration-300">
                <span className="text-sm font-bold text-white group-hover:text-gold transition-colors">Connect Directly</span>
                <Send size={16} className="text-gray-400 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Image Content - Spans 5 cols, visually shifted */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative mt-12 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1556157382-97dee2dcb1ce?auto=format&fit=crop&w=2000" 
                alt="Founder" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-var(--dark-bg) via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-4 rounded-2xl flex items-center gap-4 backdrop-blur-xl border border-white/10 shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00f5ff] to-[#b026ff] flex items-center justify-center text-white font-bold text-xl">
                  +5k
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Students Mentored</p>
                  <p className="text-xs text-gray-400">Across the globe</p>
                </div>
              </div>
            </div>
            
            {/* Abstract decorative elements behind image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#00f5ff]/30 rounded-full blur-[2px] -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-gold/20 rounded-full blur-[2px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}