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
import { CheckCircle, Zap } from "lucide-react";

const BackupHibrido = () => {
  const hybridFAQs = getQAByCategory('hibrido', 2);
  const additionalFAQs = getRandomQA(3, ['hibrido']);
  const faqs = [...hybridFAQs, ...additionalFAQs];

  const relatedServices = [
    {
      title: "Baterías LFP",
      description: "Almacenamiento de alta duración",
      href: "/servicios/baterias-almacenamiento-lfp"
    },
    {
      title: "Solar Off-Grid",
      description: "Independencia energética total",
      href: "/servicios/solar-off-grid"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Sistema de Backup Solar Híbrido en Puerto Rico | Kilowatt PR"
        description="Sistemas solares híbridos con baterías y generador integrado. Triple respaldo para apagones en Puerto Rico. Continuidad garantizada 24/7."
        canonicalPath="/servicios/backup-solar-hibrido"
      />
      <ServiceSchema
        serviceName="Sistema de Backup Solar Híbrido"
        serviceDescription="Instalación de sistemas solares híbridos que integran placas, baterías y generador para máxima resiliencia energética"
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
                Sistema de Backup Solar Híbrido en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                La solución definitiva contra apagones: combine energía solar, baterías LFP y su generador existente en un sistema inteligente que cambia automáticamente entre fuentes. Energía continua sin importar las condiciones.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Triple respaldo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Cambio automático</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Reduce uso generador 90%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Cómo Funciona el Sistema Híbrido
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p className="mb-4 leading-relaxed">
                  Un sistema solar híbrido es la configuración más resiliente disponible en Puerto Rico. A diferencia de sistemas solar-only o solar-batería, el híbrido integra tres fuentes de energía con control inteligente automático, garantizando electricidad continua bajo cualquier escenario.
                </p>
              </div>
              <div className="bg-card border-2 border-kilowatt-primary/20 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Jerarquía de Fuentes (Automática)</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kilowatt-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-foreground">Energía Solar (Prioridad #1)</h4>
                      <p className="text-muted-foreground">Durante el día, las placas solares alimentan la casa directamente y cargan las baterías. Exceso va a la red (net metering con LUMA).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kilowatt-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-foreground">Baterías LFP (Prioridad #2)</h4>
                      <p className="text-muted-foreground">En la noche o durante apagones, el sistema cambia automáticamente a baterías. Provee energía silenciosa y limpia por 8-24+ horas según capacidad.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">3</div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-foreground">Generador de Respaldo (Prioridad #3)</h4>
                      <p className="text-muted-foreground">Si las baterías se agotan durante apagón prolongado, el generador arranca automáticamente. También recarga las baterías para ciclo continuo.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                El controlador híbrido (inversor avanzado como Sol-Ark o EG4) gestiona todo el proceso sin intervención humana. Usted nunca se queda sin electricidad, y el uso de combustible del generador se reduce 85-95% comparado con depender solo del generador.
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Beneficios del Sistema Híbrido vs Alternativas
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 border-b border-border font-semibold">Característica</th>
                      <th className="text-left p-4 border-b border-border font-semibold">Solo Solar</th>
                      <th className="text-left p-4 border-b border-border font-semibold">Solar + Batería</th>
                      <th className="text-left p-4 border-b border-border font-semibold bg-kilowatt-primary/10">Híbrido ✓</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground text-sm">
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Funciona en apagones</td>
                      <td className="p-4 border-b border-border">❌ No</td>
                      <td className="p-4 border-b border-border">✅ Limitado</td>
                      <td className="p-4 border-b border-border bg-kilowatt-primary/5">✅✅ Ilimitado</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Autonomía apagón largo (3+ días)</td>
                      <td className="p-4 border-b border-border">❌ Cero</td>
                      <td className="p-4 border-b border-border">⚠️ Depende batería</td>
                      <td className="p-4 border-b border-border bg-kilowatt-primary/5">✅ Infinita (generador)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Reduce uso combustible</td>
                      <td className="p-4 border-b border-border">❌ N/A</td>
                      <td className="p-4 border-b border-border">❌ Sin generador</td>
                      <td className="p-4 border-b border-border bg-kilowatt-primary/5">✅ 85-95%</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-border font-medium">Ruido durante uso normal</td>
                      <td className="p-4 border-b border-border">✅ Silencioso</td>
                      <td className="p-4 border-b border-border">✅ Silencioso</td>
                      <td className="p-4 border-b border-border bg-kilowatt-primary/5">✅ Silencioso</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Ideal para</td>
                      <td className="p-4">Ahorro básico</td>
                      <td className="p-4">Apagones cortos</td>
                      <td className="p-4 bg-kilowatt-primary/5">Resiliencia total</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps />

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Componentes de un Sistema Híbrido
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Inversor Híbrido</h3>
                  <p className="text-muted-foreground mb-4">
                    El cerebro del sistema. Gestiona solar, baterías, red y generador automáticamente. Marcas recomendadas: Sol-Ark 15K, EG4 18K, Outback Radian.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Baterías LFP</h3>
                  <p className="text-muted-foreground mb-4">
                    Banco de 10-40 kWh según necesidades. Química segura, 10 años garantía, 6000+ ciclos. Provee respaldo silencioso antes de usar generador.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Paneles Solares</h3>
                  <p className="text-muted-foreground mb-4">
                    Array dimensionado para consumo diario + recarga baterías. Típicamente 8-15 kW para residencial, 20-50 kW para comercial.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Generador Existente</h3>
                  <p className="text-muted-foreground mb-4">
                    Integramos su generador actual (gasolina/diésel/propano) o instalamos uno nuevo. ATS (automatic transfer switch) incluido para cambio automático.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para resiliencia energética total?"
          description="Diseñaremos un sistema híbrido personalizado que garantice electricidad continua sin importar las condiciones."
          utmCampaign="backup-hibrido" 
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

export default BackupHibrido;