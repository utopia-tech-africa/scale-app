"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, BookOpen, Compass } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const phrases = ["Learn. Grow. Lead", "Build Your Future with ScaleApp"];

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
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 to-transparent" />
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
        <motion.h1
          className="relative text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight
                     h-[4.5rem] sm:h-[5.5rem] md:h-[7rem]"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              className="absolute inset-0 flex flex-wrap items-center justify-center text-center px-2"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.4,
                  },
                },
              }}
            >
              {phrases[currentIndex].split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7 }}
                  className={`inline-block mr-3
            ${
              phrases[currentIndex] === "Learn. Grow. Lead"
                ? "whitespace-nowrap"
                : "sm:whitespace-nowrap wrap-break-word"
            }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          Empowering youth with the{" "}
          <span className="text-primary font-bold">
            skills, knowledge, and opportunities
          </span>{" "}
          they need to thrive in the digital age.
        </motion.p>

        {/* Buttons - FIXED RESPONSIVENESS */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
        >
          <a href="#about" className="w-full sm:w-auto flex justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black font-bold h-14 px-6 sm:px-10 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 flex justify-center items-center"
            >
              <ArrowRight className="mr-2 h-5 w-5 shrink-0" />
              Learn More
            </Button>
          </a>

          <a href="#programs" className="w-full sm:w-auto flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="w-full cursor-pointer sm:w-auto border-white/20 bg-transparent hover:bg-transparent hover:text-white text-white font-bold h-14 px-6 sm:px-10 rounded-lg transition-transform duration-300 hover:scale-105 flex justify-center items-center"
            >
              <Compass className="mr-2 h-5 w-5 shrink-0" />
              Explore Programs
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
