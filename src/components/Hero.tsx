"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

const phrases = ["Learn. Grow. Lead.", "Build  Your  Future  with  ScaleApp"];

// Variants for typing each letter
const typingVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, ease: "easeOut" },
  }),
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through phrases every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl text-center relative z-10 px-4 sm:px-6">
        {/* Top Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-semibold">
            Youth-Focused Education Platform
          </span>
        </motion.div>

        {/* Typing Hero Text */}
        <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 text-nowrap leading-tight">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {phrases[currentIndex].split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={typingVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          Empowering youth with the{" "}
          <span className="text-primary font-bold">
            skills, knowledge, and opportunities
          </span>{" "}
          they need to thrive in the digital age.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
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
      </div>
    </section>
  );
};

export default Hero;
