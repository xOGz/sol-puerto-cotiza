import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, Clock, Plane, Waves } from "lucide-react";

const Aguadilla = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Paneles Solares Aguadilla - Instalación Profesional | Kilowatt PR"
        description="Paneles solares Aguadilla con instalación profesional. Servicio especializado en costa noroeste. Sistema solar resistente a ambiente marino y vientos."
        canonicalPath="/paneles-solares-aguadilla"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Paneles Solares Aguadilla
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Costa Noroeste Especializada
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Instalación especializada de <strong>paneles solares en Aguadilla</strong> resistentes 
                al ambiente marino. Expertos en la costa noroeste de Puerto Rico.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Cotización Gratis Aguadilla
              </Button>
            </div>
          </div>
        </section>

        {/* Coastal Challenges Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Soluciones Especializadas para Ambiente Costero
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <Waves className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Resistencia Marina</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Nuestros <strong>paneles solares Aguadilla</strong> están diseñados específicamente 
                  para resistir la corrosión por sal marina y los vientos costeros.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Marcos Anti-Corrosión</h4>
                      <p className="text-gray-700 text-sm">Aluminio marino con recubrimiento especial</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Sellado Hermético</h4>
                      <p className="text-gray-700 text-sm">Protección total contra humedad marina</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Montaje Reforzado</h4>
                      <p className="text-gray-700 text-sm">Estructura resistente a vientos de 180+ mph</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Zonas de Servicio en Aguadilla</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Crash Boat</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Borinquen</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Maleza</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Ramey</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Pueblo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Victoria</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Plane className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700 font-medium">Cerca del Aeropuerto Rafael Hernández</span>
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
              Ventajas de Energía Solar en Aguadilla
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Sol Abundante</h3>
                <p className="text-gray-700 text-center">
                  Aguadilla recibe más de 300 días de sol al año, ideal para 
                  máxima producción de energía solar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Brisa Marina</h3>
                <p className="text-gray-700 text-center">
                  Los vientos costeros ayudan a mantener los paneles frescos, 
                  aumentando su eficiencia.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Alto Ahorro</h3>
                <p className="text-gray-700 text-center">
                  Facturas eléctricas altas en zona costera se reducen 
                  hasta 90% con paneles solares.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Proyectos Exitosos en Aguadilla
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Casa Frente al Mar - Crash Boat</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sistema:</span>
                    <span className="font-bold text-gray-900">12kW con batería</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Factura anterior:</span>
                    <span className="font-bold text-red-600">$350/mes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Factura actual:</span>
                    <span className="font-bold text-green-600">$25/mes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Ahorro anual:</span>
                    <span className="font-bold text-kilowatt-primary">$3,900</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">
                  "Después del huracán María decidimos invertir en energía solar. 
                  Los paneles han resistido múltiples tormentas perfectamente."
                </p>
                <p className="text-gray-900 font-medium text-sm mt-2">- José M., Crash Boat</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Residencia Borinquen</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sistema:</span>
                    <span className="font-bold text-gray-900">8kW grid-tie</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Factura anterior:</span>
                    <span className="font-bold text-red-600">$220/mes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Factura actual:</span>
                    <span className="font-bold text-green-600">$15/mes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Ahorro anual:</span>
                    <span className="font-bold text-kilowatt-primary">$2,460</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">
                  "El proceso fue súper rápido y profesional. En 6 meses 
                  ya recuperé gran parte de la inversión."
                </p>
                <p className="text-gray-900 font-medium text-sm mt-2">- Carmen L., Borinquen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicios Especializados en Aguadilla
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-12 h-12 bg-kilowatt-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-kilowatt-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Instalación Marina</h3>
                <p className="text-gray-700 text-sm">Especializada para ambiente costero</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-12 h-12 bg-kilowatt-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-6 h-6 text-kilowatt-secondary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Protección Huracanes</h3>
                <p className="text-gray-700 text-sm">Sistemas resistentes a vientos extremos</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-12 h-12 bg-kilowatt-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-kilowatt-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Mantenimiento Local</h3>
                <p className="text-gray-700 text-sm">Servicio técnico en Aguadilla</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-12 h-12 bg-kilowatt-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-kilowatt-secondary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Respuesta Rápida</h3>
                <p className="text-gray-700 text-sm">24-48 horas en Aguadilla</p>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Considerations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Consideraciones Climáticas de Aguadilla
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Factores Climatológicos</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-3">🌊</span>
                        <div>
                          <strong className="text-gray-900">Sal Marina:</strong>
                          <span className="text-gray-700"> Paneles con recubrimiento anti-corrosión</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-3">💨</span>
                        <div>
                          <strong className="text-gray-900">Vientos Alisios:</strong>
                          <span className="text-gray-700"> Refrigeración natural aumenta eficiencia</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-600 mr-3">☁️</span>
                        <div>
                          <strong className="text-gray-900">Tormentas:</strong>
                          <span className="text-gray-700"> Estructura reforzada para vientos 180+ mph</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-3">🌴</span>
                        <div>
                          <strong className="text-gray-900">Vegetación:</strong>
                          <span className="text-gray-700"> Diseño considerando sombras naturales</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Beneficios Únicos</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Temperatura Estable</h4>
                        <p className="text-gray-700 text-sm">
                          Brisa marina mantiene temperaturas moderadas, 
                          optimizando rendimiento de paneles.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Limpieza Natural</h4>
                        <p className="text-gray-700 text-sm">
                          Lluvias frecuentes ayudan a mantener 
                          paneles limpios naturalmente.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Sol Consistente</h4>
                        <p className="text-gray-700 text-sm">
                          Exposición solar óptima la mayor parte del año 
                          en la costa noroeste.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cotizacion" className="py-16 bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Energía Solar en Aguadilla?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cotización especializada para su propiedad en Aguadilla. 
              Paneles solares resistentes al ambiente marino con garantía completa.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Cotización Gratis Aguadilla
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Especialistas en costa ✓ Instalación marina ✓ Servicio local garantizado
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Aguadilla;