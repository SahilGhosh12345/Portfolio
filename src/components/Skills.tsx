import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Wrench, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C', level: 70 },
        { name: 'SQL', level: 80 },
      ]
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Three.js', level: 75 },
        { name: 'GSAP', level: 70 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Framer Motion', level: 80 },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Socket.IO', level: 85 },
        { name: 'REST API', level: 90 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Firebase', level: 80 },
        { name: 'Postman', level: 85 },
        { name: 'WebSocket', level: 85 },
        { name: 'TensorFlow.js', level: 70 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Team Collaboration', level: 95 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Communication', level: 88 },
        { name: 'Adaptability', level: 92 },
        { name: 'Leadership', level: 80 },
        { name: 'Time Management', level: 85 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${categoryIndex * 0.1}s`
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  100xDevs Bootcamp
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Full-Stack Web Development by Harkirat Singh
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">2024</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-green-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Python Bootcamp
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                100 Days of Code by Dr. Angela Yu
              </p>
              <p className="text-green-600 dark:text-green-400 font-medium">2023</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-purple-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Effective Writing
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                NPTEL Online Certification
              </p>
              <p className="text-purple-600 dark:text-purple-400 font-medium">2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;