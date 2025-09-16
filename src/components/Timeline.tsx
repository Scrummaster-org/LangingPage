"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BookOpen, 
  Code2, 
  Users, 
  Rocket, 
  Calendar,
  Clock,
  CheckCircle
} from "lucide-react";

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const timelineData = [
    {
      phase: "Phase 1",
      title: "Foundation & Fundamentals",
      duration: "Weeks 1-4",
      icon: BookOpen,
      description: "Master the basics of programming, web development fundamentals, and development tools.",
      skills: ["HTML/CSS", "JavaScript Basics", "Git & GitHub", "Problem Solving"],
      color: "from-brand-green-400 to-brand-green-600"
    },
    {
      phase: "Phase 2", 
      title: "Frontend Development",
      duration: "Weeks 5-8",
      icon: Code2,
      description: "Build interactive user interfaces with modern frameworks and design principles.",
      skills: ["React.js", "Tailwind CSS", "Responsive Design", "API Integration"],
      color: "from-brand-olive-400 to-brand-olive-600"
    },
    {
      phase: "Phase 3",
      title: "Backend & Databases",
      duration: "Weeks 9-12",
      icon: Users,
      description: "Learn server-side programming, databases, and how to build robust APIs.",
      skills: ["Node.js", "Express.js", "MongoDB", "Authentication"],
      color: "from-brand-green-500 to-brand-green-700"
    },
    {
      phase: "Phase 4",
      title: "Capstone & Deployment",
      duration: "Weeks 13-16",
      icon: Rocket,
      description: "Build real-world projects, deploy applications, and prepare for job interviews.",
      skills: ["Full-Stack Projects", "Cloud Deployment", "Portfolio", "Interview Prep"],
      color: "from-brand-olive-500 to-brand-olive-700"
    }
  ];

  const scheduleInfo = [
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Evening classes (6-9 PM) and weekend sessions"
    },
    {
      icon: Clock,
      title: "Duration",
      description: "16 weeks intensive program with lifetime access"
    },
    {
      icon: CheckCircle,
      title: "Support",
      description: "1-on-1 mentorship and career guidance included"
    }
  ];

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

  const slideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
              Program Timeline
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive 16-week curriculum is designed to take you from 
              beginner to job-ready developer with hands-on projects and real-world experience.
            </p>
          </motion.div>

          {/* Schedule Info Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {scheduleInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={cardVariants}
                className="bg-brand-navy-800/40 border border-white/10 rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-brand-green-200/20 border border-primary-green/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-green" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-green to-brand-green-700"></div>

            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-20">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.phase}
                  variants={slideVariants}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}>
                    <div className="bg-brand-navy-800/40 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 bg-brand-green-600/80 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-7 h-7 text-brand-navy" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-semibold text-primary-green bg-brand-green-100 px-3 py-1 rounded-full">
                              {item.phase}
                            </span>
                            <span className="text-sm text-gray-500">
                              {item.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-secondary-olive text-sm">
                              Key Skills:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="text-xs bg-brand-green-200/20 text-brand-green-300 px-3 py-1 rounded-full border border-primary-green/30"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center my-8">
                    <div className="w-6 h-6 bg-primary-green rounded-full border-4 border-brand-navy shadow-lg z-10"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={cardVariants}
            className="text-center bg-brand-navy-800/50 border border-white/10 rounded-2xl p-8 lg:p-12 shadow-xl"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our next cohort starting soon. Limited spots available for 
              personalized attention and better learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-green hover:bg-brand-green-600 text-brand-navy font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-colors duration-300"
              >
                View Full Curriculum
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-brand-navy font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300"
              >
                Schedule Info Session
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;