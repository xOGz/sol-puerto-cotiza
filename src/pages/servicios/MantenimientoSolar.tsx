import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import ServiceSchema from "@/components/ServiceSchema";
import CTASection from "@/components/CTASection";
import ServiceFAQ from "@/components/ServiceFAQ";
import InternalLinks from "@/components/InternalLinks";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import { getQAByCategory, getRandomQA } from "@/data/qaContent";
import { CheckCircle, Wrench } from "lucide-react";

const MantenimientoSolar = () => {
  const maintenanceFAQs = getQAByCategory('mantenimiento', 2);
  const additionalFAQs = getRandomQA(3, ['mantenimiento']);
  const faqs = [...maintenanceFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Limpieza de Placas",
      description: "Servicio profesional de limpieza",
      href: "/servicios/limpieza-de-placas"
    },
    {
      title: "Inspección de Sistema",
      description: "Diagnóstico completo y preventivo",
      href: "/servicios/inspeccion-sistema-solar"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Mantenimiento de Sistemas Solares en Puerto Rico | Kilowatt PR"
        description="Mantenimiento preventivo y correctivo de placas solares en PR. Maximice producción y vida útil. Contratos anuales con limpieza incluida."
        canonicalPath="/servicios/mantenimiento-solar"
      />
      <ServiceSchema
        serviceName="Mantenimiento de Sistemas Solares"
        serviceDescription="Servicio completo de mantenimiento preventivo y correctivo para sistemas de energía solar en Puerto Rico"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Wrench className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Mantenimiento de Sistemas Solares en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Un sistema solar es una inversión de 25+ años. El mantenimiento adecuado asegura producción óptima, detecta problemas temprano, y maximiza su retorno de inversión. No deje su sistema al descuido.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Limpieza + inspección</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Monitoreo remoto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Contratos anuales</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Por qué el Mantenimiento es Crítico en Puerto Rico
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p className="mb-4 leading-relaxed">
                  Puerto Rico presenta condiciones ambientales únicas que afectan sistemas solares: polvo del Sahara (reduce eficiencia 15-25%), salitre costero (corrosión acelerada), humedad tropical alta (degradación de conexiones), y tormentas frecuentes (daño estructural potencial).
                </p>
                <p className="leading-relaxed">
                  Sin mantenimiento regular, un sistema puede perder 20-30% de su producción en solo 2-3 años. Esto significa miles de dólares en ahorro perdido. El mantenimiento preventivo cuesta una fracción del problema que previene.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-kilowatt-primary mb-2">15-25%</div>
                  <p className="text-muted-foreground">Pérdida de producción por suciedad acumulada</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-kilowatt-primary mb-2">$2,000+</div>
                  <p className="text-muted-foreground">Ahorro anual perdido sin mantenimiento</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-kilowatt-primary mb-2">3-5 años</div>
                  <p className="text-muted-foreground">Reducción de vida útil sin cuidado apropiado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Nuestros Planes de Mantenimiento
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border-2 border-border rounded-lg p-6 hover:border-kilowatt-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Básico</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-4">$249<span className="text-lg text-muted-foreground">/año</span></div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>2 limpiezas anuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Inspección visual básica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Reporte de producción</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Soporte telefónico</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">Ideal para sistemas residenciales pequeños (≤7 kW)</p>
                </div>

                <div className="bg-card border-2 border-kilowatt-primary rounded-lg p-6 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-kilowatt-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Más Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Premium</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-4">$499<span className="text-lg text-muted-foreground">/año</span></div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>4 limpiezas anuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Inspección técnica completa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Monitoreo remoto 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Revisión inversor/baterías</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Verificación estructura/sellado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Prioridad en servicio</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">Ideal para sistemas medianos (8-15 kW) o con baterías</p>
                </div>

                <div className="bg-card border-2 border-border rounded-lg p-6 hover:border-kilowatt-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Comercial</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-4">Personalizado</div>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Limpiezas mensuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Inspecciones trimestrales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Monitoreo remoto avanzado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Termografía infrarroja</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Reportes ejecutivos mensuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>SLA garantizado</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">Para sistemas comerciales (20+ kW) e industriales</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Qué Incluyen Nuestras Inspecciones
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Inspección de Paneles</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Limpieza profunda con equipo especializado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Verificación de grietas, hot spots, delaminación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Revisión de marcos y cableado expuesto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Medición de producción individual (microinversores)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Inspección Eléctrica</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Revisión inversor: temperatura, mensajes error</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Verificación conexiones: torque, corrosión</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Prueba de aislamiento y continuidad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Actualización firmware si disponible</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Inspección Estructural</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Verificación torque tornillos de montaje</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Inspección rieles y abrazaderas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Revisión sellado techo (filtraciones)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Evaluación daño por animales/vegetación</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Inspección de Baterías</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Verificación estado de carga (SOC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Revisión capacidad retenida (SOH)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Calibración BMS (sistema gestión baterías)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Limpieza ventilación y sensores temperatura</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para proteger su inversión?"
          description="Solicite una inspección inicial gratuita y cotización de contrato de mantenimiento personalizado."
          utmCampaign="mantenimiento-solar" 
        />
        <LeadCaptureSection />
        <InternalLinks 
          title="Servicios Relacionados" 
          links={relatedServices}
          columns={2}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MantenimientoSolar;