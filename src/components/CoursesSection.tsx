"use client";

import { motion } from "framer-motion";
import EnrollButton from "./EnrollButton";
import { ArrowUpRight, Zap } from "lucide-react";

const courses = [
  {
    name: "Starter Program",
    type: "Online",
    duration: "8 Weeks",
    price: "₹14,999",
    desc: "Begin with a complete, structured trading foundation for consistent growth.",
    features: ["SMC system introduction", "Live trading support", "Community access", "Mentorship guidance"],
    color: "from-[#00f5ff]/10 to-transparent",
    accent: "text-[#00f5ff]"
  },
  {
    name: "Flagship Program",
    type: "Online",
    duration: "12 Weeks",
    price: "₹29,999",
    desc: "Best for serious traders looking for a full market system and funded-account strategy.",
    badge: "⭐ MOST POPULAR",
    features: ["Complete SMC system", "Live classes", "Community + mentorship", "Funded account strategy"],
    color: "from-gold/20 to-transparent",
    accent: "text-gold"
  },
  {
    name: "Online Program",
    type: "Online",
    duration: "10 Weeks",
    price: "₹24,999",
    desc: "A focused online program designed to improve your edge in fast-moving markets.",
    features: ["Live training", "Strategy playbooks", "Weekly Q&A", "Ongoing support"],
    color: "from-[#b026ff]/10 to-transparent",
    accent: "text-[#b026ff]"
  },
  {
    name: "1-on-1 Mentorship",
    type: "Mentorship",
    duration: "Custom",
    price: "Online ₹89,999 / Offline ₹99,999",
    desc: "For serious wealth builders seeking personal guidance and a custom trading strategy.",
    features: ["Personal guidance", "Custom strategy", "Live performance reviews", "Account growth roadmap"],
    color: "from-white/10 to-transparent",
    accent: "text-white"
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-32 px-4 bg-transparent relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} className="text-[#00f5ff]" /> Elite Pathways
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-outfit leading-tight">
            Specialized <span className="neon-text">Trading</span> Programs
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg block">
            Designed for serious individuals ready to transcend retail trading and adopt an institutional edge.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 pb-16">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full"
            >
              {/* Card Container layered effect */}
              <div 
                className="glass-card rounded-[2rem] p-8 md:p-12 border border-white/10 futuristic-border relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-2xl"
                style={{ backgroundColor: 'var(--dark-surface)' }}
              >
                {/* Background gradient hint */}
                <div className={`absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l ${course.color} opacity-30 pointer-events-none`} />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-3xl md:text-4xl font-black font-outfit">{course.name}</h3>
                      {course.badge && (
                        <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest rounded-full border border-gold/20">
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">{course.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 text-sm font-medium text-gray-300">
                      {course.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${course.accent.replace('text', 'bg')}`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-72 flex flex-col justify-end bg-black/40 p-6 md:p-8 rounded-3xl border border-white/5">
                    <div className="mb-6">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Duration</p>
                      <p className="text-lg font-bold">{course.duration}</p>
                    </div>
                    <div className="mb-8">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Investment</p>
                      <p className={`text-3xl font-black font-outfit ${course.accent}`}>{course.price}</p>
                    </div>
                    <EnrollButton courseName={course.name} className="w-full relative group btn-gold py-4 rounded-xl overflow-hidden text-sm">
                      <span className="relative z-10 flex items-center justify-center gap-2 font-bold uppercase tracking-wider">
                        Enroll Now <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </EnrollButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 