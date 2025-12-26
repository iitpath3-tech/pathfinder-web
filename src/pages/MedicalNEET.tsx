import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FlyingIcons from "@/components/FlyingIcons";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BookOpen, Users, GraduationCap, ClipboardCheck, Award, Stethoscope } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MedicalNEET = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const preparationRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

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

    // Animate Preparation Section
    if (preparationRef.current) {
      gsap.from(preparationRef.current.querySelectorAll(".preparation-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: preparationRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate About Section
    if (aboutRef.current) {
      gsap.from(aboutRef.current.querySelectorAll(".about-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate Benefits Section
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
  }, []);

  const preparationBenefits = [
    {
      icon: BookOpen,
      title: "Extensive and well-researched study material",
      description: "Comprehensive resources designed by experts to cover all NEET topics thoroughly"
    },
    {
      icon: Users,
      title: "Highly competitive peer group",
      description: "Learn alongside motivated students pushing each other to excel"
    },
    {
      icon: GraduationCap,
      title: "Qualified faculty",
      description: "Experienced teachers with deep subject knowledge and teaching expertise"
    },
    {
      icon: Award,
      title: "Competitive atmosphere with personalized attention",
      description: "Balanced environment that fosters competition while providing individual support"
    },
    {
      icon: ClipboardCheck,
      title: "One on one doubt sessions",
      description: "Personalized attention to clear all your doubts and strengthen weak areas"
    },
    {
      icon: Stethoscope,
      title: "Incorporates easy to use tips and tricks",
      description: "Smart techniques to solve problems faster and more accurately"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FlyingIcons />
      <Navbar />
      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-green-900 to-teal-900 opacity-90"></div>
            {/* Placeholder for background image */}
            <div className="absolute inset-0 bg-[url('/neet.png')] bg-cover bg-center opacity-20"></div>
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
                  Pursue your dream as a <span className="text-green-300">Doctor</span>
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                  Excellence in Medical Entrance Preparation
                </p>
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-8"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                ></motion.div>
                <p className="text-2xl font-display text-white">
                  Your Journey to a Medical Career Starts Here
                </p>
                <p className="text-lg text-white/90 mt-4">
                  Comprehensive NEET preparation with expert guidance
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                  Why Choose Medicine as Your Career?
                </h2>
                <p className="text-gray-700 mb-4 text-lg">
                  Your zeal to serve people, critical thinking and working diligently under pressure can present a plethora of career options for you. If the aforementioned qualities are merged with compassion then medicine is definitely an ideal career path for you.
                </p>
                <p className="text-gray-700 text-lg">
                  Medicine is a career that offers opportunities to improve people's health and save lives. So, if you think you have that zeal to serve people, then choose Medicine as a career.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-600 to-teal-700 rounded-2xl p-8 text-white shadow-xl order-1 lg:order-2"
              >
                <div className="bg-white/20 rounded-xl p-6 mb-6">
                  <img 
                    src="/neet2.webp" 
                    alt="Medical students studying" 
                    className="w-full h-69 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Expert Medical Preparation
                </h3>
                <p className="mb-4">
                  Our specialized program integrates Biology, Physics, and Chemistry to provide a holistic preparation experience for NEET.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Preparation Benefits Section */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-teal-50" ref={preparationRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                NEET Preparation at IIT PATH
              </h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preparationBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="preparation-card bg-white rounded-xl p-6 shadow-md border border-border hover-lift flex flex-col h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-100 mr-4">
                      <benefit.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mt-auto">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About NEET Section */}
        <section className="section-padding bg-background" ref={aboutRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                All About NEET
              </h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-border"
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
                  NEET Overview
                </h3>
                <p className="text-gray-700 mb-4">
                  Central Government has established the National Testing Agency to conduct entrance examination for admission/fellowship to higher educational institutions.
                </p>
                <p className="text-gray-700 mb-4">
                  The responsibility of NTA is limited to the conduct of the entrance test NEET-(UG), declaration of result and providing All India Rank to the Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India for counselling of 15% All India Quota Seats and all seats of Deemed Universities/Central Universities/ESIC & AFMC including Delhi University (DU), BHU & AMU and providing the result to the State Counselling Authorities and admitting Institutions.
                </p>
                <p className="text-gray-700">
                  Admission to all seats of MBBS/BDS will be done through NEET(UG). Following are the seats available under different quotas:
                </p>
                
                <ul className="list-disc pl-8 mt-6 space-y-2 text-gray-700">
                  <li>All India Quota Seats</li>
                  <li>State Government Quota Seats</li>
                  <li>Central Institutions/Universities/Deemed Universities</li>
                  <li>Central Pool Quota Seats</li>
                  <li>State/Management/NRI Quota seats in Private Medical/Dental Colleges or any Private University</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="about-card bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
                  <h3 className="text-2xl font-display font-bold mb-4">
                    Entrance Test Date
                  </h3>
                  <p className="text-white/90">
                    National Eligibility Cum Entrance Test NEET(UG) is usually conducted in 1st week of May. The duration of the test will be 3 hours (NEET is conducted offline).
                  </p>
                </div>

                <div className="about-card bg-white rounded-2xl p-6 shadow-lg border border-border">
                  <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                    NEET Exam Pattern
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-border rounded-lg">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="py-3 px-4 text-left font-display font-semibold text-foreground">Subject</th>
                          <th className="py-3 px-4 text-left font-display font-semibold text-foreground">Number of MCQs</th>
                          <th className="py-3 px-4 text-left font-display font-semibold text-foreground">Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 text-foreground">Physics</td>
                          <td className="py-3 px-4 text-foreground">45 (Section A - 35, Section B - 15)</td>
                          <td className="py-3 px-4 text-foreground">180</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 text-foreground">Chemistry</td>
                          <td className="py-3 px-4 text-foreground">45 (Section A - 35, Section B - 15)</td>
                          <td className="py-3 px-4 text-foreground">180</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-foreground">Biology (Botany & Zoology)</td>
                          <td className="py-3 px-4 text-foreground">90 (Section A - 35, Section B - 15)</td>
                          <td className="py-3 px-4 text-foreground">360</td>
                        </tr>
                        <tr className="bg-gray-50 font-bold">
                          <td className="py-3 px-4 text-foreground">Total</td>
                          <td className="py-3 px-4 text-foreground">180</td>
                          <td className="py-3 px-4 text-foreground">720</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-green-900 to-teal-900 opacity-90"></div>
            {/* Placeholder for background image */}
            <div className="absolute inset-0 bg-[url('/neet.png')] bg-cover bg-center opacity-20"></div>
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
                  Start Your Medical Journey Today
                </h2>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-12">
                  Join IIT PATH and take the first step toward becoming a doctor
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-400 to-teal-500 text-white hover:from-green-500 hover:to-teal-600 font-bold py-4 px-8 rounded-full text-lg shadow-2xl min-w-[200px] transition-all duration-300"
                   onClick={() => navigate('/contact')}
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

export default MedicalNEET;