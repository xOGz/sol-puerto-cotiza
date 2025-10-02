import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, Clock, Award } from "lucide-react";

const Humacao = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Paneles Solares Humacao - Instalación Área Este | Kilowatt PR"
        description="Instalación de paneles solares en Humacao, Puerto Rico. Servicio certificado en La Ciudad Gris. Ahorra hasta 90% en tu factura de luz."
        canonicalPath="/paneles-solares-humacao"
      />
      <Navigation />
      
      <main>
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Paneles Solares en Humacao
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Energía Solar en La Perla del Oriente
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                <strong>Instalación de paneles solares en Humacao</strong> y área este. 
                Servicio certificado con protección contra apagones.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Cotización Gratis Humacao
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicio en Todo Humacao
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-kilowatt-primary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cobertura Área Este</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Servicio especializado de <strong>paneles solares en Humacao</strong> para 
                  toda la región este de Puerto Rico.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Humacao Pueblo</h4>
                    <p className="text-gray-700 text-sm">Centro urbano</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Palmas del Mar</h4>
                    <p className="text-gray-700 text-sm">Resort residencial</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Antón Ruiz</h4>
                    <p className="text-gray-700 text-sm">Urbanizaciones</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Mariana</h4>
                    <p className="text-gray-700 text-sm">Todos los sectores</p>
                  </div>
                </div>
              </div>
              <div className="bg-kilowatt-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Municipios Cercanos</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Yabucoa</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Las Piedras</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Naguabo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Juncos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Maunabo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Ceiba</span>
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
              Ventajas Solar en Humacao
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Costa Este Ideal</h3>
                <p className="text-gray-700 mb-4">
                  Humacao tiene excelente exposición solar en la costa este. 
                  Perfecta para máxima generación.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Alta radiación solar</li>
                  <li>• Producción optimizada</li>
                  <li>• ROI acelerado</li>
                  <li>• Ahorro maximizado</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Protección Huracanes</h3>
                <p className="text-gray-700 mb-4">
                  Instalación reforzada para zona este. Sistemas certificados 
                  contra vientos huracanados.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Estructura reforzada</li>
                  <li>• Certificación completa</li>
                  <li>• Materiales premium</li>
                  <li>• Garantía extendida</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <MapPin className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio Este</h3>
                <p className="text-gray-700 mb-4">
                  Equipo dedicado al área este con experiencia en Humacao 
                  y municipios cercanos.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Técnicos del área</li>
                  <li>• Respuesta rápida</li>
                  <li>• Mantenimiento local</li>
                  <li>• Soporte continuo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cotizacion" className="py-16 bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Energía Solar en Humacao Ahora
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cotización personalizada sin compromiso. Instalación certificada 
              para costa este.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Solicitar Cotización Gratis
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Evaluación gratis ✓ Instalación reforzada ✓ Servicio certificado
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Humacao;