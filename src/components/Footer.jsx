import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/hem-aghara-b8286028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      name: "LinkedIn",
    },
    {
      id: 2,
      icon: FaInstagram,
      url: "https://www.instagram.com/hemu_patel_36?igsh=OGhzb2xua3B2MGN4",
      name: "Instagram",
    },
    {
      id: 3,
      icon: FaGithub,
      url: "https://github.com/Hemaghara",
      name: "GitHub",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a
              href="#home"
              className="text-xl sm:text-2xl font-bold text-white"
            >
              Portfolio
            </a>
            <p className="mt-2 text-gray-400 max-w-md text-sm md:text-base">
              A passionate fullstack developer creating modern and responsive
              web applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label={`Visit ${social.name}`}
              >
                <social.icon size={16} className="sm:text-lg" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 flex justify-center">
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            Copyright © {currentYear} Hem Aghara. All Rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
