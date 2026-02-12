"use client";
import { socials } from "@/constants/contact";
import { footerLinks } from "@/constants/footer";
import { motion } from "framer-motion";
import ComponentLayout from "./ComponentLayout";

const Footer = () => {
  return (
    <ComponentLayout className="pb-0">
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <a
              href="#"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              <img
                className="w-16 h-16 object-cover"
                src="/images/scale-app-logo.png"
                alt=""
              />
            </a>

            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} ScaleApp. Building the future of
              learning, growth, and opportunity.
            </p>
          </div>
        </div>
      </footer>
    </ComponentLayout>
  );
};

export default Footer;
