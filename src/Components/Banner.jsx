import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Banner = () => {
  return (
 <section className="w-full px-4 md:px-0 mt-20">
  <div className="relative w-full max-w-6xl mx-auto rounded-[60px] overflow-visible shadow-xl h-[200px] md:h-[300px] group">
    
    {/* Background Image (sharp, no blur) */}
    <img
      src="/Anchor.jpg"
      alt="Corporate Workshops"
      className="w-full h-full object-cover rounded-[60px]"
    />

    {/* Overlay (transparent only for darkening effect) */}
    <div className="absolute inset-0 bg-black/20 rounded-[60px] flex items-center justify-center px-4">
      <h2 className="text-white text-sm sm:text-xl md:text-4xl font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis bg-black/50 px-6 py-2 rounded-full shadow-lg">
        From Corporate to Cultural – Anchoring It All
      </h2>
    </div>

    {/* Buttons */}
    <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 flex gap-4 z-10">
      <Link to="/contact">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black cursor-pointer font-semibold px-6 py-2 rounded-full shadow-lg">
          CONTACT US
        </button>
      </Link>

      <Link to="/events">
        <button className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full cursor-pointer shadow-lg">
          KNOW MORE
        </button>
      </Link>
    </div>
  </div>

  {/* Spacer */}
  <div className="mt-16 md:mt-20"></div>
</section>

  );
};

export default Banner;
