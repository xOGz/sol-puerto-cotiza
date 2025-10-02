import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const MapaDelSitio = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Mapa del Sitio | Kilowatt PR"
        description="Encuentra todas las páginas de nuestro sitio web de forma organizada."
        canonicalPath="/mapa-del-sitio"
      />
      <Navigation />
      
      <main className="section-spacing bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Mapa del Sitio</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Páginas principales */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Páginas Principales</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/" className="hover:text-kilowatt-primary">Inicio</Link></li>
                  <li><Link to="/about" className="hover:text-kilowatt-primary">Sobre Nosotros</Link></li>
                  <li><Link to="/blog" className="hover:text-kilowatt-primary">Blog</Link></li>
                  <li><Link to="/preguntas-frecuentes" className="hover:text-kilowatt-primary">Preguntas Frecuentes</Link></li>
                  <li><Link to="/contact" className="hover:text-kilowatt-primary">Contacto</Link></li>
                </ul>
              </div>

              {/* Servicios */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Servicios</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/servicios" className="hover:text-kilowatt-primary font-medium">Ver Todos los Servicios</Link></li>
                  <li><Link to="/servicios/instalacion-placas-solares-residencial" className="hover:text-kilowatt-primary">Instalación Residencial</Link></li>
                  <li><Link to="/servicios/instalacion-placas-solares-comercial" className="hover:text-kilowatt-primary">Instalación Comercial</Link></li>
                  <li><Link to="/servicios/baterias-almacenamiento-lfp" className="hover:text-kilowatt-primary">Baterías LFP</Link></li>
                  <li><Link to="/servicios/backup-solar-hibrido" className="hover:text-kilowatt-primary">Backup Solar Híbrido</Link></li>
                  <li><Link to="/servicios/mantenimiento-solar" className="hover:text-kilowatt-primary">Mantenimiento Solar</Link></li>
                  <li><Link to="/servicios/limpieza-de-placas" className="hover:text-kilowatt-primary">Limpieza de Placas</Link></li>
                  <li><Link to="/servicios/eg4-hibrido-boss18" className="hover:text-kilowatt-primary">EG4 Híbrido Boss18</Link></li>
                  <li><Link to="/servicios/microinversores-enphase" className="hover:text-kilowatt-primary">Microinversores Enphase</Link></li>
                  <li><Link to="/servicios/sistema-solar-off-grid" className="hover:text-kilowatt-primary">Sistema Solar Off-Grid</Link></li>
                  <li><Link to="/servicios/tesla-powerwall" className="hover:text-kilowatt-primary">Tesla Powerwall</Link></li>
                  <li><Link to="/servicios/net-metering-luma" className="hover:text-kilowatt-primary">Net Metering LUMA</Link></li>
                  <li><Link to="/servicios/permisos-financiamiento" className="hover:text-kilowatt-primary">Permisos y Financiamiento</Link></li>
                  <li><Link to="/servicios/inspeccion-sistema" className="hover:text-kilowatt-primary">Inspección de Sistema</Link></li>
                  <li><Link to="/servicios/reparacion-inversores" className="hover:text-kilowatt-primary">Reparación de Inversores</Link></li>
                  <li><Link to="/servicios/actualizacion-ampliacion" className="hover:text-kilowatt-primary">Actualización y Ampliación</Link></li>
                  <li><Link to="/servicios/estructuras-suelo-unirac" className="hover:text-kilowatt-primary">Estructuras de Suelo UniRack</Link></li>
                  <li><Link to="/servicios/ev-charger-con-solar" className="hover:text-kilowatt-primary">Cargadores EV con Solar</Link></li>
                  <li><Link to="/servicios/solark-hibrido" className="hover:text-kilowatt-primary">SolArk Híbrido</Link></li>
                </ul>
              </div>

              {/* Ciudades */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Áreas que Servimos</h2>
                <Link to="/puerto-rico" className="text-kilowatt-primary font-medium hover:underline mb-4 block">Ver Todas las Ciudades</Link>
                <div className="grid md:grid-cols-3 gap-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li><Link to="/aguada" className="hover:text-kilowatt-primary">Aguada</Link></li>
                    <li><Link to="/aguadilla" className="hover:text-kilowatt-primary">Aguadilla</Link></li>
                    <li><Link to="/arecibo" className="hover:text-kilowatt-primary">Arecibo</Link></li>
                    <li><Link to="/bayamon" className="hover:text-kilowatt-primary">Bayamón</Link></li>
                    <li><Link to="/caguas" className="hover:text-kilowatt-primary">Caguas</Link></li>
                    <li><Link to="/carolina" className="hover:text-kilowatt-primary">Carolina</Link></li>
                    <li><Link to="/cayey" className="hover:text-kilowatt-primary">Cayey</Link></li>
                  </ul>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><Link to="/dorado" className="hover:text-kilowatt-primary">Dorado</Link></li>
                    <li><Link to="/fajardo" className="hover:text-kilowatt-primary">Fajardo</Link></li>
                    <li><Link to="/guayama" className="hover:text-kilowatt-primary">Guayama</Link></li>
                    <li><Link to="/guaynabo" className="hover:text-kilowatt-primary">Guaynabo</Link></li>
                    <li><Link to="/humacao" className="hover:text-kilowatt-primary">Humacao</Link></li>
                    <li><Link to="/isabela" className="hover:text-kilowatt-primary">Isabela</Link></li>
                    <li><Link to="/manati" className="hover:text-kilowatt-primary">Manatí</Link></li>
                  </ul>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><Link to="/mayaguez" className="hover:text-kilowatt-primary">Mayagüez</Link></li>
                    <li><Link to="/ponce" className="hover:text-kilowatt-primary">Ponce</Link></li>
                    <li><Link to="/san-juan" className="hover:text-kilowatt-primary">San Juan</Link></li>
                    <li><Link to="/toa-baja" className="hover:text-kilowatt-primary">Toa Baja</Link></li>
                    <li><Link to="/trujillo-alto" className="hover:text-kilowatt-primary">Trujillo Alto</Link></li>
                    <li><Link to="/vega-baja" className="hover:text-kilowatt-primary">Vega Baja</Link></li>
                    <li><Link to="/yauco" className="hover:text-kilowatt-primary">Yauco</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MapaDelSitio;
