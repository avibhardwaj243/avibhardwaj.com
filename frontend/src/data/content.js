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
  tagline:
    'Engineering leader with 16+ years building scalable, customer-centric FinTech products.',
  bio: [
    "I’m an Engineering Manager at PaisaBazaar with 16+ years of experience in FinTech. I lead engineering teams that ship customer-facing digital lending and credit products used by millions of Indians.",
    "My work sits at the intersection of architecture, production stability and people — driving system design decisions, ensuring high availability, and mentoring engineers to build a high-performing engineering culture.",
  ],
  avatar:
    'https://images.unsplash.com/photo-1600878459138-e1123b37cb30?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMGNvcnBvcmF0ZXxlbnwwfHx8fDE3ODE5NTkyNDd8MA&ixlib=rb-4.1.0&q=85',
};

export const STATS = [
  { label: 'Years in FinTech', value: '16+' },
  { label: 'Years at PaisaBazaar', value: '11' },
  { label: 'Engineers mentored', value: '40+' },
  { label: 'Production systems owned', value: '12+' },
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

export const PROJECTS = [
  {
    title: 'Lending Platform Modernisation',
    summary:
      'Re-architected core lending workflows for higher throughput and partner-grade reliability across credit products.',
    stack: ['Node.js', 'Cassandra', 'Redis', 'Microservices'],
    image:
      'https://images.pexels.com/photos/7055/desk-computer-imac-home.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    title: 'Partner Integration Framework',
    summary:
      'Unified framework for onboarding lending partners — schema-driven contracts, retries and observability built-in.',
    stack: ['Node.js', 'MySQL', 'REST', 'Observability'],
    image:
      'https://images.pexels.com/photos/7057/desk-office-computer-imac.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    title: 'Customer Experience Revamp',
    summary:
      'Led a cross-functional revamp of the customer journey to improve conversion, latency and operational excellence.',
    stack: ['React.js', 'Node.js', 'A/B Testing'],
    image:
      'https://images.pexels.com/photos/5278940/pexels-photo-5278940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

export const WRITING = [
  {
    title: 'Building a culture of production ownership',
    excerpt:
      'Why engineering teams in FinTech should own the pager — and how to make that healthy, sustainable and a growth lever.',
    tag: 'Engineering Leadership',
    date: 'Coming soon',
  },
  {
    title: 'Designing partner integrations that don’t break at 2 AM',
    excerpt:
      'A practical checklist for resilient, observable third-party integrations in regulated environments.',
    tag: 'Architecture',
    date: 'Coming soon',
  },
  {
    title: 'From IC to Engineering Manager: what actually changed',
    excerpt:
      'Notes on the transition — what got harder, what got easier, and the mental models that helped.',
    tag: 'Career',
    date: 'Coming soon',
  },
];
