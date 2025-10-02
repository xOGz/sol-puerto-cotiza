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
import { CheckCircle, TrendingUp } from "lucide-react";

const ActualizacionAmpliacion = () => {
  const ampliacionFAQs = getQAByCategory('ampliacion', 2);
  const additionalFAQs = getRandomQA(3, ['ampliacion']);
  const faqs = [...ampliacionFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Reparación de Inversores",
      description: "Diagnóstico y upgrade de inversores",
      href: "/servicios/reparacion-inversores-solares"
    },
    {
      title: "Baterías LFP",
      description: "Agregue almacenamiento a su sistema",
      href: "/servicios/baterias-almacenamiento-lfp"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Actualización y Ampliación de Sistemas Solares en Puerto Rico | Kilowatt PR"
        description="Amplíe o actualice su sistema solar existente en PR. Agregue paneles, baterías o inversores más eficientes. Diseño compatible garantizado."
        canonicalPath="/servicios/actualizacion-y-ampliacion-solar"
      />
      <ServiceSchema
        serviceName="Actualización y Ampliación de Sistemas Solares"
        serviceDescription="Servicio de expansión y modernización de sistemas solares existentes con diseño compatible e integración perfecta"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <TrendingUp className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Actualización y Ampliación de Sistemas Solares en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                ¿Su consumo aumentó? ¿Compró vehículo eléctrico? ¿Quiere agregar baterías? Ampliamos y modernizamos sistemas solares existentes manteniendo compatibilidad y optimizando rendimiento.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Diseño compatible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Sin afectar garantías</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Permisos gestionados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Razones Comunes para Ampliar Su Sistema
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Aumento de Consumo</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Compra de vehículo eléctrico (necesita 3-5 kW extra)</li>
                    <li>• Ampliación de la casa o construcción adicional</li>
                    <li>• Instalación de pool o jacuzzi</li>
                    <li>• Aire acondicionado adicional</li>
                    <li>• Sistema actual ya no cubre factura completa</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Modernización Tecnológica</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Agregar baterías para respaldo de apagones</li>
                    <li>• Upgrade a microinversores más eficientes</li>
                    <li>• Reemplazo de paneles antiguos de baja eficiencia</li>
                    <li>• Integración de monitoreo avanzado</li>
                    <li>• Optimización con power optimizers</li>
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
                Tipos de Ampliación que Ofrecemos
              </h2>
              <div className="space-y-6">
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Ampliación de Paneles (Misma Tecnología)</h3>
                  <p className="text-muted-foreground mb-4">
                    Si tiene espacio adicional en el techo y su inversor tiene capacidad disponible, simplemente agregamos más paneles. Ideal para sistemas con microinversores donde cada panel opera independientemente.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Ventajas:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Proceso más sencillo y rápido</li>
                        <li>• Menor costo por kW agregado</li>
                        <li>• Compatibilidad garantizada</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Consideraciones:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Requiere capacidad en inversor existente</li>
                        <li>• Espacio disponible en techo</li>
                        <li>• Permisos de ampliación con LUMA</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Sistema Dual (Segundo Inversor)</h3>
                  <p className="text-muted-foreground mb-4">
                    Si su inversor actual está al máximo, instalamos un segundo sistema independiente con su propio inversor. Ambos sistemas trabajan en paralelo, duplicando o incrementando su capacidad total.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Ventajas:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• No limitado por inversor existente</li>
                        <li>• Redundancia (si uno falla, otro funciona)</li>
                        <li>• Posibilidad de usar tecnología superior</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Consideraciones:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Costo inicial mayor (nuevo inversor)</li>
                        <li>• Requiere espacio en panel eléctrico</li>
                        <li>• Dos sistemas de monitoreo separados</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Integración de Baterías</h3>
                  <p className="text-muted-foreground mb-4">
                    Agregamos almacenamiento de baterías a su sistema solar existente, incluso si originalmente no fue diseñado para ello. Usamos inversores híbridos o sistemas AC-coupled según su configuración actual.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Ventajas:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Respaldo durante apagones</li>
                        <li>• Maximiza autosuficiencia energética</li>
                        <li>• Reduce dependencia de LUMA</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Consideraciones:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Inversión significativa ($8K-$20K+)</li>
                        <li>• Puede requerir upgrade de panel eléctrico</li>
                        <li>• ROI más largo (8-12 años)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Reemplazo y Modernización Completa</h3>
                  <p className="text-muted-foreground mb-4">
                    Para sistemas muy antiguos (10+ años) con tecnología obsoleta, a veces tiene más sentido reemplazar todo con equipos modernos más eficientes. Reutilizamos estructura de montaje y cableado cuando es posible.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Ventajas:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Eficiencia 20-30% mayor con paneles nuevos</li>
                        <li>• Garantías nuevas completas</li>
                        <li>• Tecnología moderna (monitoreo, optimización)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Consideraciones:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Costo similar a sistema nuevo</li>
                        <li>• Requerirá permisos completos</li>
                        <li>• Mejor para sistemas muy degradados</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Proceso de Evaluación y Diseño
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Evaluación del Sistema Existente</h3>
                    <p className="text-muted-foreground text-sm">Revisamos documentación original, inspeccionamos instalación actual, verificamos capacidad del inversor, espacio disponible en techo, y condición general del sistema.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Análisis de Necesidades Actuales</h3>
                    <p className="text-muted-foreground text-sm">Comparamos su consumo actual vs capacidad instalada, identificamos déficit o necesidades futuras (EV, ampliaciones planificadas), y determinamos tamaño óptimo de ampliación.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Diseño de Ampliación Compatible</h3>
                    <p className="text-muted-foreground text-sm">Creamos diseño que integra perfectamente con su sistema existente: mismos voltajes, compatibilidad de comunicación, cumplimiento de códigos, y optimización de producción global.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Cotización y Proyección ROI</h3>
                    <p className="text-muted-foreground text-sm">Presentamos propuesta detallada con costo de ampliación, ahorro adicional esperado, nuevo payback period, y comparación de opciones (ampliar vs nuevo sistema separado).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">5</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Permisos y Aprobaciones</h3>
                    <p className="text-muted-foreground text-sm">Gestionamos permisos de ampliación con su municipio y actualización del acuerdo de interconexión con LUMA Energy. Proceso típico 4-8 semanas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">6</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Instalación e Integración</h3>
                    <p className="text-muted-foreground text-sm">Instalamos la ampliación coordinando con el sistema existente, verificamos funcionamiento conjunto, actualizamos monitoreo, y entregamos documentación completa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para expandir su sistema solar?"
          description="Evaluaremos su sistema actual y diseñaremos la ampliación perfecta para sus nuevas necesidades."
          utmCampaign="actualizacion-ampliacion" 
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

export default ActualizacionAmpliacion;