import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, Clock, Award } from "lucide-react";

const Arecibo = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Paneles Solares Arecibo - Instalación Área Norte | Kilowatt PR"
        description="Instalación de paneles solares en Arecibo, Puerto Rico. Servicio certificado en Villa del Capitán Correa. Ahorra hasta 90% en tu factura LUMA."
        canonicalPath="/paneles-solares-arecibo"
      />
      <Navigation />
      
      <main>
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Paneles Solares en Arecibo
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Villa del Capitán Correa con Energía Solar
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                <strong>Instalación de paneles solares en Arecibo</strong> y área norte. 
                Servicio certificado con máximo ahorro y protección contra apagones.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Cotización Gratis Arecibo
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicio en Todo Arecibo
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-kilowatt-primary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cobertura Área Norte</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Servicio de <strong>paneles solares en Arecibo</strong> para toda la 
                  región norte, incluyendo zona urbana y rural.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Centro Urbano</h4>
                    <p className="text-gray-700 text-sm">Zona comercial</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Islote</h4>
                    <p className="text-gray-700 text-sm">Zona costera</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Domingas</h4>
                    <p className="text-gray-700 text-sm">Residencial</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Barrios</h4>
                    <p className="text-gray-700 text-sm">Todos los sectores</p>
                  </div>
                </div>
              </div>
              <div className="bg-kilowatt-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Municipios Cercanos</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Hatillo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Barceloneta</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Florida</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Utuado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Camuy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Quebradillas</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-kilowatt-secondary mr-2" />
                    <span className="text-gray-700 font-medium">Servicio en 24-48 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Ventajas Solar en Arecibo
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Zona Costera Norte</h3>
                <p className="text-gray-700 mb-4">
                  Arecibo tiene excelente exposición solar. Instalación adaptada 
                  a condiciones costeras del norte.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Producción solar óptima</li>
                  <li>• Instalación reforzada</li>
                  <li>• Materiales anti-corrosión</li>
                  <li>• Garantía completa</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio Local</h3>
                <p className="text-gray-700 mb-4">
                  Equipo con experiencia en Arecibo. Conocemos las condiciones 
                  y regulaciones del área norte.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Técnicos del área</li>
                  <li>• Permisos locales</li>
                  <li>• Respuesta rápida</li>
                  <li>• Mantenimiento continuo</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <MapPin className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ahorro Garantizado</h3>
                <p className="text-gray-700 mb-4">
                  Reduce tu factura de LUMA hasta 90%. Sistema de respaldo 
                  para apagones frecuentes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ahorro inmediato</li>
                  <li>• Baterías de respaldo</li>
                  <li>• Net metering</li>
                  <li>• Financiamiento disponible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cotizacion" className="py-16 bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Energía Solar en Arecibo Ahora
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cotización sin compromiso. Instalación certificada para zona 
              costera norte.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Solicitar Cotización Gratis
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Evaluación gratis ✓ Servicio certificado ✓ Financiamiento disponible
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Arecibo;