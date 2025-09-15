import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Logo {
  src: string;
  alt: string;
}

const UNIVERSITY_LOGOS: Logo[] = [
  { src: "/logos/university-of-ghana9757.jpg", alt: "University of Ghana" },
  { src: "/logos/KNUST.png", alt: "KNUST" },
  { src: "/logos/UCC.png", alt: "University of Cape Coast" },
  { src: "/logos/GCTU.jpg", alt: "Ghana Communication Technology University" },
  { src: "/logos/GIMPA_Ghana_Institute_of_Management_and_Public_Administration_logo.jpg", alt: "GIMPA" },
  { src: "/logos/ATU-LOGO-AUTHENTIC-edit-1024x980-1.png", alt: "Accra Technical University" },
  { src: "/logos/BTU.png", alt: "Bolgatanga Technical University" },
  { src: "/logos/UEW.png", alt: "University of Education Winneba" },
  { src: "/logos/uhas.jpg", alt: "University of Health and Allied Sciences" },
  { src: "/logos/University_of_Professional_Studies_logo.png", alt: "University of Professional Studies" },
  { src: "/logos/CCTU_logo.png", alt: "Cape Coast Technical University" },
  { src: "/logos/HTU-LOGO-PNG-1-1487x1536.png", alt: "Ho Technical University" },
  { src: "/logos/kstu_logo.png", alt: "Kumasi Technical University" },
  { src: "/logos/UENR-LOGO-spline-Converted-1.png", alt: "University of Energy and Natural Resources" },
  { src: "/logos/uesd-crest.jpg", alt: "University of Environment and Sustainable Development" },
  { src: "/logos/Sunyani-Technical-University-logo.png", alt: "Sunyani Technical University" },
  { src: "/logos/Takoradi-Logo-1-e1676894575438-1024x362-2.png", alt: "Takoradi Technical University" },
  { src: "/logos/university_of_development_STUDIES.jpg", alt: "University of Development Studies" },
  { src: "/logos/University_of_Mines_and_Technology_logo.jpg", alt: "University of Mines and Technology" }
];

interface LogoItemProps {
  logo: Logo;
}

const LogoItem: React.FC<LogoItemProps> = ({ logo }) => (
  <Image 
    src={logo.src} 
    alt={logo.alt} 
    width={180} 
    height={120} 
    className="grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0 object-contain"
    priority={false}
  />
);

interface LogoRowProps {
  logos: Logo[];
}

const LogoRow: React.FC<LogoRowProps> = ({ logos }) => (
  <div className="flex space-x-6 lg:space-x-8 flex-shrink-0">
    {logos.map((logo, index) => (
      <LogoItem key={`${logo.alt}-${index}`} logo={logo} />
    ))}
  </div>
);

interface UniversityLogosProps {
  animationDuration?: number;
  className?: string;
}

const UniversityLogos: React.FC<UniversityLogosProps> = ({ 
  animationDuration = 40,
  className = ""
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div 
        className="flex space-x-6 lg:space-x-8"
        animate={{ x: [0, -3000] }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* First set of logos */}
        <LogoRow logos={UNIVERSITY_LOGOS} />
        
        {/* Duplicate set for seamless loop */}
        <LogoRow logos={UNIVERSITY_LOGOS} />
      </motion.div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-blackF to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default UniversityLogos;