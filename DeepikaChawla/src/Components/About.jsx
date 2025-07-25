import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 flex justify-center px-4 ">
      <div className="w-full max-w-screen-xl bg-[#430e16] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-12 md:p-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">

            {/* Image (Now on the left) */}
            <div className="order-1 w-full md:w-1/2 flex justify-center md:justify-start px-4 md:px-0">
              <div
                className="w-full max-w-[320px] h-[380px] md:h-[400px] shadow-xl"
                style={{
                  borderRadius: '50%',
                 boxShadow: '0 35px 100px #85193C',
                  backgroundColor: '#FDFFF0',
                  padding: '10px',
                }}
              >
                <img
                  src="/trainer.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                />
              </div>
            </div>

            {/* Text (Now on the right) */}
<div className="order-2 w-full md:w-11/12 text-white px-4 md:px-0 text-left">
  <h2 className="text-5xl font-bold mb-8 bg-[#FDFFF0] bg-clip-text text-transparent">
    About Me
  </h2>

  <p className="mb-4 text-justify">
    Hi, I'm Anurag Sharma, a passionate full-stack developer currently pursuing my B.E. in Computer Science at Chitkara University.
    I enjoy turning ideas into real-world digital solutions through clean, efficient, and user-friendly code.
    With experience in both front-end and back-end technologies, I strive to build applications that are not only functional but also deliver a smooth user experience.
    My technical skills include proficiency in HTML, CSS, JavaScript, and various frameworks and libraries, enabling me to build responsive and interactive websites.
    Beyond coding, I’m actively involved in CEED – Chitkara University’s Startup Club, where I serve as a core member of the Event Management Team.
    There, I contribute to organizing and executing events that promote innovation, entrepreneurship, and collaboration among students.
    I love working with people, whether it’s through tech or events, and I’m always looking to grow, learn, and make meaningful contributions.
    Thanks for visiting my portfolio!
  </p>

<button
  className="mt-4 px-6 py-2 bg-[#FDFFF0] text-[#430e16] font-semibold rounded-full cursor-pointer hover:bg-[#DE3C3C] transition duration-300 shadow-lg"
>
  Know More
</button>

</div>


        
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
