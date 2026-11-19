import type { Metadata } from "next";
import ChicagoLocationPageClient from "@/components/ChicagoLocationPageClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services Chicago | Grow n Foster",
  description:
    "Need more customers in Chicago? Explore SEO, Google Ads, social media and lead generation services from Grow n Foster. Book a free consultation.",
  alternates: {
    canonical: "https://www.grownfoster.com/usa/chicago-il",
  },
  openGraph: {
    title: "Digital Marketing Services Chicago | Grow n Foster",
    description:
      "Need more customers in Chicago? Explore SEO, lead generation, social media, PPC, web development and local SEO from Grow n Foster.",
    url: "https://www.grownfoster.com/usa/chicago-il",
    type: "website",
    siteName: "Grow n Foster",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services Chicago | Grow n Foster",
    description:
      "SEO, Google Ads, social media, content marketing and lead generation for Chicago businesses.",
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
      "@id": "https://grownfoster.com/usa/chicago-il/#webpage",
      "url": "https://grownfoster.com/usa/chicago-il/",
      "name": "Digital Marketing Services Chicago | Grow n Foster",
      "description":
        "Need more customers in Chicago? Explore SEO, lead generation, social media, PPC, web development and local SEO from Grow n Foster.",
      "isPartOf": { "@id": "https://www.grownfoster.com/#website" },
      "about": { "@id": "https://grownfoster.com/usa/chicago-il/#service" },
      "breadcrumb": {
        "@id": "https://grownfoster.com/usa/chicago-il/#breadcrumb",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "Service",
      "@id": "https://grownfoster.com/usa/chicago-il/#service",
      "name": "Digital Marketing Services in Chicago",
      "serviceType": "Digital Marketing",
      "description":
        "Digital marketing services for Chicago businesses, including SEO, lead generation, social media marketing, PPC management, web development and local SEO.",
      "provider": { "@id": "https://www.grownfoster.com/#organization" },
      "areaServed": [
        {
          "@type": "City",
          "name": "Chicago",
          "containedInPlace": { "@type": "State", "name": "Illinois" },
        },
        { "@type": "Place", "name": "Oak Park, Illinois" },
        { "@type": "Place", "name": "Evanston, Illinois" },
        { "@type": "Place", "name": "Naperville, Illinois" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "SEO Services",
            "itemListElement": {
              "@type": "Service",
              "name": "SEO Services in Chicago",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "Lead Generation",
            "itemListElement": {
              "@type": "Service",
              "name": "Lead Generation in Chicago",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "Social Media Marketing",
            "itemListElement": {
              "@type": "Service",
              "name": "Social Media Marketing",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "PPC Management",
            "itemListElement": {
              "@type": "Service",
              "name": "PPC Management in Chicago",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "Web Development",
            "itemListElement": {
              "@type": "Service",
              "name": "Web Design and Development",
            },
          },
          {
            "@type": "OfferCatalog",
            "name": "Local SEO",
            "itemListElement": {
              "@type": "Service",
              "name": "Local SEO Services in Chicago",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://grownfoster.com/usa/chicago-il/#breadcrumb",
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
          "item": "https://grownfoster.com/usa/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Chicago",
          "item": "https://grownfoster.com/usa/chicago-il/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://grownfoster.com/usa/chicago-il/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Do Digital Marketing Services Cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital marketing services cost in Chicago depends on the work involved, your competition, website condition and the channels you want to use. SEO, PPC, content marketing and website development have different pricing models. Contact us with your requirements to discuss a suitable scope and proposal.",
          },
        },
        {
          "@type": "Question",
          "name": "When Can I Expect Results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the service. Paid campaigns can start bringing website traffic after launch, but lead quality and conversions need monitoring. SEO usually takes longer because it involves ongoing website improvements, content development and search visibility work. Your starting position and competition also affect the timeline.",
          },
        },
        {
          "@type": "Question",
          "name": "Why Choose Grow n Foster?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We start by understanding your business and what you want to achieve. Our approach connects services such as SEO, paid advertising, content strategy and lead generation with your actual requirements. We also encourage clear reporting so you can understand the work and review performance.",
          },
        },
        {
          "@type": "Question",
          "name": "Do You Serve Chicago Suburbs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can discuss digital marketing requirements for Chicago and nearby service areas, including Oak Park, Evanston and Naperville. The right strategy depends on where your business operates and which customers you want to reach.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Services Does My Business Need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "That depends on your goals, audience and current online presence. A local business may need local SEO, while a B2B company may benefit from SEO, content and LinkedIn outreach. A review of your website and goals can help identify the right starting point.",
          },
        },
        {
          "@type": "Question",
          "name": "How Do I Get Started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Share your website, business details and marketing goals through the enquiry form. Our team can review your requirements and discuss possible next steps.",
          },
        },
      ],
    },
  ],
};

export default function ChicagoDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkupData) }}
      />
      <ChicagoLocationPageClient />
    </>
  );
}
