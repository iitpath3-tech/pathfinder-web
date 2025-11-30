import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FeeStructure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
              Fee <span className="text-gradient-primary">Structure</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Transparent and affordable pricing for quality education
            </p>
            
            <div className="prose prose-lg max-w-none mx-auto text-foreground">
              <p className="mb-6">
                At IIT PATH, we believe in making quality education accessible to all deserving students. Our fee structure is designed to be transparent, affordable, and flexible to accommodate different financial situations.
              </p>
              
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Foundation Program (Classes 8-10)</h2>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Batch Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Fee (INR)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Weekend Batch</td>
                      <td className="border border-gray-300 px-4 py-2">1 Year</td>
                      <td className="border border-gray-300 px-4 py-2">₹25,000</td>
                      <td className="border border-gray-300 px-4 py-2">PCM/PMB, 8 hours/week</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Regular Batch</td>
                      <td className="border border-gray-300 px-4 py-2">1 Year</td>
                      <td className="border border-gray-300 px-4 py-2">₹45,000</td>
                      <td className="border border-gray-300 px-4 py-2">PCM/PMB, 15 hours/week</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Fast Track</td>
                      <td className="border border-gray-300 px-4 py-2">6 Months</td>
                      <td className="border border-gray-300 px-4 py-2">₹30,000</td>
                      <td className="border border-gray-300 px-4 py-2">Intensive, 20 hours/week</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">JEE Main & Advanced Program</h2>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Batch Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Fee (INR)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2-Year Integrated</td>
                      <td className="border border-gray-300 px-4 py-2">Class 11-12</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,25,000</td>
                      <td className="border border-gray-300 px-4 py-2">Complete syllabus, DPPs, Tests</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">1-Year Target</td>
                      <td className="border border-gray-300 px-4 py-2">Class 12/Dropper</td>
                      <td className="border border-gray-300 px-4 py-2">₹95,000</td>
                      <td className="border border-gray-300 px-4 py-2">Revision, Tests, Rank Booster</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Rank Booster</td>
                      <td className="border border-gray-300 px-4 py-2">6 Months</td>
                      <td className="border border-gray-300 px-4 py-2">₹65,000</td>
                      <td className="border border-gray-300 px-4 py-2">Intensive, Mock Tests, Analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">NEET & AIIMS Program</h2>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Batch Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Fee (INR)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2-Year Integrated</td>
                      <td className="border border-gray-300 px-4 py-2">Class 11-12</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,35,000</td>
                      <td className="border border-gray-300 px-4 py-2">Complete syllabus, DPPs, Tests</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">1-Year Target</td>
                      <td className="border border-gray-300 px-4 py-2">Class 12/Dropper</td>
                      <td className="border border-gray-300 px-4 py-2">₹1,05,000</td>
                      <td className="border border-gray-300 px-4 py-2">Revision, Tests, Rank Booster</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Crash Course</td>
                      <td className="border border-gray-300 px-4 py-2">3 Months</td>
                      <td className="border border-gray-300 px-4 py-2">₹55,000</td>
                      <td className="border border-gray-300 px-4 py-2">Intensive, Mock Tests, Analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Olympiad Training Program</h2>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Fee (INR)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Foundation Olympiad</td>
                      <td className="border border-gray-300 px-4 py-2">1 Year</td>
                      <td className="border border-gray-300 px-4 py-2">₹35,000</td>
                      <td className="border border-gray-300 px-4 py-2">Classes 8-10, NTSE/NMTC</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Advanced Olympiad</td>
                      <td className="border border-gray-300 px-4 py-2">1 Year</td>
                      <td className="border border-gray-300 px-4 py-2">₹55,000</td>
                      <td className="border border-gray-300 px-4 py-2">Classes 11-12, PRMO/RMO/INO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Specialized Training</td>
                      <td className="border border-gray-300 px-4 py-2">6 Months</td>
                      <td className="border border-gray-300 px-4 py-2">₹40,000</td>
                      <td className="border border-gray-300 px-4 py-2">Subject-specific, Intensive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Payment Options & Scholarships</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Installment Plans:</strong> Flexible payment options with zero interest</li>
                <li><strong>Early Bird Discount:</strong> 10% discount for early admissions</li>
                <li><strong>Scholarships:</strong> Merit-based scholarships for top performers</li>
                <li><strong>Sibling Discount:</strong> 15% discount for siblings</li>
                <li><strong>Referral Bonus:</strong> ₹5,000 credit for successful referrals</li>
              </ul>
              
              <p className="mb-6">
                For more information about our fee structure, payment options, or scholarship opportunities, please contact our admissions office at +91 22 2678 1234 or email us at info@iitpath.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeeStructure;
