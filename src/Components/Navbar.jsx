import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const handleNavLinkClick = (path) => {
    if (location.pathname !== path) {
      window.location.assign(path); // go to new page and reload
    } else {
      window.location.reload(); // same page reload
    }
    setNavOpen(false); // close mobile menu
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Workshop', path: '/workshop' },
    { label: 'Recommendations', path: '/recommendations' },
    { label: 'Brands', path: '/brands' },
    { label: 'Events', path: '/events' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#430e16] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 md:px-8 flex justify-between items-center">
        {/* Logo */}
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleNavLinkClick('/')}
        >
          <img src="/image2.png" alt="Logo" className="w-14 h-14 object-contain" />
          <h1
            className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            DEEPIKA CHAWLA
          </h1>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium text-xl items-center justify-center">
          {navLinks.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(item.path);
                }}
                className={`hover:text-yellow-400 transition duration-300 ${location.pathname === item.path ? 'text-yellow-400' : ''
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('/contact');
              }}
            >
<button className="cursor-pointer bg-yellow-400 text-black font-bold py-1 px-4 rounded-full hover:bg-white transition-all duration-300">
  Contact
</button>

            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${navOpen ? 'max-h-[1000px]' : 'max-h-0'
          }`}
      >
        <div
          className={`flex flex-col items-center transition-all duration-500 ease-in-out ${navOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
          <ul className="w-full px-6 pt-4 pb-6 space-y-5 text-2xl font-medium text-white text-center">
            {navLinks.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.path);
                  }}
                  className="block hover:text-yellow-400 transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick('/contact');
                }}
              >
                <button className="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-white transition">
                  Contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
