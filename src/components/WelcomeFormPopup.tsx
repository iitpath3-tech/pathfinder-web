import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, BookOpen, Award, MessageCircle, GraduationCap } from "lucide-react";

interface WelcomeFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeFormPopup = ({ isOpen, onClose }: WelcomeFormPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://submit-form.com/rbmwoVOVf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
      } else {
        console.error("Form submission failed");
        // You might want to show an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You might want to show an error message to the user
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking on the backdrop itself, not on the form
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-card to-muted rounded-2xl shadow-2xl p-6 sm:p-8 border border-border max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-red-500 transition-all duration-300 hover:scale-110 z-10 sm:w-10 sm:h-10 sm:rounded-full sm:bg-red-500/10 sm:hover:bg-red-500/20 sm:flex sm:items-center sm:justify-center"
              aria-label="Close form"
            >
              <X size={24} />
            </button>

            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold mb-2 text-gradient-primary text-left sm:text-center">
                Welcome to IIT PATH
              </h2>
              <p className="text-sm text-muted-foreground">
                Fill out this quick form to get started on your success journey
              </p>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
              {showSuccessModal && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  onClick={() => {
                    setShowSuccessModal(false);
                    onClose();
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-card rounded-2xl shadow-xl p-6 max-w-sm w-full text-center border border-border"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-4">
                      Your information has been submitted successfully. We'll get back to you soon!
                    </p>
                    <button
                      onClick={() => {
                        setShowSuccessModal(false);
                        onClose();
                      }}
                      className="bg-gradient-primary text-white py-2 px-6 rounded-lg font-display font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Continue
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            {!showSuccessModal && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 flex items-center">
                    <BookOpen className="mr-2" size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-sm"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 flex items-center">
                    <Mail className="mr-2" size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1 flex items-center">
                    <Phone className="mr-2" size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-sm"
                    placeholder="+91 XXXXXXXXXX"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium mb-1 flex items-center">
                    <Award className="mr-2" size={16} />
                    Course Interested In
                  </label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-sm"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="foundation">Foundation Program (Classes 7-10)</option>
                    <option value="jee">JEE Main & Advanced</option>
                    <option value="neet">NEET & AIIMS</option>
                    <option value="olympiad">Olympiad Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 flex items-center">
                    <MessageCircle className="mr-2" size={16} />
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background text-sm resize-none"
                    placeholder="Any additional queries?"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white py-2 px-4 rounded-lg font-display font-semibold text-base hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Get Started"}
                </motion.button>
              </form>
            )}

            {/* Close Button Text */}
            {!showSuccessModal && (
              <p className="text-xs text-muted-foreground text-center mt-4">
                You can also close this by clicking outside or pressing the × button
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeFormPopup;
