import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-primary font-mono text-sm mb-4">04. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          I'm currently open to new opportunities and always happy to connect. 
          Whether you have a question, a project idea, or just want to say hello, 
          my inbox is always open!
        </p>

        <a
          href="mailto:your@email.com"
          className="inline-block px-10 py-4 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all"
        >
          Say Hello
        </a>

        {/* Social Links */}
        <div className="mt-16 flex justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="p-3 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
