import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-cyan-600 py-4  ">
      <div className=" mx-auto flex items-center justify-between px-6 md:px-12">
        <h1 className="text-3xl font-extrabold text-white">Shiban Meledath</h1>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none z-50">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`fixed top-0 left-0 w-full h-full bg-cyan-600 p-8 flex flex-col items-center justify-center transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:transform-none md:flex md:flex-row md:items-center md:space-x-6`}>
          <a href="#home" className="text-2xl md:text-base text-white hover:text-yellow-300 transition duration-300">Home</a>
          <a href="#about" className="text-2xl md:text-base text-white hover:text-yellow-300 transition duration-300">About</a>
          <a href="#portfolio" className="text-2xl md:text-base text-white hover:text-yellow-300 transition duration-300">Portfolio</a>
          <a href="#contact" className="text-2xl md:text-base text-white hover:text-yellow-300 transition duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
