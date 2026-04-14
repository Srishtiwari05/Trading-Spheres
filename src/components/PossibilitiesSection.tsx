"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import EnrollButton from "./EnrollButton";

const features = [
  { title: "Real Time Market Practice", desc: "Trade with mentors in live sessions." },
  { title: "Learn at Your Own Speed", desc: "Access recorded modules 24/7." },
  { title: "Personal Mentor Sessions", desc: "1-on-1 calls to refine your plan." },
  { title: "Exclusive Community", desc: "Join 2000+ traders in our private group." },
];

export default function PossibilitiesSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000"
          alt="Infinite Possibilities"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white font-outfit mb-16"
        >
          One Platform, <br />
          <span className="text-[#00f59b]">Infinite Trading Possibilities</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-[#00f59b]/30 p-8 rounded-2xl hover:border-[#00f59b] transition-all"
            >
              <h3 className="text-[#00f59b] text-xl font-black uppercase tracking-widest mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#00f59b] p-10 rounded-3xl text-center max-w-lg shadow-[0_0_40px_rgba(0,245,155,0.3)]"
          >
            <h3 className="text-black text-2xl font-black mb-4 uppercase tracking-tighter">
              Join Our Trading Community
            </h3>
            <p className="text-black/80 font-bold mb-6 text-sm">
              Discover the power of mentorship with our expert instructors and join over 2000+ traders.
            </p>
            <EnrollButton className="bg-black text-white w-full py-4 text-xs font-black tracking-widest" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
