'use client'

// Import dependencies
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import ServicesSection from './ServicesSection'
import Navbar from './Navbar'
import Hero from './Hero'
import { useState } from 'react'
import Image from 'next/image'
import { Send } from 'lucide-react';



// Define the projects array for the Projects section
export const projects = [
  {
    id: 1,
    src: "/mtn1.webp",
    alt: "Project 1",
    text: "This is a description for project 1.",
    link: "https://www.google.com"
  },
  {
    id: 2,
    src: "/mtn2.webp",
    alt: "Project 2",
    text: "This is a description for project 2.",
    link: "https://www.google.com"
  },
  {
    id: 3,
    src: "/mtn3.webp",
    alt: "Project 3",
    text: "This is a description for project 3."
  },
  {
    id: 4,
    src: "/mtn4.webp",
    alt: "Project 4",
    text: "This is a description for project 4."
  },
  {
    id: 5,
    src: "/mtn5.webp",
    alt: "Project 5",
    text: "This is a description for project 5."
  },
  {
    id: 6,
    src: "/mtn6.webp",
    alt: "Project 6",
    text: "This is a description for project 6."
  }
]

// Main Component
export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  let lastScrollY = 0

  // Monitor scroll behavior to trigger Navbar animation
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest
    setIsScrolled(currentScrollY > 20)
    lastScrollY = currentScrollY
  })

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar isScrolled={isScrolled} />

      {/* Main content */}
      <main>
        {/* Hero section */}
        <Hero />

        {/* Services Section */}
        <ServicesSection />

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Featured Projects
            </motion.h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.a 
                  href={project.link || "#"} // Make the whole project clickable, fallback to "#" if no link
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }} // Hover effect
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <motion.div
                    className="relative w-full h-48 overflow-hidden"
                    whileHover={{ scale: 1.3, y: -5 }} // Parallax zoom effect
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.src}    // Dynamic image source
                      alt={project.alt}    // Dynamic alt text
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.text}</h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Get in Touch
            </motion.h2>
            <div className="max-w-2xl mx-auto">
              <form>
                <div className="mb-6">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  ></motion.textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 DesignPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
