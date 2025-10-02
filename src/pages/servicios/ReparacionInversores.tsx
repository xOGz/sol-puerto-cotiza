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
import { CheckCircle, Cpu } from "lucide-react";

const ReparacionInversores = () => {
  const faqs = getRandomQA(5);

  const relatedServices = [
    {
      title: "Inspección de Sistema",
      description: "Diagnóstico completo profesional",
      href: "/servicios/inspeccion-sistema-solar"
    },
    {
      title: "Actualización Solar",
      description: "Upgrade de inversores y componentes",
      href: "/servicios/actualizacion-y-ampliacion-solar"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Reparación de Inversores Solares en Puerto Rico | Kilowatt PR"
        description="Reparación y reemplazo de inversores solares en PR. Diagnóstico experto, servicio rápido. Todas las marcas: Enphase, SolarEdge, SMA, Fronius."
        canonicalPath="/servicios/reparacion-inversores-solares"
      />
      <ServiceSchema
        serviceName="Reparación y Reemplazo de Inversores Solares"
        serviceDescription="Servicio especializado de diagnóstico, reparación y reemplazo de inversores solares de todas las marcas"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Cpu className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Reparación de Inversores Solares en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                ¿Su inversor muestra errores? ¿El sistema dejó de producir? El inversor es el cerebro de su sistema solar. Diagnosticamos y reparamos todas las marcas rápidamente para restaurar su producción.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Diagnóstico experto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Servicio rápido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Todas las marcas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Señales de Problemas con el Inversor
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-l-4 border-destructive rounded-r-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Síntomas Críticos (Servicio Inmediato)</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>Sistema completamente apagado / sin producción</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>Luces rojas parpadeando en inversor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>Mensajes "Grid Fault" o "DC Overvoltage"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>Ruidos anormales (zumbido fuerte, chasquidos)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>Inversor extremadamente caliente al tacto</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Síntomas de Degradación</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Producción reducida 20-30% sin causa aparente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Reinicios frecuentes del inversor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Errores intermitentes que se autocorrigen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Ventilador funcionando constantemente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Pérdida de comunicación con monitoreo</span>
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
                Marcas que Reparamos y Reemplazamos
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Microinversores</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Enphase (IQ7, IQ8, M215, S280)</li>
                    <li>• APsystems (YC600, QS1)</li>
                    <li>• Hoymiles (HM-1500)</li>
                    <li>• SolarEdge Power Optimizers</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">String Inverters</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• SMA (Sunny Boy series)</li>
                    <li>• SolarEdge (SE series)</li>
                    <li>• Fronius (Primo, Symo)</li>
                    <li>• ABB/FIMER</li>
                    <li>• Schneider Electric</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Híbridos/Off-grid</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sol-Ark (12K, 15K)</li>
                    <li>• EG4 (18K Boss)</li>
                    <li>• Outback Power (Radian)</li>
                    <li>• Victron Energy</li>
                    <li>• Schneider Conext</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground mt-6 text-center">
                ¿No ve su marca? Contactenos. Trabajamos con prácticamente todos los inversores instalados en Puerto Rico, incluyendo modelos descontinuados.
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Nuestro Proceso de Diagnóstico y Reparación
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Diagnóstico Remoto Inicial</h3>
                    <p className="text-muted-foreground">Con los códigos de error o síntomas que nos describe, realizamos análisis preliminar. En muchos casos podemos identificar el problema sin visita, ahorrándole tiempo. Si es algo simple (reseteo, configuración), lo guiamos por teléfono.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Visita de Diagnóstico en Sitio</h3>
                    <p className="text-muted-foreground">Nuestro técnico certificado llega con equipos de prueba profesionales: multímetros Fluke, analizadores de string, laptop con software de diagnóstico de fabricante. Realizamos pruebas exhaustivas de voltajes DC/AC, aislamiento, funcionamiento componentes internos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Cotización Transparente</h3>
                    <p className="text-muted-foreground">Explicamos el problema encontrado en términos claros, opciones de reparación vs reemplazo, costos detallados (mano de obra + partes), y timeline estimado. Si está bajo garantía, gestionamos el claim con el fabricante sin costo adicional.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Reparación o Reemplazo</h3>
                    <p className="text-muted-foreground">Una vez aprobado, ordenamos partes (si necesario) y coordinamos el trabajo. Reparaciones simples se completan el mismo día. Reemplazos de inversor toman 1-2 días (incluyendo reconfiguración y commissioning).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold text-lg">5</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Prueba y Verificación Final</h3>
                    <p className="text-muted-foreground">Después de reparación/reemplazo, verificamos producción completa del sistema, actualizamos firmware si disponible, reconfiguramos monitoreo, y entregamos reporte de servicio con garantía escrita de nuestro trabajo.</p>
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
                Reparar vs Reemplazar: Qué Recomen recomendamos
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 border-b border-border font-semibold">Situación</th>
                      <th className="text-left p-4 border-b border-border font-semibold">Recomendación</th>
                      <th className="text-left p-4 border-b border-border font-semibold">Razón</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-muted-foreground">
                    <tr>
                      <td className="p-4 border-b border-border">Inversor bajo garantía</td>
                      <td className="p-4 border-b border-border font-semibold text-kilowatt-primary">Reemplazo</td>
                      <td className="p-4 border-b border-border">Fabricante cubre unidad nueva gratis. Solo paga mano de obra.</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border">Falla componente menor (fusible, relay, fan)</td>
                      <td className="p-4 border-b border-border font-semibold text-kilowatt-primary">Reparación</td>
                      <td className="p-4 border-b border-border">Costo bajo ($150-400), solución rápida.</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border">Inversor 10+ años, falla mayor</td>
                      <td className="p-4 border-b border-border font-semibold text-kilowatt-primary">Reemplazo</td>
                      <td className="p-4 border-b border-border">Vida útil casi completa, nuevo inversor es inversión mejor.</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border">String inverter con 1-2 microinversores fallados</td>
                      <td className="p-4 border-b border-border font-semibold text-kilowatt-primary">Reemplazo micro</td>
                      <td className="p-4 border-b border-border">Resto del sistema funciona, solo reemplazar unidades falladas.</td>
                    </tr>
                    <tr>
                      <td className="p-4">Inversor obsoleto sin partes disponibles</td>
                      <td className="p-4 font-semibold text-kilowatt-primary">Upgrade completo</td>
                      <td className="p-4">Oportunidad para tecnología superior y mayor eficiencia.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Costos Típicos de Servicio
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Diagnóstico</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-3">$99-149</div>
                  <p className="text-sm text-muted-foreground">
                    Visita en sitio + análisis completo. Aplicado como crédito si aprueba reparación.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Reparación</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-3">$200-800</div>
                  <p className="text-sm text-muted-foreground">
                    Depende de componente fallado. Incluye partes, mano de obra y garantía.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Reemplazo</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-3">$1,500-4,000</div>
                  <p className="text-sm text-muted-foreground">
                    Inversor nuevo + instalación. Varía según capacidad y marca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Inversor con problemas?"
          description="Contactenos ahora para diagnóstico rápido. Cada día sin producción es dinero perdido."
          primaryText="Diagnóstico Urgente"
          utmCampaign="reparacion-inversores" 
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

export default ReparacionInversores;