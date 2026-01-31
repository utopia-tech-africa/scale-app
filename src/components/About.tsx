'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 pattern-diagonal pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-4xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div className="flex items-center gap-4 mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-[300px]" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div className="md:col-span-2 space-y-4" variants={containerVariants}>
            <motion.p className="text-muted-foreground leading-relaxed" variants={itemVariants}>
              Hello! I'm a passionate frontend developer with a unique background in
              Quality Assurance. This combination gives me a distinctive perspective on
              building software—I don't just write code, I ensure it works flawlessly.
            </motion.p>
            <motion.p className="text-muted-foreground leading-relaxed" variants={itemVariants}>
              My journey started in QA, where I developed a keen eye for detail and a
              deep understanding of user experience. This foundation naturally led me to
              frontend development, where I could directly craft the experiences I was
              once testing.
            </motion.p>
            <motion.p className="text-muted-foreground leading-relaxed" variants={itemVariants}>
              Today, I focus on building accessible, performant, and visually polished
              web applications. My QA background means I write cleaner code, anticipate
              edge cases, and always keep the end user in mind.
            </motion.p>

            <motion.div className="pt-4" variants={itemVariants}>
              <p className="text-foreground font-medium mb-3">Technologies I work with:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-muted-foreground">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'].map((tech) => (
                  <motion.li
                    key={tech}
                    className="flex items-center gap-2"
                    whileHover={{ x: 5, color: 'hsl(187 85% 53%)' }}
                  >
                    <span className="text-primary">▹</span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative group mx-auto md:mx-0"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-64 h-64 rounded overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
              <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute -inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
