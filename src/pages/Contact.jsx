import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      // await axios.post('/api/contact', formData);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        success: true,
        message:
          "Your message has been sent successfully! I will get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "hemaghara@gmail.com",
      link: "mailto:hemaghara@gmail.com",
    },
    {
      id: 2,
      icon: FaPhone,
      title: "Phone",
      value: "8200973720",
      link: "8200973720",
    },
    {
      id: 3,
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Morbi,Gujarat,India",
      link: "https://maps.app.goo.gl/2zg3xung6b2FmFRQA",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg px-4 text-gray-600">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info Section */}
            <motion.div
              className="lg:w-2/5 bg-blue-600 text-white p-6 sm:p-8 md:p-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-full flex flex-col">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                    Let's talk about your project
                  </h3>
                  <p className="text-blue-100 mb-4 md:mb-6 text-sm sm:text-base">
                    Fill out the form and I'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6 mt-auto">
                  <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                    Contact Information
                  </h4>
                  {contactInfo.map((item) => (
                    <motion.a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 md:gap-4 hover:text-blue-200 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="sm:text-lg" />
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-medium text-blue-200">
                          {item.title}
                        </h5>
                        <p className="text-sm sm:text-base">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
              className="lg:w-3/5 p-6 sm:p-8 md:p-10 bg-white"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
                Send Me a Message
              </h3>

              {submitStatus && (
                <div
                  className={`p-3 sm:p-4 mb-5 sm:mb-6 rounded-md ${
                    submitStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-medium mb-1 sm:mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-medium mb-1 sm:mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 sm:mb-5">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-medium mb-1 sm:mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    required
                  />
                </div>

                <div className="mb-5 sm:mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-medium mb-1 sm:mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center gap-2 transition-colors text-sm sm:text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <FaPaperPlane className="text-sm sm:text-base" />
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
