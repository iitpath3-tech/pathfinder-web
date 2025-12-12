import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  BookOpen,
  Target,
  MessageCircle,
  Users,
  BarChart3,
  Gamepad2,
} from "lucide-react";
import FlyingIcons from "@/components/FlyingIcons";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <FlyingIcons />
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 relative"
            >
              <div className="absolute inset-0 -z-10">
                {/* <img 
                  src="/bg.jpg" 
                  alt="IIT PATH Background" 
                  className="w-full h-full object-cover rounded-2xl opacity-20"
                /> */}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                About <span className="text-gradient-primary">IIT PATH</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Building excellence in education since 2009
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 shadow-xl border border-primary/20 mb-16 hover:shadow-2xl transition-all duration-500 ">
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
                  IIT PATH was established in 2010 by Dr. Azajul Haque Since
                  inception, we believe in providing the highest quality of
                  education while coaching our students for competitive exams.
                  We are committed to make the process of learning fundamentally
                  strong and enjoyable for the aspirants by using innovative
                  teaching methods and having passionate and dedicated team of
                  Doctorates & Doctors to give them thorough conceptual clarity.
                  This strategy is the sole reason behind us being able to
                  produce extraordinary results every year in our 4 definite
                  integrals - Engineering, Medical, Foundation Builder and
                  Education Abroad. We have consistently produced top results in
                  competitive exams like JEE, NEET and Olympiads. We have a
                  presence across India and have one of the largest pools of
                  experienced faculties.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50 h-full hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">V</span>
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gradient-primary">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our nation needs to harness the intellectual potential of
                    our younger generation to turn India into a superpower. Our
                    vision is to impart best quality education to students from
                    seventh standard onwards for the top national and global
                    examinations and help them to fulfil their dream of entering
                    into top Engineering and Medical colleges, through tech
                    enabled learning and testing solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-accent/50 h-full hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-red-600 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">M</span>
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gradient-accent">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Redefining quality learning through innovation and
                    farsightedness has been a hallmark of IIT PATH DNA. Our
                    mission is to create an environment of academic excellence,
                    utilizing modern technologies and pedagogical approaches to
                    provide quality education.
                  </p>
                </div>
              </motion.div>
            </div>



            {/* Our Pedagogy Section */}
            {/* Our Pedagogy Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-24"
>
  <h2 className="text-4xl font-display font-bold text-center mb-12 text-gradient-primary">
    Our Pedagogy
  </h2>

  <div className="relative w-full max-w-6xl mx-auto px-4">

  

    {/* BUBBLES */}
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-4 
      gap-y-16 
      gap-x-4 
      mt-10
    ">
      {[
        {
          icon: Heart,
          title: "Child-Centric Approach",
          desc: "Child-Centric approach and Feedback Driven Mechanism",
        },
        {
          icon: GraduationCap,
          title: "Expert Faculty",
          desc: "Highly qualified teachers: IITians, Doctors & PhDs",
        },
        {
          icon: BookOpen,
          title: "Study Material",
          desc: "Extensive material crafted by experienced faculty",
        },
        {
          icon: Target,
          title: "Precise Training",
          desc: "Training for competitive + school exams",
        },
        {
          icon: MessageCircle,
          title: "Feedback System",
          desc: "Regular feedback, PTMs & detailed performance reports",
        },
        {
          icon: Users,
          title: "Effective Batch Size",
          desc: "Small batch sizes & library doubt-solving support",
        },
        {
          icon: BarChart3,
          title: "Assessment System",
          desc: "Topic tests, major tests, AITS evaluation system",
        },
        {
          icon: Gamepad2,
          title: "Gamified Learning",
          desc: "Gamified learning app for engaging Math & Science",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center text-center px-4"
        >
          {/* Bubble */}
          <div className="
            w-28 h-28 
            sm:w-32 sm:h-32 
            md:w-36 md:h-36 
            rounded-full 
            bg-white 
            shadow-xl 
            border 
            border-gray-200 
            flex items-center justify-center 
            transition-transform 
            duration-300 
            hover:scale-105
          ">
            <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
          </div>

          <h3 className="text-lg sm:text-xl font-display font-semibold mt-4">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xs mt-2">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>


            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-br from-blue-50 to-sky-100 py-16">
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                      Why Choose{" "}
                      <span className="text-gradient-primary">IIT PATH</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Our unique approach and proven methodologies set us apart
                      from other coaching institutes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[
                      {
                        title: "Expert Faculty",
                        desc: "25+ IITians and PhDs on our faculty team",
                        color: "from-blue-500 to-cyan-500",
                      },
                      {
                        title: "Proven Results",
                        desc: "1200+ selections in IITs and AIIMS",
                        color: "from-primary to-blue-600",
                      },
                      {
                        title: "Study Material",
                        desc: "Comprehensive material by subject matter experts",
                        color: "from-purple-500 to-indigo-500",
                      },
                      {
                        title: "Assessments",
                        desc: "Regular tests with detailed performance analysis",
                        color: "from-green-500 to-emerald-500",
                      },
                      {
                        title: "Personalized Attention",
                        desc: "Mentoring for each student",
                        color: "from-yellow-500 to-orange-500",
                      },
                      {
                        title: "Test Series",
                        desc: "All India Test Series to benchmark preparation",
                        color: "from-red-500 to-pink-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-card rounded-xl p-6 sm:p-8 hover-lift shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-primary font-display font-bold text-2xl">
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-center mt-16 mb-12 text-gradient-accent">
                Our Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    number: "15+",
                    label: "International Gold Medals",
                    desc: "In various Olympiads",
                    color: "from-yellow-400 to-orange-500",
                  },
                  {
                    number: "1200+",
                    label: "Selections",
                    desc: "In IITs and AIIMS",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    number: "85%",
                    label: "Selection Rate",
                    desc: "In JEE Main for eligible students",
                    color: "from-green-500 to-emerald-500",
                  },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="group text-center bg-gradient-to-br from-card to-muted rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-accent/30"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-display font-bold text-2xl">
                        {achievement.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                      {achievement.label}
                    </h3>
                    <p className="text-muted-foreground">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Social Initiatives Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-display font-bold text-center mt-16 mb-10 text-gradient-primary">
                Our Social Initiatives
              </h2>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 shadow-xl border border-primary/20 mb-16 hover:shadow-2xl transition-all duration-500">
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-6">
                  Mr. Praveen Tyagi, who hails from a small village in
                  Ghaziabad(UP), understands the "Importance of Education" &
                  believes in the philosophy "Money will not be a barrier
                  between a meritorious student & quality education at IIT
                  PATH".
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Super 50 Batch 2021 */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">2021</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gradient-primary">
                      Super "50" Batch (Mumbai)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    24 out of 26 students have been admitted to prestigious
                    Institutions like IITs/NITs & 21 out of 24 students have got
                    admitted to Top Medical colleges.
                  </p>
                </motion.div>

                {/* Super 50 Batch 2019 */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-700 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">2019</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gradient-accent">
                      Super "50" Batch (Mumbai)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    The initiative of empowering the tribal students is taken up
                    by the Tribal Development Department, Govt. of Maharashtra
                    and IIT PATH Educational Trust. This scheme of Super 50 is
                    proposed for the benefit and upliftment of the tribal
                    community, which enables the tribal students to fulfil their
                    dream of becoming eminent engineers and doctors. 50
                    meritorious students were selected on the basis of an
                    examination from the lot of 16000 students.
                  </p>
                </motion.div>

                {/* Super 50 Girls Batch 2014 */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">2014</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-purple-600">
                      Training "Super 50 girls" batch
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    IIT PATH had run a project under the women welfare policy in
                    collaboration with Women and Child Welfare Department,
                    Maharashtra Government for 2 years in which 50 deserving
                    girls get free training for the preparation of JEE Main, JEE
                    Advanced and HSC.
                  </p>
                </motion.div>

                {/* Super 50 Batch 2013 */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-green-700 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">2013</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-green-600">
                      Super "50" Batch (Ghaziabad and Delhi/ NCR)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    The goal of Super "50" batch is to ensure a level play field
                    for the meritorious yet underprivileged students of
                    Ghaziabad/NCR by providing quality education for
                    school/board curriculum and the most prestigious national &
                    international-level Engineering and Medical entrance exams.
                  </p>
                </motion.div>

                {/* SC Children Training 2010 */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-red-500 to-red-700 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">2010</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-red-600">
                      Training the SC children
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    IIT PATH collaborated with the Social Welfare Department of
                    the Maharashtra Government for a new social scheme. Based on
                    it, we had offered free training & accommodation to the
                    meritorious and underprivileged Scheduled Caste children for
                    Boards, Engineering & Medical entrance exams.
                  </p>
                </motion.div>

                {/* Underprivileged Students 2009 */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">2009</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-yellow-600">
                      Training the underprivileged meritorious students
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Starting in 2009, IIT PATH got a chance to administer the
                    MCGM till 2013. During these four years, we gave our best to
                    guide and polish the BPL (Below Poverty Line) students in
                    every possible way to provide equal opportunity for
                    deserving students and brighten their future.
                  </p>
                </motion.div>

                {/* Mumbai Police Constables Children */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border md:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">2009</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-indigo-600">
                      Free education for the children of Mumbai Police
                      Constables
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    After Taj terror attack in 2008, Tyagi sir's heart went out
                    for those Policemen & their family members who lost their
                    lives & were badly injured. Tyagi sir then decided to
                    provide free education to all the children of police
                    constables in Maharashtra.
                  </p>
                </motion.div>

                {/* Single Parent Support */}
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border md:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-pink-500 to-pink-700 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">
                        Active
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-pink-600">
                      Helping the single parent in their child's education
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    IIT PATH actively supports the education of the meritorious
                    children of single parent who are not able to afford their
                    child's education. The institute provides scholarships and
                    the best possible resources to the children of single
                    parent.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
