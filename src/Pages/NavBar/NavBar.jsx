// src/Pages/NavBar/NavBar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { IoMdSend } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaHome,
  FaEnvelope,
  FaCertificate,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", icon: <FaHome />, id: "home" },
  { name: "About", icon: <FaUser />, id: "about" },
  { name: "Skill", icon: <FaCode />, id: "skills" },
  { name: "Project", icon: <FaProjectDiagram />, id: "projects" },
  { name: "Experience", icon: <FaBriefcase />, id: "timeline" },
  { name: "Certifications", icon: <FaCertificate />, id: "certifications" },
  { name: "Contact", icon: <FaEnvelope />, id: "contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body overflow for mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  const handleHireMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection("contact");
      closeMenu();
    }
  };

  return (
    <>
      <div className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo" />

          <ul className="nav-links desktop-only">
            {navLinks.map((item) => {
              const linkName = item.name;
              const linkIcon = item.icon;
              const linkId = item.id;
              const isActive = activeSection === linkId;
              return (
                <li key={linkName}>
                  <a
                    href={"#" + linkId}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(linkId);
                    }}
                  >
                    {linkIcon}
                    <span>{linkName}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <button className="btn desktop-only" onClick={handleHireMe}>
              <span>Hire Me</span>
              <IoMdSend />
            </button>

            <button className="hamburger" onClick={openMenu} aria-label="Open menu">
              <GiHamburgerMenu />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-overlay ${isOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src={logo} alt="Logo" className="logo-small" />
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            ✕
          </button>
        </div>

        <div className="mobile-links">
          {navLinks.map((item) => {
            const linkName = item.name;
            const linkIcon = item.icon;
            const linkId = item.id;
            const isActive = activeSection === linkId;
            return (
              <a
                key={linkName}
                href={"#" + linkId}
                className={isActive ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(linkId);
                }}
              >
                {linkIcon}
                <span>{linkName}</span>
              </a>
            );
          })}
          <button className="btn mobile-hire-btn" onClick={handleHireMe}>
            <span>Hire Me</span>
            <IoMdSend />
          </button>
        </div>
      </div>

      {isOpen && <div className="mobile-backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default NavBar;