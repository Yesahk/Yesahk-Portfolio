import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Movie Website',
    description: 'Personal movie website, different movie type included with description and user review.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80',
    technologies: ['Java', 'SpringBoot','React', 'HTLM', 'CSS', 'Javascript'],
    github: 'https://github.com/Yesahk/MyCineVerse',
    demo: 'https://demo.com'
  },
  {
    title: 'Hospital Management System',
    description: 'A comprehensive hospital management system with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
    technologies: ['Java', 'SpringBoot', 'MySQL', 'React'],
    github: 'https://github.com/codewithbala/CRMSpringReactApril2024',
    demo: 'https://demo.com'
  },
  {
    title: 'Event Management',
    description: 'User friendly website to plan, organize, and manage events online.',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL','React'],
    github: 'https://github.com/Yesahk/Event-Management',
    demo: 'http://localhost:5175/'
    
  }
];

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Portfolio</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={20} className="mr-1" />
                  GitHub
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;