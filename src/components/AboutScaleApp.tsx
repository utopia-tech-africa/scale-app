'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Heart, Users, Globe, Rocket } from 'lucide-react';

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

const values = [
  {
    icon: Heart,
    title: 'Learning‑first mindset',
    description: 'Education is at the core of everything we build.',
  },
  {
    icon: Users,
    title: 'Community and collaboration',
    description: 'Growing together through shared knowledge.',
  },
  {
    icon: Globe,
    title: 'Access and inclusion',
    description: 'Making quality education accessible to all.',
  },
  {
    icon: Rocket,
    title: 'Growth through action',
    description: 'Learning by doing and building real skills.',
  },
];

const AboutScaleApp = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 pattern-diagonal pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants}>
            <motion.p className="text-primary font-mono text-sm mb-4" variants={itemVariants}>
              About Us
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              Why ScaleApp Exists
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              ScaleApp was created to empower young individuals with access to quality education, 
              real‑world skills, mentorship, and meaningful learning experiences.
            </motion.p>
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed"
              variants={itemVariants}
            >
              Our mission is to build a scalable ecosystem where learning meets opportunity, 
              and growth becomes a lifelong journey.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-foreground font-medium mb-1">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutScaleApp;
