import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Phone, Clock, Award } from "lucide-react";

const Mayaguez = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Perito Electricista Mayagüez - Instalación Paneles Solares | Kilowatt PR"
        description="Perito electricista Mayagüez especializado en paneles solares. Servicio profesional en Mayagüez y área oeste. Instalación, mantenimiento y certificación solar."
        canonicalPath="/perito-electricista-mayaguez"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Perito Electricista Mayagüez
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Instalación Paneles Solares
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Servicio especializado de <strong>perito electricista en Mayagüez</strong> para 
                instalación de paneles solares. Certificación profesional en el área oeste de Puerto Rico.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Cotización Gratis Mayagüez
              </Button>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Área de Servicio en Mayagüez y Alrededores
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-kilowatt-primary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Cobertura Local Completa</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Nuestro <strong>perito electricista Mayagüez</strong> ofrece servicios completos 
                  de instalación y mantenimiento de paneles solares en toda la región oeste.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Mayagüez Centro</h4>
                    <p className="text-gray-700 text-sm">Instalación residencial y comercial</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Mayagüez Terrace</h4>
                    <p className="text-gray-700 text-sm">Sistemas solares para urbanizaciones</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Zona Industrial</h4>
                    <p className="text-gray-700 text-sm">Proyectos comerciales grandes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Comunidades</h4>
                    <p className="text-gray-700 text-sm">Barrios y sectores rurales</p>
                  </div>
                </div>
              </div>
              <div className="bg-kilowatt-primary/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Municipios Cercanos Atendidos</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Las Marías</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Maricao</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Hormigueros</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Cabo Rojo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">San Germán</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-kilowatt-primary mr-2" />
                    <span className="text-gray-700">Sabana Grande</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-kilowatt-secondary mr-2" />
                    <span className="text-gray-700 font-medium">Tiempo de respuesta: 24-48 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicios Especializados en Mayagüez
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certificación Técnica</h3>
                <p className="text-gray-700 mb-4">
                  Certificados oficiales para instalaciones en Mayagüez cumpliendo 
                  con códigos municipales y de LUMA Energy.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Certificado municipal Mayagüez</li>
                  <li>• Inspección de LUMA Energy</li>
                  <li>• Documentación completa</li>
                  <li>• Seguimiento de permisos</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Instalación Residencial</h3>
                <p className="text-gray-700 mb-4">
                  Sistemas solares diseñados específicamente para hogares en 
                  Mayagüez, considerando clima y condiciones locales.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Diseño personalizado</li>
                  <li>• Instalación en 1-2 días</li>
                  <li>• Garantía extendida</li>
                  <li>• Mantenimiento local</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <MapPin className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proyectos Comerciales</h3>
                <p className="text-gray-700 mb-4">
                  Soluciones solares para negocios y empresas en la zona 
                  industrial y comercial de Mayagüez.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Análisis de consumo comercial</li>
                  <li>• Sistemas trifásicos</li>
                  <li>• Financiamiento empresarial</li>
                  <li>• Monitoreo remoto</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Knowledge Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Conocimiento Local de Mayagüez
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ventajas de Trabajar con Expertos Locales</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Condiciones Climáticas</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Vientos del oeste:</strong> Instalación reforzada</li>
                      <li>• <strong>Humedad costera:</strong> Materiales resistentes</li>
                      <li>• <strong>Tormentas tropicales:</strong> Sistemas seguros</li>
                      <li>• <strong>Sol abundante:</strong> Optimización de ángulos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Normativas Locales</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Permisos municipales:</strong> Proceso ágil</li>
                      <li>• <strong>Códigos de construcción:</strong> Cumplimiento total</li>
                      <li>• <strong>Zonas residenciales:</strong> Experiencia específica</li>
                      <li>• <strong>Área histórica:</strong> Instalación respetuosa</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Testimonios de Clientes en Mayagüez
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "El mejor perito electricista de Mayagüez. Instaló nuestro sistema solar 
                  en Mayagüez Terrace y todo quedó perfecto."
                </p>
                <div className="font-bold text-gray-900">- María R., Mayagüez Terrace</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Excelente servicio local. Conocen bien las regulaciones de Mayagüez 
                  y el proceso fue súper rápido."
                </p>
                <div className="font-bold text-gray-900">- Carlos M., Centro Mayagüez</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Mi negocio en la zona industrial ahora ahorra $400/mes gracias 
                  a los paneles solares que instalaron."
                </p>
                <div className="font-bold text-gray-900">- Roberto L., Zona Industrial</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Contacto Directo en Mayagüez
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-kilowatt-primary/10 to-kilowatt-secondary/10 p-8 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Información de Contacto</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-kilowatt-primary mr-3" />
                        <span className="text-gray-700">787-431-2275</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-kilowatt-secondary mr-3" />
                        <span className="text-gray-700">Servicio en todo Mayagüez</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-kilowatt-primary mr-3" />
                        <span className="text-gray-700">Lun-Vie: 8:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Servicio de Emergencia</h3>
                    <p className="text-gray-700 mb-4">
                      Disponible para emergencias eléctricas y mantenimiento 
                      urgente de sistemas solares en Mayagüez.
                    </p>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-red-800 font-medium text-sm">
                        📞 Llamada de emergencia 24/7 disponible
                      </p>
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
              ¿Listo para Energía Solar en Mayagüez?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cotización personalizada para su hogar o negocio en Mayagüez. 
              Perito electricista certificado con servicio local garantizado.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Solicitar Cotización Mayagüez
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Perito electricista local ✓ Servicio en 24-48 horas ✓ Garantía completa
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Mayaguez;