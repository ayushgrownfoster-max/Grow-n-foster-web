import type { Metadata } from "next";
import USALocationPageClient from "@/components/USALocationPageClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services in the USA | Grow n Foster",
  description:
    "Grow n Foster helps US businesses grow with data-driven digital marketing services SEO, paid media, content, and lead generation. Get a free strategy consultation.",
  alternates: {
    canonical: "https://grownfoster.com/locations/usa/",
  },
  openGraph: {
    title: "Digital Marketing Services in the USA | Grow n Foster",
    description:
      "Grow n Foster helps US businesses grow with data-driven digital marketing services SEO, paid media, content, and lead generation. Get a free strategy consultation.",
    url: "https://grownfoster.com/locations/usa/",
    type: "website",
    siteName: "Grow n Foster",
  },
};

const schemaMarkupData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://grownfoster.com/#organization",
      "name": "Grow n Foster",
      "url": "https://grownfoster.com/",
      "description": "Grow n Foster is a digital marketing company providing SEO, local SEO, paid media, content marketing, lead generation, conversion optimization, web and UX improvements, and marketing analytics services for businesses.",
      "telephone": "+91-92026-68977",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A-6/6, above Apollo Pharmacy, Jawahar Nagar",
        "addressLocality": "Ujjain",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "456010",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://grownfoster.com/#website",
      "url": "https://grownfoster.com/",
      "name": "Grow n Foster",
      "publisher": {
        "@id": "https://grownfoster.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://grownfoster.com/locations/usa/#webpage",
      "url": "https://grownfoster.com/locations/usa/",
      "name": "Digital Marketing Services in the USA | Grow n Foster",
      "description": "Grow n Foster helps US businesses grow with data-driven digital marketing services including SEO, paid media, content marketing, lead generation, conversion optimization, and marketing analytics.",
      "isPartOf": {
        "@id": "https://grownfoster.com/#website"
      },
      "about": {
        "@id": "https://grownfoster.com/locations/usa/#service"
      },
      "mainEntity": {
        "@id": "https://grownfoster.com/locations/usa/#service"
      },
      "breadcrumb": {
        "@id": "https://grownfoster.com/locations/usa/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Service",
      "@id": "https://grownfoster.com/locations/usa/#service",
      "name": "Digital Marketing Services in the USA",
      "serviceType": "Digital Marketing",
      "description": "Digital marketing services for businesses across the United States, combining SEO, local SEO, paid advertising, content marketing, lead generation, conversion optimization, web and UX improvements, and marketing analytics to improve visibility, qualified traffic, leads, and business growth.",
      "provider": {
        "@id": "https://grownfoster.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://grownfoster.com/locations/usa/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://grownfoster.com/locations/usa/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://grownfoster.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://grownfoster.com/locations/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "USA",
          "item": "https://grownfoster.com/locations/usa/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://grownfoster.com/locations/usa/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do digital marketing services cost in the USA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cost depends on your channel mix, market competitiveness, and scope of work. Grow n Foster recommends a discovery call to understand your goals and provide an appropriate scope rather than using one flat price."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from digital marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid channels can show early traffic within weeks, while SEO and content typically build momentum over several months. Timelines depend on the channels, competition, starting position, and campaign scope."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Grow n Foster different from other digital marketing service providers in the USA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grow n Foster combines SEO, paid media, content, conversion optimization, and analytics into one coordinated strategy and reports on leads and pipeline rather than relying only on vanity metrics."
          }
        },
        {
          "@type": "Question",
          "name": "What digital marketing services are included in an engagement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most engagements can combine SEO, content, and analytics as a baseline, with paid advertising and conversion optimization added according to business goals and budget."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right digital marketing service provider?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for a provider that understands your business goals before recommending channels, can provide genuine case evidence, and reports on meaningful outcomes such as leads, conversions, and pipeline."
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://grownfoster.com/locations/usa/#locations",
      "name": "USA Locations We Serve",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Austin, TX",
          "url": "https://grownfoster.com/locations/usa/austin-tx/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dallas, TX",
          "url": "https://grownfoster.com/locations/usa/dallas-tx/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Chicago, IL",
          "url": "https://grownfoster.com/locations/usa/chicago-il/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Boston, MA",
          "url": "https://grownfoster.com/locations/usa/boston-ma/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Los Angeles, CA",
          "url": "https://grownfoster.com/locations/usa/los-angeles-ca/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Miami, FL",
          "url": "https://grownfoster.com/locations/usa/miami-fl/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Washington, DC",
          "url": "https://grownfoster.com/locations/usa/washington-dc/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Detroit, MI",
          "url": "https://grownfoster.com/locations/usa/detroit-mi/"
        }
      ]
    },
    {
      "@type": "SpeakableSpecification",
      "@id": "https://grownfoster.com/locations/usa/#speakable",
      "cssSelector": [
        "h1",
        ".direct-answer",
        "#faq"
      ]
    }
  ]
};

export default function USALocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkupData) }}
      />
      <USALocationPageClient />
    </>
  );
}
