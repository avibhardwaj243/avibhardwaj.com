// Centralised content for the portfolio.
// Edit this file to update site copy without touching components.

export const PROFILE = {
  name: 'Avi Bhardwaj',
  role: 'Engineering Manager',
  company: 'PaisaBazaar',
  domain: 'avibhardwaj.com',
  location: 'Gurugram, India',
  email: 'avibhardwaj243@gmail.com',
  linkedin: 'https://www.linkedin.com/in/avibhardwaj243',
  substack: 'https://avibhardwaj243.substack.com',
  resumeUrl: '/avi-bhardwaj-resume.pdf',
  openTo: ['Engineering leadership roles', 'Advisory', 'Mentoring', 'Speaking'],
  tagline:
    'Engineering leader with 16+ years overall and 11+ years in FinTech, building scalable, customer-centric products.',
  bio: [
    "I’m an Engineering Manager at PaisaBazaar with 16+ years of overall experience and 11+ years in FinTech. I lead engineering teams that ship customer-facing digital lending and credit products used by millions of Indians.",
    "My work sits at the intersection of architecture, production stability and people — driving system design decisions, ensuring high availability, and mentoring engineers to build a high-performing engineering culture.",
  ],
  avatar: '/avi-bhardwaj.jpg',
};

export const STATS = [
  { label: 'Years overall', value: '16+' },
  { label: 'Years in FinTech', value: '11+' },
  { label: 'Engineers mentored', value: '20+' },
  { label: 'Production systems owned', value: '10+' },
];

export const SKILLS = [
  {
    title: 'Leadership',
    items: [
      'Engineering Management',
      'Team Mentoring',
      'Hiring & Onboarding',
      'Agile / Scrum',
      'Stakeholder Mgmt.',
    ],
  },
  {
    title: 'Architecture & Backend',
    items: [
      'System Design',
      'Node.js',
      'PHP / Laravel',
      'REST APIs',
      'Microservices',
      'Production Stability',
    ],
  },
  {
    title: 'Data & Infrastructure',
    items: ['MySQL', 'Cassandra', 'Redis', 'Memcached', 'Caching', 'Observability'],
  },
  {
    title: 'Frontend & Web',
    items: ['React.js', 'jQuery', 'HTML/CSS', 'JavaScript', 'WordPress', 'Joomla'],
  },
  {
    title: 'FinTech Domain',
    items: [
      'Lending Platforms',
      'Partner Integrations',
      'Credit Products',
      'Customer Experience',
      'Risk Workflows',
    ],
  },
  {
    title: 'Practices',
    items: ['Code Reviews', 'Incident Response', 'Release Mgmt.', 'Architecture Reviews'],
  },
];

export const EXPERIENCE = [
  {
    company: 'PaisaBazaar Marketing and Consulting Pvt. Ltd.',
    location: 'Gurugram, India',
    duration: '11 yrs',
    roles: [
      {
        title: 'Engineering Manager',
        period: 'Apr 2026 – Present',
        description:
          'Leading engineering teams across customer-facing FinTech products. Driving architecture decisions, ensuring production stability and fostering collaboration across functions to build a high-performing engineering culture.',
      },
      {
        title: 'Deputy Manager — Technology',
        period: 'Apr 2024 – Mar 2026',
        description:
          'Managed end-to-end delivery of critical business applications, oversaw application development, production support and partner integrations — ensuring high availability and operational excellence.',
      },
      {
        title: 'Assistant Manager — Technology',
        period: 'Apr 2021 – Mar 2024',
        description:
          'Led engineering teams to deliver scalable FinTech solutions, ensured production stability, seamless partner integrations and on-time project delivery while mentoring engineers.',
      },
      {
        title: 'Senior Software Engineer',
        period: 'Apr 2019 – Mar 2021',
        description:
          'Architected and developed enterprise applications, integrated third-party systems and optimised existing platforms. Active in code reviews, troubleshooting and release management.',
      },
      {
        title: 'Software Engineer',
        period: 'Apr 2017 – Mar 2019',
        description:
          'End-to-end software development lifecycle — requirements, development, testing, deployment and production support — for lending platforms.',
      },
      {
        title: 'Technical Associate',
        period: 'Jul 2015 – Mar 2017',
        description:
          'Contributed to development and support of lending platforms, partner integrations and customer-facing applications. Production support, incident resolution and performance optimisation.',
      },
    ],
  },
  {
    company: 'OTS Solutions',
    location: 'Gurugram, India',
    duration: '1 yr 1 mo',
    roles: [
      {
        title: 'Sr. Software Developer',
        period: 'Jun 2014 – Jun 2015',
        description:
          'End-to-end application development for client projects — requirements, development, testing, deployment and maintenance.',
      },
    ],
  },
  {
    company: 'Vinove Software & Services Pvt. Ltd.',
    location: 'Greater Delhi Area',
    duration: '1 yr 2 mos',
    roles: [
      {
        title: 'Web Developer',
        period: 'Apr 2013 – May 2014',
        description:
          'Built and maintained web applications using PHP (Yii, CodeIgniter) and CMS platforms (WordPress, Joomla). Translated business requirements into dynamic web solutions.',
      },
    ],
  },
  {
    company: 'Techpreneurs India Pvt. Ltd.',
    location: 'Delhi',
    duration: '2 yrs',
    roles: [
      {
        title: 'Technical Staff',
        period: 'May 2011 – Apr 2013',
        description:
          'Built modules for a social networking platform — albums, videos, document management. Integrated Facebook & Twitter feeds. Used Laravel, MySQL, Memcached and jQuery for scale.',
      },
    ],
  },
  {
    company: 'TechnoApex Software Pvt. Ltd.',
    location: 'Delhi, India',
    duration: '9 mos',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: 'Aug 2010 – Apr 2011',
        description:
          'Front-end development with HTML, CSS, JavaScript and jQuery. Built responsive interfaces and customised WordPress sites for client projects.',
      },
    ],
  },
];

// ---------- AWARDS / RECOGNITION ----------
// Edit freely. Latest first.
export const AWARDS = [
  {
    title: 'Long Service Award',
    org: 'PaisaBazaar Marketing Pvt. Ltd.',
    year: 'Feb 2026',
    note: 'Recognised for sustained contribution and a decade-plus tenure building PaisaBazaar’s engineering org.',
  },
  {
    title: 'Stellar Award',
    org: 'PaisaBazaar Marketing Pvt. Ltd.',
    year: 'Jul – Sep 2025',
    note: 'Quarterly recognition for outstanding impact across delivery, production stability and team leadership.',
  },
  {
    title: 'Best Team Award',
    org: 'PaisaBazaar Marketing Pvt. Ltd.',
    year: 'Apr 2023',
    note: 'Won with my engineering team for cross-functional execution on a high-impact customer-facing initiative.',
  },
];

// ---------- PROJECTS ----------
// Each entry needs `slug` (URL), `date` (for sorting), and `content` (markdown body).
export const PROJECTS = [
  {
    slug: 'lending-platform-modernisation',
    title: 'Lending Platform Modernisation',
    summary:
      'Re-architected core lending workflows for higher throughput and partner-grade reliability across credit products.',
    stack: ['Node.js', 'Cassandra', 'Redis', 'Microservices'],
    image:
      'https://images.pexels.com/photos/7055/desk-computer-imac-home.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    date: '2024-09',
    role: 'Engineering Lead',
    duration: '8 months',
    impact: ['3× throughput improvement', '99.95% availability', '40% reduction in p99 latency'],
    content: `## Context

The legacy lending platform was monolithic, with tightly-coupled workflows that made partner onboarding slow and incidents painful.

## What we did

- Broke the monolith into independently deployable services around credit, KYC and disbursal flows.
- Introduced Cassandra for write-heavy event logs and Redis for hot-path caching.
- Built a partner contract layer so each lender integration could evolve at its own cadence.
- Instrumented every service with structured logs, traces and SLO dashboards.

## Outcome

- 3× increase in sustained throughput.
- Availability moved from ~99.6% to 99.95% over two quarters.
- Partner onboarding time reduced from 6 weeks to under 2.
- The team shifted from firefighting to feature work.`,
  },
  {
    slug: 'partner-integration-framework',
    title: 'Partner Integration Framework',
    summary:
      'Unified framework for onboarding lending partners — schema-driven contracts, retries and observability built-in.',
    stack: ['Node.js', 'MySQL', 'REST', 'Observability'],
    image:
      'https://images.pexels.com/photos/7057/desk-office-computer-imac.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    date: '2024-03',
    role: 'Architect & Engineering Manager',
    duration: '5 months',
    impact: ['Partner integration time: 6 wks → 2 wks', '0 production incidents in first 90 days'],
    content: `## Context

Every new lending partner shipped its own bespoke integration — different retry semantics, error formats and observability gaps. The next integration always cost the same as the first.

## What we did

- Designed a contract layer that captures every partner integration as data (endpoints, auth, mapping, retry rules).
- Built a single client that interprets the contract — adding idempotency, exponential backoff and circuit-breaking for free.
- Wired structured tracing and dashboards into the framework so every partner gets observability on day one.

## Outcome

- Partner onboarding time fell to ~2 weeks.
- Zero production incidents in the first 90 days post-rollout.
- Engineering team reclaimed roadmap capacity previously spent on integration glue.`,
  },
  {
    slug: 'customer-experience-revamp',
    title: 'Customer Experience Revamp',
    summary:
      'Led a cross-functional revamp of the customer journey to improve conversion, latency and operational excellence.',
    stack: ['React.js', 'Node.js', 'A/B Testing'],
    image:
      'https://images.pexels.com/photos/5278940/pexels-photo-5278940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    date: '2023-11',
    role: 'Engineering Manager',
    duration: '6 months',
    impact: ['+18% credit application conversion', '40% drop in customer support tickets'],
    content: `## Context

The credit application funnel had grown organically with each new product. Drop-off was high, the UI felt dated, and support tickets had a long tail of "the page got stuck".

## What we did

- Mapped the funnel end-to-end with product, design and support.
- Rebuilt the React frontend with a state machine for every step, eliminating the "stuck" failure modes.
- Pushed validation to the edge so users got feedback within 200ms.
- Ran continuous A/B tests on copy, sequencing and field order.

## Outcome

- +18% conversion on credit applications.
- 40% drop in support tickets tagged "application stuck".
- The pattern became the template for other journeys.`,
  },
];

// ---------- WRITING / NOTES ----------
// Tags are free-form strings used by the search page.
export const WRITING = [
  {
    slug: 'building-culture-of-production-ownership',
    title: 'Building a culture of production ownership',
    excerpt:
      'Why engineering teams in FinTech should own the pager — and how to make that healthy, sustainable and a growth lever.',
    tag: 'Engineering Leadership',
    tags: ['leadership', 'culture', 'on-call', 'fintech', 'reliability'],
    date: '2025-12-15',
    readingTime: '7 min',
    content: `## Why ownership matters

In regulated FinTech, the people closest to the code are also closest to the customer. When the on-call rotation is outsourced to a separate "ops" team, the feedback loop between bug and fix stretches dangerously.

## How we made it healthy

1. **Boundaries first.** Engineers own the pager only for systems they ship. No legacy graveyards.
2. **A real SLO.** Without one, every alert feels equally urgent. With one, you can sleep through low-severity noise.
3. **Compensation.** On-call shifts get extra leave, not just gratitude.
4. **Blameless reviews.** Every incident ends in a written, public RCA — and never in someone's annual review.

## What changed

Two quarters in: alert volume down 60%, incidents down 35%, and the team started volunteering for shifts. The system became a growth lever — junior engineers learnt production systems faster than any onboarding doc could teach.`,
  },
  {
    slug: 'designing-partner-integrations',
    title: 'Designing partner integrations that don’t break at 2 AM',
    excerpt:
      'A practical checklist for resilient, observable third-party integrations in regulated environments.',
    tag: 'Architecture',
    tags: ['architecture', 'integrations', 'reliability', 'fintech'],
    date: '2025-11-08',
    readingTime: '9 min',
    content: `## The 2 AM test

If a partner API starts misbehaving at 2 AM, will your on-call engineer have everything they need to triage in under 15 minutes? If not, the integration isn't done.

## A checklist

- **Idempotency keys on every write.** Retries are a fact of life.
- **Timeouts at every layer.** Connection, read, total. Never trust the default.
- **Circuit breakers with sensible defaults.** A degraded partner should not become your incident.
- **Structured logs with correlation IDs.** Every log line should be traceable back to a customer journey.
- **Per-partner dashboards.** Latency, error rate, retry budget — visible to engineering, support and product.
- **Synthetic monitoring.** A canary request every 60 seconds tells you about failures before customers do.

## The non-technical part

The hardest part isn't the code — it's negotiating SLAs with partners and making sure your team has authority to declare a partner-side incident. That requires written runbooks and an on-call escalation matrix everyone has actually read.`,
  },
  {
    slug: 'ic-to-engineering-manager',
    title: 'From IC to Engineering Manager: what actually changed',
    excerpt:
      'Notes on the transition — what got harder, what got easier, and the mental models that helped.',
    tag: 'Career',
    tags: ['career', 'leadership', 'management'],
    date: '2025-09-20',
    readingTime: '6 min',
    content: `## What got harder

- **The work is asynchronous.** As an IC, a good day ends with a green CI build. As a manager, you sometimes can't tell if today's conversation will pay off in three months or never.
- **The leverage is indirect.** Your impact is in other people's PRs, not yours.
- **Feedback loops are slower.** A misjudged hire shows up six months later.

## What got easier

- **Saying no.** Once you're responsible for the team's roadmap, prioritisation stops being a debate and becomes a duty.
- **Asking dumb questions.** Nobody expects the manager to know every line of code. That permission is freeing.

## Mental models that helped

1. **Your job is to make the team better than the sum of its parts.** Everything else is downstream of that.
2. **Hire slowly, performance-manage fast.** The cost of a bad hire compounds; the cost of a hard conversation does not.
3. **The work isn't fungible — but most of it is delegate-able.** Default to delegation; intervene only when something is truly load-bearing.`,
  },
];
