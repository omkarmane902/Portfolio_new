// src/Components/Schema/CompleteSchema.jsx
import React from 'react';
import portfolioData from '../../data/portfolioData';

const CompleteSchema = () => {
  const { personal, socialLinks, skills, experience, education, hero } = portfolioData;

  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personal.fullName,
    "givenName": personal.firstName,
    "jobTitle": personal.role,
    "description": personal.description,
    "email": personal.emails[0],
    "telephone": personal.phone,
    "url": window.location.origin,
    "sameAs": Object.values(socialLinks).filter(link => link),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personal.location.split(',')[0],
      "addressRegion": personal.location.split(',')[1]?.trim() || "",
      "addressCountry": "India"
    },
    "knowsLanguage": personal.languages,
    "knowsAbout": [
      ...skills.frontend,
      ...skills.backend,
      ...skills.database,
      ...skills.tools
    ],
    "worksFor": experience.map(exp => ({
      "@type": "Organization",
      "name": exp.company,
      "position": exp.role,
      "description": exp.description
    })),
    "alumniOf": education.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu.college,
      "degree": edu.degree
    }))
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${personal.fullName} - Portfolio`,
    "description": hero.description,
    "url": window.location.origin,
    "author": {
      "@type": "Person",
      "name": personal.fullName
    }
  };

  // Breadcrumb Schema
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

  return (
    <>
      {/* Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      
      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Meta Tags */}
      <title>{personal.fullName} - {personal.role}</title>
      <meta name="description" content={hero.description} />
      <meta name="keywords" content={[...skills.frontend, ...skills.backend, "Portfolio", "Developer", "React"].join(", ")} />
      <meta name="author" content={personal.fullName} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={`${personal.fullName} - ${personal.role}`} />
      <meta property="og:description" content={hero.description} />
      <meta property="og:url" content={window.location.origin} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${personal.fullName} - ${personal.role}`} />
      <meta name="twitter:description" content={hero.description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={window.location.origin} />
    </>
  );
};

export default CompleteSchema;