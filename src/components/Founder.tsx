"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/constants/variants";
import { Calendar, Mail, Sparkles, Zap, Target, Quote } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import BookModal from "./BookModal";
import ContactModal from "./ContactModal";
import ComponentLayout from "./ComponentLayout";

const Founder = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <ComponentLayout>
        <section id="founder" className="py-6 relative overflow-hidden">
          {/* Deep Gradient Background */}
          <div className="absolute inset-0 bg-[#030303]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

          <motion.div
            className="container mx-auto max-w-6xl relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Image & Quick Stats (4 Cols) */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-5 space-y-6"
              >
                <div className="relative group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
                    <img
                      src="/images/ghizo.jpg"
                      alt="Ghizo - Founder & CEO"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Sparkles, label: "Afro Catalyst" },
                    { icon: Zap, label: "Leader" },
                    { icon: Target, label: "Impact" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 p-3 rounded-xl text-center"
                    >
                      <item.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                      <span className="text-white text-[10px] uppercase font-bold tracking-widest">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="lg:col-span-7 space-y-8"
              >
                <header>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                    Meet <span className="text-primary">Ghizo</span>
                  </h2>
                  <p className="text-xl text-primary/80 font-medium">
                    Founder & CEO of ScaleApp
                  </p>
                  <div className="h-1 w-20 bg-primary mt-6 rounded-full" />
                </header>

                {/* Full Text - Preserved and enhanced with spacing */}
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                  <p>
                    Ghizo is a visionary entrepreneur dedicated to transforming
                    how young people learn and grow in the digital age. With
                    over a decade of experience in edtech and youth development,
                    he founded ScaleApp to bridge the gap between education and
                    real-world opportunities.
                  </p>
                  <p>
                    His journey began as a mentor for aspiring tech
                    professionals, where he identified the critical need for
                    practical, accessible learning solutions. Today, he leads
                    ScaleApp's mission to empower the next generation of
                    innovators and leaders.
                  </p>
                  <p>
                    Under his leadership, ScaleApp has helped thousands of young
                    professionals launch their careers and build impactful
                    solutions that solve real-world problems.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full">
                  <Button
                    size="lg"
                    className="w-full cursor-pointer sm:w-auto bg-primary hover:bg-primary/90 text-black font-bold h-14 px-6 sm:px-10 rounded-lg transition-transform duration-300 hover:scale-105"
                    onClick={() => setIsBookModalOpen(true)}
                  >
                    <Calendar className="mr-2 h-5 w-5 shrink-0" />
                    Book Ghizo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full cursor-pointer sm:w-auto border-white/20 bg-transparent hover:bg-transparent hover:text-white text-white font-bold h-14 px-6 sm:px-10 rounded-lg transition-transform duration-300 hover:scale-105"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    <Mail className="mr-2 h-5 w-5 shrink-0" />
                    Contact ScaleApp
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </ComponentLayout>

      <BookModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Founder;
