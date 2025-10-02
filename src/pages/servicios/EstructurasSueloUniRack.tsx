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
import { CheckCircle, Wind, Wrench } from "lucide-react";

const EstructurasSueloUniRack = () => {
  const instalacionFAQs = getQAByCategory('instalacion', 2);
  const mantenimientoFAQs = getQAByCategory('mantenimiento', 1);
  const additionalFAQs = getRandomQA(2, ['instalacion', 'mantenimiento']);
  const faqs = [...instalacionFAQs, ...mantenimientoFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Instalación Comercial",
      description: "Sistemas ground-mount para comercios",
      href: "/servicios/instalacion-placas-solares-comercial"
    },
    {
      title: "Solar Off-Grid",
      description: "Sistemas en terrenos sin red",
      href: "/servicios/solar-off-grid"
    },
    {
      title: "Instalación Residencial",
      description: "Solución si techo no es viable",
      href: "/servicios/instalacion-placas-solares-residencial"
    }
  ];

  const ciudades = [
    {
      title: "Coamo",
      description: "Ground-mount en terrenos Coamo",
      href: "/puerto-rico/coamo"
    },
    {
      title: "Salinas",
      description: "Estructuras en suelo Salinas",
      href: "/puerto-rico/salinas"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Estructuras Ground-Mount UniRack en Puerto Rico | Kilowatt PR"
        description="Instalación solar en suelo con estructuras UniRack certificadas. Ideal si techo no es viable o para sistemas grandes. Resistentes a huracanes y optimizadas para PR."
        canonicalPath="/servicios/estructuras-suelo-uni-rack"
      />
      <ServiceSchema
        serviceName="Estructuras Ground-Mount UniRack"
        serviceDescription="Instalación de paneles solares en estructuras de suelo certificadas para resistir huracanes en Puerto Rico"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Wrench className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Estructuras Ground-Mount UniRack en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                ¿Su techo no es viable para solar (muy viejo, sombreado, orientación mala)? ¿Tiene terreno disponible? Instalamos sistemas solares en el suelo con estructuras UniRack certificadas, diseñadas específicamente para resistir huracanes en Puerto Rico. Solución robusta para residencias y comercios.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Resistente 175 mph</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Orientación óptima</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Fácil mantenimiento</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                ¿Cuándo es Ground-Mount la Mejor Opción?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  La instalación en techo es generalmente preferida (usa espacio no aprovechado, más segura contra robos), pero hay casos donde ground-mount es superior o la única opción viable:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Casos Ideales para Ground-Mount</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Techo viejo/débil:</strong> No soporta peso o requiere reemplazo pronto</li>
                      <li>• <strong>Techo sombreado:</strong> Árboles grandes que no se pueden podar</li>
                      <li>• <strong>Orientación mala:</strong> Techo mira norte o tiene inclinación extrema</li>
                      <li>• <strong>Techo complejo:</strong> Múltiples niveles, muchas chimeneas/ventilaciones</li>
                      <li>• <strong>Material problemático:</strong> Techo de madera podrida o tejas frágiles</li>
                      <li>• <strong>Sistema grande:</strong> No cabe en techo disponible (&gt;15 kW)</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-foreground">Ventajas de Ground-Mount</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Orientación perfecta:</strong> Apuntamos paneles al sur geográfico exacto</li>
                      <li>• <strong>Ángulo óptimo:</strong> 18-20° ideal para latitud de PR</li>
                      <li>• <strong>Sin penetraciones en techo:</strong> Cero riesgo de filtraciones</li>
                      <li>• <strong>Mantenimiento fácil:</strong> Acceso directo para limpieza</li>
                      <li>• <strong>Ventilación superior:</strong> Paneles más fríos = mayor eficiencia</li>
                      <li>• <strong>Expansión futura:</strong> Más fácil agregar paneles después</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted/50 border-l-4 border-kilowatt-secondary p-4 rounded">
                  <p className="text-sm">
                    <strong>Consideraciones importantes:</strong> Ground-mount requiere terreno disponible (idealmente plano o leve pendiente sur), zoning/permisos pueden ser más complejos en zonas residenciales densas, y en PR existe riesgo mayor de vandalismo/robo si la propiedad no está bien cercada. Evaluamos todos estos factores en la consulta inicial.
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
                UniRack: Estructuras Certificadas para Huracanes
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  En Puerto Rico, las estructuras ground-mount deben resistir vientos de huracán categoría 5 (175+ mph según código). Usamos sistemas <strong>UniRack</strong>, fabricante líder estadounidense con certificaciones específicas para zonas de huracanes y amplia experiencia en el Caribe.
                </p>
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground flex items-center gap-2">
                    <Wind className="h-6 w-6 text-kilowatt-primary" />
                    Certificaciones y Resistencia
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Estándares cumplidos:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• <strong>ASCE 7-16:</strong> Estándar de cargas de viento para PR</li>
                        <li>• <strong>IBC 2018:</strong> International Building Code</li>
                        <li>• <strong>UL 2703:</strong> Certificación de montaje de módulos</li>
                        <li>• <strong>Viento:</strong> Resistente hasta 175 mph (Categoría 5)</li>
                        <li>• <strong>Nieve:</strong> N/A para PR, pero cumple estándar</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Diseño robusto:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Aluminio 6063-T6 (anticorrosión marina)</li>
                        <li>• Tornillería acero inoxidable 316 (no se oxida)</li>
                        <li>• Pernos de anclaje profundos en concreto</li>
                        <li>• Diseño modular para fácil reemplazo de piezas</li>
                        <li>• Probado en túnel de viento (Miami-Dade aprobado)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm italic">
                    En Puerto Rico, después de María (2017), los sistemas UniRack instalados correctamente tuvieron tasa de supervivencia superior a 95%, mientras estructuras genéricas fallaron masivamente.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Tipos de Estructuras UniRack</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">SolarMount (Residencial/Pequeño Comercial)</h4>
                      <p className="text-sm text-muted-foreground">
                        Sistema estándar para hasta 50 paneles (~20 kW). Postes enterrados en concreto, estructura de aluminio, ángulo fijo. Ideal para residencias con terreno disponible o pequeños comercios. Configuración típica: 2-4 filas de paneles, 8-12 paneles por fila.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">RM10 (Comercial Grande)</h4>
                      <p className="text-sm text-muted-foreground">
                        Para sistemas grandes (50+ kW). Soporta hasta 100 paneles por estructura. Diseño modular que permite crear "granjas solares" pequeñas. Requiere estudio geotécnico de suelo. Usado en comercios grandes, almacenes, fincas agrícolas con terreno extenso.
                      </p>
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
                Proceso de Instalación Ground-Mount
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Evaluación de Terreno y Zoning</h3>
                    <p className="text-muted-foreground text-sm">Visitamos el sitio para evaluar terreno (topografía, drenaje, sombreado), confirmar zoning permite estructuras solares, y medir distancia a panel eléctrico (costo de trenching). Tomamos fotos aéreas con drone para diseño preciso.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Diseño Estructural y Cálculos de Carga</h3>
                    <p className="text-muted-foreground text-sm">Ingeniero estructural certifica diseño según ASCE 7-16 para velocidad de viento local en PR (140-175 mph según zona). Calcula profundidad de cimentación basado en tipo de suelo (arcilla, arena, roca). Optimiza orientación (sur geográfico) y ángulo (18-20° para PR).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Permisos y Aprobaciones</h3>
                    <p className="text-muted-foreground text-sm">Gestionamos permisos con municipio (construcción + eléctrico), aprobación de LUMA para net-metering, y cualquier permiso ambiental si aplica (terrenos cerca de cuerpos de agua). Proceso típico: 6-10 semanas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Preparación de Sitio y Cimentación</h3>
                    <p className="text-muted-foreground text-sm">Nivelamos terreno (si necesario), excavamos hoyos para postes (típicamente 4-6 pies profundidad), vertemos concreto para cimentación. Trenching para cableado subterráneo desde estructura a panel eléctrico (conduit PVC con cableado calibre adecuado). Tiempo: 2-3 días.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">5</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Montaje de Estructura y Paneles</h3>
                    <p className="text-muted-foreground text-sm">Instalamos postes y estructura UniRack (aluminio). Montamos rieles, clips, y paneles solares. Cableado DC y conexión a inversor. Instalación eléctrica y pruebas de sistema completo. Tiempo: 3-5 días según tamaño.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary font-bold">6</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Inspección Final y Energización</h3>
                    <p className="text-muted-foreground text-sm">Inspección municipal y de LUMA. Correcciones si necesarias. Energización final y commissioning. Entrenamiento de operación y mantenimiento. Total desde permisos hasta energización: 10-14 semanas típicamente.</p>
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
                Costos y Consideraciones
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Ground-Mount vs Techo: Diferencias de Costo</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Ground-mount es típicamente 15-25% más costoso</strong> que instalación en techo equivalente. Los costos extra vienen de:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>• Estructura UniRack certificada (más robusta que racks de techo)</li>
                      <li>• Excavación y cimentación en concreto</li>
                      <li>• Trenching (zanja) y cableado subterráneo</li>
                      <li>• Permisos de construcción adicionales (no solo eléctrico)</li>
                      <li>• Mayor tiempo de instalación (preparación de sitio)</li>
                    </ul>
                    <p className="mt-3">
                      <strong>Cuándo vale la pena el costo extra:</strong> Si su techo necesitaría reemplazo pronto ($8K-$15K) o tiene problemas severos de sombreado que reducirían producción 30%+, ground-mount puede ser más económico a largo plazo. También si está ampliando sistema grande y techo ya está al máximo.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Requisitos de Terreno</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Espacio necesario (regla aproximada):</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Sistema residencial 10 kW (25-30 paneles): ~600-800 pies cuadrados</li>
                      <li>• Sistema 20 kW (50 paneles): ~1,200-1,500 pies cuadrados</li>
                      <li>• Sistema comercial 50 kW: ~3,000-4,000 pies cuadrados</li>
                    </ul>
                    <p className="mt-3"><strong>Consideraciones adicionales:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Distancia mínima a propiedad vecina (setback): típicamente 5-10 pies según municipio</li>
                      <li>• Acceso para mantenimiento: dejar espacio entre filas de paneles</li>
                      <li>• Drenaje: evitar áreas que inundan (agua estancada daña cimentación)</li>
                      <li>• Servicios subterráneos: verificar no hay líneas de agua/séptico</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Seguridad y Prevención de Robo</h3>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-3">
                      En Puerto Rico, sistemas ground-mount en propiedades sin vigilancia tienen riesgo de robo de paneles o vandalismo. Recomendaciones:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>Verja perimetral:</strong> Instale cerca de 6+ pies con portón con candado</li>
                      <li>• <strong>Iluminación:</strong> Luces con sensor de movimiento (alimentadas por solar)</li>
                      <li>• <strong>Cámaras:</strong> Sistema de vigilancia IP con grabación remota</li>
                      <li>• <strong>Tornillería especial:</strong> Usamos tornillos anti-robo (requieren llave especial)</li>
                      <li>• <strong>Seguro:</strong> Verifique que póliza de propiedad cubra sistema solar</li>
                    </ul>
                    <p className="mt-3 italic">
                      En áreas rurales o remotas, considere seriamente estas medidas. En urbanizaciones vigiladas o propiedades ocupadas, el riesgo es mucho menor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps />
        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Su techo no es viable para solar?"
          description="Evaluaremos su terreno y diseñaremos un sistema ground-mount robusto con estructuras UniRack certificadas."
          utmCampaign="ground-mount" 
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

export default EstructurasSueloUniRack;
