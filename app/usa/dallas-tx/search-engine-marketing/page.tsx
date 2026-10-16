import type { Metadata } from "next";
import DallasLocationPageClient from "@/components/DallasLocationPageClient";

export const metadata: Metadata = {
  title: "Search Engine Marketing Dallas | Grow n Foster",
  description:
    "Explore search engine marketing in Dallas, including Google Ads management, PPC strategy, campaign costs, and conversion optimization.",
  alternates: {
    canonical: "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/",
  },
  openGraph: {
    title: "Search Engine Marketing Dallas | Grow n Foster",
    description:
      "Explore search engine marketing in Dallas, including Google Ads management, PPC strategy, campaign costs, and conversion optimization.",
    url: "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/",
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
      "url": "https://grownfoster.com/"
    },
    {
      "@type": "WebPage",
      "@id": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/#webpage",
      "url": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/",
      "name": "Search Engine Marketing Dallas | Grow n Foster",
      "description": "Explore search engine marketing in Dallas, including Google Ads management, PPC strategy, campaign costs, and conversion optimization.",
      "isPartOf": {
        "@id": "https://grownfoster.com/#website"
      },
      "about": {
        "@id": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/#service"
      },
      "breadcrumb": {
        "@id": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/#breadcrumb"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebSite",
      "@id": "https://grownfoster.com/#website",
      "url": "https://grownfoster.com/",
      "name": "Grow n Foster",
      "publisher": {
        "@id": "https://grownfoster.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Service",
      "@id": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/#service",
      "name": "Search Engine Marketing Services in Dallas",
      "serviceType": "Search Engine Marketing",
      "url": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/",
      "description": "Search engine marketing services covering paid search strategy, Google Ads management, PPC campaign optimization, keyword targeting, conversion tracking, and landing page optimization.",
      "provider": {
        "@id": "https://grownfoster.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dallas",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses seeking search engine marketing and paid search advertising services"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Search Engine Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Ads Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PPC Campaign Setup and Optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paid Search Strategy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion Tracking and Performance Measurement"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Page Conversion Rate Optimization"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/#breadcrumb",
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
          "item": "https://grownfoster.com/usa/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dallas, TX",
          "item": "https://grownfoster.com/usa/dallas-tx/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Search Engine Marketing Dallas",
          "item": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do search engine marketing services cost in Dallas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs depend on advertising budget, competition, campaign scope, and management fees. Request a tailored proposal that separates advertising spend from agency fees and explains what services are included."
          }
        },
        {
          "@type": "Question",
          "name": "How long does SEM take to deliver results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ads may begin receiving impressions and clicks after approval and launch, but meaningful performance evaluation takes time. Results depend on competition, budget, tracking quality, and conversion volume."
          }
        },
        {
          "@type": "Question",
          "name": "Can SEM generate B2B leads in Dallas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Paid search can reach business decision-makers searching for relevant solutions. Campaigns should use targeted keywords, useful landing pages, and lead-quality tracking to evaluate performance."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Grow n Foster different from other Dallas SEM providers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evaluate Grow n Foster based on its proposed strategy, communication, reporting, and alignment with your business goals. Discuss your requirements directly and request relevant examples or verified evidence of past work."
          }
        },
        {
          "@type": "Question",
          "name": "How can businesses improve Google Ads performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Businesses can review search terms, refine negative keywords, improve ad relevance, optimize landing pages, and check conversion tracking. Changes should be evaluated against relevant business outcomes rather than clicks alone."
          }
        }
      ]
    },
    {
      "@type": "SpeakableSpecification",
      "@id": "https://grownfoster.com/usa/dallas-tx/search-engine-marketing/#speakable",
      "cssSelector": [
        "h1",
        ".direct-answer",
        "#sem-dallas-definition",
        "#faq"
      ]
    }
  ]
};

export default function DallasSearchEngineMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkupData) }}
      />
      <DallasLocationPageClient />
    </>
  );
}
