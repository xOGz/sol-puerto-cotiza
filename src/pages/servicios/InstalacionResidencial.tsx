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
import { getRandomQA } from "@/data/qaContent";
import { CheckCircle } from "lucide-react";

const InstalacionResidencial = () => {
  const faqs = getRandomQA(5, ['off-grid', 'ev-charging']);

  const relatedServices = [
    {
      title: "Baterías de Almacenamiento LFP",
      description: "Respaldo confiable para apagones frecuentes",
      href: "/servicios/baterias-almacenamiento-lfp"
    },
    {
      title: "Net Metering con LUMA",
      description: "Maximice su ahorro con medición neta",
      href: "/servicios/net-metering-luma"
    }
  ];

  const citiesServed = [
    {
      title: "Placas Solares en Aguadilla",
      description: "Instalación profesional en la costa oeste",
      href: "/puerto-rico/aguadilla"
    },
    {
      title: "Placas Solares en Mayagüez",
      description: "Servicio experto en el oeste de PR",
      href: "/puerto-rico/mayaguez"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Instalación de Placas Solares Residenciales en Puerto Rico | Kilowatt PR"
        description="Instalación profesional de sistemas solares residenciales en Puerto Rico. Ahorre hasta 95% en su factura de LUMA con garantía de 25 años. Cotización gratis."
        canonicalPath="/servicios/instalacion-placas-solares-residencial"
      />
      <ServiceSchema
        serviceName="Instalación de Placas Solares Residenciales"
        serviceDescription="Instalación completa de sistemas de energía solar para hogares en Puerto Rico con garantía extendida y soporte técnico continuo"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Instalación de Placas Solares Residenciales en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Libérese de las altas facturas de LUMA Energy y los apagones constantes. Nuestros sistemas solares residenciales le permiten ahorrar hasta 95% en electricidad mientras protege su hogar con energía limpia y confiable. Con más de 300 días de sol al año en Puerto Rico, su techo es una mina de oro sin explotar.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Garantía 25 años</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Instalación 2-4 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>ROI 5-8 años</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Por qué Elegir Kilowatt PR para Su Casa
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4 leading-relaxed">
                  En Puerto Rico enfrentamos tres realidades: tarifas eléctricas entre las más altas de Estados Unidos, apagones frecuentes que afectan productividad y calidad de vida, y un clima tropical con radiación solar excepcional. Kilowatt PR convierte estos desafíos en oportunidades de ahorro real.
                </p>
                <p className="mb-4 leading-relaxed">
                  Como perito electricista certificado con experiencia instalando sistemas en todo tipo de techos boricuas (zinc, concreto, tejas), entendemos los requisitos únicos de construcción en la isla: resistencia a vientos huracanados, manejo de salitre costero, y cumplimiento con códigos locales y de LUMA Energy.
                </p>
                <p className="leading-relaxed">
                  Nuestros sistemas incluyen módulos tier-1 con certificación para zonas de huracán, inversores de última generación (microinversores Enphase o string inverters según su caso), y estructuras de montaje calculadas para cargas de viento extremas. Todo respaldado por garantías del fabricante y nuestra garantía de mano de obra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <ProcessSteps />

        {/* Cost & ROI */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Inversión y Retorno en Puerto Rico
              </h2>
              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Inversión Típica</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Sistema 5-7 kW (casa pequeña/mediana): $10,000 a 15,000</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Sistema 8-12 kW (casa grande): $16,000 - $22,000</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Crédito federal 30% ITC reduce costo neto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Financiamiento $0 inicial disponible</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Ahorro Estimado</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Reducción 80-95% en factura mensual</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Retorno de inversión en 5-8 años</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Ahorro proyectado: $40,000-$80,000 en 25 años</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-kilowatt-primary flex-shrink-0 mt-0.5" />
                        <span>Incremento valor propiedad: 3-4%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Con las tarifas de LUMA Energy superando $0.30/kWh y aumentando regularmente, la energía solar no es solo una decisión ambiental, es una decisión financiera inteligente. Nuestras proyecciones de ahorro se basan en sus facturas reales de los últimos 12 meses y datos de radiación solar específicos de su municipio.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFAQ faqs={faqs} />

        {/* CTA */}
        <CTASection utmCampaign="instalacion-residencial" />

        {/* Lead Form */}
        <LeadCaptureSection />

        {/* Internal Links */}
        <InternalLinks 
          title="Servicios Relacionados" 
          links={relatedServices}
          columns={2}
        />
        
        <InternalLinks 
          title="Servimos Su Municipio" 
          links={citiesServed}
          columns={2}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default InstalacionResidencial;