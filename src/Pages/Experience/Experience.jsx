// Timeline.jsx - Chronological Timeline (College → Internship → Job)
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      type: "education",
      title: "Bachelor of Engineering (B.E.)",
      subtitle: "Computer Science & Engineering",
      institution: "Nanasaheb Mahadik College of Engineering",
      location: "Walwa, Sangli, Maharashtra",
      period: "2020 - 2024",
      description: [
        "Specialized in Computer Science and Engineering with focus on software development",
        "Completed projects in web development, database management, and software engineering",
        "Active participation in college technical events and workshops",
        "Developed strong foundation in programming, algorithms, and data structures",
      ],
      icon: FaGraduationCap,
      color: "from-purple-500 to-pink-500",
      badgeColor: "bg-purple-500",
      order: 1,
    },
    {
      id: 2,
      type: "work",
      title: "Internship Trainee",
      company: "Q-Spiders Pune",
      location: "Pune, Maharashtra",
      period: "2024 - 2025",
      description: [
        "Completed intensive training in full-stack web development",
        "Worked on real-world projects using MERN stack technologies",
        "Developed skills in React.js, Node.js, Express.js, and MongoDB",
        "Collaborated with mentors and peers on team projects",
      ],
      icon: FaUsers,
      color: "from-purple-500 to-pink-500",
      badgeColor: "bg-purple-500",
      order: 2,
    },
    {
      id: 3,
      type: "work",
      title: "Web Developer",
      company: "Walstar Technologies Pvt. Ltd",
      location: "Kolhapur, Maharashtra",
      period: "2026 - Present",
      description: [
        "Developing and maintaining web applications using React.js, Node.js, and modern JavaScript frameworks",
        "Collaborating with cross-functional teams to deliver high-quality software solutions",
        "Implementing responsive UI designs and optimizing application performance",
        "Working on full-stack development projects with MongoDB and Express.js",
      ],
      icon: FaCode,
      color: "from-cyan-500 to-blue-500",
      badgeColor: "bg-cyan-500",
      order: 3,
    },
  ];

  // Sort by order (chronological: college → internship → job)
  const sortedData = [...timelineData].sort((a, b) => a.order - b.order);

  // Get icon for each item
  const getIcon = (type) => {
    switch (type) {
      case "education":
        return <FaGraduationCap className="text-white text-lg sm:text-xl" />;
      case "internship":
        return <FaUsers className="text-white text-lg sm:text-xl" />;
      case "work":
        return <FaCode className="text-white text-lg sm:text-xl" />;
      default:
        return <FaBriefcase className="text-white text-lg sm:text-xl" />;
    }
  };

  return (
    <section 
      id="timeline" 
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-[#06070d] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-indigo-600/5 blur-[100px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs md:text-sm tracking-widest uppercase text-purple-300">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 animate-pulse"></span>
            My Journey
          </span>
          <h2 className="mt-3 sm:mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <div className="mt-2 sm:mt-3 md:mt-4 w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">
            My journey from education to professional career
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-400 to-cyan-500 opacity-30" />

          {/* Mobile Vertical Line - Shown only on mobile */}
          <div className="sm:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-400 to-cyan-500 opacity-30" />

          {sortedData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              {/* Timeline Dot with Icon - Desktop */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${item.badgeColor} flex items-center justify-center shadow-lg shadow-purple-500/30 border-2 border-white/10`}>
                  {getIcon(item.type)}
                </div>
              </div>

              {/* Timeline Dot with Number - Mobile */}
              <div className="sm:hidden absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className={`w-10 h-10 rounded-full ${item.badgeColor} flex items-center justify-center shadow-lg shadow-purple-500/30 border-2 border-white/10`}>
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full ${index % 2 === 0 ? 'sm:pr-[calc(50%+40px)]' : 'sm:pl-[calc(50%+40px)]'} pl-14 sm:pl-0`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative bg-gradient-to-br from-[#111827] to-[#1a1a2e] rounded-2xl border border-white/10 p-4 sm:p-5 md:p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/10"
                >
                  {/* Gradient Border Line */}
                  <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="flex-1 min-w-0">
                      {/* Badge */}
                      <span className={`inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                        item.type === "work" 
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/20" 
                          : "bg-purple-500/20 text-purple-300 border border-purple-500/20"
                      }`}>
                        {item.type === "work" ? "💼 Work" : "🎓 Education"}
                      </span>

                      {/* Title */}
                      <h3 className="mt-1.5 sm:mt-2 text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 break-words">
                        {item.title}
                      </h3>

                      {/* Subtitle/Company */}
                      {item.type === "work" ? (
                        <p className="text-purple-400 font-medium text-xs sm:text-sm">{item.company}</p>
                      ) : (
                        <p className="text-cyan-400 font-medium text-xs sm:text-sm">{item.subtitle}</p>
                      )}
                    </div>

                    {/* Mobile Icon */}
                    <div className={`sm:hidden w-8 h-8 rounded-full ${item.badgeColor} flex items-center justify-center shadow-lg shadow-purple-500/30 border border-white/10 flex-shrink-0`}>
                      {getIcon(item.type)}
                    </div>
                  </div>

                  {/* Institution/Company */}
                  {item.type === "education" && (
                    <p className="text-gray-300 font-medium text-xs sm:text-sm mt-1">{item.institution}</p>
                  )}

                  {/* Location & Period */}
                  <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-purple-400 text-[10px] sm:text-xs" />
                      <span className="break-words">{item.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-cyan-400 text-[10px] sm:text-xs" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm text-gray-400">
                        <span className={`mt-1 text-${item.type === "work" ? "cyan" : "purple"}-400 text-[10px] sm:text-xs flex-shrink-0`}>▸</span>
                        <span className="break-words">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Glow */}
                  <div className={`absolute -bottom-12 -right-12 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                </motion.div>
              </div>

              {/* Connecting Arrow - Mobile */}
              {index < sortedData.length - 1 && (
                <div className="sm:hidden absolute left-6 top-full transform -translate-x-1/2 mt-2">
                  <FaArrowRight className="text-purple-500/30 text-xs rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600/10 to-cyan-500/10 border border-white/10">
            <span className="text-sm sm:text-base">🎓</span>
            <span className="text-[10px] sm:text-xs md:text-sm text-gray-300">College</span>
            <span className="text-gray-500 text-[10px] sm:text-xs">→</span>
            <span className="text-sm sm:text-base">💼</span>
            <span className="text-[10px] sm:text-xs md:text-sm text-gray-300">Internship</span>
            <span className="text-gray-500 text-[10px] sm:text-xs">→</span>
            <span className="text-sm sm:text-base">🚀</span>
            <span className="text-[10px] sm:text-xs md:text-sm text-cyan-400 font-medium">Web Developer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;