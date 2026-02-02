"use client";
import { programs } from "@/constants/programs";
import { containerVariants, itemVariants } from "@/constants/variants";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FeaturedPrograms = () => {
  return (
    <section id="programs" className="py-24 px-1 relative">
      <div className="absolute inset-0 pattern-diagonal pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="text-primary font-mono text-sm mb-4">Our Courses</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Learning Opportunities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of our most impactful learning experiences designed to
            help you grow skills that matter.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Different layout for mobile vs desktop */}
              <div className="h-full">
                {/* MOBILE: Stacked layout */}
                <div className="md:hidden flex flex-col h-full">
                  <div className="relative h-48 w-full flex-shrink-0">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="100vw"
                    />
                  </div>
                  <div className="relative z-10 p-6 flex-grow">
                    <CardContent program={program} />
                  </div>
                </div>

                {/* DESKTOP: Side-by-side layout */}
                <div className="hidden md:flex h-full">
                  <div className="relative w-2/5 flex-shrink-0">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="object-cover h-full w-full  transition-transform duration-500 group-hover:scale-105"
                      sizes="40vw"
                    />
                  </div>
                  <div className="relative z-10 p-6 w-3/5">
                    <CardContent program={program} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Separate component for card content to avoid duplication
const CardContent = ({ program }: { program }) => (
  <>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
        <program.icon className="w-5 h-5 text-primary" />
      </div>
      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
        {program.category}
      </span>
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-2">
      {program.title}
    </h3>
    <p className="text-muted-foreground mb-4">{program.description}</p>
    <motion.a
      href="#"
      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
      whileHover={{ x: 5 }}
    >
      {program.cta}
      <ArrowRight className="w-4 h-4" />
    </motion.a>
  </>
);

export default FeaturedPrograms;
