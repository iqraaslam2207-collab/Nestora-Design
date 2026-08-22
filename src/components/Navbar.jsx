import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-neutral-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
        
        {/* Name */}
        <h1 className="text-2xl font-semibold tracking-[0.2em] uppercase text-amber-500">
          Nestora
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm tracking-wide">
          <li><a href="#home" className="hover:text-amber-400 transition">Home</a></li>
          <li><a href="#collections" className="hover:text-amber-400 transition">Collections</a></li>
          <li><a href="#about" className="hover:text-amber-400 transition">About</a></li>
          <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 border-t border-neutral-800 text-sm">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#collections" onClick={() => setIsOpen(false)}>Collections</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar