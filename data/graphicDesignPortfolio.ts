export interface GraphicDesignProject {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  coverImage: string;
  images: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  filter: "Brand Identity" | "Social & Ads" | "Packaging";
  featured?: boolean;
}

export const graphicHeroStats = [
  { number: "500+", label: "Visual Assets Created" },
  { number: "35+", label: "Brand Identities Systems" },
  { number: "4.9/5", label: "Client Impact Score" },
  { number: "100%", label: "Custom Pixel perfection" },
];

export const graphicProcessSteps = [
  {
    number: "01",
    title: "Brand Discovery & Concepting",
    text: "We analyze your audience, define visual personality, select typography palettes, and establish moodboard directions.",
  },
  {
    number: "02",
    title: "Vector & Layout Design",
    text: "Crafting logos, UI/UX graphics, marketing collaterals, ad creatives, and high-impact social media assets in Figma & Illustrator.",
  },
  {
    number: "03",
    title: "Social & Ad Campaigns",
    text: "Creating scroll-stopping social ad graphics, Meta feed carousels, and high-converting marketing visual collaterals.",
  },
  {
    number: "04",
    title: "Brand Systems & Export",
    text: "Delivering complete brand guidelines, print-ready packaging vectors, and optimized web graphics ready for production.",
  },
];

export const graphicClientList = [
  { name: "Netsxperts", industry: "IT & Endpoint Security" },
  { name: "The Gate Property", industry: "Property Rennovation" },
  { name: "Digicomplish", industry: "Search & Digital Growth" },
  { name: "SparxDigital", industry: "Performance Marketing" },
];

export const graphicDesignProjects: GraphicDesignProject[] = [
  {
    id: "netsxperts-endpoint-management",
    title: "Netsxperts - High-Converting Social Media Ad Creative",
    category: "IT & Endpoint Security",
    client: "Netsxperts",
    description:
      "A high-impact B2B social creative for Netsxperts, communicating 'One Business. Many Devices.' Showcase of secure cross-platform management across laptops, smartphones, tablets, and smartwatches.",
    coverImage: "/SM -1.png",
    images: ["/SM -1.png"],
    metrics: [
      { label: "Ad Click-Through", value: "+280%" },
      { label: "Trust Score", value: "4.9/5" },
      { label: "Impressions", value: "50K+" },
    ],
    tags: ["Endpoint Security", "B2B Tech Creative", "SaaS Marketing", "Brand Visual"],
    filter: "Brand Identity",
    featured: true,
  },
  {
    id: "house-of-symetry-essence",
    title: "Laveaux - Luxury Interior & Living Social Media Ad Creative",
    category: "Luxury Lifestyle & Interior",
    client: "Laveaux",
    description:
      "Minimalist, editorial branding graphic for Laveaux. Designed around 'Essence: A space where comfort meets quiet indulgence', celebrating architectural luxury and serene bedroom aesthetics.",
    coverImage: "/SM - 2.png",
    images: ["/SM - 2.png"],
    metrics: [
      { label: "Social Engagement", value: "3.4×" },
      { label: "Saved Posts Growth", value: "+195%" },
      { label: "Brand Appeal", value: "98%" },
    ],
    tags: ["Luxury Living", "Editorial Layout", "Interior Design", "Quiet Luxury"],
    filter: "Brand Identity",
    featured: true,
  },
  {
    id: "digicomplish-search-2026",
    title: "Digicomplish — 2026 Search & AI Answer Optimization Framework",
    category: "Digital Growth & Search Strategy",
    client: "Digicomplish",
    description:
      "Educational visual graphic created for Digicomplish, mapping out 2026 search strategy: integrating traditional SEO (Rankings, Indexing & Organic Traffic) with AI Answer Optimization (AIO Citations, High-Intent Recommendations & Authority).",
    coverImage: "/SM - 3.png",
    images: ["/SM - 3.png"],
    metrics: [
      { label: "Infographic Shares", value: "4.2×" },
      { label: "Lead Conversions", value: "+340%" },
      { label: "Authority Score", value: "100%" },
    ],
    tags: ["Search Strategy", "SEO & AIO", "Digicomplish", "Infographic Design"],
    filter: "Social & Ads",
    featured: true,
  },
  {
    id: "sparxdigital-performance-creative",
    title: "SparxDigital — High-Impact Social Ad & Growth Creative Suite",
    category: "Performance Marketing & Ad Creatives",
    client: "SparxDigital",
    description:
      "Performance-driven social media ad visual created for SparxDigital. Engineered to capture audience attention instantly, communicate key digital offerings, and convert passive viewers into qualified inquiries across Meta and LinkedIn.",
    coverImage: "/SM - 8.png",
    images: ["/SM - 8.png"],
    metrics: [
      { label: "Conversion Rate", value: "+310%" },
      { label: "Meta Ad CTR", value: "4.8%" },
      { label: "Clicks Generated", value: "25K+" },
    ],
    tags: ["SparxDigital", "Performance Marketing", "Meta Ads", "Social Creative"],
    filter: "Social & Ads",
    featured: true,
  },
];
