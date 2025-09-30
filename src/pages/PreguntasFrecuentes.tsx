import Navigation from "@/components/Navigation";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const PreguntasFrecuentes = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Preguntas Frecuentes - Placas Solares Puerto Rico | Kilowatt PR"
        description="Resuelve todas tus dudas sobre instalación de paneles solares, costos, garantías y financiamiento en Puerto Rico. Preguntas frecuentes sobre energía solar."
        canonicalPath="/preguntas-frecuentes"
      />
      <Navigation />
      <main>
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PreguntasFrecuentes;