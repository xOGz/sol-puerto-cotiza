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

const SolarOffGrid = () => {
  const offGridFAQs = getQAByCategory('off-grid', 2);
  const additionalFAQs = getRandomQA(3, ['off-grid']);
  const faqs = [...offGridFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Backup Híbrido",
      description: "Respaldo con red + generador + baterías",
      href: "/servicios/backup-solar-hibrido"
    },
    {
      title: "Baterías LFP",
      description: "Almacenamiento de alta duración",
      href: "/servicios/baterias-almacenamiento-lfp"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Sistemas Solares Off-Grid en Puerto Rico | Kilowatt PR"
        description="Sistemas solares off-grid (sin red eléctrica) en PR. Independencia energética total para áreas remotas. Diseño robusto con baterías y generador."
        canonicalPath="/servicios/solar-off-grid"
      />
      <ServiceSchema
        serviceName="Sistemas Solares Off-Grid"
        serviceDescription="Diseño e instalación de sistemas solares completamente independientes de la red eléctrica para áreas remotas en Puerto Rico"
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
                Sistemas Solares Off-Grid en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Independencia energética total sin conexión a LUMA. Ideal para propiedades remotas, fincas, cabañas, y quienes buscan autosuficiencia completa. Diseñamos sistemas robustos que funcionan 365 días al año.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>100% independiente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Diseño robusto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Autonomía 3-7 días</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Cuándo Considerar Sistema Off-Grid
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Escenarios Ideales</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Propiedad sin acceso a red eléctrica existente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Costo de conexión a red supera $20K-30K</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Zona rural sin infraestructura cercana (postes a +500m)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Deseo de independencia energética filosófica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Estructura temporal o permiso difícil para conexión</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border-l-4 border-muted rounded-r-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Cuándo NO Recomendamos Off-Grid</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Acceso fácil y económico a red existente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Consumo muy alto (difícil dimensionar baterías)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Presupuesto limitado (off-grid es 2-3x más caro)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Expectativa de "olvidar y funcionar" sin mantenimiento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>No dispuesto a gestionar consumo conscientemente</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    En estos casos, un sistema grid-tied con baterías de respaldo es mejor opción.
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
                Componentes de un Sistema Off-Grid Bien Diseñado
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">1. Array Solar Sobredimensionado (30-50% Extra)</h3>
                  <p className="text-muted-foreground mb-4">
                    A diferencia de sistemas grid-tied, off-grid requiere array 30-50% mayor que consumo diario. Razones: compensar días nublados consecutivos, recargar baterías profundamente descargadas, pérdidas del sistema (inversión, cableado), y degradación estacional (invierno, polvo).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-muted/50 rounded p-4">
                      <p className="font-semibold mb-2">Ejemplo - Casa 30 kWh/día:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Consumo: 30 kWh/día</li>
                        <li>• Array recomendado: <span className="font-bold text-kilowatt-primary">12-15 kW</span></li>
                        <li>• Producción promedio: 45-60 kWh/día (clima PR)</li>
                        <li>• Margen para días nublados y recarga baterías</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 rounded p-4">
                      <p className="font-semibold mb-2">Orientación Crítica:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Ideal: Sur verdadero, 18-20° inclinación</li>
                        <li>• Evitar sombra a toda costa (mañana a tarde)</li>
                        <li>• Considerar montaje en suelo para orientación óptima</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">2. Banco de Baterías con Autonomía 3-7 Días</h3>
                  <p className="text-muted-foreground mb-4">
                    El banco de baterías debe proveer electricidad durante días nublados consecutivos sin depender de generador. Diseño típico: 3-5 días de autonomía para uso normal. Recomendamos exclusivamente baterías LFP para off-grid por durabilidad y profundidad de descarga.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left p-3 border border-border">Consumo Diario</th>
                          <th className="text-left p-3 border border-border">Autonomía 3 Días</th>
                          <th className="text-left p-3 border border-border">Autonomía 5 Días</th>
                          <th className="text-left p-3 border border-border">Costo Aproximado</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr>
                          <td className="p-3 border border-border">10 kWh/día</td>
                          <td className="p-3 border border-border">30 kWh</td>
                          <td className="p-3 border border-border">50 kWh</td>
                          <td className="p-3 border border-border">$15K-$25K</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-border">20 kWh/día</td>
                          <td className="p-3 border border-border">60 kWh</td>
                          <td className="p-3 border border-border">100 kWh</td>
                          <td className="p-3 border border-border">$30K-$50K</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-border">30 kWh/día</td>
                          <td className="p-3 border border-border">90 kWh</td>
                          <td className="p-3 border border-border">150 kWh</td>
                          <td className="p-3 border border-border">$45K-$75K</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">3. Inversor/Cargador Off-Grid Robusto</h3>
                  <p className="text-muted-foreground mb-4">
                    El inversor off-grid gestiona todo: carga de baterías desde solar, conversión DC a AC para la casa, y arranque automático del generador cuando necesario. Marcas probadas: Victron MultiPlus, Outback Radian, Sol-Ark (modo off-grid).
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-muted/50 rounded p-4">
                      <p className="font-semibold mb-2">Capacidad Continua:</p>
                      <p className="text-muted-foreground">Debe manejar todas cargas simultáneas. Casa típica: 8-12 kW continuo.</p>
                    </div>
                    <div className="bg-muted/50 rounded p-4">
                      <p className="font-semibold mb-2">Capacidad Surge:</p>
                      <p className="text-muted-foreground">2-3x capacidad continua para arranque motores (A/C, bomba, etc).</p>
                    </div>
                    <div className="bg-muted/50 rounded p-4">
                      <p className="font-semibold mb-2">Eficiencia:</p>
                      <p className="text-muted-foreground">Mínimo 94-96% eficiencia para minimizar pérdidas en conversión.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">4. Generador de Respaldo (Esencial)</h3>
                  <p className="text-muted-foreground mb-4">
                    Aunque el sistema es "off-grid solar", un generador es ESENCIAL para situaciones extremas: semana de lluvia continua, fallo temporal de equipos, o consumo inesperado alto. El inversor arranca el generador automáticamente cuando baterías llegan a nivel crítico.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold mb-2 text-foreground">Tamaño Recomendado:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Casa pequeña (10 kWh/día): 7-10 kW generador</li>
                        <li>• Casa mediana (20 kWh/día): 12-15 kW generador</li>
                        <li>• Casa grande (30+ kWh/día): 18-22 kW generador</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-foreground">Tipo de Combustible:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Diésel: Más eficiente, mayor durabilidad, costoso</li>
                        <li>• Gasolina: Más común, más barato, menos duradero</li>
                        <li>• Propano/Gas natural: Limpio, requiere tanque</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">5. Sistema de Monitoreo y Control</h3>
                  <p className="text-muted-foreground mb-4">
                    Monitoreo es CRÍTICO en off-grid para evitar quedarse sin energía. Debe visualizar: estado de carga baterías (SOC), producción solar en tiempo real, consumo actual, días de autonomía restantes, historial de uso del generador.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sistemas avanzados como Victron VRM o Sol-Ark monitoring permiten acceso remoto vía internet/celular, alertas cuando baterías bajan de cierto nivel, y estadísticas históricas para optimizar consumo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Gestión de Consumo en Sistemas Off-Grid
              </h2>
              <p className="text-muted-foreground mb-6">
                Vivir off-grid requiere consciencia de consumo. No es "plug and forget" como estar conectado a LUMA. Estrategias para maximizar autonomía:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Estrategias de Conservación</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Usar electrodomésticos eficientes (Energy Star)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Iluminación 100% LED de bajo consumo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Nevera/freezer inverter o propano (uso mixto)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Calentador agua solar térmico (no eléctrico)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Cocina gas propano (evita carga eléctrica enorme)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Gestión Inteligente de Cargas</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Lavar ropa y usar secadora solo días soleados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>A/C programado para horarios de máxima producción solar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Cargar herramientas/dispositivos durante día</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Evitar múltiples cargas altas simultáneas (microondas + secadora)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                      <span>Monitorear SOC baterías antes de cargas grandes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Inversión Típica: Sistema Off-Grid Completo
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Sistema Básico</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-4">$25K-$35K</div>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li>• Consumo: 10-15 kWh/día</li>
                    <li>• Array: 5-7 kW</li>
                    <li>• Baterías: 30-40 kWh LFP</li>
                    <li>• Generador: 7-10 kW</li>
                    <li>• Inversor: 6-8 kW</li>
                  </ul>
                  <p className="text-xs mt-4 text-muted-foreground italic">Cabañas, casas pequeñas, uso moderado</p>
                </div>
                <div className="bg-card border-2 border-kilowatt-primary rounded-lg p-6">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-kilowatt-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Más Común
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Sistema Estándar</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-4">$40K-$60K</div>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li>• Consumo: 20-30 kWh/día</li>
                    <li>• Array: 10-12 kW</li>
                    <li>• Baterías: 60-80 kWh LFP</li>
                    <li>• Generador: 12-15 kW</li>
                    <li>• Inversor: 10-12 kW</li>
                  </ul>
                  <p className="text-xs mt-4 text-muted-foreground italic">Casa promedio, comodidades normales</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Sistema Premium</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-4">$70K-$100K+</div>
                  <ul className="text-left space-y-2 text-sm text-muted-foreground">
                    <li>• Consumo: 35-50+ kWh/día</li>
                    <li>• Array: 15-20 kW</li>
                    <li>• Baterías: 100-150 kWh LFP</li>
                    <li>• Generador: 18-25 kW</li>
                    <li>• Inversor: 15-18 kW</li>
                  </ul>
                  <p className="text-xs mt-4 text-muted-foreground italic">Casa grande, múltiples A/C, alto consumo</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
                Nota: Costos incluyen todos componentes, instalación completa, commissioning, y capacitación. NO incluyen estructura de vivienda, panel eléctrico, o trenching extenso.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para independencia energética total?"
          description="Diseñaremos un sistema off-grid robusto adaptado a su ubicación, consumo y presupuesto."
          utmCampaign="solar-off-grid" 
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

export default SolarOffGrid;