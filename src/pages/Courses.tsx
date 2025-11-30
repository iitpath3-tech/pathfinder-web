import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
              Our <span className="text-gradient-primary">Courses</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Comprehensive programs designed for success in IIT-JEE, NEET, and Olympiads
            </p>
            
            <div className="prose prose-lg max-w-none mx-auto text-foreground">
              <h2 id="foundation" className="text-3xl font-display font-bold mt-12 mb-6">Foundation Program (Classes 8-10)</h2>
              <p className="mb-4">
                Our Foundation Program is designed for students in Classes 8-10 who aspire to pursue careers in engineering or medicine. This program focuses on building a strong conceptual foundation in Physics, Chemistry, and Mathematics/Biology.
              </p>
              <h3 className="text-2xl font-display font-semibold mt-6 mb-3">Key Features:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Early exposure to competitive exam patterns</li>
                <li>Conceptual clarity with real-life applications</li>
                <li>Preparation for NTSE, Olympiads, and JSTSE</li>
                <li>Regular assessments and performance tracking</li>
                <li>Small batch sizes for personalized attention</li>
              </ul>
              
              <h2 id="engineering" className="text-3xl font-display font-bold mt-12 mb-6">JEE Main & Advanced Program</h2>
              <p className="mb-4">
                Our flagship 2-year comprehensive program covers the complete JEE syllabus with in-depth coverage of concepts, problem-solving techniques, and exam strategies. The program is divided into modules for systematic learning and revision.
              </p>
              <h3 className="text-2xl font-display font-semibold mt-6 mb-3">Program Structure:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Complete syllabus coverage for Classes 11 and 12</li>
                <li>Daily Practice Problems (DPPs) for each topic</li>
                <li>Weekly tests and detailed performance analysis</li>
                <li>Rank booster modules for final preparation</li>
                <li>All India Test Series with percentile ranking</li>
                <li>Special doubt-clearing sessions and mentoring</li>
              </ul>
              
              <h2 id="medical" className="text-3xl font-display font-bold mt-12 mb-6">NEET & AIIMS Program</h2>
              <p className="mb-4">
                Our specialized medical preparation program integrates Biology, Physics, and Chemistry to provide a holistic preparation experience. The program emphasizes conceptual understanding, application-based learning, and extensive practice.
              </p>
              <h3 className="text-2xl font-display font-semibold mt-6 mb-3">Key Highlights:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Integrated approach to PCB subjects</li>
                <li>NCERT-focused curriculum with advanced concepts</li>
                <li>Regular NEET pattern mock tests</li>
                <li>Biology-specific diagrammatic learning techniques</li>
                <li>Subject-wise expert faculty for each discipline</li>
                <li>Performance analytics and improvement strategies</li>
              </ul>
              
              <h2 id="olympiad" className="text-3xl font-display font-bold mt-12 mb-6">Olympiad Training Program</h2>
              <p className="mb-4">
                Our Olympiad Training Program is designed for students aiming to excel in national and international Olympiads like NSEP, NSEC, NSEA, NMTC, PRMO, RMO, and INO. The program focuses on developing advanced problem-solving skills and mathematical/ scientific reasoning.
              </p>
              <h3 className="text-2xl font-display font-semibold mt-6 mb-3">Program Benefits:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Specialized faculty with Olympiad experience</li>
                <li>Advanced problem sets and reference materials</li>
                <li>Stage-wise preparation for multi-level competitions</li>
                <li>Research-oriented learning approach</li>
                <li>Peer learning with equally motivated students</li>
                <li>Regular workshops and guest lectures</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
