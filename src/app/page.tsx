import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import BackgroundPatterns from "@/components/ui/BackgroundPatterns";
import Footer from "@/components/Footer";

// Lazy load components that are below the fold
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,

});

const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <div className="h-screen bg-gray-800 animate-pulse" />,

});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,

});

const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="h-64 bg-gray-800 animate-pulse" />,

});



export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Global Background Patterns - Load immediately */}
      <div className="fixed inset-0 z-0">
        <BackgroundPatterns />
      </div>
      
      {/* Global dark overlay */}
      <div className="fixed inset-0 bg-black/30 z-5"></div>
      
      {/* All page content with higher z-index */}
      <div className="relative z-10">
        {/* Hero loads immediately - above the fold */}
        <Hero />
        
        {/* Below the fold components load lazily */}
        <About />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}