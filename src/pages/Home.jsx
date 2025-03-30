import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile6.jpg";

// Custom hook for character-by-character typing animation with final reveal
const useTypingAnimation = (text, typingSpeed = 100, finalDelay = 1000) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    let timeout;

    // Type characters one by one
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
    }
    // After all characters are shown, wait and then show final reveal
    else if (!showFinal) {
      timeout = setTimeout(() => {
        setShowFinal(true);
        setIsComplete(true);
      }, finalDelay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, text, typingSpeed, finalDelay, showFinal]);

  return { displayText, isComplete, showFinal };
};

const Home = () => {
  const { displayText, showFinal } = useTypingAnimation(
    "Fullstack Developer",
    100,
    800
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-8 md:py-10"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 md:mb-4">
              Hi, I'm <span className="text-blue-600">Aghara Hem</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-6 min-h-[2rem]">
              {showFinal ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-600"
                >
                  Fullstack Developer
                </motion.span>
              ) : (
                <span className="border-r-2 border-blue-600 pr-1 animate-pulse">
                  {displayText}
                </span>
              )}
            </h2>
            <p className="text-lg sm:text-xl mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
              I build exceptional and accessible digital experiences for the
              web.
            </p>
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
              <a href="#contact">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-blue-600 shadow-xl">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=Profile+Photo";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
