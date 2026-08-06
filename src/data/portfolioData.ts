import { Project, MetricCard, SkillCategory, Achievement, JourneyItem } from '../types/portfolio';

export const RESUME_PDF_URL = `${import.meta.env.BASE_URL}resume/Myron_D_Cruz_Resume.pdf`;

export const HERO_DATA = {
  name: "Myron D'Cruz",
  fullName: "Myron Domnic D'Cruz",
  title: "Backend Developer • Data Analyst • AI Builder • Computer Science Student",
  location: "Goa, India",
  role: "Backend Developer",
  education: "Computer Science Student",
  institution: "Agnel Institute of Technology and Design",
  status: "Open to Opportunities",
  buildingList: ["LeetCode", "AI Agents", "Freelancing"],
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
    id: 'testgen-ai',
    title: 'TestGen AI',
    badge: 'FEATURED / AI',
    description: 'An AI-powered developer platform that automates API testing, generates intelligent test cases, and streamlines backend development workflows using Large Language Models.',
    fullDescription: 'TestGen AI is a developer productivity platform engineered to dramatically cut down time spent writing boilerplate integration tests and validating REST/GraphQL APIs. Powered by state-of-the-art LLMs, TestGen AI analyzes OpenAPI specifications and codebase endpoints to synthesize end-to-end test suites, detect security vulnerabilities, and generate synthetic payload mocks.',
    tags: ['TypeScript', 'React', 'Node.js', 'OpenAI API','Express.js','Axios','Swagger Parser'],
    image: 'projects/testgen-ai/1.jpg',
    githubUrl: 'https://github.com/myrontheclown/nextgen-ai',
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
    fullDescription: 'PlayMind AI is an AI-powered sports intelligence platform that helps coaches, scouts, and athletes evaluate player performance beyond traditional match statistics. By analyzing gameplay situations and decision-making patterns, it generates performance insights, decision quality scores, future potential predictions, and personalized improvement recommendations to support smarter coaching and talent discovery.',
    tags: ['Next.js', 'React', 'Node.js', 'Google Gemini','Firebase'],
    image: 'projects/playmind-ai/1.png',
    githubUrl: 'https://github.com/myrontheclown/playmind-ai',
    architecture: [
      'Frontend: Next.js with React and TypeScript',
      'Backend: Node.js',
      'Database & Authentication: Firebase',
      'AI: Google Gemini for coaching insights and decision analysis',
      'Analytics: Custom AI logic for player evaluation, performance prediction, and talent discovery'
    ],
    keyFeatures: [
      'Real-time player tracking and team formation detection',
      'Dynamic field heatmaps and sprint velocity calculations',
      'Automated highlight reel generation based on key match events',
      'Interactive video player with bounding box toggles and telemetry overlays'
    ],
    technicalHighlights: [
      'Developed an AI-powered sports analytics platform focused on decision intelligence and player evaluation.',
      'Designed modules to generate performance scores, decision quality analysis, and personalized athlete recommendations.',
      'Integrated Google Gemini to deliver contextual coaching insights and explain player decisions.',
      'Built a responsive dashboard for visualizing athlete performance and predictive analytics.'
    ]
  },
  {
    id: 'athlete-ai',
    title: 'Athlete AI',
    badge: 'AI',
    description: 'An AI-powered fitness companion that generates personalized workout plans and performance recommendations.',
    fullDescription: 'Athlete AI is an AI-powered sports injury assessment and recovery platform designed to help athletes monitor injuries, receive personalized rehabilitation guidance, and make informed return-to-play decisions. By combining intelligent triage, recovery planning, computer vision concepts, and AI-assisted coaching, the platform supports athletes throughout their recovery journey.',
    tags: ['Next.js', 'Framer Motion', 'Google Gemini API', 'Tailwind CSS'],
    image: 'projects/athlete-ai/1.png',
    githubUrl: 'https://github.com/myrontheclown/athlete-ai',
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
      'Developed an AI-assisted injury triage system with an interactive body map and adaptive injury assessment workflow.',
      'Built personalized recovery plans that dynamically generate rehabilitation phases, daily objectives, and progress tracking.',
      'Implemented AI-powered injury analysis, reinjury risk assessment, and contextual recovery recommendations.',
      'Created bilingual support (English and Hindi) with seamless language switching across the application.',
      'Integrated PDF report generation, athlete onboarding, authentication, and role-based access into a unified platform.'
    ]
  },
  /* {
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
  }, */
  {
    id: 'finance-os',
    title: 'Common Cents',
    badge: 'FULL STACK',
    description: 'A modern AI-powered personal finance dashboard that helps users track expenses and manage accounts.',
    fullDescription: 'Finance.OS provides a unified financial command center for tracking subscriptions, investment portfolios, cashflow forecasts, and monthly budgets. It features AI categorizations for raw bank statement CSV imports and automated budget alerts.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    image: '/projects/common-cents/1.png',
    githubUrl: 'https://github.com/myrontheclown/common-cents',
    liveDemoUrl: 'https://common-cents-cxqh.onrender.com/',
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

export const JOURNEY: JourneyItem[] = [
  {
    id: 'backend-intern',
    filename: 'backend-intern.md',
    icon: 'terminal',
    role: 'Backend Developer Intern',
    company: 'Spark+ Technologies',
    duration: 'Mar 2026 – Present',
    employmentType: 'Internship',
    techStack: ['Node.js', 'Express.js', 'NestJS', 'TypeScript', 'JavaScript'],
  },
  {
    id: 'data-analyst',
    filename: 'data-analyst.md',
    icon: 'analytics',
    role: 'Data Analyst Intern',
    company: 'Remote Software Solutions Pvt Ltd',
    duration: 'Aug 2026 – Present',
    employmentType: 'Internship',
    techStack: ['Python', 'SQL', 'Pandas'],
  },
  {
    id: 'web-dev',
    filename: 'web-dev.md',
    icon: 'web',
    role: 'Web Developer Intern',
    company: 'Lenovo',
    duration: 'Jun 2025 – Jul 2025',
    employmentType: 'Internship',
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'education',
    filename: 'education.md',
    icon: 'graduation',
    role: 'Bachelor of Engineering',
    program: 'Computer Science',
    company: 'Agnel Institute of Engineering and Management',
    duration: '2023 – 2027',
    employmentType: 'Education',
    footnote: 'CGPA: 9.23',
  },
];

export const SOCIAL_LINKS = [
  { name: 'Email', icon: 'Mail', url: 'mailto:myrondcrz15@gmail.com', action: 'email' },
  { name: 'Resume', icon: 'FileText', url: '#resume', action: 'resume' },
  { name: 'GitHub', icon: 'Github', url: 'https://github.com/myrondcruz', action: 'link' },
  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/myrondcruz', action: 'link' },
  { name: 'X', icon: 'Twitter', url: 'https://x.com/myrondcruz', action: 'link' },
  { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/myrondcruz', action: 'link' }
];
