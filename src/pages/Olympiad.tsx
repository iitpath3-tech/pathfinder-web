import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FlyingIcons from "@/components/FlyingIcons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Trophy, Star, Award, Target, Brain, BookOpen } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Olympiad = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement>(null);
  const selectionRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

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

    // Animate Introduction Section
    if (introductionRef.current) {
      gsap.from(introductionRef.current.querySelectorAll(".intro-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: introductionRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate Selection Section
    if (selectionRef.current) {
      gsap.from(selectionRef.current.querySelectorAll(".selection-card, .training-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: selectionRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate Process Section
    if (processRef.current) {
      gsap.from(processRef.current.querySelectorAll(".process-card"), {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  const processSteps = [
    {
      title: "National Standard Examinations (NSEs)",
      description: ""
    },
    {
      title: "Indian National Olympiad (INO) examinations",
      description: "The eligible students from stage one can participate in INO in respective subjects."
    },
    {
      title: "Orientation-Cum-Selection Camps (OCSC)",
      description: "For these camps, about 35 students in each subject will be selected from INO on performance basis."
    },
    {
      title: "Pre Departure Training (PDT)",
      description: "These students will have a Pre-Departure Training (PDT) for two weeks."
    },
    {
      title: "International Olympiad (IO)",
      description: "Participation in International Olympiad (IO) of the selected students. (Physics, Chemistry, Biology, Astronomy organized by IAPT)"
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
            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 opacity-90"></div>
            {/* Placeholder for background image */}
            <div className="absolute inset-0 bg-[url('/olympiad.png')] bg-cover bg-center opacity-20"></div>
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
                  Olympiad <span className="text-yellow-300">Preparation</span>
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                  At IIT PATH
                </p>
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                ></motion.div>
                <p className="text-2xl font-display text-white">
                  Excel at the Highest Level of Academic Competition
                </p>
                <p className="text-lg text-white/90 mt-4">
                  Achieve international recognition with our specialized Olympiad training
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-background" ref={introductionRef}>
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
                  Why Olympiads Matter
                </h2>
                <p className="text-gray-700 mb-4 text-lg">
                  Olympiads are internationally recognized competitions in various fields of knowledge. They are the highest level of examinations and are hosted by different countries every year. Participation in any of the olympiads is worldwide recognised and is considered as a great achievement.
                </p>
                <p className="text-gray-700 text-lg">
                  International olympiads are held every year in Mathematics, Physics, Chemistry, Biology, Astronomy and Junior Science.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl order-1 lg:order-2"
              >
                <div className="bg-white/20 rounded-xl p-6 mb-6">
                  <img 
                    src="/olympiad2.png" 
                    alt="Olympiad winners" 
                    className="w-full h-66 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Our Olympiad Success
                </h3>
                <p className="mb-4">
                  IIT PATH has attained an exalted prestige producing the best results at olympiads (Physics, Chemistry, Mathematics, Astronomy & Biology) year-after-year.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    12 Gold Medals
                  </div>
                  <div className="bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                    7 Silver Medals
                  </div>
                  <div className="bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                    3 Bronze Medals
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <motion.div
                className="intro-card bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground flex items-center">
                  <BookOpen className="mr-3 text-primary" />
                  Specialized Study Material
                </h3>
                <p className="text-gray-700">
                  We provide specialized study material with assignments & tests. The fact that these olympiads are held internationally and, our students are successful in them consistently, is a testimony to our high standard of teaching & impeccable quality of teachers.
                </p>
              </motion.div>

              <motion.div
                className="intro-card bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground flex items-center">
                  <Target className="mr-3 text-primary" />
                  Personalized Approach
                </h3>
                <p className="text-gray-700">
                  After this analysis, we make a personalized study plan to focus on the weak areas and bring out the best of the students. If a non-IIT PATH meritorious student wishes to join IIT PATH to prepare for olympiads, he/she has to go through an entrance test along with a personal interview.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Selection Process Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 to-indigo-50" ref={selectionRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                Selection Process
              </h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="selection-card bg-white rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-display font-bold mb-6 text-foreground flex items-center">
                  <Trophy className="mr-3 text-purple-600" />
                  How We Select Our Olympiad Batch
                </h3>
                <p className="text-gray-700 mb-6">
                  For the selection of this batch, we conduct an objective test and select the top 50 students across Mumbai. Separate batches for PCMB will be formed and students will be mentored by senior most faculty of IIT PATH.
                </p>
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <Star className="text-yellow-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Only the most meritorious students are selected to ensure the highest quality of peer learning.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="training-card bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Brain className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">
                    Advanced Training Approach
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-1">
                      <span className="text-purple-900 text-sm">1</span>
                    </div>
                    <p>Research-oriented problem solving techniques</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-1">
                      <span className="text-purple-900 text-sm">2</span>
                    </div>
                    <p>Advanced concept application beyond textbooks</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-1">
                      <span className="text-purple-900 text-sm">3</span>
                    </div>
                    <p>Regular workshops with international experts</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-1">
                      <span className="text-purple-900 text-sm">4</span>
                    </div>
                    <p>Mock international competitions and peer reviews</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* International Olympiad Process Section */}
        <section className="section-padding bg-background" ref={processRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                International Olympiad Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                The International Olympiad (IO) programme follows a five stage process. All the subsequent stages are conducted by Homi Bhabha Centre for Science Education (HBCSE), Mumbai.
              </p>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="process-card bg-white rounded-xl p-6 shadow-md border border-border hover-lift text-center flex flex-col h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mx-auto">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-3 flex-grow">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-sm text-gray-600 mt-2">
                      {step.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <Award className="text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                    Important Notes
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Note:</strong> National Board for Higher Mathematics has been organizing Mathematical Olympiad since 1990. For details, visit <a href="http://www.nbhm.dae.gov.in" className="text-primary hover:underline">www.nbhm.dae.gov.in</a>
                  </p>
                  <p className="text-gray-700">
                    For more details, visit website: <a href="http://www.iapt.org.in" className="text-primary hover:underline">www.iapt.org.in</a> | E-mail: <a href="mailto:iapt@vsnl.net" className="text-primary hover:underline">iapt@vsnl.net</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 opacity-90"></div>
            {/* Placeholder for background image */}
            <div className="absolute inset-0 bg-[url('/olympiad.png')] bg-cover bg-center opacity-20"></div>
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
                  Excel in Olympiads with IIT PATH
                </h2>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-12">
                  Join our specialized Olympiad training program and compete at the international level
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 font-bold py-4 px-8 rounded-full text-lg shadow-2xl min-w-[200px] transition-all duration-300"
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

export default Olympiad;