import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import AllProjects from "./AllProjects.jsx";
import jobPhoto from "../assets/fullstack/jobportal.svg";
import hospital1 from "../assets/fullstack/hospital.webp";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredProjects = [
    {
          id: 1,
          title: "Job-Portal",
          category: "Full Stack",
          description:
           "A job portal with user authentication, job listings, resume uploads, application tracking, and employer dashboards. Built with React, Node.js, Express, and MongoDB, it offers advanced search, real-time notifications, and secure authentication for a smooth hiring process.",
          image: jobPhoto,
          technologies: ["React", "Node.js", "Express", "MongoDB", "Redux","tailwind"],
          githubLink: "https://github.com/Hemaghara/job-portal",
          liveLink: "https://job-portal-iqv6.onrender.com",
          featured: true,
        },
   {
         id: 2,
         title: "Hospital Management System",
         category: "Full Stack",
         description:
           "A hospital management system with user authentication, doctor appointments, and hospital information. Built with React, Node.js, Express, and MongoDB, it ensures secure logins, easy appointment booking, and a detailed hospital overview for a seamless healthcare experience.",
         image: hospital1,
         technologies: ["React", "Node.js", "Express", "MongoDB", "Redux","tailwind"],
         githubLink: "https://github.com/Hemaghara/mern-stack-hospital-managment",
         liveLink: "",
       },
    {
      id: 3,
      title: "Student Management System",
      category: "Java Project",
      description:
        "A Java-based desktop application for managing student records, courses, and grades with database integration.",
      image:
        "https://via.placeholder.com/600x400?text=Student+Management+System",
      technologies: ["Java", "JavaFX", "MySQL"],
      githubLink: "https://github.com/username/student-management",
      liveLink: "https://student-management.example.com",
      featured: true,
    },
  ];

  const toggleAllProjects = (e) => {
    if (e) e.preventDefault();
    setShowAllProjects(!showAllProjects);

    // Scroll to top when showing all projects
    if (!showAllProjects) {
      window.scrollTo({
        top: document.getElementById("projects").offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  if (!isLoaded) return null;

  return (
    <>
      <section id="projects" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              {showAllProjects ? "All Projects" : "Featured Projects"}
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="max-w-2xl mx-auto text-base md:text-lg px-4">
              {showAllProjects
                ? "Browse all my projects categorized by technology stack."
                : "Here are some of my featured projects. Click below to see all projects!"}
            </p>
          </motion.div>

          {!showAllProjects ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="h-40 sm:h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                        <h3 className="text-lg sm:text-xl font-bold">
                          {project.title}
                        </h3>
                        <span className="text-xs sm:text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded-full w-fit">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 bg-gray-800 hover:bg-gray-900 text-white py-1 px-2 sm:py-2 sm:px-4 rounded text-xs sm:text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub /> GitHub
                        </motion.a>
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 sm:py-2 sm:px-4 rounded text-xs sm:text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt /> View
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <motion.button
                  onClick={toggleAllProjects}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show All Projects <FaArrowRight />
                </motion.button>
              </div>
            </>
          ) : (
            <AllProjects onBack={toggleAllProjects} />
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
