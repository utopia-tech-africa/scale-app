"use client";

import { socials } from "@/constants/contact";
import { footerLinks } from "@/constants/footer";
import { motion } from "framer-motion";
import ComponentLayout from "./ComponentLayout";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <ComponentLayout className="py-0 border border-border rounded-t-4xl">
      <footer>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <a
              href="#"
              className="text-xl font-bold text-foreground hover:text-primary bg-transparent transition-colors"
            >
              <img
                className="w-20 h-20 object-cover"
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

          <div className="flex flex-col items-center gap-4 mb-6 text-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                Creatives and Creators Hub, 19 Nii Adjei Onano St, Accra
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+233541841970"
                  className="text-sm hover:text-primary transition-colors"
                >
                  +233 5418 419 70
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:gyankson@btlafrica.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  gyankson@btlafrica.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pb-4">
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
