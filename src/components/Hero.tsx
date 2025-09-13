"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Users, Zap } from "lucide-react";
import LightRays from "./LightRays";
import TopNav from './TopNav';

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
    <section className="min-h-screen bg-brand-navy text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <TopNav />
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
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="flex items-center space-x-2 bg-brand-green-200 text-brand-navy-900 px-4 py-2 pt-20 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4 text-primary-green" />
              <span className="">Ghana's Premier Youth Tech Bootcamp</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight relative"
          >
            <span className="text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] 
                           filter brightness-110 mix-blend-screen
                           transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]">
              Code Your
            </span>
            <br />
            <span className="text-primary-green drop-shadow-[0_0_25px_rgba(34,197,94,0.7)] 
                           filter  transition-all duration-300 hover:drop-shadow-[0_0_35px_rgba(34,197,94,0.9)]
                         ">
              Future Today
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of Ghanaian youth mastering cutting-edge technology.
            From web development to AI, we&apos;re building the next generation of
            tech leaders across SHS, JHS, and universities.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300"
          >
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold">5,000+ Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code2 className="w-5 h-5" />
              <span className="font-semibold">15+ Programs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">95% Success Rate</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-primary-green hover:bg-brand-green-600 text-brand-navy font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-brand-navy font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Floating elements for visual interest */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-primary-green rounded-full opacity-20"
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