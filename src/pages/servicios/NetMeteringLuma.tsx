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
import { CheckCircle, RefreshCw } from "lucide-react";

const NetMeteringLuma = () => {
  const netMeteringFAQs = getQAByCategory('net-metering', 2);
  const additionalFAQs = getRandomQA(3, ['net-metering']);
  const faqs = [...netMeteringFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Instalación Residencial",
      description: "Sistema solar completo con net metering",
      href: "/servicios/instalacion-placas-solares-residencial"
    },
    {
      title: "Permisos y Financiamiento",
      description: "Tramitación completa de documentos",
      href: "/servicios/permisos-financiamiento-solar"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Net Metering con LUMA Energy en Puerto Rico | Kilowatt PR"
        description="Tramitación de net metering con LUMA Energy. Maximice su ahorro solar vendiendo exceso a la red. Gestionamos todo el proceso por usted."
        canonicalPath="/servicios/net-metering-luma"
      />
      <ServiceSchema
        serviceName="Net Metering con LUMA Energy"
        serviceDescription="Servicio completo de tramitación de net metering (medición neta) con LUMA Energy para sistemas solares en Puerto Rico"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <RefreshCw className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Net Metering con LUMA Energy en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                El net metering (medición neta) le permite vender su exceso de energía solar a LUMA y recibir créditos en su factura. Es lo que hace que la energía solar sea tan rentable en Puerto Rico. Manejamos todo el proceso de aplicación por usted.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Créditos permanentes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Proceso completo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Incluido en instalación</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Cómo Funciona el Net Metering en Puerto Rico
              </h2>
              <div className="bg-card border-2 border-kilowatt-primary/20 rounded-lg p-8 mb-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary text-sm font-bold">1</span>
                      Durante el Día (Producción Solar)
                    </h3>
                    <p className="text-muted-foreground ml-10">
                      Sus paneles solares producen electricidad. Primero alimentan todos los equipos encendidos en su casa. Si producen MÁS de lo que consume en ese momento, el exceso fluye automáticamente hacia la red de LUMA. Su medidor bidireccional literalmente gira hacia atrás, generando créditos en kWh.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary text-sm font-bold">2</span>
                      Durante la Noche (Consumo de Red)
                    </h3>
                    <p className="text-muted-foreground ml-10">
                      Cuando sus paneles no producen (noches, días muy nublados), consume electricidad de LUMA normalmente. El medidor registra este consumo. PERO, los créditos que acumuló durante el día se aplican automáticamente, reduciendo o eliminando su factura.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground flex items-center gap-2">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary text-sm font-bold">3</span>
                      Facturación Mensual
                    </h3>
                    <p className="text-muted-foreground ml-10">
                      Al final del mes, LUMA calcula: kWh consumidos - kWh exportados = kWh netos. Solo paga los kWh netos (si es que quedan). Si exportó MÁS de lo que consumió, el exceso se transfiere como crédito al próximo mes. Los créditos NO caducan en Puerto Rico.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-kilowatt-primary/10 border border-kilowatt-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Ejemplo Real: Casa en Aguadilla</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold mb-2 text-foreground">Sin Solar (Antes):</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Consumo mensual: 800 kWh</li>
                      <li>• Tarifa promedio: $0.30/kWh</li>
                      <li>• Factura mensual: $240</li>
                      <li>• Factura anual: $2,880</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-foreground">Con Solar + Net Metering:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Producción solar: 850 kWh/mes</li>
                      <li>• Consumo: 800 kWh/mes</li>
                      <li>• Exceso exportado: 50 kWh (créditos)</li>
                      <li>• Factura mensual: $15-25 (cargos fijos)</li>
                      <li>• <span className="font-bold text-kilowatt-primary">Ahorro: 90%</span></li>
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
                Proceso de Aplicación con LUMA Energy
              </h2>
              <p className="text-muted-foreground mb-8">
                El proceso de net metering con LUMA es complejo y burocrático, pero Kilowatt PR lo gestiona completamente por usted como parte de nuestra instalación solar:
              </p>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground">Solicitud de Interconexión (Pre-Instalación)</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Antes de instalar, sometemos aplicación formal a LUMA con: diseño eléctrico del sistema, diagramas unifilares, especificaciones de equipos, certificación de perito electricista, y formularios requeridos.
                      </p>
                      <p className="text-xs text-muted-foreground italic">Timeline: 2-4 semanas para aprobación inicial</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground">Aprobación de Diseño por LUMA</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        LUMA revisa el diseño para verificar cumplimiento con sus estándares de interconexión. Pueden solicitar modificaciones. Una vez aprobado, emiten carta de autorización para proceder con instalación.
                      </p>
                      <p className="text-xs text-muted-foreground italic">Timeline: 1-3 semanas (depende de carga de trabajo LUMA)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground">Instalación del Sistema Solar</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Procedemos con instalación física del sistema según diseño aprobado. Durante esta fase NO conectamos el sistema a la red eléctrica todavía, solo dejamos preparado para conexión final.
                      </p>
                      <p className="text-xs text-muted-foreground italic">Timeline: 2-4 días de instalación</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground">Inspección Municipal</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        El inspector eléctrico del municipio visita para verificar cumplimiento con permisos y código eléctrico. Revisa instalación de paneles, cableado, inversor, y conexiones eléctricas. Emite certificado de inspección aprobada.
                      </p>
                      <p className="text-xs text-muted-foreground italic">Timeline: 1-2 semanas para coordinar inspección</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground">Solicitud de Medidor Bidireccional</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Con certificado de inspección municipal, solicitamos a LUMA instalación del medidor bidireccional (net meter). Sometemos certificado de inspección, fotos del sistema instalado, y formulario final de interconexión.
                      </p>
                      <p className="text-xs text-muted-foreground italic">Timeline: 2-6 semanas (varía mucho según área)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold">6</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground">Instalación del Medidor por LUMA</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        LUMA envía técnico para remover su medidor antiguo e instalar el medidor bidireccional nuevo. Este medidor puede medir flujo de electricidad en ambas direcciones (consumo y exportación). Toma 30-60 minutos.
                      </p>
                      <p className="text-xs text-muted-foreground italic">Instalación: 30-60 minutos en sitio</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold">7</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-foreground">Activación del Sistema (Permission to Operate)</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Una vez instalado el medidor bidireccional, activamos su sistema solar conectándolo a la red. LUMA emite "Permission to Operate" (PTO) oficialmente. Su sistema comienza a producir y exportar exceso a la red inmediatamente.
                      </p>
                      <p className="text-xs text-muted-foreground italic">¡Sistema produciendo con net metering activo!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-card border-2 border-kilowatt-primary/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Timeline Total Típico</h3>
                <p className="text-muted-foreground mb-4">
                  Desde solicitud inicial hasta sistema operando con net metering: <span className="font-bold text-kilowatt-primary">8-12 semanas</span>. Las demoras más comunes ocurren en aprobación de LUMA e instalación del medidor bidireccional.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Nota importante:</span> Aunque el proceso es largo, usted no tiene que hacer nada. Kilowatt PR maneja todas las comunicaciones con LUMA, seguimiento de estatus, y coordinación. Le mantenemos informado en cada etapa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Preguntas Críticas Sobre Net Metering en PR
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">¿Los créditos de net metering caducan?</h3>
                  <p className="text-muted-foreground">
                    NO. En Puerto Rico, los créditos de net metering se transfieren de mes a mes indefinidamente. Si en verano produce mucho exceso, esos créditos estarán disponibles para usarlos en invierno (menos sol) o meses de alto consumo (A/C). Esto hace que sistemas ligeramente sobredimensionados sean estratégicamente inteligentes.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">¿LUMA me paga por mi exceso de energía?</h3>
                  <p className="text-muted-foreground">
                    NO directamente. LUMA le da créditos en kWh (kilowatt-hora) que valen lo mismo que usted paga por electricidad de ellos. Es un intercambio 1:1. Si exporta 100 kWh y la tarifa es $0.30/kWh, su crédito vale $30 que se aplica a futura factura. NO recibirá cheque por exceso de producción anual.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">¿Tengo que pagar algo a LUMA con net metering?</h3>
                  <p className="text-muted-foreground">
                    SÍ, cargos fijos mínimos. Incluso si produce toda su electricidad, pagará aproximadamente $12-25 mensuales en cargos fijos (mantenimiento de medidor, infraestructura, etc.). NO puede reducir su factura a $0 absoluto, pero sí a $15-25 vs $200-300 sin solar.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">¿Qué pasa si me mudo a otra casa?</h3>
                  <p className="text-muted-foreground">
                    El acuerdo de net metering está atado al medidor/propiedad, NO a usted personalmente. El nuevo dueño automáticamente hereda el acuerdo y puede continuar beneficiándose del net metering. Esto hace que propiedades con solar sean más valiosas en el mercado (típicamente 3-4% premium).
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">¿LUMA puede cancelar net metering en el futuro?</h3>
                  <p className="text-muted-foreground">
                    Los acuerdos existentes están protegidos ("grandfathered"). Si LUMA cambia las reglas en el futuro, su acuerdo actual permanece vigente bajo los términos originales. Por eso es ventajoso instalar solar ahora: asegura net metering bajo reglas actuales favorables antes de posibles cambios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para aprovechar net metering?"
          description="Instale su sistema solar y comience a acumular créditos. Manejamos todo el proceso con LUMA por usted."
          utmCampaign="net-metering-luma" 
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

export default NetMeteringLuma;