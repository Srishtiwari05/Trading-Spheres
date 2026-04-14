"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import EnrollButton from "@/components/EnrollButton";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <section className="relative overflow-hidden py-24 px-4 md:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ x: [-40, 40, -40], opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 24, repeat: Infinity, repeatType: "mirror" }}
            className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [-20, 20, -20], opacity: [0.85, 0.35, 0.85] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
            className="absolute right-0 bottom-20 h-56 w-56 rounded-full bg-[#00f59b]/15 blur-3xl"
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative max-w-6xl mx-auto grid gap-10 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center"
        >
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} viewport={{ once: true }} className="space-y-8">
            <p className="text-sm uppercase tracking-[0.4em] text-[#00f59b]">About the Founder</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight font-outfit">Prabhjot Singh Kukreja — founder of Trading Spheres</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              Prabhjot built Trading Spheres for serious traders who want clear systems, live market mentorship, and real
              accountability. His focus is on practical trading, disciplined risk management, and building strategies that work across market conditions.
            </p>
            <p className="text-[#00f59b] text-lg leading-relaxed max-w-3xl">
              Trading Spheres is proudly sponsoring BOT (Battle of Traders) 2.0.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] aspect-[4/5] sm:aspect-[3/4] md:aspect-[5/6] lg:aspect-[4/5] bg-white/5 border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200"
              alt="Founder portrait"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="p-6 rounded-3xl glass-card border border-white/10">
              <h2 className="text-xl font-bold text-white">Trading Expertise</h2>
              <p className="text-gray-400 mt-3">SMC systems, options and futures, funded account strategy, and live trade execution.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="p-6 rounded-3xl glass-card border border-white/10">
              <h2 className="text-xl font-bold text-white">Student Success</h2>
              <p className="text-gray-400 mt-3">Designed courses for serious traders, mentorship for wealth builders, and hands-on market coaching.</p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} viewport={{ once: true }} className="space-y-4">
            <p className="text-[#00f59b] uppercase text-xs tracking-[0.3em] font-bold">What You Get</p>
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>Complete SMC trading framework with real trade examples</li>
              <li>Live classes, community support, and mentorship sessions</li>
              <li>Personalized guidance for serious wealth-building traders</li>
              <li>Offline and online mentoring options for flexible learning</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} viewport={{ once: true }} className="flex flex-col gap-4 sm:flex-row items-start sm:items-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <EnrollButton className="btn-gold py-4 px-10 text-sm" />
            </motion.div>
            <Link href="/#courses" className="inline-flex items-center gap-2 text-[#00f59b] font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-white">
              View programs <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
