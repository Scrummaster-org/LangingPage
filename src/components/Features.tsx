"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // ✅ Next.js Image import fixed

import {
  Code,
  Smartphone,
  Brain,
  Users,
  Briefcase,
  Award,
  Clock,
  MapPin,
} from "lucide-react";

// ✅ Image imports (public folder works with direct imports in Next.js)
import together from "../../public/together.png";
import ai from "../../public/ai.png";
import fullstack from "../../public/fullstack.png";
import mobile from "../../public/mobile.png";

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
      transition: { duration: 0.8 },
    },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Master frontend and backend technologies including React, Node.js, Python, and databases. Build complete web applications from scratch with industry-standard tools and frameworks.",
      benefits: [
        "Real-world projects",
        "Industry mentorship",
        "Job-ready portfolio",
        "Live deployment experience",
      ],
      imageAlt: "Full-stack development workspace",
      imageSrc: fullstack,
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Build native and cross-platform mobile applications for iOS and Android using React Native and Flutter. Learn app store deployment and mobile-first design principles.",
      benefits: [
        "App Store deployment",
        "Cross-platform development",
        "UI/UX optimization",
        "Performance testing",
      ],
      imageAlt: "Mobile app development",
      imageSrc: mobile,
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      description:
        "Dive into machine learning, data analysis, and artificial intelligence with Python and cutting-edge tools. Work with real datasets and build predictive models.",
      benefits: [
        "Machine learning projects",
        "Data visualization",
        "Python & R programming",
        "Career in AI/ML",
      ],
      imageAlt: "AI and data science workspace",
      imageSrc: ai,
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description:
        "Work in teams on real projects, participate in hackathons, and build your professional network. Experience agile development and project management.",
      benefits: [
        "Team collaboration",
        "Hackathon participation",
        "Professional networking",
        "Agile methodologies",
      ],
      imageAlt: "Team collaboration workspace",
      imageSrc: together,
    },
  ];

  const stats = [
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Evening & weekend classes",
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      description: "Accra, Kumasi, Tamale",
    },
    {
      icon: Briefcase,
      title: "95% Job Placement",
      description: "Within 6 months",
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "Recognized credentials",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 text-white overflow-hidden relative"
      ref={ref}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Mobile-first responsive container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12 sm:space-y-16 lg:space-y-24"
        >
          {/* Section Header */}
          <motion.div
            variants={slideInLeft}
            className="text-center space-y-4 sm:space-y-6"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
              style={{
                textShadow:
                  "0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3)",
              }}
            >
              Why Choose Our Bootcamp?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              We offer comprehensive programs designed specifically for Ghanaian
              youth, combining world-class curriculum with local context and
              career support.
            </p>
          </motion.div>

          {/* Features */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={containerVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Text Content */}
              <motion.div
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className={`space-y-6 sm:space-y-8 order-2 lg:order-none ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/40 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      boxShadow:
                        "0 0 30px rgba(34, 197, 94, 0.2), 0 0 60px rgba(34, 197, 94, 0.1)",
                    }}
                  >
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed text-center sm:text-left">
                  {feature.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {feature.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg border border-gray-800/50"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(34, 197, 94, 0.9)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-green-400 text-black font-bold py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25 min-h-[48px]"
                >
                  <span className="text-sm sm:text-base">
                    Learn More About {feature.title}
                  </span>
                </motion.button>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={index % 2 === 0 ? slideInRight : slideInLeft}
                className={`relative order-1 lg:order-none ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-white rounded-xl sm:rounded-2xl border border-gray-300 overflow-hidden backdrop-blur-sm">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    className="object-contain rounded-xl sm:rounded-2xl"
                  />

                  {/* Decorative dots */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400/60 rounded-full animate-pulse delay-1000"></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-green-400/5 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Stats Section */}
          <motion.div
            variants={slideInLeft}
            className="relative mt-16 sm:mt-24 lg:mt-32"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-gray-900/40 to-green-900/20 rounded-3xl blur-3xl"></div>

            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h3
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4"
                  style={{
                    textShadow: "0 0 15px rgba(34, 197, 94, 0.4)",
                  }}
                >
                  Why Students Choose Us
                </h3>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.title}
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative text-center p-4 sm:p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-lg sm:rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/20"
                  >
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div
                      className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400/30 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-500"
                      style={{
                        boxShadow:
                          "0 0 25px rgba(34, 197, 94, 0.3), inset 0 2px 0 rgba(34, 197, 94, 0.2)",
                      }}
                    >
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                      <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping opacity-0 group-hover:opacity-100"></div>
                    </div>

                    <div className="relative space-y-2 sm:space-y-3">
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                        {stat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                        {stat.description}
                      </p>
                      <div className="w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-500 mx-auto rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700/50">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 min-h-[48px] text-sm sm:text-base"
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
