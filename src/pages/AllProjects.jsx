import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import ecommercePhoto from "../assets/frontend/ecommerce.jpg";
import moivePhoto from "../assets/frontend/moive.avif";
import dashboardPhoto from "../assets/frontend/dashboard.jpg";
import bankPhoto from "../assets/java/bank.png";
import hospitalPhoto from "../assets/java/hospital.webp";
import studentPhoto from "../assets/java/student.avif";
import jobPhoto from "../assets/fullstack/jobportal.svg";
import hospital1 from "../assets/fullstack/hospital.webp";

const AllProjects = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const allProjects = [
    // Full Stack Projects
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
      title: "Real Estate Listing Platform",
      category: "Full Stack",
      description:
        "A property listing platform with search, filter, and map integration for real estate listings.",
      image: "https://via.placeholder.com/600x400?text=Real+Estate+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      githubLink: "https://github.com/username/real-estate-platform",
      liveLink: "https://real-estate.example.com",
    },

    // Frontend Projects
    {
      id: 4,
      title: "Ecommerce-website",
      category: "Frontend",
      description:
        "A responsive e-commerce website featuring Home, Shop, Blog, Contact, and Cart pages. It offers a user-friendly interface, product listings, and smooth navigation for an enhanced shopping experience",
      image:ecommercePhoto,
      technologies: ["Html", "Css", "Javascript"],
      githubLink: "https://github.com/Hemaghara/Ecommerce-website",
      liveLink: "https://ecommerce-website-sandy-six.vercel.app/",
      featured: true,
    },
    {
      id: 5,
      title: "Moive-website",
      category: "Frontend",
      description:
       "A responsive movie website featuring a Home page, Movie Series, About, and Sign-In sections. It provides an engaging user experience with movie listings, trailers, and detailed information.",
      image:moivePhoto,
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Hemaghara/moive_website",
      liveLink: "https://moive-website.vercel.app/ ",
    },
    {
      id: 6,
      title: "Admin-dashboard",
      category: "Frontend",
      description:
        "A modern and responsive admin dashboard with real-time analytics, user management, recent order tracking, and sales insights. Designed for seamless data visualization and interaction.",
      image: dashboardPhoto,
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Hemaghara/-Responsive-Admin-Dashboard",
      liveLink: "https://responsive-admin-dashboard-five.vercel.app/ ",
    },

    // Java Projects
    {
      id: 7,
      title: "Bank Management System",
      category: "Java",
      description:
      "Java Banking System (JDBC + MySQL) is a Java-based application for secure account management, transactions, and PIN updates using JDBC and MySQL.",
      image:bankPhoto,
      technologies: ["Java","MySQL","Jdbc"],
      githubLink: "https://github.com/Hemaghara/bank-managment-system",
      liveLink: "https://student-management.example.com",
      featured: true,
    },
    {
      id: 8,
      title: "Hospital Management System",
      category: "Java",
      description:
        "Java Hospital Management System (JDBC + MySQL) is a Java-based application for managing patient records, doctor details, and appointments using JDBC and MySQL.",
      image:hospitalPhoto,
      technologies: ["Java","MySQL","Jdbc"],
      githubLink: "https://github.com/Hemaghara/hospital-managment-system",
      liveLink: "https://inventory-system.example.com",
    },
    {
      id: 9,
      title: "Student Managment System",
      category: "Java",
      description:
        "Java Student Management System (JDBC + MySQL) is a Java-based application for managing student records, including adding, removing, searching, and displaying student details using JDBC and MySQL.",
      image: studentPhoto,
      technologies: ["Java","MySQL","Jdbc"],
      githubLink: "https://github.com/username/banking-app",
      liveLink: "https://banking-app.example.com",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "Full Stack", name: "Full Stack" },
    { id: "Frontend", name: "Frontend" },
    { id: "Java", name: "Java" },
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // Scroll to top of the projects section when changing categories
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    if (onBack) onBack();
  };

  if (!mounted) return null;

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index % 3) }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 m-2 rounded">
                {project.category}
              </div>
              {project.featured && (
                <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs px-2 py-1 m-2 rounded">
                  Featured
                </div>
              )}
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {project.title}
              </h3>
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

      {/* Back Button */}
      <div className="mt-12 text-center">
        <motion.button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg text-sm md:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft /> Back to Featured Projects
        </motion.button>
      </div>
    </div>
  );
};

export default AllProjects;
