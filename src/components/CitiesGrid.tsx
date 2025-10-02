import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const CitiesGrid = () => {
  const cities = [
    { name: "Aguada", href: "/aguada" },
    { name: "Aguadilla", href: "/aguadilla" },
    { name: "Isabela", href: "/isabela" },
    { name: "Mayagüez", href: "/mayaguez" },
    { name: "San Juan", href: "/san-juan" },
    { name: "Bayamón", href: "/bayamon" },
    { name: "Carolina", href: "/carolina" },
    { name: "Guaynabo", href: "/guaynabo" },
    { name: "Caguas", href: "/caguas" },
    { name: "Ponce", href: "/ponce" },
    { name: "Arecibo", href: "/arecibo" },
    { name: "Toa Baja", href: "/toa-baja" }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Áreas que Servimos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instalación profesional de paneles solares en toda la isla de Puerto Rico
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cities.map((city, index) => (
            <Link
              key={index}
              to={city.href}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:border-kilowatt-primary transition-all text-center group"
            >
              <MapPin className="h-8 w-8 text-kilowatt-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground group-hover:text-kilowatt-primary transition-colors">
                {city.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 group-hover:text-kilowatt-primary transition-colors">
                Ver servicios →
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/puerto-rico"
            className="inline-block bg-kilowatt-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-kilowatt-primary/90 transition-colors"
          >
            Ver Todas las Ciudades
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CitiesGrid;
