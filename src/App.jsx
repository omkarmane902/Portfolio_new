// src/App.jsx - Simple Version
import React, { useState } from 'react';
import './App.css';
import NavBar from './Pages/NavBar/NavBar';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Experience from './Pages/Experience/Experience';
import Certifications from './Pages/Certifications/Certifications';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Loading from './Pages/Loading/Loading';
import Schema from './Pages/Schema/Schema';



function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <Loading onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="App">
      <Schema/>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;