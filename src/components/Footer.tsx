"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Code2,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const slideUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Admission", href: "#admission" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Career Services", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "Full-Stack Development", href: "#fullstack" },
    { name: "Mobile App Development", href: "#mobile" },
    { name: "Data Science & AI", href: "#datascience" },
    { name: "UI/UX Design", href: "#design" },
    { name: "Digital Marketing", href: "#marketing" },
    { name: "Cybersecurity", href: "#security" },
  ];

  const campuses = [
    {
      city: "Accra",
      address: "East Legon, Accra",
      phone: "+233 27 484 7107",
      email: "accra@ghanatechbootcamp.com"
    },
    {
      city: "Kumasi",
      address: "KNUST Campus, Kumasi",
      phone: "+233 24 765 4321",
      email: "kumasi@ghanatechbootcamp.com"
    },
    {
      city: "Tamale",
      address: "UDS Campus, Tamale",
      phone: "+233 24 987 6543",
      email: "tamale@ghanatechbootcamp.com"
    }
  ];

  return (
    <footer className="bg-brand-navy text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div variants={slideUpVariants} className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="text-2xl font-bold text-primary-green">TechBootcamp</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Empowering Ghanaian youth with world-class technology education. 
                Building the next generation of tech leaders across Africa.
              </p>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-colors duration-300 hover:bg-white/20`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={slideUpVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-primary-green">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-green transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div variants={slideUpVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-primary-green">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a
                      href={program.href}
                      className="text-gray-300 hover:text-primary-green transition-colors duration-300 flex items-center group"
                    >
                      <span>{program.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={slideUpVariants} className="space-y-6">
              <h4 className="text-lg font-semibold text-primary-green">Contact Us</h4>
              
              {/* General Contact */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">General Inquiries</p>
                    <a 
                      href="mailto:info@ghanatechbootcamp.com"
                      className="text-gray-300 hover:text-primary-green transition-colors duration-300"
                    >
                      info@ghanatechbootcamp.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Admissions Hotline</p>
                    <a 
                      href="tel:+233241234567"
                      className="text-gray-300 hover:text-primary-green transition-colors duration-300"
                    >
                      +233 24 123 4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Campus Locations */}
              <div className="space-y-3">
                <h5 className="text-white font-medium">Our Campuses</h5>
                {campuses.map((campus) => (
                  <div key={campus.city} className="text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary-green flex-shrink-0" />
                      <span className="text-white font-medium">{campus.city}</span>
                    </div>
                    <p className="text-gray-300 ml-6">{campus.address}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={slideUpVariants}
          className="border-t border-white/20 py-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-300">
                © 2025 Ghana Tech Bootcamp. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Building Ghana&apos;s tech future, one student at a time.
              </p>
            </div>

            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-primary-green transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-green transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-green transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Additional Badge */}
          <div className="text-center mt-6 pt-6 border-t border-white/10">
            <div className="inline-flex items-center space-x-2 bg-primary-green/20 px-4 py-2 rounded-full">
              <span className="text-primary-green text-sm font-medium">
                🇬🇭 Proudly Ghanaian • Globally Recognized
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;