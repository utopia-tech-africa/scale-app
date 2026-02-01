'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FileText, ArrowRight, BookMarked, Lightbulb } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const resources = [
  {
    icon: Lightbulb,
    category: 'Career',
    title: 'How Young Professionals Can Future‑Proof Their Skills',
    description: 'Short insight on continuous learning and skill adaptability.',
    readTime: '5 min read',
  },
  {
    icon: BookMarked,
    category: 'Learning',
    title: 'The Ultimate Guide to Self-Directed Learning',
    description: 'Strategies for taking control of your educational journey.',
    readTime: '8 min read',
  },
  {
    icon: FileText,
    category: 'Growth',
    title: 'Building a Personal Growth Framework',
    description: 'A practical approach to continuous self-improvement.',
    readTime: '6 min read',
  },
];

const BlogResources = () => {
  return (
    <section id="resources" className="py-24 px-6 relative bg-secondary/30">
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-20" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="text-primary font-mono text-sm mb-4">Resources</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Insights & Resources
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Articles, ideas, and tools to help you stay informed, inspired, and continuously learning.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {resources.map((resource) => (
            <motion.article
              key={resource.title}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <resource.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary">{resource.category}</span>
                  <span className="text-xs text-muted-foreground">• {resource.readTime}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm"
                whileHover={{ x: 5 }}
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogResources;
