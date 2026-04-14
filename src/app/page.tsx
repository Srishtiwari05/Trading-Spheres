import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LearnSection from "@/components/LearnSection";
import CoursesSection from "@/components/CoursesSection";
import UniqueSection from "@/components/UniqueSection";
import PossibilitiesSection from "@/components/PossibilitiesSection";
import StatsSection from "@/components/StatsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <LearnSection />
      <UniqueSection />
      <CoursesSection />
      <PossibilitiesSection />
      <BlogSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
      <FloatingWhatsApp />
      <ChatWidget />
    </main>
  );
}