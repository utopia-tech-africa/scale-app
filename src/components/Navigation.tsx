import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Programs', href: '#pillars' },
  { label: 'Courses', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          <span className="text-primary">Scale</span>App
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <motion.a
              href="#contact"
              className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Learning
            </motion.a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col items-center gap-4 py-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Start Learning
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;
