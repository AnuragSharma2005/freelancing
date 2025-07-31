import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Anchor = () => {
  return (
  <section className="w-full bg-[#fffdf8] py-16 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-12 mt-14 max-w-6xl mx-auto">
  {/* Left Content */}
  <motion.div
    variants={fadeIn}
    initial="hidden"
    animate="show"
    className="w-full md:w-1/2 space-y-6 text-center md:text-left"
  >
    <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
      Anc<span className="text-[#eb4b6b]">hor</span>
    </h2>
    <h3 className="text-xl md:text-3xl font-semibold text-black">
      Deepika Chawla
    </h3>
    <p className="text-base md:text-lg text-gray-700">
      {/* Optional description here */}
    </p>
  </motion.div>

  {/* Right Image Box with Curved Edges */}
  <motion.div
    variants={fadeIn}
    initial="hidden"
    animate="show"
    className="w-full md:w-1/2 flex justify-center"
  >
    <div className="w-[90%] md:w-[400px] h-[460px] bg-[#430e16] rounded-[120px_80px_0px_120px] overflow-hidden shadow-xl">
      <img
        src="/kartik-book.png"
        alt="RJ Kartik"
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
</section>

  );
};

export default Anchor;
