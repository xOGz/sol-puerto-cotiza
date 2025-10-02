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
import { CheckCircle, Battery } from "lucide-react";

const BateriasLFP = () => {
  const batteryFAQs = getQAByCategory('baterias', 2);
  const additionalFAQs = getRandomQA(3, ['baterias']);
  const faqs = [...batteryFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Backup Solar Híbrido",
      description: "Integre baterías con su sistema solar",
      href: "/servicios/backup-solar-hibrido"
    },
    {
      title: "Instalación Residencial",
      description: "Sistema solar completo para su hogar",
      href: "/servicios/instalacion-placas-solares-residencial"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Baterías de Almacenamiento LFP para Solar en Puerto Rico | Kilowatt PR"
        description="Baterías LFP (Litio-Ferro-Fosfato) de alta duración para sistemas solares en PR. Respaldo confiable durante apagones con 6000+ ciclos. Cotización gratis."
        canonicalPath="/servicios/baterias-almacenamiento-lfp"
      />
      <ServiceSchema
        serviceName="Baterías de Almacenamiento LFP"
        serviceDescription="Instalación de sistemas de baterías LFP (Litio-Ferro-Fosfato) para almacenamiento solar en Puerto Rico con garantía extendida"
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
                Baterías de Almacenamiento LFP en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Las baterías LFP (Litio-Ferro-Fosfato) son la tecnología superior para almacenamiento solar en Puerto Rico. Seguras, duraderas y optimizadas para clima tropical, garantizan energía confiable durante apagones frecuentes y maximizan el aprovechamiento de su sistema solar.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>6,000-8,000 ciclos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Garantía 10 años</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Química ultra-segura</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Por qué LFP es Superior para Puerto Rico
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p className="mb-4 leading-relaxed">
                  No todas las baterías solares son iguales. Las baterías tradicionales de litio NMC (Níquel-Manganeso-Cobalto) usadas en Tesla Powerwall y otros sistemas populares tienen limitaciones significativas en clima tropical. Las LFP (Litio-Ferro-Fosfato) ofrecen ventajas críticas para las condiciones boricuas.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Seguridad Térmica</h3>
                  <p className="text-muted-foreground mb-3">
                    La química LFP es inherentemente estable. No se sobrecalienta ni entra en thermal runaway (reacción en cadena) como las baterías NMC. En temperaturas de 85-95°F comunes en Puerto Rico, las LFP mantienen rendimiento sin degradación acelerada.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Vida Útil Extendida</h3>
                  <p className="text-muted-foreground mb-3">
                    Las baterías LFP ofrecen 6,000-8,000 ciclos completos vs 3,000-5,000 de las NMC. En uso diario (descarga/recarga por apagones), una LFP dura 15-20 años vs 8-12 años de tecnología tradicional. Costo por ciclo significativamente menor.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Carga/Descarga Rápida</h3>
                  <p className="text-muted-foreground mb-3">
                    Las LFP soportan tasas de carga C-rate más altas, permitiendo recarga más rápida durante ventanas de sol y descarga potente para equipos de alto consumo (A/C, bombas, secadoras). Ideal para respaldo de emergencia inmediato.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Profundidad de Descarga</h3>
                  <p className="text-muted-foreground mb-3">
                    Puede usar 90-100% de la capacidad nominal sin daño vs 80% en NMC. Una batería LFP de 10 kWh realmente entrega 10 kWh utilizables, no 8 kWh. Esto significa menos baterías necesarias para la misma autonomía.
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
                Marcas y Configuraciones que Instalamos
              </h2>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">EG4 PowerPro Series</h3>
                  <p className="text-muted-foreground mb-3">
                    Baterías LFP modulares de 14.3 kWh cada una, apilables hasta 8 unidades (114 kWh total). Ideales para respaldo extendido o consumo alto. Garantía 10 años / 6,000 ciclos. Sistema de gestión inteligente incluido.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-kilowatt-primary/10 text-kilowatt-primary px-3 py-1 rounded-full">Modular</span>
                    <span className="text-xs bg-kilowatt-primary/10 text-kilowatt-primary px-3 py-1 rounded-full">Alto rendimiento</span>
                    <span className="text-xs bg-kilowatt-primary/10 text-kilowatt-primary px-3 py-1 rounded-full">Precio competitivo</span>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">SimpliPhi PHI 3.5</h3>
                  <p className="text-muted-foreground mb-3">
                    Baterías LFP premium de 3.5 kWh, no tóxicas y 100% reciclables. Certificadas para ambientes extremos (operan -20°C a 60°C). Perfectas para sistemas residenciales compactos. Garantía 10 años.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-kilowatt-primary/10 text-kilowatt-primary px-3 py-1 rounded-full">Eco-friendly</span>
                    <span className="text-xs bg-kilowatt-primary/10 text-kilowatt-primary px-3 py-1 rounded-full">Compacta</span>
                    <span className="text-xs bg-kilowatt-primary/10 text-kilowatt-primary px-3 py-1 rounded-full">Ultra segura</span>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Sol-Ark L3 Series</h3>
                  <p className="text-muted-foreground mb-3">
                    Baterías LFP de 15.4 kWh integradas con inversores híbridos Sol-Ark. Sistema all-in-one optimizado para net metering y backup automático. Expansión hasta 120 kWh. Garantía 10 años / 10,000 ciclos.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-kilowatt-primary/10 text-kilowatt-primary px-3 py-1 rounded-full">Todo-en-uno</span>
                    <span className="text-xs bg-kilowatt-primary/10 text-kilowatt-primary px-3 py-1 rounded-full">Máxima duración</span>
                    <span className="text-xs bg-kilowatt-primary/10 text-kilowatt-primary px-3 py-1 rounded-full">Instalación simplificada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps 
          title="Proceso de Instalación de Baterías"
        />

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Dimensionamiento: ¿Cuánta Batería Necesito?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                El tamaño correcto del banco de baterías depende de tres factores: cargas críticas que necesita respaldar, horas de autonomía deseadas, y presupuesto disponible. Aquí hay guías generales:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 border-b border-border font-semibold">Perfil de Usuario</th>
                      <th className="text-left p-4 border-b border-border font-semibold">Capacidad Recomendada</th>
                      <th className="text-left p-4 border-b border-border font-semibold">Autonomía Típica</th>
                      <th className="text-left p-4 border-b border-border font-semibold">Rango de Precio</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="p-4 border-b border-border">Casa pequeña / Cargas esenciales</td>
                      <td className="p-4 border-b border-border">5-10 kWh</td>
                      <td className="p-4 border-b border-border">6-12 horas</td>
                      <td className="p-4 border-b border-border">$5,000-$9,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border">Casa mediana / Respaldo completo</td>
                      <td className="p-4 border-b border-border">10-20 kWh</td>
                      <td className="p-4 border-b border-border">12-24 horas</td>
                      <td className="p-4 border-b border-border">$9,000-$18,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border">Casa grande / Uso intensivo</td>
                      <td className="p-4 border-b border-border">20-40 kWh</td>
                      <td className="p-4 border-b border-border">24-48 horas</td>
                      <td className="p-4 border-b border-border">$18,000-$35,000</td>
                    </tr>
                    <tr>
                      <td className="p-4">Comercial / Off-grid</td>
                      <td className="p-4">40-100+ kWh</td>
                      <td className="p-4">48-72 horas</td>
                      <td className="p-4">$35,000-$90,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                En Kilowatt PR realizamos cálculo de cargas detallado revisando sus equipos críticos (nevera, freezer, A/C, luces, internet, bomba de agua, etc.) y diseñamos el banco de baterías óptimo. Priorizamos eficiencia: es mejor dimensionar correctamente que sobredimensionar innecesariamente.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para respaldo confiable?"
          description="Obtenga una evaluación gratuita de sus necesidades de almacenamiento y una cotización personalizada de baterías LFP."
          utmCampaign="baterias-lfp" 
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

export default BateriasLFP;