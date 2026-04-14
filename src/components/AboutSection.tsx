"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Globe, Video, Send } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
        >
          <Image src="https://images.unsplash.com/photo-1556157382-97dee2dcb1ce?auto=format&fit=crop&w=2000" alt="Founder" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 font-outfit gold-text">Prabhjot Singh Kukreja</h2>
          <p className="text-gray-400 text-lg mb-8 font-medium tracking-wide">Founder — Trading Spheres</p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3"><CheckCircle className="text-gold w-5 h-5" /> <span className="text-gray-200">Founder of Trading Spheres and insider market coach</span></li>
            <li className="flex items-center gap-3"><CheckCircle className="text-gold w-5 h-5" /> <span className="text-gray-200">Specializes in SMC, options, futures and funded account strategy</span></li>
            <li className="flex items-center gap-3"><CheckCircle className="text-gold w-5 h-5" /> <span className="text-gray-200">Leads live classes, mentorship and trading community support</span></li>
            <li className="flex items-center gap-3"><CheckCircle className="text-gold w-5 h-5" /> <span className="text-gray-200">Focused on practical risk management and trader discipline</span></li>
          </ul>

          <p className="text-gray-400 mb-10 leading-relaxed">
            Prabhjot brings real-market experience to every cohort. His programs are built for serious
            traders who want structured systems, live mentorship, and the confidence to trade with 
            discipline and clarity.
          </p>

          <div className="flex gap-6">
            <a href="https://wa.me/919464807614" target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card text-gray-400 hover:text-gold transition-colors"><Send size={24} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}