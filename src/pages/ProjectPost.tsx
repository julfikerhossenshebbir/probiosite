
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * Project interface for type safety
 */
interface Project {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string;
}

/**
 * Project Post Page Component
 * 
 * Displays detailed information about a single project
 * Includes project overview, technologies, links, and content sections
 */
const ProjectPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Mock projects data - in a real app this would come from an API
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-featured online store built with React, Next.js, and Stripe integration for payments.",
      content: `
# E-commerce Website

This project is a full-featured e-commerce platform that allows users to browse products, add items to cart, and complete purchases using Stripe's payment processing.

## Key Features

### Product Catalog
- Responsive product grid with filtering and search
- Product detail pages with image galleries
- Related products recommendations

### Shopping Cart
- Add/remove items from cart
- Adjust quantities
- Persistent shopping cart using local storage

### User Authentication
- Sign up and login functionality
- Password reset
- Social login options

### Checkout Process
- Multi-step checkout form
- Address validation
- Secure payment processing with Stripe
- Order confirmation and email receipts

### Admin Dashboard
- Product management (add, edit, delete)
- Order management and fulfillment
- Customer management
- Analytics and reporting

## Technical Details

### Frontend
- React for UI components
- Next.js for server-side rendering and routing
- Context API and hooks for state management
- Styled Components and Tailwind CSS for styling

### Backend
- RESTful API built with Node.js and Express
- MongoDB for database
- JWT for authentication
- Stripe API for payment processing

### Deployment
- Vercel for frontend hosting
- MongoDB Atlas for database hosting
- CI/CD pipeline with GitHub Actions

## Challenges and Solutions

One of the main challenges was implementing a seamless checkout experience while maintaining security. We solved this by:

1. Using Stripe Elements for secure credit card input
2. Implementing proper error handling for payment failures
3. Creating a multi-step form with validation at each step
4. Adding order confirmation mechanisms

## Results

The site has achieved a 25% increase in conversion rate compared to the client's previous solution, with a 40% improvement in page load speed as measured by Lighthouse.

## Future Improvements

- Adding a wishlist feature
- Implementing a review and rating system
- Enhancing the recommendation engine with machine learning
- Adding multi-language support
`,
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
      content: `
# Task Management Application

This project is a collaborative task management application designed to help teams organize and track their work efficiently.

## Key Features

### Task Organization
- Kanban board with customizable columns
- Drag-and-drop functionality for easy task management
- Task filtering and sorting options
- Due dates and priority levels

### Collaboration
- Team workspaces
- Task assignments
- Comments and discussions
- File attachments

### User Experience
- Responsive design for mobile and desktop
- Dark/light mode toggle
- Keyboard shortcuts
- Offline support

### Notifications
- Email notifications for task assignments and updates
- In-app notification center
- Daily digest of activities

## Technical Implementation

### Frontend
- React for component-based UI
- Redux for state management
- React DnD for drag-and-drop functionality
- Material UI for component library

### Backend
- Firebase for authentication and real-time database
- Cloud Functions for background processing
- Cloud Storage for file uploads

### Testing and Quality
- Jest and React Testing Library for unit tests
- Cypress for end-to-end testing
- ESLint and Prettier for code quality

## Development Process

We followed an agile development process with two-week sprints. The project was divided into several phases:

1. **Research and Planning**: User research, competitor analysis, and feature prioritization
2. **Design**: Wireframing, UI design, and user flow mapping
3. **Development**: Iterative implementation of features
4. **Testing**: Comprehensive testing with real users
5. **Deployment**: Continuous deployment with feature flags

## Challenges and Solutions

A significant challenge was implementing real-time updates without degrading performance. We addressed this by:

- Using Firebase's efficient real-time database
- Implementing optimistic UI updates
- Adding pagination for large data sets
- Careful optimization of React components to prevent unnecessary re-renders

## Results

The application has been adopted by over 50 teams, with users reporting a 30% increase in productivity and task completion rates.

## Future Enhancements

- Integration with calendar applications
- Time tracking functionality
- Advanced analytics dashboard
- AI-powered task recommendations
`,
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
      content: `
# Portfolio Website Template

This project is a clean, modern portfolio template designed specifically for developers and designers to showcase their work effectively.

## Features

### Design
- Minimalist and professional design aesthetic
- Smooth animations and transitions
- Dark and light mode support
- Fully responsive layout for all devices

### Customization
- Easy color scheme customization
- Configurable sections
- Markdown support for project descriptions
- Custom icons and typography options

### Sections
- Hero section with call-to-action
- About section with skills and experience
- Project showcase with filtering options
- Testimonials carousel
- Contact form with validation

### Technical Features
- Fast page load times
- SEO optimized structure
- Accessibility compliance
- Analytics integration

## Implementation Details

### Technologies Used
- HTML5, CSS3, and JavaScript
- CSS Grid and Flexbox for layouts
- CSS variables for theming
- Vanilla JavaScript for interactions

### Performance Optimizations
- Lazy loading for images
- Minimal dependencies
- Optimized asset loading
- Browser caching

## Development Process

The development process focused on creating a template that is both beautiful and functional, while being easy to customize:

1. Research: Analyzed top portfolios to identify effective patterns
2. Wireframing: Created low-fidelity wireframes for layout planning
3. Visual Design: Developed the visual language and design system
4. Implementation: Built the template with clean, well-documented code
5. Testing: Tested across devices and browsers for compatibility
6. Documentation: Created comprehensive documentation for customization

## Use Cases

This template is ideal for:
- Junior developers looking to establish their online presence
- Designers who want to showcase their work elegantly
- Freelancers seeking to attract new clients
- Students creating portfolios for job applications

## Future Enhancements

- Additional portfolio layout options
- Blog section integration
- Internationalization support
- Advanced animation options
- CMS integration for easier content management
`,
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
      content: `
# Weather Dashboard Application

This project is a comprehensive weather dashboard that provides users with current conditions, forecasts, and historical weather data for locations worldwide.

## Key Features

### Weather Data
- Current weather conditions with detailed metrics
- 7-day forecast with hourly breakdowns
- Historical weather patterns and comparisons
- Severe weather alerts and notifications

### Visualization
- Interactive weather maps with various layers (precipitation, temperature, wind)
- Charts and graphs for temperature trends
- Sunrise/sunset and moon phase visualizations
- Air quality and pollution data representation

### Location Management
- Search for locations worldwide
- Save favorite locations
- Automatic location detection
- Location comparison feature

### User Experience
- Clean, intuitive interface
- Responsive design for all devices
- Customizable dashboard layouts
- Accessibility features for all users

## Technical Implementation

### Frontend
- React for component-based architecture
- Chart.js for data visualization
- Leaflet for interactive maps
- Geolocation API for user location

### APIs and Data
- OpenWeather API for forecast data
- MapBox for map tiles and geocoding
- AirVisual API for air quality information
- NOAA APIs for historical data

### Performance
- Data caching for reduced API calls
- Progressive loading of components
- Service worker for offline capability
- Optimized assets for fast loading

## Development Challenges

A significant challenge was managing the rate limits and costs associated with weather APIs. We solved this by:

1. Implementing efficient caching strategies
2. Batching API requests where possible
3. Using tiered data loading (essential data first, details on demand)
4. Carefully planning the user experience to minimize unnecessary data fetches

## User Impact

The dashboard has been designed with a focus on usability, making complex weather data accessible and actionable for everyday users. Key benefits include:

- Quick access to essential weather information
- Visual patterns that help users understand weather trends
- Customization options to focus on weather aspects that matter most
- Reliable alerts for weather events that may impact daily activities

## Future Enhancements

- Machine learning for personalized weather insights
- Integration with smart home systems
- Expanded historical data analysis tools
- Additional language support and localization
- Weather impact assessments for various activities
`,
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
      content: `
# Restaurant Booking System

This project is a comprehensive restaurant reservation and table management system designed to streamline the booking process for both customers and restaurant staff.

## Key Features

### Customer-Facing Features
- Intuitive reservation booking interface
- Real-time availability checking
- Automated email and SMS confirmations
- Modification and cancellation options
- Special requests handling

### Restaurant Management Features
- Visual table layout management
- Staff scheduling integration
- Reservation dashboard with filtering options
- Customer database with preference tracking
- Analytics and reporting tools

### Technical Features
- Mobile-responsive design
- Offline mode for in-restaurant use
- Integration with POS systems
- Calendar syncing (Google, Apple)
- Multi-language support

## System Architecture

### Frontend
- React for the user interface
- Responsive design with CSS Grid and Flexbox
- Progressive Web App capabilities
- Optimized for both mobile and desktop

### Backend
- Node.js and Express for API endpoints
- MongoDB for flexible data storage
- JWT for secure authentication
- WebSockets for real-time updates

### Integrations
- Twilio for SMS notifications
- Sendgrid for email communications
- Stripe for deposit payments
- Google Maps for location services

## Development Process

The system was developed using an agile methodology with a focus on user feedback:

1. Initial research and user interviews with restaurant owners
2. Prototype development and usability testing
3. MVP implementation with core booking functionality
4. Iterative enhancements based on real-world usage
5. Performance optimization and scaling improvements

## Challenges and Solutions

A major challenge was creating an intuitive table management system that could handle complex restaurant layouts and reservation rules. We addressed this by:

- Developing a drag-and-drop interface for table management
- Creating a rule-based engine for reservation constraints
- Implementing visual indicators for table status and availability
- Building flexible configuration options for different restaurant needs

## Impact and Results

Restaurants using the system have reported:
- 35% reduction in no-shows
- 25% increase in online reservations
- 40% less staff time spent managing bookings
- Improved table turnover rates

## Future Development

- AI-powered demand forecasting
- Customer loyalty program integration
- Expanded analytics for business intelligence
- Mobile app versions for iOS and Android
- Integration with food delivery platforms
`,
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
      content: `
# Brand Identity Design Project

This project involved creating a comprehensive brand identity for a tech startup, including visual elements, guidelines, and application examples.

## Project Scope

### Visual Identity Elements
- Logo design (primary, secondary, and icon versions)
- Color palette with primary, secondary, and accent colors
- Typography system with primary and secondary typefaces
- Supporting graphic elements and patterns
- Iconography style guide

### Brand Guidelines
- Logo usage rules and restrictions
- Color application principles
- Typography hierarchy and application
- Photography style and art direction
- Voice and tone guidelines for communication

### Application Examples
- Business stationery (business cards, letterhead, envelopes)
- Digital assets (website, social media, email templates)
- Marketing materials (brochures, presentations, advertisements)
- Environmental applications (signage, office space)

## Design Process

The brand identity was developed through a structured design thinking approach:

1. **Discovery**: Stakeholder interviews, market research, competitor analysis
2. **Exploration**: Mood boarding, concept sketching, design exploration
3. **Refinement**: Design development, feedback integration, system building
4. **Implementation**: Asset creation, guidelines documentation, template development
5. **Support**: Training sessions, application guidance, quality control

## Design Decisions

### Logo Concept
The logo was designed to communicate innovation and reliability, with a geometric mark that suggests both technology and human connection. The wordmark uses a custom-modified typeface for uniqueness while maintaining readability.

### Color Strategy
The color palette centers around a vibrant blue as the primary brand color, signifying trust and innovation. Secondary colors include complementary tones that provide flexibility while maintaining a cohesive look across applications.

### Typography
A modern, humanist sans-serif was selected as the primary typeface for its clarity and contemporary feel. A complementary serif font provides contrast for longer text while adding sophistication to the overall identity.

## Results and Impact

The brand identity system has successfully:
- Created a distinctive and memorable market presence
- Provided consistency across all brand touchpoints
- Allowed for flexible application while maintaining brand integrity
- Received positive feedback from stakeholders and target audiences
- Supported the client's business growth and market positioning

## Client Testimonial

"The brand identity perfectly captures our company's vision and values. The comprehensive guidelines have made it easy for us to maintain consistency as we grow, and the flexible system adapts well to new applications we hadn't even anticipated."

## Lessons Learned

- Early stakeholder alignment on brand positioning is crucial
- Creating a flexible system is more valuable than rigid rules
- Real-world application testing reveals practical considerations
- Digital-first design requires different considerations than traditional print-focused identities
`,
      image: "gradient-bg-6",
      date: "November 2021",
      category: "design",
      tags: ["Branding", "Logo Design", "Typography", "Color Theory"],
      slug: "brand-identity-design",
    },
  ];

  // Find the project that matches the slug
  useEffect(() => {
    setLoading(true);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      const foundProject = projects.find(project => project.slug === slug);
      
      if (foundProject) {
        setProject(foundProject);
        setLoading(false);
      } else {
        setError("Project not found");
        setLoading(false);
      }
    }, 600); // Simulating API delay
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project?.title,
        text: project?.description,
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

  if (loading) {
    return (
      <div className="container py-20 text-center">
        <div className="h-24 w-24 mx-auto rounded-md animate-pulse bg-muted"></div>
        <h2 className="text-2xl font-semibold mt-4">Loading project...</h2>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="container py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-destructive">Error</h2>
          <p className="text-muted-foreground mt-2">{error || "An error occurred while loading the project."}</p>
          <Button asChild className="mt-6">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Convert markdown-like content to HTML (simplified version)
  const formatContent = (content: string) => {
    // Process code blocks
    content = content.replace(/```([^`]+)```/g, '<pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code>$1</code></pre>');
    
    // Process headers
    content = content.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
    content = content.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>');
    content = content.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-5 mb-2">$1</h3>');
    
    // Process lists
    content = content.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc my-1 text-muted-foreground">$1</li>');
    
    // Wrap lists
    let inList = false;
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('<li') && !inList) {
        lines[i] = '<ul class="my-4">' + lines[i];
        inList = true;
      } else if (!lines[i].startsWith('<li') && inList) {
        lines[i-1] = lines[i-1] + '</ul>';
        inList = false;
      }
    }
    if (inList) {
      lines[lines.length-1] += '</ul>';
    }
    content = lines.join('\n');
    
    // Process paragraphs (any line that's not processed yet)
    content = content.replace(/^(?!<h|<pre|<ul|<ol|<li|<blockquote)(.+)$/gm, '<p class="my-4 text-muted-foreground">$1</p>');
    
    return content;
  };

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="pl-0 hover:pl-0">
            <Link to="/projects" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
          </Button>
        </div>
        
        {/* Project Header */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4 capitalize">{project.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              <span>{project.date}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
        
        {/* Project Preview */}
        <div className={`h-64 md:h-80 rounded-lg ${getGradientClass(project.id)} flex items-center justify-center mb-8`}>
          <ExternalLink className="h-16 w-16 text-primary opacity-60" />
        </div>
        
        {/* Links and Tags */}
        <div className="flex flex-wrap justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.liveUrl && (
              <Button asChild className="flex-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                </a>
              </Button>
            )}
            
            {project.githubUrl && (
              <Button variant="outline" asChild className="flex-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" /> View Code
                </a>
              </Button>
            )}
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Project Content */}
        <article className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: formatContent(project.content) }} />
        </article>
        
        <Separator className="my-8" />
        
        {/* Related Projects */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(relatedProject => 
                relatedProject.id !== project.id && 
                (relatedProject.category === project.category || 
                 relatedProject.tags.some(tag => project.tags.includes(tag)))
              )
              .slice(0, 2)
              .map(relatedProject => (
                <div key={relatedProject.id} className="border rounded-lg p-4 hover:bg-accent/10 transition-colors">
                  <Badge variant="outline" className="mb-2 capitalize">{relatedProject.category}</Badge>
                  <h3 className="font-semibold mb-2">{relatedProject.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{relatedProject.description}</p>
                  <Button asChild variant="ghost" size="sm" className="pl-0">
                    <Link to={`/projects/${relatedProject.slug}`}>
                      View Project Details
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

export default ProjectPost;
