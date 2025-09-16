'use client';

import React, { useState, useEffect } from 'react';
import { Droplet, Smartphone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const services = [
    {
      icon: <Droplet className="w-8 h-8 text-green-400" />,
      title: "UI/UX Design",
      description: "Transform user experiences with intuitive, seamless, and visually engaging designs that drive results.",
      borderGradient: "from-green-400/20 via-green-400/5 to-transparent"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      title: "Mobile Apps",
      description: "Build high-performance, scalable mobile applications for both Android and iOS platforms with modern design and smooth user experience.",
      borderGradient: "from-green-400/20 via-green-400/5 to-transparent"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Web Apps",
      description: "Develop fast, responsive, and secure web applications tailored to your business needs using the latest technologies.",
      borderGradient: "from-green-400/20 via-green-400/5 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="relative z-10">
        <h3 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-8 sm:p-12 lg:p-20' 
            style={{
              textShadow: '0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3)'
            }}>
          Choose Your Path
        </h3>
        
        <div className="max-w-7xl w-full">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => {
              const cardVariants = {
                hidden: {
                  opacity: 0,
                  x: isMobile ? 0 : (index === 0 ? 250 : index === 2 ? -250 : 0),
                  y: 50,
                  rotate: isMobile ? 0 : (index === 0 ? -15 : index === 2 ? 15 : 0),
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: isMobile ? 0 : (index === 0 ? -8 : index === 2 ? 8 : 0),
                  transition: {
                    duration: 1.7,
                  }
                }
              };

              return (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-green-400/20 transition-all duration-500 hover:transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(23, 23, 23, 0.8) 0%, rgba(31, 31, 31, 0.6) 50%, rgba(23, 23, 23, 0.8) 100%)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-green-400/25 group-hover:shadow-xl group-hover:shadow-green-400/40 transition-all duration-500"
                       style={{
                         boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1), inset 0 1px 0 rgba(34, 197, 94, 0.2)'
                       }}>
                    {React.cloneElement(service.icon, { 
                      className: "w-6 h-6 sm:w-8 sm:h-8 text-green-400" 
                    })}
                  </div>
                </div>
                
                <div className="text-center space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  <button className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors duration-300 group/btn min-h-[44px] px-4 py-2 rounded-lg hover:bg-green-400/10">
                    <span className="text-sm sm:text-base">Learn more</span>
                    <svg 
                      className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}