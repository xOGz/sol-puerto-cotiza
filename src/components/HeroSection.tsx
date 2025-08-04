
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, Clock, Users, Award } from "lucide-react";
import VideoModal from "@/components/VideoModal";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-white pt-20">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/36135bc9-cdde-43b3-83e0-846ebd47fff6.png')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in-up">
            
            {/* Main Headline - SEO Optimized H1 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Placas Solares</span>
              <span className="block">Puerto Rico</span>
              <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">Ahorra 90%</span>
            </h1>

            {/* Subheadline - Long tail keywords */}
            <h2 className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              Instalación profesional de <strong>placas solares y baterías lítio</strong> en toda la isla. 
              <span className="block mt-2 font-bold text-kilowatt-primary">Cotización 100% gratis en menos de 24 horas</span>
            </h2>

            {/* Main CTA */}
            <div className="mb-12">
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl animate-glow"
              >
                🔥 Solicita Cotización Gratis
              </Button>
              <p className="text-sm text-white/90 mt-2">✓ Sin compromiso ✓ Respuesta garantizada en 24hrs ✓ Expertos locales</p>
              <p className="text-xs text-white/80 mt-1">⚡ Ahorra hasta $200/mes en tu factura de luz</p>
            </div>

            {/* Value Props Icons - SEO Enhanced */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <Award className="w-8 h-8 text-kilowatt-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">25 años</div>
                <div className="text-gray-700 text-sm">Garantía placas</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-8 h-8 text-kilowatt-secondary mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Instalación</div>
                <div className="text-gray-700 text-sm">Profesional</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <Users className="w-8 h-8 text-kilowatt-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Sellado</div>
                <div className="text-gray-700 text-sm">De techo</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-8 h-8 text-kilowatt-secondary mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Lavado</div>
                <div className="text-gray-700 text-sm">De placas</div>
              </div>
            </div>

            {/* Trust Indicators - Local SEO */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">De las top 10 empresas en instalación de placas solares en Puerto Rico</h3>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-gray-700 text-sm">Familias boricuas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                  <div className="text-gray-700 text-sm">Años experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">$189</div>
                  <div className="text-gray-700 text-sm">Ahorro mensual promedio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
