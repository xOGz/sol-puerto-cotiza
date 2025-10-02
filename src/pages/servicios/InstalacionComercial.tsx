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
import { CheckCircle, Building2 } from "lucide-react";

const InstalacionComercial = () => {
  const faqs = getRandomQA(5, ['residencial']);

  const relatedServices = [
    {
      title: "Instalación Residencial",
      description: "Sistemas solares para hogares en PR",
      href: "/servicios/instalacion-placas-solares-residencial"
    },
    {
      title: "Backup Solar Híbrido",
      description: "Continuidad operacional garantizada",
      href: "/servicios/backup-solar-hibrido"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Instalación de Placas Solares Comerciales en Puerto Rico | Kilowatt PR"
        description="Sistemas solares comerciales e industriales en Puerto Rico. Reduzca costos operativos hasta 90% y proteja su negocio de apagones. Consultoría gratis."
        canonicalPath="/servicios/instalacion-placas-solares-comercial"
      />
      <ServiceSchema
        serviceName="Instalación de Placas Solares Comerciales e Industriales"
        serviceDescription="Soluciones solares escalables para negocios, industrias y organizaciones en Puerto Rico con análisis de ROI y financiamiento comercial"
        faqs={faqs}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <Building2 className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Instalación de Placas Solares Comerciales en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Transforme los costos operativos de su negocio en ventaja competitiva. Los sistemas solares comerciales reducen gastos de electricidad hasta 90%, mejoran flujo de caja, y aseguran operaciones continuas durante apagones. Ideal para restaurantes, hoteles, almacenes, oficinas, fincas, y manufactura ligera.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>ROI 3-6 años</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Depreciación acelerada MACRS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Financiamiento PPA/Lease</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Por qué Solar Comercial en Puerto Rico
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4 leading-relaxed">
                  Los negocios en Puerto Rico enfrentan costos eléctricos desproporcionadamente altos comparados con el continente. Tarifas comerciales de LUMA Energy superan $0.35/kWh en horario pico, y los cargos por demanda penalizan operaciones intensivas. Los apagones frecuentes causan pérdida de inventario, downtime, y frustración de clientes.
                </p>
                <p className="mb-4 leading-relaxed">
                  Un sistema solar comercial bien diseñado elimina la mayoría de estos costos. Aprovecha techos grandes o terrenos comerciales (parking lots, áreas verdes) para generar electricidad justo donde se consume. Con net metering comercial, el exceso de producción genera créditos aplicables en horarios nocturnos o meses de baja producción.
                </p>
                <p className="leading-relaxed">
                  Kilowatt PR ofrece análisis de viabilidad sin costo: revisamos sus facturas de 12 meses, evaluamos su infraestructura eléctrica, y diseñamos sistema optimizado para su perfil de consumo. Manejamos permisos comerciales, coordinación con LUMA, y financiamiento PPA (Power Purchase Agreement) que permite $0 de inversión inicial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps />

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Beneficios Financieros para Negocios
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Crédito Federal 30%</h3>
                  <p className="text-muted-foreground">
                    El Investment Tax Credit (ITC) permite deducir 30% del costo total del sistema de sus impuestos federales, reduciendo dramáticamente la inversión neta.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Depreciación MACRS</h3>
                  <p className="text-muted-foreground">
                    Deprecie 85% del valor del sistema en 5 años usando Modified Accelerated Cost Recovery System, generando ahorro fiscal adicional significativo.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Flujo de Caja Positivo</h3>
                  <p className="text-muted-foreground">
                    Con financiamiento apropiado, el ahorro mensual en electricidad supera el pago del préstamo desde el primer mes, mejorando su bottom line inmediatamente.
                  </p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Ejemplo: Restaurante en Mayagüez</h3>
                <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
                  <div>
                    <p className="font-semibold mb-2">Antes de Solar:</p>
                    <ul className="space-y-2">
                      <li>• Factura mensual promedio: $1,800</li>
                      <li>• Costo anual: $21,600</li>
                      <li>• Pérdidas por apagones: $3,000/año</li>
                      <li>• Total: $24,600 anual</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Con Sistema Solar 25 kW + Batería:</p>
                    <ul className="space-y-2">
                      <li>• Factura mensual reducida: $180</li>
                      <li>• Ahorro anual: $19,440</li>
                      <li>• Pérdidas por apagones: $0</li>
                      <li>• ROI: 4.5 años | Ahorro 25 años: $486,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} />
        <CTASection 
          title="¿Listo para reducir costos operativos?"
          description="Solicite un análisis de viabilidad gratuito. Revisaremos sus facturas y diseñaremos un sistema que maximice su ROI."
          utmCampaign="instalacion-comercial" 
        />
        <LeadCaptureSection />
        <InternalLinks 
          title="Soluciones Relacionadas" 
          links={relatedServices}
          columns={2}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default InstalacionComercial;