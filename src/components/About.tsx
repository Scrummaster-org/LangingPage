"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
  <section id="about" className="py-20 bg-brand-navy text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={slideUpVariants} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We&apos;re on a mission to bridge the digital divide in Ghana by empowering 
              young minds with world-class technology education. Our vision is to create 
              a generation of innovative problem-solvers who will drive Africa&apos;s 
              technological transformation.
            </p>
          </motion.div>

          {/* Mission Points */}
          <motion.div
            variants={slideUpVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-green-200/20 border border-primary-green/30 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Skill-Focused Learning
              </h3>
              <p className="text-gray-300">
                Industry-relevant curriculum designed to meet real-world demands
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-green-200/20 border border-primary-green/30 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Community Impact
              </h3>
              <p className="text-gray-300">
                Building solutions that address local challenges and opportunities
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-green-200/20 border border-primary-green/30 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Global Standards
              </h3>
              <p className="text-gray-300">
                World-class education that prepares students for international opportunities
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-brand-green-200/20 border border-primary-green/30 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Career Growth
              </h3>
              <p className="text-gray-300">
                Continuous support and mentorship for long-term success
              </p>
            </div>
          </motion.div>

          {/* Call-out Quote */}
          <motion.div
            variants={slideUpVariants}
            className="bg-brand-navy-800/50 border border-white/10 rounded-2xl p-8 lg:p-12"
          >
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-200 text-center italic">
              &quot;Every young person in Ghana deserves access to quality tech education. 
              We&apos;re not just teaching code – we&apos;re building dreams, creating opportunities, 
              and shaping the future of our nation.&quot;
            </blockquote>
            <div className="mt-6 text-center">
              <p className="font-semibold text-primary-green">- Our Founding Vision</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;