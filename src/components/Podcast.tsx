'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Headphones, Play, Clock } from 'lucide-react';

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

const episodes = [
  {
    episode: '01',
    title: 'Learning Beyond the Classroom',
    guest: 'Education Innovator',
    description: 'Exploring how digital learning is reshaping education for young people.',
    duration: '45 min',
  },
  {
    episode: '02',
    title: 'Building Skills for Tomorrow',
    guest: 'Tech Industry Leader',
    description: 'What skills young professionals need to thrive in the modern workforce.',
    duration: '38 min',
  },
  {
    episode: '03',
    title: 'The Power of Mentorship',
    guest: 'Startup Founder',
    description: 'How mentorship can accelerate personal and professional growth.',
    duration: '42 min',
  },
];

const Podcast = () => {
  return (
    <section id="podcast" className="py-24 px-6 relative">
      <div className="absolute inset-0 pattern-dots pointer-events-none opacity-30" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Headphones className="w-5 h-5 text-primary" />
            <p className="text-primary font-mono text-sm">Podcast</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ScaleApp Podcast
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conversations with educators, founders, creatives, and leaders shaping the future of learning and work.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {episodes.map((episode) => (
            <motion.div
              key={episode.episode}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary font-mono text-sm">Episode {episode.episode}</span>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Clock className="w-3 h-3" />
                  {episode.duration}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{episode.title}</h3>
              <p className="text-primary text-sm mb-3">with {episode.guest}</p>
              <p className="text-muted-foreground text-sm mb-4">{episode.description}</p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm"
                whileHover={{ x: 5 }}
              >
                <Play className="w-4 h-4" />
                Listen Now
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Podcast;
