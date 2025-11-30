import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
              Get in <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              We're here to help you start your journey to success
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
