
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  Facebook, 
  Mail, 
  Globe, 
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// Type for social link items
interface SocialLinkItem {
  name: string;
  url: string;
  icon: React.ReactNode;
}

/**
 * SocialLinks Component
 * 
 * Displays social media links with icons and tooltips
 * Supports various layouts (horizontal, vertical, grid)
 */
export default function SocialLinks({ 
  variant = "horizontal",
  className
}: { 
  variant?: "horizontal" | "vertical" | "grid";
  className?: string;
}) {
  // Social links data
  const socialLinks: SocialLinkItem[] = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/c/yourusername",
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      name: "Website",
      url: "https://yourwebsite.com",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      name: "Telegram",
      url: "https://t.me/yourusername",
      icon: <MessageCircle className="h-5 w-5" />,
    }
  ];

  // Layout classes based on variant
  const containerClasses = cn(
    "flex gap-2",
    {
      "flex-row flex-wrap justify-center": variant === "horizontal",
      "flex-col items-start": variant === "vertical",
      "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5": variant === "grid",
    },
    className
  );

  return (
    <TooltipProvider>
      <div className={containerClasses}>
        {socialLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="card-hover"
                asChild
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
