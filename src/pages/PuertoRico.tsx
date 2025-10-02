import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const PuertoRico = () => {
  const cities = [
    { name: "Aguada", href: "/aguada" },
    { name: "Aguadilla", href: "/aguadilla" },
    { name: "Arecibo", href: "/arecibo" },
    { name: "Bayamón", href: "/bayamon" },
    { name: "Caguas", href: "/caguas" },
    { name: "Carolina", href: "/carolina" },
    { name: "Cayey", href: "/cayey" },
    { name: "Dorado", href: "/dorado" },
    { name: "Fajardo", href: "/fajardo" },
    { name: "Guayama", href: "/guayama" },
    { name: "Guaynabo", href: "/guaynabo" },
    { name: "Humacao", href: "/humacao" },
    { name: "Isabela", href: "/isabela" },
    { name: "Manatí", href: "/manati" },
    { name: "Mayagüez", href: "/mayaguez" },
    { name: "Ponce", href: "/ponce" },
    { name: "San Juan", href: "/san-juan" },
    { name: "Toa Baja", href: "/toa-baja" },
    { name: "Trujillo Alto", href: "/trujillo-alto" },
    { name: "Vega Baja", href: "/vega-baja" },
    { name: "Yauco", href: "/yauco" }
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
            "name": "Áreas que Servimos",
            "item": "https://kilowattpr.com/puerto-rico"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Instalación de Placas Solares en Puerto Rico | Todas las Ciudades"
        description="Servicio de instalación de paneles solares en toda la isla. Cobertura en San Juan, Bayamón, Ponce, Caguas, Mayagüez y más. Consultoría gratis."
        canonicalPath="/puerto-rico"
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-kilowatt-primary/10 mb-6">
                <MapPin className="h-8 w-8 text-kilowatt-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Instalación de Placas Solares en Puerto Rico
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Kilowatt PR brinda servicio de instalación de sistemas solares en toda la isla de Puerto Rico. Nuestro equipo certificado viaja a tu municipio para realizar evaluación gratuita del sitio, diseño personalizado del sistema, instalación profesional y tramitación completa de permisos con LUMA Energy. Desde la costa oeste hasta el este, desde el área metropolitana hasta las montañas, garantizamos el mismo estándar de calidad, respuesta rápida y soporte continuo en todas las comunidades que servimos.
              </p>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Ciudades donde Instalamos Paneles Solares</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {cities.map((city, index) => (
                <Link 
                  key={index}
                  to={city.href}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-kilowatt-primary transition-all text-center group"
                >
                  <MapPin className="h-6 w-6 text-kilowatt-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-foreground group-hover:text-kilowatt-primary transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">Ver detalles →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Tu municipio no aparece?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Aunque hemos destacado nuestras áreas de mayor cobertura, también brindamos servicio en municipios adicionales. Contáctanos para verificar disponibilidad en tu zona.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-kilowatt-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-kilowatt-primary/90 transition-colors"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PuertoRico;
