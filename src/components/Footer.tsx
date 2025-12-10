import { Heart, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Designed & Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Jan Vincent M. Dominguez</span>
          </div>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
