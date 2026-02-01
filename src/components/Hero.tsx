'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 pattern-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 pattern-dots pointer-events-none opacity-50" />

      <motion.div
        className="container mx-auto max-w-5xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
          variants={itemVariants}
        >
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">Youth-Focused Education Platform</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          variants={itemVariants}
        >
          Learn. Grow. Lead.{' '}
          <span className="text-primary">Build Your Future</span> with ScaleApp.
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          ScaleApp is a youth‑focused education and growth platform designed to train, educate, 
          coach, and connect the next generation through digital learning, summits, podcasts, 
          and live training experiences.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
          <motion.a
            href="#programs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all glow-accent"
            whileHover={{ y: -4, boxShadow: '0 10px 40px hsl(187 85% 53% / 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            Start Learning
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#pillars"
            className="px-8 py-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Programs
          </motion.a>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-sm"
          variants={itemVariants}
        >
          Trusted by learners, educators, and partners shaping the future of education and skills.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
