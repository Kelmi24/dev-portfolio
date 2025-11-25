// Skills data structure and configuration

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

export type ProficiencyLabel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type SkillGroup = 'core' | 'familiar' | 'learning';

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number; // 0-100
  proficiencyLabel: ProficiencyLabel;
  yearsOfExperience: number;
  lastUsed: string; // Date string (YYYY-MM)
  projects: string[]; // Associated project names
  description: string; // How you've used it
  icon: string; // Emoji or icon identifier
  group: SkillGroup; // Core, Familiar, or Learning
}

export interface CategoryInfo {
  id: SkillCategory;
  name: string;
  icon: string;
  description: string;
}

// Category definitions
export const categories: CategoryInfo[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: '🎨',
    description: 'UI/UX and client-side technologies',
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: '⚙️',
    description: 'Server-side and API development',
  },
  {
    id: 'database',
    name: 'Databases',
    icon: '🗄️',
    description: 'Data storage and management',
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: '🚀',
    description: 'Deployment and infrastructure',
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: '🛠️',
    description: 'Development tools and utilities',
  },
];

// Skills data
export const skills: Skill[] = [
  // Frontend - Core Technologies
  {
    name: 'React',
    category: 'frontend',
    proficiency: 90,
    proficiencyLabel: 'Expert',
    yearsOfExperience: 3,
    lastUsed: '2025-11',
    projects: ['Portfolio Website', 'E-commerce Platform', 'Dashboard App'],
    description:
      'Built multiple production applications using React with hooks, context API, and modern patterns. Expert in component architecture and state management.',
    icon: '⚛️',
    group: 'core',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 85,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2.5,
    lastUsed: '2025-11',
    projects: ['Portfolio Website', 'Type-safe API Client', 'Component Library'],
    description:
      'Strong typing skills with interfaces, generics, and advanced types. Use TypeScript for all new projects to ensure type safety and better developer experience.',
    icon: '📘',
    group: 'core',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    proficiency: 88,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2,
    lastUsed: '2025-11',
    projects: ['Portfolio Website', 'Blog Platform', 'SaaS Application'],
    description:
      'Experienced with App Router, Server Components, API routes, and SSR/SSG. Built SEO-optimized applications with excellent performance.',
    icon: '▲',
    group: 'core',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 92,
    proficiencyLabel: 'Expert',
    yearsOfExperience: 2,
    lastUsed: '2025-11',
    projects: ['Portfolio Website', 'UI Component Library', 'Marketing Site'],
    description:
      'Expert in utility-first CSS with custom configurations, responsive design, and creating reusable component patterns. Proficient in dark mode implementation.',
    icon: '🎨',
    group: 'core',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 95,
    proficiencyLabel: 'Expert',
    yearsOfExperience: 4,
    lastUsed: '2025-11',
    projects: ['All Projects'],
    description:
      'Deep understanding of ES6+, async/await, closures, prototypes, and functional programming. Expert in modern JavaScript patterns and best practices.',
    icon: '📜',
    group: 'core',
  },
  {
    name: 'HTML5',
    category: 'frontend',
    proficiency: 95,
    proficiencyLabel: 'Expert',
    yearsOfExperience: 5,
    lastUsed: '2025-11',
    projects: ['All Projects'],
    description:
      'Semantic HTML, accessibility best practices, SEO optimization, and modern HTML5 APIs. Strong focus on web standards and cross-browser compatibility.',
    icon: '🌐',
    group: 'core',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    proficiency: 90,
    proficiencyLabel: 'Expert',
    yearsOfExperience: 5,
    lastUsed: '2025-11',
    projects: ['All Projects'],
    description:
      'Advanced CSS including Flexbox, Grid, animations, and responsive design. Expert in CSS architecture and methodology (BEM, CSS Modules).',
    icon: '🎨',
    group: 'core',
  },

  // Frontend - Familiar Technologies
  {
    name: 'Redux',
    category: 'frontend',
    proficiency: 75,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 1.5,
    lastUsed: '2025-09',
    projects: ['E-commerce Platform', 'Dashboard App'],
    description:
      'Implemented Redux Toolkit for state management in complex applications. Familiar with middleware, selectors, and Redux best practices.',
    icon: '🔄',
    group: 'familiar',
  },
  {
    name: 'Vue.js',
    category: 'frontend',
    proficiency: 65,
    proficiencyLabel: 'Intermediate',
    yearsOfExperience: 1,
    lastUsed: '2025-06',
    projects: ['Admin Panel', 'Internal Tools'],
    description:
      'Built several projects with Vue 3 Composition API. Comfortable with Vue ecosystem including Vue Router and Pinia.',
    icon: '💚',
    group: 'familiar',
  },

  // Backend - Core Technologies
  {
    name: 'Node.js',
    category: 'backend',
    proficiency: 85,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 3,
    lastUsed: '2025-11',
    projects: ['REST API', 'Microservices', 'Real-time Chat'],
    description:
      'Built scalable backend services with Express and Fastify. Expert in async programming, streams, and Node.js performance optimization.',
    icon: '🟢',
    group: 'core',
  },
  {
    name: 'Express.js',
    category: 'backend',
    proficiency: 88,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 3,
    lastUsed: '2025-10',
    projects: ['REST API', 'Authentication Service', 'File Upload Service'],
    description:
      'Developed RESTful APIs with proper routing, middleware, error handling, and authentication. Implemented JWT-based auth and role-based access control.',
    icon: '🚂',
    group: 'core',
  },
  {
    name: 'REST APIs',
    category: 'backend',
    proficiency: 90,
    proficiencyLabel: 'Expert',
    yearsOfExperience: 3,
    lastUsed: '2025-11',
    projects: ['E-commerce API', 'User Management API', 'Payment Integration'],
    description:
      'Designed and implemented RESTful APIs following best practices. Expert in API versioning, documentation (OpenAPI/Swagger), and security.',
    icon: '🔌',
    group: 'core',
  },

  // Backend - Familiar Technologies
  {
    name: 'Python',
    category: 'backend',
    proficiency: 70,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2,
    lastUsed: '2025-08',
    projects: ['Data Processing Scripts', 'Automation Tools', 'ML Model'],
    description:
      'Used Python for scripting, data processing, and backend services. Familiar with Flask, FastAPI, and data science libraries.',
    icon: '🐍',
    group: 'familiar',
  },
  {
    name: 'GraphQL',
    category: 'backend',
    proficiency: 65,
    proficiencyLabel: 'Intermediate',
    yearsOfExperience: 1,
    lastUsed: '2025-07',
    projects: ['Blog Platform', 'Content Management System'],
    description:
      'Implemented GraphQL APIs with Apollo Server. Understanding of schemas, resolvers, and query optimization.',
    icon: '◭',
    group: 'familiar',
  },

  // Databases - Core Technologies
  {
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 80,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2,
    lastUsed: '2025-10',
    projects: ['E-commerce Platform', 'User Management System'],
    description:
      'Designed relational database schemas, wrote complex queries, and optimized performance. Familiar with indexing, transactions, and migrations.',
    icon: '🐘',
    group: 'core',
  },
  {
    name: 'MongoDB',
    category: 'database',
    proficiency: 82,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2.5,
    lastUsed: '2025-11',
    projects: ['Blog Platform', 'Real-time Chat', 'Analytics Dashboard'],
    description:
      'Experienced with document-based data modeling, aggregation pipelines, and indexing strategies. Used Mongoose for schema validation.',
    icon: '🍃',
    group: 'core',
  },

  // Databases - Familiar Technologies
  {
    name: 'Redis',
    category: 'database',
    proficiency: 70,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 1.5,
    lastUsed: '2025-09',
    projects: ['Caching Layer', 'Session Management', 'Rate Limiting'],
    description:
      'Implemented Redis for caching, session storage, and pub/sub messaging. Improved application performance significantly.',
    icon: '🔴',
    group: 'familiar',
  },
  {
    name: 'MySQL',
    category: 'database',
    proficiency: 75,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2,
    lastUsed: '2025-05',
    projects: ['Legacy System Migration', 'Reporting Dashboard'],
    description:
      'Worked with MySQL databases, wrote optimized queries, and performed database migrations. Familiar with stored procedures and triggers.',
    icon: '🐬',
    group: 'familiar',
  },

  // DevOps - Core Technologies
  {
    name: 'Git',
    category: 'devops',
    proficiency: 92,
    proficiencyLabel: 'Expert',
    yearsOfExperience: 4,
    lastUsed: '2025-11',
    projects: ['All Projects'],
    description:
      'Expert in Git workflows (Git Flow, trunk-based), branching strategies, rebasing, and conflict resolution. Experienced with GitHub, GitLab, and Bitbucket.',
    icon: '🔀',
    group: 'core',
  },
  {
    name: 'Docker',
    category: 'devops',
    proficiency: 78,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2,
    lastUsed: '2025-10',
    projects: ['Microservices', 'Development Environment', 'CI/CD Pipeline'],
    description:
      'Containerized applications with Docker, created multi-stage builds, and managed Docker Compose for local development.',
    icon: '🐳',
    group: 'core',
  },
  {
    name: 'CI/CD',
    category: 'devops',
    proficiency: 75,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2,
    lastUsed: '2025-11',
    projects: ['Automated Deployment', 'Testing Pipeline'],
    description:
      'Set up CI/CD pipelines with GitHub Actions and GitLab CI. Automated testing, building, and deployment processes.',
    icon: '🔄',
    group: 'core',
  },

  // DevOps - Familiar Technologies
  {
    name: 'AWS',
    category: 'devops',
    proficiency: 65,
    proficiencyLabel: 'Intermediate',
    yearsOfExperience: 1.5,
    lastUsed: '2025-09',
    projects: ['Cloud Deployment', 'S3 Storage', 'Lambda Functions'],
    description:
      'Deployed applications on AWS using EC2, S3, Lambda, and RDS. Familiar with IAM, CloudWatch, and basic AWS architecture.',
    icon: '☁️',
    group: 'familiar',
  },
  {
    name: 'Vercel',
    category: 'devops',
    proficiency: 88,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2,
    lastUsed: '2025-11',
    projects: ['Portfolio Website', 'Next.js Applications'],
    description:
      'Deployed multiple Next.js applications on Vercel with custom domains, environment variables, and preview deployments.',
    icon: '▲',
    group: 'core',
  },

  // Tools - Core Technologies
  {
    name: 'VS Code',
    category: 'tools',
    proficiency: 95,
    proficiencyLabel: 'Expert',
    yearsOfExperience: 4,
    lastUsed: '2025-11',
    projects: ['All Projects'],
    description:
      'Primary code editor with extensive customization. Expert in shortcuts, extensions, debugging, and productivity features.',
    icon: '💻',
    group: 'core',
  },
  {
    name: 'npm/yarn',
    category: 'tools',
    proficiency: 90,
    proficiencyLabel: 'Expert',
    yearsOfExperience: 4,
    lastUsed: '2025-11',
    projects: ['All Projects'],
    description:
      'Expert in package management, dependency resolution, and monorepo setups. Published packages to npm registry.',
    icon: '📦',
    group: 'core',
  },
  {
    name: 'Postman',
    category: 'tools',
    proficiency: 85,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 3,
    lastUsed: '2025-11',
    projects: ['API Development', 'Testing'],
    description:
      'Used Postman for API testing, documentation, and automation. Created collections and environments for team collaboration.',
    icon: '📮',
    group: 'core',
  },

  // Tools - Familiar Technologies
  {
    name: 'Figma',
    category: 'tools',
    proficiency: 70,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2,
    lastUsed: '2025-10',
    projects: ['UI Design', 'Prototyping'],
    description:
      'Created UI designs and prototypes in Figma. Collaborated with designers and implemented designs in code.',
    icon: '🎨',
    group: 'familiar',
  },
  {
    name: 'Jest',
    category: 'tools',
    proficiency: 75,
    proficiencyLabel: 'Advanced',
    yearsOfExperience: 2,
    lastUsed: '2025-09',
    projects: ['Unit Testing', 'Integration Testing'],
    description:
      'Wrote unit and integration tests with Jest. Familiar with mocking, snapshots, and test coverage reporting.',
    icon: '🃏',
    group: 'familiar',
  },

  // Learning Technologies
  {
    name: 'Rust',
    category: 'backend',
    proficiency: 40,
    proficiencyLabel: 'Beginner',
    yearsOfExperience: 0.5,
    lastUsed: '2025-11',
    projects: ['Learning Projects', 'CLI Tools'],
    description:
      'Currently learning Rust for systems programming and performance-critical applications. Exploring ownership, borrowing, and concurrency.',
    icon: '🦀',
    group: 'learning',
  },
  {
    name: 'Kubernetes',
    category: 'devops',
    proficiency: 45,
    proficiencyLabel: 'Beginner',
    yearsOfExperience: 0.5,
    lastUsed: '2025-10',
    projects: ['Container Orchestration Study'],
    description:
      'Learning Kubernetes for container orchestration. Understanding pods, services, deployments, and basic cluster management.',
    icon: '☸️',
    group: 'learning',
  },
  {
    name: 'Three.js',
    category: 'frontend',
    proficiency: 50,
    proficiencyLabel: 'Intermediate',
    yearsOfExperience: 0.5,
    lastUsed: '2025-11',
    projects: ['3D Portfolio Experiment', 'WebGL Learning'],
    description:
      'Exploring 3D graphics on the web with Three.js. Learning about scenes, cameras, lighting, and animations.',
    icon: '🎮',
    group: 'learning',
  },
];

// Helper functions
export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

export function getSkillsByGroup(group: SkillGroup): Skill[] {
  return skills.filter((skill) => skill.group === group);
}

export function getSkillsByProficiency(minProficiency: number): Skill[] {
  return skills.filter((skill) => skill.proficiency >= minProficiency);
}

export function searchSkills(query: string): Skill[] {
  const lowerQuery = query.toLowerCase();
  return skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(lowerQuery) ||
      skill.description.toLowerCase().includes(lowerQuery) ||
      skill.projects.some((project) =>
        project.toLowerCase().includes(lowerQuery)
      )
  );
}

// Most relevant skills for Full Stack Developer role
export const mostRelevantSkills = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Docker',
  'REST APIs',
  'Tailwind CSS',
];
