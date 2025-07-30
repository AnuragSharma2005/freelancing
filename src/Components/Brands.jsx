import React from 'react';
import Navbar from '../Components/Navbar'; // path sahi rakhna, adjust if needed

const Brands = () => {
  return (
    <>
      {/* Navbar sabse upar */}
      <Navbar />

      {/* Content below navbar */}
      <div className="pt-24 px-4 min-h-screen bg-[#f9f9f9]">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#430e16]">Brands</h1>

        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-lg text-gray-700">
            Here you'll find personalized recommendations curated just for you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Brands;
