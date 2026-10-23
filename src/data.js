// Everything you'd want to edit lives here: copy, links, projects.
const img = (name) => `./work/${name}.webp`;

export const profile = {
  name: 'Maheswar',
  email: 'd.maheswar2001@gmail.com',
  location: 'Hyderabad, India',
  resumeUrl: '#contact', // TODO: link your résumé PDF
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' }, // TODO: your profile URL
    { label: 'GitHub', href: 'https://github.com/' }, // TODO: your profile URL
  ],
};

export const disciplines = [
  'UI / UX design',
  'Mobile apps',
  'CRM & web platforms',
  'Enterprise dashboards',
  'Client & agency websites',
  'React & React Native',
  'Figma design systems',
];

export const projects = [
  {
    id: 'lovetails',
    layout: 'feature',
    eyebrow: 'Mobile app · React Native · Design + development',
    title: 'Love&Tails',
    body: 'A social and adoption app for pet parents: share posts and reels, build a profile for every pet, and match adopters with pets that need a home.',
    bullets: [
      'Onboarding, Google and Apple sign-in, permissions and personalisation',
      'Pet profiles with certificates, badges, messaging and notifications',
      'Two-sided adoption flow, for pet parents and for adopters',
    ],
    tags: ['Figma', 'React Native', 'iOS'],
    visual: {
      type: 'phones',
      tone: 'sand',
      images: [
        { src: img('lovetails-intro'), alt: 'Love&Tails intro screen: Find your forever friend, with three pet photos and a Get Started button' },
        { src: img('lovetails-adopt'), alt: 'Love&Tails adoption card showing a golden retriever named Ben with a like button' },
      ],
    },
  },
  {
    id: 'poolpm',
    layout: 'feature',
    flip: true,
    eyebrow: 'Web platform · CRM + AI agent · Design + Next.js',
    title: 'PoolPM Builder Portal',
    body: 'A CRM and project manager for pool builders, with an AI agent, DispatchIQ, that can set up the workspace for you through chat or voice.',
    bullets: [
      'Onboarding and a 7-step Get started module',
      'Setup wizards for project defaults, costs and finances, plus lead import',
      'Every wizard also designed as an AI flow, with loading, empty and error states',
    ],
    tags: ['Figma', 'React', 'Next.js', 'TypeScript', 'REST APIs'],
    visual: {
      type: 'stack',
      tone: 'ink',
      images: [
        { src: img('poolpm-get-started'), alt: 'PoolPM Builder Portal home: Get started checklist showing 4 of 7 setup steps complete' },
        { src: img('poolpm-ai-drawer'), alt: 'PoolPM with the DispatchIQ assistant drawer open, drafting team invites from a chat' },
      ],
    },
  },
  {
    id: 'gfl',
    layout: 'feature',
    eyebrow: 'Mobile app · React Native · Enterprise dashboards',
    title: 'GFL CXO',
    body: 'A leadership dashboard app for the INOXGFL group. Executives sign in with Microsoft, pick their role and get live KPIs and charts for their function, on their phone.',
    bullets: [
      'Microsoft SSO and branded entry for each group company',
      'Nine role dashboards, from CEO and CHRO to Quality, Sales and Unit Heads',
      'Dense data made readable: KPI tiles, tabs, filters and mobile-first charts',
    ],
    tags: ['Figma', 'React Native', 'iOS', 'Microsoft SSO'],
    visual: {
      type: 'phones',
      tone: 'sky',
      images: [
        { src: img('gfl-roles'), alt: 'GFL CXO role picker: grid of nine leadership roles' },
        { src: img('gfl-chro'), alt: 'GFL CXO CHRO dashboard: headcount KPIs and budget vs actual chart' },
        { src: img('gfl-quality'), alt: 'GFL CXO Corporate Quality Head dashboard: incoming lot KPIs' },
      ],
    },
  },
  {
    id: 'clawcouch',
    layout: 'half',
    eyebrow: 'Mobile app · React Native · Pet care community',
    title: 'Clawcouch',
    body: 'An all-in-one pet care platform with a community feed. I designed the full app: SSO and email auth with every validation state, pet onboarding, posts with tags and comments, addresses and account settings.',
    visual: {
      type: 'phones',
      tone: 'lilac',
      images: [
        { src: img('clawcouch-onboarding'), alt: 'Clawcouch onboarding slide: All-in-one pet care platform, with a Get started button' },
        { src: img('clawcouch-post'), alt: 'Clawcouch post view in dark mode: a rabbit photo with likes and comments' },
      ],
    },
  },
  {
    id: 'aromas',
    layout: 'half',
    eyebrow: 'Website · E-commerce · Client work',
    title: "Aroma's Gully",
    body: 'An online store for a handmade candle brand: editorial homepage, collections, best sellers, cart drawer, account, orders and sign-up.',
    visual: {
      type: 'browser',
      tone: 'sand',
      images: [{ src: img('aromas-home'), alt: "Aroma's Gully homepage: candle hero photo, brand story and collection tiles" }],
    },
  },
  {
    id: 'dugs',
    layout: 'wide',
    status: 'In progress · My agency',
    title: 'DUGS — Developers United',
    body: 'The website for my own end-to-end development studio. Ten pages planned in Figma (home, work, case study, method, studio, working with us, contact and more), plus a motion and interaction system.',
    visual: {
      type: 'browser',
      tone: 'ink',
      images: [{ src: img('dugs-home'), alt: "DUGS homepage wireframe: The building got easy. The deciding didn't." }],
    },
  },
];

export const services = [
  {
    icon: 'phone',
    title: 'Mobile apps',
    body: 'User flows, UI design and interactive prototypes, then built in React Native for iOS and Android.',
  },
  {
    icon: 'table',
    title: 'CRMs & web platforms',
    body: 'Dashboards, data tables and complex workflows, designed for daily use and built as scalable React components.',
  },
  {
    icon: 'globe',
    title: 'Websites',
    body: 'Fast, responsive marketing sites for clients and agencies, from brand direction to launch.',
  },
];

export const steps = [
  { title: 'Understand', body: 'Talk to stakeholders and users, map the flows and agree on what success looks like.' },
  { title: 'Design', body: 'Wireframes, then high-fidelity screens and prototypes in Figma, built on reusable components.' },
  { title: 'Build', body: 'Translate the design straight into React, with the same component structure as the Figma file.' },
  { title: 'Ship & iterate', body: 'Launch, watch how people use it, and refine both the design and the code.' },
];

export const stack = ['React', 'Next.js', 'Figma', 'TypeScript', 'React Native', 'Material UI', 'REST APIs'];
