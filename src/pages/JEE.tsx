import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FlyingIcons from "@/components/FlyingIcons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const JEE = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const examPatternRef = useRef<HTMLDivElement>(null);
  const jeeAdvancedRef = useRef<HTMLDivElement>(null);
  const admissionRef = useRef<HTMLDivElement>(null);

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

    // Animate Exam Pattern Section
    if (examPatternRef.current) {
      gsap.from(examPatternRef.current.querySelectorAll(".pattern-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: examPatternRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate JEE Advanced Section
    if (jeeAdvancedRef.current) {
      gsap.from(jeeAdvancedRef.current.querySelectorAll(".advanced-card, .comparison-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: jeeAdvancedRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate Admission Section
    if (admissionRef.current) {
      gsap.from(admissionRef.current.querySelectorAll(".admission-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: admissionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FlyingIcons />
      <Navbar />
      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 opacity-90"></div>
            {/* Placeholder for background image */}
            <div className="absolute inset-0 bg-[url('/jeestudents.png')] bg-cover bg-center opacity-20"></div>
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
                  All about <span className="text-yellow-300">JEE</span>
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                  Engineering Excellence Through Joint Entrance Examination
                </p>
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                ></motion.div>
                <p className="text-2xl font-display text-white">
                  Your Gateway to Premier Engineering Institutions
                </p>
                <p className="text-lg text-white/90 mt-4">
                  IITs, NITs, IIITs and GFTIs
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* JEE Main Overview Section */}
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
                JEE Main Examination
              </h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
                  JEE Main Overview
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p>JEE Main is conducted twice a year. Schedule of exam does not clash with Board Exams.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p>NTA also conducts B.Arch & B.Planning exams scheduled along with JEE Main twice a year.</p>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl order-1 lg:order-2"
              >
                <div className="bg-white/20 rounded-xl p-6 mb-6">
                  <img 
                    src="/jee.jpg" 
                    alt="JEE Main Exam" 
                    className="w-full h-84 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Key Features
                </h3>
                <p className="mb-4">
                  JEE Main serves as the gateway to prestigious engineering institutions across India, including NITs, IIITs, and GFTIs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scheme & Mode of Examination Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50" ref={examPatternRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Scheme & Mode of Examination
              </h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="pattern-card bg-white rounded-xl p-6 shadow-md border border-border hover-lift"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  Paper 1 (B.E./B. Tech.)
                </h3>
                <p className="text-gray-700">
                  Computer Based Test (CBT) mode only.
                </p>
              </motion.div>

              <motion.div
                className="pattern-card bg-white rounded-xl p-6 shadow-md border border-border hover-lift"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  Paper 2A (B. Arch)
                </h3>
                <p className="text-gray-700">
                  Mathematics and Aptitude Test in CBT mode. Drawing Test in pen & paper mode on A4 sheet.
                </p>
              </motion.div>

              <motion.div
                className="pattern-card bg-white rounded-xl p-6 shadow-md border border-border hover-lift md:col-span-1 lg:col-span-1"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-2 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  Paper 2B (B. Planning)
                </h3>
                <p className="text-gray-700">
                  Mathematics, Aptitude Test, and Planning Based Questions in Computer Based Test (CBT) mode only.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* JEE Advanced Section */}
        <section className="section-padding bg-background" ref={jeeAdvancedRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                JEE Advanced
              </h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div
                className="advanced-card bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white shadow-xl"
              >
                <h3 className="text-2xl font-display font-bold mb-4">
                  Key Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>This is the second stage of entrance test for admissions to IITs, IISc, IIST, IISEs for students who qualify in JEE Main.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Only top 2,50,000 successful candidates of JEE Main are eligible to write this exam.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Conducted by the seven zonal IITs — IIT Bombay, IIT Delhi, IIT Guwahati, IIT Kanpur, IIT Kharagpur, IIT Madras and IIT Roorkee.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Two objective online papers, each of three hours duration with equal weightage given to Physics, Chemistry and Mathematics.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>The JEE Advanced exam is held every year tentatively in the 3rd week of May.</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-white/30">
                  <p className="text-white/90">
                    For more details kindly visit <a href="http://jeeadv.ac.in" className="underline hover:text-yellow-300">http://jeeadv.ac.in</a>
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="comparison-card bg-white rounded-2xl p-6 shadow-lg border border-border mb-8">
                  <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
                    JEE Main vs JEE Advanced
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspect</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">JEE Main</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">JEE Advanced</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Students Qualifying</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Top 2,50,000</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">JEE Main qualifiers</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Duration</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 hours</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6 hours (2 papers, 3 hrs each)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mode</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Online</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Online</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Paper Type</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Objective type + Numerical Questions (PCM)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Two Objective Papers (PCM) 3 hrs each</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Frequency</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Twice a year</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Once a year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-700 mb-2">
                      <strong>JEE Main:</strong> For more details kindly visit <a href="https://jeemain.nta.nic.in" className="text-primary hover:underline">https://jeemain.nta.nic.in</a>
                    </p>
                    <p className="text-gray-700">
                      <strong>JEE Advanced:</strong> For more details kindly visit <a href="http://jeeadv.ac.in" className="text-primary hover:underline">http://jeeadv.ac.in</a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section className="section-padding bg-gradient-to-br from-orange-50 to-amber-50" ref={admissionRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Admission Process
              </h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <div className="advanced-card bg-white rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-display font-bold mb-6 text-foreground">
                Joint Seat Allocation Authority (JoSAA)
              </h3>
              <p className="text-gray-700 mb-6">
                Admission to IITs, NITs, IIITs and GFTIs will be on participation through Joint Seat Allocation Authority (JoSAA) on the basis of:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p><strong>All India Rank (AIR) in JEE Advanced</strong> - for IITs</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p><strong>All India Rank (AIR) in JEE Main</strong> - for NITs, IIITs and GFTIs</p>
                </li>
              </ul>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-display font-semibold mb-3 text-foreground">
                  Eligibility Criteria
                </h4>
                <p className="text-gray-700">
                  Candidates should have secured at least <strong>75% marks</strong> in the 12th class examination, or be in the <strong>top 20 percentile</strong> in the 12th class examination conducted by the respective Boards.
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700">
                  For more details kindly visit <a href="http://josaa.nic.in" className="text-primary hover:underline">josaa.nic.in</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 opacity-90"></div>
            {/* Placeholder for background image */}
            <div className="absolute inset-0 bg-[url('/placeholder-jee-bg.jpg')] bg-cover bg-center opacity-20"></div>
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
                  Ready to Conquer JEE?
                </h2>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-12">
                  Join IIT PATH and get the edge you need to excel in JEE Main & Advanced
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 font-bold py-4 px-8 rounded-full text-lg shadow-2xl min-w-[200px] transition-all duration-300"
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

export default JEE;