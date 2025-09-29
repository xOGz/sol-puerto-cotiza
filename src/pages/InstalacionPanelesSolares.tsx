import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock, Zap, Shield } from "lucide-react";

const InstalacionPanelesSolares = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Instalación Paneles Solares Puerto Rico | Sistemas Residenciales | Kilowatt PR"
        description="Instalación profesional de paneles solares en Puerto Rico. Sistema solar residencial con garantía 25 años. Cotización gratuita y financiamiento disponible."
        canonicalPath="/instalacion-paneles-solares"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Instalación Paneles Solares
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Puerto Rico
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Especialistas en <strong>instalación profesional de paneles solares</strong> para hogares y negocios. 
                Sistema solar residencial PR con garantía de 25 años y financiamiento disponible.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Solicitar Cotización Gratuita
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Proceso de Instalación Paneles Solares
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-kilowatt-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Evaluación Técnica</h3>
                <p className="text-gray-700">
                  Análisis completo de su techo, consumo eléctrico y diseño personalizado del 
                  sistema solar residencial PR más eficiente para su hogar.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-kilowatt-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Instalación Profesional</h3>
                <p className="text-gray-700">
                  Instalación de paneles solares Puerto Rico por técnicos certificados. 
                  Incluye sellado de techo y conexión eléctrica segura.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-kilowatt-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Activación y Monitoreo</h3>
                <p className="text-gray-700">
                  Activación del sistema, conexión a la red eléctrica y entrenamiento 
                  sobre el monitoreo de su sistema solar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Beneficios de Instalar Paneles Solares en Puerto Rico
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Zap className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ahorro Inmediato</h3>
                <p className="text-gray-700">
                  Reduzca hasta 90% su factura de LUMA Energy desde el primer mes de instalación.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Shield className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Garantía Extendida</h3>
                <p className="text-gray-700">
                  25 años de garantía en paneles solares y 10 años en inversores con servicio local.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Valor de Propiedad</h3>
                <p className="text-gray-700">
                  Aumente el valor de su propiedad con un sistema solar moderno y eficiente.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Clock className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalación Rápida</h3>
                <p className="text-gray-700">
                  Proceso completo de instalación en 1-2 días para sistemas residenciales típicos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Users className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio Local</h3>
                <p className="text-gray-700">
                  Empresa puertorriqueña con técnicos locales y servicio post-venta garantizado.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financiamiento</h3>
                <p className="text-gray-700">
                  Opciones de financiamiento flexibles y programas de incentivos disponibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Systems Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Tipos de Sistemas Solares Disponibles
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistema Básico</h3>
                <div className="text-4xl font-bold text-kilowatt-primary mb-4">5kW</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />15-20 paneles solares</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Inversor string</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Monitoreo básico</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Sellado de techo incluido</li>
                </ul>
                <p className="text-gray-700 text-sm">Ideal para hogares pequeños con factura de $100-150/mes</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl text-center border-2 border-kilowatt-primary">
                <div className="bg-kilowatt-primary text-white px-3 py-1 rounded-full text-sm font-bold mb-4">Más Popular</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistema Premium</h3>
                <div className="text-4xl font-bold text-kilowatt-primary mb-4">10kW</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />30-35 paneles solares</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Microinversores</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Batería de respaldo</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Monitoreo avanzado</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Sellado premium</li>
                </ul>
                <p className="text-gray-700 text-sm">Perfecto para hogares medianos con factura de $200-300/mes</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistema Comercial</h3>
                <div className="text-4xl font-bold text-kilowatt-primary mb-4">25kW+</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />75+ paneles solares</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Inversores trifásicos</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Sistema de baterías</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Monitoreo empresarial</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-600 mr-2" />Mantenimiento incluido</li>
                </ul>
                <p className="text-gray-700 text-sm">Para negocios y empresas con alto consumo eléctrico</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cotizacion" className="py-16 bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Instalar Paneles Solares?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Obtenga una cotización personalizada para su sistema solar residencial PR. 
              Evaluación gratuita sin compromiso.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Solicitar Cotización Ahora
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Respuesta en 24 horas ✓ Evaluación técnica gratuita ✓ Financiamiento disponible
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default InstalacionPanelesSolares;