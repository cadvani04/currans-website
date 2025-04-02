'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Curran Advani
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-500 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-500 transition-colors">
            Experience
          </Link>
          <Link href="#about" className="hover:text-gray-500 transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-gray-500 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-gray-500 transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="hover:text-gray-500 transition-colors">
              Home
            </Link>
            <Link href="#experience" className="hover:text-gray-500 transition-colors">
              Experience
            </Link>
            <Link href="#about" className="hover:text-gray-500 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-gray-500 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-gray-500 transition-colors">
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}