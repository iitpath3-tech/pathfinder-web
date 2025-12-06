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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Close the popup after submission
    onClose();
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
              <h2 className="text-2xl font-display font-bold mb-2 text-gradient-primary flex items-center">
                <GraduationCap className="mr-3" size={28} />
                Welcome to IIT PATH
              </h2>
              <p className="text-sm text-muted-foreground">
                Fill out this quick form to get started on your success journey
              </p>
            </div>

            {/* Form */}
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
                className="w-full bg-gradient-primary text-white py-2 px-4 rounded-lg font-display font-semibold text-base hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
            </form>

            {/* Close Button Text */}
            <p className="text-xs text-muted-foreground text-center mt-4">
              You can also close this by clicking outside or pressing the × button
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeFormPopup;
