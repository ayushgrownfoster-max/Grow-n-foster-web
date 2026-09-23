export interface Metric {
  value: string;
  label: string;
  note?: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  text: string;
}

export interface ClientItem {
  name: string;
  industry: string;
}

export interface FeaturedPerformanceProject {
  id: string;
  slug: string;
  filter: "Meta Ads" | "Google Ads";
  tag: string;
  client: string;
  clientFull: string;
  industry: string;
  location: string;
  timeline: string;
  services: string[];
  platforms: string[];
  serviceName: string;
  headline: string;
  intro: string;
  summary: string;
  numbers: Metric[];
  numbersNote: string;
  imageNote: string;
  image?: string;
  imageBgColor?: string;
  challenge: string;
  goal: string;
  steps: HowItWorksStep[];
  deliverablesIntro: string;
  deliverables: string[];
  beforeAfter: {
    beforeLabel: string;
    beforeText: string;
    afterLabel: string;
    afterText: string;
  };
  quote?: {
    text: string;
    author: string;
    designation: string;
  };
}

export interface PerformanceResultCard {
  id: string;
  filter: "Meta Ads" | "Google Ads";
  tag: string;
  client: string;
  industry: string;
  summary: string;
  numbers: Metric[];
}

export const perfHeroStats = [
  { number: "3.8x", label: "average campaign ROAS" },
  { number: "₹90–700", label: "average B2C cost per lead" },
  { number: "95%+", label: "fake lead reduction via OTP" },
];

export const perfHowItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    title: "Audience & Intent Mapping",
    text: "Laser-focused HNI behavior clusters, geo-fencing, and high-intent search keywords mapped before ad launch.",
  },
  {
    number: "02",
    title: "Creative & Landing Friction",
    text: "High-converting ad copy, direct WhatsApp conversion flows, and OTP verification gates built for quality.",
  },
  {
    number: "03",
    title: "Multi-Channel Ad Scale",
    text: "Centralized ad architecture running Meta Ads and Google Search in tandem for maximum pipeline volume.",
  },
  {
    number: "04",
    title: "CRM & Instant Front-Desk Routing",
    text: "Leads automatically verified, tagged by location/branch, and routed to your sales team in under 3 minutes.",
  },
];

export const perfClientList: ClientItem[] = [
  { name: "Gurugram Pilates Studio", industry: "Boutique Fitness" },
  { name: "Indian Spice Exporter", industry: "Import & Export" },
  { name: "25-Location Gym Chain", industry: "Fitness Network" },
  { name: "NCR Luxury Residency", industry: "Real Estate" },
  { name: "HealthStream Diagnostics", industry: "Healthcare" },
  { name: "Aura Living Goods", industry: "E-Commerce" },
  { name: "Planora BIM Systems", industry: "SaaS & B2B" },
  { name: "Apex Dental Clinic", industry: "Local Healthcare" },
  { name: "Stallion Commercial Finance", industry: "Fintech" },
  { name: "Velvet Couture Dubai", industry: "Luxury Retail" },
  { name: "Urban Logistics India", industry: "Logistics" },
  { name: "Metropolis Co-Working", industry: "Commercial Real Estate" },
  { name: "CloudCraft Tech Solutions", industry: "Managed IT" },
  { name: "BioGen Organics", industry: "D2C FMCG" },
];

export const featuredPerformanceProjects: FeaturedPerformanceProject[] = [
  {
    id: "boutique-wellness",
    slug: "boutique-wellness",
    filter: "Meta Ads",
    tag: "Meta & Google Ads",
    client: "Boutique Wellness Gurugram",
    clientFull: "Pilates Studio, Boutique Fitness",
    industry: "Wellness / Boutique Fitness",
    location: "Gurugram, Haryana",
    timeline: "2-Month Pre-Launch + 6-Month Scale",
    services: ["HNI Behavioral Targeting", "Meta Ads", "Google Search Ads", "Geo-Fencing"],
    platforms: ["Meta Ads Manager", "Google Ads", "WhatsApp Business"],
    serviceName: "Meta & Google Ads Campaign",
    headline: "Targeting the Top 1%: Filling a ₹1.5L Pilates Membership in Gurugram",
    intro:
      "This boutique studio's core package is priced at ₹1.5 lakh for six months. Standard local-radius targeting would have burned budget on unqualified leads. We built a precision-targeted campaign delivering HNI prospects capable of converting at premium pricing.",
    summary:
      "Targeted HNI behavior clusters and Gurugram's posh residential sectors, excluding mass-market fitness browsers.",
    numbers: [
      { value: "₹90–700", label: "Cost per Lead (CPL)" },
      { value: "2–5%", label: "Click-Through Rate" },
      { value: "10–15%", label: "Lead-to-Trial Rate" },
    ],
    numbersNote: "Measured across 8 months. Source: Meta Ads Manager and studio CRM booking logs.",
    imageNote: "Pilates studio ad creative & landing page mockup",
    image: "/projects/perf/boutique-wellness.jpg",
    imageBgColor: "#B4BE98",
    challenge:
      "Standard fitness ads target 'Pilates near me', attracting budget-conscious fitness goers who could never afford a ₹1.5L membership. The challenge was ensuring every rupee of ad spend targeted individuals with verified high net worth.",
    goal: "Fill high-ticket membership waitlists and drive qualified trial visits without diluting brand exclusivity.",
    steps: [
      {
        number: "01",
        title: "HNI & UHNI Targeting",
        text: "Built audiences around luxury property ownership, international travel, and premium credit card usage signals.",
      },
      {
        number: "02",
        title: "Posh Sector Geo-Fence",
        text: "Restricted ad delivery strictly to Gurugram's top-tier residential enclaves and golf resort communities.",
      },
      {
        number: "03",
        title: "High-Intent Google Search",
        text: "Captured searchers looking for 'private Pilates studio' and 'luxury fitness Gurugram'.",
      },
      {
        number: "04",
        title: "Exclusivity Creative",
        text: "Ad copy emphasized private reformer sessions, expert instructors, and limited studio access.",
      },
      {
        number: "05",
        title: "Seamless Trial Booking",
        text: "Direct concierge booking via WhatsApp to qualify prospective members on first contact.",
      },
    ],
    deliverablesIntro:
      "Services used: HNI Behavioral Targeting, Meta Ads, Google Search Ads, Geo-Fencing, Concierge Booking",
    deliverables: [
      "HNI demographic buyer persona matrix",
      "Gurugram sector geo-fence map",
      "High-converting video & carousel ad creatives",
      "Search campaign keyword architecture",
      "WhatsApp concierge intake flow",
      "Bi-weekly ROAS audit reports",
    ],
    beforeAfter: {
      beforeLabel: "Standard local ads",
      beforeText: "Flooded front desk with unqualified 'Pilates near me' inquiries",
      afterLabel: "HNI precision campaign",
      afterText: "10–15% lead-to-trial conversion rate at ₹1.5L membership price point",
    },
    quote: {
      text: "The team brought surgical precision to our campaign. Instead of flooding us with random inquiries, every lead was someone who could actually afford our membership.",
      author: "Radhika Malhotra",
      designation: "Managing Director, Gurugram Boutique Pilates",
    },
  },
  {
    id: "import-export-dubai",
    slug: "import-export-dubai",
    filter: "Meta Ads",
    tag: "B2B Trade Ads",
    client: "Indian Food Exporter",
    clientFull: "Indian Food Exporter, UAE Trade",
    industry: "Import & Export — Spices & Grains",
    location: "India → UAE (Dubai)",
    timeline: "6 Months",
    services: ["Click-to-WhatsApp Ads", "Meta B2B Targeting", "Google Search Ads", "Retargeting"],
    platforms: ["Meta Ads", "Google Ads", "WhatsApp Business API"],
    serviceName: "B2B Trade Performance Campaign",
    headline: "Reaching Dubai's Decision-Makers: A Meta & Google Ads Strategy for an Indian Exporter",
    intro:
      "Exporting spices, whole grains, and rice to Dubai required connecting directly with procurement heads and supermarket buyers. We combined Meta interest clusters with Google Search intent and Click-to-WhatsApp flows.",
    summary:
      "Targeted UAE retail buyers, trading houses, and procurement heads with direct Click-to-WhatsApp trade ads.",
    numbers: [
      { value: "₹500–1,500", label: "Cost per B2B Lead" },
      { value: "1–3%", label: "Click-Through Rate" },
      { value: "15–20%", label: "Lead-to-Conversation Rate" },
    ],
    numbersNote: "Measured over 6 months across UAE campaigns. Source: Meta Ads Manager & WhatsApp lead tracker.",
    imageNote: "WhatsApp trade campaign dashboard & bulk order inquiries",
    image: "/projects/perf/import-export-dubai.jpg",
    imageBgColor: "#C8CFB4",
    challenge:
      "The client had zero brand presence in Dubai and no existing buyer list. Traditional contact forms had low response rates from busy trade buyers who prefer instant messaging.",
    goal: "Open direct bulk order conversations with Dubai supermarket managers, procurement leads, and distributors.",
    steps: [
      {
        number: "01",
        title: "B2B Trade Layering",
        text: "Layered import/export, wholesale, and supermarket management interest tags over UAE location filters.",
      },
      {
        number: "02",
        title: "Click-to-WhatsApp Ads",
        text: "Bypassed long contact forms, letting buyers initiate instant WhatsApp chats about specs, MOQs, and pricing.",
      },
      {
        number: "03",
        title: "Google Sourcing Keywords",
        text: "Captured active sourcing queries like 'rice exporter India to Dubai' and 'wholesale spice supplier UAE'.",
      },
      {
        number: "04",
        title: "Retargeting Pool",
        text: "Retargeted non-converting trade visitors over 30 days to stay top-of-mind during long procurement cycles.",
      },
      {
        number: "05",
        title: "Lookalike Scaling",
        text: "Generated Meta Lookalike audiences from validated WhatsApp buyer threads to expand reach across the GCC.",
      },
    ],
    deliverablesIntro:
      "Services used: Click-to-WhatsApp Ads, Meta B2B Targeting, Google Search Ads, Retargeting",
    deliverables: [
      "UAE trade buyer targeting playbook",
      "Click-to-WhatsApp conversation flow",
      "Export specification landing pages",
      "Google Search trade keyword sets",
      "Multi-touch retargeting sequence",
      "Weekly trade lead report",
    ],
    beforeAfter: {
      beforeLabel: "Cold outreach before",
      beforeText: "Zero overseas buyer list & low email response rates",
      afterLabel: "Click-to-WhatsApp system",
      afterText: "15-20% of leads converting into active WhatsApp bulk trade chats",
    },
    quote: {
      text: "Connecting directly via WhatsApp with vetted Dubai procurement heads gave us immediate traction in a new market without waiting months for trade shows.",
      author: "Vikramjit Singh",
      designation: "Head of Exports, Agrico Overseas",
    },
  },
  {
    id: "fitness-chain-25-locations",
    slug: "fitness-chain-25-locations",
    filter: "Google Ads",
    tag: "Multi-Location Scaling",
    client: "25-Location Gym Network",
    clientFull: "25-Location Fitness Chain",
    industry: "Fitness & Wellness Network",
    location: "Pan-India (25 Locations)",
    timeline: "10 Months",
    services: ["Centralized Ad Architecture", "Instant Form Branch Routing", "Local Hyper-Focus", "Google Search Ads"],
    platforms: ["Meta Ads Manager", "Google Ads", "Google Sheets Lead API"],
    serviceName: "Multi-Location Ad Scale",
    headline: "One Campaign, 25 Gyms: Simplifying Multi-Location Lead Gen Without Losing Local Performance",
    intro:
      "Running campaigns for 25 gym locations individually creates operational chaos. We built a single centralized ad architecture with dynamic branch selection lead forms, plus dedicated hyper-local pushes for lagging branches.",
    summary:
      "Centralized 25 gym locations under 1 master campaign with automatic branch lead routing to front desks.",
    numbers: [
      { value: "₹50–350", label: "Network Average CPL" },
      { value: "2–5%", label: "Click-Through Rate" },
      { value: "20–35%", label: "Lead-to-Trial Rate" },
    ],
    numbersNote: "Measured across 25 locations over 10 months. Source: Central CRM & Meta lead form metrics.",
    imageNote: "Branch selector lead form & multi-location performance dashboard",
    image: "/projects/perf/fitness-chain-25-locations.jpg",
    imageBgColor: "#DDDDD0",
    challenge:
      "Managing 25 separate campaigns meant 25x the setup, monitoring, and routing overhead. The in-house team was overwhelmed by manual lead distribution across branch front desks.",
    goal: "Unify network ad spend under one central structure while maintaining high local trial conversion rates.",
    steps: [
      {
        number: "01",
        title: "Master Campaign Architecture",
        text: "Consolidated budget into 1 master campaign running high-converting video and trial pass creatives.",
      },
      {
        number: "02",
        title: "Branch Selector Instant Form",
        text: "Added a mandatory 'Select your nearest gym branch' dropdown directly inside the Meta Instant Form.",
      },
      {
        number: "03",
        title: "Automated Lead Routing",
        text: "Integrated webhook automation that instantly routed leads to the respective gym manager's phone.",
      },
      {
        number: "04",
        title: "Google 'Gym Near Me' Search",
        text: "Captured high-intent searchers looking for gym memberships in specific pin codes.",
      },
      {
        number: "05",
        title: "Hyper-Local Booster Ads",
        text: "Ran tight-radius 3km booster campaigns for 5 lower-footfall branches needing extra lead velocity.",
      },
    ],
    deliverablesIntro:
      "Services used: Centralized Ad Architecture, Instant Form Branch Routing, Local Hyper-Focus, Google Search Ads",
    deliverables: [
      "Master multi-location ad account setup",
      "Dynamic branch dropdown lead form",
      "Instant Lead Webhook & Zapier routing",
      "Google Search hyper-local campaign structure",
      "Branch-level ROI dashboard",
      "Monthly front-desk conversion tracker",
    ],
    beforeAfter: {
      beforeLabel: "Fragmented accounts before",
      beforeText: "25 separate campaigns with manual delayed lead forwarding",
      afterLabel: "Unified centralized system",
      afterText: "Automated routing in under 3 minutes & 20–35% lead-to-trial rate",
    },
    quote: {
      text: "Consolidating 25 branches into one clean ad architecture eliminated chaos. Every lead reached the exact branch team within minutes without manual intervention.",
      author: "Anand Verma",
      designation: "VP Marketing, PowerPulse Fitness Chain",
    },
  },
  {
    id: "real-estate-otp-verification",
    slug: "real-estate-otp-verification",
    filter: "Meta Ads",
    tag: "High-Ticket Real Estate",
    client: "Gurugram Luxury Real Estate",
    clientFull: "NCR Real Estate Developer",
    industry: "Luxury Real Estate",
    location: "Gurugram / Delhi NCR",
    timeline: "12 Months",
    services: ["OTP Verification Integration", "Meta High-Ticket Ads", "Google Search Ads", "Bot Filtering"],
    platforms: ["Meta Ads", "Google Ads", "SMS OTP Gateway", "Salesforce CRM"],
    serviceName: "High-Ticket Lead Verification System",
    headline: "Solving the Fake-Lead Problem: How OTP Verification Fixed a Real Estate Meta Campaign",
    intro:
      "High-ticket luxury property campaigns frequently suffer from invalid phone numbers and accidental lead form taps. We integrated a live SMS OTP verification step into Meta forms, reducing fake leads by 95%+.",
    summary:
      "Integrated SMS OTP verification directly into ad forms, delivering 100% phone-verified buyer leads to sales agents.",
    numbers: [
      { value: "₹250–1,000", label: "Cost per Verified Lead" },
      { value: "95%+", label: "Fake Lead Reduction" },
      { value: "10–15%", label: "Lead-to-Site Visit Rate" },
    ],
    numbersNote: "Measured over 12 months across ₹2Cr+ property launches. Source: OTP gateway & Salesforce CRM.",
    imageNote: "OTP verification screen & CRM lead verification audit log",
    image: "/projects/perf/real-estate-otp-verification.jpg",
    imageBgColor: "#B4BE98",
    challenge:
      "Sales teams were wasting 60%+ of their time calling invalid numbers, junk leads, and accidental clicks generated by standard Meta Instant Forms.",
    goal: "Eliminate invalid leads completely and increase the proportion of verified buyers booking physical site visits.",
    steps: [
      {
        number: "01",
        title: "Baseline Data Audit",
        text: "Ran standard forms for 7 days to baseline cost-per-lead and identify exact fake lead submission patterns.",
      },
      {
        number: "02",
        title: "SMS OTP Verification Gate",
        text: "Embedded a mandatory 4-digit SMS OTP verification step before the lead form could be submitted.",
      },
      {
        number: "03",
        title: "Google Search Integration",
        text: "Captured active property buyers searching for 'luxury 3BHK Gurugram' and 'golf course road apartments'.",
      },
      {
        number: "04",
        title: "Pre-Qualified Copywriting",
        text: "Stated property pricing clearly in ad headlines to filter out non-budget buyers before the click.",
      },
      {
        number: "05",
        title: "CRM Auto-Sync",
        text: "Pushed OTP-verified phone numbers straight into sales agents' CRM with instant WhatsApp alerts.",
      },
    ],
    deliverablesIntro:
      "Services used: OTP Verification Integration, Meta High-Ticket Ads, Google Search Ads, Bot Filtering",
    deliverables: [
      "SMS OTP Verification API integration",
      "High-ticket property ad creative suite",
      "Price-qualifying ad copy framework",
      "Google Search intent campaigns",
      "Real-time CRM lead sync pipeline",
      "Site visit conversion reporting",
    ],
    beforeAfter: {
      beforeLabel: "Standard Meta form before",
      beforeText: "60%+ junk leads, mistyped numbers, and wasted sales calls",
      afterLabel: "OTP-verified lead system",
      afterText: "95%+ reduction in fake leads & 10–15% conversion to physical site visits",
    },
    quote: {
      text: "The OTP verification step transformed our lead quality. Our sales team stopped wasting time on fake numbers and focused 100% on serious buyers.",
      author: "Rajiv Kapoor",
      designation: "Sales Director, Apex Group Real Estate",
    },
  },
];

export const morePerformanceResults: PerformanceResultCard[] = [
  {
    id: "healthstream-diagnostics",
    filter: "Meta Ads",
    tag: "Healthcare Ads",
    client: "HealthStream Diagnostics",
    industry: "Healthcare & Diagnostics",
    summary:
      "Meta ad campaigns promoting full-body health checkup packages with home sample collection across Delhi NCR.",
    numbers: [
      { value: "₹180", label: "cost per booking" },
      { value: "4.2%", label: "click-through rate" },
      { value: "320+", label: "monthly checkups" },
    ],
  },
  {
    id: "aura-living-goods",
    filter: "Google Ads",
    tag: "E-Commerce Shopping",
    client: "Aura Living Goods",
    industry: "Home & Lifestyle E-Commerce",
    summary:
      "Google Shopping & Performance Max campaigns targeting high-intent home decor buyers across tier-1 cities.",
    numbers: [
      { value: "4.5x", label: "average ROAS" },
      { value: "₹450", label: "cost per acquisition" },
      { value: "+180%", label: "quarterly sales growth" },
    ],
  },
  {
    id: "planora-bim-saas",
    filter: "Google Ads",
    tag: "B2B SaaS Search",
    client: "Planora BIM Viewer",
    industry: "Industrial SaaS / 3D Web",
    summary:
      "Google Search campaigns capturing architects and structural engineers seeking 3D WebGL BIM file review software.",
    numbers: [
      { value: "₹1,200", label: "cost per demo request" },
      { value: "6.8%", label: "search CTR" },
      { value: "42", label: "enterprise demos/mo" },
    ],
  },
  {
    id: "apex-dental-clinic",
    filter: "Meta Ads",
    tag: "Local Service Ads",
    client: "Apex Dental Care",
    industry: "Dental & Healthcare",
    summary:
      "Hyper-local Meta Ads for teeth whitening and clear aligners targeting residents within a 5km clinic radius.",
    numbers: [
      { value: "₹220", label: "cost per consultation" },
      { value: "18%", label: "consultation booking rate" },
      { value: "65+", label: "new patients monthly" },
    ],
  },
  {
    id: "stallion-finance",
    filter: "Google Ads",
    tag: "Fintech Search",
    client: "Stallion Commercial Finance",
    industry: "Financial Services",
    summary:
      "Search campaigns targeting commercial real estate investors looking for working capital and asset loans.",
    numbers: [
      { value: "₹1,800", label: "cost per loan inquiry" },
      { value: "5.4%", label: "CTR on intent keywords" },
      { value: "28", label: "qualified loan leads/mo" },
    ],
  },
  {
    id: "velvet-couture-dubai",
    filter: "Meta Ads",
    tag: "Luxury Retail Ads",
    client: "Velvet Couture Dubai",
    industry: "Luxury Fashion & Retail",
    summary:
      "Instagram Catalog & Story ads targeting GCC luxury shoppers for haute couture evening wear collections.",
    numbers: [
      { value: "5.2x", label: "blended ROAS" },
      { value: "3.8%", label: "ad CTR" },
      { value: "140+", label: "high-ticket orders" },
    ],
  },
  {
    id: "urban-logistics",
    filter: "Google Ads",
    tag: "Logistics Search",
    client: "Urban Logistics India",
    industry: "Supply Chain & Freight",
    summary:
      "Google Search campaigns targeting manufacturers searching for reliable inter-city freight and warehousing.",
    numbers: [
      { value: "₹950", label: "cost per contract lead" },
      { value: "8.2%", label: "conversion rate" },
      { value: "35", label: "corporate contract inquiries" },
    ],
  },
  {
    id: "metropolis-coworking",
    filter: "Meta Ads",
    tag: "Real Estate Ads",
    client: "Metropolis Workspaces",
    industry: "Commercial Co-Working",
    summary:
      "Lead generation campaigns targeting startups and SMB founders needing private office desks in Bengaluru.",
    numbers: [
      { value: "₹340", label: "cost per desk lead" },
      { value: "22%", label: "tour visit rate" },
      { value: "85", label: "hot desk inquiries/mo" },
    ],
  },
  {
    id: "cloudcraft-tech",
    filter: "Google Ads",
    tag: "Managed IT Search",
    client: "CloudCraft Tech Solutions",
    industry: "Cloud & Managed IT",
    summary:
      "Google Search ads bidding on AWS migration, cloud security, and managed IT services keywords.",
    numbers: [
      { value: "₹1,450", label: "cost per SQL" },
      { value: "4.9%", label: "search CTR" },
      { value: "19", label: "signed SLA clients" },
    ],
  },
  {
    id: "biogen-organics",
    filter: "Meta Ads",
    tag: "D2C Meta Scaling",
    client: "BioGen Organics",
    industry: "D2C FMCG / Skincare",
    summary:
      "Advantage+ Shopping campaigns running User-Generated Video ads for organic skincare products.",
    numbers: [
      { value: "3.9x", label: "ROAS at scale" },
      { value: "₹310", label: "CPA per customer" },
      { value: "1,200+", label: "orders monthly" },
    ],
  },
];

export type PerformanceMarketingProject = FeaturedPerformanceProject;
export const performanceMarketingProjects = featuredPerformanceProjects;