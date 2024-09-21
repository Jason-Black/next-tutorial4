"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Palette, Megaphone, Code, ArrowRight, LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const services: Service[] = [
  { 
    title: 'Web Design', 
    description: 'Crafting stunning, user-centric websites that captivate and convert.',
    icon: Palette,
    color: 'bg-purple-500',
  },
  { 
    title: 'Digital Marketing', 
    description: 'Amplifying your online presence with data-driven strategies.',
    icon: Megaphone,
    color: 'bg-blue-500',
  },
  { 
    title: 'Web Development', 
    description: 'Building robust, scalable web solutions tailored to your needs.',
    icon: Code,
    color: 'bg-green-500',
  },
];

// Animation variants for service cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export default function ServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: "linear-gradient(45deg, #ff7e5f, #feb47b, #6a82fb, #fc5c7d, #4facfe)",
          backgroundSize: "400% 400%",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-4xl font-bold mb-16 text-center text-white"
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-lg relative overflow-hidden group"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
            >
              <motion.div
                className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              />
              <motion.div
                className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}
                variants={iconVariants}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-semibold mb-4 text-white"
                variants={textVariants}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-6"
                variants={textVariants}
              >
                {service.description}
              </motion.p>
              <motion.a
                href="#"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
