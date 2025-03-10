
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingShapes from "../components/FloatingShapes";

const Index: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Create light ray effect that follows mouse with a light delay
      const lightElements = document.querySelectorAll(".light-rays");
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      lightElements.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;
        
        const distanceX = mouseX - elCenterX;
        const distanceY = mouseY - elCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Apply subtle shift/glow based on mouse distance
        if (distance < 300) {
          const intensity = 1 - distance / 300;
          (el as HTMLElement).style.boxShadow = `0 0 ${20 * intensity}px rgba(255, 255, 255, ${0.1 * intensity})`;
          (el as HTMLElement).style.transform = `translateX(${distanceX * 0.02}px) translateY(${distanceY * 0.02}px)`;
        } else {
          (el as HTMLElement).style.boxShadow = "none";
          (el as HTMLElement).style.transform = "translateX(0) translateY(0)";
        }
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    // Intersection Observer logic to animate elements as they enter viewport
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);
    
    const staggeredElements = document.querySelectorAll(".staggered-fade-in");
    staggeredElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      staggeredElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <FloatingShapes />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
