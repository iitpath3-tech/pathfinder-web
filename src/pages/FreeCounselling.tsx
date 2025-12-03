import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, MessageCircle, Award, Phone, Mail, Calendar } from "lucide-react";
import { useState } from "react";

const FreeCounselling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    grade: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your submission! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
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
                Free <span className="text-gradient-primary">Counselling</span> Session
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
              >
                Schedule a personalized counselling session with our experts to chart your academic journey
              </motion.p>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Information Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <h2 className="text-3xl font-display font-bold mb-6 text-gradient-primary flex items-center">
                    <GraduationCap className="mr-3" size={32} />
                    Why Free Counselling?
                  </h2>
                  
                  <ul className="space-y-4">
                    {[
                      "Personalized career guidance based on your interests",
                      "Expert advice on course selection and preparation strategy",
                      "Understanding of exam patterns and syllabus",
                      "Tips to overcome challenges and boost confidence",
                      "Customized study plan tailored to your goals"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-card to-muted rounded-2xl shadow-xl p-8 border border-border hover:border-primary/30 transition-all duration-500">
                  <h2 className="text-3xl font-display font-bold mb-6 text-gradient-primary flex items-center">
                    <Users className="mr-3" size={32} />
                    What to Expect
                  </h2>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Initial Assessment",
                        description: "We'll evaluate your current academic standing and goals"
                      },
                      {
                        title: "Course Recommendations",
                        description: "Get expert advice on the best courses for your aspirations"
                      },
                      {
                        title: "Study Strategy",
                        description: "Receive a customized plan to achieve your targets"
                      },
                      {
                        title: "Q&A Session",
                        description: "Ask all your questions about exams, preparation, and careers"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-bold mb-1">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Booking Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-card to-muted rounded-2xl shadow-xl p-8 border border-border hover:border-primary/30 transition-all duration-500">
                  <h2 className="text-3xl font-display font-bold mb-6 text-gradient-primary flex items-center">
                    <Calendar className="mr-3" size={32} />
                    Book Your Session
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-medium mb-2 flex items-center">
                        <BookOpen className="mr-2" size={18} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
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
                        name="email"
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="grade" className="block text-lg font-medium mb-2 flex items-center">
                        <Award className="mr-2" size={18} />
                        Current Grade/Class
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        required
                      >
                        <option value="">Select your current class</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                        <option value="dropper">Dropper</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="course" className="block text-lg font-medium mb-2 flex items-center">
                        <GraduationCap className="mr-2" size={18} />
                        Course Interested In
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        required
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
                      <label htmlFor="message" className="block text-lg font-medium mb-2 flex items-center">
                        <MessageCircle className="mr-2" size={18} />
                        Questions/Comments
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background"
                        placeholder="Any specific questions or information you'd like to share?"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-primary text-white py-3 px-6 rounded-lg font-display font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <Calendar className="mr-2" size={20} />
                      Book Free Counselling Session
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FreeCounselling;