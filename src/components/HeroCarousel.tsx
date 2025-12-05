import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import banner1 from "@/assets/banner1.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import heroSuccess from "@/assets/hero-success.jpg";
import heroOlympiad from "@/assets/hero-olympiad.jpg";

const slides = [
  {
    image: banner1,
    title: "",
    subtitle: "",
    crop: true,
  },
  {
    image: heroClassroom,
    title: "India's Premier IIT-JEE & NEET Coaching",
    subtitle: "Expert Faculty, Proven Results, Guaranteed Success",
    crop: true,
  },
  {
    image: heroCampus,
    title: "15+ Years of Academic Excellence",
    subtitle: "Building Future Engineers & Doctors",
    crop: true,
  },
  {
    image: heroSuccess,
    title: "1200+ IIT & AIIMS Selections",
    subtitle: "Join Our League of Top Rankers",
    crop: true,
  },
  {
    image: heroOlympiad,
    title: "15 International Gold Medals",
    subtitle: "Dominating National & International Olympiads",
    crop: true,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleEnrollClick = () => navigate("/contact");

  return (
    <div className="relative overflow-hidden mt-16 md:mt-20 min-h-[400px] h-[500px] sm:h-[600px] md:h-[700px]">


      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image — UPDATED RULE */}
          <img
  src={slides[currentSlide].image}
  alt={slides[currentSlide].title || "Slide"}
  className={
    slides[currentSlide].crop
      ? "absolute inset-0 w-full h-full object-cover object-center"   // For hero images
      : "absolute inset-0 w-full h-full object-contain object-center bg-white" // For poster banner
  }
/>


          {/* Gradient Overlay (only if text exists) */}
          {(slides[currentSlide].title || slides[currentSlide].subtitle) && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          )}

          {/* Text */}
          {(slides[currentSlide].title || slides[currentSlide].subtitle) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">

                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-xl md:text-2xl lg:text-3xl mb-8"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    variant="hero"
                    size="lg"
                    className="sm:size-xl"
                    onClick={handleEnrollClick}
                  >
                    Enroll Now
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="sm:size-xl bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                  >
                    Download Brochure
                  </Button>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-12 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;