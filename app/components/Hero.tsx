'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-white text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Elevate Your Brand with Modern Design
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Transforming ideas into visually stunning realities
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 mt-12 md:mt-0"
        >
          <div className="relative w-full h-64 md:h-96">
            <motion.video
              src="/video1.mp4"  // Path to your video file
              autoPlay
              loop
              muted
              playsInline
              animate={{
                y: [0, -20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                ease: 'easeOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="w-full h-full object-cover rounded-lg shadow-2xl"  // Styling to match the container
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
