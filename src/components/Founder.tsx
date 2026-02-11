"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/constants/variants";
import { Calendar, Mail } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import BookModal from "./BookModal";
import ContactModal from "./ContactModal";

const Founder = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="founder" className="py-24 px-1 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - About Founder */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Meet <span className="text-primary">Ghizo</span>
                </h2>
                <p className="text-primary font-semibold text-lg mb-2">
                  Founder & CEO of ScaleApp
                </p>
              </div>

              <div className="space-y-4 text-white/80">
                <p className="leading-relaxed">
                  Ghizo is a visionary entrepreneur dedicated to transforming
                  how young people learn and grow in the digital age. With over
                  a decade of experience in edtech and youth development, he
                  founded ScaleApp to bridge the gap between education and
                  real-world opportunities.
                </p>
                <p className="leading-relaxed">
                  His journey began as a mentor for aspiring tech professionals,
                  where he identified the critical need for practical,
                  accessible learning solutions. Today, he leads ScaleApp's
                  mission to empower the next generation of innovators and
                  leaders.
                </p>
                <p className="leading-relaxed">
                  Under his leadership, ScaleApp has helped thousands of young
                  professionals launch their careers and build impactful
                  solutions that solve real-world problems.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                variants={itemVariants}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
                  onClick={() => setIsBookModalOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Ghizo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact ScaleApp
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Founder Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <div className="aspect-[4/5] relative">
                  <img
                    src="/images/ghizo.png"
                    alt="Ghizo - Founder & CEO of ScaleApp"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />

                {/* Quote Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <p className="text-white/90 italic text-sm">
                    "Empowering youth isn't just about teaching skills—it's
                    about unlocking their potential to create meaningful
                    change."
                  </p>
                  <p className="text-primary text-xs mt-2">— Ghizo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Modals */}
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
