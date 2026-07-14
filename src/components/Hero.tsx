"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Volume2,
  VolumeX,
  Play,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";

const phrases = ["Learn. Grow. Lead", "Build Your Future with ScaleApp"];

const MOBILE_VIDEO_SRC =
  "https://res.cloudinary.com/dan9camhs/video/upload/v1783627067/scale_app_video_mobile_xguvvj.mp4";
const DESKTOP_VIDEO_SRC =
  "https://res.cloudinary.com/dan9camhs/video/upload/v1783627082/scale_app_video_desktop_txt1oe.mp4";
const YOUTUBE_URL = "https://www.youtube.com/watch?v=f_5ag2n6TZE";

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
  const [isMuted, setIsMuted] = useState(true);
  const [showWatchCta, setShowWatchCta] = useState(false);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  // Cycle through phrases every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Show "Watch Full Video" CTA when the video is near the end
  useEffect(() => {
    const handleTimeUpdate = (e: Event) => {
      const video = e.target as HTMLVideoElement;
      if (video.duration && video.currentTime >= video.duration - 5) {
        setShowWatchCta(true);
      } else {
        setShowWatchCta(false);
      }
    };

    const mobileVid = mobileVideoRef.current;
    const desktopVid = desktopVideoRef.current;

    mobileVid?.addEventListener("timeupdate", handleTimeUpdate);
    desktopVid?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      mobileVid?.removeEventListener("timeupdate", handleTimeUpdate);
      desktopVid?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const toggleMute = () => {
    const newMuted = !isMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = newMuted;
    if (desktopVideoRef.current) desktopVideoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <section className="min-h-screen flex items-end justify-center md:justify-start px-6 pt-20 pb-10 md:pb-16 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Mobile video (shown below 768px) */}
        <video
          ref={mobileVideoRef}
          className="w-full h-full object-cover block md:hidden"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          key="mobile-video"
        >
          <source src={MOBILE_VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Desktop video (shown at 768px and above) */}
        <video
          ref={desktopVideoRef}
          className="w-full h-full object-cover hidden md:block"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          key="desktop-video"
        >
          <source src={DESKTOP_VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-transparent" />
      </div>

      {/* Top-right controls: Mute + Watch Full Video */}
      <motion.div
        className="absolute top-24 right-4 sm:right-6 z-20 flex flex-col items-end gap-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 1, duration: 0.4 } }}
      >
        {/* Mute / Unmute */}
        <button
          onClick={toggleMute}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-white/25 transition-all duration-200 cursor-pointer text-sm font-medium shadow-lg"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 shrink-0" />
          ) : (
            <Volume2 className="w-4 h-4 shrink-0" />
          )}
          {isMuted ? "Unmute" : "Mute"}
        </button>

        {/* Watch Full Video — appears near end of video */}
        <AnimatePresence>
          {showWatchCta && (
            <motion.a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/40 backdrop-blur-md border border-red-400/20 text-white hover:bg-red-500 transition-colors duration-200 cursor-pointer text-sm font-semibold shadow-lg shadow-red-900/30"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
            >
              <Play className="w-4 h-4 shrink-0 fill-white" />
              Watch Full Video
            </motion.a>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto md:mx-0 max-w-5xl text-center md:text-left relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Typing Hero Text */}
        <motion.h1
          className="relative text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-10 leading-tight
                     h-[4.5rem] sm:h-[5.5rem] md:h-[7rem]"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              className="absolute inset-0 flex flex-wrap items-center justify-center md:justify-start text-center md:text-left px-2"
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
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0 px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          Empowering people and businesses alike with the{" "}
          <span className="text-primary font-bold">
            skills, knowledge, and opportunities
          </span>{" "}
          to thrive in the digital age
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center md:justify-start items-center md:items-start gap-4 w-full"
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
