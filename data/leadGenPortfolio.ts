export interface HeroStat {
  number: string;
  label: string;
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

export interface Metric {
  value: string;
  label: string;
}

export interface FeaturedCaseStudy {
  id: string;
  slug: string;
  filter: "LinkedIn" | "Email";
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

export interface ClientResultCard {
  id: string;
  filter: "LinkedIn" | "Email";
  tag: string;
  client: string;
  industry: string;
  summary: string;
  numbers: Metric[];
}

export const heroStats: HeroStat[] = [
  { number: "200+", label: "meetings and enquiries generated" },
  { number: "27%", label: "average LinkedIn acceptance rate" },
  { number: "43%", label: "average email open rate" },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    title: "Define your ideal buyer",
    text: "Role, industry, company size and region, agreed with you before a single message goes out.",
  },
  {
    number: "02",
    title: "Build verified lists",
    text: "Prospects pulled from Sales Navigator and data tools, with every email checked before sending.",
  },
  {
    number: "03",
    title: "Run personal outreach",
    text: "LinkedIn connection and follow-up sequences plus email campaigns, written for each segment.",
  },
  {
    number: "04",
    title: "Hand over warm leads",
    text: "Interested replies booked into your calendar, tracked in your CRM and reported every Friday.",
  },
];

export const clientList: ClientItem[] = [
  { name: "Digicomplish", industry: "RPO" },
  { name: "Bootz To Heelz", industry: "Business Coaching" },
  { name: "Primrose School of Rockland", industry: "Education" },
  { name: "MPME Abrasives", industry: "Manufacturing" },
  { name: "Munshi OS", industry: "Industrial Software" },
  { name: "Belt Conveyor Guarding", industry: "Manufacturing" },
  { name: "Table Tutor", industry: "SaaS" },
  { name: "Bell", industry: "Telecommunications" },
  { name: "Check Point", industry: "Cybersecurity" },
  { name: "Aptibit", industry: "AI & Software Development" },
  { name: "Sparx Digital", industry: "IT" },
  { name: "Baruni Solutions", industry: "IT" },
  { name: "Netciples", industry: "IT" },
  { name: "Slatt Capital", industry: "Financial Services" },
  { name: "Swopelees", industry: "Real Estate" },
  { name: "Hypertel Group", industry: "Telecommunications" },
  { name: "The Gate PM", industry: "Property Renovation" },
];

export const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    id: "digicomplish",
    slug: "digicomplish",
    filter: "LinkedIn",
    tag: "LinkedIn Outreach",
    client: "Digicomplish",
    clientFull: "Digicomplish, RPO",
    industry: "Recruitment Process Outsourcing (RPO)",
    location: "Delhi, India",
    timeline: "12 weeks",
    services: [
      "Profile optimisation",
      "Sales Navigator prospecting",
      "Outreach sequences",
      "Lead tracking",
    ],
    platforms: ["LinkedIn Sales Navigator", "Lead tracker"],
    serviceName: "LinkedIn Lead Generation",
    headline: "LinkedIn outreach that puts an RPO firm in front of hiring leaders",
    intro:
      "Digicomplish is a Delhi-based company offering talent fulfilment and recruitment, digital solutions and upskilling programmes. We set up targeted LinkedIn outreach so their recruitment services reached the HR and talent acquisition leaders who buy them.",
    summary:
      "Targeted HR and talent acquisition heads with Sales Navigator lists and personalised follow-up sequences.",
    numbers: [
      { value: "29%", label: "acceptance rate" },
      { value: "9%", label: "reply rate" },
      { value: "18", label: "meetings booked" },
    ],
    numbersNote:
      "Measured over 12 weeks. Source: LinkedIn Sales Navigator and the lead tracker.",
    imageNote: "Blurred reply inbox screenshot",
    image: "/projects/leadgen/digicomplish.jpg",
    imageBgColor: "#B4BE98",
    challenge:
      "Digicomplish needed a predictable channel to reach HR decision-makers rather than depending solely on passive referrals or warm introductions.",
    goal: "Build a steady flow of conversations with HR heads, talent acquisition leaders and hiring decision makers.",
    steps: [
      {
        number: "01",
        title: "ICP and list building",
        text: "Defined the ideal buyer by role, company size, industry and region, then built filtered lists in Sales Navigator.",
      },
      {
        number: "02",
        title: "Profile makeover",
        text: "Rewrote the headline, About section and featured content so the profile sells before the first message does.",
      },
      {
        number: "03",
        title: "Outreach sequences",
        text: "Personalised connection notes and a 3-step follow-up written for HR and talent leaders.",
      },
      {
        number: "04",
        title: "Content support",
        text: "Posts that build trust with the same people receiving outreach.",
      },
      {
        number: "05",
        title: "Tracking and reporting",
        text: "Every lead logged with its status, plus a Friday report on acceptances, replies and meetings.",
      },
    ],
    deliverablesIntro:
      "Services used: Profile optimisation, Sales Navigator prospecting, outreach sequences, lead tracking",
    deliverables: [
      "Ideal customer profile document",
      "Sales Navigator lead lists",
      "Optimised LinkedIn profile",
      "Connection and follow-up scripts",
      "Lead tracker",
      "Weekly performance reports",
    ],
    beforeAfter: {
      beforeLabel: "LinkedIn profile before",
      beforeText: "Generic headline & unoptimized profile positioning",
      afterLabel: "Optimised LinkedIn profile",
      afterText: "High-converting positioning tailored to HR leadership",
    },
    quote: {
      text: "The lead pipeline generated over 12 weeks opened doors directly with VP and HR heads we could not reach before.",
      author: "Sumit Sharma",
      designation: "Founder, Digicomplish",
    },
  },
  {
    id: "netciples",
    slug: "netciples",
    filter: "LinkedIn",
    tag: "LinkedIn Outreach",
    client: "Netciples",
    clientFull: "Netciples, IT",
    industry: "IT Services & Solutions",
    location: "USA & Global",
    timeline: "12 weeks (21 Aug to 12 Nov 2026)",
    services: [
      "LinkedIn outreach",
      "Website",
      "SEO/GMB",
      "Social media",
    ],
    platforms: ["LinkedIn Sales Navigator", "Shared lead tracker"],
    serviceName: "LinkedIn Lead Generation",
    headline: "A 12-week LinkedIn outreach plan for an IT services company",
    intro:
      "Netciples brought us in for website, SEO, social media and LinkedIn outreach. On LinkedIn, we run a 12-week Sales Navigator programme that puts their services in front of the right IT buyers every week.",
    summary:
      "180 connection requests a week through Sales Navigator, with every qualified lead logged in a shared tracker.",
    numbers: [
      { value: "27%", label: "acceptance rate" },
      { value: "8%", label: "reply rate" },
      { value: "31", label: "qualified leads in 12 weeks" },
    ],
    numbersNote:
      "Measured over the full 12-week programme, 21 Aug to 12 Nov 2026, about 2,160 connection requests. Source: LinkedIn Sales Navigator and the shared lead tracker.",
    imageNote: "Blurred screenshot of the shared lead tracker",
    image: "/projects/leadgen/netciples.jpg",
    imageBgColor: "#C8CFB4",
    challenge:
      "Netciples had no consistent outbound on LinkedIn and no structured way to track and follow up with interested prospects.",
    goal: "Reach the right decision makers every week and hand over qualified leads the client can respond to within one business day.",
    steps: [
      {
        number: "01",
        title: "Scope and targeting",
        text: "Agreed the outreach plan in a signed scope sheet, including a do-not-contact list the client wanted excluded.",
      },
      {
        number: "02",
        title: "Sales Navigator lists",
        text: "Built filtered prospect lists around the client's ideal buyers.",
      },
      {
        number: "03",
        title: "Weekly outreach",
        text: "180 personalised connection requests a week, with follow-up messages to everyone who accepts.",
      },
      {
        number: "04",
        title: "Shared lead tracker",
        text: "Every qualified lead logged in a shared tracker instead of giving the client CRM access.",
      },
      {
        number: "05",
        title: "Weekly tracking",
        text: "A weekly planned, done and pending log across LinkedIn, SEO, social and website work.",
      },
    ],
    deliverablesIntro:
      "Services used: LinkedIn outreach, alongside website, SEO/GMB and social media",
    deliverables: [
      "Signed scope and delivery plan",
      "Sales Navigator prospect lists",
      "180 connection requests per week",
      "Follow-up message sequences",
      "Shared qualified lead tracker",
      "Weekly progress tracker",
    ],
    beforeAfter: {
      beforeLabel: "Outreach process before",
      beforeText: "Ad-hoc messaging with unmonitored outreach",
      afterLabel: "Structured lead system",
      afterText: "180 weekly requests & central live lead tracker",
    },
    quote: {
      text: "The weekly cadence kept our pipeline full while allowing our team to focus purely on closing warm technical discussions.",
      author: "Alex Morgan",
      designation: "Director of Business Growth, Netciples",
    },
  },
  {
    id: "primrose-school",
    slug: "primrose-school",
    filter: "Email",
    tag: "Email Marketing",
    client: "Primrose School of Rockland",
    clientFull: "Primrose School of Rockland, MA",
    industry: "Education / Early Learning",
    location: "Rockland, Massachusetts, USA",
    timeline: "3 weeks",
    services: [
      "List segmentation",
      "Campaign strategy",
      "Copywriting",
      "Mailchimp automation",
      "Reply management",
      "Daily reporting",
    ],
    platforms: ["Mailchimp"],
    serviceName: "Email Marketing",
    headline: "A $4,000 tuition offer that brought families back for a tour",
    intro:
      "Primrose School of Rockland wanted to reach families who had enquired before but never enrolled. We built a focused Mailchimp campaign around a $4,000 discount on first-year tuition, sent from the co-owner's own inbox so every parent reply felt personal.",
    summary:
      "Split past enquiries into two lists and ran a 6-email Mailchimp campaign from the school owner's own inbox.",
    numbers: [
      { value: "48%", label: "open rate" },
      { value: "11", label: "parent replies" },
      { value: "6", label: "tours booked" },
    ],
    numbersNote:
      "Measured across all 6 emails over the 3-week campaign. Source: Mailchimp reports and the school tour calendar.",
    imageNote: "2 to 3 Primrose campaign emails shown on mobile",
    image: "/Lead Genration - IMG 3.png",
    imageBgColor: "#B4BE98",
    challenge:
      "The school had a list of past enquiries sitting unused. Some families had never visited, others had toured but not enrolled, and one generic email would not speak to either group properly.",
    goal: "Bring these families back with a clear, time-bound offer, get them to book a tour, and make sure no parent reply went unanswered.",
    steps: [
      {
        number: "01",
        title: "Two-list segmentation",
        text: "Split households into List A (never toured) and List B (toured but did not enroll), one household per row.",
      },
      {
        number: "02",
        title: "Offer-led messaging",
        text: "Three emails per list, each built around the $4,000 first-year tuition offer and written for that group.",
      },
      {
        number: "03",
        title: "Mailchimp automation",
        text: "Both sequences set up as automation flows, sent in the co-owner's name with replies going to her inbox.",
      },
      {
        number: "04",
        title: "Same-day suppression",
        text: "Anyone who replied or booked a tour was removed from the remaining sends that same day.",
      },
      {
        number: "05",
        title: "Reply handling and reporting",
        text: "Every parent reply forwarded within 30 minutes, with a daily report on sent, replies, forwarded and unanswered.",
      },
    ],
    deliverablesIntro:
      "Services used: List segmentation, campaign strategy, copywriting, Mailchimp automation, reply management, daily reporting",
    deliverables: [
      "Segmented List A and List B",
      "6 campaign emails (3 per list)",
      "Mailchimp automation flows",
      "Removal and suppression list",
      "30-minute reply forwarding",
      "End-of-day campaign reports",
    ],
    beforeAfter: {
      beforeLabel: "List A email: Never toured",
      beforeText: "Generic newsletter blast with low engagement",
      afterLabel: "List B email: Toured previously",
      afterText: "Personalized $4,000 tuition offer & direct tour link",
    },
    quote: {
      text: "The personal email sequence resonated immediately with parents. Booking 6 tours in 3 weeks was a huge win for us.",
      author: "Ritu Bhutda",
      designation: "Co-Owner, Primrose School of Rockland",
    },
  },
  {
    id: "aptibit",
    slug: "aptibit",
    filter: "Email",
    tag: "Cold Email",
    client: "Aptibit",
    clientFull: "Aptibit, AI & Software Development",
    industry: "IT / AI & Software Development",
    location: "Kolkata, India",
    timeline: "8 weeks",
    services: [
      "Domain setup",
      "List building",
      "Copywriting",
      "Sequence management",
      "Reply handling",
    ],
    platforms: [
      "Cold email sending tool",
      "Contact data tool",
      "Google Workspace",
    ],
    serviceName: "Cold Email Outreach",
    headline: "Cold email outreach that opened new B2B conversations for Aptibit",
    intro:
      "Aptibit is a Kolkata-based AI and software company that builds custom AI solutions, computer vision systems and enterprise software, and runs its Visylix video intelligence platform. We built a cold email system to open new B2B conversations, from sending domains through to reply handling.",
    summary:
      "Warmed sending domains, verified lists and short sequences pitching custom AI, computer vision and enterprise software to business buyers.",
    numbers: [
      { value: "42%", label: "open rate" },
      { value: "4.8%", label: "reply rate" },
      { value: "12", label: "meetings booked" },
    ],
    numbersNote:
      "Measured over 8 weeks across 1,500 verified contacts. Source: the sending tool and the lead tracker.",
    imageNote: "Sequence dashboard screenshot with names blurred",
    image: "/Lead Genration - IMG 4.png",
    imageBgColor: "#DDDDD0",
    challenge:
      "Aptibit needed to reach corporate technology decision-makers without risking domain reputation or sending generic unverified cold messages.",
    goal: "Reach CTOs, operations heads and innovation leads who need custom AI or video intelligence, safely and without risking the main domain, and book qualified sales conversations every week.",
    steps: [
      {
        number: "01",
        title: "Domain and inbox setup",
        text: "Separate sending domains, SPF, DKIM and DMARC records, and an inbox warm-up before any campaign.",
      },
      {
        number: "02",
        title: "List building and verification",
        text: "Contacts targeted by industry, role and company size, with every email verified before sending.",
      },
      {
        number: "03",
        title: "Sequence copywriting",
        text: "A short multi-step sequence per segment, specific to each buyer's problems.",
      },
      {
        number: "04",
        title: "Personalisation at scale",
        text: "Opening lines tailored to each company.",
      },
      {
        number: "05",
        title: "Reply handling and booking",
        text: "Replies sorted daily, with interested leads booked straight into the sales calendar.",
      },
    ],
    deliverablesIntro:
      "Services used: Domain setup, list building, copywriting, sequence management, reply handling",
    deliverables: [
      "Warmed sending domains",
      "Verified contact lists",
      "Segmented email sequences",
      "Deliverability monitoring",
      "Reply handling process",
      "Weekly campaign reports",
    ],
    beforeAfter: {
      beforeLabel: "Email before",
      beforeText: "Sending from main domain with high bounce risks",
      afterLabel: "New personalised cold email",
      afterText: "Dedicated warm sending infra & verified contact lists",
    },
    quote: {
      text: "The cold email pipeline brought high-value enterprise AI inquiries directly into our sales calendar every single week.",
      author: "Debasish Roy",
      designation: "Head of AI Engineering, Aptibit",
    },
  },
];

export const moreClientResults: ClientResultCard[] = [
  {
    id: "bootz-to-heelz",
    filter: "Email",
    tag: "Email Marketing",
    client: "Bootz To Heelz",
    industry: "Business Coaching",
    summary:
      "Nurture emails to business owners and corporate leaders that turned subscribers into leadership coaching calls.",
    numbers: [
      { value: "44%", label: "open rate" },
      { value: "3.9%", label: "click rate" },
      { value: "14", label: "discovery calls" },
    ],
  },
  {
    id: "mpme-munshi",
    filter: "LinkedIn",
    tag: "LinkedIn Outreach",
    client: "MPME Abrasives & Munshi OS",
    industry: "Manufacturing / Industrial Software",
    summary:
      "Outreach to plant, maintenance and procurement heads at foundries, forging and fabrication units for shotblasting abrasives and plant operations software.",
    numbers: [
      { value: "24%", label: "acceptance rate" },
      { value: "7%", label: "reply rate" },
      { value: "11", label: "buyer enquiries" },
    ],
  },
  {
    id: "belt-conveyor-guarding",
    filter: "Email",
    tag: "Cold Email",
    client: "Belt Conveyor Guarding",
    industry: "Manufacturing",
    summary:
      "Cold email to safety and maintenance managers at North American mining and bulk-handling sites that need compliant conveyor guards.",
    numbers: [
      { value: "39%", label: "open rate" },
      { value: "3.6%", label: "reply rate" },
      { value: "9", label: "guarding assessments booked" },
    ],
  },
  {
    id: "table-tutor",
    filter: "Email",
    tag: "Email Marketing",
    client: "Table Tutor",
    industry: "SaaS",
    summary:
      "Email sequences to restaurant owners and managers that moved sign-ups toward a demo of the staff training app.",
    numbers: [
      { value: "41%", label: "open rate" },
      { value: "4.2%", label: "click rate" },
      { value: "22", label: "demo sign-ups" },
    ],
  },
  {
    id: "bell-checkpoint",
    filter: "LinkedIn",
    tag: "LinkedIn Outreach",
    client: "Bell & Check Point",
    industry: "Cybersecurity & Telecommunications",
    summary:
      "Account-based outreach to IT and security leaders evaluating business network, telecom and cybersecurity solutions.",
    numbers: [
      { value: "22%", label: "acceptance rate" },
      { value: "6%", label: "reply rate" },
      { value: "15", label: "meetings booked" },
    ],
  },
  {
    id: "sparx-baruni",
    filter: "LinkedIn",
    tag: "LinkedIn Outreach",
    client: "Sparx Digital & Baruni Solutions",
    industry: "IT",
    summary:
      "LinkedIn outreach to businesses in the UAE and India looking for managed IT, cloud and custom software partners.",
    numbers: [
      { value: "26%", label: "acceptance rate" },
      { value: "8%", label: "reply rate" },
      { value: "13", label: "meetings booked" },
    ],
  },
  {
    id: "slatt-capital",
    filter: "LinkedIn",
    tag: "LinkedIn Outreach",
    client: "Slatt Capital",
    industry: "Financial Services",
    summary:
      "Outreach to commercial property owners and investors who need financing for office, retail, industrial and multifamily assets.",
    numbers: [
      { value: "31%", label: "acceptance rate" },
      { value: "10%", label: "reply rate" },
      { value: "16", label: "financing calls" },
    ],
  },
  {
    id: "swopelees",
    filter: "Email",
    tag: "Email Marketing",
    client: "Swopelees",
    industry: "Real Estate",
    summary:
      "Listing emails to businesses and investors looking to buy or lease commercial space in Chester County, Pennsylvania.",
    numbers: [
      { value: "46%", label: "open rate" },
      { value: "5.1%", label: "click rate" },
      { value: "19", label: "property enquiries" },
    ],
  },
  {
    id: "hypertel-group",
    filter: "LinkedIn",
    tag: "LinkedIn Outreach",
    client: "Hypertel Group",
    industry: "Telecommunications",
    summary:
      "LinkedIn outreach to Canadian business owners and IT managers looking for business internet and VoIP phone systems.",
    numbers: [
      { value: "28%", label: "acceptance rate" },
      { value: "9%", label: "reply rate" },
      { value: "12", label: "meetings booked" },
    ],
  },
  {
    id: "the-gate-pm",
    filter: "Email",
    tag: "Cold Email",
    client: "The Gate PM Management",
    industry: "Property Renovation",
    summary:
      "Cold email to UK landlords and property managers planning renovation work.",
    numbers: [
      { value: "40%", label: "open rate" },
      { value: "4.2%", label: "reply rate" },
      { value: "10", label: "site visits booked" },
    ],
  },
];
