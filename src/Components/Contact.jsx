"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const formPayload = new FormData()
      formPayload.append("name", formData.name)
      formPayload.append("email", formData.email)
      formPayload.append("location", formData.location)
      formPayload.append("phone", formData.phone)
      formPayload.append("message", formData.message)
      const response = await fetch("https://formsubmit.co/anuragwork2005@gmail.com", {
        method: "POST",
        body: formPayload,
      })
      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormData({
          name: "",
          email: "",
          location: "",
          phone: "",
          message: "",
        })
      } else {
        toast.error("Failed to send message.")
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      className="min-h-screen bg-white w-screen overflow-x-hidden px-0 sm:px-6 lg:px-0 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section with Profile */}
      <motion.div
        className="mt-8 md:mt-16 w-screen max-w-none overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.3)] bg-gradient-to-br from-[#2e0f11] via-[#431316] to-[#2e0f11] flex flex-col md:flex-row sm:rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left - Image */}
        <motion.div
          className="md:w-1/2 w-full h-[200px] md:h-[450px] overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src="/trainer.jpg"
            alt="Deepika Chawla"
            className="w-full h-full object-cover object-top"
            style={{ objectPosition: "50% 10%" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center p-4 md:p-14 text-white text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Name and Title */}
          <motion.div className="mb-3 md:mb-4" variants={itemVariants}>
            <motion.h2
              className="text-2xl md:text-4xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Deepika Chawla
            </motion.h2>
            <motion.p
              className="text-sm md:text-lg text-gray-300 mt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Motivational Speaker | Author | Life Coach
            </motion.p>
          </motion.div>

          {/* Heading and Description */}
          <motion.div className="mb-4 md:mb-6" variants={itemVariants}>
            <motion.h3
              className="text-xl md:text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Let's Get Social
            </motion.h3>
            <motion.p
              className="text-gray-300 text-xs md:text-base max-w-md mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Join Deepika Chawla's journey on social media — connect, grow, and stay updated with inspiring moments,
              powerful talks, and behind-the-scenes action.
            </motion.p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mb-4 md:mb-5 text-base md:text-2xl"
            variants={containerVariants}
          >
            {[
              { icon: FaWhatsapp, bg: "bg-green-600 hover:bg-green-500", delay: 0 },
              {
                icon: FaInstagram,
                bg: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90",
                delay: 0.1,
              },
              { icon: FaFacebookF, bg: "bg-blue-700 hover:bg-blue-600", delay: 0.2 },
              { icon: FaXTwitter, bg: "bg-black hover:bg-gray-800", delay: 0.3 },
              { icon: FaYoutube, bg: "bg-red-600 hover:bg-red-500", delay: 0.4 },
              { icon: FaLinkedin, bg: "bg-[#0077B5] hover:bg-[#005983]", delay: 0.5 },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`${social.bg} text-white p-2 md:p-3 rounded-full transition-all duration-300`}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + social.delay }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-xs md:text-base text-gray-300 font-medium flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <motion.span
              className="text-white"
              whileHover={{ scale: 1.05, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              +91 80548 11273
            </motion.span>
            <motion.span
              className="text-white"
              whileHover={{ scale: 1.05, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              satwinder.coach@gmail.com
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Professional Contact Information Section */}
      <motion.div
        className="relative max-w-7xl mx-auto px-0 md:px-0 py-4 md:py-8 mb-4 md:mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background gradients & blur orbs */}
        <motion.div
          className="absolute top-[-30px] left-[-30px] md:top-[-50px] md:left-[-50px] w-48 h-48 md:w-72 md:h-72 bg-emerald-600/20 rounded-full blur-3xl animate-pulse z-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-40px] right-[-40px] md:bottom-[-60px] md:right-[-60px] w-64 h-64 md:w-96 md:h-96 bg-green-500/10 rounded-full blur-2xl animate-pulse z-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      {/* Professional Contact Form Section */}
      <motion.div
        className="relative w-full max-w-7xl bg-gradient-to-br from-[#2e0f11] via-[#431316] to-[#2e0f11] rounded-3xl shadow-lg overflow-hidden mx-auto px-0"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Vine Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <motion.svg
            className="absolute top-0 left-0 w-96 h-96"
            viewBox="0 0 400 400"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.path
              d="M50 350C50 350 100 300 150 320C200 340 250 280 300 300C350 320 400 270 400 270"
              stroke="url(#vineGradient1)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M0 250C0 250 50 200 100 220C150 240 200 180 250 200C300 220 350 170 350 170"
              stroke="url(#vineGradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <defs>
              <linearGradient id="vineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#065f46" />
              </linearGradient>
            </defs>
          </motion.svg>

          <motion.svg
            className="absolute bottom-0 right-0 w-96 h-96 rotate-180"
            viewBox="0 0 400 400"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <motion.path
              d="M50 350C50 350 100 300 150 320C200 340 250 280 300 300C350 320 400 270 400 270"
              stroke="url(#vineGradient2)"
              strokeWidth="3"
              fill="none"
            />
            <motion.path
              d="M0 250C0 250 50 200 100 220C150 240 200 180 250 200C300 220 350 170 350 170"
              stroke="url(#vineGradient2)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="vineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#064e3b" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Floating Leaves */}
          <motion.div
            className="absolute top-20 left-1/4 w-8 h-8 bg-emerald-600 rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-1/3 w-6 h-6 bg-green-500 rounded-full opacity-15"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/3 w-10 h-10 bg-emerald-700 rounded-full opacity-10"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get In{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Touch
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ready to bring your vision to life? Let's start a conversation about your next project. We're here to help
              you grow and flourish in the digital landscape.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Side - Phone Mockup with Professional Photo */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                {/* Phone Frame */}
                <motion.div
                  className="relative w-72 h-[580px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl"
                  whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-[2.5rem] overflow-hidden relative">
                    {/* Professional Photo */}
                    <motion.div
                      className="absolute top-8 left-0 right-0 bottom-0 flex items-center justify-center p-4"
                      initial={{ opacity: 0, scale: 1.2 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <motion.img
                        src="/trainer.jpg"
                        alt="Professional Contact"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Hello Badge */}
                    <motion.div
                      className="absolute top-12 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      // transition={{
                      //   duration: 2,
                      //   repeat: Number.POSITIVE_INFINITY,
                      //   ease: "easeInOut",
                      // }}
                    >
                      <span className="text-sm font-medium text-gray-800">Hello!</span>
                    </motion.div>
                  </div>

                  {/* Home Indicator */}
                  <motion.div
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

            {/* Right Side - Professional Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  className="text-3xl font-bold text-white mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Send us a Message
                </motion.h2>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={formFieldVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Full Name"
                        required
                        whileFocus="focus"
                        whileHover={{ borderColor: "#10b981" }}
                      />
                    </motion.div>

                    <motion.div variants={formFieldVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Email"
                        required
                        whileFocus="focus"
                        whileHover={{ borderColor: "#10b981" }}
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={formFieldVariants}>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                        Location *
                      </label>
                      <motion.input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Location"
                        required
                        whileFocus="focus"
                        whileHover={{ borderColor: "#10b981" }}
                      />
                    </motion.div>

                    <motion.div variants={formFieldVariants}>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="+91 "
                        required
                        whileFocus="focus"
                        whileHover={{ borderColor: "#10b981" }}
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={formFieldVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you achieve them..."
                      required
                      whileFocus="focus"
                      whileHover={{ borderColor: "#10b981" }}
                    />
                  </motion.div>

                  <motion.div className="flex items-center justify-between pt-4" variants={formFieldVariants}>
                    <p className="text-sm text-gray-400">* Required fields</p>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-label="Loading"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </motion.svg>
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          className="flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span>Send Message</span>
                          <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            whileHover={{ x: 3, rotate: 15 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </motion.svg>
                        </motion.div>
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 text-gray-400 text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </motion.svg>
              <span>Your information is secure and will never be shared with third parties</span>
            </motion.div>
            <motion.p
              className="text-gray-500 text-sm mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              © 2024 Deepika Chawla. All rights reserved. | Privacy Policy | Terms of Service
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="h-12 md:h-24" />
    </motion.div>
  )
}

export default Contact
