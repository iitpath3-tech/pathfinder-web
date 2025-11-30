import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
              Our <span className="text-gradient-primary">Courses</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Comprehensive programs designed for success
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
