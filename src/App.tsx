
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
        <Route path="/perito-electricista-mayaguez" element={<Mayaguez />} />
        <Route path="/paneles-solares-aguadilla" element={<Aguadilla />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
