import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesOverview from "@/components/CoursesOverview";
import ToppersCarousel from "@/components/ToppersCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <StatsSection />
        <WhyChooseUs />
        <CoursesOverview />
        <section className="section-padding bg-background">
          <div className="container-custom">
            <ToppersCarousel category="JEE" />
          </div>
        </section>
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <ToppersCarousel category="NEET" />
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
