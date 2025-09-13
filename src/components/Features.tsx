"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Smartphone, 
  Brain, 
  Users, 
  Briefcase, 
  Award,
  Clock,
  MapPin
} from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Master frontend and backend technologies including React, Node.js, Python, and databases.",
      benefits: ["Real projects", "Industry mentors", "Job-ready skills"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      benefits: ["App Store deployment", "UI/UX design", "Performance optimization"]
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Dive into machine learning, data analysis, and artificial intelligence with Python and cutting-edge tools.",
      benefits: ["Hands-on projects", "Real datasets", "Career pathways"]
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Work in teams on real projects, participate in hackathons, and build your professional network.",
      benefits: ["Peer learning", "Team projects", "Networking events"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Evening and weekend classes designed for students"
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      description: "Campuses in Accra, Kumasi, and Tamale"
    },
    {
      icon: Briefcase,
      title: "Job Placement",
      description: "95% of graduates find employment within 6 months"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Industry-recognized certificates upon completion"
    }
  ];

  return (
    <section className="py-20 bg-brand-navy text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Why Choose Our Bootcamp?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive programs designed specifically for Ghanaian youth, 
              combining world-class curriculum with local context and career support.
            </p>
          </motion.div>

          {/* Main Features Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="bg-brand-navy-800/40 border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-brand-green-200/20 border border-primary-green/30 rounded-xl flex items-center justify-center group-hover:bg-primary-green group-hover:text-brand-navy transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-primary-green group-hover:text-brand-navy" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Grid */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                className="bg-brand-navy-800/40 border border-white/10 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-brand-green-200/20 border border-primary-green/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-green" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={cardVariants}
            className="text-center bg-brand-navy-800/50 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Tech Journey?</h3>
            <p className="text-lg mb-6 text-gray-300">
              Join the next cohort and transform your future with in-demand tech skills.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-green text-brand-navy font-bold py-3 px-8 rounded-full hover:bg-brand-green-600 transition-colors duration-300"
            >
              Explore Programs
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;