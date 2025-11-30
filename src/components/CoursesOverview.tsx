import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Rocket, Stethoscope, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: BookOpen,
    title: "Foundation Builder",
    description: "Strong fundamentals for Classes 7-10. Build a solid base for competitive exams.",
    gradient: "from-blue-500 to-cyan-500",
    link: "/courses#foundation",
  },
  {
    icon: Rocket,
    title: "Engineering (JEE)",
    description: "Comprehensive preparation for JEE Main & Advanced with expert faculty.",
    gradient: "from-primary to-blue-600",
    link: "/courses#engineering",
  },
  {
    icon: Stethoscope,
    title: "Medical (NEET)",
    description: "Focused training for NEET with proven teaching methodologies.",
    gradient: "from-accent to-red-600",
    link: "/courses#medical",
  },
  {
    icon: Trophy,
    title: "Olympiad Preparation",
    description: "5-stage comprehensive training for international olympiad success.",
    gradient: "from-yellow-500 to-orange-500",
    link: "/courses#olympiad",
  },
];

const CoursesOverview = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-gradient-primary">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right path for your academic journey with our specialized programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-card rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${course.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <Button variant="ghost" className="group/btn p-0 h-auto" asChild>
                  <Link to={course.link}>
                    <span className="flex items-center gap-2 text-primary font-semibold">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/courses">View All Courses</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesOverview;
