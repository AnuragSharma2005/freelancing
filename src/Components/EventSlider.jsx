"use client"

import { useEffect, useState } from "react"

const images = ["/Slider1.jpg", "/Slider2.jpg", "/Slider3.jpg", "/Slider4.jpg", "/Slider5.jpg", "/Slider7.jpg"]

const EventSlider = () => {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const paginate = (newDirection) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev + newDirection + images.length) % images.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === current) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 2000) // Increased interval to 4 seconds for better viewing
    return () => clearInterval(interval)
  }, [current, isAnimating])

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 mb-16 px-4 sm:px-0">
      {/* 🔠 Heading */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="relative mx-auto max-w-fit mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#430e16] via-[#80242a] to-[#430e16] text-center drop-shadow-lg">
            🎓 My Events Highlights
          </h1>
          <div className="h-1.5 w-32 mx-auto mt-4 bg-gradient-to-r from-[#80242a] via-[#430e16] to-[#80242a] rounded-full shadow-lg animate-expand" />
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delayed">
          A glimpse into memorable events, impactful performances, and moments that truly made a mark on every stage.
        </p>
      </div>

      {/* 🖼️ Slider */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] bg-white">
        <div className="relative w-full h-[280px] sm:h-[400px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Event slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-all duration-500 ease-in-out ${
                index === current
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < current
                    ? "opacity-0 -translate-x-full scale-95"
                    : "opacity-0 translate-x-full scale-95"
              }`}
              style={{
                zIndex: index === current ? 10 : 1,
              }}
            />
          ))}

          <button
            onClick={() => paginate(-1)}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-30"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-30"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ⚫ Dot Indicators */}
        <div className="flex justify-center gap-3 mt-4 pb-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed ${
                current === index ? "bg-[#430e16] shadow-lg scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 0.6s ease-out 0.8s forwards;
        }
        
        .animate-expand {
          animation: expand 0.8s ease-out 0.6s forwards;
          width: 0;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }
        
        .group:hover .group-hover\\:opacity-100 {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default EventSlider
