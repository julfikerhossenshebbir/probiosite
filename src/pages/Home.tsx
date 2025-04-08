
import { Link } from "react-router-dom";
import { ArrowDownCircle, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SocialLinks from "@/components/SocialLinks";
import { Badge } from "@/components/ui/badge";

/**
 * Home Page Component
 * 
 * Landing page with hero section, featured links, and introduction
 * Includes animated elements and calls to action
 */
const Home = () => {
  return (
    <div className="container py-10 space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 py-10 md:py-16">
        <Avatar className="h-24 w-24 md:h-32 md:w-32 shadow-xl animate-float">
          <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        
        <div className="space-y-2">
          <Badge variant="outline" className="animate-fade-in">Welcome to my corner of the web</Badge>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">John Doe</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Frontend Developer & UI/UX Designer
          </h2>
        </div>
        
        <p className="max-w-xl text-muted-foreground">
          I create beautiful, responsive websites and applications with a focus on user experience and accessibility.
        </p>
        
        <SocialLinks className="animate-fade-in" />
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
        
        <ArrowDownCircle className="h-8 w-8 text-muted-foreground animate-float mt-8" />
      </section>

      {/* Featured Section */}
      <section className="py-8">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-2">Explore</Badge>
          <h2 className="text-3xl font-bold">Featured Links</h2>
          <p className="text-muted-foreground mt-2">Quick access to my best work and content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Latest Project</CardTitle>
              <CardDescription>E-commerce website with React & NextJS</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 rounded-md bg-gradient-to-br from-primary/20 to-purple-400/20 flex items-center justify-center">
                <ExternalLink className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/projects">View Project</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Blog Card */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Recent Article</CardTitle>
              <CardDescription>Mastering CSS Grid Layout in 10 Minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 rounded-md bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                <ExternalLink className="h-10 w-10 text-blue-500" />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="outline">
                <Link to="/blog">Read Article</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Contact Card */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>Let's discuss your next project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 rounded-md bg-gradient-to-br from-green-400/20 to-teal-400/20 flex items-center justify-center">
                <ExternalLink className="h-10 w-10 text-green-500" />
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="secondary">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-2">Expertise</Badge>
          <h2 className="text-3xl font-bold">My Skills</h2>
          <p className="text-muted-foreground mt-2">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["React", "TypeScript", "Tailwind CSS", "NextJS", "UI/UX Design", "Responsive Design", 
            "JavaScript", "HTML/CSS", "Git"].map((skill) => (
            <div key={skill} className="flex items-center p-3 border rounded-lg card-hover">
              <CheckCircle className="h-5 w-5 text-primary mr-2" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
