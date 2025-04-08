
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import SocialLinks from "@/components/SocialLinks";
import { Heart } from "lucide-react";

/**
 * Footer Component
 * 
 * Displays website footer with copyright, links and social icons
 * Responsive design for all screen sizes
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur-md py-6">
      <div className="container space-y-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-3">
            <Link to="/" className="text-xl font-bold gradient-text">
              BioLink
            </Link>
            <p className="text-sm text-muted-foreground">
              Your personal gateway to all your professional profiles and content.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Connect</h3>
            <SocialLinks variant="grid" className="gap-2" />
          </div>

          {/* Newsletter (optional) */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Support</h3>
            <p className="text-sm text-muted-foreground">
              Have questions? Need assistance?
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <div className="flex items-center pt-2">
              <ThemeToggle />
              <span className="text-xs text-muted-foreground ml-2">Change theme</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {currentYear} BioLink. Made with <Heart className="h-3 w-3 text-red-500 animate-pulse-slow" /> All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a> • <a href="#" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
