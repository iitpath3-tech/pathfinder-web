import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  MessageCircle,
  Users2,
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Child-Centric Approach",
    description: "Personalized attention and care for every student's unique learning journey.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description: "Learn from IITians, PhDs, and Doctors with proven teaching excellence.",
  },
  {
    icon: BookOpen,
    title: "Extensive Study Material",
    description: "Comprehensive resources designed by experts to cover every concept thoroughly.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Assessments",
    description: "Frequent tests and detailed performance analysis to track your progress.",
  },
  {
    icon: MessageCircle,
    title: "Doubt Sessions",
    description: "One-on-one doubt clearing sessions to ensure conceptual clarity.",
  },
  {
    icon: Users2,
    title: "Competitive Peer Group",
    description: "Learn and grow with motivated students who share your ambitions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Choose <span className="text-gradient-primary">IIT PATH</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to excel in your preparation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-xl p-8 hover-lift shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
