import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Instalación Residencial",
      description: "Sistemas solares completos para tu hogar con garantía 25 años",
      href: "/servicios/instalacion-placas-solares-residencial"
    },
    {
      title: "Instalación Comercial",
      description: "Soluciones escalables para negocios e industrias",
      href: "/servicios/instalacion-placas-solares-comercial"
    },
    {
      title: "Baterías LFP",
      description: "Almacenamiento de energía para respaldo durante apagones",
      href: "/servicios/baterias-almacenamiento-lfp"
    },
    {
      title: "Backup Solar Híbrido",
      description: "Combina solar, batería y red para máxima confiabilidad",
      href: "/servicios/backup-solar-hibrido"
    },
    {
      title: "Mantenimiento Solar",
      description: "Servicio preventivo y correctivo para máximo rendimiento",
      href: "/servicios/mantenimiento-solar"
    },
    {
      title: "Limpieza de Placas",
      description: "Recupera hasta 25% de producción perdida",
      href: "/servicios/limpieza-de-placas"
    },
    {
      title: "EG4 Híbrido Boss18",
      description: "El inversor más potente del mercado residencial",
      href: "/servicios/eg4-hibrido-boss18"
    },
    {
      title: "Microinversores Enphase",
      description: "Tecnología avanzada de microinversión",
      href: "/servicios/microinversores-enphase"
    },
    {
      title: "Sistema Off-Grid",
      description: "Independencia total de la red eléctrica",
      href: "/servicios/sistema-solar-off-grid"
    },
    {
      title: "Tesla Powerwall",
      description: "Batería premium de Tesla para tu hogar",
      href: "/servicios/tesla-powerwall"
    },
    {
      title: "Net Metering LUMA",
      description: "Tramitación completa de permisos y conexión",
      href: "/servicios/net-metering-luma"
    },
    {
      title: "Permisos y Financiamiento",
      description: "Gestión completa de documentación y opciones de pago",
      href: "/servicios/permisos-financiamiento"
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Servicios Especializados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones solares completas para cada necesidad energética en Puerto Rico
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:border-kilowatt-primary transition-all group"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-kilowatt-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-kilowatt-primary font-semibold group-hover:gap-2 transition-all">
                Cotización GRATIS
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
