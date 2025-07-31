import React from 'react';

const Banner = () => {
  return (
    <section className="w-full px-4 md:px-0 mt-20">
      {/* Image Section */}
      <div className="relative w-full max-w-6xl mx-auto rounded-[60px] overflow-visible shadow-xl h-[300px]">
            <img
                src="/Anchor.jpg"
                alt="Corporate Workshops"
                className="w-full h-full object-cover rounded-[60px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
                Corporate Workshops and Keynotes
                </h2>
            </div>

            {/* Buttons overlapping banner */}
            <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 flex gap-4 z-10">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full shadow-lg">
                CONTACT US
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full shadow-lg">
                KNOW MORE
                </button>
            </div>
            </div>


      {/* Spacer to prevent overlap below */}
      <div className="mt-16 md:mt-20"></div>
    </section>
  );
};

export default Banner;
