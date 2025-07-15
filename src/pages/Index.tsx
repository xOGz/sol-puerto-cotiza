
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeatureGrid from "@/components/FeatureGrid";
import CompanyMission from "@/components/CompanyMission";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Placas Solares Puerto Rico - Kilowatt PR',
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image for entire page */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed opacity-10"
          style={{
            backgroundImage: `url('/lovable-uploads/36135bc9-cdde-43b3-83e0-846ebd47fff6.png')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-yellow-50/80 to-white/80"></div>
      </div>
      
      {/* Page Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <TrustSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <FeatureGrid />
        <CompanyMission />
        <PricingSection />
        <FAQSection />
        <LeadCaptureSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
