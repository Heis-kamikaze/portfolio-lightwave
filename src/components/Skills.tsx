
import React from "react";
import { useIntersectionObserver } from "../utils/animations";

type Skill = {
  category: string;
  items: string[];
};

const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["HTML/CSS", "JavaScript (ES6+)", "TypeScript", "React", "React Native", "Next.js", "Tailwind CSS", "Framer Motion", "GSap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Axios", "Basic Python", "REST APIs", "SQL", "NoSQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Render", "Firebase", "Postman"],
  },
  {
    category: "Design & Others",
    items: ["Figma", "Responsive Design", "Performance Optimization", "SEO", "Accessibility", "Testing", "Logical Thinking", "Best Code Practices", "Code Obfuscation"],
  },
];

const Skills: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  
  return (
    <section 
      id="skills" 
      className="section bg-transparent"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`staggered-fade-in ${isVisible ? 'animate' : ''}`}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-accent/10 text-white rounded-full">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Technical Expertise
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              className={`glass rounded-lg p-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{skill.category}</h3>
              
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li 
                    key={item} 
                    className="flex items-center text-white"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-2 text-primary"
                    >
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-semibold mb-4">My Development Philosophy</h3>
          <p className="text-white">
            I believe in writing clean, maintainable code with a focus on performance and user experience. 
            Every project begins with a deep understanding of user needs, followed by thoughtful planning 
            and implementation using the most appropriate technologies.
          </p>
          <br />
          <p className="text-white">Besides... coding is fun...</p>
          <br /><br />
          <p className="text-white">I like having fun😂❤</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
