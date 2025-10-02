import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, Clock, Award } from "lucide-react";

const SanJuan = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Paneles Solares San Juan - Instalación Certificada | Kilowatt PR"
        description="Instalación de paneles solares en San Juan, Puerto Rico. Servicio profesional certificado para residencias y negocios. Ahorra en tu factura de luz hoy."
        canonicalPath="/paneles-solares-san-juan"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Paneles Solares en San Juan
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Instalación Profesional Certificada
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Servicio especializado de <strong>paneles solares en San Juan</strong> para 
                hogares y negocios. Reduce tu factura de luz hasta 90% con energía solar.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Cotización Gratis San Juan
              </Button>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Área de Servicio en San Juan Metropolitano
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-kilowatt-primary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cobertura Completa Área Metro</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Ofrecemos <strong>instalación de paneles solares en San Juan</strong> y toda el 
                  área metropolitana, con servicio profesional y garantizado.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Viejo San Juan</h4>
                    <p className="text-gray-700 text-sm">Instalación especializada</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Condado</h4>
                    <p className="text-gray-700 text-sm">Sistemas residenciales premium</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Miramar</h4>
                    <p className="text-gray-700 text-sm">Proyectos comerciales</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Río Piedras</h4>
                    <p className="text-gray-700 text-sm">Todos los barrios</p>
                  </div>
                </div>
              </div>
              <div className="bg-kilowatt-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Municipios Cercanos Atendidos</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Carolina</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Guaynabo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Bayamón</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Trujillo Alto</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Cataño</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Toa Baja</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-kilowatt-secondary mr-2" />
                    <span className="text-gray-700 font-medium">Respuesta rápida en 24 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Ventajas de Paneles Solares en San Juan
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce Factura LUMA</h3>
                <p className="text-gray-700 mb-4">
                  En San Juan, donde las facturas de LUMA son altas, los paneles solares 
                  pueden reducir tu costo hasta 90%.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ahorro inmediato mensual</li>
                  <li>• Protección contra aumentos</li>
                  <li>• Net metering disponible</li>
                  <li>• ROI en 4-6 años</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Protección Apagones</h3>
                <p className="text-gray-700 mb-4">
                  Con sistema de baterías, mantén tu hogar o negocio funcionando 
                  durante los frecuentes apagones.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Respaldo automático</li>
                  <li>• Sin interrupciones</li>
                  <li>• Protege equipos</li>
                  <li>• Tranquilidad total</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <MapPin className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalación Experta</h3>
                <p className="text-gray-700 mb-4">
                  Equipo certificado con experiencia en todo tipo de techos y 
                  estructuras en San Juan.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Instalación en 1-2 días</li>
                  <li>• Permisos incluidos</li>
                  <li>• Garantía completa</li>
                  <li>• Servicio post-venta</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cotizacion" className="py-16 bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Energía Solar en San Juan?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Obtén tu cotización personalizada hoy. Instalación profesional certificada 
              con financiamiento disponible.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Solicitar Cotización Gratis
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Servicio certificado ✓ Respuesta 24 horas ✓ Financiamiento disponible
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SanJuan;