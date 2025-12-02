import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
    { name: "Foundation Builder", path: "/foundation-builder" },
    { name: "Engineering (JEE)", path: "/jee" },
    { name: "Medical (NEET)", path: "/medical-neet" },
    { name: "Olympiad", path: "/olympiad" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-morphism shadow-lg" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center hover-scale">
            <img 
              src="/logo.png" 
              alt="IIT PATH Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                location.pathname === "/about" ? "text-primary" : ""
              }`}
            >
              About Us
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <a href="/courses"> <button className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium">
                Courses
                <ChevronDown className="ml-1 h-4 w-4" />
              </button></a>
              <AnimatePresence>
                {isCoursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 glass-morphism rounded-lg shadow-xl py-2"
                  >
                    {courses.map((course) => (
                      <Link
                        key={course.name}
                        to={course.path}
                        className="block px-4 py-2 text-foreground hover:bg-primary-light hover:text-primary transition-colors duration-200"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/fee-structure"
              className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                location.pathname === "/fee-structure" ? "text-primary" : ""
              }`}
            >
              Fee Structure
            </Link>
            <Link
              to="/faqs"
              className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                location.pathname === "/faqs" ? "text-primary" : ""
              }`}
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                location.pathname === "/contact" ? "text-primary" : ""
              }`}
            >
              Contact
            </Link>

            <Button variant="hero" size="lg" onClick={handleEnrollClick}>
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden glass-morphism"
            >
              <div className="py-4 space-y-4 px-4">
                <Link
                  to="/"
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <div className="space-y-2">
                  <div className="text-foreground font-medium">Courses</div>
                  {courses.map((course) => (
                    <Link
                      key={course.name}
                      to={course.path}
                      className="block pl-4 text-muted-foreground hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/fee-structure"
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Fee Structure
                </Link>
                <Link
                  to="/faqs"
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  to="/contact"
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button variant="hero" size="lg" className="w-full" onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleEnrollClick();
                }}>
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
