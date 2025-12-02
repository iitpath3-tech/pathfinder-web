import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FlyingIcons from "@/components/FlyingIcons";

const MedicalNEET = () => {
  return (
    <div className="min-h-screen bg-background">
      <FlyingIcons />
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Pursue your dream as a <span className="text-gradient-primary">Doctor</span>
              </h1>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16"
            >
              <p className="text-gray-700 text-lg mb-4">
                Your zeal to serve people, critical thinking and working diligently under pressure can present a plethora of career options for you. If the aforementioned qualities are merged with compassion then medicine is definitely an ideal career path for you. Medicine is a career that offers opportunities to improve people's health and save lives. So, if you think you have that zeal to serve people, then choose Medicine as a career.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-center text-foreground">
                NEET preparation at IIT PATH
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-border hover-lift">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                    Extensive and well-researched study material
                  </h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-border hover-lift">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                    Highly competitive peer group
                  </h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-border hover-lift">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                    Qualified faculty
                  </h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-border hover-lift">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                    Competitive atmosphere with personalized attention
                  </h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-border hover-lift">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                    One on one doubt sessions
                  </h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-border hover-lift">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                    Incorporates easy to use tips and tricks
                  </h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-border hover-lift md:col-span-2 lg:col-span-3">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                    Regular tests and assessments
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-center text-foreground">
                All about NEET
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-border">
                <p className="text-gray-700 mb-4">
                  Central Government has established the National Testing Agency to conduct entrance examination for admission/fellowship to higher educational institutions.
                </p>
                <p className="text-gray-700 mb-4">
                  The responsibility of NTA is limited to the conduct of the entrance test NEET-(UG), declaration of result and providing All India Rank to the Directorate General of Health Services, Ministry of Health and Family Welfare, Government of India for counselling of 15% All India Quota Seats and all seats of Deemed Universities/Central Universities/ESIC & AFMC including Delhi University (DU), BHU & AMU and providing the result to the State Counselling Authorities and admitting Institutions.
                </p>
                <p className="text-gray-700 mb-6">
                  Admission to all seats of MBBS/BDS will be done through NEET(UG). Following are the seats available under different quotas:
                </p>
                <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
                  <li>All India Quota Seats</li>
                  <li>State Government Quota Seats</li>
                  <li>Central Institutions/Universities/Deemed Universities</li>
                  <li>Central Pool Quota Seats</li>
                  <li>State/Management/NRI Quota seats in Private Medical/Dental Colleges or any Private University</li>
                </ul>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    Entrance test date
                  </h3>
                  <p className="text-gray-700">
                    National Eligibility Cum Entrance Test NEET(UG) is usually conducted in 1st week of May. The duration of the test will be 3 hours (NEET is conducted offline).
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-border rounded-lg">
                    <thead>
                      <tr className="bg-primary-light">
                        <th className="py-3 px-4 text-left font-display font-semibold text-foreground">Subject</th>
                        <th className="py-3 px-4 text-left font-display font-semibold text-foreground">Number of MCQs</th>
                        <th className="py-3 px-4 text-left font-display font-semibold text-foreground">Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 text-foreground">Physics</td>
                        <td className="py-3 px-4 text-foreground">45 (Section A - 35, Section B - 15)</td>
                        <td className="py-3 px-4 text-foreground">180</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 text-foreground">Chemistry</td>
                        <td className="py-3 px-4 text-foreground">45 (Section A - 35, Section B - 15)</td>
                        <td className="py-3 px-4 text-foreground">180</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-foreground">Biology (Botany & Zoology)</td>
                        <td className="py-3 px-4 text-foreground">90 (Section A - 35, Section B - 15)</td>
                        <td className="py-3 px-4 text-foreground">360</td>
                      </tr>
                      <tr className="bg-gray-50 font-bold">
                        <td className="py-3 px-4 text-foreground">Total</td>
                        <td className="py-3 px-4 text-foreground">180</td>
                        <td className="py-3 px-4 text-foreground">720</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                    Pattern of NEET
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 opacity-90"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block bg-black/30 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Start Your Medical Journey Today
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-12">
                Join IIT PATH and take the first step toward becoming a doctor
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-400 to-teal-500 text-white hover:from-green-500 hover:to-teal-600 font-bold py-4 px-8 rounded-full text-lg shadow-2xl min-w-[200px] transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MedicalNEET;