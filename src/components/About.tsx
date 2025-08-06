import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer from Durgapur, West Bengal, currently pursuing my B.Tech in Computer Science and Engineering at NSHM Knowledge Campus. With a strong foundation in modern web technologies, I specialize in creating scalable, user-centric applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in software development has been driven by curiosity and a desire to solve real-world problems through technology. I enjoy working with cutting-edge frameworks and libraries, always staying updated with the latest industry trends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">Durgapur, West Bengal</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">+91-7908439735</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">sahilghosh90870@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">B.Tech CSE (2022-2026)</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-600 dark:text-gray-300">NSHM Knowledge Campus, Durgapur</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Aug 2022 - Jul 2026</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Higher Secondary (Science)</h4>
                  <p className="text-gray-600 dark:text-gray-300">Bidhan Chandra Institution - 85.2%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2022</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Secondary Examination</h4>
                  <p className="text-gray-600 dark:text-gray-300">Durgapur MAMC Township Modern High School - 75.5%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2020</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-2" />
                Languages
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">English</span>
                  <span className="text-sm text-blue-600 font-medium">Professional Working</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Bengali</span>
                  <span className="text-sm text-green-600 font-medium">Native/Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Hindi</span>
                  <span className="text-sm text-purple-600 font-medium">Fluent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;