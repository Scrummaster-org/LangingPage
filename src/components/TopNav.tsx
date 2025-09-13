import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollY = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
    id="home"
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 
      opacity-100 scale-100 w-full max-w-12xl`}
    >
      {/* Full width blur background */}
      <div className="backdrop-blur-md bg-gray-800/30 rounded-2xl px-8 py-6
                      relative before:absolute before:inset-0 before:rounded-2xl 
                      before:bg-gradient-to-r before:from-transparent before:via-green-950/50 before:to-transparent
                      before:border-2 before:border-transparent before:bg-clip-padding
                      shadow-[0_0_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
        
        <div className="relative flex items-center w-full">
          {/* Left: Logo (far left) */}
          <div className="flex items-center flex-1">
            <div className="flex items-center space-x-1">
              <span className="text-3xl font-mono font-semibold text-emerald-900 bg-gradient-to-r from-primary-green via-brand-green-400 to-primary-green bg-clip-text drop-shadow-[0_0_8px_rgba(34,211,166,0.6)] animate-pulse transform duration-500">
                $
              </span>
              <span className="text-xl font-mono font-medium text-white tracking-wide">scrummaster</span>
              <span className="text-2xl text-primary-green animate-pulse font-mono font-thin drop-shadow-[0_0_6px_rgba(34,211,166,0.8)]">
                |
              </span>
            </div>
          </div>
          
          {/* Center: Nav links (centered on large screens) */}
          <div className="hidden lg:flex justify-center flex-1">
            <div className="flex gap-27 items-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1); // Remove # from href
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="relative font-medium text-base tracking-wide group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* text span: with active state styling */}
                    <span className={`relative z-10 transition-colors duration-300 delay-150 group-hover:text-primary-green ${
                      isActive ? 'text-primary-green' : 'text-white'
                    }`}>
                      {link.label}
                    </span>
                    {/* underline: shows for active state and hover */}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#22c55e] transition-all duration-200 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                    <span className="absolute inset-0 bg-primary-green/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></span>
                  </motion.a>
                );
              })}
            </div>
          </div>
  
          {/* Right: CTA + mobile menu (far right) */}
          <div className="flex items-center justify-end flex-1 gap-4">
<motion.button
  className="hidden lg:inline-flex backdrop-blur-lg bg-green-950 text-brand-navy font-semibold px-6 py-2 rounded-full text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-row items-center gap-2"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span>Get Started</span>
<motion.span
  animate={{ y: [0, -3, 0] }}
  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
>
  <Rocket size={16} />
</motion.span>
</motion.button>

  
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-primary-green transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-brand-navy/95 backdrop-blur-md rounded-xl border border-brand-green-500/20 shadow-xl"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-300 text-center py-2 font-medium tracking-wide ${
                      isActive 
                        ? 'text-primary-green' 
                        : 'text-white hover:text-primary-green'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <button className="bg-gradient-to-r from-primary-green to-brand-green-400 text-brand-navy font-semibold px-6 py-3 rounded-full mt-4 hover:scale-105 transition-transform duration-300 tracking-wide">
                Get Started
              </button>

            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}



