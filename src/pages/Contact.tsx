import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  // Contact info data
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "IIT PATH Coaching Institute",
        "4th Floor, Times Square Building",
        "Near Andheri Station (West)",
        "Mumbai, Maharashtra 400058"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { text: "Admissions: +91 22 2678 1234", link: "tel:+912226781234" },
        { text: "General Enquiries: +91 22 2678 1235", link: "tel:+912226781235" },
        { text: "WhatsApp: +91 22 2678 1234", link: "https://wa.me/912226781234" }
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { text: "General: info@iitpath.com", link: "mailto:info@iitpath.com" },
        { text: "Admissions: admissions@iitpath.com", link: "mailto:admissions@iitpath.com" },
        { text: "Support: support@iitpath.com", link: "mailto:support@iitpath.com" }
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Get in <span className="text-gradient-primary">Touch</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                We're here to help you start your journey to success
              </motion.p>
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
                <h2 className="text-3xl font-display font-bold mb-6 text-gradient-primary">Contact Information</h2>
                
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
                  <h2 className="text-2xl font-display font-bold mb-4 text-gradient-accent">Follow Us</h2>
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
                  <h2 className="text-3xl font-display font-bold mb-6 text-gradient-primary">Send us a Message</h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-lg font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-lg font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="course" className="block text-lg font-medium mb-2">Course Interested In</label>
                      <select
                        id="course"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                      >
                        <option value="">Select a course</option>
                        <option value="foundation">Foundation Program (Classes 8-10)</option>
                        <option value="jee">JEE Main & Advanced</option>
                        <option value="neet">NEET & AIIMS</option>
                        <option value="olympiad">Olympiad Training</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        placeholder="Enter your message or questions"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-display font-semibold text-lg hover:shadow-lg transition-all duration-300"
                    >
                      Send Message
                    </motion.button>
                  </form>
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
              <h2 className="text-3xl font-display font-bold mb-6 text-center text-gradient-primary">Our Location</h2>
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
