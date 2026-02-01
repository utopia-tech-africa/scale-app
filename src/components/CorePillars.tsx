'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { GraduationCap, BookOpen, Monitor, Users, Library, Award } from 'lucide-react';

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

const pillars = [
  {
    icon: GraduationCap,
    title: 'Education',
    subtitle: 'Build Strong Foundations',
    features: ['Foundational learning', 'Skill development', 'Thought leadership', 'Articles, guides, and insights'],
  },
  {
    icon: BookOpen,
    title: 'Online Courses',
    subtitle: 'Learn at Your Own Pace',
    features: ['Structured digital courses', 'Self‑paced and cohort‑based learning', 'Industry‑relevant curriculum', 'Certificates (coming soon)'],
  },
  {
    icon: Monitor,
    title: 'Online Education',
    subtitle: 'Learn From Anywhere',
    features: ['Virtual workshops', 'Webinars', 'Live and on‑demand learning', 'Remote education experiences'],
  },
  {
    icon: Users,
    title: 'Coaching',
    subtitle: 'Learn With Guidance',
    features: ['Personal and group coaching', 'Mentorship programs', 'Leadership and growth coaching'],
  },
  {
    icon: Library,
    title: 'Learning Hub',
    subtitle: 'Keep Growing Continuously',
    features: ['Curated resources', 'Toolkits and guides', 'Knowledge library'],
  },
  {
    icon: Award,
    title: 'Training Center',
    subtitle: 'Train for the Real World',
    features: ['Physical and virtual training programs', 'Bootcamps', 'Certifications', 'Corporate and institutional training'],
  },
];

const CorePillars = () => {
  return (
    <section id="pillars" className="py-24 px-6 relative bg-secondary/30">
      <div className="absolute inset-0 pattern-grid pointer-events-none opacity-30" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do at <span className="text-primary">ScaleApp</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything we build is designed to help young people learn faster, grow smarter, 
            and unlock real‑world opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 40px hsl(187 85% 53% / 0.1)' }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{pillar.title}</h3>
              <p className="text-primary text-sm mb-4">{pillar.subtitle}</p>
              <ul className="space-y-2">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-primary mt-1">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CorePillars;
