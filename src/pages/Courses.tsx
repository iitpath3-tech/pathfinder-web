import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Trophy, Medal, Star, Award } from "lucide-react";
import FlyingIcons from "@/components/FlyingIcons";

const Courses = () => {
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
                Our <span className="text-gradient-primary">Courses</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Comprehensive programs designed for success in IIT-JEE, NEET, and Olympiads
              </p>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {/* Foundation Program Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <BookOpen className="text-white mr-3" size={24} />
                      <h2 id="foundation" className="text-2xl font-display font-bold text-white">Foundation Program</h2>
                    </div>
                    <p className="text-blue-100">Classes 8-10</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Our Foundation Program is designed for students in Classes 8-10 who aspire to pursue careers in engineering or medicine. This program focuses on building a strong conceptual foundation in Physics, Chemistry, and Mathematics/Biology.
                  </p>
                  <h3 className="text-xl font-display font-semibold text-blue-800 mt-4 mb-3 flex items-center">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Early exposure to competitive exam patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Conceptual clarity with real-life applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Preparation for NTSE, Olympiads, and JSTSE</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Regular assessments and performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Small batch sizes for personalized attention</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* JEE Program Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="text-white mr-3" size={24} />
                      <h2 id="engineering" className="text-2xl font-display font-bold text-white">JEE Main & Advanced Program</h2>
                    </div>
                    <p className="text-orange-100">Classes 11-12 & Droppers</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Our flagship 2-year comprehensive program covers the complete JEE syllabus with in-depth coverage of concepts, problem-solving techniques, and exam strategies. The program is divided into modules for systematic learning and revision.
                  </p>
                  <h3 className="text-xl font-display font-semibold text-orange-600 mt-4 mb-3 flex items-center">
                    <Trophy className="text-yellow-500 mr-2" size={20} />
                    Program Structure:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Complete syllabus coverage for Classes 11 and 12</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Daily Practice Problems (DPPs) for each topic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Weekly tests and detailed performance analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Rank booster modules for final preparation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">All India Test Series with percentile ranking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Special doubt-clearing sessions and mentoring</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* NEET Program Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <Award className="text-white mr-3" size={24} />
                      <h2 id="medical" className="text-2xl font-display font-bold text-white">NEET & AIIMS Program</h2>
                    </div>
                    <p className="text-blue-100">Medical Entrance Preparation</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Our specialized medical preparation program integrates Biology, Physics, and Chemistry to provide a holistic preparation experience. The program emphasizes conceptual understanding, application-based learning, and extensive practice.
                  </p>
                  <h3 className="text-xl font-display font-semibold text-blue-700 mt-4 mb-3 flex items-center">
                    <Medal className="text-yellow-500 mr-2" size={20} />
                    Key Highlights:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Integrated approach to PCB subjects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">NCERT-focused curriculum with advanced concepts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Regular NEET pattern mock tests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Biology-specific diagrammatic learning techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Subject-wise expert faculty for each discipline</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">Performance analytics and improvement strategies</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Olympiad Program Card */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
              >
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <Star className="text-white mr-3" size={24} />
                      <h2 id="olympiad" className="text-2xl font-display font-bold text-white">Olympiad Training Program</h2>
                    </div>
                    <p className="text-orange-100">For Aspiring Champions</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Our Olympiad Training Program is designed for students aiming to excel in national and international Olympiads like NSEP, NSEC, NSEA, NMTC, PRMO, RMO, and INO. The program focuses on developing advanced problem-solving skills and mathematical/ scientific reasoning.
                  </p>
                  <h3 className="text-xl font-display font-semibold text-orange-700 mt-4 mb-3 flex items-center">
                    <Award className="text-yellow-500 mr-2" size={20} />
                    Program Benefits:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Specialized faculty with Olympiad experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Advanced problem sets and reference materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Stage-wise preparation for multi-level competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Research-oriented learning approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Peer learning with equally motivated students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Regular workshops and guest lectures</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
