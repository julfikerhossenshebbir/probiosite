
import { useState } from "react";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

/**
 * Project interface for type safety
 */
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string;
}

/**
 * Projects Page Component
 * 
 * Displays portfolio projects with filtering capabilities
 * Includes project details like technologies, links, and descriptions
 */
const Projects = () => {
  // Mock projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-featured online store built with React, Next.js, and Stripe integration for payments.",
      image: "gradient-bg-1",
      date: "January 2023",
      category: "web",
      tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      liveUrl: "https://project1.example.com",
      githubUrl: "https://github.com/yourusername/project1",
      slug: "ecommerce-website",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app with drag-and-drop functionality, user authentication, and real-time updates.",
      image: "gradient-bg-2",
      date: "October 2022",
      category: "web",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      liveUrl: "https://project2.example.com",
      githubUrl: "https://github.com/yourusername/project2",
      slug: "task-management-app",
    },
    {
      id: 3,
      title: "Portfolio Website Template",
      description: "A customizable portfolio template for developers and designers with dark mode support.",
      image: "gradient-bg-3",
      date: "July 2022",
      category: "design",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://project3.example.com",
      githubUrl: "https://github.com/yourusername/project3",
      slug: "portfolio-website-template",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application showing forecasts, maps, and historical data using weather APIs.",
      image: "gradient-bg-4",
      date: "April 2022",
      category: "app",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "https://project4.example.com",
      githubUrl: "https://github.com/yourusername/project4",
      slug: "weather-dashboard",
    },
    {
      id: 5,
      title: "Restaurant Booking System",
      description: "An online reservation system for restaurants with table management and customer notifications.",
      image: "gradient-bg-5",
      date: "January 2022",
      category: "app",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://project5.example.com",
      githubUrl: "https://github.com/yourusername/project5",
      slug: "restaurant-booking-system",
    },
    {
      id: 6,
      title: "Brand Identity Design",
      description: "Complete brand identity including logo, color palette, typography, and usage guidelines.",
      image: "gradient-bg-6",
      date: "November 2021",
      category: "design",
      tags: ["Branding", "Logo Design", "Typography", "Color Theory"],
      slug: "brand-identity-design",
    },
  ];

  // Get unique categories
  const categories = ["all", ...new Set(projects.map(project => project.category))];

  // State for filtering
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Get gradient background class based on project ID
  const getGradientClass = (id: number) => {
    const gradients = [
      "bg-gradient-to-br from-primary/20 to-purple-400/20",
      "bg-gradient-to-br from-blue-400/20 to-cyan-400/20",
      "bg-gradient-to-br from-green-400/20 to-teal-400/20",
      "bg-gradient-to-br from-yellow-400/20 to-amber-400/20",
      "bg-gradient-to-br from-red-400/20 to-pink-400/20",
      "bg-gradient-to-br from-indigo-400/20 to-violet-400/20",
    ];
    
    return gradients[(id - 1) % gradients.length];
  };

  return (
    <div className="container py-10 space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <Badge variant="outline">Portfolio</Badge>
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my latest work, from web applications and mobile apps to design projects
          and experiments.
        </p>
      </section>

      {/* Filter Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={activeCategory} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-hover">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {project.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Project Image/Preview */}
                  <Link to={`/projects/${project.slug}`}>
                    <div className={`h-40 rounded-md ${getGradientClass(project.id)} flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer`}>
                      <ExternalLink className="h-8 w-8 text-primary" />
                    </div>
                  </Link>
                  
                  {/* Project Description */}
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Button asChild className="flex-1">
                    <Link to={`/projects/${project.slug}`}>
                      View Details
                    </Link>
                  </Button>
                  
                  {project.githubUrl && (
                    <Button variant="outline" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <section className="text-center py-8 space-y-4">
        <h2 className="text-2xl font-semibold">Interested in working together?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg" className="mt-2">
          <a href="/contact">Get in Touch</a>
        </Button>
      </section>
    </div>
  );
};

export default Projects;
