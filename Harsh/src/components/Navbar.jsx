import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Harsh Srivastav</h1>
          <div className="flex items-center">
            <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <button onClick={toggleMenu} className="ml-4 text-white md:hidden">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 py-2 text-gray-800 dark:text-gray-200">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
