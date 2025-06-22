import React from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaPhone } from 'react-icons/fa';

const ContactButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      <a
        href="mailto:hsrivastav099@gmail.com"
        className="inline-flex items-center px-5 py-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-full transition"
        target="_blank" rel="noreferrer"
      >
        <FaEnvelope className="mr-2" /> Email
      </a>
      <a
        href="https://wa.me/919161955178"
        className="inline-flex items-center px-5 py-2 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-full transition"
        target="_blank" rel="noreferrer"
      >
        <FaWhatsapp className="mr-2" /> WhatsApp
      </a>
      <a
        href="https://www.linkedin.com/in/harshsrivastav99"
        className="inline-flex items-center px-5 py-2 border border-blue-500 text-blue-700 hover:bg-blue-500 hover:text-white rounded-full transition"
        target="_blank" rel="noreferrer"
      >
        <FaLinkedin className="mr-2" /> LinkedIn
      </a>
      <a
        href="tel:+919161955178"
        className="inline-flex items-center px-5 py-2 border border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white rounded-full transition"
      >
        <FaPhone className="mr-2" /> Call
      </a>
    </div>
  );
};

export default ContactButtons;
