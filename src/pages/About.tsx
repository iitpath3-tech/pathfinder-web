import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
              About <span className="text-gradient-primary">IIT PATH</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Building excellence in education since 2009
            </p>
            
            <div className="prose prose-lg max-w-none mx-auto text-foreground">
              <p className="lead mb-6">
                Founded in 2009, IIT PATH has emerged as one of India's premier coaching institutes for IIT-JEE, NEET, and Olympiad preparation. With over 15 years of excellence, we have consistently produced top rankers who have secured admissions to prestigious institutions like IITs, NITs, AIIMS, and other renowned universities.
              </p>
              
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Our Vision</h2>
              <p className="mb-6">
                To nurture and develop the brightest minds of the nation by providing world-class education and creating an environment that fosters intellectual growth, critical thinking, and innovation.
              </p>
              
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Our Mission</h2>
              <p className="mb-6">
                To empower students with comprehensive knowledge, analytical skills, and confidence required to excel in competitive examinations and become future leaders in their respective fields.
              </p>
              
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Why Choose IIT PATH?</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>25+ IITians and PhDs on our faculty team</li>
                <li>Proven track record of 1200+ selections in IITs and AIIMS</li>
                <li>Comprehensive study material developed by subject matter experts</li>
                <li>Regular assessments with detailed performance analysis</li>
                <li>Personalized attention and mentoring for each student</li>
                <li>All India Test Series to benchmark preparation levels</li>
                <li>State-of-the-art infrastructure and learning facilities</li>
              </ul>
              
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Our Achievements</h2>
              <p className="mb-6">
                Over the years, IIT PATH has achieved remarkable milestones that set us apart in the competitive coaching landscape:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>15+ International Gold Medals in various Olympiads</li>
                <li>Multiple AIR 1 rankers in JEE Advanced and NEET</li>
                <li>Consistent top 100 rankers in JEE Advanced every year</li>
                <li>Over 85% selection rate in JEE Main for eligible students</li>
                <li>Recognition as one of the top coaching institutes in Mumbai</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
