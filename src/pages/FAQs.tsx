import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  ClipboardCheck,
  MessageCircle,
  Trophy,
  Star,
  Medal,
  BarChart3,
  Calendar,
} from "lucide-react";
import FlyingIcons from "@/components/FlyingIcons";

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <FlyingIcons />
      <Navbar />

      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h1 className="font-display font-bold leading-tight mb-4 text-center">
  <span className="block sm:inline text-3xl sm:text-4xl md:text-5xl">
    Frequently Asked Questions
  </span>
</h1>


              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about IIT PATH
              </p>

              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="w-full max-w-3xl mx-auto px-2 sm:px-4"
            >
              <Accordion type="single" collapsible className="w-full">

                {/* FAQ ITEM TEMPLATE FUNCTION */}
                {[
                  {
                    icon: BookOpen,
                    question: "How do I enroll at IIT PATH?",
                    answer:
                      "You can enroll at IIT PATH by visiting our center in person, calling our admissions office at +91 22 2678 1234, or filling out the online enrollment form on our website.",
                  },
                  {
                    icon: GraduationCap,
                    question: "What are the eligibility criteria for different courses?",
                    answer:
                      "Eligibility varies: Foundation (Classes 8-10), JEE/NEET (11-12 & droppers), Olympiads (8-12 with strong academics).",
                  },
                  {
                    icon: Calendar,
                    question: "When do admissions open?",
                    answer:
                      "Admissions begin in April for the academic year and February for dropper batches. Early applications recommended.",
                  },
                  {
                    icon: Users,
                    question: "What is the faculty qualification at IIT PATH?",
                    answer:
                      "Our faculty includes IITians, PhDs, and expert subject mentors with years of teaching experience.",
                  },
                  {
                    icon: Award,
                    question: "How large are the batches?",
                    answer:
                      "Foundation: Max 25 | JEE/NEET: Max 30 | Olympiad: Max 15.",
                  },
                  {
                    icon: ClipboardCheck,
                    question: "What study material is provided?",
                    answer:
                      "We provide comprehensive modules, practice sheets, online resources, and updated revision notes.",
                  },
                  {
                    icon: BarChart3,
                    question: "How does IIT PATH track student performance?",
                    answer:
                      "Weekly tests, monthly evaluations, AI-based analytics, and All India Test Series.",
                  },
                  {
                    icon: Trophy,
                    question: "What is the success rate of IIT PATH students?",
                    answer:
                      "85%+ eligible students clear JEE Main. 1200+ selections in IITs & AIIMS with multiple top AIR ranks.",
                  },
                  {
                    icon: MessageCircle,
                    question: "What facilities are available at IIT PATH?",
                    answer:
                      "Digital library, modern classrooms, labs, study rooms, hostels, and transport services.",
                  },
                  {
                    icon: Users,
                    question: "Do you provide accommodation for students?",
                    answer:
                      "Yes, we offer safe hostel tie-ups with mess, study rooms, and security.",
                  },
                  {
                    icon: Star,
                    question: "What support is available for weak students?",
                    answer:
                      "Personal mentoring, extra classes, doubt sessions, and customized study plans.",
                  },
                  {
                    icon: Medal,
                    question: "What payment options are available?",
                    answer:
                      "Lump sum, installments, digital payments, sibling discounts, and early bird offers.",
                  },
                  {
                    icon: Award,
                    question: "Are scholarships available?",
                    answer:
                      "Yes. Merit-based scholarships from 25% to 100% based on performance.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45 }}
                  >
                    <AccordionItem value={`item-${i + 1}`}>
                      <AccordionTrigger className="flex items-center gap-3 text-left py-3">
                        <faq.icon className="text-primary flex-shrink-0" size={20} />
                        <span>{faq.question}</span>
                      </AccordionTrigger>

                      <AccordionContent className="text-muted-foreground">
                        <p className="mt-2 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}

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
