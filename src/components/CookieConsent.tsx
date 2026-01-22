import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { getConsent, setConsent } from "@/lib/cookieConsent";
import { loadAllAnalytics } from "@/lib/loadAnalytics";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === null) {
      // Show banner if no consent has been given
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // Load analytics if consent was previously given
      loadAllAnalytics();
      setShowBanner(false);
    } else {
      // Consent was rejected
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    setConsent('accepted');
    setShowBanner(false);
    loadAllAnalytics();
  };

  const handleReject = () => {
    setConsent('rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background border-t border-border shadow-2xl"
        >
          <div className="container-custom mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Cookie Consent
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies. You can learn more in our{" "}
                    <Link 
                      to="/privacy" 
                      className="text-primary hover:underline font-medium"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button
                  onClick={handleReject}
                  variant="outline"
                  size="default"
                  className="w-full sm:w-auto"
                >
                  Reject
                </Button>
                <Button
                  onClick={handleAccept}
                  variant="default"
                  size="default"
                  className="w-full sm:w-auto"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
