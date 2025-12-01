import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlyingIcons from "@/components/FlyingIcons";

const PrivacyPolicy = () => {
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
              Privacy <span className="text-gradient-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Register for our courses or events</li>
                  <li>Fill out forms on our website</li>
                  <li>Subscribe to our newsletters</li>
                  <li>Contact us for support or information</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-muted-foreground">
                  This information may include your name, email address, phone number, date of birth, educational details, 
                  and payment information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Provide and improve our educational services</li>
                  <li>Process your course registrations and payments</li>
                  <li>Send you updates about our programs and events</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Personalize your experience on our website</li>
                  <li>Conduct research and analysis to improve our offerings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Trusted service providers who assist us in operating our website and delivering services</li>
                  <li>Legal authorities when required by law or to protect our rights</li>
                  <li>Third parties in connection with a business transaction, such as a merger or acquisition</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information from unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Cookies</h2>
                <p className="text-muted-foreground">
                  Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your 
                  device that help us understand how you use our website and improve your experience. You can control cookie 
                  settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                  policy on this page and updating the effective date. We encourage you to review this policy periodically 
                  for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us at:
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-foreground font-medium">IIT PATH Coaching Institute</p>
                  <p className="text-muted-foreground">Andheri West, Mumbai, Maharashtra 400058</p>
                  <p className="text-muted-foreground">Email: privacy@iitpath.com</p>
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

export default PrivacyPolicy;