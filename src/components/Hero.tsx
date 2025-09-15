"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Users, Zap } from "lucide-react";
import LightRays from "./ui/LightRays";
import TopNav from './TopNav';
import BackgroundPatterns from './ui/BackgroundPatterns';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section id="home" className="min-h-screen bg-brand-navy text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <TopNav />
      
      {/* Background Patterns */}
      <BackgroundPatterns />
      
      {/* Background Light Rays */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-9 sm:space-y-12 lg:space-y-15"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="flex items-center space-x-2 bg-brand-green-200 text-brand-navy-900 px-6 py-3 pt-45 rounded-full text-sm font-medium tracking-wide">
              <Zap className="w-4 h-4 text-[#22c55e]" />
              <span className="font-sans">Ghana&apos;s Premier Youth Tech Bootcamp</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight relative leading-[0.9]"
          >
            <motion.span 
              className="block text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] 
                         filter brightness-110
                         transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Masters of Collaboration, Champions 
            </motion.span>
            <motion.span 
              className="block text-[#22c55e] drop-shadow-[0_0_25px_rgba(34,197,94,0.7)] 
                         filter transition-all duration-300 hover:drop-shadow-[0_0_35px_rgba(34,197,94,0.9)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              of Innovation.
            </motion.span>
          </motion.h1>

          {/* Supporting Text with highlighted keywords */}
          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl mx-auto leading-relaxed space-y-6 sm:space-y-8 md:space-y-10 font-sans"
          >
            <p className="px-4 sm:px-0 font-light tracking-wide text-xl">
              Master the Skills of Tomorrow, Today. Join thousands of Ghanaian youth learning Web Development, AI, and more — building the next generation of tech leaders.
            </p>
           
          </motion.div>



          {/* Enhanced CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center px-4 sm:px-0">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full sm:w-auto bg-gradient-to-r from-primary-green via-brand-green-400 to-primary-green text-brand-navy font-display font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full text-lg sm:text-xl shadow-[0_0_20px_rgba(34,211,166,0.4)] hover:shadow-[0_0_30px_rgba(34,211,166,0.6)] transition-all duration-300 flex items-center justify-center space-x-3 group relative overflow-hidden tracking-wide"
            >
              <span className="relative z-10">Apply Now</span>
              <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green-400 to-primary-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full sm:w-auto border-2 border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-gray-900 font-display font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full text-lg sm:text-xl transition-all duration-300 relative overflow-hidden group tracking-wide"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-primary-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
          </motion.div>

          {/* Floating elements for visual interest */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-[#22c55e] rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-16 h-16 bg-brand-green-600 rounded-full opacity-20"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;