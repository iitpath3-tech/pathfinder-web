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
    title: "Personalized Learning Approach",
    description: "Individual attention with customized study plans based on your strengths and weaknesses.",
  },
  {
    icon: GraduationCap,
    title: "IITian & PhD Faculty",
    description: "Learn from 25+ IITians and PhDs with proven track records in competitive exam preparation.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Study Material",
    description: "Well-researched, exam-oriented material covering NCERT, Exemplar, and advanced problems.",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly Assessments",
    description: "Regular tests with detailed performance analysis and rank prediction reports.",
  },
  {
    icon: MessageCircle,
    title: "Dedicated Doubt Clearing",
    description: "Subject-wise doubt sessions with faculty and dedicated mentorship program.",
  },
  {
    icon: Users2,
    title: "All India Test Series",
    description: "Participate in national-level test series to benchmark your preparation.",
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
            Our unique approach and proven methodologies set us apart from other coaching institutes.
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
