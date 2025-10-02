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
import { CheckCircle, Zap, Car } from "lucide-react";

const EVChargerConSolar = () => {
  const ampliacionFAQs = getQAByCategory('ampliacion', 2);
  const instalacionFAQs = getQAByCategory('instalacion', 1);
  const additionalFAQs = getRandomQA(2, ['ampliacion', 'instalacion']);
  const faqs = [...ampliacionFAQs, ...instalacionFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Ampliación Solar",
      description: "Amplíe su sistema para el EV",
      href: "/servicios/actualizacion-y-ampliacion-solar"
    },
    {
      title: "Tesla Powerwall",
      description: "Integración perfecta con Tesla",
      href: "/servicios/tesla-powerwall-integracion"
    },
    {
      title: "Instalación Residencial",
      description: "Sistema solar completo + EV",
      href: "/servicios/instalacion-placas-solares-residencial"
    }
  ];

  const ciudades = [
    {
      title: "San Juan",
      description: "Cargadores EV en San Juan",
      href: "/puerto-rico/san-juan"
    },
    {
      title: "Bayamón",
      description: "Instalación solar + EV en Bayamón",
      href: "/puerto-rico/bayamon"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Cargador EV con Energía Solar en Puerto Rico | Kilowatt PR"
        description="Cargue su vehículo eléctrico con el sol de PR. Instalamos cargadores Nivel 2 integrados a su sistema solar. Ahorre hasta 80% vs cargar de LUMA."
        canonicalPath="/servicios/ev-charger-con-solar"
      />
      <ServiceSchema
        serviceName="Cargador EV con Energía Solar"
        serviceDescription="Instalación de cargadores para vehículos eléctricos integrados con sistemas de energía solar"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Car className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Cargador EV con Energía Solar en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Compró un vehículo eléctrico (Tesla, Mustang Mach-E, Nissan Leaf, etc.) y quiere cargarlo con el sol de Puerto Rico, no con la costosa electricidad de LUMA. Instalamos cargadores Nivel 2 (240V) integrados a su sistema solar, permitiéndole "manejar con el sol" y ahorrar hasta 80% en costos de carga.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Carga con el sol</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Ahorro 80% vs LUMA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Carga inteligente</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                ¿Por qué Cargar su EV con Energía Solar en PR?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Puerto Rico tiene las tarifas eléctricas más altas de Estados Unidos (~$0.30-$0.38/kWh con LUMA). Si carga su vehículo eléctrico directamente de la red, el "combustible" eléctrico puede costar casi lo mismo que gasolina. Pero si carga con energía solar, su costo marginal es <strong>casi cero</strong> después de amortizar la inversión inicial.
                </p>
                <div className="bg-card border border-border rounded-lg p-6 my-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Ejemplo Real: Tesla Model 3 en Puerto Rico</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Cargando de LUMA (sin solar):</p>
                      <ul className="space-y-1">
                        <li>• Consumo: 15 kWh/100 millas</li>
                        <li>• Maneja 1,000 millas/mes</li>
                        <li>• <strong>Energía necesaria: 150 kWh/mes</strong></li>
                        <li>• Costo LUMA: 150 kWh × $0.35 = <strong>$52.50/mes</strong></li>
                        <li>• Costo anual: <strong>$630</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Cargando con energía solar:</p>
                      <ul className="space-y-1">
                        <li>• Misma energía: 150 kWh/mes</li>
                        <li>• Costo marginal solar: <strong>$0/mes</strong> (ya pagado en sistema)</li>
                        <li>• Ahorro mensual: <strong>$52.50</strong></li>
                        <li>• <strong>Ahorro anual: $630</strong></li>
                        <li>• Ahorro 10 años: <strong>$6,300</strong></li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm italic">
                    Nota: El ahorro real financia gran parte de la ampliación solar necesaria para el EV (típicamente 3-5 kW extra de paneles).
                  </p>
                </div>
                <p>
                  Además del ahorro económico, cargar con solar es <strong>100% renovable y limpio</strong>, eliminando la huella de carbono de su transporte. En Puerto Rico, donde dependemos de combustibles fósiles importados para generar electricidad, esto es especialmente valioso.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                ¿Cuánto Solar Necesito para mi Vehículo Eléctrico?
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  La cantidad de paneles solares extra que necesita depende de cuánto maneja. Usamos esta fórmula simple:
                </p>
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Fórmula: Millas/mes ÷ 6.5 = kW solares extra necesarios</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Asumiendo eficiencia promedio de 4 millas/kWh (típica para EVs modernos) y 5.5 horas sol pico/día en PR.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                      <Zap className="h-5 w-5 text-kilowatt-primary" />
                      Uso Bajo
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>500 millas/mes</strong></li>
                      <li>Ejemplo: trabajo cerca, errands locales</li>
                      <li>Energía: ~125 kWh/mes</li>
                      <li><strong>Solar extra: 2-3 kW</strong></li>
                      <li>Paneles: 5-8 módulos 400W</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                      <Zap className="h-5 w-5 text-kilowatt-primary" />
                      Uso Medio
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>1,000 millas/mes</strong></li>
                      <li>Ejemplo: commute diario trabajo</li>
                      <li>Energía: ~250 kWh/mes</li>
                      <li><strong>Solar extra: 3-5 kW</strong></li>
                      <li>Paneles: 8-12 módulos 400W</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground flex items-center gap-2">
                      <Zap className="h-5 w-5 text-kilowatt-primary" />
                      Uso Alto
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>1,500+ millas/mes</strong></li>
                      <li>Ejemplo: ventas, Uber, viajes frecuentes</li>
                      <li>Energía: ~375 kWh/mes</li>
                      <li><strong>Solar extra: 5-7 kW</strong></li>
                      <li>Paneles: 12-18 módulos 400W</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/50 border-l-4 border-kilowatt-secondary p-4 rounded">
                  <p className="text-sm text-muted-foreground">
                    <strong>¿Ya tiene sistema solar?</strong> Si su sistema actual cubre su casa completamente, puede simplemente ampliarlo agregando los paneles extra para el EV. Si aún no tiene solar, diseñamos el sistema completo (casa + EV) desde el inicio.
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
                Cargadores EV: Nivel 1 vs Nivel 2
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Nivel 1 (120V - Enchufe Normal)</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>Velocidad de carga:</strong> 3-5 millas de rango por hora</p>
                    <p><strong>Tiempo carga completa:</strong> 24-48 horas (batería vacía)</p>
                    <p><strong>Ventajas:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Sin instalación especial (usa enchufe normal)</li>
                      <li>• Costo: $0 (cable incluido con EV)</li>
                      <li>• Suficiente si maneja poco (&lt;30 millas/día)</li>
                    </ul>
                    <p><strong>Desventajas:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Extremadamente lento</li>
                      <li>• No práctico para uso diario intensivo</li>
                      <li>• Puede sobrecargar circuito si comparte con otras cargas</li>
                    </ul>
                    <p className="pt-2 italic">
                      <strong>Nuestra recomendación:</strong> Solo para emergencias o uso ocasional muy liviano. No lo recomendamos como solución primaria en PR.
                    </p>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-kilowatt-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Nivel 2 (240V - Recomendado)</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>Velocidad de carga:</strong> 25-40 millas de rango por hora</p>
                    <p><strong>Tiempo carga completa:</strong> 4-8 horas (batería vacía)</p>
                    <p><strong>Ventajas:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Carga completa overnight</li>
                      <li>• Práctico para uso diario</li>
                      <li>• Programable para cargar con exceso solar</li>
                      <li>• Compatible con todos los EVs</li>
                    </ul>
                    <p><strong>Requisitos instalación:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Circuito dedicado 240V (40-50 Amp)</li>
                      <li>• Cableado desde panel eléctrico a garaje/carport</li>
                      <li>• Breaker y protecciones adecuadas</li>
                    </ul>
                    <p className="pt-2 italic">
                      <strong>Nuestra recomendación:</strong> Esta es la solución ideal para 95% de usuarios en PR. Permite carga nocturna completa y programación para aprovechar exceso solar.
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
                Marcas de Cargadores que Instalamos
              </h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Tesla Wall Connector (Recomendado para Tesla)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Si tiene un Tesla, el Wall Connector oficial es la mejor opción. Diseño elegante, integración perfecta con la app Tesla, carga hasta 48A (11.5 kW). Compatible solo con Teslas (usa conector propietario), pero hay adaptador J1772 si tiene otro EV secundario.
                  </p>
                  <p className="text-xs text-muted-foreground"><strong>Precio aprox instalado:</strong> Consulte cotización</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">ChargePoint Home Flex (Universal - Recomendado General)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Cargador versátil con conector J1772 (estándar universal). Compatible con todos los EVs (Tesla con adaptador incluido en el auto). App móvil para programar horarios, monitoreo de energía, y recordatorios. Ajustable 16-50A.
                  </p>
                  <p className="text-xs text-muted-foreground"><strong>Precio aprox instalado:</strong> Consulte cotización</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">JuiceBox 40 (Económico con WiFi)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Opción económica con funciones inteligentes. WiFi integrado, app móvil, programación de horarios, integración con Alexa. Conector J1772 universal. 40A (9.6 kW). Buena opción si busca balance precio-funcionalidad.
                  </p>
                  <p className="text-xs text-muted-foreground"><strong>Precio aprox instalado:</strong> Consulte cotización</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground">Grizzl-E (Ultra-Robusto para Clima PR)</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Cargador canadiense ultra-robusto diseñado para climas extremos. Certificación IP67 (totalmente sellado contra humedad). Sin app ni WiFi (básico), pero extremadamente confiable. Ideal para instalación exterior expuesta a elementos en PR.
                  </p>
                  <p className="text-xs text-muted-foreground"><strong>Precio aprox instalado:</strong> Consulte cotización</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Carga Inteligente con Exceso Solar
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  La estrategia óptima para maximizar ahorro es <strong>cargar su EV durante el día con exceso solar</strong>, no de noche con la red. Hay varias formas de lograr esto:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">1. Carga Manual Durante Horas Sol (Básico - Gratis)</h3>
                    <p className="text-sm text-muted-foreground">
                      Simplemente conecte el EV cuando llegue del trabajo (2-4 PM) en vez de en la noche. Su sistema solar estará produciendo exceso durante esas horas (después de cubrir casa), y ese exceso cargará el auto directamente. Requiere estar en casa durante día, pero es efectivo y sin costo adicional.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">2. Programación Horaria (Intermedio - Incluido en App del Cargador)</h3>
                    <p className="text-sm text-muted-foreground">
                      La mayoría de cargadores inteligentes (ChargePoint, JuiceBox, Tesla) permiten programar horarios de carga. Configure "carga solo de 10 AM - 4 PM" (horas de producción solar pico). Si no está en casa de día, conecte el auto en la noche pero no cargará hasta que el sol salga.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">3. Integración Avanzada con Sistema Solar (Premium - Requiere Hardware Compatible)</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Algunos sistemas solares avanzados (Enphase con IQ Gateway + cargador compatible, o Tesla Powerwall + Tesla Wall Connector) pueden <strong>modular la carga automáticamente</strong> según exceso solar disponible. El sistema monitorea producción en tiempo real y ajusta velocidad de carga del EV para usar solo exceso sin tomar nada de la red.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Esta es la solución más eficiente pero requiere inversión en equipos compatibles. Consulte si su sistema actual o futuro soporta esta integración.
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
                Proceso de Instalación
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Evaluación Eléctrica y Solar</h3>
                    <p className="text-muted-foreground text-sm">Revisamos su panel eléctrico para confirmar capacidad disponible para circuito 240V 40-50A. Evaluamos su sistema solar existente (si tiene) o diseñamos ampliación necesaria para cubrir consumo del EV.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Diseño de Cableado y Ubicación Cargador</h3>
                    <p className="text-muted-foreground text-sm">Planificamos ruta de cableado desde panel eléctrico hasta ubicación del cargador (garaje, carport, exterior). Confirmamos que cumple con códigos eléctricos de PR (NEC 2020). Seleccionamos cargador según sus preferencias (Tesla, universal, económico, etc.).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Permisos (Si Requiere Ampliación Solar)</h3>
                    <p className="text-muted-foreground text-sm">Si está ampliando sistema solar para el EV, gestionamos permisos de ampliación con municipio y actualización de net-metering con LUMA. El cargador en sí no requiere permiso separado (es carga eléctrica normal).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Instalación (1 día típico)</h3>
                    <p className="text-muted-foreground text-sm">Instalamos circuito dedicado desde panel eléctrico, montamos cargador en pared, realizamos conexiones y pruebas. Si hay ampliación solar simultánea, coordinamos ambas instalaciones. Entregamos con configuración de app y programación de horarios optimizados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">5</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Entrenamiento y Puesta en Marcha</h3>
                    <p className="text-muted-foreground text-sm">Le enseñamos cómo usar el cargador, configurar horarios en la app (si aplica), y optimizar carga con exceso solar. Le damos guía impresa de mejores prácticas para maximizar ahorro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps />
        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para cargar su EV con el sol de Puerto Rico?"
          description="Evaluaremos su consumo y diseñaremos la solución perfecta: ampliación solar + cargador EV integrado."
          utmCampaign="ev-charger-solar" 
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

export default EVChargerConSolar;
