import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Palette } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import ThreeBackground from './components/ThreeBackground';

// Theme types
type Theme = 'light' | 'dark' | 'cosmic';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [loading, setLoading] = useState(true);
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }

    // Simulate loading with realistic timing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply theme classes with smooth transition
    const root = document.documentElement;
    root.classList.remove('light', 'dark', 'cosmic');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const colors = {
      light: '#ffffff',
      dark: '#0f172a',
      cosmic: '#1a0b2e'
    };
    
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', colors[theme]);
    }
  }, [theme]);

  const themes = [
    { id: 'light', name: 'Light', icon: Sun, color: 'bg-white' },
    { id: 'dark', name: 'Dark', icon: Moon, color: 'bg-slate-900' },
    { id: 'cosmic', name: 'Cosmic', icon: Palette, color: 'bg-gradient-to-br from-purple-900 to-indigo-900' }
  ];

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setShowThemeSelector(false);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen transition-all duration-500 ease-out">
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 cosmic:from-purple-950 cosmic:via-indigo-950 cosmic:to-slate-900 text-slate-900 dark:text-slate-100 cosmic:text-purple-100">
        
        {/* Enhanced Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <ParticleBackground />
          <ThreeBackground />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 cosmic:from-purple-400/20 cosmic:to-pink-400/20"></div>
          
          {/* Animated Blobs */}
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Enhanced Theme Toggle */}
        <div className="fixed top-20 right-6 z-40">
          <div className="relative">
            <motion.button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 cosmic:bg-purple-900/80 backdrop-blur-xl shadow-xl hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 cosmic:border-purple-700/50 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' && (
                  <motion.div
                    key="light"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-6 h-6 text-amber-500" />
                  </motion.div>
                )}
                {theme === 'dark' && (
                  <motion.div
                    key="dark"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                )}
                {theme === 'cosmic' && (
                  <motion.div
                    key="cosmic"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Palette className="w-6 h-6 text-purple-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <AnimatePresence>
              {showThemeSelector && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 p-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 cosmic:bg-purple-900/90 backdrop-blur-xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 cosmic:border-purple-700/50"
                >
                  {themes.map((themeOption) => {
                    const Icon = themeOption.icon;
                    return (
                      <motion.button
                        key={themeOption.id}
                        onClick={() => toggleTheme(themeOption.id as Theme)}
                        className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-700 cosmic:hover:bg-purple-800 ${
                          theme === themeOption.id ? 'bg-slate-100 dark:bg-slate-700 cosmic:bg-purple-800' : ''
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`w-4 h-4 rounded-full ${themeOption.color}`}></div>
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{themeOption.name}</span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Main Content */}
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />

        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: theme === 'light' ? '#ffffff' : theme === 'dark' ? '#1e293b' : '#4c1d95',
              color: theme === 'light' ? '#0f172a' : '#f1f5f9',
              border: `1px solid ${theme === 'light' ? '#e2e8f0' : theme === 'dark' ? '#475569' : '#7c3aed'}`,
              borderRadius: '12px',
              backdropFilter: 'blur(12px)',
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;