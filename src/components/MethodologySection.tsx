import { FC, ComponentType } from "react";
import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";

import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Award, 
  Layers, 
  Handshake 
} from "lucide-react";

interface MethodItem {
  title: string;
  description: string;
  icon: ComponentType<LucideProps>;
}

const methodologyData: MethodItem[] = [
  {
    title: "Personalized Instruction Approach",
    description:
      "Teachers use tailored methods to meet each student's unique needs, providing targeted guidance that fosters individual growth and success.",
    icon: BookOpen,
  },
  {
    title: "Interactive Learning Environment",
    description:
      "Engaging students through discussions and collaborative problem-solving enhances understanding, retention, and active participation.",
    icon: Users,
  },
  {
    title: "Adaptive Progress Assessments",
    description:
      "Real-time assessments help teachers adjust learning paths based on progress, encouraging a growth mindset and continuous improvement.",
    icon: BarChart3,
  },
  {
    title: "Vision-Driven Leadership",
    description:
      "Management sets a clear educational direction, guiding the team to nurture students into confident and future-ready individuals.",
    icon: Award,
  },
  {
    title: "Efficient Resource Allocation",
    description:
      "Access to updated tools, materials, and technology ensures an enriching and effective learning experience.",
    icon: Layers,
  },
  {
    title: "Strong Community Support",
    description:
      "Healthy relationships with parents and the community create a strong support network for students.",
    icon: Handshake,
  },
];

const MethodologySection: FC = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          OUR <span className="text-purple-600">METHODOLOGY</span>
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-orange-500 mx-auto mt-2 mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {methodologyData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx} 
                className="flex flex-col items-start"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Icon circle with hover effect */}
                <motion.div 
                  className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center shadow-md mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent size={30} className="text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 mt-2 leading-relaxed text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;