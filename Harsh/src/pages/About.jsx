import React from 'react';
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaUserTie,
  FaRocket,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaGraduationCap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaServer,
  FaInstagram,
  FaComments,
  FaBrain,
  FaCheckCircle,
  FaBolt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="bg-blue-300 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="py-16 px-6 text-left max-w-6xl mx-auto">
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
        <hr className="my-10 border-gray-300" />
        <h3 className="text-3xl pt-16 font-bold mb-10 text-center text-gray-800 dark:text-brown-900">🚀 Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { name: 'HTML', level: 95, Icon: FaHtml5 },
            { name: 'CSS / Tailwind', level: 90, Icon: FaCss3Alt },
            { name: 'JavaScript', level: 92, Icon: FaJsSquare },
            { name: 'React.js', level: 88, Icon: FaReact },
            { name: 'Node.js / Express', level: 85, Icon: FaNodeJs },
            { name: 'MongoDB', level: 80, Icon: FaDatabase },
            { name: 'REST APIs', level: 87, Icon: FaServer },
            { name: 'MySQL / SQL', level: 58, Icon: FaDatabase },
            { name: 'Redux & JSON APIs', level: 40, Icon: FaServer },
            { name: 'Git & GitHub', level: 90, Icon: FaGithub },
            { name: 'Postman & API Testing', level: 84, Icon: FaServer },
            { name: 'VS Code / Cursor.AI', level: 87, Icon: FaLaptopCode },
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <skill.Icon className="text-xl text-indigo-900 dark:text-indigo-900" />
                  <span className="font-medium text-gray-800 dark:text-black">{skill.name}</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-900">{skill.level}%</span>
              </div>
              <div className="w-full dark:bg-gray-100 rounded-full h-3">
                <motion.div
                  className="h-3 bg-gradient-to-r from-red-500 to-green-900 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
          <hr className="my-10 border-gray-300" />
        {/* 💼 Work & Projects */}
        <h3 className="text-2xl font-semibold text-gray-900 mt-18 mb-4 flex items-center gap-2">
          <FaProjectDiagram /> Work & Projects
        </h3>
        <ul className="grid sm:grid-cols-2 gap-3 text-gray-900 mb-6">
          <li className="flex items-center gap-2">
            <FaLaptopCode className="text-indigo-600" />
            Portfolio & dashboard websites
          </li>
          <li className="flex items-center gap-2">
            <FaRocket className="text-purple-600" />
            SaaS forms & automation flows
          </li>
          <li className="flex items-center gap-2">
            <FaReact className="text-cyan-600" />
            React-based landing pages
          </li>
          <li className="flex items-center gap-2">
            <FaInstagram className="text-pink-500" />
            Social media creatives (attitudemotivationmoney)
          </li>
          <li className="flex items-center gap-2">
            <FaGraduationCap className="text-yellow-500" />
            Academic review paper on Diabetes
          </li>
          <li className="flex items-center gap-2">
            <FaServer className="text-green-600" />
            Data scraping & backend tools
          </li>
        </ul>

        {/* 🧠 Soft Skills & Strengths */}
        <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          🧠 Soft Skills & Strengths
        </h3>
        <ul className="grid sm:grid-cols-2 gap-3 text-gray-900 mb-6">
          <li className="flex items-center gap-2">
            <FaComments className="text-blue-600" />
            Strong communicator & listener
          </li>
          <li className="flex items-center gap-2">
            <FaBrain className="text-pink-500" />
            Critical thinker & problem solver
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Organized & detail-oriented
          </li>
          <li className="flex items-center gap-2">
            <FaBolt className="text-yellow-500" />
            Self-driven with growth mindset
          </li>
          <li className="flex items-center gap-2">
            <FaProjectDiagram className="text-indigo-500" />
            Handles multi-project workloads
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-gray-700" />
            Cold emailing & client onboarding
          </li>
        </ul>

<hr className='my-10 border-gray-900' />

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

        <h3 className="text-2xl font-semibold text-gray-900  mt-14 mb-4 flex items-center gap-2">
          <FaEnvelope /> Let’s Connect
        </h3>
        <p className="text-gray-800 text-lg">
          I’m always open to collaborations, internships, freelance projects, or even just a tech talk over coffee ☕<br />
          <FaEnvelope className="inline mr-2" /> <a href="mailto:hsrivastav099@gmail.com" className="text-blue-600 underline">hsrivastav099@gmail.com</a><br />
          <FaPhone className="inline mr-2" /> +91 9161955178<br />
        </p>
      </div>
    </motion.section>
  );
}
