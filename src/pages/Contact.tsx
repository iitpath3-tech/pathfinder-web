import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Clock, BookOpen, GraduationCap, Users, MessageCircle, Award, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import FlyingIcons from "@/components/FlyingIcons";

const Contact = () => {
  // Contact info data
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "IIT PATH Coaching Institute, 101/102 Shree Shanti Nagar CHS (OPP - Bharat Gas Agency), Sector-5, Mira Road (East)",
        "Mumbai, Maharashtra 400058"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { text: "Admissions: 9130054398", link: "tel:+919130054398" },
        { text: "General Enquiries: +91 9136917113", link: "tel:+919136917113" },
        { text: "WhatsApp: +91 9136917113", link: "https://wa.me/919136917113" }
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { text: "General: iitpath0@gmail.com", link: "mailto:iitpath0@gmail.com" },
        { text: "Admissions: iitpath0@gmail.com", link: "mailto:iitpath0@gmail.com" },
        { text: "Support: iitpath0@gmail.com", link: "mailto:iitpath0@gmail.com" }
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday to Saturday: 9:00 AM - 8:00 PM",
        "Sunday: 10:00 AM - 6:00 PM"
      ]
    }
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <FlyingIcons />
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Get in <span className="text-gradient-primary">Touch</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
              >
                We're here to help you start your journey to success
              </motion.p>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {/* Contact Information Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-display font-bold mb-6 text-gradient-primary flex items-center">
                  <MessageCircle className="mr-3" size={32} />
                  Contact Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="group relative overflow-hidden bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/30"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                      
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors duration-300">{info.title}</h3>
                      </div>
                      
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {typeof detail === 'string' ? (
                              detail
                            ) : (
                              <a href={detail.link} className="text-primary hover:underline transition-colors duration-300">
                                {detail.text}
                              </a>
                            )}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20"
                >
                  <h2 className="text-2xl font-display font-bold mb-4 text-gradient-accent flex items-center">
                    <Users className="mr-3" size={24} />
                    Follow Us
                  </h2>
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, color: "bg-blue-600" },
                      { icon: Instagram, color: "bg-gradient-to-br from-purple-500 to-pink-500" },
                      { icon: Youtube, color: "bg-red-600" },
                      { icon: Linkedin, color: "bg-blue-700" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 rounded-full ${social.color} text-white flex items-center justify-center hover:shadow-lg transition-all duration-300`}
                      >
                        <social.icon className="h-6 w-6" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-card to-muted rounded-2xl shadow-xl p-8 border border-border hover:border-primary/30 transition-all duration-500">
                  <h2 className="text-3xl font-display font-bold mb-6 text-gradient-primary flex items-center">
                    <GraduationCap className="mr-3" size={32} />
                    Send us a Message
                  </h2>
                  {/* Success Modal */}
                  {showSuccessModal && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                      onClick={() => setShowSuccessModal(false)}
                    >
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-card rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-border"
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
                        <h3 className="text-2xl font-display font-bold mb-2">Message Sent Successfully!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for contacting us. We've received your message and will get back to you shortly.
                        </p>
                        <button
                          onClick={() => setShowSuccessModal(false)}
                          className="bg-gradient-primary text-white py-3 px-6 rounded-lg font-display font-semibold hover:shadow-lg transition-all duration-300"
                        >
                          Continue
                        </button>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Form */}
                  {!showSuccessModal && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-lg font-medium mb-2 flex items-center">
                          <BookOpen className="mr-2" size={18} />
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-2 flex items-center">
                          <Mail className="mr-2" size={18} />
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-lg font-medium mb-2 flex items-center">
                          <Phone className="mr-2" size={18} />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="course" className="block text-lg font-medium mb-2 flex items-center">
                          <Award className="mr-2" size={18} />
                          Course Interested In
                        </label>
                        <select
                          id="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
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
                        <label htmlFor="message" className="block text-lg font-medium mb-2 flex items-center">
                          <MessageCircle className="mr-2" size={18} />
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                          placeholder="Enter your message or questions"
                        ></textarea>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-display font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <ClipboardCheck className="mr-2" size={20} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
            
            {/* Location Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-center text-gradient-primary flex items-center justify-center">
                <MapPin className="mr-3" size={28} />
                Our Location
              </h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden shadow-xl border border-primary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.574540083173!2d72.8291043148579!3d19.12660038705742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b3d9b4d3d9%3A0x1e0c1c1e1e1e1e1e!2sIIT%20PATH%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
