"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
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
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[45vh] md:h-screen -mb-12 md:-mb-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img
          src="/Front.png"
          alt="Background"
         className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 pointer-events-none"
        />
      </motion.section>

      {/* Card Section */}
      {/* <motion.div
        className="relative -mt-12 md:-mt-28 z-10 w-full max-w-7xl mx-auto px-2 flex flex-row justify-center items-center gap-4 md:gap-14"
        variants={staggerGroup}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      > */}
        {/* Card 1 - Corporate Trainer */}
        {/* <motion.a
          href="#"
          variants={fadeInUp}
          className="bg-[#430e16] p-2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 w-[40%] h-[260px] sm:h-[320px] md:h-[460px]"
        >
            <Link to="/anchor" className="block w-full h-full">
            <div className="h-[70%] w-full overflow-hidden">
              <img
                src="/Corporate.jpg"
                alt="Corporate Trainer"
                className="w-full h-full object-cover object-[center_50%]"
              />
            </div>
            <div className="h-[30%] flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
              Corporate Trainer
            </div>
          </Link>
        </motion.a> */}

        {/* Card 2 - Anchor */}
        {/* <motion.a
          href="#"
          variants={fadeInUp}
          className="bg-[#430e16] p-2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 w-[40%] h-[260px] sm:h-[320px] md:h-[460px]"
        >
          <Link className="bg-[#430e16] rounded-xl overflow-hidden w-full h-full">
            <div className="h-[70%] w-full overflow-hidden">
              <img
                src="/Anchor.jpg"
                alt="Anchor"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="h-[30%] flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
              Anchor
            </div>
          </Link>
        </motion.a> */}
      {/* </motion.div> */}

      {/* About / Future Content */}
     <section className="w-full bg-white text-black py-8 md:py-2 px-6 mt-0 md:mt-24">
        <div className="max-w-5xl mx-auto text-center">{/* Future content */}
          
        </div>
        
      </section>
    </div>
  );
};

export default HomePage;
