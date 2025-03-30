import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaWordpress,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiFigma } from "react-icons/si";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { id: 2, name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { id: 3, name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { id: 4, name: "React", icon: FaReact, color: "#61DAFB" },
    { id: 5, name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { id: 6, name: "Java", icon: FaJava, color: "#007396" },
    { id: 7, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { id: 8, name: "SQL", icon: SiMysql, color: "#4479A1" },
    { id: 9, name: "GitHub", icon: FaGithub, color: "#181717" },
    { id: 10, name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { id: 11, name: "WordPress", icon: FaWordpress, color: "#21759B" },
    { id: 12, name: "Figma", icon: SiFigma, color: "#F24E1E" },
  ];

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg px-4">
            Here are the technologies and tools I work with on a daily basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="flex flex-col items-center skill-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full mb-3 md:mb-4 shadow-lg"
                style={{
                  backgroundColor: "white",
                  border: `2px solid ${skill.color}`,
                }}
                whileHover={{
                  backgroundColor: skill.color,
                  color: "white",
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              >
                <skill.icon className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
              </motion.div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;