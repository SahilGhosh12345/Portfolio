import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Developed multiple real-time web applications using MERN stack",
        "Implemented WebSocket-based communication systems for chat applications",
        "Created responsive UI components with React and Tailwind CSS",
        "Built RESTful APIs with Node.js and Express.js",
        "Integrated third-party services and APIs for enhanced functionality"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind CSS"]
    },
    {
      title: "Web Development Intern",
      company: "100xDevs Bootcamp",
      location: "Online",
      period: "2024",
      description: [
        "Completed comprehensive full-stack development training",
        "Built multiple projects including chat applications and web platforms",
        "Learned advanced React patterns and state management",
        "Gained expertise in backend development with Node.js and databases",
        "Collaborated with peers on group projects and code reviews"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Computer Science Student",
      company: "NSHM Knowledge Campus",
      location: "Durgapur, West Bengal",
      period: "2022 - 2026",
      description: [
        "Pursuing B.Tech in Computer Science and Engineering",
        "Maintaining strong academic performance with focus on software development",
        "Participating in coding competitions and technical events",
        "Leading student projects and technical workshops",
        "Contributing to open-source projects and community initiatives"
      ],
      technologies: ["Java", "Python", "C", "Data Structures", "Algorithms"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
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
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {experience.company}
                      </h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mt-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="mr-4">{experience.location}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Technical Excellence
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Strong foundation in modern web technologies and best practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Problem Solving
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Analytical thinking and creative solutions to complex challenges
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Team Collaboration
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Effective communication and collaboration in diverse teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;