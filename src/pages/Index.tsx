
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GoogleReviews from "@/components/GoogleReviews";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeatureGrid from "@/components/FeatureGrid";
import ContentSection from "@/components/ContentSection";
import CompanyMission from "@/components/CompanyMission";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import InternalLinking from "@/components/InternalLinking";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
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
        <SEO 
          title="Placas Solares Puerto Rico | Instalación y Ahorro - Kilowatt PR"
          description="Instalación de placas solares en Puerto Rico. Energía renovable y ahorro en tu factura. Cotización GRATIS, garantía 25 años."
          canonicalPath="/"
        />
        <Navigation />
      <main>
        <HeroSection />
        <TrustSection />
        <TestimonialsSection />
        <GoogleReviews />
        <HowItWorksSection />
        <FeatureGrid />
        <ContentSection />
        <CompanyMission />
        <PricingSection />
        <FAQSection />
        <InternalLinking />
        <LeadCaptureSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
