import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Brain, Target, Star } from "lucide-react";
import FlyingIcons from "@/components/FlyingIcons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FoundationBuilder = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const importanceRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate Hero Section
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll("h1, p"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate Importance Cards
    if (importanceRef.current) {
      gsap.from(importanceRef.current.querySelectorAll(".importance-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: importanceRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate Benefits Cards
    if (benefitsRef.current) {
      gsap.from(benefitsRef.current.querySelectorAll(".benefit-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
      });
    }

    ScrollTrigger.refresh();
  }, []);

  const benefits = [
    {
      icon: Target,
      title: "Prepares the child for various competitive exams",
      description: "Early exposure builds confidence and familiarity with exam patterns",
    },
    {
      icon: Brain,
      title: "Hones the academic skills",
      description: "Develops critical thinking and problem-solving abilities",
    },
    {
      icon: Star,
      title: "Out of box & beyond school books thinking skills",
      description: "Encourages creative and innovative approaches to learning",
    },
    {
      icon: GraduationCap,
      title: "Ahead of time preparation increases level of understanding",
      description: "Deepens conceptual clarity and retention",
    },
    {
      icon: Users,
      title: "Places the child at par with highly competitive peer group",
      description: "Creates a stimulating learning environment with motivated peers",
    },
  ];

  const importancePoints = [
    {
      icon: Target,
      title: "Talent Identification",
      description: "Helps identify scholastic talent and aptitude in students early",
    },
    {
      icon: Brain,
      title: "Skill Development",
      description: "Develops intellectual skills and independent thinking abilities",
    },
    {
      icon: Star,
      title: "Platform & Exposure",
      description: "Provides platform and exposure to help students perform their best",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <FlyingIcons />
      <Navbar />

      <main className="pt-20">

        {/* Hero Section with Background Image */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/kidsbgimg1.webp" 
              alt="Children learning" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom relative z-10" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto px-4"
            >
              <div className="inline-block bg-black/30 backdrop-blur-sm rounded-2xl p-8">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                  Foundation <span className="text-yellow-300">Builder</span>
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                  Nurturing Young Minds - Std. VII to X
                </p>
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                ></motion.div>
                <p className="text-2xl font-display text-white">
                  Stay ahead of the competition by starting early
                </p>
                <p className="text-lg text-white/90 mt-4">
                  Handholding and nurturing children
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="section-padding bg-background">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Developing Inquisitiveness into Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Building the First Step Towards Nurturing Young Minds
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                We at IIT PATH are strongly motivated and dedicated to develop the inquisitiveness
                and curiosity in children into vision. Foundation Builder Program is the first step
                towards nurturing the young minds in our country.
              </p>
              <p className="text-gray-700 text-lg">
                Learning at IIT PATH is a delightful experience with experiential learning and
                modern teaching methodology.
              </p>
            </motion.div>

            {/* Right Column Box */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl order-1 lg:order-2"
            >
              <BookOpen className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-2xl font-display font-bold mb-4">
                Strengthening the fundamentals of Math & Science
              </h3>
              <p className="mb-4 text-lg">
                The foundation of proficiency in Science and Math lies in conceptual clarity,
                which we focus on building in every student.
              </p>
              <p className="text-lg">
                Students learn from highly qualified faculty who make these subjects interesting,
                engaging, and easy to understand.
              </p>
            </motion.div>
          </div>
        </section>

        {/* IMPORTANCE SECTION */}
        <section className="section-padding bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container-custom">

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Importance of competitive exams
              </h2>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Paragraph Box */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border"
              >
                <p className="text-gray-700 mb-6 text-lg">
                  Preparing for competitive exams helps identify students’ talent and aptitude.
                  Proper exposure gives them the confidence and platform to perform their best.
                </p>
                <p className="text-gray-700 text-lg">
                  These exams strengthen factual knowledge and develop the intellectual ability to
                  apply concepts independently and think objectively.
                </p>
              </motion.div>

              {/* Cards */}
              <div ref={importanceRef} className="flex flex-col space-y-6">
                {importancePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="importance-card bg-white rounded-xl p-6 shadow-md border border-border hover-lift"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <point.icon className="h-8 w-8 text-primary mr-4 mt-1" />
                      <div>
                        <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                          {point.title}
                        </h3>
                        <p className="text-gray-700">{point.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="section-padding bg-background">
          <div className="container-custom">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Benefits of IIT PATH Foundation Builder
              </h2>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <div
              ref={benefitsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-card bg-white rounded-xl p-6 shadow-md border border-border hover-lift flex flex-col h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-primary-light mr-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mt-auto">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/kidsbgimg1.webp"
              alt="Children learning"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block bg-black/30 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Start Building Your Foundation Today
                </h2>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-12">
                  Give your child the head start they deserve with our Foundation Builder Program
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-bold py-4 px-8 rounded-full text-lg shadow-2xl min-w-[200px] transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FoundationBuilder;
