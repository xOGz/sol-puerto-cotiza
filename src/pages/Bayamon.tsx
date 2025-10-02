import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, Clock, Award } from "lucide-react";

const Bayamon = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Paneles Solares Bayamón - Instalación y Financiamiento | Kilowatt PR"
        description="Instalación de paneles solares en Bayamón, Puerto Rico. Servicio certificado con financiamiento disponible. Ahorra hasta 90% en tu factura LUMA."
        canonicalPath="/paneles-solares-bayamon"
      />
      <Navigation />
      
      <main>
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Paneles Solares en Bayamón
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Ciudad del Chicharrón Ahorra con Solar
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                <strong>Instalación de paneles solares en Bayamón</strong> con financiamiento 
                y servicio certificado. Protégete de apagones y reduce tu factura.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Cotización Gratis Bayamón
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicio en Todo Bayamón
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-kilowatt-primary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cobertura Completa</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Servicio de <strong>paneles solares en Bayamón</strong> para todos los 
                  sectores: residenciales, comerciales e industriales.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Santa Rosa</h4>
                    <p className="text-gray-700 text-sm">Urbanizaciones</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Lomas Verdes</h4>
                    <p className="text-gray-700 text-sm">Residencial</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Parque Industrial</h4>
                    <p className="text-gray-700 text-sm">Comercial</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Centro Urbano</h4>
                    <p className="text-gray-700 text-sm">Todos los barrios</p>
                  </div>
                </div>
              </div>
              <div className="bg-kilowatt-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Municipios Cercanos</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Guaynabo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Toa Alta</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Toa Baja</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Naranjito</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Comerío</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Aguas Buenas</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-kilowatt-secondary mr-2" />
                    <span className="text-gray-700 font-medium">Servicio rápido 24-48 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Por Qué Elegir Solar en Bayamón
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financiamiento Fácil</h3>
                <p className="text-gray-700 mb-4">
                  Múltiples opciones de financiamiento para residentes de Bayamón. 
                  Empieza a ahorrar desde el día 1.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• $0 de inicial disponible</li>
                  <li>• Aprobación en 24 horas</li>
                  <li>• Términos flexibles</li>
                  <li>• Tax credit federal 30%</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalación Rápida</h3>
                <p className="text-gray-700 mb-4">
                  Equipo experto en instalaciones en Bayamón. Conocemos todos los 
                  permisos y regulaciones locales.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Instalación en 1-2 días</li>
                  <li>• Permisos municipales</li>
                  <li>• Inspección LUMA incluida</li>
                  <li>• Garantía extendida</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <MapPin className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio Local</h3>
                <p className="text-gray-700 mb-4">
                  Equipo local que conoce las condiciones específicas de Bayamón 
                  y sus urbanizaciones.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Técnicos locales</li>
                  <li>• Respuesta inmediata</li>
                  <li>• Mantenimiento continuo</li>
                  <li>• Soporte en español</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cotizacion" className="py-16 bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Empieza a Ahorrar en Bayamón Hoy
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cotización personalizada con opciones de financiamiento. 
              Instalación certificada y garantizada.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Solicitar Cotización Gratis
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Financiamiento $0 inicial ✓ Instalación rápida ✓ Servicio local
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Bayamon;