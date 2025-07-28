import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const AboutPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-white text-[#430e16]">

      
      {/* Top Section with background color */}
      <motion.div
        className="w-full bg-[#430e16] rounded-b-[80px]  text-white px-6 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image */}
                <motion.div
            className="w-full md:w-1/3 flex justify-center md:justify-start"
            variants={fadeInUp}
            >
            <img
                src="/trainer.jpg"
                alt="Deepika Chawla"
                className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl translate-y-20 z-15"
            />
            </motion.div>


          {/* Title */}
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            variants={fadeInUp}
          >
           <h1 className="text-4xl md:text-6xl font-bold bg-[#FDFFF0] bg-clip-text text-transparent leading-tight translate-y-14">
            Meet <br className="block md:hidden" /> Deepika Chawla
            </h1>

          </motion.div>
        </div>
      </motion.div>

      {/* Bio Section (outside background color) */}
      <motion.div
        className="w-full max-w-screen-xl bg-white rounded-3xl shadow-[0_20px_60px_rgba(67,14,22,0.35)] border-4 border-[#8a2b39] p-6 md:p-16 mt-12 md:-mt-16 mx-4 md:mx-auto z-10 relative mb-16"

        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p className="mb-6 text-justify leading-relaxed" variants={fadeInUp}>
          I'm Deepika Chawla, a passionate anchor and seasoned corporate trainer with over a decade of experience
          in delivering impactful presentations and hosting memorable events. My journey spans hosting corporate
          summits, panel discussions, cultural shows, and motivational sessions for leading brands and organizations.
        </motion.p>
        <motion.p className="mb-6 text-justify leading-relaxed" variants={fadeInUp}>
          With a deep understanding of audience engagement and corporate dynamics, I bridge the gap between formal
          professionalism and relatable communication. Whether I'm training professionals on effective communication,
          soft skills, or leading an energetic corporate event, my aim is to inspire, empower, and connect people meaningfully.
        </motion.p>
        <motion.p className="mb-6 text-justify leading-relaxed" variants={fadeInUp}>
          My approach combines warmth, clarity, and confidence—creating a lasting impact whether it's on stage or in a training room.
          Let's collaborate to bring energy, elegance, and excellence to your next event or corporate training.
        </motion.p>

        <motion.a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-[#430e16]  text-white font-semibold rounded-full hover:bg-[#DE3C3C] transition duration-300 shadow-lg"
          variants={fadeInUp}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutPage;
