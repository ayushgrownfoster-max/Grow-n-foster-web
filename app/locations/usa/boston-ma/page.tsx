import type { Metadata } from "next";
import BostonLocationPageClient from "@/components/BostonLocationPageClient";

export const metadata: Metadata = {
  title: "Boston’s Trustworthy Digital Marketing Agency - lead Gen & SEO",
  description:
    "Looking for a digital marketing agency? Get lead generation, SEO, Google Ads, & content marketing services to attract customers and grow your business with Grow n Foster.",
  alternates: {
    canonical: "https://www.grownfoster.com/locations/usa/boston-ma",
  },
  openGraph: {
    title: "Boston’s Trustworthy Digital Marketing Agency - lead Gen & SEO",
    description:
      "Looking for a digital marketing agency? Get lead generation, SEO, Google Ads, & content marketing services to attract customers and grow your business with Grow n Foster.",
    url: "https://www.grownfoster.com/locations/usa/boston-ma",
    type: "website",
    siteName: "Grow n Foster",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston’s Trustworthy Digital Marketing Agency - lead Gen & SEO",
    description:
      "Looking for a digital marketing agency? Get lead generation, SEO, Google Ads, & content marketing services to attract customers and grow your business with Grow n Foster.",
  },
};

const schemaMarkupData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.grownfoster.com/#organization",
      "name": "Grow n Foster",
      "url": "https://www.grownfoster.com/",
      "description":
        "Grow n Foster is a digital marketing company providing SEO, paid media, content marketing, lead generation, conversion optimization, web and UX, and marketing analytics services for businesses.",
      "telephone": "+91-92026-68977",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A-6/6, above Apollo Pharmacy, Jawahar Nagar",
        "addressLocality": "Ujjain",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "456010",
        "addressCountry": "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.grownfoster.com/#website",
      "url": "https://www.grownfoster.com/",
      "name": "Grow n Foster",
      "publisher": {
        "@id": "https://www.grownfoster.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.grownfoster.com/locations/usa/boston-ma/#webpage",
      "url": "https://www.grownfoster.com/locations/usa/boston-ma/",
      "name": "Boston’s Trustworthy Digital Marketing Agency - lead Gen & SEO",
      "description":
        "Looking for a digital marketing agency? Get lead generation, SEO, Google Ads, & content marketing services to attract customers and grow your business with Grow n Foster.",
      "isPartOf": { "@id": "https://www.grownfoster.com/#website" },
      "about": { "@id": "https://www.grownfoster.com/locations/usa/boston-ma/#service" },
      "breadcrumb": {
        "@id": "https://www.grownfoster.com/locations/usa/boston-ma/#breadcrumb",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "Service",
      "@id": "https://www.grownfoster.com/locations/usa/boston-ma/#service",
      "name": "Digital Marketing Services in Boston",
      "serviceType": "Digital Marketing",
      "description":
        "Digital marketing services for Boston businesses, including SEO, lead generation, social media marketing, PPC & Google Ads management, web design & development, and local SEO.",
      "provider": { "@id": "https://www.grownfoster.com/#organization" },
      "areaServed": [
        {
          "@type": "City",
          "name": "Boston",
          "containedInPlace": { "@type": "State", "name": "Massachusetts" },
        },
        { "@type": "Place", "name": "Downtown Boston, Massachusetts" },
        { "@type": "Place", "name": "Back Bay, Massachusetts" },
        { "@type": "Place", "name": "Cambridge, Massachusetts" },
        { "@type": "Place", "name": "South Boston, Massachusetts" },
        { "@type": "Place", "name": "Seaport District, Massachusetts" },
        { "@type": "Place", "name": "Somerville, Massachusetts" },
        { "@type": "Place", "name": "Brookline, Massachusetts" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Boston Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "SEO Services",
            "itemListElement": {
              "@type": "Service",
              "name": "Search Engine Optimization for Boston Businesses",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "Lead Generation",
            "itemListElement": {
              "@type": "Service",
              "name": "Lead Generation Services in Boston",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "Social Media Marketing",
            "itemListElement": {
              "@type": "Service",
              "name": "Social Media Marketing Services in Boston",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "PPC Management",
            "itemListElement": {
              "@type": "Service",
              "name": "PPC & Google Ads Management in Boston",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "Website Development",
            "itemListElement": {
              "@type": "Service",
              "name": "Website Design & Development in Boston",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "Local SEO",
            "itemListElement": {
              "@type": "Service",
              "name": "Local SEO Services for Boston",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.grownfoster.com/locations/usa/boston-ma/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.grownfoster.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "USA",
          "item": "https://www.grownfoster.com/locations/usa",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Boston, MA",
          "item": "https://www.grownfoster.com/locations/usa/boston-ma",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.grownfoster.com/locations/usa/boston-ma/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do digital marketing services cost in Boston?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital marketing costs depend on the services, competition, website condition and level of support required. SEO, PPC, content marketing and website development have different pricing models. Contact us with your requirements to discuss a suitable scope and proposal.",
          },
        },
        {
          "@type": "Question",
          "name": "When can I expect results from digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The timeline depends on the service and your starting position. Paid campaigns can generate initial traffic after launch, while SEO generally requires ongoing website improvements, content development and optimization. Lead quality and conversions also need to be monitored.",
          },
        },
        {
          "@type": "Question",
          "name": "Why choose Grow n Foster?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We start by understanding your business goals and marketing requirements. Our approach connects SEO, paid advertising, content strategy and lead generation with the activities that make sense for your business.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide digital marketing for small businesses in Boston?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can discuss digital marketing strategies for small and medium-sized businesses, including SEO, local search, paid campaigns, content marketing and website improvements. The right combination depends on your goals and available budget.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you serve businesses in Cambridge and Back Bay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can discuss digital marketing requirements for businesses targeting Boston, Cambridge, Back Bay and nearby communities. Location-focused campaigns should reflect the areas your business genuinely serves.",
          },
        },
        {
          "@type": "Question",
          "name": "Which digital marketing services does my business need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "That depends on your goals, audience and current online presence. A local business may benefit from local SEO, while a B2B company may need SEO, content marketing and LinkedIn outreach. A review of your requirements can help identify the right starting point.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I hire a digital marketing agency for SEO and PPC together?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SEO and PPC can support different parts of your customer acquisition strategy. SEO helps build organic visibility over time, while PPC can reach targeted audiences through paid campaigns. The right combination depends on your business requirements.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get started with Grow n Foster?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Share your website, business details and marketing goals through our enquiry form. Our team can review your requirements and discuss possible next steps.",
          },
        },
      ],
    },
  ],
};

export default function BostonDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkupData) }}
      />
      <BostonLocationPageClient />
    </>
  );
}
