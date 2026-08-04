import { Project, MetricCard, SkillCategory, Achievement } from '../types/portfolio';

export const HERO_DATA = {
  name: "Myron D'Cruz",
  fullName: "Myron Domnic D'Cruz",
  title: "Backend Developer • AI Builder • Computer Science Student",
  location: "Goa, India",
  role: "Backend Developer",
  education: "Computer Science Student",
  institution: "Agnel Institute of Technology and Design",
  status: "Open to Opportunities",
  buildingList: ["Daily LeetCode", "AI Agents", "Freelancing"],
  bio: "I enjoy turning ideas into products that solve real problems. I'm a student at Agnel Institute, currently exploring the intersection of distributed systems and artificial intelligence.",
  aboutExtended: "I'm a Computer Science student passionate about building software that solves real-world problems. I enjoy turning ideas into polished web applications with clean user experiences and scalable backend systems. Currently, I'm focused on strengthening my Data Structures & Algorithms skills, building full-stack web applications, and continuously learning new technologies to become a better software engineer."
};

export const METRIC_CARDS: MetricCard[] = [
  {
    id: 'nptel',
    title: 'NPTEL Star',
    subtitle: 'Top performance in specialized CS courses',
    icon: 'star',
    value: 'Top 1%'
  },
  {
    id: 'cgpa',
    title: '9.35 CGPA',
    subtitle: 'Academic excellence at CS Engineering',
    icon: 'academic',
    value: '9.35'
  },
  {
    id: 'internship',
    title: 'Internship',
    subtitle: 'Real-world experience in backend engineering workflows using Large Language Models.',
    icon: 'briefcase',
    value: 'LLM Systems'
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    subtitle: 'Active participant and problem solver',
    icon: 'trophy',
    value: '5+ Awards'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nextgen-ai',
    title: 'NextGen AI',
    badge: 'FEATURED / AI',
    description: 'An AI-powered developer platform that automates API testing, generates intelligent test cases, and streamlines backend development workflows using Large Language Models.',
    fullDescription: 'NextGen AI is a developer productivity platform engineered to dramatically cut down time spent writing boilerplate integration tests and validating REST/GraphQL APIs. Powered by state-of-the-art LLMs, NextGen AI analyzes OpenAPI specifications and codebase endpoints to synthesize end-to-end test suites, detect security vulnerabilities, and generate synthetic payload mocks.',
    tags: ['TypeScript', 'React', 'Node.js', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myrondcruz/nextgen-ai',
    liveDemoUrl: 'https://nextgen-ai.dev',
    featured: true,
    architecture: [
      'Express.js API Gateway with async event-driven queuing',
      'OpenAI GPT-4o integration for code parsing and test synthesis',
      'React + Tailwind CSS frontend dashboard with dynamic live terminal streaming',
      'Docker containerized test runner environment for safe dynamic code execution'
    ],
    keyFeatures: [
      'Automatic OpenAPI / Swagger Spec parser and endpoint mapper',
      'Zero-config automated unit and integration test generation',
      'Real-time response assertion validator and payload schema generator',
      'Interactive AI commentary explaining failure roots and code fixes'
    ],
    technicalHighlights: [
      'Structured OpenAI API JSON outputs for deterministic parsing of OpenAPI endpoint specifications',
      'Engineered an async Node.js background job queue for handling concurrent test synthesis requests',
      'Configured sandboxed Docker runner environments to execute generated API tests safely',
      'Implemented real-time SSE stream handlers in React for dynamic terminal output visualization',
      'Built custom JSON Schema mock payload generators targeting boundary values and edge cases'
    ]
  },
  {
    id: 'playmind-ai',
    title: 'PlayMind AI',
    badge: 'AI / COMPUTER VISION',
    description: 'An AI-powered sports performance and match intelligence platform that analyzes match footage using computer vision.',
    fullDescription: 'PlayMind AI leverages state-of-the-art computer vision models to track players, ball trajectories, and tactical patterns in real-time sports footage. Built for coaches and athletes, it provides heatmaps, player velocity stats, and automated event tags to deliver actionable insights directly from raw video uploads.',
    tags: ['Next.js', 'TensorFlow.js', 'Python', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myrondcruz/playmind-ai',
    liveDemoUrl: 'https://playmind-ai.dev',
    architecture: [
      'TensorFlow.js & YOLOv8 model pipeline for multi-object tracking',
      'Next.js 14 App Router client with WebGPU-accelerated video rendering',
      'Python FastAPI microservice for heavy video decoding and feature extraction',
      'PostgreSQL + Supabase vector database for matching historic tactic profiles'
    ],
    keyFeatures: [
      'Real-time player tracking and team formation detection',
      'Dynamic field heatmaps and sprint velocity calculations',
      'Automated highlight reel generation based on key match events',
      'Interactive video player with bounding box toggles and telemetry overlays'
    ],
    technicalHighlights: [
      'Integrated YOLOv8 computer vision models via OpenCV and WebGPU for multi-object tracking',
      'Designed a Python FastAPI microservice dedicated to video frame extraction and tensor decoding',
      'Implemented vector similarity search in Supabase PostgreSQL to match live movement patterns to tactic databases',
      'Developed HTML5 Canvas overlay rendering routines synchronized with video playback timestamps',
      'Built spatial coordinate transformation utilities to map 2D video coordinates to 3D field coordinate grids'
    ]
  },
  {
    id: 'athlete-ai',
    title: 'Athlete AI',
    badge: 'AI',
    description: 'An AI-powered fitness companion that generates personalized workout plans and performance recommendations.',
    fullDescription: 'Athlete AI is a personalized training engine designed to adapt workouts based on real-time biometric feedback, fatigue scores, and historical progress. It continuously recalibrates rest days, target rep ranges, and nutritional macro targets using AI heuristics.',
    tags: ['Next.js', 'FastAPI', 'Python', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myrondcruz/athlete-ai',
    liveDemoUrl: 'https://athlete-ai.dev',
    architecture: [
      'FastAPI server handling fitness optimization algorithms and ML predictions',
      'Next.js frontend with responsive offline-first offline sync capabilities',
      'JWT Authentication & encrypted client workout history store',
      'Integration with wearable health telemetry schemas'
    ],
    keyFeatures: [
      'Dynamic exercise substitution based on available gym equipment',
      'Auto-adjusting progressive overload weight calculators',
      'Recovery analysis based on sleep and strain tracking',
      'Interactive meal planner and macro-nutrient breakdown'
    ],
    technicalHighlights: [
      'Constructed algorithmic rep/volume adjustment pipelines in Python FastAPI based on daily strain scores',
      'Implemented stateless JWT token authentication with secure HTTP-only cookie handlers',
      'Designed relational PostgreSQL database schemas with indexed queries for fast workout log retrievals',
      'Built an offline-first state synchronization store using React Query and IndexedDB persistence',
      'Created automated macro-nutrient balancing formulas for personalized meal plan generation'
    ]
  },
  {
    id: 'aligncorp',
    title: 'AlignCorp',
    badge: 'HACKATHON',
    description: 'A collaborative hackathon project built to solve a real-world problem through rapid product development.',
    fullDescription: 'AlignCorp was conceived during a 36-hour intercollegiate hackathon to solve workplace alignment and distributed team task prioritization. It bridges the gap between high-level company goals (OKRs) and daily developer task execution through an intuitive visual workspace board.',
    tags: ['React Native', 'Firebase', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myrondcruz/aligncorp',
    liveDemoUrl: 'https://aligncorp.app',
    architecture: [
      'React Native for Web & Mobile cross-platform client codebase',
      'Firebase Firestore real-time websockets for instant task board synchronization',
      'Firebase Auth with Google OAuth & Organization SSO',
      'Cloud Functions for automated email summaries and milestone triggers'
    ],
    keyFeatures: [
      'Live collaborative kanban matrix with real-time cursor indicators',
      'OKR tracking tree mapping high-level goals down to micro-tasks',
      'Team workload balancing radar graphs',
      'Instant mobile push notifications for blocking dependencies'
    ],
    technicalHighlights: [
      'Configured Firebase Firestore real-time web-socket listeners for live multi-user board state updates',
      'Built cross-platform responsive interface using React Native for Web and Tailwind CSS',
      'Integrated Firebase Auth with Google OAuth2 single sign-on and role-based access control',
      'Developed serverless Firebase Cloud Functions for transactional email dispatch on task updates',
      'Implemented optimistic UI rendering patterns for instant drag-and-drop feedback on task state changes'
    ]
  },
  {
    id: 'finance-os',
    title: 'Finance.OS',
    badge: 'FULL STACK',
    description: 'A modern AI-powered personal finance dashboard that helps users track expenses and manage accounts.',
    fullDescription: 'Finance.OS provides a unified financial command center for tracking subscriptions, investment portfolios, cashflow forecasts, and monthly budgets. It features AI categorizations for raw bank statement CSV imports and automated budget alerts.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myrondcruz/finance-os',
    liveDemoUrl: 'https://finance-os.dev',
    architecture: [
      'React single page app with Recharts interactive data visualization',
      'Supabase Postgres relational database with Row Level Security (RLS)',
      'Supabase Auth with magic-link passwordless login',
      'Serverless Edge Functions for background exchange rate normalization'
    ],
    keyFeatures: [
      'Automated transaction categorization with fuzzy string matching',
      'Multi-currency support with live bank-rate updates',
      'Interactive income vs expense breakdown sankey diagrams',
      'Recurring subscription tracker with upcoming renewal reminders'
    ],
    technicalHighlights: [
      'Configured Supabase PostgreSQL database with Row Level Security (RLS) for tenant data protection',
      'Engineered fuzzy string matching algorithms to automatically categorize imported CSV transaction statements',
      'Built serverless Edge Functions for fetching and caching live multi-currency exchange rates',
      'Integrated Recharts data visualization components for interactive cashflow and budget breakdown graphs',
      'Implemented passwordless magic-link authentication using Supabase Auth'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React / Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion']
  },
  {
    title: 'Backend',
    isPrimary: true,
    skills: ['Node.js / Express', 'Python / FastAPI', 'Go (Learning)', 'Java / Spring Boot']
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DBs']
  },
  {
    title: 'AI / ML',
    skills: ['LangChain', 'PyTorch', 'HuggingFace', 'OpenCV']
  },
  {
    title: 'Tools',
    skills: ['Docker', 'AWS', 'Git / CI/CD', 'Linux']
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'nptel-star',
    title: 'NPTEL Discipline Star',
    description: 'Awarded for outstanding performance across multiple NPTEL Computer Science courses, recognizing consistent academic excellence and dedication to continuous learning.',
    icon: 'award'
  },
  {
    id: 'event-coord',
    title: 'Event Coordinator',
    description: 'Coordinated multiple intercollegiate technical events, overseeing planning, problem setting, logistics, and execution to deliver engaging coding competitions and technical experiences.',
    icon: 'calendar'
  },
  {
    id: 'hackathon-participant',
    title: 'Hackathon Participant',
    description: 'Actively participated in multiple hackathons, collaborating with teams to build innovative software solutions and rapidly prototype ideas under tight deadlines.',
    icon: 'users'
  },
  {
    id: 'fullstack-developer',
    title: 'Full-Stack Developer',
    description: 'Built AI-powered applications, finance dashboards, and full-stack web projects using modern technologies with a focus on scalable, user-centric solutions.',
    icon: 'code'
  }
];

export const SOCIAL_LINKS = [
  { name: 'Email', icon: 'Mail', url: 'mailto:myrondcrz15@gmail.com', action: 'email' },
  { name: 'Resume', icon: 'FileText', url: '#resume', action: 'resume' },
  { name: 'GitHub', icon: 'Github', url: 'https://github.com/myrondcruz', action: 'link' },
  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/myrondcruz', action: 'link' },
  { name: 'X', icon: 'Twitter', url: 'https://x.com/myrondcruz', action: 'link' },
  { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/myrondcruz', action: 'link' }
];
