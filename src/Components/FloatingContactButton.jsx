// src/Components/FloatingContactButton.jsx
import { FaWhatsapp } from "react-icons/fa";

const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex items-center gap-3">
      {/* WhatsApp Button with hover tooltip */}
      <div className="relative group">
        {/* Tooltip (hidden by default, visible on hover) */}
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
