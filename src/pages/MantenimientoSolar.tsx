import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, Wrench, Shield, Clock, TrendingUp, Droplets } from "lucide-react";

const MantenimientoSolar = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Mantenimiento Paneles Solares Puerto Rico | Reparación Sistema Solar | Kilowatt PR"
        description="Mantenimiento sistema solar Puerto Rico. Reparación paneles solares, limpieza profesional y optimización. Servicio técnico especializado con garantía."
        canonicalPath="/mantenimiento-paneles-solares"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Mantenimiento Paneles Solares
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Puerto Rico
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Servicio especializado en <strong>mantenimiento sistema solar Puerto Rico</strong>. 
                Reparación paneles solares, limpieza profesional y optimización para máximo rendimiento.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Programar Mantenimiento
              </Button>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              ¿Por Qué es Importante el Mantenimiento Solar?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-red-50 rounded-2xl">
                <TrendingUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pérdida de Eficiencia</h3>
                <p className="text-gray-700 text-sm">
                  Sin mantenimiento, los paneles pueden perder hasta 25% de eficiencia
                </p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-2xl">
                <Droplets className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Polvo del Sahara</h3>
                <p className="text-gray-700 text-sm">
                  Puerto Rico recibe polvo africano que reduce significativamente el rendimiento
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Protección de Inversión</h3>
                <p className="text-gray-700 text-sm">
                  Mantenimiento regular extiende la vida útil del sistema a 25+ años
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Garantía Válida</h3>
                <p className="text-gray-700 text-sm">
                  Mantiene vigente la garantía del fabricante y del instalador
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicios de Mantenimiento Sistema Solar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Droplets className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limpieza Profesional</h3>
                <p className="text-gray-700 mb-4">
                  Limpieza especializada de paneles solares con equipos y técnicas 
                  que no dañan las superficies delicadas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Limpieza cada 3-6 meses</li>
                  <li>• Agua purificada y herramientas especiales</li>
                  <li>• Remoción de polvo del Sahara</li>
                  <li>• Limpieza de marcos y conexiones</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Wrench className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reparación Paneles Solares</h3>
                <p className="text-gray-700 mb-4">
                  Diagnóstico y reparación de fallas en el sistema solar, 
                  incluyendo paneles, inversores y cableado.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Reemplazo de paneles dañados</li>
                  <li>• Reparación de inversores</li>
                  <li>• Arreglo de conexiones sueltas</li>
                  <li>• Actualización de componentes</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Shield className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inspección Preventiva</h3>
                <p className="text-gray-700 mb-4">
                  Revisión completa del sistema para identificar problemas 
                  potenciales antes de que se conviertan en fallas costosas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Inspección visual de paneles</li>
                  <li>• Pruebas de rendimiento</li>
                  <li>• Revisión de conexiones eléctricas</li>
                  <li>• Verificación de estructura de montaje</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Optimización de Rendimiento</h3>
                <p className="text-gray-700 mb-4">
                  Ajustes y mejoras para maximizar la producción de energía 
                  y los ahorros en su factura eléctrica.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Análisis de producción histórica</li>
                  <li>• Ajuste de ángulos si es necesario</li>
                  <li>• Actualización de software</li>
                  <li>• Recomendaciones de mejora</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Clock className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoreo Continuo</h3>
                <p className="text-gray-700 mb-4">
                  Supervisión remota del sistema para detectar problemas 
                  inmediatamente y programar mantenimiento proactivo.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Monitoreo 24/7 remoto</li>
                  <li>• Alertas automáticas de fallas</li>
                  <li>• Reportes mensuales de rendimiento</li>
                  <li>• Diagnóstico remoto</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio de Garantía</h3>
                <p className="text-gray-700 mb-4">
                  Mantenimiento bajo garantía y gestión de reclamaciones 
                  con fabricantes de equipos.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Servicio de garantía incluido</li>
                  <li>• Gestión de reclamaciones</li>
                  <li>• Reemplazo bajo garantía</li>
                  <li>• Documentación de mantenimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Cronograma de Mantenimiento Recomendado
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Mantenimiento Regular</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-bold text-gray-900">Cada 3 meses</h4>
                      <p className="text-gray-700 text-sm">Limpieza básica, inspección visual</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold text-gray-900">Cada 6 meses</h4>
                      <p className="text-gray-700 text-sm">Limpieza profunda, verificación de conexiones</p>
                    </div>
                    <div className="border-l-4 border-yellow-600 pl-4">
                      <h4 className="font-bold text-gray-900">Cada año</h4>
                      <p className="text-gray-700 text-sm">Inspección completa, pruebas de rendimiento</p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Factores Especiales en PR</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-600 pl-4">
                      <h4 className="font-bold text-gray-900">Temporada de Polvo del Sahara</h4>
                      <p className="text-gray-700 text-sm">Junio-Agosto: limpieza más frecuente</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-bold text-gray-900">Post-Huracán</h4>
                      <p className="text-gray-700 text-sm">Inspección inmediata después de eventos</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h4 className="font-bold text-gray-900">Zona Costera</h4>
                      <p className="text-gray-700 text-sm">Mantenimiento más frecuente por sal marina</p>
                    </div>
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
              Beneficios del Mantenimiento Profesional
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Aumento en Eficiencia</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="font-medium text-gray-900">Paneles sucios</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-4 mr-3">
                        <div className="bg-red-500 h-4 rounded-full" style={{width: '75%'}}></div>
                      </div>
                      <span className="text-sm font-bold text-red-600">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="font-medium text-gray-900">Paneles limpios</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-4 mr-3">
                        <div className="bg-green-500 h-4 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-sm font-bold text-green-600">95%</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    <strong>Ganancia de hasta 20% en producción</strong> con mantenimiento regular
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ahorro Económico</h3>
                <div className="bg-white p-6 rounded-2xl">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-kilowatt-primary">$150-300</div>
                    <div className="text-gray-600">Costo anual de mantenimiento</div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-500">VS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">$2,000+</div>
                    <div className="text-gray-600">Pérdida anual sin mantenimiento</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg mt-4">
                    <p className="text-center text-green-800 font-bold">
                      ROI: $7 ahorrados por cada $1 invertido
                    </p>
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
              Protege Tu Inversión Solar
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Programa mantenimiento profesional para tu sistema solar Puerto Rico. 
              Evaluación gratuita del estado actual de tus paneles.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Agendar Mantenimiento
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Evaluación gratuita ✓ Técnicos certificados ✓ Servicio de garantía
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MantenimientoSolar;