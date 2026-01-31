import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart functionality, payment integration, and responsive design. Built with React and integrated with a headless CMS.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with drag-and-drop functionality, team collaboration features, and real-time updates.',
    tech: ['Next.js', 'Redux', 'Socket.io', 'PostgreSQL'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Portfolio Generator',
    description: 'A tool that generates beautiful portfolio websites from a simple JSON configuration file.',
    tech: ['React', 'Node.js', 'Express'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location detection and 7-day forecasts.',
    tech: ['React', 'API Integration', 'CSS'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Testing Framework',
    description: 'A lightweight testing utility for frontend components with snapshot testing.',
    tech: ['TypeScript', 'Jest', 'Node.js'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Component Library',
    description: 'A reusable React component library with accessibility built-in.',
    tech: ['React', 'Storybook', 'TypeScript'],
    github: '#',
    live: '#',
    featured: false,
  },
];

const FeaturedProject = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <div className="relative grid md:grid-cols-12 gap-4 items-center mb-24">
    <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
      <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden group">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <Folder className="w-16 h-16" />
        </div>
      </div>
    </div>

    <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2 md:text-right' : 'md:order-1 md:text-left'}`}>
      <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{project.title}</h3>
      <div className="p-6 bg-card rounded-lg shadow-lg mb-4 relative z-10">
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
      </div>
      <ul className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className={`flex gap-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
        <a href={project.github} className="text-foreground hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={project.live} className="text-foreground hover:text-primary transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);

const OtherProject = ({ project }: { project: typeof projects[0] }) => (
  <div className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 hover-lift transition-all group">
    <div className="flex items-center justify-between mb-4">
      <Folder className="w-10 h-10 text-primary" />
      <div className="flex gap-4">
        <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
    <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
      {project.tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  </div>
);

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-[300px]" />
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-semibold text-foreground text-center mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <OtherProject key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
