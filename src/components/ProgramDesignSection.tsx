import { FC } from "react";
import { motion } from "framer-motion";

import { Layers, Target, MessageSquare, BookOpen, GraduationCap, Award } from "lucide-react";

const ProgramDesignSection: FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-16 relative">
      {/* Header */}
      <motion.div 
        className="text-center mb-16 px-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-4 text-gray-900">
          HOW OUR PROGRAMS ARE DESIGNED TO
          <br />
          <span className="text-gradient-primary">HELP EACH STUDENT EXCEL</span>
        </h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
        <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
          Our comprehensive approach ensures every student receives the support and resources needed for academic excellence
        </p>
      </motion.div>

      {/* Rounded container */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
          {/* Box 1 */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-border"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              y: -15, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
              scale: 1.02
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, 10, -10, 0],
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 0,
                rotate: { duration: 0.8, repeat: 0 }
              }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 shadow-lg">
                <BookOpen size={36} className="text-white" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
              Structured Learning Approach
            </h3>
            <ul className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Courses planned with care to ensure strong learning outcomes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Concepts explained in a simple, step-by-step manner.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Focus on developing analytical thinking and problem-solving skills.</span>
              </li>
            </ul>
            
            {/* Animated decorative element */}
            <motion.div 
              className="mt-6 pt-4 border-t border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center text-primary">
                <GraduationCap size={20} className="mr-2" />
                <span className="text-sm">Proven methodology for academic success</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Box 2 */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-border"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              y: -15, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
              scale: 1.02
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, 10, -10, 0],
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 0,
                rotate: { duration: 0.8, repeat: 0 }
              }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 shadow-lg">
                <Target size={36} className="text-white" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
              Strategic Curriculum Planning
            </h3>
            <ul className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Curriculum designed by experts and aligned with the latest exam patterns.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Frequent tests and evaluations to track each student's progress.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Smart learning strategies that adapt to individual improvement areas.</span>
              </li>
            </ul>
            
            {/* Animated decorative element */}
            <motion.div 
              className="mt-6 pt-4 border-t border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center text-primary">
                <Award size={20} className="mr-2" />
                <span className="text-sm">Aligned with competitive exam standards</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Box 3 */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-border"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              y: -15, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
              scale: 1.02
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, 10, -10, 0],
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ 
                type: "spring", 
                stiffness:0,
                rotate: { duration: 0.8, repeat: 0 }
              }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 shadow-lg">
                <MessageSquare size={36} className="text-white" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-display font-bold mb-4 text-gray-900">
              Feedback-Oriented System
            </h3>
            <ul className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Regular communication with students, parents, and teachers to support steady academic growth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Access to personalized study resources, recorded lectures, and assessments.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Continuous guidance from mentors to build clarity, confidence, and consistent progress.</span>
              </li>
            </ul>
            
            {/* Animated decorative element */}
            <motion.div 
              className="mt-6 pt-4 border-t border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center text-primary">
                <Layers size={20} className="mr-2" />
                <span className="text-sm">Comprehensive support ecosystem</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDesignSection;