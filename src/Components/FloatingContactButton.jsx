import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const FloatingContactButton = () => {
  const [side, setSide] = useState("right"); 

  const handleTouchEnd = (e) => {
    const touchX = e.changedTouches[0].clientX;
    const screenWidth = window.innerWidth;

    
    if (touchX < screenWidth / 2) {
      setSide("left");
    } else {
      setSide("right");
    }
  };

  return (
    <div
      className={`fixed bottom-6 z-50 flex items-center gap-3 ${
        side === "left" ? "left-6" : "right-6"
      }`}
      onTouchEnd={handleTouchEnd}
    >
      {/* WhatsApp Button with hover tooltip */}
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute right-full mr-2 hidden group-hover:flex items-center justify-center bg-[#430e16] text-white text-sm px-4 py-1 rounded shadow-md whitespace-nowrap">
          WhatsApp
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918837735452"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full shadow-xl hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={32} />
        </a>
      </div>
    </div>
  );
};

export default FloatingContactButton;
