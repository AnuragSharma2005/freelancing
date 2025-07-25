import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#430e16] shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/image2.png" alt="Logo" className="w-16 h-16 object-contain" />
          <h1
            className="text-2xl font-bold uppercase tracking-wide text-white"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            DEEPIKA CHAWLA
          </h1>
        </div>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium text-xl">
          <li className="cursor-pointer hover:text-yellow-400">Home</li>
          <li className="cursor-pointer hover:text-yellow-400">About</li>
          <li className="cursor-pointer hover:text-yellow-400">Workshop</li>
          <li className="cursor-pointer hover:text-yellow-400">Recommendations</li>
          <li className="cursor-pointer hover:text-yellow-400">Brands</li>
          <li className="cursor-pointer hover:text-yellow-400">Events</li>
          <li>
            <button className="bg-yellow-400 text-black font-bold py-1 px-4 rounded-full cursor-pointer hover:bg-white transition">
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={navOpen}
        enter="transition duration-500 ease-out"
        enterFrom="-translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition duration-400 ease-in-out"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-full opacity-0"
      >
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] text-white z-40 shadow-lg rounded-b-xl">
          <ul className="px-6 pb-6 pt-6 space-y-4 text-xl font-semibold">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Workshop</li>
            <li className="hover:text-yellow-400 cursor-pointer">Recommendations</li>
            <li className="hover:text-yellow-400 cursor-pointer">Brands</li>
            <li className="hover:text-yellow-400 cursor-pointer">Events</li>
            <li>
              <button className="mt-2 bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-white transition">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
