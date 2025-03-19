
import React from "react";

const FloatingShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-accent to-primary">
      <div className="absolute top-[10%] right-[5%] w-40 h-40 rounded-full bg-accent bg-opacity-5 animate-floating- opacity-30 blur-md" style={{ animationDelay: "0s" }}></div>
      <div className="absolute top-[30%] left-[10%] w-64 h-64 rounded-full bg-accent bg-opacity-5 animate-floating-shape opacity-30 blur-md" style={{ animationDelay: "3s" }}></div>
      <div className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full bg-accent bg-opacity-5 animate-floating-shape opacity-30 blur-md" style={{ animationDelay: "5s" }}></div>
      <div className="absolute top-[60%] left-[25%] w-24 h-24 rounded-full bg-accent bg-opacity-5 animate-floating-shape opacity-30 blur-md" style={{ animationDelay: "2s" }}></div>
      
      <div className="absolute top-[15%] left-[15%] w-16 h-16 rounded-md rotate-45 bg-primary bg-opacity-5 animate-floating-shape opacity-30 blur-md" style={{ animationDelay: "4s" }}></div>
      <div className="absolute bottom-[30%] left-[5%] w-20 h-20 rounded-md rotate-12 bg-primary bg-opacity-5 animate-floating-shape opacity-30 blur-md" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-[40%] right-[10%] w-28 h-28 rounded-md rotate-45 bg-primary bg-opacity-5 animate-floating-shape opacity-30 blur-md" style={{ animationDelay: "6s" }}></div>
      
      <div className="absolute bottom-[10%] left-[40%] w-48 h-48 rounded-full bg-secondary bg-opacity-10 blur-3xl animate-spin-slow opacity-30"></div>
      <div className="absolute top-[20%] right-[25%] w-40 h-40 rounded-full bg-accent bg-opacity-10 blur-3xl animate-spin-slow opacity-30" style={{ animationDuration: "25s" }}></div>
    </div>
  );
};

export default FloatingShapes;
