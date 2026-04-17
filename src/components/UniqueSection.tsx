"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import EnrollButton from "./EnrollButton";

export default function UniqueSection() {
  return (
    <section className="py-24 px-4 bg-[#f8f9fa] text-black">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-outfit leading-tight mb-6"
          >
            <span className="text-[#00f59b] bg-black px-4 py-1 inline-block">Trade with confidence. Grow consistently.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg uppercase font-bold tracking-[0.2em] leading-relaxed"
          >
            No hype. No guesswork. Only proven setups, real market context, and practical rules you can use today. <br />
            Master the forces behind price moves and join a community that trades with discipline.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl mb-12"
        >
          <Image
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=2000"
            alt="Trading Community"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="flex justify-center">
          <EnrollButton className="bg-black text-white px-12 py-4 shadow-xl hover:bg-gray-800" />
        </div>
      </div>
    </section>
  );
}
