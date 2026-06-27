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
// Edit src/data/projects.json to update project copy.
export { default as PROJECTS } from './projects.json';

// ---------- WRITING / NOTES ----------
// Tags are free-form strings used by the search page.
// Edit src/data/writing.json to update writing copy.
export { default as WRITING } from './writing.json';
