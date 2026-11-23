export interface KnowledgeBaseTopic {
  title: string;
  slug: string;
  series: string;
  seriesSlug: string;
  order: number;
  isHome: boolean;
  categoryBadge: string;
  readTime: number;
  excerpt: string;
  audience?: string;
  prerequisites?: string;
  quickActions?: { label: string; url: string; isExternal?: boolean }[];
  contentHtml?: string;
  keyTakeaways?: string[];
  faqItems?: { question: string; answer: string }[];
}

export interface KnowledgeBaseSeries {
  seriesSlug: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  description: string;
  videoTitle: string;
  videoUrl: string;
  topics: KnowledgeBaseTopic[];
}

export const knowledgeBaseSeriesData: Record<string, KnowledgeBaseSeries> = {
  "digital-marketing": {
    seriesSlug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Absolute beginners",
    badge: "Absolute beginners",
    icon: "campaign",
    description:
      "Master digital marketing from scratch. Learn SEO, social media, email marketing, content strategy, paid advertising, and conversion optimization with our step-by-step guides.",
    videoTitle: "Digital Marketing Video Tutorials",
    videoUrl: "/contact",
    topics: [
      {
        title: "Digital Marketing - Home",
        slug: "digital-marketing-home",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 1,
        isHome: true,
        categoryBadge: "Absolute beginners",
        readTime: 6,
        excerpt:
          "Marketing of products and services through the use of digital technologies, mainly through the internet, including mobile phones and other digital medium falls under the umbrella of digital marketing. This tutorial explains how you can use popular social media platforms such as Facebook, Twitter, LinkedIn, and Google+ to promote your business and create greater awareness about the products and services you offer.",
        audience:
          "This tutorial is primarily going to help all those readers who are into marketing and advertising and specifically those who aspire to build a career in Digital Marketing.",
        prerequisites:
          "Before proceeding with this tutorial, you should have a good understanding of the fundamental concepts of marketing and advertising, and how marketing campaigns are carried out.",
        quickActions: [
          { label: "Job Search", url: "/contact" },
          { label: "PDF Version", url: "#" },
          { label: "Quick Guide", url: "#quick-guide" },
          { label: "Resources", url: "#resources" },
          { label: "Discussion", url: "/contact" },
        ],
        keyTakeaways: [
          "Digital marketing enables targeted, measurable, and cost-effective customer acquisition compared to traditional advertising.",
          "Core digital channels include SEO, Search Engine Marketing (PPC), Content Marketing, Social Media, and Email Marketing.",
          "Building clear conversion funnels and tracking key performance indicators (KPIs) is essential for measurable ROI.",
          "Mobile-first design and page performance directly impact both search rankings and visitor conversion rates.",
        ],
        faqItems: [
          {
            question: "What is the primary objective of Digital Marketing?",
            answer:
              "The primary goal of digital marketing is to attract targeted audiences, engage prospective customers online, build brand trust, and convert traffic into qualified leads and sales.",
          },
          {
            question: "How is digital marketing different from traditional marketing?",
            answer:
              "Digital marketing offers precise demographic and intent-based targeting, real-time analytics, lower entry costs, interactive engagement, and measurable conversion tracking that traditional broadcast media cannot match.",
          },
        ],
      },
      {
        title: "Digital Marketing - Overview",
        slug: "digital-marketing-overview",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 2,
        isHome: false,
        categoryBadge: "Core Concept",
        readTime: 7,
        excerpt:
          "Explore the complete digital marketing landscape. Learn how organic search, paid advertising, content clustering, and social presence work together to build predictable growth funnels.",
        audience:
          "Marketing students, small business owners, and digital strategists seeking a birds-eye view of how digital marketing channels integrate.",
        prerequisites:
          "Basic familiarity with online browsing, websites, search engines, and social media platforms.",
        quickActions: [
          { label: "Quick Guide", url: "#quick-guide" },
          { label: "Resources", url: "#resources" },
          { label: "Book Consultation", url: "/contact" },
        ],
        keyTakeaways: [
          "Multi-channel marketing creates multiple touchpoints, increasing brand recall and conversion probability.",
          "Inbound marketing attracts customers through value (SEO, blogs), while outbound marketing reaches prospects directly (cold email, PPC).",
          "A modern digital strategy balances short-term paid acquisition with long-term organic compounding.",
        ],
      },
      {
        title: "Digital Marketing - SEO",
        slug: "digital-marketing-seo",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 3,
        isHome: false,
        categoryBadge: "Organic Growth",
        readTime: 8,
        excerpt:
          "Search Engine Optimization (SEO) is the process of improving your website's visibility on search engines like Google. Discover technical audits, on-page optimization, and high-authority link building.",
        audience:
          "Website owners, content creators, and SEO specialists who want to rank on Google's Page 1 for high-intent commercial keywords.",
        prerequisites:
          "Basic understanding of how search engines discover, crawl, index, and rank web pages.",
        quickActions: [
          { label: "SEO Checklist", url: "#checklist" },
          { label: "Free SEO Audit", url: "/contact" },
          { label: "Resources", url: "#resources" },
        ],
        keyTakeaways: [
          "Keyword intent dictates whether a searcher is looking for information, comparison, or immediate purchase.",
          "On-page SEO includes titles, meta tags, header hierarchy, internal linking, and semantic content depth.",
          "Technical SEO ensures mobile responsiveness, crawlability, clean canonical tags, and fast Core Web Vitals.",
        ],
      },
      {
        title: "Digital Marketing - Social Media",
        slug: "digital-marketing-social-media",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 4,
        isHome: false,
        categoryBadge: "Community & Brand",
        readTime: 7,
        excerpt:
          "Social Media Marketing leverages platforms like LinkedIn, Meta, X, Instagram, and YouTube to build brand communities, drive organic engagement, and amplify message reach.",
        audience:
          "Social media managers, founders, and brand marketers wanting to establish authority and customer rapport.",
        prerequisites:
          "Understanding of personal and business profiles on major social networking platforms.",
        quickActions: [
          { label: "Social Guide", url: "#guide" },
          { label: "Content Calendar", url: "#resources" },
          { label: "Consultation", url: "/contact" },
        ],
        keyTakeaways: [
          "Different networks cater to distinct demographics: LinkedIn for B2B, Instagram for visual brands, YouTube for long-form education.",
          "Consistency and authentic engagement outperform sporadic high-budget advertising.",
          "Repurposing long-form content into carousels, video shorts, and text posts maximizes content ROI.",
        ],
      },
      {
        title: "Digital Marketing - Content",
        slug: "digital-marketing-content",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 5,
        isHome: false,
        categoryBadge: "Brand Authority",
        readTime: 8,
        excerpt:
          "Content Marketing focuses on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — ultimately driving profitable customer action.",
        audience:
          "Content strategists, copywriters, and business leaders building industry authority through authoritative writing.",
        prerequisites:
          "Fundamental grasp of buyer personas, storytelling, and digital content distribution channels.",
        quickActions: [
          { label: "Content Funnel", url: "#funnel" },
          { label: "Topic Clusters", url: "#resources" },
          { label: "Get Help", url: "/contact" },
        ],
        keyTakeaways: [
          "Content should address every stage of the customer journey: Awareness (TOFU), Consideration (MOFU), and Decision (BOFU).",
          "Pillar pages and topic cluster models signal topical authority to search engines and visitors alike.",
          "Quality depth and original insights consistently outperform generic automated content.",
        ],
      },
      {
        title: "Digital Marketing - Email",
        slug: "digital-marketing-email",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 6,
        isHome: false,
        categoryBadge: "Retention & Pipeline",
        readTime: 6,
        excerpt:
          "Email marketing remains one of the highest-ROI digital channels. Learn automated welcome sequences, behavioral segmentation, cart recovery, and B2B cold email strategies.",
        audience:
          "Email marketers, CRM managers, and e-commerce operators seeking to nurture prospects and drive recurring revenue.",
        prerequisites:
          "Familiarity with email service providers (ESPs) and basic lead capture mechanisms.",
        quickActions: [
          { label: "Email Sequences", url: "#sequences" },
          { label: "Deliverability Guide", url: "#resources" },
          { label: "Book Strategy Call", url: "/contact" },
        ],
        keyTakeaways: [
          "Segmentation by user behavior and purchase history dramatically lifts open and click-through rates.",
          "Deliverability requires authenticating SPF, DKIM, and DMARC records alongside list cleanliness.",
          "Automated behavioral workflows run 24/7 without requiring manual intervention for every message.",
        ],
      },
      {
        title: "Digital Marketing - Mobile",
        slug: "digital-marketing-mobile",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 7,
        isHome: false,
        categoryBadge: "Mobile First",
        readTime: 5,
        excerpt:
          "Over 65% of all web traffic originates from mobile devices. Understand mobile responsiveness, touch-friendly UI design, SMS marketing, and App Store Optimization (ASO).",
        audience:
          "Web designers, mobile app marketers, and product managers creating mobile-first user experiences.",
        prerequisites:
          "Basic understanding of smartphone browsing habits and responsive web layout fundamentals.",
        quickActions: [
          { label: "Mobile Audit", url: "#audit" },
          { label: "Best Practices", url: "#resources" },
          { label: "Contact Team", url: "/contact" },
        ],
        keyTakeaways: [
          "Google evaluates websites using mobile-first indexing — the mobile version is the primary benchmark.",
          "Streamlining checkout friction and tap targets boosts mobile conversion rates substantially.",
          "SMS campaigns have open rates above 90% when used for time-sensitive, permission-based updates.",
        ],
      },
      {
        title: "Digital Marketing - Pay Per Click",
        slug: "digital-marketing-pay-per-click",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 8,
        isHome: false,
        categoryBadge: "Paid Search",
        readTime: 9,
        excerpt:
          "Pay-Per-Click (PPC) advertising through Google Ads enables businesses to appear at the very moment prospective buyers search for relevant products or services. Learn bidding, match types, and Quality Score.",
        audience:
          "PPC managers, performance advertisers, and business owners looking to scale qualified leads rapidly.",
        prerequisites:
          "Familiarity with search engine result pages (SERPs) and cost-per-click advertising models.",
        quickActions: [
          { label: "Google Ads Checklist", url: "#ads" },
          { label: "PPC Audit", url: "/contact" },
          { label: "Case Studies", url: "/portfolio/performance-marketing" },
        ],
        keyTakeaways: [
          "High Quality Scores reduce cost-per-click (CPC) and award better ad placement on Google.",
          "Negative keyword lists eliminate wasted spend on irrelevant search queries.",
          "Landing page relevance must mirror the search query and ad copy promises directly.",
        ],
      },
      {
        title: "Digital Marketing - CRO",
        slug: "digital-marketing-cro",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 9,
        isHome: false,
        categoryBadge: "Conversion Optimization",
        readTime: 7,
        excerpt:
          "Conversion Rate Optimization (CRO) uses quantitative data and qualitative user feedback to increase the percentage of website visitors who complete a desired action, such as filling a form or buying.",
        audience:
          "Growth marketers, UX designers, and e-commerce managers wanting higher revenue from existing traffic.",
        prerequisites:
          "Knowledge of website conversion funnels, landing pages, and analytics tracking.",
        quickActions: [
          { label: "CRO Framework", url: "#cro" },
          { label: "Heatmap Guide", url: "#resources" },
          { label: "Request Audit", url: "/contact" },
        ],
        keyTakeaways: [
          "Small percentage increases in conversion rate compound into exponential revenue growth.",
          "A/B testing validates hypotheses with real traffic before committing to permanent design overhauls.",
          "Reducing form fields and clarifying value propositions are the most effective quick CRO wins.",
        ],
      },
      {
        title: "Digital Marketing - Web Analytics",
        slug: "digital-marketing-web-analytics",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 10,
        isHome: false,
        categoryBadge: "Data & Attribution",
        readTime: 8,
        excerpt:
          "Web Analytics provides the empirical data required to validate marketing campaigns. Learn how to configure Google Analytics 4 (GA4), set up custom events, track UTM tags, and calculate ROAS.",
        audience:
          "Analytics specialists, marketing directors, and data-driven operators managing marketing spend.",
        prerequisites:
          "Understanding of website visits, sessions, pageviews, and basic conversion events.",
        quickActions: [
          { label: "GA4 Setup Guide", url: "#ga4" },
          { label: "UTM Builder", url: "#resources" },
          { label: "Talk to Expert", url: "/contact" },
        ],
        keyTakeaways: [
          "Google Analytics 4 uses an event-driven data model instead of legacy session-based tracking.",
          "Consistent UTM parameter tagging is non-negotiable for multi-channel campaign attribution.",
          "Attribution models show which touchpoints contributed to conversions along the full buyer journey.",
        ],
      },
      {
        title: "Digital Marketing - Facebook",
        slug: "digital-marketing-facebook",
        series: "Digital Marketing",
        seriesSlug: "digital-marketing",
        order: 11,
        isHome: false,
        categoryBadge: "Paid Social",
        readTime: 8,
        excerpt:
          "Meta Ads Manager offers hyper-targeted customer acquisition across Facebook, Instagram, and Messenger. Master Conversions API (CAPI), lookalike audiences, and high-performing creative formats.",
        audience:
          "Paid social media advertisers, e-commerce brands, and lead generation specialists.",
        prerequisites:
          "Familiarity with Facebook Business Manager, ad accounts, and visual ad creatives.",
        quickActions: [
          { label: "Meta Ads Strategy", url: "#strategy" },
          { label: "Pixel Setup", url: "#resources" },
          { label: "Free Consultation", url: "/contact" },
        ],
        keyTakeaways: [
          "Server-side Conversions API (CAPI) bypasses browser ad-blockers and iOS privacy restrictions.",
          "Broad targeting combined with creative diversity allows Meta's AI algorithms to find optimal buyers.",
          "Testing new visual hooks and headlines weekly prevents ad fatigue and maintains profitable ROAS.",
        ],
      },
    ],
  },
};
