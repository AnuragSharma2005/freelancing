import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const certificates = [
  {
    id: 1,
    title: '',
    description: '',
    image: '/Certificate.jpg',
  },
  {
    id: 2,
    title: '',
    description: '',
    image: '/Certificate2.jpg',
  },
  {
    id: 3,
    title: '',
    description: '',
    image: '/Certificate3.jpg',
  },
   {
    id: 4,
    title: '',
    description: '',
    image: '/Certificate4.jpg',
  },
  {
    id: 5,
    title: '',
    description: '',
    image: '/Certificate5.jpg',
  },
  {
    id: 6,
    title: '',
    description: '',
    image: '/Certificate6.jpg',
  },
];

const awards = [
  {
    id: 1,
    title: '',
    description: '.',
    image: '/awards1.jpg',
  },
  {
    id: 2,
    title: '',
    description: '',
    image: '/awards2.jpg',
  },
   {
    id: 3,
    title: '',
    description: '',
    image: '/awards3.jpg',
  },
  {
    id: 4,
    title: '',
    description: '',
    image: '/awards4.jpg',
  },
   {
    id: 5,
    title: '',
    description: '.',
    image: '/awards5.jpg',
  },
  {
    id: 6,
    title: '',
    description: '',
    image: '/awards6.jpg',
  },
   {
    id: 7,
    title: '',
    description: '',
    image: '/awards7.jpg',
  },
  {
    id: 8,
    title: '',
    description: '',
    image: '/awards8.jpg',
  },
];

const Recommendations = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <>
      <Navbar />

      <div className="pt-24 px-4 min-h-screen bg-[#f9f9f9]">
        {/* Certifications Section */}
        <motion.h1
                    className="max-w-4xl mx-auto bg-[#430e16] text-white shadow-md rounded-xl p-6 text-center mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            Certifications
            </motion.h1>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
             className="cursor-pointer bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[400px] border border-black"

            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full object-contain max-h-72 bg-[#430e16]"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-[#430e16] mb-2">{cert.title}</h2>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

            {/* Awards Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-20 mb-12 text-[#430e16]">
      Awards & Recognitions
    </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            onClick={() => setSelectedAward(award)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="cursor-pointer bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
           <div className="w-full h-[250px] bg-[#430e16] overflow-hidden">
          <img
            src={award.image}
            alt={award.title}
            className="w-full h-full object-cover"
          />
        </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-[#430e16] mb-2">{award.title}</h2>
              <p className="text-gray-600 text-sm">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      </div>

      {/* Modal for Certification */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 text-white text-3xl bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
            >
              <IoClose className='cursor-pointer ' />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl overflow-hidden bg-white p-2"
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center mt-4 text-sm text-gray-700 font-medium">
                {selectedCert.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Award */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-6 right-6 text-white text-3xl bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
            >
              <IoClose />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl overflow-hidden bg-white p-2"
            >
              <img
                src={selectedAward.image}
                alt={selectedAward.title}
                className="max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center mt-4 text-sm text-gray-700 font-medium">
                {selectedAward.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Recommendations;
