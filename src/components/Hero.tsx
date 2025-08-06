import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code,
  Rocket,
} from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Full-Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "Problem Solver",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: -100, y: -50 },
    { Icon: Rocket, delay: 1, x: 100, y: -80 },
    { Icon: Sparkles, delay: 2, x: -80, y: 60 },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 dark:opacity-20 cosmic:opacity-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            x: [x, x + 20, x],
            y: [y, y - 20, y],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
          style={{ left: `${50 + x / 10}%`, top: `${50 + y / 10}%` }}
        >
          <Icon className="w-24 h-24 text-blue-500" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              className="inline-flex items-center px-6 py-3 glass-card rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 cosmic:text-purple-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
              Welcome to my digital space
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <motion.span
                className="block text-slate-900 dark:text-slate-100 cosmic:text-purple-100"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span
                className="block text-gradient-cosmic text-6xl md:text-8xl lg:text-9xl font-black"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                Sahil Ghosh
              </motion.span>
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-600 dark:text-slate-300 cosmic:text-purple-200 mb-8 h-16 flex items-center justify-center"
          >
            <span className="mr-2">I'm a</span>
            <span className="text-gradient min-w-0">{displayText}</span>
            <motion.span
              className="text-blue-500 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 cosmic:text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Innovative full-stack developer passionate about building{" "}
            <span className="text-gradient font-semibold">
              real-time, data-driven
            </span>{" "}
            web applications. I combine technical precision with creative
            execution to deliver{" "}
            <span className="text-gradient font-semibold">
              user-centric solutions
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Let's Connect</span>
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            <motion.button
              className="group px-8 py-4 glass-card text-slate-700 dark:text-slate-200 cosmic:text-purple-100 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Sahil_Ghosh_Resume.pdf";
                link.download = "Sahil_Ghosh_Resume.pdf";
                link.click();
              }}
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              {
                Icon: Github,
                href: "https://github.com/sahilghosh123",
                color:
                  "hover:text-slate-900 dark:hover:text-white cosmic:hover:text-purple-300",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/in/sahilghosh12345",
                color: "hover:text-blue-500",
              },
              {
                Icon: Mail,
                href: "mailto:sahilghosh90870@gmail.com",
                color: "hover:text-red-500",
              },
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 glass-card rounded-2xl text-slate-600 dark:text-slate-300 cosmic:text-purple-200 ${color} transition-all duration-300`}
                whileHover={{ scale: 1.1, y: -4, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cosmic:hover:text-purple-300 transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export default Hero;
