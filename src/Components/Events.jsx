import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 1, title: '', src: '/Events1.mp4' },
  { id: 2, title: '', src: 'Events2.mp4' },
  { id: 3, title: '', src: 'Events3.mp4' },
  { id: 4, title: '', src: '/Events4.mp4' },
  { id: 5, title: '', src: '/Events5.mp4' },
  { id: 6, title: '', src: '/Events6.mp4' },
];

// Hero heading animation
const heroVariants = {
  offscreen: { opacity: 0, scale: 0.8, rotate: -5 },
  onscreen: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

// Staggered video cards animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Events = () => {
  return (
    <div className="bg-[#ffffff] text-white min-h-screen">

      {/* Hero Section with Enhanced Animation */}
      <motion.section
        className="bg-[#430e16] text-white py-24 px-6 rounded-b-[80px] shadow-xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.4 }}
        variants={heroVariants}
      >
        <div className="max-w-5xl mx-auto text-center mt-10">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-red-300 to-pink-400 bg-clip-text text-transparent">
              Event Highlights
            </span>
          </motion.h1>
        </div>
      </motion.section>

      {/* Videos Section with Staggered Animation */}
      <motion.section
        className="bg-white py-20 mt-[-2px] text-black"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="rounded-xl overflow-hidden shadow-lg bg-gray-800"
                variants={cardVariants}
              >
                <div className="bg-black overflow-hidden h-[250px] md:h-[300px] lg:h-[350px]">
                  <video
                    controls
                    className="w-full h-full object-contain bg-black"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Events;
