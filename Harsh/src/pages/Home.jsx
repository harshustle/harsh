// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaFileDownload, FaArrowUp } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import profilePic from '../assets/harsh.jpg';
import Connect from './connect';

export default function Home() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.section
            className="scroll-smooth bg-white text-gray-800 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Background shapes */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
                <div className="absolute w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>
            </div>

            {/* Hero Section */}
            <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 max-w-6xl mx-auto relative z-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Harsh Srivastav 👋</h1>
                    <h2 className="text-xl text-gray-700 font-medium mb-6 block">
                        <Typewriter
                            words={['Full Stack Developer', 'Tech Enthusiast', 'Freelancer']}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full shadow-md"
                        >
                            <FaLaptopCode className="inline mr-2" /> View My Work
                        </a>
                        <a
                            href="/Harsh_Resume.pdf"
                            download
                            className="border border-gray-800 hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-full"
                        >
                            <FaFileDownload className="inline mr-2" /> Download Resume
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src={profilePic}
                        alt="Harsh Srivastav"
                        className="w-64 h-64 object-cover rounded-lg shadow-md border border-gray-200"
                    />
                </div>
            </div>

            {/* Sections */}
            <div id="about"><About /></div>
            <div id="projects"><Projects /></div>
            <div id="connect"><Connect /></div>
            <div id="contact"><Contact /></div>

            {/* Scroll To Top */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-md z-50"
            >
                <FaArrowUp />
            </button>
        </motion.section>
    );
}