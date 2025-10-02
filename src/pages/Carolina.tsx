import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, Clock, Award } from "lucide-react";

const Carolina = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Paneles Solares Carolina - Instalación Certificada Área Metro | Kilowatt PR"
        description="Instalación de paneles solares en Carolina, Puerto Rico. Servicio profesional cerca del aeropuerto. Ahorra en tu factura de luz con energía solar."
        canonicalPath="/paneles-solares-carolina"
      />
      <Navigation />
      
      <main>
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Paneles Solares en Carolina
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Tierra de Gigantes, Energía del Sol
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                <strong>Instalación de paneles solares en Carolina</strong> para residencias 
                y negocios. Protección contra apagones y ahorro garantizado.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Cotización Gratis Carolina
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicio en Todo Carolina
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-kilowatt-primary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cobertura Total</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Servicio completo de <strong>paneles solares en Carolina</strong>, desde 
                  Isla Verde hasta las comunidades rurales.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Isla Verde</h4>
                    <p className="text-gray-700 text-sm">Zona turística</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Villa Fontana</h4>
                    <p className="text-gray-700 text-sm">Residencial</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Canovanillas</h4>
                    <p className="text-gray-700 text-sm">Urbanizaciones</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Lomas</h4>
                    <p className="text-gray-700 text-sm">Todos los sectores</p>
                  </div>
                </div>
              </div>
              <div className="bg-kilowatt-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Municipios Cercanos</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">San Juan</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Trujillo Alto</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Canóvanas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Loíza</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Río Grande</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Gurabo</span>
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Beneficios en Carolina
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Zona Costera Ideal</h3>
                <p className="text-gray-700 mb-4">
                  Carolina tiene excelente exposición solar. Perfecta ubicación para 
                  máxima generación de energía solar.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Alta radiación solar</li>
                  <li>• Producción óptima</li>
                  <li>• ROI acelerado</li>
                  <li>• Ahorro máximo</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Protección Huracanes</h3>
                <p className="text-gray-700 mb-4">
                  Instalación reforzada contra vientos huracanados. Sistemas 
                  certificados para zona costera.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Estructura reforzada</li>
                  <li>• Certificación huracanes</li>
                  <li>• Materiales premium</li>
                  <li>• Garantía completa</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <MapPin className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio Completo</h3>
                <p className="text-gray-700 mb-4">
                  Desde evaluación inicial hasta mantenimiento continuo. 
                  Todo incluido en Carolina.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Evaluación gratis</li>
                  <li>• Diseño personalizado</li>
                  <li>• Instalación certificada</li>
                  <li>• Mantenimiento local</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cotizacion" className="py-16 bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Energía Solar en Carolina Hoy
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cotización personalizada sin compromiso. Instalación certificada 
              para zona costera.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Solicitar Cotización Gratis
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Evaluación gratis ✓ Instalación certificada ✓ Servicio garantizado
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Carolina;