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
import { CheckCircle, Sparkles } from "lucide-react";

const LimpiezaPlacas = () => {
  const faqs = getRandomQA(5);

  const relatedServices = [
    {
      title: "Mantenimiento Solar",
      description: "Servicio completo con contratos anuales",
      href: "/servicios/mantenimiento-solar"
    },
    {
      title: "Inspección de Sistema",
      description: "Diagnóstico técnico detallado",
      href: "/servicios/inspeccion-sistema-solar"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Limpieza Profesional de Placas Solares en Puerto Rico | Kilowatt PR"
        description="Servicio especializado de limpieza de paneles solares en PR. Recupere hasta 25% de producción perdida. Equipos profesionales y agua purificada."
        canonicalPath="/servicios/limpieza-de-placas"
      />
      <ServiceSchema
        serviceName="Limpieza Profesional de Placas Solares"
        serviceDescription="Servicio de limpieza especializada para paneles solares usando equipos profesionales y técnicas seguras"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Sparkles className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Limpieza Profesional de Placas Solares en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Las placas solares sucias producen 15-25% menos electricidad. En Puerto Rico, el polvo del Sahara, salitre costero y residuos orgánicos se acumulan rápidamente. Nuestro servicio profesional restaura la producción óptima de manera segura y efectiva.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Agua desionizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Equipos profesionales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Sin rayar paneles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Impacto de la Suciedad en Puerto Rico
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-destructive mb-2">-25%</div>
                  <p className="text-sm text-muted-foreground">Pérdida máxima de producción por suciedad severa</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-kilowatt-primary mb-2">+20%</div>
                  <p className="text-sm text-muted-foreground">Recuperación de producción después de limpieza</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-kilowatt-primary mb-2">3-6</div>
                  <p className="text-sm text-muted-foreground">Meses entre limpiezas recomendadas en PR</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4 leading-relaxed">
                  Puerto Rico enfrenta condiciones ambientales especialmente agresivas para paneles solares. El polvo del Sahara llega periódicamente durante el verano, cubriendo superficies con partículas finas difíciles de remover con lluvia. En zonas costeras, el salitre se deposita constantemente, creando película opaca. Los excrementos de aves y residuos orgánicos son comunes, especialmente bajo árboles.
                </p>
                <p className="leading-relaxed">
                  La lluvia NO limpia efectivamente los paneles. De hecho, puede empeorar la situación al crear manchas de agua con minerales. La inclinación típica de techos en PR (15-20 grados) no favorece auto-limpieza como en techos más empinados. Limpiar paneles incorrectamente puede rayarlos permanentemente, reduciendo producción de manera irreversible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Nuestro Proceso Profesional de Limpieza
              </h2>
              <div className="space-y-6">
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center font-bold text-kilowatt-primary">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Inspección Pre-Limpieza</h3>
                      <p className="text-muted-foreground">Evaluamos el nivel de suciedad, identificamos puntos problemáticos (excremento de aves, manchas minerales), y verificamos condición general de paneles antes de comenzar.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center font-bold text-kilowatt-primary">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Remoción Inicial de Escombros</h3>
                      <p className="text-muted-foreground">Retiramos hojas, ramas, excremento seco y escombros grandes manualmente con herramientas suaves. Evitamos arrastrar suciedad que podría rayar el vidrio.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center font-bold text-kilowatt-primary">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Limpieza con Agua Desionizada</h3>
                      <p className="text-muted-foreground">Usamos sistema de pértiga con cepillos suaves y agua desionizada (DI water) que no deja manchas minerales. El agua DI es pura, sin minerales que creen residuo al secar.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center font-bold text-kilowatt-primary">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Tratamiento de Manchas Difíciles</h3>
                      <p className="text-muted-foreground">Para manchas persistentes (excremento, savia), aplicamos detergente especializado biodegradable y pH neutro. Dejamos actuar y enjuagamos completamente.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center font-bold text-kilowatt-primary">5</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Enjuague Final y Secado Natural</h3>
                      <p className="text-muted-foreground">Enjuagamos exhaustivamente con agua DI para remover todo residuo de detergente. Permitimos secado natural (no usamos squeegees que pueden rayar). Paneles quedan impecables sin manchas.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border-l-4 border-kilowatt-primary rounded-r-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kilowatt-primary/10 flex items-center justify-center font-bold text-kilowatt-primary">6</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Inspección Post-Limpieza y Reporte</h3>
                      <p className="text-muted-foreground">Verificamos que todos los paneles estén limpios, tomamos fotos antes/después, y entregamos reporte con recomendaciones si detectamos problemas (grietas, hot spots, conexiones sueltas).</p>
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
                Precios de Limpieza
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Sistema Pequeño</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-4">$99</div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• Hasta 10 paneles</li>
                    <li>• Sistemas ≤5 kW</li>
                    <li>• 1-2 horas trabajo</li>
                    <li>• Fotos antes/después</li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic">Típico para casas pequeñas/medianas</p>
                </div>
                <div className="bg-card border-2 border-kilowatt-primary rounded-lg p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-kilowatt-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Más Común
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Sistema Mediano</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-4">$149</div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• 11-20 paneles</li>
                    <li>• Sistemas 6-10 kW</li>
                    <li>• 2-3 horas trabajo</li>
                    <li>• Inspección incluida</li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic">Típico para casas grandes/comercios pequeños</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Sistema Grande</h3>
                  <div className="text-3xl font-bold text-kilowatt-primary mb-4">$199+</div>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• 21+ paneles</li>
                    <li>• Sistemas 11+ kW</li>
                    <li>• 3-5 horas trabajo</li>
                    <li>• Reporte detallado</li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic">Comercial/industrial - cotización personalizada</p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-kilowatt-primary/10 border border-kilowatt-primary/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-foreground">Descuentos por Paquetes</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0" />
                    <span>Paquete 2 limpiezas/año: <span className="font-bold">10% descuento</span></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0" />
                    <span>Paquete 4 limpiezas/año: <span className="font-bold">20% descuento</span></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0" />
                    <span>Clientes de mantenimiento: <span className="font-bold">incluido en plan</span></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0" />
                    <span>Referidos: <span className="font-bold">$20 crédito por referencia</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para recuperar producción perdida?"
          description="Agende su limpieza profesional hoy. Verá la diferencia inmediatamente en su monitoreo de producción."
          utmCampaign="limpieza-placas" 
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

export default LimpiezaPlacas;