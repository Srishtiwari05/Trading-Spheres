"use client";

import { motion } from "framer-motion";
import EnrollButton from "./EnrollButton";

export default function CTABanner() {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5 blur-[150px] rounded-full -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-outfit">
          Ready to Start Your <br /><span className="gold-text">Trading Journey</span>?
        </h2>
        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 2000+ students learning the art of the markets. <br />
          <span className="text-white font-semibold">Limited seats available for the next batch.</span>
        </p>
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <EnrollButton className="text-xl px-12 py-5 btn-gold" />
          </motion.div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 font-medium">
          <span>📞 Call support:</span>
          <span className="text-white">+91 94648 07614</span>
        </div>
      </div>
    </section>
  );
}