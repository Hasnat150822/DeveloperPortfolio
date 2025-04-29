import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Frontend Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
              I build exceptional digital experiences with modern JavaScript and React.js
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                asChild
                className="transition-transform hover:-translate-y-1 bg-primary hover:bg-primary/90"
              >
                <a href="#contact">Let's Talk</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="transition-transform hover:-translate-y-1 hover:text-primary hover:border-primary"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
              alt="Developer working on code"
              className="rounded-lg shadow-2xl"
              width="500"
              height="500"
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <a
            href="#about"
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute right-0 top-0 h-64 w-64 bg-primary/10 rounded-full opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute left-0 bottom-0 h-80 w-80 bg-green-500/10 rounded-full opacity-20 -ml-32 -mb-32"></div>
    </section>
  );
};

export default HeroSection;
