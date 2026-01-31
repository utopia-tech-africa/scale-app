'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart functionality, payment integration, and responsive design. Built with React and integrated with a headless CMS.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with drag-and-drop functionality, team collaboration features, and real-time updates.',
    tech: ['Next.js', 'Redux', 'Socket.io', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
];

const FeaturedProject = ({ project, index }: { project: typeof featuredProjects[0]; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative grid md:grid-cols-12 gap-4 items-center mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className={`md:col-span-7 ${isEven ? 'md:order-1' : 'md:order-2'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <Folder className="w-16 h-16" />
          </div>
        </div>
      </motion.div>

      <div className={`md:col-span-5 ${isEven ? 'md:order-2 md:text-right' : 'md:order-1 md:text-left'}`}>
        <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{project.title}</h3>
        <motion.div
          className="p-6 bg-card rounded-lg shadow-lg mb-4 relative z-10"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
        </motion.div>
        <ul className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${isEven ? 'md:justify-end' : ''}`}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className={`flex gap-4 ${isEven ? 'md:justify-end' : ''}`}>
          <motion.a
            href={project.github}
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ y: -3 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.live}
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ y: -3 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 pattern-dots pointer-events-none opacity-30" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-[300px]" />
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link to="/projects">
            <motion.button
              className="px-8 py-4 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all"
              whileHover={{ y: -4, boxShadow: '0 10px 40px hsl(187 85% 53% / 0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
