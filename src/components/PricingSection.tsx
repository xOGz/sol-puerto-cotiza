
import { Check, Zap, Home, Building, Mountain, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const packages = [
    {
      name: "Sistema Grid-Tied",
      subtitle: "Solo placas",
      price: "Desde $8,500",
      popular: false,
      icon: Home,
      type: "residential",
      features: [
        "6-8 paneles solares",
        "Microinversores Enphase",
        "Garantía 25 años en paneles",
        "Garantía 10 años en microinversores",
        "Monitoreo avanzado incluido",
        "Lavado de placas gratis el primer año"
      ],
      limitations: ["Sin batería ni respaldo"],
      ideal: "Ideal para bajar consumo conectado a LUMA",
      category: "Residencial"
    },
    {
      name: "Sistema Mediano con Respaldo",
      subtitle: "Con batería de litio",
      price: "Desde $15,800",
      popular: true,
      icon: Zap,
      type: "residential",
      features: [
        "10-12 paneles solares",
        "10-15 kWh de batería de litio",
        "Inversor híbrido",
        "Garantía 25 años en paneles",
        "Garantía 10 años en inversor y batería",
        "Monitoreo avanzado",
        "Permisos LUMA incluidos",
        "Energía durante apagones",
        "Lavado de placas gratis el primer año"
      ],
      limitations: [],
      ideal: "Perfecto para familias promedio",
      category: "Residencial"
    },
    {
      name: "Sistema Grande Alta Capacidad",
      subtitle: "Máximo rendimiento",
      price: "Desde $23,000",
      popular: false,
      icon: Building,
      type: "residential",
      features: [
        "20+ paneles solares",
        "20+ kWh de batería de litio",
        "Inversor híbrido",
        "Ideal para casas con alto consumo y aires acondicionados",
        "Garantías completas (paneles, inversor, batería)",
        "Monitoreo avanzado",
        "Permisos LUMA incluidos",
        "Lavado de placas gratis el primer año"
      ],
      limitations: [],
      ideal: "Ideal para casas grandes",
      category: "Residencial"
    },
    {
      name: "Sistema 100% Off-Grid",
      subtitle: "Sin conexión a LUMA",
      price: "Cotización personalizada",
      popular: false,
      icon: Mountain,
      type: "offgrid",
      features: [
        "Para viviendas sin conexión a LUMA",
        "Diseño personalizado",
        "Batería e inversor de gran capacidad",
        "Ingeniería especializada",
        "Monitoreo incluido",
        "Instalación por personal certificado"
      ],
      limitations: [],
      ideal: "Para ubicaciones remotas",
      category: "Off-Grid"
    },
    {
      name: "Sistema Solar Comercial",
      subtitle: "Para negocios",
      price: "Cotización personalizada",
      popular: false,
      icon: Wrench,
      type: "commercial",
      features: [
        "Para negocios, oficinas o propiedades industriales",
        "Diseño a medida según consumo y espacio",
        "Incluye permisos, monitoreo, e ingeniería",
        "Garantías comerciales extendidas",
        "Soporte técnico especializado",
        "ROI optimizado para empresas"
      ],
      limitations: [],
      ideal: "Ideal para reducir costos operativos",
      category: "Comercial"
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
        {/* SEO Optimized Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ofertas de Sistemas Solares en Puerto Rico
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Instalación profesional, monitoreo, garantías y ahorro garantizado.
          </p>
        </div>

        {/* 5-Column Grid for Desktop, Responsive for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            
            return (
              <div 
                key={index}
                className={`relative animate-fade-in-up ${
                  pkg.popular ? 'xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-1' : ''
                } ${index >= 3 ? 'xl:col-span-1 lg:col-span-1 md:col-span-1' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Más Popular
                    </div>
                  </div>
                )}
                
                <div className={`glass p-6 rounded-2xl h-full flex flex-col ${
                  pkg.popular ? 'border-2 border-kilowatt-primary/30 shadow-xl transform scale-105' : 'border border-gray-200'
                } transition-all duration-300 hover:shadow-lg`}>
                  
                  {/* Header with Icon */}
                  <div className="text-center mb-6">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-kilowatt-primary/20 to-kilowatt-secondary/20 rounded-xl flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-kilowatt-primary" />
                    </div>
                    <div className="text-xs font-medium text-kilowatt-secondary uppercase tracking-wide mb-2">
                      {pkg.category}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{pkg.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{pkg.subtitle}</p>
                    <div className="text-2xl font-bold text-kilowatt-primary mb-2">{pkg.price}</div>
                    <div className="text-xs text-gray-500 mb-1">{pkg.ideal}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-kilowatt-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-tight">{feature}</span>
                      </div>
                    ))}
                    
                    {/* Limitations */}
                    {pkg.limitations.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        {pkg.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            <span className="text-orange-500 mr-2 flex-shrink-0">⚠️</span>
                            <span className="text-orange-700 leading-tight">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={scrollToQuote}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white shadow-lg'
                        : 'bg-white border-2 border-kilowatt-primary/30 text-kilowatt-primary hover:bg-kilowatt-primary/5 hover:border-kilowatt-primary/50'
                    }`}
                  >
                    Cotiza Gratis
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 animate-fade-in-up">
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Beneficios incluidos en todos los sistemas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-kilowatt-primary mr-3 flex-shrink-0" />
                <span className="text-gray-700">Monitoreo incluido en todos los sistemas</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-kilowatt-primary mr-3 flex-shrink-0" />
                <span className="text-gray-700">Lavado de placas gratis el primer año</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-kilowatt-primary mr-3 flex-shrink-0" />
                <span className="text-gray-700">Instalación por personal certificado</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-kilowatt-primary mr-3 flex-shrink-0" />
                <span className="text-gray-700">Garantías reales y claras en tienda local</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <div className="glass p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              ¿No estás seguro cuál sistema necesitas?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Nuestros expertos analizarán tu consumo actual y te recomendarán el sistema perfecto.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-kilowatt-primary mr-2" />
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-kilowatt-primary mr-2" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-kilowatt-primary mr-2" />
                <span>Respuesta en 24h</span>
              </div>
            </div>
            
            <Button 
              onClick={scrollToQuote}
              className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
            >
              Solicitar Evaluación Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
