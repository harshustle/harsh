// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaUserTie,
  FaRocket,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaGraduationCap
} from 'react-icons/fa';

export default function About() {
  return (
    <motion.section
      className="py-16 bg-white px-6 text-left max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-4">
            <FaUserTie className="text-gray-700" /> About Me
          </h2>
          <p className="text-gray-800">
            Hey there! I’m <strong>Harsh Srivastav</strong>, a passionate and forward-thinking <strong>Full-Stack Developer</strong> and <strong>Tech Enthusiast</strong> based in India.
            I’m currently pursuing my <strong>B.Tech in Information Technology</strong> from <strong>Goal Institute of Technology and Management</strong>, with a strong academic performance of <strong>78.5%</strong>.
            Prior to that, I scored <strong>89.33%</strong> in Class 10th and <strong>78.6%</strong> in Class 12th — a reflection of my dedication and consistency in academics.
          </p>
        </div>
        
      </div>

      <div className="bg-gray-100 rounded p-4 mb-6">
        <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 text-gray-800">
          <FaGraduationCap /> Academic Snapshot
        </h4>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Class 10th:</strong> 89.33%</li>
          <li><strong>Class 12th:</strong> 78.6%</li>
          <li><strong>Graduation (B.Tech):</strong> 78.5%</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 flex items-center gap-2">
        <FaLaptopCode /> Technical Skills
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), Framer Motion</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB, SQL (Learning), Mongoose</li>
        <li><strong>Other Tools:</strong> Git, GitHub, EmailJS, Firebase, Vercel, Netlify</li>
        <li><strong>API Handling:</strong> REST APIs, Authentication</li>
        <li><strong>Automation/Workflow:</strong> n8n (Self-hosted automations), Social Media Agents</li>
        <li><strong>Cloud & Hosting:</strong> Vercel, Netlify, Firebase</li>
        <li><strong>Learning Curve:</strong> MongoDB, SQL, Quantum Computing, Data Warehousing & Data Mining, Twilio for call automation</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 flex items-center gap-2">
        <FaProjectDiagram /> Work & Projects
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Developed multiple <strong>portfolio websites</strong>, <strong>client-facing dashboards</strong>, and <strong>form-based SaaS products</strong>.</li>
        <li>Created <strong>landing pages</strong> and <strong>luxury-themed social media content</strong> under the brand name <strong>LuxTiar</strong>.</li>
        <li>Built <strong>Python scripts</strong> and automation flows optimized for mobile (e.g., Termux).</li>
        <li>Tutored students from <strong>classes 2 to 9</strong>, combining strong communication with academic mentoring.</li>
        <li>Contributed to academic research, including a <strong>review paper on Diabetes Prediction</strong> for AKTU.</li>
        <li>Developed a <strong>college website</strong> as part of a client freelance project.</li>
        <li>Built <strong>data scraping tools</strong> and automated pipelines for job boards and form responses.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 flex items-center gap-2">
        🧠 Soft Skills & Strengths
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Excellent <strong>communication</strong> and <strong>critical thinking</strong> skills</li>
        <li>Strong <strong>problem-solving ability</strong></li>
        <li>Highly <strong>organized</strong>, loves a clean and scalable codebase</li>
        <li>Self-driven learner with a <strong>growth mindset</strong></li>
        <li>Capable of managing multiple projects while meeting tight deadlines</li>
        <li>Experience in <strong>client onboarding</strong>, <strong>cold emailing</strong>, and <strong>media strategy</strong></li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 flex items-center gap-2">
        <FaRocket /> My Vision
      </h3>
      <p className="text-gray-800 mb-6">
        I’m not just here to code — I’m here to <strong>build</strong>, <strong>learn</strong>, and <strong>elevate ideas into digital reality</strong>.
        Whether it's crafting pixel-perfect frontends, setting up backend logic, or building automation pipelines, I believe in delivering value through clean, maintainable, and user-centric development.
      </p>
      <p className="text-gray-800 mb-6">
        My ultimate goal? To <strong>launch impactful digital services</strong>, scale my creative agency, and keep building tools that make life smarter and businesses faster.
      </p>

      <div className="flex justify-center mt-10">
        <a href="/HarshSrivastav_Resume.pdf" download className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
          <FaDownload className="mr-2" /> Download Resume
        </a>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mt-14 mb-4 flex items-center gap-2">
        <FaEnvelope /> Let’s Connect
      </h3>
      <p className="text-gray-800 text-lg">
        I’m always open to collaborations, internships, freelance projects, or even just a tech talk over coffee ☕<br />
        <FaEnvelope className="inline mr-2" /> <a href="mailto:hsrivastav099@gmail.com" className="text-blue-600 underline">hsrivastav099@gmail.com</a><br />
        <FaPhone className="inline mr-2" /> +91 9161955178<br />
      </p>
    </motion.section>
  );
}
