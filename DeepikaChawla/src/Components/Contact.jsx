import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 5

    const formData = new FormData(e.target);

    try {
      const res = await fetch('https://formsubmit.co/anuragwork2005@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        toast.success('Email sent successfully!');
        e.target.reset();
      } else {
        toast.error('Failed to send email. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 md:px-10">

      {/* Full Width Image */}
      <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden border-4 border-[#430e16] mb-10">
        <img
          src="/image1.jpeg"
          alt="Team Member"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 mb-16">
        {/* Address */}
        <div className="flex-1 bg-[#430e16] p-6 rounded-xl shadow-md">
          <h4 className="text-[#FDFFF0] text-xl font-semibold mb-2">Office Address:</h4>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-[#FDFFF0] mt-1" />
            <p className="text-[#FDFFF0]">
              Plot # 130, Glass Palace, 1stFloor,<br />
              Next 57 Offices, JLPL, Sec 82, Mohali, Punjab, India
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex-1 bg-[#430e16] p-6 rounded-xl shadow-md">
          <h4 className="text-[#FDFFF0] text-xl font-semibold mb-2">Phone Number / Whatsapp:</h4>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#FDFFF0]" />
            <p className="text-[#FDFFF0]">+91 80548-11273</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex-1 bg-[#430e16] p-6 rounded-xl shadow-md">
          <h4 className="text-[#FDFFF0] text-xl font-semibold mb-2">Office Email:</h4>
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-[#FDFFF0] mt-1" />
            <div className="text-[#FDFFF0]">
              <p>satwinder.coach@gmail.com</p>
              <p>incredible.leaders1@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section id="contact" className="w-full flex justify-center">
        <div className="bg-[#430e16] rounded-3xl shadow-2xl px-6 sm:px-10 py-12 w-full max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-10 bg-white bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    name="First Name"
                    placeholder="Your First Name"
                    required
                    className="w-full bg-[#841818] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-2"> Your Location</label>
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Your Location"
                    required
                    className="w-full bg-[#841818] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-[#841818] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    name="Phone"
                    placeholder="Your Contact Number"
                    required
                    className="w-full bg-[#841818] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  name="Message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full bg-[#841818] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-1/2 px-5 py-3 text-sm sm:text-base rounded-3xl font-semibold transition hover:brightness-110 ${isSubmitting
                      ? 'bg-white text-black cursor-not-allowed'
                      : 'bg-[#841818] text-white'
                    }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        <ToastContainer position="bottom-right" theme="dark" />
      </section>
      <div className="bg-[#430e16] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-6 md:p-8 mt-12 flex items-center justify-center min-h-[120px] w-fit max-w-full mx-auto">
        <h1 className='text-white'>Follow Deepika Chawla on Social Media </h1>
        <div className="flex justify-center items-center gap-6 flex-nowrap overflow-x-auto">
          {/* Call */}
          <a
            href="tel:+918054811273"
            className="text-white text-4xl p-4 rounded-full bg-blue-400 hover:bg-blue-300 transition flex items-center justify-center object-cover"
          >
            <FaPhoneAlt />
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/918054811273"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl p-4 rounded-full bg-green-600 hover:bg-green-500 transition  object-cover"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl p-4 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 transition  object-cover"
          >
            <FaInstagram />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl p-4 rounded-full bg-blue-700 hover:bg-blue-600 transition  object-cover"
          >
            <FaFacebookF />
          </a>

          {/* Twitter / X */}
          <a
            href="https://twitter.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl p-4 rounded-full bg-black hover:bg-gray-800 transition"
          >
            <FaXTwitter />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/YOUR_CHANNEL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl p-4 rounded-full bg-red-600 hover:bg-red-500 transition"
          >
            <FaYoutube />
          </a>

          {/* Email */}
          <a
            href="mailto:satwinder.coach@gmail.com"
            className="text-white text-4xl p-4 rounded-full bg-yellow-500 hover:bg-yellow-400 transition"
          >
            <FaEnvelope />
          </a>
          {/* 🔗 LinkedIn */}
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-white text-4xl p-4 rounded-full bg-[#0077B5] hover:bg-[#005983] transition"
          >
            <FaLinkedin />

          </a>

        </div>
      </div>


    </div>
  );
};

export default Contact;
