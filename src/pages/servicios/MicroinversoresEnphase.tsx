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
import { CheckCircle, Zap } from "lucide-react";

const MicroinversoresEnphase = () => {
  const techFAQs = getQAByCategory('tecnologia', 2);
  const additionalFAQs = getRandomQA(3, ['tecnologia']);
  const faqs = [...techFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Instalación Residencial",
      description: "Sistema completo con Enphase IQ8",
      href: "/servicios/instalacion-placas-solares-residencial"
    },
    {
      title: "Actualización y Ampliación",
      description: "Upgrade a microinversores modernos",
      href: "/servicios/actualizacion-y-ampliacion-solar"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Microinversores Enphase IQ8 en Puerto Rico | Kilowatt PR"
        description="Instalación de microinversores Enphase IQ8 en PR. Máxima producción panel por panel, monitoreo avanzado, respaldo con baterías. Certificados Enphase."
        canonicalPath="/servicios/microinversores-enphase"
      />
      <ServiceSchema
        serviceName="Microinversores Enphase IQ8"
        serviceDescription="Instalación de sistemas solares con microinversores Enphase IQ8 de última generación para máximo rendimiento"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Zap className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Microinversores Enphase IQ8 en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                La tecnología de microinversores Enphase IQ8 representa la evolución más avanzada en energía solar. Cada panel opera independientemente, maximizando producción incluso con sombreado parcial y permitiendo expansión modular sin límites.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Garantía 25 años</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Monitoreo por panel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Instalador certificado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Ventajas de Microinversores vs String Inverters
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 border-b border-border">Característica</th>
                      <th className="text-left p-4 border-b border-border">String Inverter</th>
                      <th className="text-left p-4 border-b border-border bg-kilowatt-primary/10">Microinversores Enphase</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-muted-foreground">
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Impacto de sombra</td>
                      <td className="p-4 border-b border-border">Sombra en 1 panel afecta todo el string (-40-60%)</td>
                      <td className="p-4 border-b border-border bg-kilowatt-primary/5"><span className="font-semibold text-kilowatt-primary">Solo afecta panel individual (-10-20%)</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Monitoreo</td>
                      <td className="p-4 border-b border-border">Producción total del sistema únicamente</td>
                      <td className="p-4 border-b border-border bg-kilowatt-primary/5"><span className="font-semibold text-kilowatt-primary">Panel por panel en tiempo real</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Expansión futura</td>
                      <td className="p-4 border-b border-border">Limitada por capacidad del inversor</td>
                      <td className="p-4 border-b border-border bg-kilowatt-primary/5"><span className="font-semibold text-kilowatt-primary">Ilimitada - agregar paneles cuando quiera</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Punto único de falla</td>
                      <td className="p-4 border-b border-border">Si falla inversor, todo el sistema para</td>
                      <td className="p-4 border-b border-border bg-kilowatt-primary/5"><span className="font-semibold text-kilowatt-primary">Redundancia - si 1 falla, resto funciona</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Voltaje DC en techo</td>
                      <td className="p-4 border-b border-border">Alto voltaje DC (300-600V)</td>
                      <td className="p-4 border-b border-border bg-kilowatt-primary/5"><span className="font-semibold text-kilowatt-primary">Bajo voltaje AC - más seguro</span></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Garantía típica</td>
                      <td className="p-4">10-12 años inversor</td>
                      <td className="p-4 bg-kilowatt-primary/5"><span className="font-semibold text-kilowatt-primary">25 años microinversores</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Modelos Enphase IQ8 que Instalamos
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">IQ8M</h3>
                  <div className="text-2xl font-bold text-kilowatt-primary mb-4">330W</div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Paneles 300-365W</li>
                    <li>• Eficiencia pico 97.5%</li>
                    <li>• Ideal residencial estándar</li>
                    <li>• Balance costo-rendimiento</li>
                  </ul>
                </div>
                <div className="bg-card border-2 border-kilowatt-primary rounded-lg p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-kilowatt-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Más Popular
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">IQ8+</h3>
                  <div className="text-2xl font-bold text-kilowatt-primary mb-4">384W</div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Paneles 350-440W</li>
                    <li>• Eficiencia pico 97.5%</li>
                    <li>• Mayor producción por panel</li>
                    <li>• Óptimo para paneles modernos</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">IQ8H</h3>
                  <div className="text-2xl font-bold text-kilowatt-primary mb-4">460W</div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Paneles 400-530W</li>
                    <li>• Eficiencia pico 97.5%</li>
                    <li>• Máxima potencia</li>
                    <li>• Comercial y residencial premium</li>
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
                Funcionalidad IQ8: Modo Sunlight Backup
              </h2>
              <p className="text-muted-foreground mb-6">
                Los microinversores Enphase IQ8 tienen una capacidad revolucionaria: pueden proveer energía limitada durante apagones usando solo el sol, SIN baterías. Es el único microinversor con esta tecnología "grid-forming".
              </p>
              <div className="bg-card border-2 border-kilowatt-primary/20 rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Cómo Funciona</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Durante apagón diurno, sistema detecta pérdida de red</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>IQ8 forma su propia "micro-red" local temporera</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Provee 1,440W por microinversor a cargas críticas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Funciona SOLO mientras hay sol directo en paneles</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Limitaciones</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>Solo funciona durante día soleado (no noche)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>Potencia limitada vs sistema con baterías</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>Requiere sub-panel especial para cargas respaldadas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>Más económico que baterías, pero menos versátil</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground italic">
                  Para respaldo completo 24/7, recomendamos combinar IQ8 con Enphase IQ Battery. Lo mejor de ambos mundos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para tecnología Enphase?"
          description="Como instaladores certificados Enphase, garantizamos instalación profesional y soporte continuo."
          utmCampaign="microinversores-enphase" 
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

export default MicroinversoresEnphase;