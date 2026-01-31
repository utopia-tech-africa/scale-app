'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink, Github, Folder, ChevronDown, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  features: string[];
}

const allProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart functionality and payment integration.',
    longDescription: 'Built a comprehensive e-commerce solution featuring product catalog management, shopping cart with persistent state, secure checkout with Stripe integration, and an admin dashboard for inventory management. The platform handles thousands of products with optimized performance.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Stripe', 'Node.js'],
    github: '#',
    live: '#',
    features: ['Product catalog with filtering', 'Shopping cart with persistence', 'Stripe payment integration', 'Admin dashboard', 'Order tracking'],
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with real-time collaboration.',
    longDescription: 'Developed a Trello-like project management application with drag-and-drop task boards, real-time updates using WebSockets, team collaboration features, and comprehensive project analytics.',
    tech: ['Next.js', 'Redux', 'Socket.io', 'PostgreSQL', 'Prisma'],
    github: '#',
    live: '#',
    features: ['Drag-and-drop interface', 'Real-time collaboration', 'Team management', 'Project analytics', 'Custom workflows'],
  },
  {
    id: '3',
    title: 'Portfolio Generator',
    description: 'Generate beautiful portfolio websites from a simple JSON configuration.',
    longDescription: 'Created a tool that allows developers to generate personalized portfolio websites by simply providing a JSON configuration file. Includes multiple themes, custom color schemes, and automatic deployment.',
    tech: ['React', 'Node.js', 'Express', 'Puppeteer'],
    github: '#',
    live: '#',
    features: ['Multiple themes', 'JSON configuration', 'Auto-deployment', 'Custom domains', 'SEO optimized'],
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'Real-time weather application with 7-day forecasts and location detection.',
    longDescription: 'A comprehensive weather application that provides current conditions, hourly forecasts, and 7-day predictions. Features include automatic location detection, multiple city management, and severe weather alerts.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
    github: '#',
    live: '#',
    features: ['Current conditions', '7-day forecast', 'Location detection', 'Weather alerts', 'Interactive charts'],
  },
  {
    id: '5',
    title: 'Testing Framework',
    description: 'A lightweight testing utility for frontend components with snapshot testing.',
    longDescription: 'Developed a minimal yet powerful testing framework specifically designed for React components. Includes snapshot testing, DOM assertions, and async utilities with clear error messages.',
    tech: ['TypeScript', 'Jest', 'Node.js', 'JSDOM'],
    github: '#',
    live: '#',
    features: ['Snapshot testing', 'DOM assertions', 'Async utilities', 'Clear error messages', 'Fast execution'],
  },
  {
    id: '6',
    title: 'Component Library',
    description: 'A reusable React component library with accessibility built-in.',
    longDescription: 'Built a comprehensive component library following WCAG guidelines. All components are fully accessible, customizable via CSS variables, and documented with interactive examples.',
    tech: ['React', 'Storybook', 'TypeScript', 'Rollup'],
    github: '#',
    live: '#',
    features: ['WCAG compliant', 'Customizable themes', 'TypeScript support', 'Interactive docs', 'Tree-shakeable'],
  },
  {
    id: '7',
    title: 'Real Estate Listings',
    description: 'Property listing platform with advanced search and map integration.',
    longDescription: 'A full-featured real estate platform with property listings, advanced filtering, map-based search using Mapbox, virtual tours, and agent contact management.',
    tech: ['React', 'Mapbox', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    features: ['Map-based search', 'Advanced filters', 'Virtual tours', 'Agent profiles', 'Favorites list'],
  },
  {
    id: '8',
    title: 'Fitness Tracker',
    description: 'Personal fitness tracking app with workout plans and progress analytics.',
    longDescription: 'Developed a fitness tracking application with custom workout creation, exercise library, progress tracking with charts, and goal setting features. Includes calendar integration and reminders.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Chart.js'],
    github: '#',
    live: '#',
    features: ['Workout builder', 'Progress charts', 'Exercise library', 'Goal tracking', 'Calendar sync'],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors overflow-hidden"
      variants={cardVariants}
      layout
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between mb-4">
          <Folder className="w-10 h-10 text-primary" />
          <div className="flex items-center gap-4">
            <a
              href={project.github}
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.live}
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs font-mono text-muted-foreground bg-muted rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-border">
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.longDescription}
              </p>

              <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
              <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-primary text-xs">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Projects
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A collection of projects I've worked on. Click on any card to expand and see more details
              about the project, including key features and technologies used.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;
