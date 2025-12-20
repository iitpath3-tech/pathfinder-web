import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const FeeStructure = lazy(() => import("./pages/FeeStructure"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const FoundationBuilder = lazy(() => import("./pages/FoundationBuilder"));
const JEE = lazy(() => import("./pages/JEE"));
const MedicalNEET = lazy(() => import("./pages/MedicalNEET"));
const Olympiad = lazy(() => import("./pages/Olympiad"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FreeCounselling = lazy(() => import("./pages/FreeCounselling"));
const AchieverSection = lazy(() => import("./pages/AchieverSection"));
const DirectorsMessage = lazy(() => import("@/pages/DirectorsMessage"));

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration
    // In a real app, this might be waiting for data fetching or other initializations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <RingLoader color="#d72525" size={90} />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={
            <div className="flex items-center justify-center w-screen h-screen">
              <RingLoader color="#d72525" size={90} />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/foundation-builder" element={<FoundationBuilder />} />
              <Route path="/jee" element={<JEE />} />
              <Route path="/medical-neet" element={<MedicalNEET />} />
              <Route path="/olympiad" element={<Olympiad />} />
              <Route path="/directors-message" element={<DirectorsMessage />} />

              <Route path="/fee-structure" element={<FeeStructure />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/free-counselling" element={<FreeCounselling />} />
              <Route path="/our-achievers" element={<AchieverSection />} /> {/* Added Achiever Section route */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;