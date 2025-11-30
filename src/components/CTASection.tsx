import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Start Your Journey to
            <br />
            IIT & AIIMS Today
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Join thousands of successful students who have achieved their dreams with IIT PATH.
            Your success story starts here.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-2xl min-w-[200px]"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Demo
            </Button>
            
            <Button
              size="xl"
              variant="outline"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm min-w-[200px]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-white/80"
          >
            Limited seats available • Admissions closing soon
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
