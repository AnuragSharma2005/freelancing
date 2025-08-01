import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

const About = () => {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="py-10 sm:py-16 px-4 sm:px-6 flex justify-center scroll-mt-40"
    >
      <motion.div
        className="w-full max-w-screen-xl bg-[#430e16] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-6 sm:p-12 md:p-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
       <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12">
          {/* 🟦 Image Block */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            variants={fadeInUp}
          >
            <div
              className="w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] md:h-[450px] shadow-xl"
              style={{
                borderRadius: '50%',
                boxShadow: '0 35px 100px #85193C',
                padding: '10px',
              }}
            >
              <img
                src="/Aboutme.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                style={{ borderRadius: '50%' }}
              />
            </div>
          </motion.div>

          {/* 🟨 Text Block */}
          <motion.div
            className="w-full text-white text-left"
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-[#FDFFF0] bg-clip-text text-transparent text-center md:text-left">
              About Me
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-justify mb-4">
              With over 8 years of experience as a dynamic Corporate Anchor and
              Soft Skills Trainer, I, Deepika Chawla, have had the privilege of
              empowering more than 10,000 individuals through impactful training
              sessions and high-energy events. My work seamlessly blends stage
              presence with training expertise, enabling me to engage, inspire,
              and transform audiences across diverse sectors.
              <br />
              <br />
              I’ve collaborated with reputed organizations such as Mahindra &
              Mahindra Group, Cyber Chords, Chandigarh Stories, and Chitkara
              University, among others. My training portfolio spans corporate
              professionals, university students, and technical trainees, across
              disciplines like Computer Science, Linguistics, Medical Sciences,
              Engineering, and ITI.
              <br />
              <br />
              Whether I’m anchoring high-impact corporate events or delivering
              life-changing soft skills programs, my focus remains on creating
              confident communicators, effective professionals, and lifelong
              learners.
              <br />
              <br />
              I believe in learning by doing, training with passion, and
              anchoring with charisma — because when people are truly engaged,
              transformation follows.
            </p>

            <motion.button
              className="mt-4 px-6 py-2 bg-[#FDFFF0] text-[#430e16] font-semibold rounded-full cursor-pointer hover:bg-[#DE3C3C] transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/aboutpage')}
            >
              Know More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
