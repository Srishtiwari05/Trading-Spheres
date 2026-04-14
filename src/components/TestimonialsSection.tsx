"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import EnrollButton from "./EnrollButton";
import { Star } from "lucide-react";

const videoIds = ["dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ"]; // Replace with real YouTube IDs

const testimonials = [
  { name: "Priya S.", role: "Options Trader", quote: "Best decision ever! The mentorship transformed my trading.", avatar: "https://i.pravatar.cc/150?u=1", rating: 5 },
  { name: "Rahul M.", role: "Full-time Trader", quote: "The live market sessions are game changers.", avatar: "https://i.pravatar.cc/150?u=2", rating: 5 },
  { name: "Anjali K.", role: "Student", quote: "I cleared my debts within 6 months of the course.", avatar: "https://i.pravatar.cc/150?u=3", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white font-outfit mb-16 leading-tight"
        >
          Here's what our <br />
          <span className="text-[#00f59b]">Current Students</span> have to say...
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#00f59b]/50 hover:border-[#00f59b] transition-all group shadow-2xl"
            >
              <Image
                src={`https://i.pravatar.cc/800?u=${id}`}
                alt="Student Success"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute top-4 right-4 bg-[#00f59b] text-black text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest">
                VERIFIED STUDENT
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-black text-lg font-outfit uppercase tracking-tighter mb-1">
                  Success Story #{id}
                </p>
                <div className="w-10 h-0.5 bg-[#00f59b] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <EnrollButton className="px-12 py-4" />
        </div>
      </div>
    </section>
  );
}