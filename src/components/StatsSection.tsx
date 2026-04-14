"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 2000, suffix: "+", label: "Students Trained" },
  { value: 10, suffix: "Cr+", label: "Profits Generated" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 5, suffix: "+", label: "Years of Teaching" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gold/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 glass-card rounded-3xl gold-border-glow"
            >
              <div className="text-4xl md:text-6xl font-extrabold gold-text mb-3 font-outfit">
                {isInView && <CountUp start={0} end={stat.value} duration={3} separator="," />}
                {stat.suffix}
              </div>
              <p className="text-gray-300 font-medium tracking-wide uppercase text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}