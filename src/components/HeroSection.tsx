import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero section - Kilowatt PR Solar Energy"
    >
      {/* Background Image with Dark Overlay for Better Contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/36135bc9-cdde-43b3-83e0-846ebd47fff6.png"
          alt="Instalación profesional de paneles solares en Puerto Rico"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          
          {/* Eyebrow */}
          <p className="font-manrope font-bold text-sm md:text-base uppercase tracking-[0.15em] text-kilowatt-primary mb-4">
            Peritos electricistas certificados
          </p>

          {/* H1 - Only H1 on the page */}
          <h1 className="font-manrope font-extrabold text-white mb-6 leading-tight" style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            letterSpacing: '0.2px',
            maxWidth: '900px',
            margin: '0 auto 1.5rem'
          }}>
            Energía solar y baterías en Puerto Rico
          </h1>

          {/* Support Paragraph */}
          <p className="font-manrope font-medium text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
            Diseño, instalación y servicio técnico de placas solares y sistemas de almacenamiento. Cumplimos NEC y procesos de LUMA. Atendemos toda la isla.
          </p>

          {/* CTA Section */}
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="font-manrope font-semibold bg-kilowatt-primary hover:bg-kilowatt-primary/90 text-white px-10 py-6 rounded-lg text-base transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kilowatt-primary"
            >
              Solicitar evaluación
            </Button>
            <a 
              href="tel:+17874312275"
              className="font-manrope font-medium text-white/95 hover:text-white text-base transition-colors duration-200 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded px-2 py-1"
            >
              o llámanos al (787) 431-2275
            </a>
          </div>

          {/* Trust Bar */}
          <div className="font-manrope font-semibold text-sm text-white/90 flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <span className="whitespace-nowrap">Respuesta en 24 h</span>
            <span className="hidden md:inline text-white/60">·</span>
            <span className="whitespace-nowrap">Garantías de fabricante</span>
            <span className="hidden md:inline text-white/60">·</span>
            <span className="whitespace-nowrap">Trabajo en toda la isla</span>
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
  );
};

export default HeroSection;
