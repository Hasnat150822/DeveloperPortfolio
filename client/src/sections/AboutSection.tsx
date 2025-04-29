import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16" delay={0.1}>
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Get to know more about me and my journey in web development
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.2} direction="left">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
              alt="John Doe portrait"
              className="rounded-lg shadow-xl max-w-full"
              width="500"
              height="600"
            />
          </ScrollReveal>
          
          <ScrollReveal delay={0.3} direction="right">
            <h3 className="text-2xl font-bold mb-4">Frontend Developer & UI/UX Enthusiast</h3>
            <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
              I'm a passionate web developer with over 5 years of experience specializing in creating responsive, user-friendly web applications. My journey in coding began during college, and I've been hooked ever since.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
              I love transforming complex problems into simple, beautiful and intuitive designs. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">hello@johndoe.dev</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">5+ Years</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Availability</h4>
                <p className="text-gray-600 dark:text-gray-300">Full-time / Freelance</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
