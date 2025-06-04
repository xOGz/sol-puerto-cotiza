
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import TrustBadges from "@/components/TrustBadges";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadCaptureSection = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "17874312275";
    const message = "Hola, tengo algunas preguntas sobre placas solares. ¿Pueden ayudarme?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // For mobile devices, try to open WhatsApp app first, fallback to web
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Try WhatsApp app first
      const whatsappApp = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
      window.location.href = whatsappApp;
      
      // Fallback to web version after a short delay if app doesn't open
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    } else {
      // Desktop - open web version
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="cotizacion" className="section-spacing bg-gradient-to-br from-solar-50 to-ocean-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cotización gratis en menos de 24 horas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Completa el formulario y recibe una cotización personalizada para tu hogar. 
              Sin compromiso, sin costos ocultos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <LeadCaptureForm />
            
            <div>
              <ContactInfoCard />
              <div className="mt-8">
                <TrustBadges />
              </div>
            </div>
          </div>

          {/* Questions Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Tienes más preguntas?</h3>
            <p className="text-gray-600 mb-6">
              Nuestros expertos están listos para resolver cualquier duda específica sobre tu proyecto solar
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chatear por WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
