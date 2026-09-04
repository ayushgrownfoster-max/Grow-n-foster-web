export interface MetricItem {
  value: string;
  label: string;
  note?: string;
}

export interface ApproachStep {
  title: string;
  description: string;
  badge?: string;
}

export interface PerformanceMarketingProject {
  id: string;
  tagline: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  services: string;
  duration: string;
  badgeTags: string[];
  image?: string;
  imageAlt?: string;
  metrics: MetricItem[];
  challenge: string;
  approachIntro?: string;
  approachSteps: ApproachStep[];
  keyInsight: string;
  resultsSummary: string;
  testimonial?: {
    quote: string;
    author: string;
  };
  ctaText: string;
  ctaButtonText?: string;
  ctaLink: string;
}

export const performanceMarketingProjects: PerformanceMarketingProject[] = [
  {
    id: "boutique-wellness",
    tagline: "BOUTIQUE WELLNESS · META ADS & GOOGLE ADS",
    title: "Targeting the Top 1%: Filling a ₹1.5L Pilates Membership in Gurugram",
    client: "[Pilates Studio Name]",
    industry: "Wellness / Boutique Fitness",
    location: "Gurugram, Haryana",
    services: "Meta Ads · Google Ads",
    duration: "2-Month Pre-Launch Campaign + 6 Months Post-Opening",
    badgeTags: ["Boutique Wellness", "Meta Ads", "Google Ads", "HNI Targeting"],
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    imageAlt: "Bright boutique Pilates studio with reformer machines",
    metrics: [
      {
        value: "₹90–700",
        label: "Cost per Lead (CPL)",
        note: "Highly targeted audience",
      },
      {
        value: "2–5%",
        label: "Click-Through Rate (CTR)",
        note: "Exclusivity-led creative",
      },
      {
        value: "10–15%",
        label: "Lead-to-Trial Conversion Rate",
        note: "Qualified high-intent leads",
      },
    ],
    challenge:
      "This studio's core package is priced at ₹1.5 lakh for six months — a figure that rules out the broad, “Pilates near me” audience most boutique fitness marketing is built around. Standard local-radius, interest-based targeting would have filled the funnel with people who liked the idea of Pilates but could never afford this membership, burning budget on leads the studio's team could never close. The real challenge wasn't generating interest — it was making sure every rupee of ad spend only reached people who could realistically say yes at this price.",
    approachIntro:
      "Campaigns ran in two phases: a 2-month pre-launch push to build a waitlist and early interest ahead of opening, followed by a sustained conversion-focused phase starting 6 months after the studio opened, once trial classes and word-of-mouth had built a track record to advertise against. Across both phases, we narrowed targeting on two axes at once, deliberately excluding everyone who fell outside them.",
    approachSteps: [
      {
        title: "Audience — HNI and UHNI, not general wellness",
        description:
          "Instead of generic fitness or wellness interest tags, we built toward high-net-worth behavior clusters — premium property ownership, luxury travel, high-limit credit card usage, and international shopping patterns. These signals are a much closer proxy for “can afford ₹1.5L for six months” than any fitness-related interest tag Meta offers.",
        badge: "Audience Strategy",
      },
      {
        title: "Geography — Gurugram's posh societies only",
        description:
          "On location, we restricted delivery specifically to Gurugram's high-end residential societies and premium sectors, rather than targeting the city at large. That's where the studio's realistic membership base actually lives, so spend was concentrated where conversion was plausible instead of spread across areas that were never going to convert.",
        badge: "Geo-Fence",
      },
      {
        title: "Google Ads — catching high-intent searches",
        description:
          "Search campaigns were built to capture people actively looking for premium, boutique-format studios — terms like “luxury Pilates studio Gurugram” or “private Pilates classes” — rather than broad, budget-gym-adjacent keywords. Ad copy and landing pages carried the same exclusivity-led positioning as the Meta creative, with no discount-driven or urgency-based messaging that tends to attract price-sensitive browsers rather than the ₹1.5L segment.",
        badge: "Search Intent",
      },
    ],
    keyInsight:
      "For a ₹1.5L price point, the win wasn't more leads — it was making sure the audience could never include anyone who wasn't going to buy.",
    resultsSummary:
      "This precision-first approach kept cost per lead between ₹90–700 with a 2–5% click-through rate — low volume by design — but converted 10–15% of those leads into trials, a strong rate given the audience was narrowed almost entirely to people who could plausibly afford a ₹1.5L membership.",
    testimonial: {
      quote:
        "The team brought surgical precision to our campaign. Instead of flooding us with random inquiries, every lead was someone who could actually afford our membership.",
      author: "[Name, Title], [Client Name]",
    },
    ctaText: "Selling a premium membership to a mass-market audience?",
    ctaButtonText: "Talk to Grow 'n' Foster",
    ctaLink: "/contact",
  },
  {
    id: "import-export-dubai",
    tagline: "IMPORT & EXPORT · META ADS & GOOGLE ADS",
    title:
      "Reaching Dubai's Decision-Makers: A Meta & Google Ads Strategy for an Indian Food Exporter",
    client: "[Import/Export Client Name]",
    industry: "Import & Export — Spices, Whole Grains, Rice & Wheat",
    location: "India → UAE (Dubai)",
    services: "Meta Ads · Google Ads",
    duration: "6 Months",
    badgeTags: ["Import & Export", "B2B Sourcing", "Meta Ads", "Google Ads"],
    image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    imageAlt: "Sacks of spices and grains ready for export shipment",
    metrics: [
      {
        value: "₹500–1,500",
        label: "Cost per Lead (CPL)",
        note: "B2B trade lead range",
      },
      {
        value: "1–3%",
        label: "Click-Through Rate (CTR)",
        note: "Trade-focused ad copy",
      },
      {
        value: "15–20%",
        label: "Lead-to-Conversation Rate",
        note: "Direct WhatsApp conversations",
      },
    ],
    challenge:
      "Our client exports spices, whole grains, rice, and wheat from India to Dubai — a market with real demand, but one where the client had no existing buyer list and no presence. The people who actually decide which supplier to buy from aren't casually browsing: they're departmental store managers, procurement heads, business owners, and CEOs at retail chains, distributors, and trading houses across the UAE. A standard consumer-style Meta campaign, run broad, would spend most of its budget on people who could never place a bulk order — the account needed to filter for business buyers specifically, and give them a way to start a conversation that matched how B2B sourcing actually happens.",
    approachSteps: [
      {
        title: "Meta Ads — reaching business buyers, not browsers",
        description:
          "With no existing UAE buyer list to seed a lookalike audience from day one, we built the initial Meta campaigns around business- and trade-related targeting — layering interests like wholesale, import-export, and business ownership on top of a UAE location filter. Rather than sending traffic to a generic contact form, we ran these primarily as click-to-WhatsApp campaigns: serious sourcing buyers are far more likely to open a WhatsApp thread and ask about pricing, MOQs, and certifications than fill out a web form and wait for a callback. Once the first genuine buyer conversations started coming in, we built a custom audience from that engaged base and used it to generate Meta lookalike audiences.",
        badge: "Click-to-WhatsApp",
      },
      {
        title: "Google Ads — catching buyers already sourcing",
        description:
          "Alongside Meta, we ran Google Search campaigns built around the exact terms UAE buyers use when actively vetting new suppliers — “rice supplier UAE,” “wholesale spice exporter India,” “wheat importer Dubai,” and similar sourcing-specific keywords. These weren't cold impressions; they were buyers already comparing suppliers, so a much higher share of clicks turned into real sourcing conversations.",
        badge: "Search Sourcing",
      },
      {
        title: "Retargeting to close the loop",
        description:
          "Every Meta and Google visitor who didn't convert on the first visit was added to a retargeting pool. B2B buyers rarely commit to a new overseas supplier immediately — most return two or three times to re-check pricing, certifications, and minimum order quantities before reaching out, so staying visible across that window mattered as much as the first click.",
        badge: "Multi-Touch Retargeting",
      },
    ],
    keyInsight:
      "For overseas B2B buyers, the win wasn't chasing broad reach — it was combining tight interest-based targeting on Meta with high-intent search on Google, and giving buyers a WhatsApp conversation instead of a cold contact form.",
    resultsSummary:
      "This Meta-and-Google combination held cost per lead between ₹500–1,500 — a realistic range for B2B trade, where each lead is a business rather than an individual — with click-through rates of 1–3% and 15–20% of leads turning into a genuine sourcing conversation with a buyer capable of placing a bulk order.",
    testimonial: {
      quote:
        "Connecting directly via WhatsApp with vetted Dubai procurement heads gave us immediate traction in a new market without waiting months for trade shows.",
      author: "[Name, Title], [Client Name]",
    },
    ctaText: "Trying to reach overseas buyers who don't know your brand yet?",
    ctaButtonText: "Talk to Grow 'n' Foster",
    ctaLink: "/contact",
  },
  {
    id: "fitness-chain-25-locations",
    tagline: "FITNESS CHAIN · META ADS & GOOGLE ADS",
    title:
      "One Campaign, 25 Gyms: Simplifying Multi-Location Lead Gen Without Losing Local Performance",
    client: "[Fitness Client Name] — a 25-location gym chain",
    industry: "Fitness & Wellness",
    location: "25 Locations Network",
    services: "Meta Ads · Google Ads",
    duration: "10 Months",
    badgeTags: [
      "Fitness Chain",
      "Multi-Location",
      "Centralized Ad Architecture",
      "Meta Instant Forms",
    ],
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    imageAlt: "Modern gym floor with equipment across a chain location",
    metrics: [
      {
        value: "₹50–350",
        label: "Cost per Lead (CPL)",
        note: "Across network",
      },
      {
        value: "2–5%",
        label: "Click-Through Rate (CTR)",
        note: "Local & network ads",
      },
      {
        value: "20–35%",
        label: "Lead-to-Trial Conversion Rate",
        note: "Auto-routed to gym front desks",
      },
    ],
    challenge:
      "Running Meta and Google campaigns for one gym is straightforward. Running them for 25 at once is a different problem. Built the standard way — a separate campaign, ad set, and lead form for every branch — the account would have meant 25x the setup work, 25x the daily monitoring, and constant back-and-forth between our team and every location's front-desk staff just to route leads to the right branch. For a lean in-house team already running day-to-day operations at every gym, that overhead wasn't sustainable.",
    approachSteps: [
      {
        title: "One campaign, one main account",
        description:
          "Instead of building 25 parallel campaigns, we ran the core Meta lead campaign from the brand's single, main ad account — one campaign, one budget, one set of creatives running across the network. The piece that made this work was a small addition to the Meta Instant Form itself: a multiple-choice question asking “Which branch are you interested in?” with all 25 locations listed. Every lead still landed in one central sheet, but tagged with the branch the prospect actually wanted. Google Search ads followed the same structure, built to capture “gym near me” intent and match each searcher to their nearest branch.",
        badge: "Central Routing Form",
      },
      {
        title: "Going further for 5 local gyms",
        description:
          "Five of the 25 locations sit in smaller, more localized catchment areas where the shared network campaign wasn't pulling its weight — lower natural footfall meant lower natural demand. For these five, we layered on dedicated campaigns outside the main structure: tighter-radius geo-targeting, a larger relative share of spend, and location-specific offers and creative, run more aggressively than the network-wide campaign.",
        badge: "Local Hyper-Focus",
      },
    ],
    keyInsight:
      "Centralizing 25 locations into one campaign didn't mean treating them the same — the lead form did the routing, and a second layer of targeted campaigns did the catching up for the branches that needed it.",
    resultsSummary:
      "This structure held cost per lead between ₹50–350 across the network, with click-through rates of 2–5% and a strong 20–35% lead-to-trial conversion rate — while keeping day-to-day campaign management manageable for a lean in-house team spread across 25 locations.",
    testimonial: {
      quote:
        "Consolidating 25 branches into one clean ad architecture eliminated chaos. Every lead reached the exact branch team within minutes without manual intervention.",
      author: "[Name, Title], [Client Name]",
    },
    ctaText:
      "Managing ad accounts for multiple locations is eating your team's time?",
    ctaButtonText: "Talk to Grow 'n' Foster",
    ctaLink: "/contact",
  },
  {
    id: "real-estate-otp-verification",
    tagline: "REAL ESTATE · META ADS & GOOGLE ADS",
    title:
      "Solving the Fake-Lead Problem: How OTP Verification Fixed a Real Estate Meta Campaign",
    client: "NCR Premium Property Group",
    industry: "Real Estate",
    location: "Gurugram / NCR",
    services: "Meta Ads · Google Ads · OTP Verification",
    duration: "12 Months (Past Financial Year)",
    badgeTags: [
      "Real Estate",
      "OTP Form Verification",
      "High Ticket Leads",
      "Bot Filtering",
    ],
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    imageAlt: "Premium residential towers in Gurugram NCR skyline",
    metrics: [
      {
        value: "₹250–1,000",
        label: "Cost per Lead (CPL)",
        note: "Varies by property ticket size",
      },
      {
        value: "1–5%",
        label: "Click-Through Rate (CTR)",
        note: "Across Meta & Google",
      },
      {
        value: "10–15%",
        label: "Lead-to-Visit Rate",
        note: "First contact → site visit",
      },
    ],
    challenge:
      "Real estate is one of the highest-stakes categories in performance marketing — a single missed lead can mean a lost multi-crore sale. In the first week of running Meta lead campaigns, a large share of incoming leads weren't real. Bot submissions, accidental taps, and mistyped numbers were skewing campaign data while the sales team wasted hours chasing dead-end contacts.",
    approachSteps: [
      {
        title: "Week 1: Launch & Diagnose",
        description:
          "Launched with standard Instant Forms to baseline real reach, cost-per-lead, and the true ratio of fake-to-genuine submissions — making the problem measurable.",
        badge: "Baseline Audit",
      },
      {
        title: "Week 2+: Add OTP Verification",
        description:
          "Added an SMS one-time password step directly into the Meta lead form. Every prospect now had to confirm their number before their submission counted — filtering bots, mistyped numbers, and accidental taps.",
        badge: "OTP Gate",
      },
      {
        title: "Parallel: Google Search for High-Intent",
        description:
          "Ran Google Search ads for active property searchers alongside Meta — broad verified interest from Meta plus hand-raised intent from Google working together.",
        badge: "Search Intent",
      },
    ],
    keyInsight:
      "The fix wasn't a bigger budget or better creative — it was one extra step in the form that made sure the person on the other end was real.",
    resultsSummary:
      "This precision-first verification process cut fake submissions by 95%+, holding cost per lead between ₹250–1,000 and achieving a 10–15% site visit conversion rate.",
    testimonial: {
      quote:
        "The OTP verification step transformed our lead quality. Our sales team stopped wasting time on fake numbers and focused 100% on serious buyers.",
      author: "VP of Sales, Real Estate Group",
    },
    ctaText: "Dealing with fake leads in your high-ticket ad campaigns?",
    ctaButtonText: "Talk to Grow 'n' Foster",
    ctaLink: "/contact",
  },
];