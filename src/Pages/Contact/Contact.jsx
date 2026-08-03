// Contact.jsx - Optimized to Avoid Spam Filters
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using the direct FormSubmit endpoint with your email
      const response = await fetch('https://formsubmit.co/ajax/omkar9617mane@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
          // These parameters help with deliverability
          _captcha: 'true', // Enable captcha to reduce spam
          _template: 'table',
          _subject: `Portfolio Contact - ${formData.name}`,
          _replyto: formData.email,
          _autoresponse: `Hi ${formData.name},

Thank you for contacting me! I've received your message and will get back to you within 24-48 hours.

Here's a copy of your message:
----------------------------------------
Subject: ${formData.subject}
Message: ${formData.message}
----------------------------------------

Best regards,
Omkar Mane
Portfolio: [Your Portfolio URL]`,
          _autoresponse_from: 'omkar9617mane@gmail.com',
          _autoresponse_subject: 'Thank you for your message - Omkar Mane',
          // Make it look more professional
          _formname: 'Portfolio Contact Form',
          _cc: 'omkar9617mane@gmail.com', // Send a copy to yourself
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error('FormSubmit Error:', data);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "omkar9617mane@gmail.com",
      link: "mailto:omkar9617mane@gmail.com",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 8625906485",
      link: "tel:+918625906485",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+91 8625906485",
      link: "https://wa.me/918625906485",
      color: "from-green-500 to-green-400",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Kolhapur, Maharashtra, India",
      link: null,
      color: "from-orange-500 to-yellow-400",
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/onkar-mane-7991a8247/", color: "hover:bg-blue-600" },
    { icon: FaGithub, label: "GitHub", url: "https://github.com/omkarmane902", color: "hover:bg-gray-600" },
    { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/omkarmane_96/?hl=en", color: "hover:bg-pink-600" },
    { icon: FaTwitter, label: "Twitter", url: "https://x.com/omkar_mane_96", color: "hover:bg-blue-400" },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#06070d] overflow-hidden">
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
            Contact
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="mt-3 sm:mt-4 w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-5 rounded-2xl bg-gradient-to-br from-[#111827] to-[#1a1a2e] border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/10"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0`}>
                    <info.icon />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.label === "WhatsApp" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-white hover:text-cyan-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#111827] to-[#1a1a2e] border border-white/10"
            >
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:text-white hover:border-transparent`}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#1a1a2e] border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <FaCheckCircle className="text-5xl text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                  <p className="text-gray-400 mt-2">Thank you for reaching out. I'll get back to you soon!</p>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-xs text-gray-500">📧 Email sent</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="+91 12345 67890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    📧 I'll respond to your email within 24-48 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;