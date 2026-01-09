import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FlyingIcons from "@/components/FlyingIcons";
import { Book, Download, Clock } from "lucide-react";

const StudyMaterial = () => {
  const materials = [
    {
      title: "Physics Notes",
      description: "Comprehensive physics notes covering Mechanics, Optics, and Electromagnetism.",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Chemistry Notes",
      description: "Detailed chemistry notes for Physical, Organic, and Inorganic Chemistry chapters.",
      icon: "🧪",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Maths Notes",
      description: "Advanced mathematics notes including Calculus, Algebra, and Coordinate Geometry.",
      icon: "📐",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FlyingIcons />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom px-4">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Study <span className="text-gradient-primary">Material</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Access high-quality study resources designed to help you excel in your preparation.
            </p>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {materials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center text-3xl shadow-inner">
                      {item.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 flex items-center">
                      <Clock size={12} className="mr-1" />
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-6 border-t border-dashed border-gray-200">
                    <button 
                      disabled
                      className="w-full flex items-center justify-center py-3 rounded-xl bg-gray-100 text-gray-400 font-medium cursor-not-allowed transition-colors"
                    >
                      <Download size={18} className="mr-2" />
                      Download PDF
                    </button>
                  </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16 text-muted-foreground/80 flex flex-col items-center"
          >
             <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 inline-flex items-center gap-3">
                <Book className="text-primary w-5 h-5"/>
                <span className="text-sm font-medium text-blue-900">More materials are being prepared by our expert faculty.</span>
             </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudyMaterial;
