
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const packages = [
    {
      name: "Básico",
      subtitle: "Sin batería",
      price: "Desde $8,500",
      popular: false,
      features: [
        "4-6 paneles solares",
        "Inversor de cadena",
        "Monitoreo básico",
        "Garantía 25 años",
        "Instalación incluida",
        "Permisos LUMA"
      ],
      savings: "Ahorro: 40-60%",
      ideal: "Ideal para hogares pequeños"
    },
    {
      name: "Completo",
      subtitle: "Con batería",
      price: "Desde $15,800",
      popular: true,
      features: [
        "8-12 paneles solares",
        "Batería de respaldo",
        "Inversor híbrido",
        "Monitoreo avanzado",
        "Garantía 25 años",
        "Instalación incluida",
        "Permisos LUMA",
        "Respaldo en apagones"
      ],
      savings: "Ahorro: 70-90%",
      ideal: "Ideal para familias promedio"
    },
    {
      name: "Premium",
      subtitle: "Sistema completo",
      price: "Desde $28,500",
      popular: false,
      features: [
        "16+ paneles solares",
        "Batería de alta capacidad",
        "Microinversores",
        "Monitoreo premium",
        "Garantía extendida",
        "Instalación premium",
        "Mantenimiento incluido",
        "Soporte prioritario"
      ],
      savings: "Ahorro: 85-95%",
      ideal: "Ideal para casas grandes"
    }
  ];

  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precios" className="section-spacing bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes de energía solar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Tenemos el sistema perfecto para cada hogar y presupuesto. Todos incluyen garantía completa y financiamiento disponible.
          </p>
          
          {/* Financing Banner */}
          <div className="inline-flex items-center glass px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-solar-500 mr-2" />
            <span className="text-solar-700 font-medium">Financiamiento 0% interés inicial disponible</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative animate-fade-in-up ${
                pkg.popular ? 'scale-105 z-10' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-solar-500 to-solar-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Recomendado
                  </div>
                </div>
              )}
              
              <div className={`glass p-8 rounded-3xl h-full ${
                pkg.popular ? 'border-2 border-solar-200 shadow-xl' : ''
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                  <div className="text-3xl font-bold text-solar-500 mb-2">{pkg.price}</div>
                  <div className="text-sm text-green-600 font-medium mb-2">{pkg.savings}</div>
                  <div className="text-sm text-gray-500">{pkg.ideal}</div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={scrollToQuote}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-solar-500 to-solar-600 hover:from-solar-600 hover:to-solar-700 text-white animate-glow'
                      : 'bg-white border-2 border-solar-200 text-solar-600 hover:bg-solar-50'
                  }`}
                >
                  Obtener cotización
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass p-8 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿No estás seguro cuál plan necesitas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestros expertos analizarán tu consumo actual y te recomendarán el sistema perfecto para maximizar tu ahorro.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Respuesta en 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
