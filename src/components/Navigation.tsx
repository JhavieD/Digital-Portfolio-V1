import { useState, useEffect } from "react";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass glass-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors"
        >
          JV<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <Button size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass glass-border mt-2 mx-4 rounded-xl p-6 animate-slide-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-border my-2" />
            <div className="flex items-center gap-3">
              <a href="https://github.com" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@example.com" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <Button className="w-full gap-2 mt-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
