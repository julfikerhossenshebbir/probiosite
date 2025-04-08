
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Home, User, Briefcase, BookOpen, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Navbar Component
 * 
 * Responsive navigation bar that adapts to mobile, tablet, and desktop views
 * Includes links to all main pages and theme toggle
 */
export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", name: "Home", icon: <Home className="h-4 w-4 mr-2" /> },
    { path: "/about", name: "About", icon: <User className="h-4 w-4 mr-2" /> },
    { path: "/projects", name: "Projects", icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { path: "/blog", name: "Blog", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { path: "/contact", name: "Contact", icon: <Send className="h-4 w-4 mr-2" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo / Brand */}
        <Link 
          to="/" 
          className="text-xl font-bold gradient-text transition-all hover:scale-105"
        >
          BioLink
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.path}
              variant={location.pathname === link.path ? "default" : "ghost"}
              asChild
              className="flex items-center gap-1"
            >
              <Link to={link.path}>
                {link.icon}
                {link.name}
              </Link>
            </Button>
          ))}
          <ThemeToggle className="ml-2" />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "container md:hidden",
          isOpen ? "block animate-fade-in" : "hidden"
        )}
      >
        <div className="flex flex-col gap-2 pb-4">
          {navLinks.map((link) => (
            <Button
              key={link.path}
              variant={location.pathname === link.path ? "default" : "ghost"}
              asChild
              className="justify-start"
            >
              <Link to={link.path}>
                {link.icon}
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
