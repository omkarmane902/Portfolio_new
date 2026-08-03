// src/Pages/Loading/Loading.jsx
import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        {/* Logo Animation */}
        <div className="loading-logo">
          <div className="logo-ring">
            <div className="logo-ring-inner"></div>
            <div className="logo-ring-outer"></div>
          </div>
          <div className="logo-text">
            <span className="logo-first">O</span>
            <span className="logo-second">M</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="loading-progress-wrapper">
          <div className="loading-progress-bar">
            <div 
              className="loading-progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="loading-progress-text">{progress}%</span>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;