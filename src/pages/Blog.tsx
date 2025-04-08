
import { useState } from "react";
import { Calendar, Clock, Search, ArrowRight, BookOpen, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

/**
 * BlogPost interface for type safety
 */
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  slug: string;
}

/**
 * Blog Page Component
 * 
 * Displays blog posts with search and filtering capabilities
 * Includes post metadata like date, read time, and categories
 */
const Blog = () => {
  // Mock blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Mastering CSS Grid Layout in 10 Minutes",
      excerpt: "Learn the fundamentals of CSS Grid Layout and how to create complex layouts with ease.",
      date: "Apr 15, 2023",
      readTime: "10 min read",
      category: "css",
      tags: ["CSS", "Web Development", "Layout", "Tutorial"],
      slug: "mastering-css-grid-layout",
    },
    {
      id: 2,
      title: "Understanding React Hooks: A Practical Guide",
      excerpt: "Dive deep into React Hooks and learn how to use them effectively in your projects.",
      date: "Mar 22, 2023",
      readTime: "15 min read",
      category: "react",
      tags: ["React", "JavaScript", "Web Development", "Hooks"],
      slug: "understanding-react-hooks",
    },
    {
      id: 3,
      title: "Optimizing Web Performance: Best Practices",
      excerpt: "Learn how to optimize your website for better performance and user experience.",
      date: "Feb 10, 2023",
      readTime: "12 min read",
      category: "performance",
      tags: ["Performance", "Web Development", "Optimization", "UX"],
      slug: "optimizing-web-performance",
    },
    {
      id: 4,
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt: "A beginner-friendly guide to TypeScript and how it improves JavaScript development.",
      date: "Jan 05, 2023",
      readTime: "8 min read",
      category: "typescript",
      tags: ["TypeScript", "JavaScript", "Web Development", "Programming"],
      slug: "introduction-to-typescript",
    },
    {
      id: 5,
      title: "Creating Accessible Web Forms: A Comprehensive Guide",
      excerpt: "Learn how to design and implement accessible web forms that everyone can use.",
      date: "Dec 12, 2022",
      readTime: "14 min read",
      category: "accessibility",
      tags: ["Accessibility", "Web Development", "HTML", "Forms"],
      slug: "accessible-web-forms",
    },
    {
      id: 6,
      title: "Getting Started with Tailwind CSS: From Zero to Hero",
      excerpt: "A complete guide to setting up and mastering Tailwind CSS for rapid UI development.",
      date: "Nov 28, 2022",
      readTime: "11 min read",
      category: "css",
      tags: ["CSS", "Tailwind", "Web Development", "UI"],
      slug: "getting-started-with-tailwind",
    },
  ];

  // Get unique categories
  const categories = ["all", ...new Set(blogPosts.map(post => post.category))];

  // States for filtering and searching
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and search blog posts
  const filteredPosts = blogPosts
    .filter(post => 
      activeCategory === "all" || post.category === activeCategory
    )
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="container py-10 space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <Badge variant="outline">Blog</Badge>
        <h1 className="text-4xl font-bold">My Articles</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on web development, design, and technology.
        </p>
      </section>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full sm:w-auto">
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
        </Tabs>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="card-hover">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="outline" className="mb-2 capitalize">{post.category}</Badge>
                  <CardTitle className="mb-2">{post.title}</CardTitle>
                </div>
              </div>
              <CardDescription className="flex items-center gap-4">
                <span className="flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  {post.readTime}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 3 && (
                  <Badge variant="secondary">+{post.tags.length - 3}</Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Author" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-sm">John Doe</span>
              </div>
              <Button variant="ghost" size="sm" asChild className="flex items-center gap-1">
                <Link to={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold">No articles found</h2>
          <p className="text-muted-foreground mt-2">
            No articles match your current search criteria. Try adjusting your filters.
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="bg-primary/5 rounded-lg p-6 md:p-8 mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Subscribe to my newsletter</h2>
        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
          Get the latest articles, tutorials, and updates delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="sm:flex-1" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
