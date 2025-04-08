
import { ArrowRight, Award, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

/**
 * About Page Component
 * 
 * Displays personal information, bio, experience, education, and interests
 * Designed with a timeline layout for career history
 */
const About = () => {
  return (
    <div className="container py-10 space-y-12">
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-full md:w-1/3 flex justify-center">
          <Avatar className="h-48 w-48 shadow-xl">
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
          <div>
            <Badge variant="outline" className="mb-2">About Me</Badge>
            <h1 className="text-3xl md:text-4xl font-bold">John Doe</h1>
            <p className="text-xl text-muted-foreground">Frontend Developer & UI/UX Designer</p>
          </div>
          
          <p className="text-muted-foreground">
            Hello! I'm a passionate developer with over 5 years of experience creating beautiful, 
            user-friendly websites and applications. I specialize in frontend development using 
            modern technologies like React, TypeScript, and Tailwind CSS.
          </p>
          
          <p className="text-muted-foreground">
            When I'm not coding, you can find me exploring nature trails, reading science fiction, 
            or experimenting with new cooking recipes. I believe in continuous learning and staying 
            up-to-date with the latest web development trends.
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Frontend</Badge>
            <Badge>UI/UX</Badge>
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>Responsive Design</Badge>
          </div>
          
          <div className="pt-4">
            <Button asChild>
              <Link to="/contact">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-2">Career</Badge>
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <p className="text-muted-foreground mt-2">My professional journey</p>
        </div>
        
        <div className="space-y-6">
          {/* Timeline items */}
          <TimelineItem 
            icon={<Briefcase className="h-5 w-5" />}
            date="2021 - Present"
            title="Senior Frontend Developer"
            company="TechCorp Inc."
            description="Lead frontend development for multiple client projects, implemented modern React architecture, and mentored junior developers."
          />
          
          <TimelineItem 
            icon={<Briefcase className="h-5 w-5" />}
            date="2018 - 2021"
            title="Frontend Developer"
            company="WebSolutions Ltd."
            description="Developed responsive web applications, collaborated with UX designers, and implemented client feedback."
          />
          
          <TimelineItem 
            icon={<Briefcase className="h-5 w-5" />}
            date="2016 - 2018"
            title="Junior Web Developer"
            company="Digital Agency"
            description="Created website components, fixed UI bugs, and assisted in development of client websites."
          />
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-2">Education</Badge>
          <h2 className="text-3xl font-bold">Academic Background</h2>
          <p className="text-muted-foreground mt-2">My educational journey</p>
        </div>
        
        <div className="space-y-6">
          <TimelineItem 
            icon={<GraduationCap className="h-5 w-5" />}
            date="2012 - 2016"
            title="Bachelor of Science in Computer Science"
            company="University of Technology"
            description="Focused on web development, UI/UX design, and software engineering principles."
          />
          
          <TimelineItem 
            icon={<Award className="h-5 w-5" />}
            date="2021"
            title="Certified UX Designer"
            company="Design Academy"
            description="Completed intensive UX design certification with focus on user research and interface design."
          />
        </div>
      </section>
      
      {/* Interests Section */}
      <section className="py-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-2">Personal</Badge>
          <h2 className="text-3xl font-bold">Interests & Hobbies</h2>
          <p className="text-muted-foreground mt-2">What I enjoy outside of work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Photography</CardTitle>
              <CardDescription>Capturing moments in nature</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I enjoy landscape and street photography, especially during my travels.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Reading</CardTitle>
              <CardDescription>Science fiction and technology</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I love exploring new worlds through science fiction novels and staying updated with tech books.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Cooking</CardTitle>
              <CardDescription>Experimenting with flavors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Trying new recipes and cooking techniques is my way to relax after a day of coding.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

// Timeline component for experience and education
const TimelineItem = ({ 
  icon, 
  date, 
  title, 
  company, 
  description 
}: { 
  icon: React.ReactNode; 
  date: string; 
  title: string; 
  company: string; 
  description: string; 
}) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="flex items-center mt-1 sm:mt-0">
            <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
        </div>
        <p className="text-base font-medium">{company}</p>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default About;
