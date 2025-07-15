
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GoogleReviews from "@/components/GoogleReviews";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeatureGrid from "@/components/FeatureGrid";
import CompanyMission from "@/components/CompanyMission";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import InternalLinking from "@/components/InternalLinking";
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
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <TestimonialsSection />
      <GoogleReviews />
      <HowItWorksSection />
      <FeatureGrid />
      <CompanyMission />
      <PricingSection />
      <FAQSection />
      <InternalLinking />
      <LeadCaptureSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
