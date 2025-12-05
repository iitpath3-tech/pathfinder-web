import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesOverview from "@/components/CoursesOverview";
import ToppersCarousel from "@/components/ToppersCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MethodologySection from "@/components/MethodologySection";
import ProgramDesignSection from "@/components/ProgramDesignSection";
import PedagogySection from "@/components/PedagogySection";
import WelcomeFormPopup from "@/components/WelcomeFormPopup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { BookOpen, PenTool, Award, Users, Calendar, Star, GraduationCap } from "lucide-react";
import FlyingIcons from "@/components/FlyingIcons";

const Index = () => {
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Show the form popup after a short delay (after loader)
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowFormPopup(true);
        setHasShownPopup(true);
      }
    }, 1500); // Adjust this delay based on your loader duration

    return () => clearTimeout(timer);
  }, [hasShownPopup]);
  return (
    <div className="min-h-screen bg-background">
      <FlyingIcons />
      <Navbar />
      <WelcomeFormPopup isOpen={showFormPopup} onClose={() => setShowFormPopup(false)} />
      <main>
        <HeroCarousel />
        <StatsSection />
        <WhyChooseUs />
        <MethodologySection />
        <CoursesOverview />
        <ProgramDesignSection />
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <ToppersCarousel category="Our" />
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center justify-center">
                Frequently Asked Questions <span className="text-gradient-primary ml-2"></span>
                <PenTool className="ml-3 text-primary" size={32} />
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about IIT PATH
              </p>
            </motion.div>
            
            <motion.div
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
              className="w-full max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex items-center justify-start text-left">
                      <BookOpen className="mr-3 text-primary" size={20} />
                      How do I enroll at IIT PATH?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        You can enroll at IIT PATH by visiting our center in person, calling our admissions office at +91 22 2678 1234, or filling out the online enrollment form on our website. We recommend scheduling a counseling session to discuss the best program for your goals.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="flex items-center justify-start text-left">
                      <GraduationCap className="mr-3 text-primary" size={20} />
                      What are the eligibility criteria for different courses?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Eligibility criteria vary by course:
                      </p>
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Foundation Program:</strong> Students studying in Classes 8-10</li>
                        <li><strong>JEE/NEET Programs:</strong> Students studying in Classes 11-12 or droppers</li>
                        <li><strong>Olympiad Program:</strong> Students from Classes 8-12 with strong academic performance</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="flex items-center justify-start text-left">
                      <Calendar className="mr-3 text-primary" size={20} />
                      When do admissions open?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Admissions for our academic year programs open in April, with early bird discounts available until May. For dropper batches, admissions open in February. We recommend applying early as popular batches fill up quickly.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="flex items-center justify-start text-left">
                      <Users className="mr-3 text-primary" size={20} />
                      What is the faculty qualification at IIT PATH?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Our faculty comprises 25+ IITians, PhDs, and subject matter experts with extensive teaching experience. All faculty members undergo rigorous training and regular performance evaluations to ensure the highest quality of instruction.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="flex items-center justify-start text-left">
                      <Award className="mr-3 text-primary" size={20} />
                      How large are the batches?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We maintain small batch sizes to ensure personalized attention:
                      </p>
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Foundation Program:</strong> Maximum 25 students per batch</li>
                        <li><strong>JEE/NEET Programs:</strong> Maximum 30 students per batch</li>
                        <li><strong>Olympiad Program:</strong> Maximum 15 students per batch</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              </Accordion>
            </motion.div>
          </div>
        </section>
        {/* New Pedagogy Section */}
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;