"use client";

import { motion, Variants, useInView, easeOut } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Globe, TrendingUp } from "lucide-react";
import Cards from "./ui/Cards";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // ✅ Fixed transition typing (use imported `easeOut`)
  const slideUpVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-brand-navy text-white" ref={ref}>
      <Cards />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={slideUpVariants} className="space-y-6">
            <h3
              className="text-center text-6xl font-bold p-7 pt-25"
              style={{
                textShadow:
                  "0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              Our Mission
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We&apos;re on a mission to bridge the digital divide in Ghana by
              empowering young minds with world-class technology education. Our
              vision is to create a generation of innovative problem-solvers who
              will drive Africa&apos;s technological transformation.
            </p>
          </motion.div>

          {/* Mission Points */}
          <motion.div
            variants={slideUpVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Skill-Focused Learning */}
            <motion.div
              className="group text-center space-y-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900/20 to-transparent border border-gray-800/30 hover:border-green-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-900/30"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all duration-500"
                style={{
                  boxShadow:
                    "0 0 30px rgba(34, 197, 94, 0.2), 0 0 60px rgba(34, 197, 94, 0.1), inset 0 2px 0 rgba(34, 197, 94, 0.3)",
                }}
              >
                <Target className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                  Skill-Focused Learning
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Industry-relevant curriculum designed to meet real-world
                  demands and future-proof your career
                </p>
              </div>
              <div className="h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
            </motion.div>

            {/* Community Impact */}
            <motion.div
              className="group text-center space-y-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900/20 to-transparent border border-gray-800/30 hover:border-green-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-900/30"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all duration-500"
                style={{
                  boxShadow:
                    "0 0 30px rgba(34, 197, 94, 0.2), 0 0 60px rgba(34, 197, 94, 0.1), inset 0 2px 0 rgba(34, 197, 94, 0.3)",
                }}
              >
                <Heart className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                  Community Impact
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Building solutions that address local challenges and create
                  meaningful opportunities for growth
                </p>
              </div>
              <div className="h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
            </motion.div>

            {/* Global Standards */}
            <motion.div
              className="group text-center space-y-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900/20 to-transparent border border-gray-800/30 hover:border-green-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-900/30"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all duration-500"
                style={{
                  boxShadow:
                    "0 0 30px rgba(34, 197, 94, 0.2), 0 0 60px rgba(34, 197, 94, 0.1), inset 0 2px 0 rgba(34, 197, 94, 0.3)",
                }}
              >
                <Globe className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                  Global Standards
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  World-class education that prepares students for international
                  opportunities and global success
                </p>
              </div>
              <div className="h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
            </motion.div>

            {/* Career Growth */}
            <motion.div
              className="group text-center space-y-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900/20 to-transparent border border-gray-800/30 hover:border-green-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-900/30"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all duration-500"
                style={{
                  boxShadow:
                    "0 0 30px rgba(34, 197, 94, 0.2), 0 0 60px rgba(34, 197, 94, 0.1), inset 0 2px 0 rgba(34, 197, 94, 0.3)",
                }}
              >
                <TrendingUp className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <div className="space-y-3">
                {/* ✅ Fixed typo: text.white → text-white */}
                <h3 className="text-xl font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                  Career Growth
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  Continuous support and mentorship for long-term success and
                  professional development
                </p>
              </div>
              <div className="h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Call-out Quote */}
          <motion.div
            variants={slideUpVariants}
            className="bg-brand-navy-800/50 border border-white/10 rounded-2xl p-8 lg:p-12"
          >
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-200 text-center italic">
              &quot;Every young person in Ghana deserves access to quality tech
              education. We&apos;re not just teaching code – we&apos;re building
              dreams, creating opportunities, and shaping the future of our
              nation.&quot;
            </blockquote>
            <div className="mt-6 text-center">
              <p className="font-semibold text-primary-green">
                - Our Founding Vision
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
