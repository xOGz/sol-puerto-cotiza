import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Servicios = () => {
  const services = [
    {
      title: "Instalación Residencial",
      description: "Sistemas solares completos para hogares en Puerto Rico con garantía y financiamiento.",
      href: "/servicios/instalacion-placas-solares-residencial"
    },
    {
      title: "Instalación Comercial",
      description: "Soluciones solares escalables para negocios, industrias y organizaciones.",
      href: "/servicios/instalacion-placas-solares-comercial"
    },
    {
      title: "Baterías de Almacenamiento LFP",
      description: "Baterías de fosfato de litio hierro (LFP) para respaldo durante apagones.",
      href: "/servicios/baterias-almacenamiento-lfp"
    },
    {
      title: "Backup Solar Híbrido",
      description: "Sistemas híbridos que combinan solar, batería y red eléctrica.",
      href: "/servicios/backup-solar-hibrido"
    },
    {
      title: "Mantenimiento de Sistemas Solares",
      description: "Servicio preventivo y correctivo para maximizar rendimiento.",
      href: "/servicios/mantenimiento-solar"
    },
    {
      title: "Limpieza de Placas Solares",
      description: "Limpieza profesional que restaura hasta 25% de producción perdida.",
      href: "/servicios/limpieza-de-placas"
    },
    {
      title: "Inversor Híbrido EG4 18kPV Boss",
      description: "El inversor híbrido más potente del mercado residencial.",
      href: "/servicios/eg4-hibrido-boss18"
    },
    {
      title: "Microinversores Enphase",
      description: "Tecnología avanzada de microinversión para máxima eficiencia.",
      href: "/servicios/microinversores-enphase"
    },
    {
      title: "Sistema Solar Off-Grid",
      description: "Independencia total de la red eléctrica con sistemas autónomos.",
      href: "/servicios/sistema-solar-off-grid"
    },
    {
      title: "Tesla Powerwall",
      description: "Batería premium de Tesla para respaldo y optimización energética.",
      href: "/servicios/tesla-powerwall"
    },
    {
      title: "Net Metering con LUMA Energy",
      description: "Tramitación completa de permisos y conexión a red de LUMA.",
      href: "/servicios/net-metering-luma"
    },
    {
      title: "Permisos y Financiamiento Solar",
      description: "Gestión de permisos municipales, LUMA y opciones de financiamiento.",
      href: "/servicios/permisos-financiamiento"
    },
    {
      title: "Inspección de Sistemas Existentes",
      description: "Auditoría técnica completa de tu sistema solar actual.",
      href: "/servicios/inspeccion-sistema"
    },
    {
      title: "Reparación de Inversores",
      description: "Diagnóstico y reparación de inversores solares de todas las marcas.",
      href: "/servicios/reparacion-inversores"
    },
    {
      title: "Actualización y Ampliación",
      description: "Expande tu sistema solar existente con más capacidad o baterías.",
      href: "/servicios/actualizacion-ampliacion"
    },
    {
      title: "Estructuras de Suelo UniRack",
      description: "Montajes en terreno con estructuras certificadas UniRack.",
      href: "/servicios/estructuras-suelo-unirac"
    },
    {
      title: "Cargadores EV con Solar",
      description: "Integración de estaciones de carga para vehículos eléctricos.",
      href: "/servicios/ev-charger-con-solar"
    },
    {
      title: "Inversor Híbrido SolArk",
      description: "Sistema híbrido modular de grado industrial SolArk.",
      href: "/servicios/solark-hibrido"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://kilowattpr.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servicios",
            "item": "https://kilowattpr.com/servicios"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Servicios de Energía Solar en Puerto Rico | Kilowatt PR"
        description="Instalación, mantenimiento, baterías y sistemas solares completos en Puerto Rico. Desde residencial hasta comercial. Consultoría gratis."
        canonicalPath="/servicios"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      
      <main>
        <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Servicios de Energía Solar en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Kilowatt PR ofrece soluciones solares completas para hogares y negocios en toda la isla. Desde la instalación inicial hasta el mantenimiento continuo, nuestros servicios están diseñados para maximizar tu inversión y garantizar energía confiable durante décadas. Con más de 500 instalaciones exitosas y equipo certificado NEC, transformamos tu factura de luz en ahorro mensual inmediato.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Garantía 25 años</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Financiamiento disponible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-kilowatt-primary" />
                  <span>Consultoría gratuita</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-bold mb-3 text-foreground">{service.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-kilowatt-primary font-semibold hover:underline"
                  >
                    Cotización GRATIS →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;
