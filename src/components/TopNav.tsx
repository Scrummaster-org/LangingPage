import { useEffect, useState } from "react";
import Img from "next/image";
import scrumlogo from  '../../public/scrumlogo.jpg'

export default function Navbar() {
  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 
      opacity-100 scale-100 w-full max-w-12xl`}
    >
      {/* Full width blur background */}
      <div className="backdrop-blur-md rounded-2xl px-8 py-6
                      relative before:absolute before:inset-0 before:rounded-2xl 
                      before:bg-gradient-to-r before:from-transparent before:via-green-950/50 before:to-transparent
                      before:border-2 before:border-transparent before:bg-clip-padding
                      shadow-[0_0_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
        
        <div className="relative flex items-center justify-center">
          {/* Logo positioned on far left */}
          <div className="absolute left-0 flex items-center">
            <Img src={scrumlogo} alt="Scrum Logo" className="h-23 w-auto object-contain rounded-lg" />
            <span className="text-2xl text-primary-green animate-pulse font-thin -ml-10">_</span>
          </div>
          
          {/* Navigation centered */}
          <div className="flex gap-40 text-white">
            <a href="#home" >Home</a>
            <a href="#about" >About</a>
            <a href="#services" >Services</a>
            <a href="#contact"> Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}



