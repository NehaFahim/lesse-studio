export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'Digital Products' | 'Brand Identity' | 'Creative Tech' | 'AI & Spatial';
  year: string;
  tagline: string;
  thumbnail: string;
  bgGradient: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  techStack: string[];
  overview: string;
  challenge: string;
  solution: string;
  liveUrl?: string;
  featured: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'kroma-audio',
    title: 'Kroma Sound Architecture',
    client: 'Kroma Audio Labs',
    category: 'Digital Products',
    year: '2025',
    tagline: 'Immersive web audio workstation and generative sound engine.',
    thumbnail: '/images/projects/kroma-sound.jpg',
    bgGradient: 'from-zinc-900 via-neutral-900 to-stone-900',
    metrics: [
      { label: 'Active Users', value: '420K+' },
      { label: 'Latency Reduct.', value: '68%' },
      { label: 'Award', value: 'Awwwards SOTD' }
    ],
    deliverables: ['WebAudio Engine', 'UI/UX System', 'Cross-Platform App', 'Sound Visualization'],
    techStack: ['Next.js 15', 'WebAudio API', 'Canvas 2D', 'Tailwind CSS', 'Framer Motion'],
    overview: 'Kroma required a next-generation browser sound workstation capable of zero-latency synthesizer modulation and spatial audio rendering for music producers.',
    challenge: 'Handling real-time DSP (Digital Signal Processing) inside browser threads without causing frame drops or audio stuttering on mobile viewports.',
    solution: 'Engineered a custom WebWorker audio worklet pipeline paired with custom WebGL shader visuals for real-time waveform inspection.',
    liveUrl: 'https://kroma-audio.example.com',
    featured: true,
  },
  {
    id: 'aether-spatial',
    title: 'Aether Spatial Intelligence',
    client: 'Aether Systems Inc.',
    category: 'AI & Spatial',
    year: '2025',
    tagline: 'Enterprise spatial computing interface for 3D architectural analytics.',
    thumbnail: '/images/projects/aether-spatial.jpg',
    bgGradient: 'from-stone-900 via-neutral-900 to-zinc-950',
    metrics: [
      { label: 'Valuation Raised', value: '$85M' },
      { label: '3D Render Speed', value: '120 FPS' },
      { label: 'Award', value: 'FWA of the Day' }
    ],
    deliverables: ['3D Web Engine', 'AI Spatial Assistant', 'Brand Architecture', 'Design System'],
    techStack: ['Three.js', 'Gemini AI API', 'TypeScript', 'Tailwind CSS', 'GLSL'],
    overview: 'Aether builds AI-driven 3D mapping solutions for architectural planning and smart city simulations.',
    challenge: 'Rendering massive 3D point-cloud datasets while allowing real-time AI prompt manipulation of urban geometry.',
    solution: 'Designed an ultra-clean dark canvas with glass-smooth controls, integrating Gemini multimodal spatial queries directly over 3D model nodes.',
    liveUrl: 'https://aether-spatial.example.com',
    featured: true,
  },
  {
    id: 'monolith-brand',
    title: 'Monolith Venture Capital',
    client: 'Monolith Capital VC',
    category: 'Brand Identity',
    year: '2024',
    tagline: 'Minimalist brand identity and editorial digital platform for early-stage tech fund.',
    thumbnail: '/images/projects/monolith-brand.jpg',
    bgGradient: 'from-neutral-900 via-zinc-900 to-black',
    metrics: [
      { label: 'AUM Impact', value: '$1.4B' },
      { label: 'Conversion', value: '+310%' },
      { label: 'Award', value: 'Red Dot 2024' }
    ],
    deliverables: ['Brand Architecture', 'Typography System', 'Editorial Web Portal', 'Print & Physical'],
    techStack: ['Next.js', 'Tailwind CSS', 'Radix UI', 'Framer Motion'],
    overview: 'Monolith requested a complete visual overhaul to position themselves as Europe’s premier deep-tech venture platform.',
    challenge: 'Standing out in a saturated finance space without resorting to traditional blue corporate aesthetics or clunky layouts.',
    solution: 'Crafted a stark, brutalist-chic monochrome identity with bespoke kinetic typography and interactive portfolio flow.',
    liveUrl: 'https://monolith-vc.example.com',
    featured: true,
  },
  {
    id: 'nexus-checkout',
    title: 'Nexus Autonomous Commerce',
    client: 'Nexus Global',
    category: 'Digital Products',
    year: '2024',
    tagline: 'Sub-second micro-checkout experience for high-velocity streetwear drop platform.',
    thumbnail: '/images/projects/nexus-commerce.jpg',
    bgGradient: 'from-zinc-950 via-neutral-900 to-stone-900',
    metrics: [
      { label: 'Checkout Time', value: '0.4s' },
      { label: 'Peak RPM', value: '180K' },
      { label: 'Award', value: 'Awwwards Developer' }
    ],
    deliverables: ['E-Commerce UX', 'Design System', 'Micro-Interactions', 'Edge Deployment'],
    techStack: ['Next.js 15', 'Stripe API', 'Tailwind CSS', 'Vercel KV'],
    overview: 'Nexus powers limited-edition product drops with high concurrency spikes during launch countdowns.',
    challenge: 'Preventing checkout drop-offs and server degradation when over 100,000 users attempt payment simultaneously.',
    solution: 'Built an edge-rendered progressive checkout component that pre-validates cart state in under 50 milliseconds.',
    liveUrl: 'https://nexus-commerce.example.com',
    featured: false,
  },
  {
    id: 'solaris-energy',
    title: 'Solaris Kinetic Web',
    client: 'Solaris Clean Tech',
    category: 'Creative Tech',
    year: '2025',
    tagline: 'Interactive 3D solar energy grid visualizer and public dashboard.',
    thumbnail: '/images/projects/solaris-kinetic.jpg',
    bgGradient: 'from-neutral-900 via-stone-900 to-zinc-900',
    metrics: [
      { label: 'Energy Tracked', value: '4.8 GW' },
      { label: 'Public Visits', value: '1.2M/mo' },
      { label: 'Award', value: 'Webby Nominee' }
    ],
    deliverables: ['3D WebGL Canvas', 'Realtime Data Sync', 'Interactive Charts', 'Mobile PWA'],
    techStack: ['Three.js', 'Recharts', 'Next.js', 'Tailwind CSS'],
    overview: 'Solaris wanted to transform dry energy grid telemetry into an inspiring interactive art piece and live monitoring tool.',
    challenge: 'Making complex power distribution metrics intuitive and visually breathtaking on any device screen.',
    solution: 'Created a fluid WebGL particle sphere that reacts in real-time to regional power output and solar irradiance.',
    liveUrl: 'https://solaris-grid.example.com',
    featured: false,
  },
  {
    id: 'vortex-ai',
    title: 'Vortex Intelligence Studio',
    client: 'Vortex Research',
    category: 'AI & Spatial',
    year: '2025',
    tagline: 'Multimodal AI workflow assistant for creative directors and video artists.',
    thumbnail: '/images/projects/vortex-ai.jpg',
    bgGradient: 'from-zinc-900 via-neutral-950 to-stone-900',
    metrics: [
      { label: 'Workflow Boost', value: '4.5x' },
      { label: 'Prompt Latency', value: '<800ms' },
      { label: 'Award', value: 'Awwwards SOTD' }
    ],
    deliverables: ['Generative Studio UI', 'Gemini AI Pipeline', 'Node Editor', 'Brand Architecture'],
    techStack: ['Next.js App Router', 'Gemini API', 'React Flow', 'Tailwind CSS'],
    overview: 'Vortex requested an intuitive workspace where artists can chain Generative AI models together visually.',
    challenge: 'Designing a canvas interface that handles complex AI pipeline graphs without visual clutter.',
    solution: 'Engineered a sleek node-based dark canvas with minimalist floating inspector panels and instant live previews.',
    liveUrl: 'https://vortex-ai.example.com',
    featured: true,
  }
];

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Digital Products & Systems',
    description: 'We architect and build bespoke web applications, mobile interfaces, and unified design systems tailored for scale.',
    deliverables: [
      'Web Application Architecture',
      'Design Systems & UI Kits',
      'iOS & Android Native Interfaces',
      'Micro-Interactions & Prototyping',
      'Usability Engineering & Audits'
    ],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI']
  },
  {
    number: '02',
    title: 'Brand Systems & Visual Architecture',
    description: 'We construct distinctive visual identities, kinetic logos, and editorial guidelines that cut through digital noise.',
    deliverables: [
      'Visual Identity Systems',
      'Brand Strategy & Positioning',
      '3D Motion & Kinetic Logos',
      'Editorial & Print Direction',
      'Design Guidelines & Tokenization'
    ],
    stack: ['Blender 3D', 'Glyphs', 'Figma', 'WebGL', 'Vector Motion', 'Typography']
  },
  {
    number: '03',
    title: 'Creative Engineering & Interactive WebGL',
    description: 'We merge advanced web development with 3D graphics, shader programming, and fluid audio-visual experiences.',
    deliverables: [
      '3D Interactive Experiences',
      'Custom WebGL Shaders & Particles',
      'Zero-Latency Web Audio Engine',
      'Performance & Memory Optimization',
      'Headless CMS & API Integration'
    ],
    stack: ['Three.js / WebGL', 'GLSL Shaders', 'WebAudio API', 'Canvas 2D', 'Drizzle ORM', 'Cloud SQL']
  },
  {
    number: '04',
    title: 'AI Workflows & Generative Products',
    description: 'We integrate cutting-edge multimodal AI models (Gemini API) into high-utility tools and smart canvas interfaces.',
    deliverables: [
      'Server-Side Gemini AI Pipelines',
      'Custom AI Agents & Chat Systems',
      'Multimodal Image/Audio Tools',
      'Real-Time Spatial Intelligence',
      'Contextual Enterprise Search'
    ],
    stack: ['Google Gemini API', 'Next.js Server Actions', 'Vector Embeddings', 'Node.js', 'WebSocket']
  }
];

export const MANIFESTO_ITEMS = [
  {
    code: '01',
    title: 'Zero Noise, Pure Signal',
    body: 'We eliminate useless visual decorations, redundant cards, and promotional clutter. True design is achieved when nothing left can be removed without losing function.'
  },
  {
    code: '02',
    title: 'Craft at Speed & Scale',
    body: 'We combine brutalist precision with fluid animation. High craftsmanship should never come at the expense of page loading speed or mobile usability.'
  },
  {
    code: '03',
    title: 'Emotion Encoded in Logic',
    body: 'Software is deeply emotional. Micro-interactions, typography tracking, layout rhythm, and subtle audio feedback turn utilitarian tools into memorable experiences.'
  },
  {
    code: '04',
    title: 'Built for Longevity',
    body: 'We build with clean TypeScript, robust server architecture, and modular design systems that remain fast and elegant years after launch.'
  }
];

export const AWARDS_LIST = [
  { year: '2025', title: 'Site of the Day x3', body: 'Awwwards' },
  { year: '2025', title: 'FWA of the Month', body: 'FWAs' },
  { year: '2024', title: 'Red Dot Best of Best', body: 'Red Dot Design Award' },
  { year: '2024', title: 'Developer Site of the Year', body: 'Awwwards' },
  { year: '2024', title: 'Webby Nominee — Best UX', body: 'The Webby Awards' },
  { year: '2023', title: 'CSSDA Innovation Award', body: 'CSS Design Awards' },
];
