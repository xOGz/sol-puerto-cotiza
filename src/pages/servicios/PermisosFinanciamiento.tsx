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
import { CheckCircle, FileText } from "lucide-react";

const PermisosFinanciamiento = () => {
  const permisosFAQs = getQAByCategory('permisos', 2);
  const financingFAQs = getQAByCategory('financiamiento', 2);
  const faqs = [...permisosFAQs, ...financingFAQs, ...getRandomQA(1)];

  const relatedServices = [
    {
      title: "Net Metering LUMA",
      description: "Tramitación de medición neta",
      href: "/servicios/net-metering-luma"
    },
    {
      title: "Instalación Residencial",
      description: "Sistema completo con permisos incluidos",
      href: "/servicios/instalacion-placas-solares-residencial"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Permisos y Financiamiento para Solar en Puerto Rico | Kilowatt PR"
        description="Gestión completa de permisos municipales, LUMA y financiamiento solar en PR. Proceso simplificado desde aplicación hasta activación."
        canonicalPath="/servicios/permisos-financiamiento-solar"
      />
      <ServiceSchema
        serviceName="Permisos y Financiamiento Solar"
        serviceDescription="Servicio completo de tramitación de permisos y coordinación de financiamiento para instalaciones solares en Puerto Rico"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <FileText className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Permisos y Financiamiento Solar en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                La burocracia de permisos y la complejidad de opciones de financiamiento pueden ser abrumadoras. Kilowatt PR gestiona todo el proceso por usted: desde permisos municipales hasta aprobación de préstamo solar.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Permisos completos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Financiamiento $0 inicial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Proceso simplificado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Permisos Requeridos en Puerto Rico
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">1. Permiso de Construcción Municipal</h3>
                  <p className="text-muted-foreground mb-4">
                    Cada municipio en Puerto Rico requiere permiso de construcción para instalar sistema solar en techo. Proceso y costos varían significativamente entre municipios (desde $150 en pueblos pequeños hasta $800+ en San Juan).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold mb-2 text-foreground">Documentación Típica:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Planos estructurales sellados por ingeniero</li>
                        <li>• Diagrama eléctrico unifilar</li>
                        <li>• Especificaciones de equipos</li>
                        <li>• Cálculo de cargas de viento</li>
                        <li>• Planilla de permisos del municipio</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-foreground">Timeline Típico:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Preparación documentos: 1-2 semanas</li>
                        <li>• Revisión municipal: 2-6 semanas</li>
                        <li>• Correcciones (si necesario): 1-2 semanas</li>
                        <li>• Emisión permiso: 4-8 semanas total</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">2. Permiso Eléctrico (si aplicable)</h3>
                  <p className="text-muted-foreground mb-4">
                    Si el sistema solar requiere modificaciones al panel eléctrico principal (upgrade de breakers, nuevo sub-panel), necesitará permiso eléctrico adicional. Como perito electricista certificado, Kilowatt PR gestiona este permiso cuando necesario.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">3. Acuerdo de Interconexión LUMA Energy</h3>
                  <p className="text-muted-foreground mb-4">
                    Para sistemas conectados a la red (grid-tied) con net metering, LUMA Energy debe aprobar la interconexión. Este proceso está separado de permisos municipales y puede tomar 4-8 semanas adicionales.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Ver más detalles en nuestra página dedicada de <a href="/servicios/net-metering-luma" className="text-kilowatt-primary hover:underline">Net Metering con LUMA</a>.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">4. Inspección Final Municipal</h3>
                  <p className="text-muted-foreground mb-4">
                    Una vez completada la instalación, el inspector eléctrico del municipio debe visitar y aprobar el trabajo. Verifican cumplimiento con planos aprobados, código eléctrico NEC, y seguridad general. Emiten certificado de final de obra.
                  </p>
                  <div className="bg-muted/50 rounded p-4 text-sm text-muted-foreground">
                    <p className="font-semibold mb-2 text-foreground">Lo que Kilowatt PR hace por usted:</p>
                    <ul className="space-y-1">
                      <li>✓ Preparamos toda documentación técnica requerida</li>
                      <li>✓ Radicamos permisos en su nombre</li>
                      <li>✓ Seguimiento constante con oficinas municipales</li>
                      <li>✓ Respondemos comentarios y correcciones</li>
                      <li>✓ Coordinamos inspecciones finales</li>
                      <li>✓ Obtenemos certificados de aprobación</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Opciones de Financiamiento Solar en Puerto Rico
              </h2>
              <p className="text-muted-foreground mb-8">
                No tiene que pagar todo el sistema de contado. Múltiples opciones de financiamiento permiten comenzar a ahorrar inmediatamente con $0 de pago inicial.
              </p>
              <div className="space-y-6">
                <div className="bg-card border-2 border-kilowatt-primary/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Préstamo Solar (Más Popular)</h3>
                  <p className="text-muted-foreground mb-4">
                    Similar a préstamo de auto: pago mensual fijo por 10-20 años. En muchos casos, el pago del préstamo es MENOR que lo que ahorra en factura de LUMA, generando flujo de caja positivo desde mes 1.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3 text-foreground">Ventajas:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                          <span>$0 pago inicial disponible</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                          <span>Tasas competitivas (5-9% APR típico)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                          <span>USTED es dueño del sistema (no lease)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                          <span>Califica para crédito federal 30% ITC</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                          <span>Pago anticipado sin penalidades</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-foreground">Consideraciones:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>Requiere score de crédito 650+ típicamente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>Verifica deuda-ingreso (debt-to-income ratio)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>Interés total pagado durante vida del préstamo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>Usted responsable de mantenimiento sistema</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-kilowatt-primary/10 rounded-lg">
                    <p className="text-sm text-foreground">
                      <span className="font-bold">Ejemplo Real:</span> Sistema $25,000. Préstamo 12 años, 6.99% APR, $0 inicial. Pago mensual: $242. Ahorro promedio factura LUMA: $250/mes. <span className="font-bold text-kilowatt-primary">Flujo de caja positivo: +$8/mes desde día 1.</span> Después de 12 años, $0 pagos y sigue ahorrando $250/mes por 13+ años adicionales.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">HELOC (Home Equity Line of Credit)</h3>
                  <p className="text-muted-foreground mb-4">
                    Si tiene equidad en su propiedad, puede usar línea de crédito HELOC para financiar el sistema solar. Típicamente ofrece tasas más bajas que préstamos solares dedicados (3-7% APR).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold mb-2">Ventajas:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Tasas generalmente más bajas</li>
                        <li>• Flexible - usa solo lo que necesite</li>
                        <li>• Interés puede ser deducible de impuestos</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Desventajas:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Requiere equidad significativa en casa</li>
                        <li>• Su casa es colateral (riesgo foreclosure)</li>
                        <li>• Proceso aprobación más largo</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Pago al Contado (Cash)</h3>
                  <p className="text-muted-foreground mb-4">
                    Si tiene el capital disponible, pagar de contado ofrece el ROI más rápido y mayor ahorro a largo plazo (sin intereses). Puede aplicar el crédito federal 30% ITC en su declaración de impuestos del mismo año.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold mb-2">Ventajas:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Sin intereses = máximo ahorro lifetime</li>
                        <li>• Payback más rápido (5-7 años)</li>
                        <li>• No requiere aprobación de crédito</li>
                        <li>• Proceso de instalación más rápido</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Consideraciones:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Requiere capital disponible significativo</li>
                        <li>• Costo oportunidad de ese capital</li>
                        <li>• Menos liquidez temporalmente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-card border-2 border-kilowatt-primary/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Cómo Kilowatt PR le Ayuda con Financiamiento</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                    <span>Trabajamos con múltiples instituciones financieras que ofrecen préstamos solares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                    <span>Pre-calificación rápida (soft pull de crédito, no afecta score)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                    <span>Comparamos opciones y le presentamos las mejores tasas disponibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                    <span>Asistimos con documentación y aplicación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                    <span>Explicamos términos en español, claramente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para simplificar el proceso?"
          description="Manejamos permisos y financiamiento por usted. Enfóquese en el ahorro, nosotros nos encargamos del papeleo."
          utmCampaign="permisos-financiamiento" 
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

export default PermisosFinanciamiento;