"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Img from 'next/image';

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

import together from '../../public/together.png'
import ai from '../../public/ai.png'
import fullstack from '../../public/fullstack.png'
import mobile from '../../public/mobile.png'

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Master frontend and backend technologies including React, Node.js, Python, and databases. Build complete web applications from scratch with industry-standard tools and frameworks.",
      benefits: ["Real-world projects", "Industry mentorship", "Job-ready portfolio", "Live deployment experience"],
      imageAlt: "Full-stack development workspace",
      imageSrc: fullstack
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications for iOS and Android using React Native and Flutter. Learn app store deployment and mobile-first design principles.",
      benefits: ["App Store deployment", "Cross-platform development", "UI/UX optimization", "Performance testing"],
      imageAlt: "Mobile app development",
      imageSrc: mobile
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Dive into machine learning, data analysis, and artificial intelligence with Python and cutting-edge tools. Work with real datasets and build predictive models.",
      benefits: ["Machine learning projects", "Data visualization", "Python & R programming", "Career in AI/ML"],
      imageAlt: "AI and data science workspace",
      imageSrc: ai
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Work in teams on real projects, participate in hackathons, and build your professional network. Experience agile development and project management.",
      benefits: ["Team collaboration", "Hackathon participation", "Professional networking", "Agile methodologies"],
      imageAlt: "Team collaboration workspace",
      imageSrc: together
    }
  ];

  const stats = [
    { icon: Clock, title: "Flexible Schedule", description: "Evening & weekend classes" },
    { icon: MapPin, title: "Multiple Locations", description: "Accra, Kumasi, Tamale" },
    { icon: Briefcase, title: "95% Job Placement", description: "Within 6 months" },
    { icon: Award, title: "Industry Certified", description: "Recognized credentials" }
  ];

  return (
    <section id="services" className="py-20 text-white overflow-hidden relative" ref={ref}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-24"
        >
          {/* Section Header */}
          <motion.div variants={slideInLeft} className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                style={{
                  textShadow: '0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3)'
                }}>
              Why Choose Our Bootcamp?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive programs designed specifically for Ghanaian youth, 
              combining world-class curriculum with local context and career support.
            </p>
          </motion.div>

          {/* Alternating Features */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={containerVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Text Content */}
              <motion.div
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/40 rounded-2xl flex items-center justify-center"
                       style={{
                         boxShadow: '0 0 30px rgba(34, 197, 94, 0.2), 0 0 60px rgba(34, 197, 94, 0.1)'
                       }}>
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg border border-gray-800/50">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.9)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-400 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
                >
                  Learn More About {feature.title}
                </motion.button>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                variants={index % 2 === 0 ? slideInRight : slideInLeft}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative aspect-[16/10] bg-white rounded-2xl border border-gray-300 overflow-hidden backdrop-blur-sm">
                  {/* Actual Image */}
                  <Img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="absolute inset-0 w-full h-full object-contain rounded-2xl"
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-green-400/60 rounded-full animate-pulse delay-1000"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-400/5 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Bottom Stats Section */}
          <motion.div
            variants={slideInLeft}
            className="relative mt-32"
          >
            {/* Section Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-gray-900/40 to-green-900/20 rounded-3xl blur-3xl"></div>
            
            {/* Stats Grid */}
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4"
                    style={{
                      textShadow: '0 0 15px rgba(34, 197, 94, 0.4)'
                    }}>
                  Why Students Choose Us
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative text-center p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.6) 50%, rgba(17, 24, 39, 0.9) 100%)'
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon container with enhanced styling */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-400/30 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500"
                         style={{
                           boxShadow: '0 0 25px rgba(34, 197, 94, 0.3), inset 0 2px 0 rgba(34, 197, 94, 0.2)'
                         }}>
                      <stat.icon className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                      
                      {/* Pulsing ring effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping opacity-0 group-hover:opacity-100"></div>
                    </div>
                    
                    {/* Content with improved typography */}
                    <div className="relative space-y-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                        {stat.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {stat.description}
                      </p>
                      
                      {/* Bottom accent line */}
                      <div className="w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
                    </div>
                    
                    {/* Corner decoration */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-green-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom CTA */}
              <div className="text-center mt-12 pt-8 border-t border-gray-700/50">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30"
                >
                  Start Your Journey Today
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
