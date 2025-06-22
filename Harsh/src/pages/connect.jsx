// src/components/Connect.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

export default function Connect() {
  return (
    <motion.section
      className="py-16 px-6 bg-white text-gray-800 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
      <p className="text-lg text-gray-600 mb-8">
        Whether it's a project, job opportunity, or just a friendly hello — I'd love to hear from you.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="mailto:hsrivastav099@gmail.com"
          className="flex items-center gap-2 border px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 shadow-md"
        >
          <FaEnvelope /> hsrivastav099@gmail.com
        </a>
        <a
          href="tel:+919161955178"
          className="flex items-center gap-2 border px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 shadow-md"
        >
          <FaPhoneAlt /> +91 9161955178
        </a>
        <a
          href="https://www.linkedin.com/in/harshustle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 shadow-md"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/harshustle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 shadow-md"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://leetcode.com/harshustle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 shadow-md"
        >
          <FaCode /> LeetCode
        </a>
      </div>
    </motion.section>
  );
}
