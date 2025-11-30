import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                About <span className="text-gradient-primary">IIT PATH</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Building excellence in education since 2009
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 shadow-xl border border-primary/20 mb-16 hover:shadow-2xl transition-all duration-500">
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
                  Founded in 2009, IIT PATH has emerged as one of India's premier coaching institutes for IIT-JEE, NEET, and Olympiad preparation. With over 15 years of excellence, we have consistently produced top rankers who have secured admissions to prestigious institutions like IITs, NITs, AIIMS, and other renowned universities.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50 h-full hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">V</span>
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gradient-primary">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To nurture and develop the brightest minds of the nation by providing world-class education and creating an environment that fosters intellectual growth, critical thinking, and innovation.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-accent/50 h-full hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-red-600 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">M</span>
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gradient-accent">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower students with comprehensive knowledge, analytical skills, and confidence required to excel in competitive examinations and become future leaders in their respective fields.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-display font-bold text-center mb-12 text-gradient-primary">Why Choose IIT PATH?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Expert Faculty", desc: "25+ IITians and PhDs on our faculty team", color: "from-blue-500 to-cyan-500" },
                  { title: "Proven Results", desc: "1200+ selections in IITs and AIIMS", color: "from-primary to-blue-600" },
                  { title: "Study Material", desc: "Comprehensive material by subject matter experts", color: "from-purple-500 to-indigo-500" },
                  { title: "Assessments", desc: "Regular tests with detailed performance analysis", color: "from-green-500 to-emerald-500" },
                  { title: "Personalized Attention", desc: "Mentoring for each student", color: "from-yellow-500 to-orange-500" },
                  { title: "Test Series", desc: "All India Test Series to benchmark preparation", color: "from-red-500 to-pink-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-center mb-12 text-gradient-accent">Our Achievements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { number: "15+", label: "International Gold Medals", desc: "In various Olympiads", color: "from-yellow-400 to-orange-500" },
                  { number: "1200+", label: "Selections", desc: "In IITs and AIIMS", color: "from-blue-500 to-cyan-500" },
                  { number: "85%", label: "Selection Rate", desc: "In JEE Main for eligible students", color: "from-green-500 to-emerald-500" }
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="group text-center bg-gradient-to-br from-card to-muted rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-accent/30"
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-display font-bold text-2xl">{achievement.number}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors duration-300">{achievement.label}</h3>
                    <p className="text-muted-foreground">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
