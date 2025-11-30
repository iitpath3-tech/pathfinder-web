import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Award, ClipboardCheck, MessageCircle, Trophy, Star, Medal, BarChart3, Calendar } from "lucide-react";
import FlyingIcons from "@/components/FlyingIcons";

const FAQs = () => {
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
                Frequently Asked <span className="text-gradient-primary">Questions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Find answers to common questions about IIT PATH
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
                    <AccordionTrigger className="flex items-center">
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
                    <AccordionTrigger className="flex items-center">
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
                    <AccordionTrigger className="flex items-center">
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
                    <AccordionTrigger className="flex items-center">
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
                    <AccordionTrigger className="flex items-center">
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
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="flex items-center">
                      <ClipboardCheck className="mr-3 text-primary" size={20} />
                      What study material is provided?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We provide comprehensive study material developed by our expert faculty, including textbooks, practice problems, revision notes, and online resources. The material is regularly updated to align with the latest exam patterns and syllabus changes.
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
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="flex items-center">
                      <BarChart3 className="mr-3 text-primary" size={20} />
                      How does IIT PATH track student performance?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We conduct regular assessments including weekly tests, monthly evaluations, and All India Test Series. Each student receives detailed performance analytics, rank predictions, and personalized improvement strategies. Parents receive regular progress reports.
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
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="flex items-center">
                      <Trophy className="mr-3 text-primary" size={20} />
                      What is the success rate of IIT PATH students?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We maintain an 85%+ selection rate in JEE Main for eligible students, with over 1200 selections in IITs and AIIMS combined. Our students consistently secure top ranks in competitive exams, with multiple AIR 1 rankers over the years.
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
                  <AccordionItem value="item-9">
                    <AccordionTrigger className="flex items-center">
                      <MessageCircle className="mr-3 text-primary" size={20} />
                      What facilities are available at IIT PATH?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Our center features state-of-the-art classrooms, well-equipped laboratories, a digital library, computer lab, and comfortable study areas. We also provide hostel facilities for outstation students and transportation services for local students.
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
                  <AccordionItem value="item-10">
                    <AccordionTrigger className="flex items-center">
                      <Users className="mr-3 text-primary" size={20} />
                      Do you provide accommodation for students?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Yes, we have tie-ups with reputable hostels near our center that provide safe, comfortable accommodation for outstation students. The hostels offer single and shared rooms with mess facilities, study areas, and 24/7 security.
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
                  <AccordionItem value="item-11">
                    <AccordionTrigger className="flex items-center">
                      <Star className="mr-3 text-primary" size={20} />
                      What support is available for weak students?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We provide additional support through personalized mentoring, special doubt-clearing sessions, remedial classes, and customized study plans. Our faculty maintains regular contact with parents to monitor progress and address concerns.
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
                  <AccordionItem value="item-12">
                    <AccordionTrigger className="flex items-center">
                      <Medal className="mr-3 text-primary" size={20} />
                      What payment options are available?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We offer flexible payment options including lump-sum payments, installment plans with zero interest, and digital payment methods. Early bird discounts and sibling discounts are also available.
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
                  <AccordionItem value="item-13">
                    <AccordionTrigger className="flex items-center">
                      <Award className="mr-3 text-primary" size={20} />
                      Are scholarships available?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Yes, we offer merit-based scholarships for students who demonstrate exceptional academic performance in our admission tests. Scholarships range from 25% to 100% fee waivers based on performance and financial need.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
