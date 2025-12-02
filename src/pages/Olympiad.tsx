import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import FlyingIcons from "@/components/FlyingIcons";

const Olympiad = () => {
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
                Olympiad <span className="text-gradient-primary">Preparation</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                At IIT PATH
              </p>
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
              <p className="text-gray-700 mb-4">
                Olympiads are internationally recognized competitions in various fields of knowledge. They are the highest level of examinations and are hosted by different countries every year. Participation in any of the olympiads is worldwide recognised and is considered as a great achievement. International olympiads are held every year in Mathematics, Physics, Chemistry, Biology, Astronomy and Junior Science.
              </p>
              <p className="text-gray-700">
                IIT PATH has attained an exalted prestige producing the best results at olympiads (Physics, Chemistry, Mathematics, Astronomy & Biology) year-after-year. IIT PATH students have won 12 Gold medals, 7 Silver medals and 3 Bronze medals in International Olympiads.
              </p>
              <p className="text-gray-700 mt-4">
                We provide specialized study material with assignments & tests. The fact that these olympiads are held internationally and, our students are successful in them consistently, is a testimony to our high standard of teaching & impeccable quality of teachers.
              </p>
              <p className="text-gray-700 mt-4">
                After this analysis, we make a personalized study plan to focus on the weak areas and bring out the best of the students. If a non-IIT PATH meritorious student wishes to join IIT PATH to prepare for olympiads, he/she has to go through an entrance test along with a personal interview.
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
                Selection Process
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                <p className="text-gray-700 mb-4">
                  For the selection of this batch, we conduct an objective test and select the top 50 students across Mumbai. Separate batches for PCMB will be formed and students will be mentored by senior most faculty of IIT PATH.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-center text-foreground">
                About International Olympiads
              </h2>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
                <p className="text-gray-700 mb-6">
                  The International Olympiad (IO) programme follows a five stage process. All the subsequent stages are conducted by Homi Bhabha Centre for Science Education (HBCSE), Mumbai. (www.hbcse.tifr.res.in)
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-md border border-border text-center">
                    <h3 className="font-display font-semibold text-primary mb-2">National Standard Examinations (NSEs)</h3>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-border text-center">
                    <h3 className="font-display font-semibold text-primary mb-2">Indian National Olympiad (INO) examinations</h3>
                    <p className="text-sm text-gray-600 mt-2">The eligible students from stage one can participate in INO in respective subjects.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-border text-center">
                    <h3 className="font-display font-semibold text-primary mb-2">Orientation-Cum-Selection Camps (OCSC)</h3>
                    <p className="text-sm text-gray-600 mt-2">For these camps, about 35 students in each subject will be selected from INO on performance basis.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-border text-center">
                    <h3 className="font-display font-semibold text-primary mb-2">Pre Departure Training (PDT)</h3>
                    <p className="text-sm text-gray-600 mt-2">These students will have a Pre-Departure Training (PDT) for two weeks.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-border text-center">
                    <h3 className="font-display font-semibold text-primary mb-2">International Olympiad (IO)</h3>
                    <p className="text-sm text-gray-600 mt-2">Participation in International Olympiad (IO) of the selected students.</p>
                    <p className="text-sm text-gray-600 mt-2">(Physics, Chemistry, Biology, Astronomy organized by IAPT)</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md border border-border">
                  <p className="text-gray-700 mb-2">
                    <strong>Note:</strong> National Board for Higher Mathematics has been organizing Mathematical Olympiad since 1990. For details, visit www.nbhm.dae.gov.in
                  </p>
                  <p className="text-gray-700">
                    For more details, visit website: www.iapt.org.in | E-mail: iapt@vsnl.net
                  </p>
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
                Excel in Olympiads with IIT PATH
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-12">
                Join our specialized Olympiad training program and compete at the international level
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 font-bold py-4 px-8 rounded-full text-lg shadow-2xl min-w-[200px] transition-all duration-300"
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

export default Olympiad;