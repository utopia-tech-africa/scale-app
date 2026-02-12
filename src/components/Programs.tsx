"use client";
import { programs } from "@/constants/programs";
import { containerVariants, itemVariants } from "@/constants/variants";
import { motion } from "framer-motion";
import ComponentLayout from "./ComponentLayout";

const Programs = () => {
  return (
    <ComponentLayout>
      <section id="programs" className="relative py-6">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900" />
        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Do at <span className="text-primary">ScaleApp</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Everything we build is designed to help young people learn faster,
              grow smarter, and unlock real‑world opportunities.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {programs.map((program) => (
              <motion.div
                key={program.title}
                className="group relative p-6 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 h-full min-h-85"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgba(var(--primary), 0.3)",
                  boxShadow: "0 20px 60px rgba(var(--primary), 0.15)",
                }}
              >
                <div className="absolute inset-0">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/80 to-black/60" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 border border-white/20">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="grow">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-6">
                      {program.subtitle}
                    </p>
                    <ul className="space-y-3">
                      {program.features.map((feature) => (
                        <motion.li
                          key={feature}
                          className="flex items-start gap-3 text-white/90 text-sm"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <span className="text-primary mt-1 shrink-0">▶</span>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </ComponentLayout>
  );
};

export default Programs;
