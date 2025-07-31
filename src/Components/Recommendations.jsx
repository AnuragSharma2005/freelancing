"use client"

import { useState, useEffect } from "react"
import Navbar from "../Components/Navbar"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"

const certificates = [
  {
    id: 1,
    title: "",
    description: "",
    image: "/Certificate.jpg",
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "/Certificate2.jpg",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "/Certificate3.jpg",
  },
  {
    id: 4,
    title: "",
    description: "",
    image: "/Certificate4.jpg",
  },
  {
    id: 5,
    title: "",
    description: "",
    image: "/Certificate5.jpg",
  },
  {
    id: 6,
    title: "",
    description: "",
    image: "/Certificate6.jpg",
  },
]

const awards = [
  {
    id: 1,
    title: "",
    description: ".",
    image: "/awards1.jpg",
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "/awards2.jpg",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "/awards3.jpg",
  },
  {
    id: 4,
    title: "",
    description: "",
    image: "/awards4.jpg",
  },
  {
    id: 5,
    title: "",
    description: ".",
    image: "/awards5.jpg",
  },
  {
    id: 6,
    title: "",
    description: "",
    image: "/awards6.jpg",
  },
  {
    id: 7,
    title: "",
    description: "",
    image: "/awards7.jpg",
  },
  {
    id: 8,
    title: "",
    description: "",
    image: "/awards8.jpg",
  },
]

const Recommendations = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  const [selectedAward, setSelectedAward] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const cardHoverVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 10px 25px -5px rgba(67, 14, 22, 0.1), 0 10px 10px -5px rgba(67, 14, 22, 0.04)",
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(67, 14, 22, 0.25), 0 25px 25px -12px rgba(67, 14, 22, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <Navbar />
      <motion.div
        className="pt-24 px-4 min-h-screen bg-gradient-to-br from-[#f9f9f9] via-[#fafafa] to-[#f5f5f5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mx-auto max-w-fit mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#430e16] via-[#80242a] to-[#430e16] text-center drop-shadow-lg">
              🎓 Certifications
            </h1>
            <motion.div
              className="h-1.5 w-32 mx-auto mt-4 bg-gradient-to-r from-[#80242a] via-[#430e16] to-[#80242a] rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Professional certifications and achievements that demonstrate expertise and commitment to excellence
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer bg-white rounded-3xl overflow-hidden group"
              style={cardHoverVariants.rest}
              whileHoverStyle={cardHoverVariants.hover}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full object-contain max-h-72 bg-gradient-to-br from-[#430e16] to-[#80242a] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#430e16] mb-2 group-hover:text-[#80242a] transition-colors duration-300">
                  {cert.title || "Professional Certificate"}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cert.description || "Click to view certificate details"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-fit mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#430e16] via-[#80242a] to-[#430e16] text-center drop-shadow-lg">
              🏆 Awards & Recognitions
            </h1>
            <motion.div
              className="h-1.5 w-40 mx-auto mt-4 bg-gradient-to-r from-[#80242a] via-[#430e16] to-[#80242a] rounded-full shadow-lg"
              initial={{ width: 0 }}
              whileInView={{ width: 160 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Recognition and accolades received for outstanding performance and contributions
          </motion.p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              onClick={() => setSelectedAward(award)}
              className="cursor-pointer bg-white rounded-3xl overflow-hidden group"
              style={cardHoverVariants.rest}
              whileHoverStyle={cardHoverVariants.hover}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-[280px] bg-gradient-to-br from-[#430e16] to-[#80242a] overflow-hidden">
                  <motion.img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-[#430e16] mb-2 group-hover:text-[#80242a] transition-colors duration-300">
                  {award.title || "Achievement Award"}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {award.description || "Click to view award details"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Modal for Certification */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 text-white text-3xl bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoClose />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image || "/placeholder.svg"}
                alt={selectedCert.title}
                className="max-h-[75vh] w-full object-contain rounded-xl"
              />
              {selectedCert.title && (
                <p className="text-center mt-4 text-lg text-[#430e16] font-semibold">{selectedCert.title}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Modal for Award */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
          >
            <motion.button
              onClick={() => setSelectedAward(null)}
              className="absolute top-6 right-6 text-white text-3xl bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoClose />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedAward.image || "/placeholder.svg"}
                alt={selectedAward.title}
                className="max-h-[75vh] w-full object-contain rounded-xl"
              />
              {selectedAward.title && (
                <p className="text-center mt-4 text-lg text-[#430e16] font-semibold">{selectedAward.title}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Recommendations
