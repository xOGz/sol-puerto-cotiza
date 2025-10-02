import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import ServiceSchema from "@/components/ServiceSchema";
import CTASection from "@/components/CTASection";
import ServiceFAQ from "@/components/ServiceFAQ";
import InternalLinks from "@/components/InternalLinks";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import { getRandomQA } from "@/data/qaContent";
import { CheckCircle, Search } from "lucide-react";

const InspeccionSistema = () => {
  const faqs = getRandomQA(5);

  const relatedServices = [
    {
      title: "Reparación de Inversores",
      description: "Diagnóstico y reparación especializada",
      href: "/servicios/reparacion-inversores-solares"
    },
    {
      title: "Mantenimiento Solar",
      description: "Contratos de mantenimiento preventivo",
      href: "/servicios/mantenimiento-solar"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Inspección Técnica de Sistemas Solares en Puerto Rico | Kilowatt PR"
        description="Inspección completa de sistemas solares en PR. Diagnóstico profesional, termografía infrarroja y análisis de producción. Detecte problemas antes que empeoren."
        canonicalPath="/servicios/inspeccion-sistema-solar"
      />
      <ServiceSchema
        serviceName="Inspección Técnica de Sistemas Solares"
        serviceDescription="Inspección exhaustiva y diagnóstico profesional de sistemas de energía solar con equipos especializados"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Search className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Inspección Técnica de Sistemas Solares en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                ¿Su sistema solar no produce lo esperado? ¿Compró una propiedad con solar instalado? ¿Quiere verificar que todo funcione correctamente? Nuestra inspección técnica detallada identifica problemas ocultos y optimiza su rendimiento.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Termografía infrarroja</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Análisis de producción</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Reporte detallado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Cuándo Necesita una Inspección Profesional
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Señales de Problemas</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Producción 20%+ menor que lo proyectado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Caída repentina en generación de energía</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Mensajes de error en inversor/monitoreo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Sistema tiene 5+ años sin inspección</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Después de tormenta o huracán</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Inspección Due Diligence</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Comprando propiedad con solar instalado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Evaluando sistema antes de asumir lease/PPA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Verificación antes de expirar garantía</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Segunda opinión sobre cotización de reparación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Auditoría de instalación reciente</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Qué Incluye Nuestra Inspección Completa
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">1</span>
                    Análisis de Documentación
                  </h3>
                  <p className="text-muted-foreground mb-4 ml-13">
                    Revisamos permisos, diseño original, garantías, historial de mantenimiento, y facturas de LUMA (antes/después de solar). Identificamos discrepancias entre lo prometido y lo instalado.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">2</span>
                    Inspección Visual de Paneles
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-13">
                    <li>• Verificación de grietas, delaminación, quemaduras</li>
                    <li>• Estado de marcos, vidrio, y caja de conexiones</li>
                    <li>• Evaluación de suciedad y necesidad de limpieza</li>
                    <li>• Evidencia de hot spots (sobrecalentamiento)</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">3</span>
                    Termografía Infrarroja (Incluida)
                  </h3>
                  <p className="text-muted-foreground mb-4 ml-13">
                    Usamos cámara térmica para detectar paneles/celdas defectuosas invisibles al ojo. Los hot spots indican fallas internas que reducen producción hasta 50% del panel afectado. Identificamos bypass diodes defectuosos y conexiones de alta resistencia.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">4</span>
                    Análisis de Inversor y Eléctrico
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-13">
                    <li>• Revisión de logs de error y eventos</li>
                    <li>• Medición voltajes DC y AC</li>
                    <li>• Verificación conexiones y torque apropiado</li>
                    <li>• Inspección breakers, disconnects, grounding</li>
                    <li>• Prueba funcionalidad microinversores individuales</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">5</span>
                    Evaluación Estructural
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-13">
                    <li>• Condición estructuras de montaje y rieles</li>
                    <li>• Torque de tornillos críticos</li>
                    <li>• Verificación sellado techo y penetraciones</li>
                    <li>• Evaluación cumplimiento código vientos PR</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">6</span>
                    Análisis de Producción vs Esperado
                  </h3>
                  <p className="text-muted-foreground mb-4 ml-13">
                    Comparamos producción real de últimos 12 meses con proyecciones originales ajustadas por radiación solar real del periodo. Calculamos performance ratio (PR) y identificamos underperformance. Un PR bajo de 75% indica problemas significativos.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">7</span>
                    Evaluación de Baterías (si aplica)
                  </h3>
                  <ul className="space-y-2 text-muted-foreground ml-13">
                    <li>• Estado de salud (SOH) y capacidad retenida</li>
                    <li>• Historial de ciclos y profundidad descarga</li>
                    <li>• Calibración BMS y balance de celdas</li>
                    <li>• Vida útil remanente estimada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Reporte Detallado que Recibirá
              </h2>
              <div className="bg-card border-2 border-kilowatt-primary/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contenido del Reporte (25-40 páginas)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-foreground">Sección 1: Resumen Ejecutivo</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Hallazgos principales y criticidad</li>
                      <li>• Recomendaciones priorizadas</li>
                      <li>• Estimado de costos de correcciones</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-foreground">Sección 2: Análisis de Producción</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Gráficas producción mensual/anual</li>
                      <li>• Performance ratio calculado</li>
                      <li>• Ahorro real vs proyectado</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-foreground">Sección 3: Hallazgos Fotográficos</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Fotos anotadas de problemas</li>
                      <li>• Imágenes termográficas con análisis</li>
                      <li>• Comparaciones antes/estado actual</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-foreground">Sección 4: Análisis Técnico</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Inventario completo de componentes</li>
                      <li>• Evaluación vida útil remanente</li>
                      <li>• Análisis cumplimiento código</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-foreground">Sección 5: Plan de Acción</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Reparaciones inmediatas necesarias</li>
                      <li>• Mantenimiento preventivo sugerido</li>
                      <li>• Timeline y presupuesto estimado</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-foreground">Sección 6: Apéndices</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Data sheets de componentes</li>
                      <li>• Logs de inversor extraídos</li>
                      <li>• Referencias técnicas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Precios de Inspección
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Inspección Residencial</h3>
                  <div className="text-4xl font-bold text-kilowatt-primary mb-4">$299</div>
                  <ul className="text-left space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Sistemas hasta 15 kW</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Termografía incluida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Reporte completo 3-5 días</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Fotos y análisis detallado</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Inspección Comercial</h3>
                  <div className="text-4xl font-bold text-kilowatt-primary mb-4">$599+</div>
                  <ul className="text-left space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Sistemas 15+ kW</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Análisis producción avanzado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Reporte ejecutivo + técnico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Consulta post-inspección</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground mt-8">
                Si contrata reparaciones con nosotros basadas en la inspección, aplicamos el <span className="font-bold text-kilowatt-primary">100% del costo de inspección</span> como crédito hacia el trabajo.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para saber la verdad sobre su sistema?"
          description="Agende su inspección profesional. Sabrá exactamente qué funciona, qué no, y cuánto le está costando."
          utmCampaign="inspeccion-sistema" 
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

export default InspeccionSistema;