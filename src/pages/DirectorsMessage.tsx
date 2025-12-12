import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const DirectorsMessage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Director’s Message
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A note from the Director on our mission, values, and commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-08">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-morphism p-10 rounded-2xl shadow-xl max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              A Message from the Director
            </motion.h2>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-xl border border-primary/20 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img 
                    src="/director.png" 
                    alt="Director of IIT PATH" 
                    className="w-48 h-48 md:w-80 md:h-80 rounded-full object-contain  border-4 border-white shadow-lg"
                  />
                </motion.div>
                <motion.div 
                  className="flex-grow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
                    Dear Parents and Students,
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
                    “IIT PATH” has worked with a mission to provide the best
                    possible support and mentorship to students to help them crack
                    the toughest Engineering/ Medical entrance exams in the world.
                    We consider ourselves blessed to have guided thousands of
                    students to IITs, AIIMS and other top Engineering & Medical
                    Colleges year after year.
                  </p>
                </motion.div>
              </div>
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We have been able to convert so many students into national
                assets because of our child centric approach and feedback
                driven mechanism. Our faculty team consists mostly of
                Doctorates and Doctors who are passionate about teaching and
                dedicated to building the future of their students. The
                success of IIT PATH is based on the success of our students.
                We infuse in them the attitude that does not let them settle
                before mounting the heights of success and deriving the best
                not only academically but also socially.
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Our most important philosophy is “Money will never be a
                barrier between a meritorious student and quality education at
                IIT PATH we feel very passionate about providing an academic
                platform to deserving and meritorious students from the weaker
                and under privileged sections of our society and giving them a
                fair opportunity to study with the best.
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I thank you for showing interest in IIT PATH. I am sure your
                child will be able to achieve his/her dream of becoming a
                successful Engineer or a Doctor with IIT PATH.
              </motion.p>
            </div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="font-bold text-xl">Director</p>
              <p className="text-muted-foreground">IIT PATH Coaching Institute</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DirectorsMessage;
