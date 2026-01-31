'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Code, TestTube, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Redux'],
  },
  {
    title: 'Quality Assurance',
    icon: TestTube,
    skills: ['Test Planning', 'Automated Testing', 'Manual Testing', 'Selenium', 'Cypress', 'Jest', 'API Testing', 'Bug Tracking'],
  },
  {
    title: 'UI/UX',
    icon: Layout,
    skills: ['Responsive Design', 'Accessibility', 'Figma', 'User Testing', 'Wireframing', 'Design Systems'],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Jira', 'Agile/Scrum', 'CI/CD', 'npm/yarn', 'REST APIs'],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-30" />

      <motion.div
        className="container mx-auto max-w-4xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div className="flex items-center gap-4 mb-12" variants={cardVariants}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Skills
          </h2>
          <div className="h-px bg-border flex-1 max-w-[300px]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors group"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                  <category.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-sm font-mono text-muted-foreground bg-muted rounded hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + skillIndex * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
