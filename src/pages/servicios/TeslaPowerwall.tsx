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
import { CheckCircle, Award, Smartphone } from "lucide-react";

const TeslaPowerwall = () => {
  const bateriasLFPFAQs = getQAByCategory('baterias-lfp', 2);
  const backupFAQs = getQAByCategory('backup', 1);
  const additionalFAQs = getRandomQA(2, ['baterias-lfp', 'backup']);
  const faqs = [...bateriasLFPFAQs, ...backupFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Baterías LFP",
      description: "Alternativas más económicas",
      href: "/servicios/baterias-almacenamiento-lfp"
    },
    {
      title: "Backup Híbrido",
      description: "Sistema completo de respaldo",
      href: "/servicios/backup-solar-hibrido"
    },
    {
      title: "EV Charger con Solar",
      description: "Carga tu Tesla con energía solar",
      href: "/servicios/ev-charger-con-solar"
    }
  ];

  const ciudades = [
    {
      title: "Dorado",
      description: "Instalación de Powerwall en Dorado",
      href: "/puerto-rico/dorado"
    },
    {
      title: "Guaynabo",
      description: "Sistemas Tesla en Guaynabo",
      href: "/puerto-rico/guaynabo"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Tesla Powerwall Integración en Puerto Rico | Kilowatt PR"
        description="Instalación certificada de Tesla Powerwall en PR. Sistema premium de almacenamiento con app elegante. Integración perfecta con tu sistema solar existente o nuevo."
        canonicalPath="/servicios/tesla-powerwall-integracion"
      />
      <ServiceSchema
        serviceName="Tesla Powerwall Integración"
        serviceDescription="Instalación certificada de baterías Tesla Powerwall con integración a sistemas solares nuevos o existentes"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Award className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Tesla Powerwall Integración en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                El Tesla Powerwall es el sistema de almacenamiento residencial más reconocido mundialmente. Diseño elegante, app intuitiva, y respaldo confiable. Instalamos Powerwall+ (con inversor solar integrado) o Powerwall 3 en Puerto Rico, integrándolo a su sistema existente o como parte de instalación nueva.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Diseño icónico Tesla</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>App elegante iOS/Android</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Garantía 10 años</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                ¿Por qué Tesla Powerwall en Puerto Rico?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  El Tesla Powerwall no es la opción más económica, pero es la más <strong>reconocida y confiable</strong> del mercado. Si usted valora la marca Tesla, la experiencia de usuario premium, y quiere un sistema que "simplemente funciona" sin complicaciones técnicas, Powerwall es su mejor opción. En Puerto Rico, donde los apagones son frecuentes, tener un sistema de respaldo confiable con soporte global de Tesla brinda tranquilidad.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                      <Award className="h-5 w-5 text-kilowatt-primary" />
                      Ventajas del Powerwall
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Diseño elegante:</strong> unidad compacta montada en pared, estética superior</li>
                      <li>• <strong>App Tesla:</strong> monitoreo en tiempo real intuitivo (mejor del mercado)</li>
                      <li>• <strong>Instalación limpia:</strong> cableado oculto, look profesional</li>
                      <li>• <strong>Actualizaciones OTA:</strong> mejoras de software automáticas</li>
                      <li>• <strong>Valor de reventa:</strong> aumenta valor de propiedad (marca reconocida)</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-kilowatt-primary" />
                      Para Puerto Rico
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Clima:</strong> certificado para ambientes tropicales y humedad</li>
                      <li>• <strong>Apagones:</strong> respaldo instantáneo (&lt;50ms sin interrupción)</li>
                      <li>• <strong>Storm Watch:</strong> carga automática ante huracanes detectados</li>
                      <li>• <strong>Soporte:</strong> red global de Tesla Energy con presencia en PR</li>
                      <li>• <strong>Net-metering:</strong> optimizado para tarifas LUMA</li>
                    </ul>
                  </div>
                </div>
                <p className="bg-muted/50 border-l-4 border-kilowatt-secondary p-4 rounded">
                  <strong>Nota importante sobre costos:</strong> El Powerwall es 30-50% más costoso que alternativas LFP (EG4, SimpliPhi, etc.) con capacidad similar. Usted paga por la marca Tesla, el diseño premium, y la experiencia de usuario superior. Si el presupuesto es limitado, considere las alternativas en nuestra página de <a href="/servicios/baterias-almacenamiento-lfp" className="text-kilowatt-primary hover:underline">Baterías LFP</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Modelos Tesla Powerwall Disponibles
              </h2>
              <div className="space-y-6">
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Powerwall 3 (Nuevo - 2024)</h3>
                  <p className="text-muted-foreground mb-4">
                    La última generación de Powerwall con inversor híbrido integrado y mayor potencia. Diseño all-in-one que simplifica instalación. <strong>Esta es la opción recomendada para instalaciones nuevas</strong> o si está reemplazando su inversor existente.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Especificaciones:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• <strong>Capacidad:</strong> 13.5 kWh usable</li>
                        <li>• <strong>Potencia continua:</strong> 11.5 kW (mejorado)</li>
                        <li>• <strong>Potencia pico:</strong> 22 kW (arranque cargas pesadas)</li>
                        <li>• <strong>Inversor solar:</strong> Integrado (hasta 20 kW DC)</li>
                        <li>• <strong>Escalable:</strong> hasta 4 unidades (54 kWh)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Ideal para:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Instalaciones solares nuevas completas</li>
                        <li>• Reemplazo de inversor antiguo + agregar batería</li>
                        <li>• Casas grandes con múltiples aires (3-4 splits)</li>
                        <li>• Integración con cargador Tesla para vehículos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-kilowatt-secondary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Powerwall+ (Generación Anterior - Todavía Disponible)</h3>
                  <p className="text-muted-foreground mb-4">
                    Versión anterior con inversor solar integrado Tesla. Buena opción si encuentra inventario disponible a precio reducido. Todavía recibe soporte y actualizaciones de Tesla.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Especificaciones:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• <strong>Capacidad:</strong> 13.5 kWh usable</li>
                        <li>• <strong>Potencia continua:</strong> 7 kW (9.6 kW con sol)</li>
                        <li>• <strong>Inversor solar:</strong> Integrado (hasta 7.6 kW DC)</li>
                        <li>• <strong>Escalable:</strong> hasta 10 unidades</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Limitaciones vs PW3:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Menor potencia continua (7 kW vs 11.5 kW)</li>
                        <li>• Inversor solar limitado (7.6 kW vs 20 kW)</li>
                        <li>• No soporta cargas tan pesadas al arrancar</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Powerwall 2 (Descontinuado - Solo Retrofit)</h3>
                  <p className="text-muted-foreground text-sm">
                    El Powerwall 2 original (solo batería sin inversor solar) fue descontinuado. Si usted ya tiene un Powerwall 2 instalado y quiere agregar más unidades, podemos ayudarle a conseguir unidades de inventario remanente o sugerir upgrade a Powerwall 3. <strong>No recomendamos nuevas instalaciones con PW2.</strong>
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
                Opciones de Integración en Puerto Rico
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Opción 1: Sistema Solar Nuevo con Powerwall 3 (Recomendado)</h3>
                  <p className="text-muted-foreground mb-4">
                    Instalación completa desde cero: paneles solares + Powerwall 3 con inversor integrado. Esta es la opción más limpia y eficiente. Kilowatt PR gestiona todo: diseño, permisos con LUMA, instalación, y commissioning con Tesla.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-2">Sistema típico (casa mediana PR):</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 30-36 paneles de 400W (12-14.4 kW)</li>
                      <li>• 1-2 Powerwall 3 (13.5-27 kWh almacenamiento)</li>
                      <li>• Respaldo whole-home o critical loads</li>
                      <li>• Monitoreo Tesla app + Gateway 2</li>
                      <li>• Net-metering con LUMA incluido</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Opción 2: Agregar Powerwall a Sistema Solar Existente</h3>
                  <p className="text-muted-foreground mb-4">
                    Si ya tiene paneles solares con microinversores (Enphase) o inversor string, podemos agregar Powerwall 3 en configuración AC-coupled. El Powerwall carga de su sistema solar existente y provee respaldo durante apagones.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-2">Compatibilidad:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• <strong>Con Enphase:</strong> funciona perfectamente (AC-coupled). Mantiene sus microinversores.</li>
                      <li>• <strong>Con SolarEdge/SMA:</strong> compatible, se conecta lado AC.</li>
                      <li>• <strong>Sistema antiguo (&gt;10 años):</strong> evaluar si vale la pena vs reemplazo completo.</li>
                    </ul>
                    <p className="text-muted-foreground mt-3">
                      <strong>Nota:</strong> En configuración AC-coupled hay leve pérdida de eficiencia (3-5%) vs integración directa DC, pero es mínima y permite aprovechar inversión existente.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Opción 3: Powerwall Sin Solar (Backup Only)</h3>
                  <p className="text-muted-foreground mb-4">
                    Puede instalar Powerwall 3 sin paneles solares, como sistema de respaldo puro que carga de la red (LUMA). No ahorra en factura eléctrica, pero da respaldo confiable durante apagones. Puede agregar solar después.
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-2">Casos de uso:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Cliente tiene servicio eléctrico LUMA estable pero sufre apagones frecuentes</li>
                      <li>• Necesita respaldo crítico para equipos médicos o trabajo remoto</li>
                      <li>• Planea agregar solar en fase 2 (dentro de 1-2 años)</li>
                      <li>• No tiene espacio/orientación ideal para paneles en este momento</li>
                    </ul>
                    <p className="text-muted-foreground mt-3 italic">
                      ROI: Sin solar, el payback solo viene de evitar pérdidas por apagones (comida, trabajo, etc.). Es inversión en resiliencia, no ahorro directo.
                    </p>
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
                Tesla App: Monitoreo y Control
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  Una de las mayores ventajas del Powerwall es la <strong>app Tesla</strong> (iOS/Android), considerada la mejor del mercado para monitoreo de energía solar y baterías. Interfaz elegante e intuitiva que permite:
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Monitoreo en Tiempo Real:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Producción solar instantánea (kW)</li>
                      <li>• Consumo de la casa (kW)</li>
                      <li>• Carga/descarga de Powerwall (kW y %)</li>
                      <li>• Flujo hacia/desde la red (import/export)</li>
                      <li>• Historial de energía (día/semana/mes/año)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Control y Modos:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• <strong>Self-Powered:</strong> máxima autosuficiencia</li>
                      <li>• <strong>Time-Based Control:</strong> optimiza según tarifas horarias</li>
                      <li>• <strong>Backup Reserve:</strong> define % mínimo batería para emergencias</li>
                      <li>• <strong>Storm Watch:</strong> pre-carga ante huracanes/tormentas</li>
                      <li>• Notificaciones push de eventos y alertas</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm italic">
                  La app Tesla convierte su sistema de energía en una experiencia "smart home" completa. Si valora tener control total desde su teléfono, Powerwall no tiene competencia en experiencia de usuario.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps />
        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para instalar Tesla Powerwall en su hogar?"
          description="Evaluaremos su sistema actual o diseñaremos una instalación completa con Powerwall 3."
          utmCampaign="tesla-powerwall" 
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

export default TeslaPowerwall;
