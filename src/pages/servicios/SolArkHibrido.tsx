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
import { CheckCircle, Battery, Zap } from "lucide-react";

const SolArkHibrido = () => {
  const bateriasLFPFAQs = getQAByCategory('baterias-lfp', 2);
  const backupFAQs = getQAByCategory('backup', 1);
  const additionalFAQs = getRandomQA(2, ['baterias-lfp', 'backup']);
  const faqs = [...bateriasLFPFAQs, ...backupFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Baterías LFP",
      description: "Almacenamiento de energía seguro",
      href: "/servicios/baterias-almacenamiento-lfp"
    },
    {
      title: "Backup Híbrido",
      description: "Sistema completo de respaldo",
      href: "/servicios/backup-solar-hibrido"
    },
    {
      title: "Solar Off-Grid",
      description: "Independencia total de la red",
      href: "/servicios/solar-off-grid"
    }
  ];

  const ciudades = [
    {
      title: "Aguadilla",
      description: "Instalación de Sol-Ark en Aguadilla",
      href: "/puerto-rico/aguadilla"
    },
    {
      title: "Isabela",
      description: "Sistemas híbridos en Isabela",
      href: "/puerto-rico/isabela"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Sol-Ark Inversor Híbrido en Puerto Rico | Kilowatt PR"
        description="Sol-Ark: el inversor híbrido all-in-one más robusto para Puerto Rico. Integra solar, baterías y generador con respaldo 24/7. Garantía superior."
        canonicalPath="/servicios/sol-ark-hibrido"
      />
      <ServiceSchema
        serviceName="Sol-Ark Inversor Híbrido"
        serviceDescription="Instalación de inversores híbridos Sol-Ark all-in-one con integración solar, baterías y generador para máxima resiliencia"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Battery className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Sol-Ark Inversor Híbrido en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                El Sol-Ark es el "tanque de guerra" de los inversores híbridos: diseño all-in-one que integra solar, baterías y generador en un solo equipo ultra-robusto. Ideal para Puerto Rico donde la confiabilidad es crítica.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>All-in-one robusto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Respaldo 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Garantía extendida</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                ¿Por qué Sol-Ark es Ideal para Puerto Rico?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Puerto Rico necesita equipos que aguanten todo: sol intenso, humedad, cortes frecuentes y cambios rápidos de carga. El Sol-Ark fue diseñado precisamente para ambientes exigentes. A diferencia de inversores híbridos tradicionales que son varios componentes conectados, el Sol-Ark integra todo en una sola caja ultra-robusta con componentes industriales.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                      <Zap className="h-5 w-5 text-kilowatt-primary" />
                      Ventajas Técnicas
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Capacidad de sobrecarga 200% (2x su potencia nominal)</li>
                      <li>• Arranque de cargas pesadas (AC, bombas, motores)</li>
                      <li>• Integración automática con generador existente</li>
                      <li>• Monitoreo remoto y actualizaciones OTA</li>
                      <li>• Compatible con todas las químicas de baterías</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                      <Battery className="h-5 w-5 text-kilowatt-primary" />
                      Para Puerto Rico
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Diseñado para clima tropical y humedad</li>
                      <li>• Respaldo instantáneo ante apagones (0ms)</li>
                      <li>• Carga optimizada con LUMA net-metering</li>
                      <li>• Soporte técnico con oficina en Orlando, FL</li>
                      <li>• Garantía 10 años estándar (ampliable a 15)</li>
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
                Modelos Sol-Ark: ¿Cuál Necesito?
              </h2>
              <div className="space-y-6">
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Sol-Ark 12K (12 kW continuo / 24 kW pico)</h3>
                  <p className="text-muted-foreground mb-4">
                    Modelo residencial para casas medianas-grandes. Soporta 2-3 aires acondicionados simultáneos, toda la casa respaldada. Ideal si consume 800-1,500 kWh/mes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Ideal para:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Casa 3-4 cuartos con 2-3 splits</li>
                        <li>• Pool pump + calentador eléctrico</li>
                        <li>• Batería típica: 20-30 kWh (2-3 unidades LFP)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Especificaciones:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Entrada solar: hasta 18 kW DC</li>
                        <li>• Voltaje batería: 48V</li>
                        <li>• Respaldo: whole-home o crítico</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Sol-Ark 15K (15 kW continuo / 30 kW pico)</h3>
                  <p className="text-muted-foreground mb-4">
                    Modelo para casas grandes o pequeños comercios. Maneja 3-4 aires split grandes, todas las cargas pesadas. Consumo típico 1,500-2,200 kWh/mes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Ideal para:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Casas 5+ cuartos con multi-split</li>
                        <li>• Cargador EV + pool + casa completa</li>
                        <li>• Pequeño comercio (oficina, clínica)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Especificaciones:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Entrada solar: hasta 22 kW DC</li>
                        <li>• Voltaje batería: 48V</li>
                        <li>• Batería típica: 30-40 kWh</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-kilowatt-secondary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Sol-Ark 30K (Comercial - 30 kW continuo)</h3>
                  <p className="text-muted-foreground mb-4">
                    Sistema trifásico para comercios medianos, edificios pequeños. Escalable hasta 90 kW en paralelo. Requiere evaluación eléctrica profesional.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-2">Aplicaciones típicas:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Colmado, restaurante, taller mecánico</li>
                      <li>• Edificio de apartamentos pequeño</li>
                      <li>• Operaciones críticas 24/7 (data center pequeño)</li>
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
                Modos de Operación del Sol-Ark
              </h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Grid-Tied con Respaldo (más común en PR)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Opera conectado a LUMA con net-metering. Durante el día, solar alimenta la casa y carga baterías; exceso va a la red. De noche, baterías suplen la casa. Si hay apagón, desconecta de red instantáneamente y opera con solar + baterías (o generador si es de noche y baterías bajas).
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    ✓ Máximo ahorro con net-metering + resiliencia total
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Off-Grid (Independiente Total)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Sin conexión a LUMA. Solar + baterías suplen todo 24/7. Generador entra automáticamente si baterías bajan de 20% o carga muy alta. Ideal para áreas sin servicio confiable o terreno sin conexión.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    ✓ Cero factura LUMA, independencia completa
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Sell Mode (Venta a Red)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Modo avanzado donde optimiza venta de energía a la red según tarifas horarias. Carga baterías cuando electricidad es barata (noche), vende a red cuando es cara (picos). Requiere tarifa TOU (Time of Use) de LUMA.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    ✓ Arbitraje energético (disponible solo con tarifas TOU comerciales)
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
                Comparación: Sol-Ark vs Otras Marcas
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-bold text-foreground">Característica</th>
                      <th className="text-left p-4 font-bold text-foreground">Sol-Ark 12K/15K</th>
                      <th className="text-left p-4 font-bold text-muted-foreground">Tesla Powerwall+</th>
                      <th className="text-left p-4 font-bold text-muted-foreground">Enphase IQ8</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Diseño</td>
                      <td className="p-4 text-foreground font-semibold">All-in-one robusto</td>
                      <td className="p-4 text-muted-foreground">Batería + inversor integrado</td>
                      <td className="p-4 text-muted-foreground">Microinversores modulares</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Capacidad sobrecarga</td>
                      <td className="p-4 text-foreground font-semibold">200% (arranque pesado)</td>
                      <td className="p-4 text-muted-foreground">150%</td>
                      <td className="p-4 text-muted-foreground">120%</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Integración generador</td>
                      <td className="p-4 text-foreground font-semibold">Automática nativa</td>
                      <td className="p-4 text-muted-foreground">No soportada</td>
                      <td className="p-4 text-muted-foreground">Requiere módulo extra</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Escalabilidad batería</td>
                      <td className="p-4 text-foreground font-semibold">Cualquier marca LFP/AGM</td>
                      <td className="p-4 text-muted-foreground">Solo Tesla (cerrado)</td>
                      <td className="p-4 text-muted-foreground">Solo Enphase (cerrado)</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Garantía estándar</td>
                      <td className="p-4 text-foreground font-semibold">10 años (hasta 15)</td>
                      <td className="p-4 text-muted-foreground">10 años</td>
                      <td className="p-4 text-muted-foreground">25 años micro</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 text-muted-foreground">Precio sistema completo</td>
                      <td className="p-4 text-foreground font-semibold">$$$ (valor superior)</td>
                      <td className="p-4 text-muted-foreground">$$$$ (premium)</td>
                      <td className="p-4 text-muted-foreground">$$$ (modular)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Nota: El Sol-Ark destaca en robustez, versatilidad y soporte de cargas pesadas, ideal para PR donde la confiabilidad es crítica.
              </p>
            </div>
          </div>
        </section>

        <ProcessSteps />
        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para un sistema híbrido ultra-robusto?"
          description="Evaluaremos su consumo y diseñaremos el sistema Sol-Ark perfecto para su hogar o negocio."
          utmCampaign="sol-ark-hibrido" 
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

export default SolArkHibrido;
