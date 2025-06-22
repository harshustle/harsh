import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ContactButtons from '../components/ContactButtons'; // 🔗 Import here

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_lx9crl9', 'template_c7q9j8v', form.current, '7HRq1R2PhOCT7EKkA')
      .then(() => alert('✅ Message sent successfully!'))
      .catch(() => alert('❌ Failed to send message.'));
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-white flex flex-col items-center py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-2xl text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Let's Connect</h2>
        <div className="mx-auto w-24 h-1 bg-gray-800 rounded-full mb-6"></div>
        <p className="text-gray-600 mb-6">
          Whether you have a question, want to collaborate or just say hi — I'm always open.
        </p>

        {/* 💬 Add Buttons Here */}
        <ContactButtons />
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200"
      >
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="inline-block w-full sm:w-auto px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            🚀 Send Message
          </button>
        </div>
      </form>
    </motion.section>
  );
}
