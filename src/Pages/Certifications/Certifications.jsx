// Certifications.jsx - Modern Certifications Section
import { motion } from "framer-motion";
import {
  FaAward,
  FaCertificate,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { SiUdemy, SiCoursera, SiFreecodecamp } from "react-icons/si";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Q-Spiders Pune",
      platform: "Q-Spiders",
      platformIcon: SiUdemy,
      date: "2024",
      credentialId: "QS-FSWD-2024",
      description: "Completed intensive full-stack web development training covering MERN stack, HTML, CSS, JavaScript, and modern web technologies.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
      link: "#",
      color: "from-purple-500 to-pink-500",
      featured: true,
    },
    {
      id: 2,
      title: "React.js Development",
      issuer: "Q-Spiders Pune",
      platform: "Q-Spiders",
      platformIcon: SiUdemy,
      date: "2023",
      credentialId: "QS-REACT-2023",
      description: "Advanced React.js training covering hooks, state management, routing, and building production-ready applications.",
      skills: ["React.js", "Redux", "React Router", "Hooks", "Context API"],
      link: "#",
      color: "from-cyan-500 to-blue-500",
      featured: true,
    },
    {
      id: 3,
      title: "Node.js & Express.js",
      issuer: "Q-Spiders Pune",
      platform: "Q-Spiders",
      platformIcon: SiUdemy,
      date: "2023",
      credentialId: "QS-NODE-2023",
      description: "Comprehensive training in Node.js and Express.js for building scalable server-side applications and RESTful APIs.",
      skills: ["Node.js", "Express.js", "REST API", "JWT", "Authentication"],
      link: "#",
      color: "from-green-500 to-emerald-500",
      featured: false,
    },
    {
      id: 4,
      title: "MongoDB Database",
      issuer: "Q-Spiders Pune",
      platform: "Q-Spiders",
      platformIcon: SiUdemy,
      date: "2023",
      credentialId: "QS-MDB-2023",
      description: "Training in MongoDB database design, CRUD operations, aggregation pipelines, and data modeling for modern applications.",
      skills: ["MongoDB", "Mongoose", "Database Design", "Aggregation", "Indexing"],
      link: "#",
      color: "from-green-500 to-green-400",
      featured: false,
    },
  ];

  const featuredCerts = certifications.filter(c => c.featured);
  const otherCerts = certifications.filter(c => !c.featured);

  return (
    <section id="certifications" className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#06070d] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[120px] animate-pulse" />
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
            Certifications
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="mt-3 sm:mt-4 w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Professional certifications and training that showcase my skills and expertise
          </p>
        </motion.div>

        {/* Featured Certifications */}
        {featuredCerts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-12"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              Featured Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredCerts.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} featured />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <FaCertificate className="text-cyan-400" />
            All Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCerts.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>

        {/* No Certifications Message */}
        {certifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No certifications added yet.</p>
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8"
        >
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <FaAward className="text-2xl text-yellow-400" />
            <div>
              <p className="text-xl font-bold text-white">{certifications.length}</p>
              <p className="text-xs text-gray-400">Certifications</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <FaCheckCircle className="text-2xl text-green-400" />
            <div>
              <p className="text-xl font-bold text-white">
                {certifications.filter(c => c.featured).length}
              </p>
              <p className="text-xs text-gray-400">Featured</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <FaCalendarAlt className="text-2xl text-purple-400" />
            <div>
              <p className="text-xl font-bold text-white">{certifications.length}+</p>
              <p className="text-xs text-gray-400">Skills Verified</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Certification Card Component
const CertificationCard = ({ cert, featured, index }) => {
  const PlatformIcon = cert.platformIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group relative bg-gradient-to-br from-[#111827] to-[#1a1a2e] rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-600/10 ${
        featured ? "md:col-span-1" : ""
      }`}
    >
      {/* Gradient Border */}
      <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-gradient-to-b ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Featured Badge */}
      {featured && (
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-medium shadow-lg">
          Featured
        </span>
      )}

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg`}>
          <FaAward className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {cert.title}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            <PlatformIcon className="text-sm text-gray-400" />
            <span className="text-sm text-gray-400">{cert.issuer}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        {cert.description}
      </p>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {cert.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-purple-400" />
            {cert.date}
          </span>
          {cert.credentialId && (
            <span className="text-gray-500">
              ID: {cert.credentialId}
            </span>
          )}
        </div>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-cyan-400 transition-colors duration-300"
        >
          Verify
          <FaExternalLinkAlt className="text-[10px]" />
        </a>
      </div>
    </motion.div>
  );
};

export default Certifications;