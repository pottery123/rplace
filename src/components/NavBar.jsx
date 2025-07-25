import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-coral">Rangkham's Place Youth Café</h1>

        {/* Hamburger button */}
        <button
          className="md:hidden text-charcoal focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={isOpen
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-charcoal font-medium">
          <a className='text-coral' href="#home">Home</a>
          <a className='text-coral'  href="#overview">Program</a>
          <a  className='text-coral' href="#video">Video</a>
          <a className='text-coral' href="#gallery">Gallery</a>
          <a className='text-coral' href="#contact">Contact</a>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-charcoal font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#overview" onClick={() => setIsOpen(false)}>Program</a></li>
            <li><a href="#video" onClick={() => setIsOpen(false)}>Video</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
