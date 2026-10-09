export interface SeoHeroStat {
  number: string;
  label: string;
  detail: string;
}

export interface SeoTocItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface SeoCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface SeoProcessStep {
  number: string;
  stepName: string;
  title: string;
  description: string;
  icon: string;
  phase: string;
}

export interface AeoGeoComparisonItem {
  feature: string;
  aeo: string;
  geo: string;
}

export interface FeaturedCompany {
  name: string;
  slug: string;
  category: string;
  industry: string;
  badge: string;
  overview: string;
  searchThemes: string[];
  keyHighlights: string[];
}

export interface CrossProjectSnapshot {
  metric: string;
  thoughtspot: string;
  numeric: string;
  riotPlatforms: string;
  metricIcon: string;
}

export interface AiPlatformBreakdown {
  platform: string;
  mentions: string;
  citedPages: string;
  icon: string;
}

export interface SeoCaseStudy {
  id: string;
  name: string;
  tagline: string;
  category: string;
  authorityScore: number;
  organicTraffic: string;
  organicKeywords: string;
  backlinks: string;
  refDomains: string;
  aiVisibilityScore: number;
  totalAiMentions: string;
  aiCitedPages: string;
  trafficShare: string;
  gscMetrics?: {
    clicks: string;
    impressions: string;
    avgCtr: string;
    avgPosition: string;
  };
  searchPositionsCount?: string;
  keyRankings?: {
    position: string;
    keyword: string;
    volume: string;
  }[];
  aiBreakdown: AiPlatformBreakdown[];
  highlight: string;
}

export interface EvaluationCriterion {
  id: string;
  title: string;
  description: string;
  icon: string;
  unit: string;
}

export interface TransparencyGuardrail {
  title: string;
  description: string;
  icon: string;
  badge: string;
}

// ── Key Highlights & Hero Data ──
export const seoHeroHighlights: SeoHeroStat[] = [
  {
    number: "150+",
    label: "Projects Delivered",
    detail: "Active since 2015 across 15+ global locations",
  },
  {
    number: "1,000+",
    label: "High-DA Backlink Network",
    detail: "Editorial guest-post placements on 50+ DA authority sites",
  },
  {
    number: "9-Step",
    label: "Search & AI Growth Process",
    detail: "Full spectrum SEO, AEO, GEO & content authority engine",
  },
  {
    number: "5.4M+",
    label: "Organic Search Impressions",
    detail: "Multi-platform visibility across Google, ChatGPT, Perplexity & Gemini",
  },
];

// ── Table of Contents ──
export const seoTableOfContents: SeoTocItem[] = [
  {
    id: "about-section",
    number: "01",
    title: "About Grow ’n’ Foster",
    description: "Mission, core beliefs, flywheel, and long-term search vision.",
    icon: "psychology",
  },
  {
    id: "capabilities-section",
    number: "02",
    title: "Capabilities",
    description: "Complete list of 9 interconnected search and AI offerings.",
    icon: "hub",
  },
  {
    id: "method-section",
    number: "03",
    title: "Our Method",
    description: "9-step growth process, AEO vs. GEO dynamics, and content engine.",
    icon: "account_tree",
  },
  {
    id: "featured-companies-section",
    number: "04",
    title: "Featured Company Context",
    description: "Industry backgrounds for ThoughtSpot, Numeric, and Riot Platforms.",
    icon: "domain",
  },
  {
    id: "case-studies-section",
    number: "05",
    title: "Selected Case Studies",
    description: "Organic performance metrics, GSC logs, and AI search visibility breakdowns.",
    icon: "insights",
  },
  {
    id: "measurement-section",
    number: "06",
    title: "Measurement & Transparency",
    description: "Evaluation criteria and strict no-invented-outcomes guardrails.",
    icon: "verified",
  },
  {
    id: "contact-section",
    number: "07",
    title: "Contact & Consultation",
    description: "Connect with our search directors for an organic audit and roadmap.",
    icon: "contact_mail",
  },
];

// ── 01 · About Grow 'n' Foster ──
export const seoAboutData = {
  headline: "SEO and digital growth built around visibility and trust.",
  since: "2015",
  whoWeAre:
    "Grow ’n’ Foster is an SEO and digital growth team built around visibility and trust. Active since 2015, the team helps businesses become easier to find, understand, and trust across modern search experiences by combining technical SEO, content strategy, authority building, and emerging AI-search practices.",
  belief:
    "Good SEO connects the right audience with the right information at the right moment, turning visibility into trust, qualified attention, and business opportunities.",
  goalAndVision:
    "Build long-term search visibility across traditional search engines, answer engines, and AI-powered experiences.",
  growthFlywheel: [
    { step: "Better Visibility", desc: "Topical breadth across Google, Bing, ChatGPT, and AI Overviews." },
    { step: "More Relevant Traffic", desc: "High-intent organic searchers with commercial and informational needs." },
    { step: "More Trust", desc: "Demonstrated authority, cited entity status, and transparent answers." },
    { step: "More Opportunities", desc: "Inbound pipeline, high-converting demo requests, and customer acquisition." },
    { step: "Sustainable Growth", desc: "Compound organic dividends that do not vanish when ad spend stops." },
  ],
};

// ── 02 · Capabilities (9 Offerings) ──
export const seoCapabilities: SeoCapability[] = [
  {
    id: "seo-strategy",
    number: "01",
    title: "SEO Strategy",
    description: "A customized search roadmap based on business priorities, customer needs, and competition.",
    icon: "explore",
    badge: "Roadmap",
  },
  {
    id: "technical-seo",
    number: "02",
    title: "Technical SEO",
    description: "Improvements to crawling, indexing, site architecture, performance, schema/structured data, and technical discoverability.",
    icon: "terminal",
    badge: "Infrastructure",
  },
  {
    id: "keyword-intent",
    number: "03",
    title: "Keyword & Intent Strategy",
    description: "Mapping search demand to pages and content formats best suited to satisfy both user and business goals.",
    icon: "saved_search",
    badge: "Intent Mapping",
  },
  {
    id: "on-page-seo",
    number: "04",
    title: "On-Page SEO",
    description: "Optimization of titles, headings, copy, URLs, images, internal links, and page relevance.",
    icon: "web",
    badge: "Relevance",
  },
  {
    id: "content-marketing",
    number: "05",
    title: "Content Marketing",
    description: "Pillar, supporting, commercial, and thought-leadership content driving topical depth.",
    icon: "auto_stories",
    badge: "Topical Authority",
  },
  {
    id: "aeo",
    number: "06",
    title: "AEO (Answer Engine Optimization)",
    description: "Structuring clear, direct answers for question-led search, featured snippets, People Also Ask (PAA), and answer engines.",
    icon: "quiz",
    badge: "Direct Answers",
  },
  {
    id: "geo",
    number: "07",
    title: "GEO (Generative Engine Optimization)",
    description: "Enhancing signals to help AI systems understand, trust, and reference the brand, topic, and associated entities.",
    icon: "smart_toy",
    badge: "AI Visibility",
  },
  {
    id: "local-seo",
    number: "08",
    title: "Local SEO",
    description: "Enhancing local discoverability via Google Business Profile, location pages, reviews, and local relevance.",
    icon: "pin_drop",
    badge: "Local Discoverability",
  },
  {
    id: "off-page-seo",
    number: "09",
    title: "Off-Page SEO",
    description: "Building authority through editorial placements, brand mentions, partnerships, and referral visibility.",
    icon: "share_reviews",
    badge: "Brand Mentions",
  },
];

// ── 03 · 9-Step Process & Frameworks ──
export const seoProcessSteps: SeoProcessStep[] = [
  {
    number: "01",
    stepName: "Website Audit",
    title: "Uncover Limitations",
    description: "Uncover technical, content, UX, and authority limitations through forensic crawling.",
    icon: "search_check",
    phase: "Understand",
  },
  {
    number: "02",
    stepName: "Keyword Research",
    title: "Evaluate Search Queries",
    description: "Evaluate customer search queries, opportunity size, intent category, and commercial value.",
    icon: "manage_search",
    phase: "Understand",
  },
  {
    number: "03",
    stepName: "Intent Mapping",
    title: "Align Customer Journey",
    description: "Align priority topics to page types, formats, and customer journey stages.",
    icon: "schema",
    phase: "Prioritise",
  },
  {
    number: "04",
    stepName: "On-Page Optimisation",
    title: "Refine Relevance & Copy",
    description: "Refine structural relevance, clarity, links, and conversion-focused copy.",
    icon: "design_services",
    phase: "Improve",
  },
  {
    number: "05",
    stepName: "Technical Foundation",
    title: "Speed, Crawling & Schema",
    description: "Strengthen speed, crawling, indexing, JSON-LD schema, and tracking readiness.",
    icon: "code_blocks",
    phase: "Improve",
  },
  {
    number: "06",
    stepName: "Content System",
    title: "Pillars & Landing Pages",
    description: "Develop pillar pages, supporting articles, and commercial landing pages.",
    icon: "library_books",
    phase: "Improve",
  },
  {
    number: "07",
    stepName: "Internal Linking",
    title: "Topical Hierarchy",
    description: "Interconnect related pages to clarify topical hierarchy and entity graphs to search systems.",
    icon: "alt_route",
    phase: "Build Authority",
  },
  {
    number: "08",
    stepName: "Authority Building",
    title: "Backlinks & Citations",
    description: "Earn relevant backlinks, editorial mentions, and contextual brand citations.",
    icon: "verified_user",
    phase: "Build Authority",
  },
  {
    number: "09",
    stepName: "Measurement",
    title: "Track & Iterate",
    description: "Track visibility, rankings, traffic, impressions, AI presence, and downstream conversions.",
    icon: "monitoring",
    phase: "Measure & Repeat",
  },
];

// ── AEO vs. GEO Comparison ──
export const aeoVsGeoComparison: AeoGeoComparisonItem[] = [
  {
    feature: "Primary Goal",
    aeo: "Make answers easy to find, read, and quote.",
    geo: "Make the brand easy for AI systems to trust and cite.",
  },
  {
    feature: "Key Tactics",
    aeo: "Target featured snippets, FAQs, People Also Ask (PAA), schema markup, and structured data.",
    geo: "Build topical authority, entity signals, Knowledge Graph alignment, and citation-worthy facts.",
  },
  {
    feature: "Strategic Focus",
    aeo: "Direct, concise answers to specific customer questions in search results.",
    geo: "Overall Web entity authority, natural language references, internal links, and external mentions.",
  },
];

// ── Content & Authority Framework ──
export const contentEngineStages = [
  { step: "01", name: "Audience Research", desc: "Understanding pain points, search nuances, and vocabulary." },
  { step: "02", name: "Editorial Strategy", desc: "Mapping core topics, clusters, and business prioritization." },
  { step: "03", name: "Pillar Content", desc: "High-depth comprehensive guides establishing authority." },
  { step: "04", name: "Supporting Content", desc: "Long-tail problem solving and contextual cluster reinforcement." },
  { step: "05", name: "Commercial Content", desc: "High-intent comparison, feature, and product landing pages." },
  { step: "06", name: "Distribution", desc: "Multi-channel amplification, internal links, and citation syndication." },
  { step: "07", name: "Iterative Optimisation", desc: "Continuous SERP tuning based on live search performance." },
];

export const linkBuildingPrinciple = {
  title: "Contextual Relevance as the Primary Filter",
  statement:
    "Contextual relevance is the primary filter — ensuring website, topic, audience, and link context align naturally.",
  points: [
    "Targeting 50+ DA domains with proven organic footprints",
    "Editorial in-content placements over directory or artificial links",
    "Anchor text diversity preserving natural search crawl signals",
    "Alignment with Knowledge Graph and AI entity extraction models",
  ],
};

// ── 04 · Featured Company Context ──
export const featuredCompanyContexts: FeaturedCompany[] = [
  {
    name: "ThoughtSpot",
    slug: "thoughtspot",
    category: "Enterprise Analytics / AI SaaS",
    industry: "Enterprise Business Intelligence & AI",
    badge: "187.1K Organic Traffic",
    overview:
      "Helps organizations explore governed business data via natural language search, AI answers, and embedded analytics.",
    searchThemes: ["Analytics", "Business Intelligence (BI)", "Data Insights", "AI Analytics", "Enterprise Search"],
    keyHighlights: [
      "54.4K GSC Clicks & 6.4M Impressions",
      "2.1K Total AI Mentions across AI Overviews & ChatGPT",
      "3.4K AI-Cited Pages recognized as source material",
      "Average Position 4.0 across core high-volume terms",
    ],
  },
  {
    name: "Numeric",
    slug: "numeric",
    category: "B2B SaaS / Accounting Tech",
    industry: "Financial Operations & Automation",
    badge: "9.3K+ Ranked Keywords",
    overview:
      "AI-native accounting platform automating close management, reporting, transaction workflows, and financial clarity.",
    searchThemes: [
      "Journal Entries",
      "Accounting Close Management",
      "Financial Reconciliations",
      "Balance Sheet Reporting",
      "Accounting Workflows",
    ],
    keyHighlights: [
      "#1 Rankings on high-intent 'journal entry' & 'accounting entries'",
      "39K Monthly Organic Traffic (+17% expansion)",
      "777 Pages Cited by Generative AI Engines",
      "28% High-Value United States Traffic Share",
    ],
  },
  {
    name: "Riot Platforms",
    slug: "riot-platforms",
    category: "Digital Infrastructure / Tech",
    industry: "Data Centers, HPC & Bitcoin Infrastructure",
    badge: "85% US Traffic Share",
    overview:
      "Vertically integrated infrastructure company spanning Bitcoin mining, engineering, and data-center development for AI/HPC workloads.",
    searchThemes: [
      "Digital Infrastructure",
      "Data Center Development",
      "Bitcoin Mining Operations",
      "HPC & AI Compute",
      "Investor Relations",
    ],
    keyHighlights: [
      "65.6K Monthly Organic Traffic (+54.1% Surge)",
      "1,300+ Total AI Mentions with balanced distribution",
      "#1 Rankings for primary brand & institutional investor terms",
      "85% United States Traffic Share",
    ],
  },
];

// ── 05 · Selected Case Studies ──
export const crossProjectComparison: CrossProjectSnapshot[] = [
  {
    metric: "Organic Traffic",
    thoughtspot: "187.1K (Est.)",
    numeric: "39K (Est., +17%)",
    riotPlatforms: "65.6K (Est., +54.1%)",
    metricIcon: "trending_up",
  },
  {
    metric: "Organic Keywords",
    thoughtspot: "47.9K",
    numeric: "17.9K",
    riotPlatforms: "1.8K (+30.2%)",
    metricIcon: "key",
  },
  {
    metric: "Authority Score",
    thoughtspot: "48",
    numeric: "41",
    riotPlatforms: "44",
    metricIcon: "shield",
  },
  {
    metric: "Backlinks / Ref. Domains",
    thoughtspot: "570.2K / 9.8K",
    numeric: "33.6K / 2.5K",
    riotPlatforms: "36.2K / 6.8K",
    metricIcon: "link",
  },
  {
    metric: "AI Visibility Score",
    thoughtspot: "18",
    numeric: "15",
    riotPlatforms: "23",
    metricIcon: "smart_toy",
  },
  {
    metric: "Total AI Mentions",
    thoughtspot: "2.1K",
    numeric: "262",
    riotPlatforms: "1.3K",
    metricIcon: "format_quote",
  },
  {
    metric: "AI-Cited Pages",
    thoughtspot: "3.4K",
    numeric: "777",
    riotPlatforms: "240",
    metricIcon: "description",
  },
];

export const detailedCaseStudies: SeoCaseStudy[] = [
  {
    id: "thoughtspot",
    name: "ThoughtSpot",
    tagline: "Enterprise Analytics / AI SaaS",
    category: "Enterprise AI & BI",
    authorityScore: 48,
    organicTraffic: "187.1K",
    organicKeywords: "47.9K",
    backlinks: "570.2K",
    refDomains: "9.8K",
    aiVisibilityScore: 18,
    totalAiMentions: "2,100+",
    aiCitedPages: "3,400+",
    trafficShare: "9% U.S. traffic share with high global enterprise distribution",
    gscMetrics: {
      clicks: "54.4K",
      impressions: "6.4M",
      avgCtr: "2.0%",
      avgPosition: "4.0",
    },
    aiBreakdown: [
      { platform: "ChatGPT", mentions: "450 Mentions", citedPages: "951 Cited Pages", icon: "forum" },
      { platform: "Google AI Overview", mentions: "455 Mentions", citedPages: "1.4K Cited Pages", icon: "search" },
      { platform: "Google AI Mode", mentions: "614 Mentions", citedPages: "1.8K Cited Pages", icon: "view_in_ar" },
      { platform: "Gemini", mentions: "531 Mentions", citedPages: "437 Cited Pages", icon: "sparkle" },
    ],
    highlight:
      "Demonstrates strong broad organic search reach paired with high citation volume across major AI search surfaces.",
  },
  {
    id: "numeric",
    name: "Numeric",
    tagline: "B2B SaaS / Accounting Tech",
    category: "Accounting Tech & SaaS",
    authorityScore: 41,
    organicTraffic: "39K (+17%)",
    organicKeywords: "17.9K",
    backlinks: "33.6K",
    refDomains: "2.5K",
    aiVisibilityScore: 15,
    totalAiMentions: "262",
    aiCitedPages: "777",
    trafficShare: "28% U.S. traffic share",
    searchPositionsCount: "9,327 organic positions tracked",
    keyRankings: [
      { position: "#1", keyword: "journal entry", volume: "6.6K volume" },
      { position: "#1", keyword: "numeric", volume: "6.6K volume" },
      { position: "#1", keyword: "journal entries", volume: "4.4K volume" },
      { position: "#1", keyword: "accounting entries", volume: "3.6K volume" },
      { position: "#1", keyword: "entry in journal", volume: "2.4K volume" },
      { position: "#1", keyword: "reclassification meaning", volume: "1.3K volume" },
    ],
    aiBreakdown: [
      { platform: "ChatGPT", mentions: "30 Mentions", citedPages: "173 Cited Pages", icon: "forum" },
      { platform: "Google AI Overview", mentions: "74 Mentions", citedPages: "372 Cited Pages", icon: "search" },
      { platform: "Google AI Mode", mentions: "89 Mentions", citedPages: "438 Cited Pages", icon: "view_in_ar" },
      { platform: "Gemini", mentions: "69 Mentions", citedPages: "65 Cited Pages", icon: "sparkle" },
    ],
    highlight:
      "Exceptional educational search dominance converting topic-led informational queries into product visibility.",
  },
  {
    id: "riot-platforms",
    name: "Riot Platforms",
    tagline: "Digital Infrastructure / Tech",
    category: "Infrastructure & Compute",
    authorityScore: 44,
    organicTraffic: "65.6K (+54.1%)",
    organicKeywords: "1.8K (+30.2%)",
    backlinks: "36.2K",
    refDomains: "6.8K",
    aiVisibilityScore: 23,
    totalAiMentions: "1.3K",
    aiCitedPages: "240",
    trafficShare: "85% U.S. traffic share",
    searchPositionsCount: "912 organic positions tracked",
    keyRankings: [
      { position: "#1", keyword: "riot platforms", volume: "4.4K volume" },
      { position: "#1", keyword: "riot blockchain", volume: "1.3K volume" },
      { position: "#1", keyword: "riot platforms news", volume: "880 volume" },
      { position: "#1", keyword: "riot inc", volume: "720 volume" },
      { position: "#1", keyword: "riot platforms inc", volume: "590 volume" },
      { position: "#2", keyword: "riot careers", volume: "Top Tier Intent" },
    ],
    aiBreakdown: [
      { platform: "ChatGPT", mentions: "329 Mentions", citedPages: "181 Cited Pages", icon: "forum" },
      { platform: "Google AI Overview", mentions: "325 Mentions", citedPages: "47 Cited Pages", icon: "search" },
      { platform: "Google AI Mode", mentions: "331 Mentions", citedPages: "53 Cited Pages", icon: "view_in_ar" },
      { platform: "Gemini", mentions: "323 Mentions", citedPages: "32 Cited Pages", icon: "sparkle" },
    ],
    highlight:
      "Balanced distribution across all major AI engine results, indicating powerful brand-entity recognition.",
  },
];

// ── 06 · Measurement & Transparency ──
export const evaluationCriteria: EvaluationCriterion[] = [
  {
    id: "visibility-impressions",
    title: "Visibility & Impressions",
    description: "Frequency of page appearances and exposure breadth across broad SERP environments.",
    icon: "visibility",
    unit: "Exposure Volume",
  },
  {
    id: "rankings-positions",
    title: "Rankings & Positions",
    description: "SERP tracking for priority commercial, technical, and educational search queries.",
    icon: "leaderboard",
    unit: "Top 1-3 & Top 10",
  },
  {
    id: "organic-traffic",
    title: "Organic Traffic",
    description: "Unpaid qualified search traffic volume delivered to key conversion assets.",
    icon: "traffic",
    unit: "Monthly Qualified Visits",
  },
  {
    id: "ai-visibility-mentions",
    title: "AI Visibility & Mentions",
    description: "Quantitative brand & entity presence within AI-generated responses.",
    icon: "neurology",
    unit: "AI Mentions Tracked",
  },
  {
    id: "ai-cited-pages",
    title: "AI-Cited Pages",
    description: "Distinct web pages indexed and cited as authority source URLs inside LLMs.",
    icon: "link_off",
    unit: "Cited Source Count",
  },
  {
    id: "leads-conversions",
    title: "Leads & Conversions",
    description: "Downstream commercial business outcomes and pipeline from organic acquisition.",
    icon: "ads_click",
    unit: "Pipeline & Demos",
  },
];

export const transparencyGuardrails: TransparencyGuardrail[] = [
  {
    title: "No Invented Outcomes",
    description:
      "Unsubstantiated lead, revenue, or pipeline claims are strictly excluded from our portfolio reports. Every metric reflects direct platform audits.",
    icon: "fact_check",
    badge: "Zero Fabrication",
  },
  {
    title: "Verification on Request",
    description:
      "Case studies and performance records are verifiable via live Google Search Console exports, third-party platform reports, and campaign documentation.",
    icon: "verified",
    badge: "100% Verifiable",
  },
  {
    title: "Data Context Accuracy",
    description:
      "Backlinks and traffic snapshots reflect verified dashboard-reported totals captured at specific defined timeframes without skew or distortion.",
    icon: "query_stats",
    badge: "Time-stamped Snapshots",
  },
];

// ── 07 · Contact Information ──
export const seoContactInfo = {
  website: "https://grownfoster.com/",
  websiteDisplay: "grownfoster.com",
  email: "info@grownfoster.com",
  phone: "+91 92026 68977",
  social: "LinkedIn",
  socialUrl: "https://www.linkedin.com/company/grownfoster/",
};
