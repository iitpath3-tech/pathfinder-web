import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Topper {
  name: string;
  rank: string;
  achievement: string;
  college: string;
  quote: string;
}

const jeeToppers: Topper[] = [
  {
    name: "Arjun Mehta",
    rank: "AIR 32",
    achievement: "JEE Advanced 2024",
    college: "IIT Bombay (Computer Science)",
    quote: "The structured approach and personalized attention at IIT PATH were instrumental in my success.",
  },
  {
    name: "Sneha Patel",
    rank: "AIR 67",
    achievement: "JEE Advanced 2024",
    college: "IIT Delhi (Electrical Engineering)",
    quote: "Daily practice problems and weekly tests kept me consistently prepared throughout my journey.",
  },
  {
    name: "Rohan Gupta",
    rank: "AIR 124",
    achievement: "JEE Advanced 2024",
    college: "IIT Madras (Mechanical Engineering)",
    quote: "The faculty's deep conceptual clarity and doubt-clearing sessions made all the difference.",
  },
];

const neetToppers: Topper[] = [
  {
    name: "Aditi Sharma",
    rank: "AIR 45",
    achievement: "NEET 2024",
    college: "AIIMS Delhi",
    quote: "The integrated approach to Biology, Physics, and Chemistry made my preparation seamless.",
  },
  {
    name: "Karan Verma",
    rank: "AIR 98",
    achievement: "NEET 2024",
    college: "AIIMS Bhopal",
    quote: "Regular assessments and performance analytics helped me identify and improve weak areas.",
  },
  {
    name: "Meera Iyer",
    rank: "AIR 176",
    achievement: "NEET 2024",
    college: "Christian Medical College, Vellore",
    quote: "The subject-wise expert faculty and comprehensive study material were key to my success.",
  },
];

const ToppersCarousel = ({ category }: { category: "JEE" | "NEET" }) => {
  const toppers = category === "JEE" ? jeeToppers : neetToppers;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % toppers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [toppers.length]);

  const nextTopper = () => {
    setCurrentIndex((prev) => (prev + 1) % toppers.length);
  };

  const prevTopper = () => {
    setCurrentIndex((prev) => (prev - 1 + toppers.length) % toppers.length);
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          {category} <span className="text-gradient-primary">Toppers</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Celebrating the outstanding achievements of our students
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out">
          {toppers.map((topper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.3,
                scale: index === currentIndex ? 1 : 0.9,
                x: `${(index - currentIndex) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
              className="min-w-full px-4"
            >
              <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
                    {topper.name.charAt(0)}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                      {topper.name}
                    </h3>
                    
                    <p className="text-xl font-semibold text-primary mb-1">
                      {topper.rank} • {topper.achievement}
                    </p>
                    
                    <p className="text-muted-foreground mb-4">{topper.college}</p>
                    
                    <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                      "{topper.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prevTopper}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/30 transition-all duration-300 flex items-center justify-center text-primary"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextTopper}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/30 transition-all duration-300 flex items-center justify-center text-primary"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {toppers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-12 bg-primary" : "w-2 bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToppersCarousel;
