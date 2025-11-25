export const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kelmi',
  jobTitle: 'Full Stack Developer',
  url: 'https://portfolio-kelmi.com',
  sameAs: [
    'https://github.com/Kelmi24',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Full Stack Development',
    'Web Development',
  ],
  email: 'gederickelme1@gmail.com',
  description: 'Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable web applications with modern architecture.',
};

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kelmi Portfolio',
  url: 'https://portfolio-kelmi.com',
  description: 'Professional portfolio of Kelmi, a Full Stack Web Developer',
  author: {
    '@type': 'Person',
    name: 'Kelmi',
  },
};
