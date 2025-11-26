'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import AnimatedCounter from '@/components/AnimatedCounter';
import { motion } from 'framer-motion';
import { staggerContainer, slideUp, fadeIn } from '@/lib/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Dynamic imports for code splitting
const SkillsSection = dynamic(() => import('@/components/skills/SkillsSection'), {
  loading: () => <div className="py-20 text-center">Loading skills...</div>,
});

const ContactForm = dynamic(() => import('@/components/contact/ContactForm'), {
  loading: () => <div className="py-20 text-center">Loading contact form...</div>,
});

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section id="hero" className="min-h-[80vh] flex items-center justify-center">
        <motion.div
          className="text-center space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Picture */}
          <motion.div className="mb-8" variants={slideUp}>
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
              <Image
                src="/images/profile.png"
                alt="Kelmi - Full Stack Developer Professional Headshot"
                fill
                priority
                className="rounded-full object-cover border-4 border-white/20 dark:border-neutral-800/40 shadow-2xl ring-4 ring-primary-500/20 dark:ring-primary-400/20"
              />
              {/* Decorative gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent -z-10 blur-xl"></div>
            </div>
          </motion.div>

          <motion.div className="mb-4" variants={slideUp}>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              Full Stack Developer
            </p>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-balance text-neutral-900 dark:text-neutral-50"
            variants={slideUp}
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Kelmi
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            variants={slideUp}
          >
            I build scalable web applications that solve real business problems
            and deliver measurable results through clean code and modern
            architecture.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 justify-center pt-6" variants={slideUp}>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-950 transition-colors"
            >
              Let&apos;s Connect
            </a>
            <a
              href="#skills"
              className="inline-flex items-center px-8 py-3 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 transition-colors"
            >
              Tech Stack
            </a>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <motion.h2 className="text-4xl font-bold mb-8 text-center text-neutral-900 dark:text-neutral-50" variants={slideUp}>About Me</motion.h2>
        <motion.div className="max-w-3xl mx-auto space-y-6" variants={staggerContainer}>
          <div className="text-lg text-neutral-700 dark:text-neutral-300 space-y-4">
            <p>
              I&apos;m a Full Stack Developer who transforms complex business
              requirements into elegant, performant web applications. With a
              strong foundation in both frontend and backend development, I
              specialize in creating end-to-end solutions that prioritize user
              experience and code maintainability.
            </p>
            <p>
              My journey in software development started with a curiosity about
              how things work under the hood. This led me to master the modern
              JavaScript ecosystem, where I&apos;ve built production
              applications using <strong>React</strong>,{' '}
              <strong>Next.js</strong>, and <strong>TypeScript</strong> on the
              frontend, paired with <strong>Node.js</strong> and{' '}
              <strong>PostgreSQL</strong> for robust backend systems. I&apos;ve
              successfully delivered projects that improved application
              performance by optimizing database queries and implementing
              efficient caching strategies.
            </p>
            <p>
              What drives me is the intersection of technical excellence and
              business impact. I don&apos;t just write code—I solve problems. Whether
              it&apos;s architecting a scalable microservices infrastructure,
              implementing real-time features with WebSockets, or optimizing
              bundle sizes for faster load times, I focus on solutions that
              move the needle for users and stakeholders alike.
            </p>
            <p>
              Currently, I&apos;m exploring the world of{' '}
              <strong>3D web experiences with Three.js</strong> and deepening
              my understanding of <strong>container orchestration with Kubernetes</strong>.
              I believe in continuous learning and staying ahead of industry
              trends to deliver cutting-edge solutions.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="text-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <div className="text-3xl font-bold text-primary-600">
                <AnimatedCounter value={4} suffix="+" />
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Years Experience
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <div className="text-3xl font-bold text-primary-600">
                <AnimatedCounter value={40} suffix="+" />
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Technologies
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <div className="text-3xl font-bold text-primary-600">
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Projects Delivered
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
              <div className="text-3xl font-bold text-primary-600">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Client Satisfaction
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-8 text-center">
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
              Looking for a developer who can hit the ground running and
              contribute from day one?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Let&apos;s discuss your project
              <svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <SkillsSection />

      <motion.section
        id="projects"
        className="py-20 bg-neutral-50 dark:bg-neutral-900 -mx-4 px-4 transition-colors"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="container mx-auto">
          <motion.h2 className="text-4xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-50" variants={slideUp}>Projects</motion.h2>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer}>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-neutral-100 dark:border-neutral-700"
                variants={slideUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-50">Project {i}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  A brief description of this amazing project and the
                  technologies used.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section id="contact" className="py-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-neutral-900 dark:text-neutral-50">Get in Touch</h2>
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out using the form below!
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
