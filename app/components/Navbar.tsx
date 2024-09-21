// Navbar.tsx

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isScrolled ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}
        >
          DesignPro
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {['Home', 'Services', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
              }`}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-gray-900' : 'text-white'}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ type: 'tween' }}
        className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 p-4"
      >
        <div className="flex flex-col space-y-4">
          {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}
