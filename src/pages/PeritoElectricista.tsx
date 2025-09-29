import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Award, FileCheck, Zap } from "lucide-react";

const PeritoElectricista = () => {
  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Perito Electricista Puerto Rico | Servicios Certificados | Kilowatt PR"
        description="Perito electricista colegiado Puerto Rico. Inspecciones, certificaciones eléctricas y servicios profesionales. Más de 15 años de experiencia en la isla."
        canonicalPath="/perito-electricista-puerto-rico"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Perito Electricista
                <span className="block bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary bg-clip-text text-transparent">
                  Puerto Rico
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                <strong>Perito electricista colegiado</strong> con más de 15 años de experiencia. 
                Servicios de inspección, certificación y consultoría eléctrica en toda Puerto Rico.
              </p>
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-12 py-4 rounded-full font-bold text-lg"
              >
                Solicitar Consulta
              </Button>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Credenciales y Certificaciones
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Shield className="w-12 h-12 text-kilowatt-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Colegio de Ingenieros</h3>
                <p className="text-gray-700 text-sm">Miembro activo del CIAPR con licencia vigente</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Award className="w-12 h-12 text-kilowatt-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">15+ Años</h3>
                <p className="text-gray-700 text-sm">Experiencia en sistemas eléctricos PR</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <FileCheck className="w-12 h-12 text-kilowatt-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Certificado Solar</h3>
                <p className="text-gray-700 text-sm">Especialista en energía renovable</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <Users className="w-12 h-12 text-kilowatt-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">500+ Proyectos</h3>
                <p className="text-gray-700 text-sm">Inspecciones completadas exitosamente</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Servicios de Perito Electricista
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Zap className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inspecciones Eléctricas</h3>
                <p className="text-gray-700 mb-4">
                  Inspección completa de sistemas eléctricos residenciales y comerciales 
                  para certificación de cumplimiento con códigos vigentes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Panel eléctrico principal</li>
                  <li>• Circuitos y conexiones</li>
                  <li>• Sistema de tierra</li>
                  <li>• Protecciones GFCI/AFCI</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <FileCheck className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certificaciones</h3>
                <p className="text-gray-700 mb-4">
                  Emisión de certificados oficiales para trámites con LUMA Energy, 
                  permisos municipales y otros requisitos legales.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Certificado de instalación</li>
                  <li>• Certificado de seguridad</li>
                  <li>• Certificado para net metering</li>
                  <li>• Inspección pre-venta</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Shield className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consultoría Solar</h3>
                <p className="text-gray-700 mb-4">
                  Evaluación técnica especializada para instalación de sistemas 
                  de energía solar y conexión a la red eléctrica.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Análisis de carga eléctrica</li>
                  <li>• Diseño de sistema solar</li>
                  <li>• Documentación técnica</li>
                  <li>• Supervisión de instalación</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Award className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Peritaje Legal</h3>
                <p className="text-gray-700 mb-4">
                  Servicios de peritaje para casos legales, seguros y disputas 
                  relacionadas con instalaciones eléctricas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Análisis de fallas eléctricas</li>
                  <li>• Informes técnicos legales</li>
                  <li>• Testimonio experto</li>
                  <li>• Evaluación de daños</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-kilowatt-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Auditoría Energética</h3>
                <p className="text-gray-700 mb-4">
                  Evaluación completa del consumo eléctrico y recomendaciones 
                  para mejoras de eficiencia energética.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Análisis de facturación</li>
                  <li>• Medición de cargas</li>
                  <li>• Recomendaciones de mejora</li>
                  <li>• Cálculo de ahorros</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <Users className="w-12 h-12 text-kilowatt-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Capacitación</h3>
                <p className="text-gray-700 mb-4">
                  Cursos y talleres sobre seguridad eléctrica, códigos 
                  y mejores prácticas para técnicos y electricistas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Código Eléctrico Nacional</li>
                  <li>• Seguridad en altura</li>
                  <li>• Instalación solar</li>
                  <li>• Certificación técnica</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Proceso de Inspección y Certificación
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-kilowatt-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Solicitud</h3>
                <p className="text-gray-700 text-sm">Contacto inicial y programación de cita para inspección</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-kilowatt-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Inspección</h3>
                <p className="text-gray-700 text-sm">Evaluación técnica completa en sitio según códigos vigentes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-kilowatt-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Informe</h3>
                <p className="text-gray-700 text-sm">Documentación detallada con hallazgos y recomendaciones</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-kilowatt-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Certificación</h3>
                <p className="text-gray-700 text-sm">Emisión de certificado oficial si cumple con estándares</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cotizacion" className="py-16 bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Necesita un Perito Electricista Certificado?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Obtenga servicios profesionales de perito electricista colegiado. 
              Consulta inicial sin costo para evaluar sus necesidades.
            </p>
            <Button 
              size="lg"
              className="bg-white text-kilowatt-primary hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg"
            >
              Programar Consulta
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              ✓ Perito colegiado ✓ 15+ años experiencia ✓ Certificados oficiales
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PeritoElectricista;