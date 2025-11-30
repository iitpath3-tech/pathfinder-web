import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Award, ClipboardCheck, Calendar, DollarSign, Trophy, Star, Medal } from "lucide-react";
import FlyingIcons from "@/components/FlyingIcons";

const FeeStructure = () => {
  // Program data
  const programs = [
    {
      title: "Foundation Program",
      subtitle: "Classes 8-10",
      color: "from-blue-500 to-cyan-500",
      batches: [
        { type: "Weekend Batch", duration: "1 Year", fee: "₹25,000", features: "PCM/PMB, 8 hours/week" },
        { type: "Regular Batch", duration: "1 Year", fee: "₹45,000", features: "PCM/PMB, 15 hours/week" },
        { type: "Fast Track", duration: "6 Months", fee: "₹30,000", features: "Intensive, 20 hours/week" }
      ]
    },
    {
      title: "JEE Main & Advanced",
      subtitle: "Engineering Aspirants",
      color: "from-primary to-blue-600",
      batches: [
        { type: "2-Year Integrated", duration: "Class 11-12", fee: "₹1,25,000", features: "Complete syllabus, DPPs, Tests" },
        { type: "1-Year Target", duration: "Class 12/Dropper", fee: "₹95,000", features: "Revision, Tests, Rank Booster" },
        { type: "Rank Booster", duration: "6 Months", fee: "₹65,000", features: "Intensive, Mock Tests, Analysis" }
      ]
    },
    {
      title: "NEET & AIIMS",
      subtitle: "Medical Aspirants",
      color: "from-green-500 to-emerald-500",
      batches: [
        { type: "2-Year Integrated", duration: "Class 11-12", fee: "₹1,35,000", features: "Complete syllabus, DPPs, Tests" },
        { type: "1-Year Target", duration: "Class 12/Dropper", fee: "₹1,05,000", features: "Revision, Tests, Rank Booster" },
        { type: "Crash Course", duration: "3 Months", fee: "₹55,000", features: "Intensive, Mock Tests, Analysis" }
      ]
    },
    {
      title: "Olympiad Training",
      subtitle: "Competitive Excellence",
      color: "from-purple-500 to-indigo-500",
      batches: [
        { type: "Foundation Olympiad", duration: "1 Year", fee: "₹35,000", features: "Classes 8-10, NTSE/NMTC" },
        { type: "Advanced Olympiad", duration: "1 Year", fee: "₹55,000", features: "Classes 11-12, PRMO/RMO/INO" },
        { type: "Specialized Training", duration: "6 Months", fee: "₹40,000", features: "Subject-specific, Intensive" }
      ]
    }
  ];

  const benefits = [
    { title: "Installment Plans", desc: "Flexible payment options with zero interest", icon: "💳" },
    { title: "Early Bird Discount", desc: "10% discount for early admissions", icon: "⏰" },
    { title: "Scholarships", desc: "Merit-based scholarships for top performers", icon: "🎓" },
    { title: "Sibling Discount", desc: "15% discount for siblings", icon: "👨‍👩‍👧‍👦" },
    { title: "Referral Bonus", desc: "₹5,000 credit for successful referrals", icon: "🎁" }
  ];

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
                Fee <span className="text-gradient-primary">Structure</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Transparent and affordable pricing for quality education
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 shadow-xl border border-primary/20 mb-16 hover:shadow-2xl transition-all duration-500">
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
                  At IIT PATH, we believe in making quality education accessible to all deserving students. Our fee structure is designed to be transparent, affordable, and flexible to accommodate different financial situations.
                </p>
              </div>
            </motion.div>
            
            {/* Program Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                >
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${program.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300 flex items-center">
                          {index === 0 && <BookOpen className="mr-2 text-primary" size={24} />}
                          {index === 1 && <GraduationCap className="mr-2 text-primary" size={24} />}
                          {index === 2 && <Award className="mr-2 text-primary" size={24} />}
                          {index === 3 && <Trophy className="mr-2 text-primary" size={24} />}
                          {program.title}
                        </h2>
                        <p className="text-muted-foreground">{program.subtitle}</p>
                      </div>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {program.batches.map((batch, batchIndex) => (
                        <motion.div
                          key={batchIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: batchIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 10 }}
                          className="p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-foreground flex items-center">
                              <ClipboardCheck className="mr-2 text-primary" size={16} />
                              {batch.type}
                            </h3>
                            <span className="text-lg font-bold text-gradient-primary">{batch.fee}</span>
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Calendar className="mr-1" size={14} />
                              {batch.duration}
                            </span>
                            <span>{batch.features}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-display font-bold text-center mb-12 text-gradient-accent flex items-center justify-center">
                <Star className="mr-3" size={32} />
                Payment Options & Scholarships
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/30"
                  >
                    <div className="text-3xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors duration-300 flex items-center">
                      <Medal className="mr-2 text-primary" size={20} />
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20"
            >
              <h2 className="text-3xl font-display font-bold mb-4">Have Questions About Our Fee Structure?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                For more information about our fee structure, payment options, or scholarship opportunities, please contact our admissions office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-card rounded-xl p-6 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-muted-foreground">+91 22 2678 1234</p>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-muted-foreground">info@iitpath.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeeStructure;
