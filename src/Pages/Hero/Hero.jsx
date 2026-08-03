import profile from "../../assets/omkar1.png";
import './Hero.css'
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";



const floating = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatingDelay = (delay) => ({
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Onkar_Mane_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#06070d] text-white pt-14  relative min-h-screen overflow-hidden bg-[#06070d] text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-44 -left-32 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[130px] animate-pulse" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Animated Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm tracking-widest uppercase text-purple-300 hover:border-purple-500/50 transition-colors duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              MERN Stack Developer
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
            >
              Hi, I'm
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Onkar Mane
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200"
            >
              Building Modern Digital Experiences
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4 sm:mt-6 max-w-xl mx-auto lg:mx-0 text-gray-400 leading-relaxed sm:leading-8 text-sm sm:text-base"
            >
              Passionate Frontend & MERN Stack Developer focused on
              creating beautiful, fast and scalable web applications
              using React, Node.js, Express and MongoDB.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:justify-start hbth"
            >
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 w-full sm:w-auto justify-center"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
              </button>

              <button
                onClick={handleDownloadCV}
                className="group flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base hover:border-cyan-400 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <FaDownload className="group-hover:-translate-y-1 transition-transform text-sm sm:text-base" />
                Download CV
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 sm:mt-10 flex gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/omkarmane902"
                className="group h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="group-hover:text-white text-gray-400 transition-colors text-base sm:text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/onkar-mane-7991a8247/"
                className="group h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="group-hover:text-white text-gray-400 transition-colors text-base sm:text-lg" />
              </a>
              <a
                href="https://www.instagram.com/omkarmane_96/?hl=en"
                className="group h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:border-pink-400 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="group-hover:text-white text-gray-400 transition-colors text-base sm:text-lg" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT - PROFILE IMAGE IN CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            {/* Main Circle Container */}
            <div className="relative">
              {/* Outer Animated Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-cyan-500/40 shadow-[0_0_80px_#6d28d9] animate-spin-slow" />
              
              {/* Second Ring */}
              <div className="absolute inset-[-8px] rounded-full border-2 border-purple-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

              {/* Inner Glow */}
              <div className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-purple-700/20 to-cyan-500/10 blur-2xl" />

              {/* Circle Background */}
              <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-500/20 z-10" />
                
                {/* Profile Image - Fits Perfectly in Circle */}
                <img
                  src={profile}
                  alt="Onkar Mane"
                  className="w-full h-full object-cover object-center scale-110 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Tech Icons - Positioned Around the Circle */}
              
              {/* React - Top Left */}
              <motion.div
                variants={floating}
                animate="animate"
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-5 md:-left-5 z-30"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-2xl bg-[#111827] border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-xl sm:text-2xl md:text-3xl shadow-lg shadow-cyan-500/20 backdrop-blur-sm hover:scale-110 transition-transform">
                  <SiReact />
                </div>
              </motion.div>

              {/* Node.js - Top Right */}
              <motion.div
                variants={floatingDelay(0.6)}
                animate="animate"
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 z-30"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-2xl bg-[#111827] border border-green-400/40 flex items-center justify-center text-green-500 text-xl sm:text-2xl md:text-3xl shadow-lg shadow-green-500/20 backdrop-blur-sm hover:scale-110 transition-transform">
                  <SiNodedotjs />
                </div>
              </motion.div>

              {/* MongoDB - Bottom Left */}
              <motion.div
                variants={floatingDelay(0.3)}
                animate="animate"
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-5 z-30"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-2xl bg-[#111827] border border-green-600/40 flex items-center justify-center text-green-400 text-xl sm:text-2xl md:text-3xl shadow-lg shadow-green-600/20 backdrop-blur-sm hover:scale-110 transition-transform">
                  <SiMongodb />
                </div>
              </motion.div>

              {/* Express - Bottom Right */}
              <motion.div
                variants={floatingDelay(0.9)}
                animate="animate"
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 z-30"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-2xl bg-[#111827] border border-white/20 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl shadow-lg shadow-white/10 backdrop-blur-sm hover:scale-110 transition-transform">
                  <SiExpress />
                </div>
              </motion.div>

              {/* JavaScript - Top Center (Hidden on small screens) */}
              <motion.div
                variants={floatingDelay(1.2)}
                animate="animate"
                className="absolute -top-8 left-1/2 -translate-x-1/2 z-30 hidden sm:flex"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-[#111827] border border-yellow-400/40 flex items-center justify-center text-yellow-400 text-xl sm:text-2xl shadow-lg shadow-yellow-400/20 backdrop-blur-sm hover:scale-110 transition-transform">
                  <SiJavascript />
                </div>
              </motion.div>

              {/* Tailwind CSS - Bottom Center (Hidden on small screens) */}
              <motion.div
                variants={floatingDelay(0.8)}
                animate="animate"
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 hidden sm:flex"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-[#111827] border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-xl sm:text-2xl shadow-lg shadow-cyan-400/20 backdrop-blur-sm hover:scale-110 transition-transform">
                  <SiTailwindcss />
                </div>
              </motion.div>

              {/* Experience Card - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 shadow-xl hidden sm:block"
              >
                <p className="text-gray-300 text-[10px] sm:text-xs">Experience</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">1+</h3>
                <p className="text-[10px] sm:text-xs text-gray-400">Years</p>
              </motion.div>

              {/* Projects Card - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 shadow-xl hidden sm:block"
              >
                <p className="text-gray-300 text-[10px] sm:text-xs">Projects</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">8+</h3>
                <p className="text-[10px] sm:text-xs text-gray-400">Completed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="h-8 sm:h-10 md:h-14 w-[2px] bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
        <p className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] md:text-xs tracking-[3px] sm:tracking-[4px] md:tracking-[5px] text-gray-500 font-medium">
          SCROLL
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;