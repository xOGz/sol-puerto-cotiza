import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, Clock, Award } from "lucide-react";

const Guaynabo = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Paneles Solares Guaynabo - Instalación Premium Certificada | Kilowatt PR"
        description="Instalación de paneles solares en Guaynabo, Puerto Rico. Servicio premium certificado para residencias y negocios. Ahorra hasta 90% en tu factura."
        canonicalPath="/paneles-solares-guaynabo"
      />
      <Navigation />
      
      <main>
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Paneles Solares en Guaynabo
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Instalación Premium Certificada
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                <strong>Instalación de paneles solares en Guaynabo</strong> con servicio 
                premium. Especialistas en residencias de alto valor y proyectos comerciales.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Cotización Gratis Guaynabo
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicio Premium en Todo Guaynabo
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-kilowatt-primary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cobertura Completa</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Servicio especializado de <strong>paneles solares en Guaynabo</strong> para 
                  urbanizaciones premium y zonas comerciales.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Torrimar</h4>
                    <p className="text-gray-700 text-sm">Residencial premium</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Villa Caparra</h4>
                    <p className="text-gray-700 text-sm">Zona residencial</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">San Patricio</h4>
                    <p className="text-gray-700 text-sm">Comercial</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Santa Rosa</h4>
                    <p className="text-gray-700 text-sm">Urbanizaciones</p>
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
                    <span className="text-gray-700">Bayamón</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Cataño</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Aguas Buenas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Toa Baja</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Naranjito</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-kilowatt-secondary mr-2" />
                    <span className="text-gray-700 font-medium">Servicio prioritario 24 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicios Premium en Guaynabo
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalación Estética</h3>
                <p className="text-gray-700 mb-4">
                  Instalación diseñada para preservar la estética de tu propiedad 
                  en Guaynabo. Paneles premium de alta eficiencia.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Paneles todo negro</li>
                  <li>• Diseño arquitectónico</li>
                  <li>• Instalación limpia</li>
                  <li>• Acabados premium</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sistemas Avanzados</h3>
                <p className="text-gray-700 mb-4">
                  Tecnología de punta: microinversores, baterías Tesla, 
                  monitoreo inteligente y más.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Microinversores Enphase</li>
                  <li>• Baterías Tesla Powerwall</li>
                  <li>• App de monitoreo</li>
                  <li>• Automatización completa</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <MapPin className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio VIP</h3>
                <p className="text-gray-700 mb-4">
                  Atención personalizada con gerente de proyecto dedicado. 
                  Soporte prioritario 24/7.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Gerente de proyecto</li>
                  <li>• Soporte prioritario</li>
                  <li>• Mantenimiento premium</li>
                  <li>• Garantía extendida</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cotizacion" className="py-16 bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Energía Solar Premium en Guaynabo
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cotización personalizada para tu propiedad. Servicio premium con 
              tecnología de punta.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Solicitar Cotización Premium
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Servicio VIP ✓ Tecnología premium ✓ Garantía extendida
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Guaynabo;