import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Sun, Battery, Zap, TrendingUp } from "lucide-react";

const EnergiaRenovable = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Energía Renovable Puerto Rico | Sistemas Solares Sostenibles | Kilowatt PR"
        description="Energía renovable Puerto Rico con sistemas solares avanzados. Soluciones sostenibles para hogares y negocios. Reduce tu huella de carbono y ahorra dinero."
        canonicalPath="/energia-renovable-puerto-rico"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Energía Renovable
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Puerto Rico
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Lidere la transición hacia <strong>energía renovable en Puerto Rico</strong> con 
                sistemas solares avanzados. Soluciones sostenibles que protegen el medio ambiente 
                y su economía familiar.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Explorar Soluciones Verdes
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Beneficios de la Energía Renovable en Puerto Rico
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-green-50 p-6 rounded-2xl text-center">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cero Emisiones</h3>
                <p className="text-gray-700">
                  Reduce tu huella de carbono eliminando hasta 4 toneladas de CO₂ 
                  al año con un sistema solar Puerto Rico.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl text-center">
                <Sun className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Energía Abundante</h3>
                <p className="text-gray-700">
                  Puerto Rico recibe 300+ días de sol al año, ideal para generar 
                  energía renovable constante y confiable.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ahorro Económico</h3>
                <p className="text-gray-700">
                  Ahorros promedio de $2,000-$4,000 anuales en facturas eléctricas 
                  con sistemas de energía renovable.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl text-center">
                <Battery className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Independencia Energética</h3>
                <p className="text-gray-700">
                  Reduce dependencia de combustibles fósiles y protégete de 
                  aumentos en costos de electricidad.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl text-center">
                <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Energía 24/7</h3>
                <p className="text-gray-700">
                  Sistemas con baterías proporcionan energía renovable las 24 horas, 
                  incluso durante apagones de LUMA.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl text-center">
                <CheckCircle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tecnología Probada</h3>
                <p className="text-gray-700">
                  Paneles solares con 25 años de garantía y tecnología avanzada 
                  para máxima eficiencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Tecnologías de Energía Renovable Disponibles
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Sun className="w-16 h-16 text-kilowatt-primary mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Energía Solar Fotovoltaica</h3>
                    <p className="text-gray-600">Conversión directa de luz solar en electricidad</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700"><strong>Paneles monocristalinos</strong>: Mayor eficiencia (20-22%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700"><strong>Paneles policristalinos</strong>: Excelente relación costo-beneficio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700"><strong>Paneles bifaciales</strong>: Captan luz por ambos lados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700"><strong>Microinversores</strong>: Optimización por panel individual</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Ideal para techos residenciales y comerciales con exposición solar directa.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Battery className="w-16 h-16 text-kilowatt-secondary mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Almacenamiento de Energía</h3>
                    <p className="text-gray-600">Baterías avanzadas para energía 24/7</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700"><strong>Baterías de litio</strong>: Larga duración (10+ años)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700"><strong>Sistemas híbridos</strong>: Solar + batería + red</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700"><strong>Gestión inteligente</strong>: Optimización automática</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700"><strong>Respaldo de emergencia</strong>: Protección durante apagones</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Perfecto para hogares que buscan independencia energética total.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Impacto Ambiental de la Energía Renovable
            </h2>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-3xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Un Sistema Solar de 10kW Evita:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700"><strong>4 toneladas</strong> de CO₂ anuales</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700"><strong>180 árboles</strong> plantados equivalente</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700"><strong>50,000 millas</strong> de conducción en auto</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700"><strong>100 toneladas</strong> de CO₂ en 25 años</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-gray-700 font-medium">Familias usando energía limpia</div>
                    <div className="text-4xl font-bold text-blue-600 mt-4 mb-2">2,000</div>
                    <div className="text-gray-700 font-medium">Toneladas de CO₂ evitadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              El Futuro de la Energía en Puerto Rico
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Metas de Energía Renovable</h3>
                <p className="text-gray-700 mb-4">
                  Puerto Rico tiene la meta de alcanzar <strong>100% energía renovable para 2050</strong>. 
                  Esta transición incluye:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700">40% renovable para 2025</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700">60% renovable para 2040</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700">Eliminación de carbón</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700">Microrredes inteligentes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700">Almacenamiento masivo</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-gray-700">Red distribuida</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-kilowatt-primary/10 to-kilowatt-secondary/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Por Qué Actuar Ahora?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-kilowatt-primary mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Incentivos Actuales</h4>
                    <p className="text-gray-700 text-sm">Créditos fiscales y programas disponibles hoy</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-kilowatt-secondary mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Tecnología Madura</h4>
                    <p className="text-gray-700 text-sm">Sistemas probados con garantías extendidas</p>
                  </div>
                  <div className="text-center">
                    <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">Impacto Inmediato</h4>
                    <p className="text-gray-700 text-sm">Comienza a generar energía limpia desde día 1</p>
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
              Únete a la Revolución de Energía Renovable
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comienza tu transición hacia energía renovable Puerto Rico. 
              Evaluación gratuita de potencial solar y diseño personalizado.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Evaluar Mi Potencial Solar
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Análisis personalizado ✓ Cálculo de ahorros ✓ Opciones de financiamiento
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EnergiaRenovable;