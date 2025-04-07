import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 70 }
      
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
     
      { name: 'Jenkins', level: 60 },
      { name: 'AWS', level: 65 },
      { name: 'RESTful APIs', level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors"
            >
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;