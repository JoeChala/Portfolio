
import { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="p-6">
              <h3 className="text-xl font-medium mb-4">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Sending...</span>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-4" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:jchalakj20@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jchalakj20@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-4" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+918762053484" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8762053484
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Github className="h-5 w-5 text-primary mr-4" />
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/jchalakj20" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/jchalakj20
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-primary mr-4" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/joseph-j-chalakkal/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/joseph-j-chalakkal
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-6 mt-6 border-t border-border">
              <p className="text-muted-foreground">
                Currently based in Bengaluru, India. Open to remote opportunities and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
