// Skills.jsx - Fixed Version
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { MdAnimation } from "react-icons/md"; // Alternative for Animate UI

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
        { name: "React.js", icon: FaReact, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
        { name: "Animate UI", icon: MdAnimation, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
        { name: "Express.js", icon: SiExpress, color: "text-white", bg: "bg-white/5", border: "border-white/10" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
        { name: "SQL", icon: SiMysql, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
      ]
    },
    {
      title: "Tools & Design",
      icon: "🛠️",
      skills: [
        { name: "GitHub", icon: FaGithub, color: "text-gray-400", bg: "bg-white/5", border: "border-white/10" },
        { name: "Figma", icon: FaFigma, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { name: "Database", icon: FaDatabase, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
      ]
    }
  ];

  const allSkills = [
    { name: "HTML5", level: 90, color: "from-orange-500 to-orange-400" },
    { name: "CSS3", level: 85, color: "from-blue-500 to-blue-400" },
    { name: "JavaScript", level: 80, color: "from-yellow-500 to-yellow-400" },
    { name: "React.js", level: 75, color: "from-cyan-500 to-cyan-400" },
    { name: "Bootstrap", level: 85, color: "from-purple-500 to-purple-400" },
    { name: "Tailwind CSS", level: 80, color: "from-cyan-500 to-cyan-400" },
    { name: "Animate UI", level: 70, color: "from-pink-500 to-pink-400" },
    { name: "Node.js", level: 65, color: "from-green-500 to-green-400" },
    { name: "Express.js", level: 60, color: "from-gray-500 to-gray-400" },
    { name: "MongoDB", level: 60, color: "from-green-500 to-green-400" },
    { name: "SQL", level: 55, color: "from-blue-500 to-blue-400" },
    { name: "GitHub", level: 80, color: "from-gray-500 to-gray-400" },
    { name: "Figma", level: 70, color: "from-purple-500 to-purple-400" },
  ];

  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#06070d] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
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
            My Skills
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Tech <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <div className="mt-3 sm:mt-4 w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#111827] to-[#1a1a2e] rounded-2xl border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl ${skill.bg} border ${skill.border} hover:scale-105 transition-all duration-300`}
                  >
                    <skill.icon className={`${skill.color} text-base sm:text-lg`} />
                    <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#111827] to-[#1a1a2e] rounded-2xl border border-white/10 p-6 sm:p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Skill <span className="text-cyan-400">Proficiency</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {allSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-cyan-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.05, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {[
            { icon: FaHtml5, color: "text-orange-500", label: "HTML5" },
            { icon: FaCss3Alt, color: "text-blue-500", label: "CSS3" },
            { icon: FaJsSquare, color: "text-yellow-400", label: "JavaScript" },
            { icon: FaReact, color: "text-cyan-400", label: "React" },
            { icon: SiBootstrap, color: "text-purple-500", label: "Bootstrap" },
            { icon: SiTailwindcss, color: "text-cyan-400", label: "Tailwind" },
            { icon: MdAnimation, color: "text-pink-400", label: "Animate UI" },
            { icon: FaNodeJs, color: "text-green-500", label: "Node.js" },
            { icon: SiExpress, color: "text-white", label: "Express" },
            { icon: SiMongodb, color: "text-green-400", label: "MongoDB" },
            { icon: SiMysql, color: "text-blue-400", label: "SQL" },
            { icon: FaGithub, color: "text-gray-400", label: "GitHub" },
            { icon: FaFigma, color: "text-purple-400", label: "Figma" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-1 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <tech.icon className={`${tech.color} text-2xl sm:text-3xl`} />
              <span className="text-[10px] text-gray-500">{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;