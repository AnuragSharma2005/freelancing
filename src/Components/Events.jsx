import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    title: 'Opening Ceremony',
    src: '/Events1.mp4', // relative to public folder
  },
  {
    id: 2,
    title: 'Workshop Highlights',
    src: '/Events2.mp4',
  },
    {
    id: 3,
    title: 'Workshop Highlights',
    src: '/Events3.mp4',
  },
    {
    id: 4,
    title: 'Workshop Highlights',
    src: '/Events4.mp4',
  },
    {
    id: 5,
    title: 'Workshop Highlights',
    src: '/Events5.mp4',
  },
    {
    id: 6,
    title: 'Workshop Highlights',
    src: '/Events6.mp4',
  },
];

const Events = () => {
  return (
    <div className="bg-[#0e0f1a] text-white min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative flex items-center justify-center h-[60vh] md:h-[80vh] bg-cover bg-center bg-[url('/event-bg.jpg')]">
        <div className="bg-black/60 absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Annual Tech Event 2025</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Experience innovation, learning, and excitement like never before!
          </p>
        </motion.div>
      </section> */}

      {/* About Section */}
      {/* <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About the Event</h2>
          <p className="text-gray-300 leading-relaxed">
            Our annual tech event brings together developers, designers, and entrepreneurs from around the country. Join us for keynote sessions, hands-on workshops, networking, and more.
          </p>
        </motion.div>
      </section> */}

    
      {/* Videos Section */}
        <section className="bg-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Event Highlights</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="rounded-xl overflow-hidden shadow-lg bg-gray-800"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Video section */}
                <div className="bg-black overflow-hidden h-[250px] md:h-[300px] lg:h-[350px]">
                  <video controls className="w-full h-full object-cover">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Title section */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      
    </div>
  );
};

export default Events;
