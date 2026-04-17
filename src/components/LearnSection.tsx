"use client";

import { motion } from "framer-motion";
import {
  TrendingUp, Shield, Brain, CandlestickChart,
  BarChart3, DollarSign, Target, Workflow
} from "lucide-react";

const topics = [
  { icon: TrendingUp, title: "Technical Analysis" },
  { icon: Workflow, title: "Trading Tools" },
  { icon: Shield, title: "Trade Risk Management" },
  { icon: BarChart3, title: "Fundamental Analysis" },
  { icon: Target, title: "Live Trading Sessions" },
  { icon: Brain, title: "Mindset Management" },
  { icon: DollarSign, title: "Money Management" },
  { icon: CandlestickChart, title: "Candlestick Patterns" },
];

export default function LearnSection() {
  return (
    <section id="learn" className="py-24 px-4 bg-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center text-white font-outfit uppercase tracking-widest"
        >
          Your path to <span className="text-[#00f59b]">market mastery</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center py-10">
          {[...topics, ...topics].map((topic, index) => (
            <div key={index} className="mx-8 flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
                {/* Progress-like Rings */}
                <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                <div className="absolute inset-0 border-t-4 border-l-4 border-[#00f59b] rounded-full opacity-80" />
                <div className="absolute inset-4 border border-white/5 rounded-full" />
                
                <div className="text-center px-6">
                  <topic.icon className="w-6 h-6 md:w-8 md:h-8 text-[#00f59b] mx-auto mb-2 opacity-50" />
                  <p className="text-[10px] md:text-xs font-black text-[#00f59b] uppercase tracking-widest leading-tight whitespace-normal">
                    {topic.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}