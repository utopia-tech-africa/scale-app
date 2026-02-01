'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Laptop, Users, Calendar, BookOpen } from 'lucide-react';

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

const programs = [
  {
    icon: Laptop,
    category: 'Training Center',
    title: 'Digital Skills Bootcamp',
    description: 'An intensive hands‑on bootcamp designed to equip learners with practical, job‑ready digital skills.',
    cta: 'Learn More',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Users,
    category: 'Coaching',
    title: 'Youth Leadership Program',
    description: 'A guided leadership and personal growth program for young professionals and founders.',
    cta: 'Join Program',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Calendar,
    category: 'Events & Summits',
    title: 'Online Learning Summit',
    description: 'A virtual summit bringing together educators, creators, and industry leaders.',
    cta: 'Register',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    icon: BookOpen,
    category: 'Online Courses',
    title: 'Learning Fundamentals Course',
    description: 'A self‑paced course covering essential learning, productivity, and growth skills.',
    cta: 'View Course',
    color: 'from-green-500/20 to-teal-500/20',
  },
];

const FeaturedPrograms = () => {
  return (
    <section id="programs" className="py-24 px-6 relative">
      <div className="absolute inset-0 pattern-diagonal pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="text-primary font-mono text-sm mb-4">Our Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Programs & Learning Opportunities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of our most impactful learning experiences designed to help you grow skills that matter.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              className="group relative p-6 bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <program.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {program.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  {program.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedPrograms;
