
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, AlertCircle, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import SocialLinks from "@/components/SocialLinks";

/**
 * Contact Page Component
 * 
 * Features a contact form with Telegram bot integration
 * Includes contact information and social media links
 */
const Contact = () => {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  
  const { toast } = useToast();

  /**
   * Handles form submission and sends data to Telegram bot
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    
    // Basic form validation
    if (!name || !email || !message) {
      setFormError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }
    
    if (!email.includes('@')) {
      setFormError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simulating API call to Telegram bot
      // In a real implementation, replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock success
      setFormSuccess(true);
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setFormError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Resets the form to try again after success or error
   */
  const resetForm = () => {
    setFormSuccess(false);
    setFormError(null);
  };

  return (
    <div className="container py-10 space-y-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Fill out the form below or reach out through any of the provided contact methods.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Ways to reach me directly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email */}
            <div className="flex items-start space-x-3">
              <div className="icon-container">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  <a href="mailto:contact@example.com" className="hover:text-primary">
                    contact@example.com
                  </a>
                </p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start space-x-3">
              <div className="icon-container">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  <a href="tel:+1234567890" className="hover:text-primary">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start space-x-3">
              <div className="icon-container">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  San Francisco, California
                </p>
              </div>
            </div>
            
            {/* Telegram */}
            <div className="flex items-start space-x-3">
              <div className="icon-container">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Telegram</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    @yourusername
                  </a>
                </p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-4">
              <h3 className="font-medium mb-3">Connect with me</h3>
              <SocialLinks variant="grid" />
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {formError && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}
            
            {formSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="bg-primary/10 text-primary h-16 w-16 flex items-center justify-center rounded-full mx-auto">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-medium">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button onClick={resetForm} className="mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can I help you?"
                  />
                </div>
                
                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here..."
                    rows={6}
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Map or Additional Information Section (Optional) */}
      <Card className="overflow-hidden mt-8">
        <CardHeader>
          <CardTitle>Visit Me</CardTitle>
          <CardDescription>
            Located in beautiful San Francisco
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-64 bg-primary/5 flex items-center justify-center">
            <MapPin className="h-12 w-12 text-primary/50" />
            <p className="ml-4 text-lg text-muted-foreground">
              Map Placeholder (Replace with actual map integration)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
