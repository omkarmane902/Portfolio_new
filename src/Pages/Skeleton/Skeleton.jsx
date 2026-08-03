// src/Pages/Skeleton/Skeleton.jsx
import React from 'react';
import './Skeleton.css';

export const SkeletonHero = () => {
  return (
    <div className="skeleton-hero">
      <div className="skeleton-container">
        <div className="skeleton-content">
          <div className="skeleton-badge"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-title short"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text shorter"></div>
          <div className="skeleton-buttons">
            <div className="skeleton-btn"></div>
            <div className="skeleton-btn secondary"></div>
          </div>
        </div>
        <div className="skeleton-image">
          <div className="skeleton-circle"></div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonAbout = () => {
  return (
    <div className="skeleton-about">
      <div className="skeleton-container">
        <div className="skeleton-section-header">
          <div className="skeleton-badge"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-text center"></div>
        </div>
        <div className="skeleton-about-grid">
          <div className="skeleton-about-content">
            <div className="skeleton-title small"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-info-grid">
              <div className="skeleton-info-item"></div>
              <div className="skeleton-info-item"></div>
              <div className="skeleton-info-item"></div>
              <div className="skeleton-info-item"></div>
            </div>
          </div>
          <div className="skeleton-about-image">
            <div className="skeleton-card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonSkills = () => {
  return (
    <div className="skeleton-skills">
      <div className="skeleton-container">
        <div className="skeleton-section-header">
          <div className="skeleton-badge"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-text center"></div>
        </div>
        <div className="skeleton-skills-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-skill-card">
              <div className="skeleton-skill-icon"></div>
              <div className="skeleton-title small"></div>
              <div className="skeleton-skill-tags">
                <div className="skeleton-tag"></div>
                <div className="skeleton-tag"></div>
                <div className="skeleton-tag"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkeletonProjects = () => {
  return (
    <div className="skeleton-projects">
      <div className="skeleton-container">
        <div className="skeleton-section-header">
          <div className="skeleton-badge"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-text center"></div>
        </div>
        <div className="skeleton-projects-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-project-card">
              <div className="skeleton-project-image"></div>
              <div className="skeleton-project-content">
                <div className="skeleton-title small"></div>
                <div className="skeleton-text short"></div>
                <div className="skeleton-project-tags">
                  <div className="skeleton-tag small"></div>
                  <div className="skeleton-tag small"></div>
                  <div className="skeleton-tag small"></div>
                </div>
                <div className="skeleton-project-links">
                  <div className="skeleton-btn small"></div>
                  <div className="skeleton-btn small secondary"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonHero;