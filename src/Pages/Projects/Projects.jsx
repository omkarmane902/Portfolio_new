import { useState } from "react";
import portfolioImage from "../../assets/portfolio.png";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaSearch,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
} from "react-icons/si";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform with payment integration, cart management, and admin dashboard.",
      image: "🛒",
      category: "fullstack",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      icons: [FaReact, FaNodeJs, SiExpress, SiMongodb, SiTailwindcss],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },

    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website with dark mode, animations, and contact form.",
      image: (
        <img
          src={portfolioImage}
          alt="Portfolio"
          className="w-full h-full object-cover"
        />
      ),
      category: "frontend",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      icons: [FaReact, SiTailwindcss, FaCode],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },

    {
      id: 3,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, task boards, and team features.",
      image: "📋",
      category: "fullstack",
      tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      icons: [FaReact, FaNodeJs, SiExpress, SiMongodb, SiBootstrap],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },

    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with interactive maps, forecasts, and location-based services.",
      image: "🌤️",
      category: "frontend",
      tech: ["JavaScript", "HTML5", "CSS3", "API Integration"],
      icons: [SiJavascript, FaCode],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },

    {
      id: 5,
      title: "Blog Platform",
      description:
        "Full-stack blog platform with user authentication, rich text editor, and comment system.",
      image: "📝",
      category: "fullstack",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      icons: [FaReact, FaNodeJs, SiExpress, SiMongodb, SiTailwindcss],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },

    {
      id: 6,
      title: "Chat Application",
      description:
        "Real-time chat application with private rooms, file sharing, and video call features.",
      image: "💬",
      category: "backend",
      tech: ["Node.js", "Express", "WebSocket", "MongoDB"],
      icons: [FaNodeJs, SiExpress, FaDatabase, SiMongodb],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },

    {
      id: 7,
      title: "React Search Filter",
      description:
        "Interactive search filter application with real-time filtering, category sorting, and smooth animations.",
      image: "🔎",
      category: "smallfeatures",
      tech: ["React", "CSS3", "JavaScript", "Hooks"],
      icons: [FaReact, SiJavascript, FaSearch, FaCode],
      github: "https://github.com/omkarmane902/React/tree/main/Search_Filter",
      live: "https://omkar-react-filter-2026.netlify.app/",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "smallfeatures", label: "Small Features" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#06070d] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[120px] animate-pulse" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-indigo-600/5 blur-[100px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm tracking-widest uppercase text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            Portfolio
          </span>

          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mt-3 sm:mt-4 w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of the projects I've worked on. Each project
            reflects my commitment to quality and innovation.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/25"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {filter === "all" && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              Featured Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured
                />
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* No Projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};


// Project Card
const ProjectCard = ({ project, featured }) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-[#111827] to-[#1a1a2e] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-600/10 ${
        featured ? "md:col-span-1" : ""
      }`}
    >

      {/* Image */}
      <div className="relative h-48 flex items-center justify-center text-6xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 overflow-hidden">
        {typeof project.image === "string" ? (
          <span className="transform group-hover:scale-110 transition-transform duration-500">
            {project.image}
          </span>
        ) : (
          <div className="w-full h-full">
            {project.image}
          </div>
        )}

        {featured && (
          <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-medium shadow-lg">
            Featured
          </span>
        )}

        {project.category === "smallfeatures" && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white text-xs font-medium shadow-lg">
            ✨ Mini Project
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">

        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Icons */}
        <div className="mt-4 flex gap-2">
          {project.icons.map((Icon, index) => (
            <div
              key={index}
              className="p-1.5 rounded-lg bg-white/5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
            >
              <Icon className="text-sm" />
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex gap-3 flex-wrap">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-purple-600 hover:border-purple-400 hover:text-white transition-all duration-300"
          >
            <FaGithub className="text-sm" />
            Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-600/25"
          >
            <FaExternalLinkAlt className="text-sm" />
            Live Demo
          </a>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default Projects;