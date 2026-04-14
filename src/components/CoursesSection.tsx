"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EnrollButton from "./EnrollButton";

const courses = [
  {
    name: "Starter Program",
    type: "Online",
    duration: "8 Weeks",
    price: "₹14,999",
    desc: "Begin with a complete, structured trading foundation for consistent growth.",
    features: ["SMC system introduction", "Live trading support", "Community access", "Mentorship guidance"],
  },
  {
    name: "Flagship Program",
    type: "Online",
    duration: "12 Weeks",
    price: "₹29,999",
    desc: "Best for serious traders looking for a full market system and funded-account strategy.",
    badge: "⭐ MOST POPULAR",
    features: ["Complete SMC system", "Live classes", "Community + mentorship", "Funded account strategy"],
  },
  {
    name: "Online Program",
    type: "Online",
    duration: "10 Weeks",
    price: "₹24,999",
    desc: "A focused online program designed to improve your edge in fast-moving markets.",
    features: ["Live training", "Strategy playbooks", "Weekly Q&A", "Ongoing support"],
  },
  {
    name: "1-on-1 Mentorship",
    type: "Mentorship",
    duration: "Custom",
    price: "Online ₹89,999 / Offline ₹99,999",
    desc: "For serious wealth builders seeking personal guidance and a custom trading strategy.",
    features: ["Personal guidance", "Custom strategy", "Live performance reviews", "Account growth roadmap"],
  },
];

export default function CoursesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 font-outfit"
        >
          Specialized <span className="gold-text">Trading Courses</span>
        </motion.h2>

        <div className="relative group">
          <button onClick={() => scroll("left")} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full text-white hover:text-gold transition-all duration-300 shadow-2xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100">
            <ChevronLeft size={28} />
          </button>
          <button onClick={() => scroll("right")} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full text-white hover:text-gold transition-all duration-300 shadow-2xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100">
            <ChevronRight size={28} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4"
          >
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="min-w-[300px] md:min-w-[400px] snap-start glass-card rounded-3xl p-8 border border-white/5 flex flex-col gold-border-glow hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold font-outfit leading-tight">{course.name}</h3>
                    {course.badge ? <p className="mt-2 text-sm text-[#ffc107] font-semibold uppercase tracking-[0.2em]">{course.badge}</p> : null}
                  </div>
                  <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full ${course.type === "Online" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : course.type === "Mentorship" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" : "bg-green-500/10 text-green-400 border border-green-500/20"}`}>
                    {course.type}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2">{course.desc}</p>
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">⏱ {course.duration}</span>
                    <span className="text-2xl font-bold gold-text font-outfit">{course.price}</span>
                  </div>
                  {course.features?.length ? (
                    <ul className="space-y-2 mb-6 text-gray-400 text-sm">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 before:content-['•'] before:text-[#00f59b] before:text-base">{feature}</li>
                      ))}
                    </ul>
                  ) : null}
                  <EnrollButton courseName={course.name} className="w-full btn-gold py-4 text-sm" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 