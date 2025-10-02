import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import ServiceSchema from "@/components/ServiceSchema";
import CTASection from "@/components/CTASection";
import ServiceFAQ from "@/components/ServiceFAQ";
import ProcessSteps from "@/components/ProcessSteps";
import InternalLinks from "@/components/InternalLinks";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import { getQAByCategory, getRandomQA } from "@/data/qaContent";
import { CheckCircle, DollarSign, Zap } from "lucide-react";

const EG4HibridoBoss18 = () => {
  const bateriasLFPFAQs = getQAByCategory('baterias-lfp', 2);
  const backupFAQs = getQAByCategory('backup', 1);
  const additionalFAQs = getRandomQA(2, ['baterias-lfp', 'backup']);
  const faqs = [...bateriasLFPFAQs, ...backupFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Baterías LFP",
      description: "Baterías EG4 de alta calidad",
      href: "/servicios/baterias-almacenamiento-lfp"
    },
    {
      title: "Sol-Ark Híbrido",
      description: "Alternativa premium robusta",
      href: "/servicios/sol-ark-hibrido"
    },
    {
      title: "Backup Híbrido",
      description: "Sistema completo de respaldo",
      href: "/servicios/backup-solar-hibrido"
    }
  ];

  const ciudades = [
    {
      title: "Rincón",
      description: "Instalación de EG4 en Rincón",
      href: "/puerto-rico/rincon"
    },
    {
      title: "Mayagüez",
      description: "Sistemas híbridos en Mayagüez",
      href: "/puerto-rico/mayaguez"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="EG4 18kPV Inversor Híbrido en Puerto Rico | Kilowatt PR"
        description="EG4 18kPV: inversor híbrido all-in-one con excelente relación precio-rendimiento. Ideal para PR con respaldo completo y compatibilidad total con baterías LFP."
        canonicalPath="/servicios/eg4-hibrido-boss18"
      />
      <ServiceSchema
        serviceName="EG4 18kPV Inversor Híbrido"
        serviceDescription="Instalación de inversores híbridos EG4 18kPV all-in-one con excelente relación calidad-precio para sistemas solares con respaldo"
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
                EG4 18kPV Inversor Híbrido en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                El EG4 18kPV es el "valor campeón" de los inversores híbridos: diseño all-in-one robusto con especificaciones premium a precio competitivo. Perfecto para residencias en Puerto Rico que buscan máximo rendimiento sin gastar de más.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Mejor precio-rendimiento</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>18 kW solar directo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Compatible con todas las baterías LFP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                ¿Por qué el EG4 18kPV es Ideal para Puerto Rico?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  En Puerto Rico necesitamos equipos confiables pero accesibles. El EG4 18kPV ofrece especificaciones técnicas comparables a marcas premium (Sol-Ark, Victron) pero a un costo 20-30% menor. Es fabricado por EG4 Electronics (antes conocida como Signature Solar), empresa especializada en sistemas híbridos con fuerte presencia en mercados tropicales.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-kilowatt-primary" />
                      Relación Precio-Valor
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Costo sistema completo: 20-30% menor vs competencia premium</li>
                      <li>• Especificaciones similares a Sol-Ark 15K</li>
                      <li>• Garantía 10 años (estándar en industria)</li>
                      <li>• Repuestos disponibles y accesibles</li>
                      <li>• ROI típico: 6-8 años (vs 8-10 años con premium)</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                      <Zap className="h-5 w-5 text-kilowatt-primary" />
                      Especificaciones Técnicas
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Salida continua: 12 kW (120% sobrecarga = 14.4 kW)</li>
                      <li>• Pico: 18 kW por 10 segundos (arranque cargas pesadas)</li>
                      <li>• Entrada solar: 18,000 W DC directo</li>
                      <li>• Voltaje batería: 48V (compatible con todas las LFP 48V)</li>
                      <li>• Eficiencia: 97.5% (excelente)</li>
                    </ul>
                  </div>
                </div>
                <p>
                  <strong>Para quién es este sistema:</strong> Ideal para casas medianas-grandes en PR (factura $150-$300/mes), con 2-3 aires acondicionados, que quieren respaldo completo durante apagones sin pagar precio premium. Si necesita arrancar bombas de agua, compresores de pool o cargas industriales, el EG4 18kPV tiene la potencia de pico necesaria.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Capacidades del EG4 18kPV
              </h2>
              <div className="space-y-6">
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Entrada Solar: 18 kW Directo</h3>
                  <p className="text-muted-foreground mb-4">
                    A diferencia de muchos híbridos que limitan entrada solar a 10-12 kW, el EG4 18kPV acepta hasta 18,000 watts directos de paneles. Esto significa que puede instalar un array grande (45-50 paneles de 400W) sin desperdiciar capacidad solar, maximizando producción en días nublados y cargando baterías rápidamente.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-2">Ejemplo práctico:</p>
                    <p className="text-muted-foreground">
                      Con 48 paneles de 400W (19.2 kW nominal), en un día típico en PR generará 14-16 kW efectivos al mediodía. El EG4 18kPV aprovecha toda esa potencia: alimenta la casa (4-6 kW), carga baterías al máximo (6-8 kW), y manda exceso a la red (2-4 kW). Un inversor limitado a 12 kW desperdiciaría 4-6 kW de producción.
                    </p>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Salida: 12 kW Continuo / 18 kW Pico</h3>
                  <p className="text-muted-foreground mb-4">
                    12 kW continuos es suficiente para correr una casa completa en PR con 2-3 aires split, lavadora, secadora, nevera, microondas, bombas, etc. simultáneamente. Los 18 kW de pico por 10 segundos permiten arrancar cargas inductivas pesadas (motores de AC, compresores, bombas) sin problemas.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Cargas típicas que maneja:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• 3 aires split 12,000 BTU = ~4.5 kW</li>
                        <li>• Nevera + microondas = ~2 kW</li>
                        <li>• Lavadora/secadora = ~2.5 kW</li>
                        <li>• Pool pump = ~1.5 kW</li>
                        <li>• Resto de la casa = ~2 kW</li>
                        <li><strong>Total: ~12.5 kW (al límite pero factible)</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Estrategia para optimizar:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Escalone arranque de aires (no todos al mismo tiempo)</li>
                        <li>• Use secadora en horario solar (día)</li>
                        <li>• Pool pump en timer durante horas sol</li>
                        <li>• Respaldo crítico: prioriza cargas esenciales</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Compatible con Todas las Baterías LFP 48V</h3>
                  <p className="text-muted-foreground mb-4">
                    El EG4 18kPV no lo encierra en un ecosistema propietario. Funciona con cualquier batería LFP de 48V con comunicación CAN o Modbus: EG4 Lifepower, SimpliPhi, Pytes, BYD, e incluso bancos DIY si sabe configurar parámetros BMS. Esto le da flexibilidad total para expandir almacenamiento en el futuro sin restricciones.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-2">Combinaciones populares en PR:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• <strong>EG4 Lifepower 48V 5.12 kWh:</strong> Apilable hasta 8 unidades (40 kWh). Económica y confiable.</li>
                      <li>• <strong>SimpliPhi PHI 3.8:</strong> Premium LFP no-tóxica, certificación militar, ideal si busca "set and forget".</li>
                      <li>• <strong>Pytes V5 48V 5.12 kWh:</strong> Excelente equilibrio precio-calidad, BMS avanzado.</li>
                    </ul>
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
                Sistema Típico EG4 18kPV para Casa en Puerto Rico
              </h2>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Configuración Recomendada (Casa Factura $200-250/mes)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Componentes del Sistema:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Inversor:</strong> EG4 18kPV Hybrid All-in-One</li>
                        <li>• <strong>Paneles:</strong> 36-40 x 400-420W (14.4-16.8 kW)</li>
                        <li>• <strong>Baterías:</strong> 4-5 x EG4 Lifepower 5.12 kWh (20-25 kWh)</li>
                        <li>• <strong>Estructura:</strong> Montaje en techo galvanizado/hormigón</li>
                        <li>• <strong>Generador (opcional):</strong> Integración con generador existente</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Rendimiento Esperado:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>Producción diaria:</strong> 60-70 kWh (días soleados)</li>
                        <li>• <strong>Consumo típico:</strong> 30-35 kWh/día</li>
                        <li>• <strong>Autosuficiencia:</strong> 90-95% (factura $10-20/mes)</li>
                        <li>• <strong>Respaldo apagones:</strong> 18-24 horas con baterías</li>
                        <li>• <strong>Payback estimado:</strong> 6-7 años</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Inversión aproximada (instalación completa):</strong> Este sistema tiene un costo competitivo comparado con soluciones premium, ofreciendo excelente retorno de inversión para familias en PR. Solicite cotización detallada con financiamiento disponible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                EG4 18kPV vs Competencia
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-bold text-foreground">Característica</th>
                      <th className="text-left p-4 font-bold text-foreground">EG4 18kPV</th>
                      <th className="text-left p-4 font-bold text-muted-foreground">Sol-Ark 15K</th>
                      <th className="text-left p-4 font-bold text-muted-foreground">Victron MultiPlus II</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Salida continua</td>
                      <td className="p-4 text-foreground font-semibold">12 kW</td>
                      <td className="p-4 text-muted-foreground">15 kW</td>
                      <td className="p-4 text-muted-foreground">8 kW (12 kW en paralelo)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Entrada solar máx</td>
                      <td className="p-4 text-foreground font-semibold">18 kW DC</td>
                      <td className="p-4 text-muted-foreground">22 kW DC</td>
                      <td className="p-4 text-muted-foreground">Requiere MPPT separado</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Diseño</td>
                      <td className="p-4 text-foreground font-semibold">All-in-one</td>
                      <td className="p-4 text-muted-foreground">All-in-one</td>
                      <td className="p-4 text-muted-foreground">Modular (+ MPPT)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Compatible baterías</td>
                      <td className="p-4 text-foreground font-semibold">Todas LFP 48V</td>
                      <td className="p-4 text-muted-foreground">Todas LFP/AGM</td>
                      <td className="p-4 text-muted-foreground">Todas (configuración manual)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Garantía</td>
                      <td className="p-4 text-foreground font-semibold">10 años</td>
                      <td className="p-4 text-muted-foreground">10-15 años</td>
                      <td className="p-4 text-muted-foreground">5 años</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Precio (solo inversor)</td>
                      <td className="p-4 text-foreground font-semibold">$$ (mejor valor)</td>
                      <td className="p-4 text-muted-foreground">$$$ (premium)</td>
                      <td className="p-4 text-muted-foreground">$$$ (+ MPPT)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Conclusión: El EG4 18kPV ofrece 80-90% de las capacidades de sistemas premium a 20-30% menos costo, siendo la opción más inteligente para la mayoría de residencias en Puerto Rico.
              </p>
            </div>
          </div>
        </section>

        <ProcessSteps />
        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para un sistema híbrido de máximo valor?"
          description="Evaluaremos su consumo y diseñaremos el sistema EG4 18kPV perfecto para su hogar."
          utmCampaign="eg4-hibrido" 
        />
        <LeadCaptureSection />
        <InternalLinks 
          title="Servicios Relacionados" 
          links={relatedServices}
          columns={3}
        />
        <InternalLinks 
          title="Instalamos en Tu Ciudad" 
          links={ciudades}
          columns={2}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EG4HibridoBoss18;
