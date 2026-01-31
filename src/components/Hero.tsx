const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-primary font-mono text-sm md:text-base mb-4">
            Hi, my name is
          </p>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Your Name.
          </h1>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
            I build things for the web.
          </h2>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            I'm a frontend developer with a strong QA background, specializing in building 
            exceptional digital experiences. Currently focused on creating accessible, 
            performant, and user-centric web applications.
          </p>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-all hover-lift glow-accent"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
