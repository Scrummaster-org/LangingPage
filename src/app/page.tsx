import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackgroundPatterns from "@/components/ui/BackgroundPatterns";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Global Background Patterns */}
      <div className="fixed inset-0 z-0">
        <BackgroundPatterns />
      </div>
      
      {/* Global dark overlay */}
      <div className="fixed inset-0 bg-black/30 z-5"></div>
      
      {/* All page content with higher z-index */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}