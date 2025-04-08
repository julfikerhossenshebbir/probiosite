
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowLeft, BookOpen, Tag, Share2, ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * BlogPost interface for type safety
 */
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  slug: string;
}

/**
 * Blog Post Page Component
 * 
 * Displays a single blog post with detailed content
 * Includes metadata, content sections, and navigation
 */
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Mock blog posts data - in a real app this would come from an API
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Mastering CSS Grid Layout in 10 Minutes",
      excerpt: "Learn the fundamentals of CSS Grid Layout and how to create complex layouts with ease.",
      content: `
# Mastering CSS Grid Layout in 10 Minutes

CSS Grid Layout is a powerful two-dimensional layout system designed for the browser. It allows you to organize content into rows and columns and has many features that make building complex layouts straightforward.

## Getting Started with Grid

To create a grid container, you need to set the display property to grid:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
\`\`\`

## Defining Columns and Rows

You can define the columns and rows of your grid using the grid-template-columns and grid-template-rows properties:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 200px auto;
  grid-gap: 20px;
}
\`\`\`

## Placing Items

Grid items can be placed specifically using the grid-column and grid-row properties:

\`\`\`css
.item {
  grid-column: 1 / 3; /* Start at column line 1 and end at column line 3 */
  grid-row: 1 / 2; /* Start at row line 1 and end at row line 2 */
}
\`\`\`

## Conclusion

CSS Grid is an incredibly powerful layout tool that, once mastered, will revolutionize the way you build layouts for the web. With just a few lines of CSS, you can create complex, responsive layouts that would have been very difficult to build with older techniques.
      `,
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
      content: `
# Understanding React Hooks: A Practical Guide

React Hooks were introduced in React 16.8 and have changed the way we write React components. They allow you to use state and other React features without writing a class.

## useState Hook

The useState hook lets you add React state to functional components:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The useEffect hook lets you perform side effects in function components:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Custom Hooks

You can also create your own Hooks to reuse stateful logic between different components:

\`\`\`jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return width;
}
\`\`\`

## Conclusion

React Hooks provide a more direct API to React concepts you already know: props, state, context, refs, and lifecycle. They also provide a powerful way to reuse stateful logic without changing your component hierarchy.
      `,
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
      content: `
# Optimizing Web Performance: Best Practices

Website performance is crucial for user experience and can significantly impact conversion rates, user engagement, and even SEO rankings. In this post, we'll explore some best practices for optimizing web performance.

## Minimize HTTP Requests

Each file your webpage needs to load (CSS, JavaScript, images, etc.) requires an HTTP request. Reducing these requests can significantly improve load times:

- Combine multiple CSS files into one
- Combine multiple JavaScript files into one
- Use CSS sprites for images
- Consider inline critical CSS

## Optimize Images

Images often account for most of the downloaded bytes on a webpage:

- Choose the right format (JPEG for photographs, PNG for graphics with fewer colors)
- Compress images
- Implement responsive images
- Consider lazy loading

## Leverage Browser Caching

Caching stores webpage resource files on a local computer when a user visits a website:

\`\`\`
# Example .htaccess code for leveraging browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access 1 year"
  ExpiresByType image/jpeg "access 1 year"
  ExpiresByType image/gif "access 1 year"
  ExpiresByType image/png "access 1 year"
  ExpiresByType text/css "access 1 month"
  ExpiresByType text/html "access 1 month"
  ExpiresByType application/pdf "access 1 month"
  ExpiresByType text/x-javascript "access 1 month"
  ExpiresDefault "access 1 month"
</IfModule>
\`\`\`

## Minify CSS, JavaScript, and HTML

Minification removes unnecessary characters from code without changing functionality:

- Remove white space, comments, and unnecessary semicolons
- Use shorter variable and function names
- Implement tree shaking in JavaScript

## Conclusion

Optimizing web performance is an ongoing process, not a one-time task. Regularly test your website's performance using tools like Google PageSpeed Insights, GTmetrix, or WebPageTest to identify areas for improvement. Remember, even small improvements can have a significant impact on user experience and conversion rates.
      `,
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
      content: `
# Introduction to TypeScript for JavaScript Developers

TypeScript is a superset of JavaScript that adds static typing to the language. It was developed by Microsoft to help developers build more robust, maintainable applications at scale.

## Why TypeScript?

JavaScript is dynamically typed, which means types are checked at runtime. This can lead to unexpected errors. TypeScript adds static typing, which means types are checked at compile time, catching errors before your code runs.

Benefits include:
- Better tooling and IDE support
- Easier refactoring
- Self-documenting code
- Improved team collaboration

## Basic Types

TypeScript supports several basic types:

\`\`\`typescript
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;

// String
let color: string = "blue";
let greeting: string = \`Hello, my name is \${name}\`;

// Array
let list: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

// Tuple
let x: [string, number] = ["hello", 10];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void
function warnUser(): void {
  console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}
\`\`\`

## Interfaces

Interfaces define the shape of objects:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Read-only property
}

function createUser(user: User): User {
  return user;
}

let newUser = createUser({
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
});
\`\`\`

## Conclusion

TypeScript offers a more robust development experience for JavaScript developers, especially for larger projects. While there is a learning curve, the benefits of using TypeScript often outweigh the costs, leading to more maintainable and less error-prone code.
      `,
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
      content: `
# Creating Accessible Web Forms: A Comprehensive Guide

Web forms are essential components of most websites, allowing users to input data, make selections, and submit information. However, forms can present significant barriers for users with disabilities if not designed with accessibility in mind.

## Semantic HTML

Using semantic HTML is the foundation of accessible forms:

\`\`\`html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
  </fieldset>
  
  <button type="submit">Submit</button>
</form>
\`\`\`

## Labels and Instructions

Every form control should have a properly associated label:

\`\`\`html
<!-- Good: Label is associated with the input -->
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<!-- Bad: No association between label and input -->
<span>Username:</span>
<input type="text" name="username">
\`\`\`

## Error Handling

Provide clear error messages and highlight fields with errors:

\`\`\`html
<div>
  <label for="password">Password:</label>
  <input 
    type="password" 
    id="password" 
    name="password" 
    aria-describedby="password-error" 
    aria-invalid="true"
  >
  <div id="password-error" class="error" role="alert">
    Password must be at least 8 characters long
  </div>
</div>
\`\`\`

## Keyboard Accessibility

Ensure all form controls can be accessed and operated using the keyboard alone:

- Test tabbing through the form
- Ensure a visible focus state
- Create logical tab order
- Make sure custom components (like dropdowns) work with keyboard

## Conclusion

Creating accessible forms is not just about compliance with standards; it's about ensuring that all users, regardless of their abilities, can effectively interact with your website. By following these guidelines, you can create forms that are usable by everyone, improving user experience and expanding your website's reach.
      `,
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
      content: `
# Getting Started with Tailwind CSS: From Zero to Hero

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. Unlike component-based frameworks like Bootstrap, Tailwind provides low-level utility classes that let you build completely custom designs.

## Installation

You can install Tailwind CSS using npm:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Then, configure your template paths in tailwind.config.js:

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

Finally, add the Tailwind directives to your CSS:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

## Basic Usage

Here's an example of a button styled with Tailwind:

\`\`\`html
<button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
  Click me
</button>
\`\`\`

## Responsive Design

Tailwind makes responsive design simple with responsive modifiers:

\`\`\`html
<div class="text-center sm:text-left md:text-right lg:text-justify">
  This text will be centered by default, left-aligned on small screens, right-aligned on medium screens, and justified on large screens.
</div>
\`\`\`

## Customization

You can customize colors, spacing, breakpoints, and more in your tailwind.config.js file:

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      primary: '#1a202c',
      secondary: '#2d3748',
      white: '#ffffff',
      // ...
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      // ...
    },
    // ...
  }
}
\`\`\`

## Conclusion

Tailwind CSS offers a new approach to styling your web applications. Instead of fighting the framework and overriding styles, you compose your designs right in your markup. This approach can significantly speed up your development process and make maintaining your styles much easier.
      `,
      date: "Nov 28, 2022",
      readTime: "11 min read",
      category: "css",
      tags: ["CSS", "Tailwind", "Web Development", "UI"],
      slug: "getting-started-with-tailwind",
    },
  ];

  // Find the post that matches the slug
  useEffect(() => {
    setLoading(true);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.slug === slug);
      
      if (foundPost) {
        setPost(foundPost);
        setLoading(false);
      } else {
        setError("Blog post not found");
        setLoading(false);
      }
    }, 600); // Simulating API delay
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
        duration: 3000,
      });
    }
  };

  if (loading) {
    return (
      <div className="container py-20 text-center">
        <BookOpen className="h-12 w-12 mx-auto animate-pulse text-muted-foreground" />
        <h2 className="text-2xl font-semibold mt-4">Loading article...</h2>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-destructive">Error</h2>
          <p className="text-muted-foreground mt-2">{error || "An error occurred while loading the blog post."}</p>
          <Button asChild className="mt-6">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Articles
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Convert markdown-like content to HTML (simplified version)
  const formatContent = (content: string) => {
    // Process code blocks first
    content = content.replace(/```([^`]+)```/g, '<pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>');
    
    // Process headers
    content = content.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
    content = content.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>');
    content = content.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-5 mb-2">$1</h3>');
    
    // Process paragraphs (any line that's not processed yet)
    content = content.replace(/^(?!<h|<pre|<ul|<ol|<li|<blockquote)(.+)$/gm, '<p class="my-4 text-muted-foreground">$1</p>');
    
    return content;
  };

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0 hover:pl-0">
            <Link to="/blog" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Articles
            </Link>
          </Button>
        </div>
        
        {/* Article Header */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4 capitalize">{post.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="https://github.com/shadcn.png" alt="Author" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Like
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Article Content */}
        <article className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
        </article>
        
        {/* Tags */}
        <div className="mt-10">
          <h3 className="font-medium mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Related Articles - simplified version for this example */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(relatedPost => 
                relatedPost.id !== post.id && 
                (relatedPost.category === post.category || 
                 relatedPost.tags.some(tag => post.tags.includes(tag)))
              )
              .slice(0, 2)
              .map(relatedPost => (
                <div key={relatedPost.id} className="border rounded-lg p-4 hover:bg-accent/10 transition-colors">
                  <Badge variant="outline" className="mb-2 capitalize">{relatedPost.category}</Badge>
                  <h3 className="font-semibold mb-2">{relatedPost.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                  <Button asChild variant="ghost" size="sm" className="pl-0">
                    <Link to={`/blog/${relatedPost.slug}`}>
                      Read Article <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
