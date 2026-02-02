"use client";
import { socials } from "@/constants/contact";
import { containerVariants, itemVariants } from "@/constants/variants";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pattern-gradient-radial pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-2xl text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.p
          className="text-primary font-mono text-sm mb-4"
          variants={itemVariants}
        >
          04. What's Next?
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg mb-10 leading-relaxed"
          variants={itemVariants}
        >
          I'm currently open to new opportunities and always happy to connect.
          Whether you have a question, a project idea, or just want to say
          hello, my inbox is always open!
        </motion.p>

        <motion.a
          href="mailto:your@email.com"
          className="inline-block px-10 py-4 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all"
          variants={itemVariants}
          whileHover={{
            y: -4,
            boxShadow: "0 10px 40px hsl(187 85% 53% / 0.2)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          Say Hello
        </motion.a>

        {/* Social Links */}
        <motion.div
          className="mt-16 flex justify-center gap-6"
          variants={itemVariants}
        >
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
