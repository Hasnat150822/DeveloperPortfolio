import { useState } from "react";
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, Dribbble, Codepen, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16" delay={0.1}>
          <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Have a project in mind or want to work together? Feel free to reach out!
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <ScrollReveal 
            className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-900"
            delay={0.2}
            direction="left"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3"
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3"
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3"
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="w-full px-4 py-3"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full px-6 py-4 flex items-center justify-center"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </ScrollReveal>
          
          {/* Contact Info */}
          <div>
            <ScrollReveal
              className="bg-white rounded-lg shadow-md p-8 mb-8 dark:bg-gray-900"
              delay={0.3}
              direction="right"
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium">Location</h4>
                    <p className="text-gray-600 mt-1 dark:text-gray-300">San Francisco, California</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium">Email</h4>
                    <p className="text-gray-600 mt-1 dark:text-gray-300">hello@johndoe.dev</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium">Phone</h4>
                    <p className="text-gray-600 mt-1 dark:text-gray-300">+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal
              className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-900"
              delay={0.4}
              direction="right"
            >
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-primary/10 transition-colors duration-300 dark:bg-gray-800"
                >
                  <Github className="h-5 w-5 text-gray-700 hover:text-primary dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-primary/10 transition-colors duration-300 dark:bg-gray-800"
                >
                  <Linkedin className="h-5 w-5 text-gray-700 hover:text-primary dark:text-gray-300" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="p-3 bg-gray-100 rounded-full hover:bg-primary/10 transition-colors duration-300 dark:bg-gray-800"
                >
                  <Twitter className="h-5 w-5 text-gray-700 hover:text-primary dark:text-gray-300" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-primary/10 transition-colors duration-300 dark:bg-gray-800"
                >
                  <Dribbble className="h-5 w-5 text-gray-700 hover:text-primary dark:text-gray-300" />
                </a>
                <a
                  href="https://codepen.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-primary/10 transition-colors duration-300 dark:bg-gray-800"
                >
                  <Codepen className="h-5 w-5 text-gray-700 hover:text-primary dark:text-gray-300" />
                </a>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-primary/10 transition-colors duration-300 dark:bg-gray-800"
                >
                  <FileText className="h-5 w-5 text-gray-700 hover:text-primary dark:text-gray-300" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;