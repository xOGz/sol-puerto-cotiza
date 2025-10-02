
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import InstalacionPanelesSolares from "./pages/InstalacionPanelesSolares";
import PeritoElectricista from "./pages/PeritoElectricista";
import EnergiaRenovable from "./pages/EnergiaRenovable";
import MantenimientoSolar from "./pages/MantenimientoSolar";
import Mayaguez from "./pages/Mayaguez";
import Aguadilla from "./pages/Aguadilla";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";

// City pages
import SanJuan from "./pages/SanJuan";
import Bayamon from "./pages/Bayamon";
import Carolina from "./pages/Carolina";
import Ponce from "./pages/Ponce";
import Caguas from "./pages/Caguas";
import Guaynabo from "./pages/Guaynabo";
import Arecibo from "./pages/Arecibo";
import ToaBaja from "./pages/ToaBaja";
import TrujilloAlto from "./pages/TrujilloAlto";
import Cayey from "./pages/Cayey";
import VegaBaja from "./pages/VegaBaja";
import Humacao from "./pages/Humacao";
import Fajardo from "./pages/Fajardo";
import Manati from "./pages/Manati";
import Dorado from "./pages/Dorado";
import Isabela from "./pages/Isabela";
import Yauco from "./pages/Yauco";
import Guayama from "./pages/Guayama";

// Hub pages
import Servicios from "./pages/Servicios";
import PuertoRico from "./pages/PuertoRico";
import MapaDelSitio from "./pages/MapaDelSitio";

// Service pages
import InstalacionComercial from "./pages/servicios/InstalacionComercial";
import InstalacionResidencial from "./pages/servicios/InstalacionResidencial";
import BateriasLFP from "./pages/servicios/BateriasLFP";
import BackupHibrido from "./pages/servicios/BackupHibrido";
import LimpiezaPlacas from "./pages/servicios/LimpiezaPlacas";
import ActualizacionAmpliacion from "./pages/servicios/ActualizacionAmpliacion";
import NetMeteringLuma from "./pages/servicios/NetMeteringLuma";
import SolarOffGrid from "./pages/servicios/SolarOffGrid";
import MicroinversoresEnphase from "./pages/servicios/MicroinversoresEnphase";
import PermisosFinanciamiento from "./pages/servicios/PermisosFinanciamiento";
import SolArkHibrido from "./pages/servicios/SolArkHibrido";
import EG4HibridoBoss18 from "./pages/servicios/EG4HibridoBoss18";
import TeslaPowerwall from "./pages/servicios/TeslaPowerwall";
import EVChargerConSolar from "./pages/servicios/EVChargerConSolar";
import EstructurasSueloUniRack from "./pages/servicios/EstructurasSueloUniRack";
import InspeccionSistema from "./pages/servicios/InspeccionSistema";
import ReparacionInversores from "./pages/servicios/ReparacionInversores";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/instalacion-paneles-solares" element={<InstalacionPanelesSolares />} />
        <Route path="/perito-electricista-puerto-rico" element={<PeritoElectricista />} />
        <Route path="/energia-renovable-puerto-rico" element={<EnergiaRenovable />} />
        <Route path="/mantenimiento-paneles-solares" element={<MantenimientoSolar />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        
        {/* Hub Pages */}
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/puerto-rico" element={<PuertoRico />} />
        <Route path="/mapa-del-sitio" element={<MapaDelSitio />} />
        
        {/* City Pages */}
        <Route path="/san-juan" element={<SanJuan />} />
        <Route path="/aguada" element={<Mayaguez />} />
        <Route path="/paneles-solares-san-juan" element={<SanJuan />} />
        <Route path="/bayamon" element={<Bayamon />} />
        <Route path="/paneles-solares-bayamon" element={<Bayamon />} />
        <Route path="/carolina" element={<Carolina />} />
        <Route path="/ponce" element={<Ponce />} />
        <Route path="/caguas" element={<Caguas />} />
        <Route path="/guaynabo" element={<Guaynabo />} />
        <Route path="/arecibo" element={<Arecibo />} />
        <Route path="/toa-baja" element={<ToaBaja />} />
        <Route path="/trujillo-alto" element={<TrujilloAlto />} />
        <Route path="/cayey" element={<Cayey />} />
        <Route path="/vega-baja" element={<VegaBaja />} />
        <Route path="/humacao" element={<Humacao />} />
        <Route path="/fajardo" element={<Fajardo />} />
        <Route path="/manati" element={<Manati />} />
        <Route path="/dorado" element={<Dorado />} />
        <Route path="/isabela" element={<Isabela />} />
        <Route path="/yauco" element={<Yauco />} />
        <Route path="/guayama" element={<Guayama />} />
        <Route path="/mayaguez" element={<Mayaguez />} />
        <Route path="/aguadilla" element={<Aguadilla />} />
        
        {/* Service Pages */}
        <Route path="/servicios/instalacion-placas-solares-comercial" element={<InstalacionComercial />} />
        <Route path="/servicios/instalacion-placas-solares-residencial" element={<InstalacionResidencial />} />
        <Route path="/servicios/baterias-almacenamiento-lfp" element={<BateriasLFP />} />
        <Route path="/servicios/backup-solar-hibrido" element={<BackupHibrido />} />
        <Route path="/servicios/limpieza-de-placas" element={<LimpiezaPlacas />} />
        <Route path="/servicios/actualizacion-ampliacion" element={<ActualizacionAmpliacion />} />
        <Route path="/servicios/net-metering-luma" element={<NetMeteringLuma />} />
        <Route path="/servicios/sistema-solar-off-grid" element={<SolarOffGrid />} />
        <Route path="/servicios/microinversores-enphase" element={<MicroinversoresEnphase />} />
        <Route path="/servicios/permisos-financiamiento" element={<PermisosFinanciamiento />} />
        <Route path="/servicios/solark-hibrido" element={<SolArkHibrido />} />
        <Route path="/servicios/eg4-hibrido-boss18" element={<EG4HibridoBoss18 />} />
        <Route path="/servicios/tesla-powerwall" element={<TeslaPowerwall />} />
        <Route path="/servicios/ev-charger-con-solar" element={<EVChargerConSolar />} />
        <Route path="/servicios/estructuras-suelo-unirac" element={<EstructurasSueloUniRack />} />
        <Route path="/servicios/inspeccion-sistema" element={<InspeccionSistema />} />
        <Route path="/servicios/reparacion-inversores" element={<ReparacionInversores />} />
        <Route path="/servicios/mantenimiento-solar" element={<MantenimientoSolar />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
