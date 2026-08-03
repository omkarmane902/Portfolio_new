import profile from "../../Assets/omkar.png";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaHandshake,
} from "react-icons/fa";

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const infoItems = [
    { icon: FaMapMarkerAlt, label: "Location", value: "Ichalkaranji  Maharashtra " },
    { icon: FaGraduationCap, label: "Education", value: "Bachelor of Engineering (B.E.)" },
    { icon: FaBriefcase, label: "Current Role", value: "Web Developer" },
    { icon: FaEnvelope, label: "Email", value: "omkar9617mane@gmail.com" },
  ];

  const specialties = [
    { icon: FaCode, label: "Frontend Development", color: "from-blue-500 to-cyan-400", desc: "React, HTML, CSS, JS" },
    { icon: FaServer, label: "Backend Development", color: "from-purple-500 to-pink-400", desc: "Node.js, Express (Learning)" },
    { icon: FaDatabase, label: "Database Management", color: "from-orange-500 to-yellow-400", desc: "MongoDB, SQL" },
  ];


  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#06070d] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[130px] animate-pulse" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-indigo-600/5 blur-[100px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm tracking-widest uppercase text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            About Me
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Know Me <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Better</span>
          </h2>
          <div className="mt-3 sm:mt-4 w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Animated Rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-purple-500/20 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-cyan-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              
              {/* Profile Card */}
              <div className="relative bg-gradient-to-br from-[#111827] to-[#1a1a2e] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 via-transparent to-cyan-500/5" />
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 p-1">
                        <div className="w-full h-full rounded-full bg-[#111827] flex items-center justify-center text-4xl sm:text-5xl">
                          <img src={profile} alt="Profile" className="h-25" />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-500 border-2 border-[#111827] flex items-center justify-center text-xs">
                        💼
                      </div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mt-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Onkar Mane</h3>
                    <p className="text-cyan-400 text-sm sm:text-base font-medium">Web Developer</p>
                    <p className="text-xs text-gray-500 mt-1">Learning Backend Development</p>
                  </div>

                  {/* Divider */}
                  <div className="flex justify-center my-4">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  </div>

                  {/* Info Items */}
                  <div className="space-y-3">
                    {infoItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                          <item.icon className="text-sm sm:text-base" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">{item.label}</p>
                          <p className="text-xs sm:text-sm font-medium text-white">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Company Badge */}
                  <div className="mt-4 p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 flex items-center justify-center gap-2">
                    <FaLaptopCode className="text-blue-400" />
                    <span className="text-xs sm:text-sm text-gray-300">Working at Company</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Greeting */}
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">👋</span>
              <span className="text-gray-300 text-sm sm:text-base">Hello, I'm</span>
            </div>

            {/* Name */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Onkar Mane
              </span>
            </h3>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed sm:leading-8">
              <p>
                I'm a <span className="text-white font-medium">Web Developer</span> currently working at a company, 
                specializing in <span className="text-white font-medium">frontend development</span> with React and modern 
                JavaScript frameworks. I'm also actively <span className="text-cyan-400 font-medium">learning backend development </span> 
                to become a full-stack developer.
              </p>
              <p>
                With <span className="text-white font-medium">1+ years of professional experience</span>, I've delivered 
                over 8+ projects with a focus on creating beautiful, performant, and accessible web applications.
              </p>
              <p className="text-cyan-400/80">
                🚀 Currently expanding my skills in Node.js, Express, and MongoDB to build end-to-end applications.
              </p>
            </div>

            {/* Specialties */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {specialties.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-white">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Learning Badge */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-600/10 to-cyan-500/10 border border-purple-500/20">
              <span className="text-2xl">📚</span>
              <div>
                <p className="text-sm font-medium text-white">Currently Learning</p>
                <p className="text-xs text-gray-400">Backend Development • Node.js • Express • MongoDB</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="group flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleDownloadCV}
                className="group flex items-center justify-center gap-2 sm:gap-3 rounded-full border text-amber-50  border-white/20 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base hover:border-cyan-400 hover:bg-white/5 transition-all duration-300 cursor-pointer " 
              >
                <FaDownload className="group-hover:-translate-y-1 transition-transform" color="#fff" />
                Download CV
              </button>
              <button
                onClick={scrollToContact}
                className="btn group flex items-center justify-center rounded-full border border-white/20 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base hover:border-purple-400 hover:bg-white/5 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>

     
      </div>
    </section>
  );
};

export default About;