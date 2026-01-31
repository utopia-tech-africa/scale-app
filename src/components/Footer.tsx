const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-border">
      <p className="text-muted-foreground text-sm font-mono">
        Designed & Built with{' '}
        <span className="text-primary">♥</span>
      </p>
      <p className="text-muted-foreground text-xs mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
