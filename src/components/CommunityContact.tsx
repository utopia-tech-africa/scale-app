"use client";
import { containerVariants, itemVariants } from "@/constants/variants";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const CommunityContact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden bg-secondary/30"
    >
      <div className="absolute inset-0 pattern-gradient-radial pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-4xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <p className="text-primary font-mono text-sm mb-4">Join Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the ScaleApp Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay connected with new programs, events, courses, and learning
            opportunities.
          </p>
        </motion.div>

        <motion.div className="max-w-xl mx-auto mb-12" variants={itemVariants}>
          <div className="p-8 bg-card border border-border rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Newsletter
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Get learning resources, event updates, and growth insights
              delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                required
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all flex items-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Join
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-muted-foreground mb-6">
            Have questions or want to partner with us? We'd love to hear from
            you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:hello@scaleapp.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunityContact;
