import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://i.im.ge/2025/04/26/vI2G54.personalpic.jpeg"
              
              alt="Professional headshot"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hello! I'm Yesahk Ergano</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate Java Full Stack Developer with a strong foundation in Computer Science
              from Kennesaw State University. My journey in technology started with a
              curiosity about how things work behind the scenes, which led me to specialize
              in backend development.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Education</h4>
              <div className="mb-4">
                <p className="font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-gray-600">Kennesaw State University</p>
                
              </div>
              
              <h4 className="font-semibold mb-4">Experience</h4>
              <div>
                <p className="font-medium">Backend Developer Intern</p>
                <p className="text-gray-600">Sumo logic</p>
                <p className="text-gray-500">Summer 2023</p>
              </div>
              <div>
                <p className="font-medium">Full Stack Developer</p>
                <p className="text-gray-600">RadicalX</p>
                <p className="text-gray-500">Summer 2024</p>
              </div>
              <div>
                <p className="font-medium">Incident Support</p>
                <p className="text-gray-600">DataBrick</p>
                <p className="text-gray-500">Spring 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;