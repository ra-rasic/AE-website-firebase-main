
"use client"

import * as React from "react"

interface LocalBusinessSchemaProps {
  name?: string
  description?: string
  url?: string
}

export function LocalBusinessSchema({
  name = "A & E Insurance Group",
  description = "Independent insurance agency serving Southwest Florida since 2002. Specializing in home, auto, flood, and business insurance with local expertise.",
  url = "https://aeinsurancegroup.com",
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: name,
    description: description,
    url: url,
    logo: `${url}/logo.png`,
    image: `${url}/office-exterior.jpg`,
    telephone: "+1-239-591-1225",
    email: "info@aeinsurancegroup.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25251 Chamber of Commerce Dr",
      addressLocality: "Bonita Springs",
      addressRegion: "FL",
      postalCode: "34135",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.3398",
      longitude: "-81.7787",
    },
    openingHours: ["Mo-Fr 08:30-17:00", "Sa 09:00-13:00"],
    areaServed: [
      {
        "@type": "City",
        name: "Bonita Springs",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "City",
        name: "Naples",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "City",
        name: "Fort Myers",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
      {
        "@type": "City",
        name: "Estero",
        containedInPlace: {
          "@type": "State",
          name: "Florida",
        },
      },
    ],
    serviceType: [
      "Auto Insurance",
      "Homeowners Insurance",
      "Flood Insurance",
      "Business Insurance",
      "Condo Insurance",
      "Renters Insurance",
      "Umbrella Insurance",
      "Boat Insurance",
    ],
    founder: {
      "@type": "Person",
      name: "Anthony Esposito",
    },
    foundingDate: "2002",
    slogan: "Your Southwest Florida Insurance Experts Since 2002",
    sameAs: ["https://www.facebook.com/aeinsurancegroup", "https://www.linkedin.com/company/ae-insurance-group"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
