import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlyingIcons from "@/components/FlyingIcons";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <FlyingIcons />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Terms & <span className="text-gradient-primary">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border"
          >
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing or using the services provided by IIT PATH Coaching Institute ("we," "us," or "our"), you 
                  agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree 
                  with any part of these terms, you must not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Services</h2>
                <p className="text-muted-foreground mb-4">
                  IIT PATH Coaching Institute provides educational coaching services for competitive examinations including 
                  JEE, NEET, and Olympiads. We reserve the right to modify, suspend, or discontinue any aspect of our services 
                  at any time without prior notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Course Registration and Fees</h2>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>All course fees are non-refundable unless otherwise specified in writing.</li>
                  <li>Registration is confirmed only after full payment of fees.</li>
                  <li>Fees may be subject to change without prior notice.</li>
                  <li>Students are responsible for providing accurate information during registration.</li>
                  <li>Late payments may result in suspension of classes or services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Student Responsibilities</h2>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Students must maintain regular attendance in classes.</li>
                  <li>Students are expected to complete assigned homework and practice materials.</li>
                  <li>Students must遵守 all institute rules and regulations.</li>
                  <li>Students must treat faculty and staff with respect and courtesy.</li>
                  <li>Students must not engage in any form of academic dishonesty or misconduct.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All course materials, study content, videos, documents, and other resources provided by IIT PATH are the 
                  exclusive property of the institute and are protected by copyright laws. Unauthorized reproduction, 
                  distribution, or use of these materials is strictly prohibited.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  IIT PATH Coaching Institute shall not be liable for any indirect, incidental, special, or consequential 
                  damages arising out of the use or inability to use our services. We do not guarantee specific results or 
                  outcomes from our coaching programs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Code of Conduct</h2>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Students must maintain discipline and decorum in the institute premises.</li>
                  <li>Use of mobile phones and other electronic devices is restricted during class hours.</li>
                  <li>Students must not bring any prohibited items to the coaching center.</li>
                  <li>Any form of harassment, bullying, or disruptive behavior will not be tolerated.</li>
                  <li>Students found violating institute rules may face disciplinary action, including expulsion.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Refund Policy</h2>
                <p className="text-muted-foreground mb-4">
                  Course fees are generally non-refundable. However, refunds may be considered in exceptional circumstances 
                  at the sole discretion of the institute management. Requests for refunds must be made in writing with 
                  valid justification.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Termination</h2>
                <p className="text-muted-foreground mb-4">
                  IIT PATH Coaching Institute reserves the right to terminate a student's enrollment at any time for reasons 
                  including but not limited to non-payment of fees, violation of institute rules, or misconduct. No refunds 
                  will be provided in such cases.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes 
                  arising from these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately 
                  upon posting on our website. Continued use of our services after any changes constitutes acceptance of the 
                  modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Contact Information</h2>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-foreground font-medium">IIT PATH Coaching Institute</p>
                  <p className="text-muted-foreground">Andheri West, Mumbai, Maharashtra 400058</p>
                  <p className="text-muted-foreground">Email: terms@iitpath.com</p>
                  <p className="text-muted-foreground">Phone: +91 22 2678 1234</p>
                </div>
                <p className="text-muted-foreground mt-4">
                  <strong>Effective Date:</strong> January 1, 2024
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;