import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUserTie,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const About = () => {
  const education = [
    {
      id: 1,
      level: "Bachelor of Technology",
      institution: "A. D. Patel Institute of Technology, Anand (CVM University)",
      year: "2022 - Present",
      description:
        "Currently pursuing B.Tech in Information Technology with specialization in Web Development.",
      icon: FaGraduationCap,
    },
    {
      id: 2,
      level: "Higher Secondary (12th)",
      institution: "Vinay Science School,Morbi",
      year: "2022 - Completed",
      description:
        "Completed 12th grade with 65% marks in Science stream.",
      icon: FaGraduationCap,
    },
    {
      id: 3,
      level: "Secondary School (10th)",
      institution: "Vallabhi Vidhyapith,Morbi",
      year: "2020 - Completed",
      description: "Completed 10th grade with 76% marks.",
      icon: FaGraduationCap,
    },
  ];

  const personalInfo = [
    {
      id: 1,
      title: "Profile",
      description:
        "I am a passionate fullstack developer with a strong foundation in both frontend and backend technologies. I enjoy creating responsive and user-friendly web applications.",
      icon: FaUserTie,
    },
    {
      id: 2,
      title: "Interests",
      description:
        "Web Development, UI/UX Design",
      icon: FaCode,
    },
    {
      id: 3,
      title: "Experience",
      description:
        "as fresher experience in developing web applications using modern technologies like React, Node.js, and MongoDB.",
      icon: FaLaptopCode,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg px-4">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 border-b-2 border-blue-600 pb-2 inline-block">
              Personal Info
            </h3>
            <div className="space-y-4 md:space-y-6">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.id}
                  className="flex gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon size={20} className="md:text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                      {info.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 border-b-2 border-blue-600 pb-2 inline-block">
              Education
            </h3>
            <div className="space-y-4 md:space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative pl-6 md:pl-8 border-l-2 border-blue-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <div className="absolute -left-3 top-0 w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <item.icon size={12} className="text-white md:text-sm" />
                  </div>
                  <div className="bg-white p-4 md:p-5 rounded-lg shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg md:text-xl font-bold text-blue-600 mb-1 sm:mb-0">
                        {item.level}
                      </h4>
                      <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full inline-block sm:ml-2 w-fit">
                        {item.year}
                      </span>
                    </div>
                    <h5 className="text-base md:text-lg font-medium mb-1 md:mb-2">
                      {item.institution}
                    </h5>
                    <p className="text-sm md:text-base text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
