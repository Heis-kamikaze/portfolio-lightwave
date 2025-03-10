
import React, { useEffect, useState } from "react";
import { useScrollProgress } from "../utils/animations";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
      <div className={`relative mx-auto max-w-7xl ${isScrolled ? 'glassmorphism' : ''}`}>
        {/* Progress indicator line */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all"
          style={{ width: `${scrollProgress * 100}%`, opacity: isScrolled ? 1 : 0 }}
        ></div>
        
        {/* Background blur if scrolled */}
        <div 
          className={`absolute inset-0 backdrop-blur-lg transition-opacity duration-300 rounded-xl ${isScrolled ? 'opacity-70' : 'opacity-0'}`}
        ></div>

        <nav className={`relative flex items-center justify-between ${isScrolled ? 'py-3 px-4' : 'py-4'} transition-all duration-300`}>
          <a href="#" className="text-xl font-semibold tracking-tight transition-all duration-300 hover:text-accent light-rays">
            <span className="relative">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          
          <ul className="hidden md:flex items-center space-x-8">
            {["Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium relative group"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-300 light-rays"
          >
            Get in touch
          </a>
          
          <button className="md:hidden p-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
