
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center glass rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-white text-sm font-medium">Confiado por 500+ familias puertorriqueñas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Placas Solares</span>
            <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">en Puerto Rico</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Reduce tu factura hasta <span className="font-bold text-kilowatt-accent">90%</span> con energía solar confiable y garantizada.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToQuote}
              size="lg"
              className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-secondary hover:to-kilowatt-primary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 animate-glow"
            >
              Obtén tu cotización gratis
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => setIsVideoPlaying(true)}
              className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver cómo funciona
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">25</div>
              <div className="text-white/70 text-sm">Años de garantía</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-white/70 text-sm">Instalaciones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">90%</div>
              <div className="text-white/70 text-sm">Ahorro promedio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
