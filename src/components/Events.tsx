"use client";
import { containerVariants, itemVariants } from "@/constants/variants";
import { motion } from "framer-motion";
import { Calendar, Users, Mic, ArrowRight } from "lucide-react";
import ComponentLayout from "./ComponentLayout";

const Events = () => {
  return (
    <ComponentLayout>
      <section
        id="events"
        className="py-6 relative overflow-hidden bg-secondary/30"
      >
        <div className="absolute inset-0 pattern-gradient-radial pointer-events-none" />

        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <p className="text-primary font-mono text-sm mb-4">Events</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Events & Summits That Inspire Growth
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We host immersive learning experiences that connect ideas, people,
              and opportunities.
            </p>
          </motion.div>

          <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
            <motion.div
              className="relative p-8 bg-linear-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 ">
                <div className="flex items-center gap-2 mb-4 ">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full">
                    Featured Event
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-mono rounded-full">
                    Live Virtual
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Future Skills Summit 2026
                </h3>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">Live virtual event</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Industry speakers</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mic className="w-4 h-4 text-primary" />
                    <span className="text-sm">Interactive sessions</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <motion.a
                    href="#"
                    className="inline-flex items-center bg-primary hover:bg-primary/90 text-black font-bold gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all"
                  >
                    Save Your Spot
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </ComponentLayout>
  );
};

export default Events;
