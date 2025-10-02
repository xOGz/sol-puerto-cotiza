
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeatureGrid from "@/components/FeatureGrid";
import ContentSection from "@/components/ContentSection";
import CompanyMission from "@/components/CompanyMission";
import PricingSection from "@/components/PricingSection";

import InternalLinking from "@/components/InternalLinking";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import ServicesGrid from "@/components/ServicesGrid";
import CitiesGrid from "@/components/CitiesGrid";
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
          title="Perito Electricista Puerto Rico | Instalación Paneles Solares | Kilowatt PR"
          description="Perito electricista colegiado especialista en energía solar Puerto Rico. Instalación profesional de paneles solares residenciales y comerciales. Servicio certificado en toda la isla."
          canonicalPath="/"
        />
        <Navigation />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <PricingSection />
        <FeatureGrid />
        <ContentSection />
        <CompanyMission />
        
        <ServicesGrid />
        <CitiesGrid />
        <InternalLinking />
        <LeadCaptureSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
