import type { Metadata } from "next";
import AustinLocationPageClient from "@/components/AustinLocationPageClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services for Austin | Grow n Foster",
  description:
    "Partner with Grow n Foster for digital marketing services in Austin. Data-driven strategy, transparent reporting and measurable growth. Book a consultation.",
  alternates: {
    canonical: "https://grownfoster.com/locations/usa/austin-tx/",
  },
  openGraph: {
    title: "Digital Marketing Services for Austin | Grow n Foster",
    description:
      "Partner with Grow n Foster for digital marketing services in Austin. Data-driven strategy, transparent reporting and measurable growth. Book a consultation.",
    url: "https://grownfoster.com/locations/usa/austin-tx/",
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
      "description": "Grow n Foster is a digital marketing company providing SEO, paid media, content marketing, lead generation, conversion optimization, web and UX, and marketing analytics services for businesses.",
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
      "@id": "https://grownfoster.com/locations/usa/austin-tx/#webpage",
      "url": "https://grownfoster.com/locations/usa/austin-tx/",
      "name": "Digital Marketing Services for Austin | Grow n Foster",
      "description": "Grow n Foster provides digital marketing services for Austin businesses, combining SEO, local SEO, paid media, content marketing, lead generation, conversion optimization, web and UX, and marketing analytics.",
      "isPartOf": {
        "@id": "https://grownfoster.com/#website"
      },
      "about": {
        "@id": "https://grownfoster.com/locations/usa/austin-tx/#service"
      },
      "mainEntity": {
        "@id": "https://grownfoster.com/locations/usa/austin-tx/#service"
      },
      "breadcrumb": {
        "@id": "https://grownfoster.com/locations/usa/austin-tx/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Service",
      "@id": "https://grownfoster.com/locations/usa/austin-tx/#service",
      "name": "Digital Marketing Services for Austin Businesses",
      "serviceType": "Digital Marketing",
      "description": "Digital marketing services for Austin businesses combining SEO, local SEO, paid advertising, content marketing, lead generation, conversion optimization, web and UX improvements, and marketing analytics to improve visibility, qualified traffic, leads, and customer acquisition.",
      "provider": {
        "@id": "https://grownfoster.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Austin",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      "url": "https://grownfoster.com/locations/usa/austin-tx/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://grownfoster.com/locations/usa/austin-tx/#breadcrumb",
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
          "name": "USA",
          "item": "https://grownfoster.com/locations/usa/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Austin, TX",
          "item": "https://grownfoster.com/locations/usa/austin-tx/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Digital Marketing Services for Austin Businesses",
          "item": "https://grownfoster.com/locations/usa/austin-tx/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://grownfoster.com/locations/usa/austin-tx/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does digital marketing services cost in Austin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cost depends on the channel mix, competitiveness of the Austin market segment, and scope of work. Grow n Foster provides pricing based on your specific goals and requirements rather than using one flat price."
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
          "name": "What makes Grow n Foster different from other digital marketing services providers in Austin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grow n Foster combines SEO, paid media, content, conversion optimization, and analytics into one coordinated strategy and focuses reporting on leads and pipeline rather than vanity metrics."
          }
        },
        {
          "@type": "Question",
          "name": "What digital marketing services are included for Austin businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Services can include SEO, local SEO, content marketing, paid advertising, LinkedIn marketing, lead generation, conversion optimization, web and UX improvements, analytics, and performance reporting depending on business goals and budget."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right digital marketing agency in Austin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for a provider that understands your business goals, recommends channels based on evidence, provides genuine case studies or project evidence, and reports on meaningful outcomes such as leads, conversions, and pipeline."
          }
        }
      ]
    },
    {
      "@type": "SpeakableSpecification",
      "@id": "https://grownfoster.com/locations/usa/austin-tx/#speakable",
      "cssSelector": [
        "h1",
        ".direct-answer",
        "#digital-marketing-definition",
        "#faq"
      ]
    }
  ]
};

export default function AustinLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkupData) }}
      />
      <AustinLocationPageClient />
    </>
  );
}
