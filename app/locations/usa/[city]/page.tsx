import type { Metadata } from "next";
import Link from "next/link";
import USALocationPageClient from "@/components/USALocationPageClient";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

const cityNames: Record<string, string> = {
  "austin-tx": "Austin, TX",
  "dallas-tx": "Dallas, TX",
  "chicago-il": "Chicago, IL",
  "boston-ma": "Boston, MA",
  "los-angeles-ca": "Los Angeles, CA",
  "miami-fl": "Miami, FL",
  "washington-dc": "Washington, DC",
  "detroit-mi": "Detroit, MI",
};

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCity = resolvedParams.city;
  const cityName = cityNames[rawCity] || rawCity.replace("-", ", ").toUpperCase();

  return {
    title: `Digital Marketing Services in ${cityName} | Grow n Foster`,
    description: `Grow n Foster helps businesses in ${cityName} scale with data-driven digital marketing services including SEO, paid media, content marketing, and lead generation.`,
    alternates: {
      canonical: `https://grownfoster.com/locations/usa/${rawCity}/`,
    },
  };
}

export default async function USACityLocationPage({ params }: CityPageProps) {
  const resolvedParams = await params;
  const rawCity = resolvedParams.city;
  const cityName = cityNames[rawCity] || rawCity.replace("-", ", ").toUpperCase();

  const citySchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Digital Marketing Services in ${cityName}`,
    "serviceType": "Digital Marketing",
    "description": `Digital marketing services for businesses in ${cityName}, combining SEO, local SEO, paid advertising, content marketing, and lead generation.`,
    "provider": {
      "@type": "Organization",
      "name": "Grow n Foster",
      "url": "https://grownfoster.com/"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "url": `https://grownfoster.com/locations/usa/${rawCity}/`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchemaData) }}
      />
      
      {/* City Specific Header Banner */}
      <div className="bg-primary-container/20 border-b border-primary/20 py-4 px-margin-mobile md:px-margin-desktop text-center">
        <p className="text-xs font-mono-code text-primary-fixed uppercase tracking-wider">
          <span className="material-symbols-outlined text-sm align-middle mr-1">location_on</span>
          Serving Businesses in <span className="font-bold text-white underline">{cityName}</span> & Across the USA
        </p>
      </div>

      <USALocationPageClient />
    </>
  );
}
