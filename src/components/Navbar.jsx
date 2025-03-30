import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: 1, name: "Home", path: "#home" },
    { id: 2, name: "About", path: "#about" },
    { id: 3, name: "Services", path: "#services" },
    { id: 4, name: "Skills", path: "#skills" },
    { id: 5, name: "Projects", path: "#projects" },
    { id: 6, name: "Contact", path: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? "bg-white shadow-md py-1" : "bg-white py-2"}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl sm:text-2xl font-bold text-blue-600">Aghara Hem</a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              className={`relative px-3 py-1 text-gray-800 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base ${
                activeSection === link.path.substring(1) ? "text-blue-600" : ""
              }`}
            >
              {link.name}
              {activeSection === link.path.substring(1) && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden pr-2">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-blue-600 focus:outline-none p-2 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} className="text-blue-600" /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
          >
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  className={`text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-md transition-colors text-lg ${
                    activeSection === link.path.substring(1) ? "text-blue-600 bg-blue-50" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
