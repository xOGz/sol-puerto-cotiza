
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import TrustBadges from "@/components/TrustBadges";
import { MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadCaptureSection = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "17874312275";
    const message = "Hola, quiero información sobre placas solares para mi casa. ¿Pueden ayudarme?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const whatsappApp = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
      window.location.href = whatsappApp;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="cotizacion" className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-kilowatt-secondary/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Urgency Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full px-6 py-3 mb-4 animate-pulse">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-bold">¡Últimos días para aprovecharte!</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Cotización gratis en menos de 24 horas
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              No dejes pasar esta oportunidad. Los precios de la luz seguirán subiendo, 
              pero <span className="font-bold text-kilowatt-primary">tú puedes librarte para siempre</span>.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <LeadCaptureForm />
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary p-8 rounded-3xl max-w-3xl mx-auto text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Prefieres hablar directamente?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Nuestros especialistas están disponibles para resolver tus dudas al instante
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+17874312275" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-kilowatt-primary rounded-full font-bold hover:scale-105 transition-transform duration-300"
                >
                  Llamar ahora: (787) 431-2275
                </a>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-kilowatt-secondary hover:bg-kilowatt-secondary/90 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
