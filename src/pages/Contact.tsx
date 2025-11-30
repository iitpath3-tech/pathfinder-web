import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
              Get in <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              We're here to help you start your journey to success
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="prose prose-lg max-w-none text-foreground">
                <h2 className="text-3xl font-display font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-3">Address</h3>
                    <p className="mb-2">
                      IIT PATH Coaching Institute
                    </p>
                    <p className="mb-2">
                      4th Floor, Times Square Building
                    </p>
                    <p className="mb-2">
                      Near Andheri Station (West)
                    </p>
                    <p className="mb-2">
                      Mumbai, Maharashtra 400058
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-3">Phone Numbers</h3>
                    <p className="mb-2">
                      Admissions: <a href="tel:+912226781234" className="text-primary hover:underline">+91 22 2678 1234</a>
                    </p>
                    <p className="mb-2">
                      General Enquiries: <a href="tel:+912226781235" className="text-primary hover:underline">+91 22 2678 1235</a>
                    </p>
                    <p className="mb-2">
                      WhatsApp: <a href="https://wa.me/912226781234" className="text-primary hover:underline">+91 22 2678 1234</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-3">Email</h3>
                    <p className="mb-2">
                      General: <a href="mailto:info@iitpath.com" className="text-primary hover:underline">info@iitpath.com</a>
                    </p>
                    <p className="mb-2">
                      Admissions: <a href="mailto:admissions@iitpath.com" className="text-primary hover:underline">admissions@iitpath.com</a>
                    </p>
                    <p className="mb-2">
                      Support: <a href="mailto:support@iitpath.com" className="text-primary hover:underline">support@iitpath.com</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-semibold mb-3">Office Hours</h3>
                    <p className="mb-2">
                      Monday to Saturday: 9:00 AM - 8:00 PM
                    </p>
                    <p className="mb-2">
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-display font-bold mt-12 mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-lg font-medium mb-2">Course Interested In</label>
                    <select
                      id="course"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="">Select a course</option>
                      <option value="foundation">Foundation Program (Classes 8-10)</option>
                      <option value="jee">JEE Main & Advanced</option>
                      <option value="neet">NEET & AIIMS</option>
                      <option value="olympiad">Olympiad Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Enter your message or questions"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-display font-semibold text-lg hover:bg-primary-dark transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-display font-bold mb-6 text-center">Our Location</h2>
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.574540083173!2d72.8291043148579!3d19.12660038705742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b3d9b4d3d9%3A0x1e0c1c1e1e1e1e1e!2sIIT%20PATH%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
