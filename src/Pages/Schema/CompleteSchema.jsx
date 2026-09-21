import React from "react";
import portfolioData from "../../data/portfolioData";

const CompleteSchema = () => {
  const { personal, socialLinks, skills, hero } = portfolioData;

  const websiteUrl = "https://omkarmane.com";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.fullName,
    givenName: personal.firstName,
    jobTitle: personal.role,
    description: personal.description,
    email: personal.emails[0],
    telephone: personal.phone,
    url: websiteUrl,

    sameAs: Object.values(socialLinks).filter(Boolean),

    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolhapur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },

    knowsLanguage: personal.languages,

    knowsAbout: [
      ...skills.frontend,
      ...skills.backend,
      ...skills.database,
      ...skills.tools,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personal.fullName} - Portfolio`,
    description: hero.description,
    url: websiteUrl,

    author: {
      "@type": "Person",
      name: personal.fullName,
    },
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </>
  );
};

export default CompleteSchema;