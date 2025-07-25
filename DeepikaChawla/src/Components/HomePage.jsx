import React from "react";

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden relative">
      {/* Hero Section with Full Image */}
      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen">
        <img
          src="/image1.jpeg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
      </section>

      {/* Overlapping Cards */}
      <div className="relative -mt-20 md:-mt-28 z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-14">
        {/* Card 1 */}
        <a
          href="#"
          className="w-full md:w-[480px] h-[420px] rounded-xl bg-[#430e16] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
        >

          <div className="h-[70%]">
            <img
              src="/anchor.png"
              alt="Card"
              className="w-full h-full object-cover object-top"
            />
          </div>


          <div className="h-[30%] flex items-center justify-center text-white font-bold text-lg">
           Corporate Trainer
          </div>
        </a>



        {/* Card 2 */}
        <a
          href="#"
          className="w-full md:w-[480px] h-[420px] rounded-xl bg-[#430e16] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
        >

          <div className="h-[70%]">
            <img
              src="/trainer.jpg"
              alt="Card"
              className="w-full h-full object-cover object-top"
            />
           
          </div>


          <div className="h-[30%] flex items-center justify-center text-white font-bold text-lg">
            Anchor 
          </div>
        </a>
      </div>

      {/* Next Section */}
      <section className="w-full bg-white text-black py-2 px-6 mt-8">
        <div className="max-w-5xl mx-auto text-center">
      
        </div>
      </section>
    </div>
  );
};

export default HomePage;
