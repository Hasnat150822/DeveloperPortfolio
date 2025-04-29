import { motion } from "framer-motion";
import { Code, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

// Frontend skills data
const frontendSkills = [
  { name: "React.js", percentage: 95 },
  { name: "JavaScript (ES6+)", percentage: 90 },
  { name: "HTML5 & CSS3", percentage: 95 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "TypeScript", percentage: 85 }
];

// Backend skills data
const backendSkills = [
  { name: "Node.js", percentage: 85 },
  { name: "Express.js", percentage: 80 },
  { name: "MongoDB", percentage: 75 },
  { name: "Git & GitHub", percentage: 90 },
  { name: "REST API Design", percentage: 85 }
];

// Other technologies
const otherTechnologies = [
  "Redux", "Next.js", "GraphQL", "Webpack", "Jest", 
  "Cypress", "Storybook", "Firebase", "AWS", "Docker"
];

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className={cn(
            "h-2.5 rounded-full",
            name.includes("Node") || name.includes("Express") || name.includes("MongoDB") || name.includes("Git") || name.includes("REST")
              ? "bg-green-500"
              : "bg-primary"
          )}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16" delay={0.1}>
          <h2 className="text-3xl font-bold mb-3">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Technologies and tools I work with on a regular basis
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Frontend Skills */}
          <ScrollReveal className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-900" delay={0.2} direction="left">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Code className="mr-2 text-primary" size={24} />
              Frontend Development
            </h3>
            
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </ScrollReveal>
          
          {/* Backend Skills */}
          <ScrollReveal className="bg-white rounded-lg shadow-md p-8 dark:bg-gray-900" delay={0.3} direction="right">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Server className="mr-2 text-green-500" size={24} />
              Backend & Tools
            </h3>
            
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </ScrollReveal>
        </div>
        
        {/* Other Skills */}
        <ScrollReveal delay={0.4} direction="up">
          <h3 className="text-xl font-bold mb-6 text-center">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 text-sm font-medium dark:bg-gray-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
