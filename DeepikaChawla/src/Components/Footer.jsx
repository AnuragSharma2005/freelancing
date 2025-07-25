import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ Make sure this is imported from fa6

const Footer = () => {
  return (
    <footer className="w-full bg-[#430e16] text-white py-12 px-4 md:px-20">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-between">
        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/anchor.png"
            alt="Priya Kumar"
            className="w-[250px] h-auto object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Right: Text + Socials */}
        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
          <p className="text-gray-200 text-[15px] leading-relaxed">
            “I am blessed that my love for people and passion to help is what I do for a living.
            Actually, in any way that one looks at it, that should be the primary agenda of every
            business and professional. To motivate, to inspire, to lead, is what drives me because
            I sincerely believe that there is a far better future that we can make, even when we
            believe that we are doing our best...”
          </p>

          <div>
            <h2 className="text-xl font-bold">Deepika Chawla</h2>
            <p className="text-sm font-semibold text-gray-300">Anchor & Corporate Trainer</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Stay Connected</h3>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="bg-[#3b5998] p-2 rounded"><FaFacebookF /></a>
              <a href="#" className="bg-black p-2 rounded"><FaXTwitter /></a>
              <a href="#" className="bg-[#ff0000] p-2 rounded"><FaYoutube /></a>
              <a href="#" className="bg-[#0077b5] p-2 rounded"><FaLinkedinIn /></a>
              <a href="#" className="bg-gradient-to-tr from-yellow-400 to-pink-500 p-2 rounded"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 © Copyrights Deepika Chawla</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
        <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow">
            <FaWhatsapp className="text-green-600 text-lg" />
            Contact us
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
