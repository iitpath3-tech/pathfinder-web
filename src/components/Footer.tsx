import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl font-display font-bold text-primary">IIT</span>
              <span className="text-2xl font-display font-bold text-accent ml-1">PATH</span>
            </div>
            <p className="text-background/70 leading-relaxed mb-4">
              India's premier coaching institute for IIT-JEE, NEET, and Olympiad preparation. 
              Building future engineers and doctors since 2009.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/fee-structure" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Fee Structure
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-background/70 hover:text-primary transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-bold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses#foundation" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Foundation Builder
                </Link>
              </li>
              <li>
                <Link to="/courses#engineering" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Engineering (JEE)
                </Link>
              </li>
              <li>
                <Link to="/courses#medical" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Medical (NEET)
                </Link>
              </li>
              <li>
                <Link to="/courses#olympiad" className="text-background/70 hover:text-primary transition-colors duration-200">
                  Olympiad Preparation
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/70">
                  IIT PATH Coaching Center<br />
                  Andheri West, Mumbai, Maharashtra 400058
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+912226781234" className="text-background/70 hover:text-primary transition-colors">
                  +91 22 2678 1234
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@iitpath.com" className="text-background/70 hover:text-primary transition-colors">
                  info@iitpath.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-background/60 text-sm">
            © 2009-{currentYear} IIT PATH Coaching Institute. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/60 hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
