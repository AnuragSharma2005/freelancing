"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/Slider1.jpg",
  "/Slider2.jpg",
  "/Slider3.jpg",
  "/Slider4.jpg",
  "/Slider5.jpg",
  "/Slider7.jpg",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const EventSlider = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent([
      (current + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  const goToSlide = (index) => {
    const newDirection = index > current ? 1 : -1;
    setCurrent([index, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 2000);
    return () => clearInterval(interval);
  }, [current]);

 return (
  <div className="w-full max-w-4xl mx-auto mt-20 mb-16 px-4 sm:px-0">
    {/* 🔠 Heading */}
 <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mx-auto max-w-fit mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#430e16] via-[#80242a] to-[#430e16] text-center drop-shadow-lg">
              🎓 My Events Highlights
            </h1>
            <motion.div
              className="h-1.5 w-32 mx-auto mt-4 bg-gradient-to-r from-[#80242a] via-[#430e16] to-[#80242a] rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            A glimpse into memorable events, impactful performances, and moments that truly made a mark on every stage.
          </motion.p>

        </motion.div>

    {/* 🖼️ Slider */}
   <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] bg-white">
  <div className="relative w-full h-[280px] sm:h-[400px]">
    <AnimatePresence initial={false} custom={direction}>
      <motion.img
        key={current}
        src={images[current]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.4 },
        }}
        className="absolute w-full h-full object-cover pointer-events-none"
      />
    </AnimatePresence>
  </div>


      {/* ⚫ Dot Indicators */}
      <div className="flex justify-center gap-3 mt-4 pb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-black" : "bg-gray-300"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  </div>
);
}

export default EventSlider;
