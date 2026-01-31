const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-[300px]" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm a passionate frontend developer with a unique background in 
              Quality Assurance. This combination gives me a distinctive perspective on 
              building software—I don't just write code, I ensure it works flawlessly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey started in QA, where I developed a keen eye for detail and a 
              deep understanding of user experience. This foundation naturally led me to 
              frontend development, where I could directly craft the experiences I was 
              once testing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I focus on building accessible, performant, and visually polished 
              web applications. My QA background means I write cleaner code, anticipate 
              edge cases, and always keep the end user in mind.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-3">Technologies I work with:</p>
              <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-muted-foreground">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group mx-auto md:mx-0">
            <div className="relative w-64 h-64 rounded overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
              <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute -inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
