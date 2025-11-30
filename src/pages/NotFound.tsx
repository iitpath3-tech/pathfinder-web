import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, AlertTriangle } from "lucide-react";
import FlyingIcons from "@/components/FlyingIcons";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <FlyingIcons />
      <motion.div 
        className="text-center max-w-2xl px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8"
        >
          <AlertTriangle className="h-12 w-12 text-primary" />
        </motion.div>
        
        <motion.h1 
          className="mb-4 text-6xl font-display font-bold text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="mb-6 text-2xl text-muted-foreground flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <BookOpen className="h-6 w-6" />
          Oops! Page not found
        </motion.p>
        
        <motion.p 
          className="mb-8 text-lg text-muted-foreground max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </motion.p>
        
        <motion.a
          href="/"
          className="inline-block bg-gradient-primary text-white py-3 px-8 rounded-lg font-display font-semibold text-lg hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Return to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
