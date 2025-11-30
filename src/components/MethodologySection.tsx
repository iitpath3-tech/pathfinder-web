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
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide mb-4">
            OUR <span className="text-gradient-primary">METHODOLOGY</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Our proven approach combines innovative teaching techniques with personalized attention to maximize student potential
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {methodologyData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center text-center group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                {/* Icon circle with enhanced hover effect */}
                <motion.div 
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, 10, -10, 0],
                    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    duration: 0.6,
                    rotate: { duration: 0.8, repeat: 0 }
                  }}
                >
                  <IconComponent size={36} className="text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-muted-foreground leading-relaxed text-base px-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
                
                {/* Decorative element */}
                <motion.div
                  className="mt-4 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;