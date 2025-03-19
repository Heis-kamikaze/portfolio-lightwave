import React from "react";
import { useIntersectionObserver } from "../utils/animations";
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
};
const projects: Project[] = [{
  id: 1,
  title: "My Thrift",
  description: "A mobile web application designed to connect vendors and buyers of thrift items and fashion accessories of different qualities. It also has a specially customized payment gateway for easy transactions. (Live Group Project)",
  image: "/apple-splash-2160-1620.jpg",
  tech: ["React", "Firebase", "Firestore", "Tailwind CSS", "PayStack", "Redux", "Framer Motion", "SendGrid"],
  demoUrl: "https://shopmythrift.store",
  githubUrl: "#"
}, {
  id: 2,
  title: "Task Management App",
  description: "A productivity app to help you manage your tasks and to-do lists. It features a clean and minimalistic design with a focus on simplicity and ease of use.",
  image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  demoUrl: "#",
  githubUrl: "#"
}, {
  id: 3,
  title: "Customer Analytics Dashboard",
  description: "An interactive dashboard for visualizing customer data and sales information, as well as user engagement metrics.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
  tech: ["React", "Chart.js", "Tailwind CSS", "MongoDB", "Express", "Node.js", "Redis", "Axios"],
  demoUrl: "#",
  githubUrl: "#"
}];
const Projects: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  return <section id="projects" ref={sectionRef as React.RefObject<HTMLElement>} className="section py-0 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className={`staggered-fade-in ${isVisible ? 'animate' : ''}`}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium bg-accent/10 text-white rounded-full">
            My Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Work
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={project.id} className={`bg-slate-300 rounded-lg overflow-hidden hover-lift shadow-sm border border-border ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: `${index * 0.2}s`,
          animationFillMode: 'forwards'
        }}>
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => <span key={tech} className="px-2 py-1 text-xs font-medium bg-secondary rounded-md">
                      {tech}
                    </span>)}
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <h3 className="inline-flex items-center text-sm font-medium text-primary light-rays"
                  onClick={() =>
                    window.open(
                      project.demoUrl,
                      "_blank"
                    )
                  }>
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </h3>
                  
                  <a href={project.githubUrl} className="inline-flex items-center text-sm font-medium text-primary light-rays">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;