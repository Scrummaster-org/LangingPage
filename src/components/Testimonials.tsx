"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Kwame Asante",
      role: "Software Engineer at Google",
      school: "University of Ghana",
      image: "/api/placeholder/100/100",
      quote: "This bootcamp transformed my life completely. From knowing nothing about coding to landing a job at Google - the instructors believed in me when I didn't believe in myself.",
      rating: 5
    },
    {
      id: 2,
      name: "Akosua Mensah",
      role: "Mobile App Developer",
      school: "KNUST",
      image: "/api/placeholder/100/100",
      quote: "The hands-on approach and real-world projects prepared me for the tech industry. I built 3 apps during the program and launched my own startup right after graduation.",
      rating: 5
    },
    {
      id: 3,
      name: "Abdul Rahman",
      role: "AI Engineer at Microsoft",
      school: "UDS Tamale",
      image: "/api/placeholder/100/100",
      quote: "Coming from a rural area, I never thought I could work for a tech giant. This program not only taught me technical skills but also gave me confidence and connections.",
      rating: 5
    },
    {
      id: 4,
      name: "Ama Darko",
      role: "Full-Stack Developer",
      school: "SHS Graduate",
      image: "/api/placeholder/100/100",
      quote: "I joined straight after SHS with no prior experience. The supportive community and structured learning path helped me land my first job within 4 months of graduation.",
      rating: 5
    },
    {
      id: 5,
      name: "Kofi Boateng",
      role: "Tech Entrepreneur",
      school: "University of Cape Coast",
      image: "/api/placeholder/100/100",
      quote: "The entrepreneurship mentorship was incredible. I not only learned to code but also how to turn my ideas into a profitable business. My fintech startup now serves 10,000+ users.",
      rating: 5
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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
        duration: 0.6,

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
          <motion.div variants={slideUpVariants} className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our graduates who are now working at top tech companies 
              and building successful startups across Ghana and beyond.
            </p>
          </motion.div>

          {/* Main Testimonial Carousel */}
          <motion.div variants={slideUpVariants} className="relative">
            <div className="bg-brand-navy-800/50 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              {/* Background Quote Icon */}
              <Quote className="absolute top-8 right-8 w-20 h-20 text-brand-green-600 opacity-20" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8"
                >
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 bg-primary-green rounded-full flex items-center justify-center text-white font-bold text-2xl lg:text-3xl">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg lg:text-xl text-gray-200 mb-6 leading-relaxed italic">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </blockquote>

                    {/* Author Info */}
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary-green font-semibold">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {testimonials[currentIndex].school}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/10 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/10 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary-green' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={slideUpVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          >
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-green">5,000+</div>
              <div className="text-gray-600">Graduates</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-green">95%</div>
              <div className="text-gray-600">Job Placement Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-green">₵8,500</div>
              <div className="text-gray-600">Average Starting Salary</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;