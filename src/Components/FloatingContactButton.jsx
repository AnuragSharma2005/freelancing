// src/Components/FloatingContactButton.jsx
import { FaWhatsapp } from "react-icons/fa";

const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 group">
      {/* Tooltip on the left */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#430e16] text-white text-xs px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        WhatsApp
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingContactButton;
