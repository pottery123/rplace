import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo / Title */}
        <div className="text-xl font-bold">
          <a href="#home">Youth Café</a>
        </div>

        {/* Scroll Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#information" className="hover:text-pink-200">Program</a></li>
          <li><a href="#video" className="hover:text-pink-200">Video</a></li>
          <li><a href="#gallery" className="hover:text-pink-200">Gallery</a></li>
          <li><a href="#testimonials" className="hover:text-pink-200">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-pink-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
