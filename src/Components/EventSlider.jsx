"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/Slider1.jpg",
  "/Slider2.jpg",
  "/Slider3.jpg",
  "/Slider4.jpg",
  "/Slider5.jpg",
  "/Slider6.jpg",
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
   <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#85193C] via-[#DE3C3C] to-[#85193C] text-transparent bg-clip-text">
  My Event Highlights
  </h2>

    {/* 🖼️ Slider */}
    <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="relative w-full h-[280px] sm:h-[400px] bg-black">
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
            className="absolute w-full h-full object-cover"
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
