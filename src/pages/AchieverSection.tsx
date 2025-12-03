import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Star, Trophy, Medal } from "lucide-react";

interface Achiever {
  name: string;
  exam: string;
  rank: string;
  year: string;
  college?: string;
  quote?: string;
}

const achieversData: Achiever[] = [
  {
    name: "Atharva Chaudhry",
    exam: "HBBVS",
    rank: "Gold Medalist",
    year: "2024",
    college: "IIT Bombay (Computer Science)",
    quote: "The structured approach and personalized attention at IIT PATH were instrumental in my success."
  },
  {
    name: "Sneha Patel",
    exam: "JEE Advanced",
    rank: "AIR 67",
    year: "2024",
    college: "IIT Delhi (Electrical Engineering)",
    quote: "Daily practice problems and weekly tests kept me consistently prepared throughout my journey."
  },
  {
    name: "Rohan Gupta",
    exam: "JEE Advanced",
    rank: "AIR 124",
    year: "2024",
    college: "IIT Madras (Mechanical Engineering)",
    quote: "The faculty's deep conceptual clarity and doubt-clearing sessions made all the difference."
  },
  {
    name: "Anushka Kulkarni",
    exam: "NEET",
    rank: "AIR 24",
    year: "2024",
    college: "AIIMS Delhi",
    quote: "The integrated approach to Biology, Physics, and Chemistry made my preparation seamless."
  },
  {
    name: "Rasika Mal",
    exam: "NEET",
    rank: "AIR 55",
    year: "2024",
    college: "Maulana Azad Medical College, Delhi",
    quote: "The subject-wise expert faculty and comprehensive study material were key to my success."
  },
  {
    name: "Ekansh Ravishankar",
    exam: "JEE Advanced",
    rank: "AIR 49",
    year: "2024",
    college: "IIT, Bombay",
    quote: "The subject-wise expert faculty and comprehensive study material were key to my success."
  },
  {
    name: "Aaryan Dangi",
    exam: "JEE Advanced",
    rank: "AIR 24",
    year: "2024",
    college: "IIT, Bombay",
    quote: "The integrated approach to Mathematics, Physics, and Chemistry made my preparation seamless."
  },
  {
    name: "Stuti Maurya",
    exam: "IOQM",
    rank: "Qualifier",
    year: "2024",
    quote: "Regular assessments and performance analytics helped me identify and improve weak areas."
  }
];

const AchieverCard = ({ achiever, index }: { achiever: Achiever; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-card to-muted rounded-2xl shadow-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 h-full"
    >
      <div className="flex flex-col h-full">
        {/* Header with medal/rank indicator */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
            {achiever.name.charAt(0)}
          </div>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold flex items-center">
            <Trophy className="h-4 w-4 mr-1" />
            {achiever.rank}
          </div>
        </div>

        {/* Student Info */}
        <div className="mb-4">
          <h3 className="text-xl font-display font-bold mb-1 text-foreground">
            {achiever.name}
          </h3>
          <p className="text-primary font-semibold mb-1">
            {achiever.exam} {achiever.year}
          </p>
          {achiever.college && (
            <p className="text-muted-foreground text-sm mb-3">
              {achiever.college}
            </p>
          )}
        </div>

        {/* Quote */}
        {achiever.quote && (
          <div className="mt-auto pt-4 border-t border-border">
            <blockquote className="text-muted-foreground italic">
              "{achiever.quote}"
            </blockquote>
          </div>
        )}

        {/* Rating stars */}
        <div className="flex items-center mt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AchieverSection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our <span className="text-gradient-primary">Achievers</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
              >
                Celebrating the outstanding achievements of our students who have excelled in various competitive examinations
              </motion.p>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { number: "1000+", label: "Selections" },
                { number: "12", label: "International Gold Medals" },
                { number: "14+", label: "Years of Excellence" },
                { number: "98%", label: "Success Rate" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 text-center border border-primary/10"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Achievers Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-center">
                Student <span className="text-gradient-accent">Achievements</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {achieversData.map((achiever, index) => (
                  <AchieverCard key={index} achiever={achiever} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Achievement Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10"
            >
              <div className="text-center max-w-3xl mx-auto">
                <Medal className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-display font-bold mb-4">
                  Why Choose <span className="text-gradient-primary">IIT PATH</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our proven track record speaks for itself. With over 14 years of excellence, 
                  we've helped thousands of students achieve their dreams through personalized 
                  coaching and expert guidance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Expert Faculty", description: "Learn from experienced educators with proven track records" },
                    { title: "Comprehensive Study Material", description: "Access to exclusive, regularly updated resources" },
                    { title: "Personalized Attention", description: "Small batches for individualized mentorship" }
                  ].map((feature, index) => (
                    <div key={index} className="bg-card p-6 rounded-xl border border-border">
                      <h3 className="font-display font-bold text-lg mb-2 text-primary">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
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

export default AchieverSection;