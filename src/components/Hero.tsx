'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 pattern-dots pointer-events-none opacity-50" />

      <motion.div
        className="container mx-auto max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-primary font-mono text-sm md:text-base mb-4"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
          variants={itemVariants}
        >
          Your Name.
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6"
          variants={itemVariants}
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          variants={itemVariants}
        >
          I'm a frontend developer with a strong QA background, specializing in building
          exceptional digital experiences. Currently focused on creating accessible,
          performant, and user-centric web applications.
        </motion.p>

        <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-all glow-accent"
            whileHover={{ y: -4, boxShadow: '0 10px 40px hsl(187 85% 53% / 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
