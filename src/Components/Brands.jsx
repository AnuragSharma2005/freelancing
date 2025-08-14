"use client"

import { motion } from "framer-motion"
import Navbar from "../Components/Navbar"

const logos = [
  { id: 1, name: "MOTHERHOOD HOSPITAL", image: "/Brands1.png", scale: "scale-120" },
  { id: 2, name: "S8UL", image: "/Brands2.png", scale: "scale-100" },
  { id: 3, name: "CYBER CHORDS", image: "/Brands3.png", scale: "scale-100" },
  { id: 4, name: "FLEXIBLE STUDIO", image: "/Brands4.png", scale: "scale-155" },
  { id: 5, name: "IFLT", image: "/Brands5.png", scale: "scale-135" },
  { id: 6, name: "CHANDIGARH STORIES ", image: "/Brands6.png", noZoom: true, scale: "scale-160" },
  { id: 7, name: "RANAN PRODUCTION", image: "/Brands7.png", noZoom: true, scale: "scale-95" },
  { id: 8, name: "MUBAKRAKAN EVENTS", image: "/Brands8.png", scale: "scale-100" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function LogosGrid() {
  return (
    <>
      <Navbar />
      <motion.div
        className="pt-24 px-4 pb-12 min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#f5f5f5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#430e16] via-[#80242a] to-[#430e16]">
            🏢 worked with
          </h1>
          <div className="h-1.5 w-28 mx-auto mt-4 bg-gradient-to-r from-[#80242a] to-[#430e16] rounded-full"></div>
        </div>

        {/* Logos Grid */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20"
>
  {logos.map((logo) => (
    <motion.div
      key={logo.id}
      variants={itemVariants}
      className="bg-white rounded-2xl border-2 border-[#80242a] shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition-shadow h-[300px]"
    >
{/* Image Container */}
<div className="flex-1 flex items-center justify-center w-full">
  <img
    src={logo.image}
    alt={logo.name}
    className={`max-w-full max-h-36 object-contain transition-transform duration-300 transform ${logo.scale}`}
  />
</div>



      {/* Name Container at Bottom */}
      <div className="mt-4 bg-gradient-to-r from-[#80242a] to-[#430e16] rounded-b-2xl py-2 w-full text-center min-h-[40px] flex items-center justify-center">
        <p className="text-sm md:text-base font-extrabold text-white text-center whitespace-nowrap overflow-hidden px-2">
  {logo.name}
</p>
      </div>
    </motion.div>
  ))}
</motion.div>





      </motion.div>
    </>
  )
}
