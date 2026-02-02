"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

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
      {/* Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Hero background"
          className="object-cover"
          sizes="100vw"
          style={{
            objectPosition: "center center",
          }}
        />
        {/* Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent" />
      </div>

      <motion.div
        className="container mx-auto max-w-5xl text-center relative z-10 px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-semibold">
            Youth-Focused Education Platform
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          variants={itemVariants}
        >
          Learn. Grow. Lead.
          <br />
          <span className="text-primary drop-shadow-lg">
            Build Your Future
          </span>{" "}
          with ScaleApp
        </motion.h1>

        {/* <motion.p
          className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          ScaleApp is a youth‑focused education and growth platform designed to
          train, educate, coach, and connect the next generation through digital
          learning, summits, podcasts, and live training experiences.
        </motion.p> */}

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="#programs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
            whileHover={{
              y: -4,
              scale: 1.05,
              boxShadow: "0 10px 40px hsl(187 85% 53% / 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Learning
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#pillars"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm bg-white/5"
            whileHover={{
              y: -4,
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Programs
          </motion.a>
        </motion.div>

        {/* <motion.div
          className="text-white/80 text-sm backdrop-blur-sm bg-black/20 rounded-lg p-4 max-w-md mx-auto"
          variants={itemVariants}
        >
          <p>
            Trusted by{" "}
            <span className="font-semibold text-white">10,000+ learners</span>,
            educators, and partners shaping the future of education and skills.
          </p>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
