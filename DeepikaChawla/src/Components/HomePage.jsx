import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerGroup = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden relative">
      {/* Hero Section with Full Image - Slow Fade In */}
      <motion.section
        className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <img
          src="/image1.jpeg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
      </motion.section>

      {/* Overlapping Cards with Scroll Animation */}
      <motion.div
        className="relative -mt-20 md:-mt-28 z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-14"
        variants={staggerGroup}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Card 1 */}
        <motion.a
          href="#"
          variants={fadeInUp}
          className="w-full md:w-[480px] h-[420px] rounded-xl bg-[#430e16] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <div className="h-[70%]">
            <img
              src="/anchor.png"
              alt="Card"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="h-[30%] flex items-center justify-center text-white font-bold text-lg">
            Corporate Trainer
          </div>
        </motion.a>

        {/* Card 2 */}
        <motion.a
          href="#"
          variants={fadeInUp}
          className="w-full md:w-[480px] h-[420px] rounded-xl bg-[#430e16] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <div className="h-[70%]">
            <img
              src="/trainer.jpg"
              alt="Card"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="h-[30%] flex items-center justify-center text-white font-bold text-lg">
            Anchor
          </div>
        </motion.a>
      </motion.div>

      {/* Next Section */}
      <section className="w-full bg-white text-black py-2 px-6 mt-8">
        <div className="max-w-5xl mx-auto text-center">{/* Future content */}</div>
      </section>
    </div>
  );
};

export default HomePage;
