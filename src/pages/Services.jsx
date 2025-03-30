import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      icon: FaPalette,
      description:
        "Creative and modern web designs that captivate your audience. I focus on user experience, aesthetics, and brand consistency to create visually stunning websites.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Web Development",
      icon: FaLaptopCode,
      description:
        "Full-stack web development with modern technologies. I build robust, scalable, and high-performance web applications using the latest frameworks and best practices.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Responsive Design",
      icon: FaMobileAlt,
      description:
        "Mobile-first responsive designs that work seamlessly across all devices. I ensure your website looks and functions perfectly on desktops, tablets, and smartphones.",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-bg-primary theme-transition"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-text-primary">
            My Services
          </h2>
          <div className="w-16 h-1 bg-bg-accent mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg px-4 text-text-secondary">
            Here are the premium services I offer to help bring your digital
            vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-card rounded-xl overflow-hidden shadow-card theme-transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-blue-500 text-white">
                      <service.icon size={20} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-text-secondary text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
