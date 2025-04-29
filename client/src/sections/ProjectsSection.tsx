import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Projects data
const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for online stores with real-time analytics and inventory management.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React", "Redux", "Chart.js"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "A mobile-first fitness application that helps users track workouts, nutrition, and progress over time.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React Native", "Firebase", "D3.js"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Modern Blog Platform",
    description: "A full-featured blog platform with a rich text editor, SEO optimization, and responsive design.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      className="group bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * project.id }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
            <p className="text-gray-200 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs py-1 px-2 bg-primary/80 text-white rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm dark:text-gray-300">{project.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 flex items-center text-sm"
            >
              <Github className="h-4 w-4 mr-1" /> Code
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 flex items-center text-sm"
            >
              <ExternalLink className="h-4 w-4 mr-1" /> Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-3">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Check out some of my recent work
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
