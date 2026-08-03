// Footer.jsx - Complete Modern Footer Section
import { motion } from "framer-motion";
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#timeline" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/omkarmane902", label: "GitHub", color: "hover:text-white" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/onkar-mane-7991a8247/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaInstagram, url: "https://www.instagram.com/omkarmane_96/?hl=en", label: "Instagram", color: "hover:text-pink-400" },
    { icon: FaTwitter, url: "https://x.com/omkar_mane_96", label: "Twitter", color: "hover:text-blue-400" },
  ];

  return (
    <footer className="relative bg-[#06070d] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-700/5 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-600/20">
                OM
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Onkar
                  </span>
                  <span className="text-white"> Mane</span>
                </span>
                <p className="text-xs text-gray-500">Web Developer</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Passionate web developer creating beautiful, performant, 
              and accessible digital experiences for the modern web.
            </p>

            <div className="flex gap-3 mt-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10`}
                  aria-label={social.label}
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-cyan-400"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-purple-400"></span>
              Contact Info
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <FaEnvelope className="text-cyan-400 text-sm mt-0.5 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:omkar9617mane@gmail.com"
                  className="hover:text-cyan-400 transition-colors break-all"
                >
                  omkar9617mane@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <FaPhone className="text-purple-400 text-sm mt-0.5 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+918625906485"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +91 8625906485
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm group">
                <FaMapMarkerAlt className="text-pink-400 text-sm mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Kolhapur, Maharashtra, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-pink-400"></span>
              Let's Connect
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Have a project in mind? Let's collaborate and build something amazing together!
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40"
              >
                <FaCode className="text-sm" />
                <span>Hire Me</span>
                <FaArrowUp className="text-xs rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://wa.me/918625906485"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300"
              >
                <FaPhone className="text-sm" />
                <span>WhatsApp Me</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray-500">
            © {currentYear} <span className="text-white">Onkar Mane</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-red-400"
            >
              <FaHeart className="inline" />
            </motion.span>
            <span>by</span>
            <span className="text-white">Onkar Mane</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300 text-xs hover:shadow-lg hover:shadow-purple-600/10"
          >
            <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            Back to Top
          </button>
        </motion.div>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;