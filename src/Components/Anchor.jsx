import React from "react";
import { motion } from "framer-motion";

const Anchor = () => {
  return (
    <section className="w-full bg-[#fffdf8] py-16 px-4 md:px-8">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-[#430e16] mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Deepika Chawla's Anchoring Journey
      </motion.h2>

      {/* Content container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <motion.img
          src="/deepika-anchor.jpg" // Replace with actual path
          alt="Deepika Chawla Anchoring"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Right: Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-800 text-lg leading-relaxed">
            Deepika Chawla is a seasoned anchor with over a decade of experience hosting corporate events, product launches, celebrity nights, and government functions. Her magnetic stage presence and quick-witted communication style have made her one of the most sought-after anchors in the industry.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Known for her elegance, charisma, and ability to engage audiences of all sizes, Deepika has hosted over <span className="font-semibold text-[#430e16]">500+ events</span> both in India and abroad. From high-energy crowd engagement to dignified conference hosting, she adapts seamlessly to any event type.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Whether it's a grand stage or a private corporate affair, she brings a touch of class, professionalism, and unforgettable energy to every event she anchors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Anchor;
