import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

// Validation schema
const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

type FormData = yup.InferType<typeof schema>;

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const watchedFields = watch();

  const onSubmit = async (data: FormData) => {
    try {
      // Use EmailJS service for sending emails directly from the website
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'sahilghosh90870@gmail.com'
      };

      // Simulate email sending with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll show success message
      // In production, you would integrate with EmailJS, Formspree, or similar service
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        icon: '🚀',
        duration: 5000,
      });
      
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        icon: '❌',
        duration: 4000,
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sahilghosh90870@gmail.com',
      link: 'mailto:sahilghosh90870@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-7908439735',
      link: 'tel:+917908439735',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Durgapur, West Bengal',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/sahilghosh123',
      color: 'hover:text-slate-900 dark:hover:text-white cosmic:hover:text-purple-300',
      bg: 'hover:bg-slate-100 dark:hover:bg-slate-700 cosmic:hover:bg-purple-800'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sahilghosh12345',
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 cosmic:hover:bg-blue-900/30'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:sahilghosh90870@gmail.com',
      color: 'hover:text-red-600',
      bg: 'hover:bg-red-50 dark:hover:bg-red-900/20 cosmic:hover:bg-red-900/30'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/50 dark:from-slate-800/50 dark:to-slate-900/50 cosmic:from-purple-900/20 cosmic:to-indigo-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-300 cosmic:text-purple-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 cosmic:text-purple-100 mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-300 cosmic:text-purple-200 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something extraordinary together.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 group"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 cosmic:text-purple-100">
                          {info.title}
                        </h4>
                        <motion.a
                          href={info.link}
                          className="text-slate-600 dark:text-slate-300 cosmic:text-purple-200 hover:text-blue-600 dark:hover:text-blue-400 cosmic:hover:text-purple-300 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {info.value}
                        </motion.a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-700 cosmic:border-purple-700">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 cosmic:text-purple-100 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 glass-card rounded-2xl transition-all duration-300 text-slate-600 dark:text-slate-300 cosmic:text-purple-200 ${social.color} ${social.bg}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div className="glass-card p-8 rounded-3xl" variants={itemVariants}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 cosmic:text-purple-200 mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-slate-800/50 cosmic:bg-purple-900/30 backdrop-blur-sm focus:outline-none focus:ring-4 ${
                        errors.name
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                          : watchedFields.name
                          ? 'border-green-300 focus:border-green-500 focus:ring-green-500/20'
                          : 'border-slate-200 dark:border-slate-600 cosmic:border-purple-600 focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      placeholder="Your Name"
                    />
                    {watchedFields.name && !errors.name && (
                      <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                    )}
                    {errors.name && (
                      <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                    )}
                  </div>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 cosmic:text-purple-200 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={`w-full px-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-slate-800/50 cosmic:bg-purple-900/30 backdrop-blur-sm focus:outline-none focus:ring-4 ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                          : watchedFields.email && !errors.email
                          ? 'border-green-300 focus:border-green-500 focus:ring-green-500/20'
                          : 'border-slate-200 dark:border-slate-600 cosmic:border-purple-600 focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {watchedFields.email && !errors.email && (
                      <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                    )}
                    {errors.email && (
                      <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                    )}
                  </div>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 cosmic:text-purple-200 mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-slate-800/50 cosmic:bg-purple-900/30 backdrop-blur-sm focus:outline-none focus:ring-4 ${
                      errors.subject
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                        : watchedFields.subject && !errors.subject
                        ? 'border-green-300 focus:border-green-500 focus:ring-green-500/20'
                        : 'border-slate-200 dark:border-slate-600 cosmic:border-purple-600 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                    placeholder="What's this about?"
                  />
                  {watchedFields.subject && !errors.subject && (
                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                  )}
                  {errors.subject && (
                    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
                  )}
                </div>
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.subject.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 cosmic:text-purple-200 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    className={`w-full px-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-slate-800/50 cosmic:bg-purple-900/30 backdrop-blur-sm focus:outline-none focus:ring-4 resize-none ${
                      errors.message
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                        : watchedFields.message && !errors.message
                        ? 'border-green-300 focus:border-green-500 focus:ring-green-500/20'
                        : 'border-slate-200 dark:border-slate-600 cosmic:border-purple-600 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                  {watchedFields.message && !errors.message && (
                    <CheckCircle className="absolute right-3 top-4 w-5 h-5 text-green-500" />
                  )}
                  {errors.message && (
                    <AlertCircle className="absolute right-3 top-4 w-5 h-5 text-red-500" />
                  )}
                </div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;