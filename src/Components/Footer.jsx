import { Facebook, Twitter, Youtube, Linkedin, Instagram, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full relative text-white py-12 px-4 md:px-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top_20%]"
        style={{
          backgroundImage: "url(/anchor.png)",
          backgroundSize: "cover",
          // backgroundPosition: "left center",
          opacity: 0.4,
        }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-between min-h-[300px]">
          {/* Left side - Empty space to let background image show */}
          <div className="w-full md:w-1/2 hidden md:block"></div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <p className="text-gray-200 text-sm leading-snug md:text-[15px] md:leading-relaxed">
              "I am blessed that my love for people and passion to help is what I do for a living. Actually, in any way
              that one looks at it, that should be the primary agenda of every business and professional. To motivate,
              to inspire, to lead, is what drives me because I sincerely believe that there is a far better future that
              we can make, even when we believe that we are doing our best. To push people to touch that space where
              magic happens in their performance, where exhilaration meets exceeded expectations, is a job I take to
              delivery."
            </p>

            <div>
              <h2 className="text-2xl font-bold">Deepika Chawla</h2>
              <p className="text-lg font-semibold text-gray-300">CEO & Chief Facilitator.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
              <div className="flex gap-2 md:gap-3 justify-start flex-wrap">
                <a
                  href="#"
                  className="bg-[#3b5998] p-2 md:p-3 rounded hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="bg-black p-2 md:p-3 rounded hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="#"
                  className="bg-[#ff0000] p-2 md:p-3 rounded hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="#"
                  className="bg-[#0077b5] p-2 md:p-3 rounded hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-tr from-yellow-400 to-pink-500 p-2 md:p-3 rounded hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - keep the same */}
        <div className="border-t border-gray-400 mt-6 pt-4 text-sm flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-xs text-gray-400">2025 © Copyrights Deepika Chawla</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="hover:underline">
              Books
            </a>
          </div>
          <a
            href="https://wa.me/918837735452"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full shadow-lg text-xs md:text-sm">
              <MessageCircle className="text-green-600" size={16} />
              Contact us
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
