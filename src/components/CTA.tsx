"use client";
import Logos from "./ui/Logos";
import { motion, easeOut, easeInOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  TrendingUp,
} from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut, // ✅ fixed here
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 255, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: easeOut, // ✅ fixed here
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const bounceVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut, // ✅ fixed here
      },
    },
  };

  const urgencyPoints = [
    {
      icon: Clock,
      text: "Early Bird Discount - Save 30%",
    },
    {
      icon: Star,
      text: "Limited to 50 Students Per Cohort",
    },
    {
      icon: TrendingUp,
      text: "99% Satisfaction Rate",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-secondary-olive via-brand-olive-800 to-secondary-olive relative overflow-hidden"
      ref={ref}
    >
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary-green rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-primary-green rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 border-2 border-primary-green rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 border-2 border-primary-green rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-12"
        >
          {/* Urgency Indicators */}
          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            {urgencyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-primary-green"
              >
                <point.icon className="w-5 h-5" />
                <span className="text-sm font-semibold">{point.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Main CTA Content */}
          <motion.div variants={slideUpVariants} className="space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Don&apos;t Wait.
              <br />
              <span className="text-primary-green">Start Coding Today!</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join thousands of Ghanaian youth who have transformed their
              careers. The next cohort starts in 2 weeks - secure your spot now!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-primary-green hover:bg-brand-green-600 text-white font-bold py-5 px-10 rounded-full text-xl shadow-2xl flex items-center space-x-3 group"
            >
              <span>Apply Now - Limited Spots</span>
              <motion.div variants={bounceVariants} animate="animate">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white font-bold py-5 px-10 rounded-full text-xl transition-colors duration-300"
            >
              Download Brochure
            </motion.button>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            variants={slideUpVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-200">+233 24 123 4567</p>
              <p className="text-sm text-gray-300 mt-2">Mon-Fri, 9AM-6PM</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-200">admissions@ghanatechbootcamp.com</p>
              <p className="text-sm text-gray-300 mt-2">Quick Response</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-200">Accra • Kumasi • Tamale</p>
              <p className="text-sm text-gray-300 mt-2">Multiple Locations</p>
            </div>
          </motion.div>

          {/* Social Proof + Final Urgency Message */}
          <motion.div variants={slideUpVariants} className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-gray-300 text-sm">
                Trusted by students from 50+ schools across Ghana
              </p>
            </div>

            <p className="text-primary-green font-semibold text-lg">
              ⚡ Why are we here if we cant do great things!
            </p>

            <Logos />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
