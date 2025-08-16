"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, Star, Share2, Download } from "lucide-react"

const videos = [
  { id: 1, title: "", src: "/events11.mp4", duration: "2:30" },
  { id: 2, title: "", src: "/events22.mp4", duration: "1:45" },
  { id: 3, title: "", src: "/events33.mp4", duration: "3:15" },
  { id: 4, title: "", src: "/events44.mp4", duration: "2:10" },
  { id: 5, title: "", src: "/events55.mp4", duration: "4:20" },
  { id: 6, title: "", src: "/events66.mp4", duration: "1:55" },
]

const bestMoments = [
  { id: 1, title: "", src: "/bestevents.mp4", duration: "3:45" },
  {
    id: 2,
    title: "",
    src: "https://youtu.be/9tYEkup3_kI?feature=shared",
    duration: "5:20",
  },
]

// const categories = ["all", "corporate", "team", "celebration"]

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const Events = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredVideo, setHoveredVideo] = useState(null)
  const videoRefs = useRef({})

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleVideoHover = (videoId, isHovering) => {
    const videoElement = videoRefs.current[videoId]
    if (videoElement) {
      if (isHovering) {
        setHoveredVideo(videoId)
        videoElement.currentTime = 0
        videoElement.play().catch(() => {})
      } else {
        setHoveredVideo(null)
        videoElement.pause()
      }
    }
  }

  const shareVideo = async (video) => {
    const shareData = {
      title: video.title,
      text: `Check out this amazing video: ${video.title}`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`)
        alert("Video link copied to clipboard!")
      }
    } catch (error) {
      console.log("Error sharing:", error)
    }
  }

  const downloadVideo = async (video) => {
    try {
      if (video.src.includes("youtube") || video.src.includes("youtu.be")) {
        window.open(video.src, "_blank")
        return
      }

      const response = await fetch(video.src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${video.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.mp4`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.log("Download error:", error)
      alert("Unable to download video. Please try again.")
    }
  }

  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 via-red-300 to-pink-400 bg-clip-text text-transparent"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )

  return (
    <div className="bg-[#ffffff] text-white min-h-screen relative">
      <ParticleBackground />

      <motion.section
        className="bg-[#430e16] text-white py-24 px-6 rounded-b-[80px] shadow-xl relative overflow-hidden"
        initial="hidden"
        animate="show"
        variants={heroVariants}
      >
        <div className="max-w-5xl mx-auto text-center mt-10 relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-red-300 to-pink-400 bg-clip-text text-transparent">
              Event Highlights
            </span>
          </motion.h1>

          {/* <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Discover our most memorable moments and celebrations
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`capitalize px-3 py-1.5 text-sm rounded-md transition-all duration-200 flex items-center gap-1 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-yellow-400 to-pink-400 text-black font-medium"
                      : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                  }`}
                >
                  <Filter className="w-3 h-3" />
                  {category}
                </button>
              ))}
            </div>
          </motion.div> */}
        </div>
      </motion.section>

      <motion.section
        className="bg-white py-20 mt-[-2px] text-black relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants}>
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                className="rounded-xl overflow-hidden shadow-lg bg-gray-800 group cursor-pointer relative"
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                onHoverStart={() => handleVideoHover(video.id, true)}
                onHoverEnd={() => handleVideoHover(video.id, false)}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden h-[250px] md:h-[300px] lg:h-[350px]">
                  <video
                    ref={(el) => (videoRefs.current[video.id] = el)}
                    className="w-full h-full object-cover bg-black transition-transform duration-500 ease-out"
                    muted
                    loop
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-white fill-white" />
                    </motion.div>
                  </div>

                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>

                  <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-pink-400 text-black text-xs px-2 py-1 rounded capitalize font-medium">
                    {video.category}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white flex-1">{video.title}</h3>
                  </div>

                  <div className="flex items-center justify-end text-sm text-gray-400">
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-400 hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation()
                          shareVideo(video)
                        }}
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-400 hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation()
                          downloadVideo(video)
                        }}
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="bg-white py-20 text-black relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto text-center mb-12 ">
       <motion.h2
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          variants={heroVariants}
        >
          <span className="bg-gradient-to-r from-yellow-400 via-red-300 to-pink-400 bg-clip-text text-transparent">
            Best Moments
          </span>
        </motion.h2>
          <motion.div className="flex items-center justify-center gap-2 text-yellow-500" variants={heroVariants}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="grid gap-10 md:grid-cols-2" variants={containerVariants}>
            {bestMoments.map((video) => (
              <motion.div
                key={video.id}
                className="rounded-xl overflow-hidden shadow-lg bg-gray-900 group cursor-pointer relative"
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative overflow-hidden h-[250px] md:h-[300px]">
                  {video.src.includes("youtube") || video.src.includes("youtu.be") ? (
                    <div className="relative w-full h-full bg-black">
                      <iframe
                        className="w-full h-full"
                        src={
                          video.src
                            .replace("youtu.be/", "www.youtube.com/embed/")
                            .replace("watch?v=", "embed/")
                            .split("?")[0]
                        }
                        title={`YouTube video ${video.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <motion.div
                          className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="w-8 h-8 text-white fill-white" />
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <video
                        className="w-full h-full object-cover bg-black group-hover:scale-105 transition-transform duration-500 ease-out"
                        muted
                        loop
                        preload="metadata"
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="w-8 h-8 text-white fill-white" />
                        </motion.div>
                      </div>
                    </>
                  )}

                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white flex-1">{video.title}</h3>
                  </div>

                  <div className="flex items-center justify-end text-sm text-gray-400">
                    <div className="flex gap-2">
                      <motion.button whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Full-screen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full h-full max-w-6xl max-h-[90vh] bg-gray-900 rounded-none md:rounded-xl overflow-hidden flex flex-col shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 bg-black/80 hover:bg-black text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex-1 relative bg-black min-h-0">
                {selectedVideo.src.includes("youtube") || selectedVideo.src.includes("youtu.be") ? (
                  <iframe
                    className="w-full h-full"
                    src={
                      selectedVideo.src
                        .replace("youtu.be/", "www.youtube.com/embed/")
                        .replace("watch?v=", "embed/")
                        .split("?")[0] + "?autoplay=1"
                    }
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video className="w-full h-full object-contain" controls autoPlay playsInline>
                    <source src={selectedVideo.src} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="p-6 bg-gray-900 border-t border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedVideo.title}</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => shareVideo(selectedVideo)}
                      className="flex-1 sm:flex-none px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-md transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <button
                      onClick={() => downloadVideo(selectedVideo)}
                      className="flex-1 sm:flex-none px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-md transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Events
