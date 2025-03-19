
import React, { useEffect, useRef } from "react";
import { useLightRayEffect } from "../utils/animations";

const Hero: React.FC = () => {
  const lightRayRef = useLightRayEffect() as React.RefObject<HTMLDivElement>;
  const textContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const textContainer = textContainerRef.current;
    if (!textContainer) return;
    
    textContainer.classList.add('animate');
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const posX = (clientX - centerX) / centerX * 5;
      const posY = (clientY - centerY) / centerY * 5;
      
      textContainer.style.transform = `perspective(1000px) rotateX(${-posY}deg) rotateY(${posX}deg) scale3d(1, 1, 1)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-6 relative overflow-hidden">
      <div 
        ref={lightRayRef}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <div 
          ref={textContainerRef} 
          className="staggered-fade-in transition-transform duration-200 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-accent/10 text-white rounded-full">
            Developer, Designer, Creator
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-tight">
            Creating <span className="text-white font-extrabold">digital experiences</span> that leave a lasting impression
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto">
            I'm a passionate developer focused on crafting beautiful user interfaces and seamless experiences with modern technologies.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-300 light-rays w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-all duration-300 light-rays w-full sm:w-auto text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
      
      </div>
    </section>
  );
};

export default Hero;
