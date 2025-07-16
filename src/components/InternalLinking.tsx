import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const InternalLinking = () => {
  const internalLinks = [
    {
      title: "Servicios de Instalación",
      description: "Conoce nuestros servicios completos de instalación de placas solares",
      href: "#servicios",
      type: "internal"
    },
    {
      title: "Preguntas Frecuentes",
      description: "Respuestas a las preguntas más comunes sobre placas solares",
      href: "#preguntas",
      type: "internal"
    },
    {
      title: "Blog Solar",
      description: "Artículos y guías sobre energía solar en Puerto Rico",
      href: "/blog",
      type: "page"
    },
    {
      title: "Contacto",
      description: "Obtén tu cotización gratuita en menos de 24 horas",
      href: "#cotizacion",
      type: "internal"
    }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explora Más Sobre Placas Solares en Puerto Rico
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre todo lo que necesitas saber sobre <strong>instalación de paneles solares</strong> y comienza a ahorrar hoy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {internalLinks.map((link, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {link.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {link.description}
              </p>
              
              {link.type === "page" ? (
                <Link
                  to={link.href}
                  className="inline-flex items-center text-kilowatt-primary hover:text-kilowatt-primary/80 font-medium text-sm"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              ) : (
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="inline-flex items-center text-kilowatt-primary hover:text-kilowatt-primary/80 font-medium text-sm"
                >
                  Ver más
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Additional SEO Links */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Servicios de Energía Solar en Puerto Rico
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <button 
                onClick={() => scrollToSection('#servicios')}
                className="text-kilowatt-primary hover:text-kilowatt-primary/80 hover:underline"
              >
                Instalación de Placas Solares
              </button>
              <span className="text-gray-400">•</span>
              <button 
                onClick={() => scrollToSection('#servicios')}
                className="text-kilowatt-primary hover:text-kilowatt-primary/80 hover:underline"
              >
                Sistemas Solares con Batería
              </button>
              <span className="text-gray-400">•</span>
              <button 
                onClick={() => scrollToSection('#servicios')}
                className="text-kilowatt-primary hover:text-kilowatt-primary/80 hover:underline"
              >
                Sellado de Techo
              </button>
              <span className="text-gray-400">•</span>
              <button 
                onClick={() => scrollToSection('#servicios')}
                className="text-kilowatt-primary hover:text-kilowatt-primary/80 hover:underline"
              >
                Lavado de Placas Solares
              </button>
              <span className="text-gray-400">•</span>
              <button 
                onClick={() => scrollToSection('#servicios')}
                className="text-kilowatt-primary hover:text-kilowatt-primary/80 hover:underline"
              >
                Mantenimiento Solar
              </button>
            </div>
            
            <div className="mt-4 text-xs text-gray-500">
              <p>
                Servimos: <strong>Aguada</strong>, <strong>Mayagüez</strong>, <strong>San Juan</strong>, <strong>Ponce</strong>, <strong>Caguas</strong>, <strong>Bayamón</strong>, <strong>Arecibo</strong>, <strong>Guaynabo</strong>, <strong>Carolina</strong>, <strong>Dorado</strong>, <strong>Rincón</strong> y toda Puerto Rico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinking;