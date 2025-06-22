
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
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-blue-50 to-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop')`
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in-up">
            
            {/* Urgency Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-6 py-2 mb-6 animate-pulse">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">¡Oferta válida hasta el 30 de junio!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Reduce tu factura</span>
              <span className="block">de luz hasta</span>
              <span className="block bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">90%</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Con placas solares instaladas por <span className="font-bold text-blue-600">expertos locales</span> – Cotización gratis
            </p>

            {/* Main CTA */}
            <div className="mb-12">
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl animate-glow"
              >
                Solicita tu cotización gratis
              </Button>
              <p className="text-sm text-gray-600 mt-2">Sin compromiso • Respuesta en 24 horas</p>
            </div>

            {/* Value Props Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">10 años</div>
                <div className="text-gray-700 text-sm">Garantía en equipos</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Instalación</div>
                <div className="text-gray-700 text-sm">Profesional</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Sellado</div>
                <div className="text-gray-700 text-sm">De techo</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">Lavado</div>
                <div className="text-gray-700 text-sm">De placas</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-gray-700 text-sm">Familias servidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">15</div>
                  <div className="text-gray-700 text-sm">Años experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">$189</div>
                  <div className="text-gray-700 text-sm">Ahorro promedio</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
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
