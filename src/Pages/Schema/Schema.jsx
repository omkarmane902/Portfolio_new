// src/Pages/Schema/Schema.jsx
import React from 'react';
// ✅ Import your portfolio data (correct path: ../../data/portfolioData)
import portfolioData from '../data/portfolioData';
import "./Schema.css"; // Import the CSS file for styling

const Schema = () => {
  // Get data from your portfolio
  const { personal, hero, socialLinks, skills, stats, experience, education } = portfolioData;

  // ============================================
  // 1. PERSON SCHEMA - Who you are
  // ============================================
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personal.fullName,
    "givenName": personal.firstName,
    "jobTitle": personal.role,
    "description": personal.description,
    "email": personal.emails?.[0] || "",
    "telephone": personal.phone || "",
    "url": window.location.origin,
    "sameAs": Object.values(socialLinks).filter(link => link),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personal.location?.split(',')[0] || "",
      "addressRegion": personal.location?.split(',')[1]?.trim() || "",
      "addressCountry": "India"
    },
    "knowsLanguage": personal.languages || [],
    "knowsAbout": [
      ...(skills.frontend || []),
      ...(skills.backend || []),
      ...(skills.database || []),
      ...(skills.tools || [])
    ]
  };

  // ============================================
  // 2. WEBSITE SCHEMA - What your site is about
  // ============================================
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${personal.fullName} - ${personal.role}`,
    "description": hero.description || personal.description,
    "url": window.location.origin,
    "author": {
      "@type": "Person",
      "name": personal.fullName
    }
  };

  // ============================================
  // 3. BREADCRUMB SCHEMA - Site navigation structure
  // ============================================
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": `${window.location.origin}/#projects`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": `${window.location.origin}/#about`
      }
    ]
  };

  // ============================================
  // 4. PROFILE PAGE SCHEMA - Your profile details
  // ============================================
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": `${personal.fullName} - Portfolio`,
    "description": personal.description,
    "about": {
      "@type": "Person",
      "name": personal.fullName,
      "jobTitle": personal.role
    },
    "mainEntity": {
      "@type": "Person",
      "name": personal.fullName
    }
  };

  // ============================================
  // 5. COLLECTION PAGE SCHEMA - Projects/Portfolio
  // ============================================
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${personal.fullName}'s Projects`,
    "description": "Collection of web development projects",
    "url": `${window.location.origin}/#projects`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "position": 1,
          "name": "React Projects",
          "description": "Modern React applications"
        },
        {
          "@type": "CreativeWork",
          "position": 2,
          "name": "Full Stack Projects",
          "description": "MERN stack applications"
        }
      ]
    }
  };

  // ============================================
  // 6. CONTACT PAGE SCHEMA - How to reach you
  // ============================================
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Onkar Mane",
    "description": "Get in touch with Onkar Mane",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "Professional",
      "email": personal.emails?.[0] || "",
      "telephone": personal.phone || "",
      "availableLanguage": personal.languages || []
    }
  };

  // ============================================
  // 7. SKILLS SCHEMA - What you're good at
  // ============================================
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Technical Skills",
    "description": "List of technical skills and technologies",
    "itemListElement": [
      ...(skills.frontend || []).map((skill, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": skill,
        "description": `Frontend development with ${skill}`
      })),
      ...(skills.backend || []).map((skill, index) => ({
        "@type": "ListItem",
        "position": (skills.frontend?.length || 0) + index + 1,
        "name": skill,
        "description": `Backend development with ${skill}`
      }))
    ]
  };

  // ============================================
  // 8. STATISTICS SCHEMA - Your achievements
  // ============================================
  const statsSchema = {
    "@context": "https://schema.org",
    "@type": "QuantitativeValue",
    "name": "Portfolio Statistics",
    "description": ` ${stats.map(stat => `${stat.title}: ${stat.value}`).join(', ')}`
  };

  return (
    <>
      {/* ========================================== */}
      {/* ALL JSON-LD SCHEMAS */}
      {/* ========================================== */}
      
      {/* 1. Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      
      {/* 2. Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* 3. Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* 4. Profile Page Schema */}
      <script type="application/ld+json">
        {JSON.stringify(profilePageSchema)}
      </script>
      
      {/* 5. Collection Page Schema */}
      <script type="application/ld+json">
        {JSON.stringify(collectionPageSchema)}
      </script>
      
      {/* 6. Contact Page Schema */}
      <script type="application/ld+json">
        {JSON.stringify(contactPageSchema)}
      </script>
      
      {/* 7. Skills Schema */}
      <script type="application/ld+json">
        {JSON.stringify(skillsSchema)}
      </script>
      
      {/* 8. Statistics Schema */}
      <script type="application/ld+json">
        {JSON.stringify(statsSchema)}
      </script>

      {/* ========================================== */}
      {/* META TAGS FOR SEO */}
      {/* ========================================== */}
      
      {/* Basic Meta Tags */}
      <title>{personal.fullName} - {personal.role} | Portfolio</title>
      <meta name="description" content={hero.description || personal.description} />
      <meta name="keywords" content={[
        personal.fullName,
        personal.role,
        ...(skills.frontend || []),
        ...(skills.backend || []),
        "Portfolio",
        "Web Developer",
        "React Developer",
        "MERN Stack"
      ].join(", ")} />
      <meta name="author" content={personal.fullName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.origin} />
      <meta property="og:title" content={`${personal.fullName} - ${personal.role} Portfolio`} />
      <meta property="og:description" content={hero.description || personal.description} />
      <meta property="og:image" content={`${window.location.origin}/assets/portfolio.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={`${personal.fullName} Portfolio`} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={window.location.origin} />
      <meta name="twitter:title" content={`${personal.fullName} - ${personal.role}`} />
      <meta name="twitter:description" content={hero.description || personal.description} />
      <meta name="twitter:image" content={`${window.location.origin}/assets/portfolio.png`} />
      <meta name="twitter:creator" content={`@${socialLinks.twitter?.split('/').pop() || ''}`} />
      
      {/* Additional Meta Tags */}
      <link rel="canonical" href={window.location.origin} />
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
    </>
  );
};

export default Schema;