import { FC } from "react";
import { motion } from "framer-motion";

import { Layers, UserSquare2, ClipboardEdit } from "lucide-react";

const ProgramDesignSection: FC = () => {
  return (
    <section className="w-full bg-[#6E2A00] text-white py-16 relative">
      {/* Header */}
      <motion.div 
        className="text-center mb-10 px-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          HOW OUR PROGRAMS ARE DESIGNED TO
          <br />
          <span className="text-orange-300">HELP EACH STUDENT EXCEL</span>
        </h2>
        <motion.div 
          className="w-24 h-1 bg-orange-300 mx-auto mt-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>

      {/* Rounded container */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#B74E00] rounded-[80px] p-10 text-white"
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
            className="bg-[#FF9F64] p-8 rounded-[60px] shadow-lg text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Layers size={42} className="mb-4" />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4">
              Structured Learning Approach
            </h3>
            <ul className="space-y-4 text-white/90 text-base leading-relaxed">
              <li>• Courses planned with care to ensure strong learning outcomes.</li>
              <li>• Concepts explained in a simple, step-by-step manner.</li>
              <li>• Focus on developing analytical thinking and problem-solving skills.</li>
            </ul>
          </motion.div>

          {/* Box 2 */}
          <motion.div 
            className="bg-[#C45306] p-8 rounded-[60px] shadow-lg text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <UserSquare2 size={42} className="mb-4" />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4">
              Strategic Curriculum Planning
            </h3>
            <ul className="space-y-4 text-white/90 text-base leading-relaxed">
              <li>• Curriculum designed by experts and aligned with the latest exam patterns.</li>
              <li>• Frequent tests and evaluations to track each student's progress.</li>
              <li>• Smart learning strategies that adapt to individual improvement areas.</li>
            </ul>
          </motion.div>

          {/* Box 3 */}
          <motion.div 
            className="bg-[#A64000] p-8 rounded-[60px] shadow-lg text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ClipboardEdit size={42} className="mb-4" />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4">
              Feedback-Oriented System
            </h3>
            <ul className="space-y-4 text-white/90 text-base leading-relaxed">
              <li>• Regular communication with students, parents, and teachers to support steady academic growth.</li>
              <li>• Access to personalized study resources, recorded lectures, and assessments.</li>
              <li>• Continuous guidance from mentors to build clarity, confidence, and consistent progress.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDesignSection;