import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import kilowattLogo from "@/assets/kilowatt-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToQuote = () => {
    scrollToSection('#cotizacion');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={kilowattLogo} 
                alt="Kilowatt PR LLC Logo - Placas Solares Puerto Rico" 
                className="w-14 h-14 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">KILOWATT PR LLC</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-kilowatt-primary font-medium bg-transparent">
                      Servicios
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg">
                      <ul className="grid w-[400px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/instalacion-placas-solares-residencial" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100">
                              <div className="text-sm font-medium leading-none">Instalación residencial</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Sistemas solares para hogares
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/baterias-almacenamiento-lfp" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100">
                              <div className="text-sm font-medium leading-none">Baterías LFP / backup</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Almacenamiento de energía
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/mantenimiento-solar" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100">
                              <div className="text-sm font-medium leading-none">Mantenimiento</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Servicio y optimización
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/limpieza-de-placas" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100">
                              <div className="text-sm font-medium leading-none">Limpieza de placas</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Maximiza tu producción
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/net-metering-luma" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100">
                              <div className="text-sm font-medium leading-none">Net Metering LUMA</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Trámites y permisos
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/eg4-hibrido-boss18" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100">
                              <div className="text-sm font-medium leading-none">Inversor híbrido EG4/Enphase</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Tecnología de punta
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-t border-gray-200 pt-2">
                          <NavigationMenuLink asChild>
                            <Link to="/servicios" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-kilowatt-primary/10 text-kilowatt-primary font-medium">
                              Ver todos los servicios →
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-kilowatt-primary font-medium bg-transparent">
                      Áreas que servimos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg">
                      <ul className="grid w-[300px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/aguada" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-sm">
                              Aguada
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/aguadilla" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-sm">
                              Aguadilla
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/isabela" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-sm">
                              Isabela
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/mayaguez" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-sm">
                              Mayagüez
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/san-juan" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-sm">
                              San Juan
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/bayamon" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-sm">
                              Bayamón
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/carolina" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-sm">
                              Carolina
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/ponce" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 text-sm">
                              Ponce
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-t border-gray-200 pt-2">
                          <NavigationMenuLink asChild>
                            <Link to="/puerto-rico" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-kilowatt-primary/10 text-kilowatt-primary font-medium text-sm">
                              Ver todas las ciudades →
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <button
                onClick={() => scrollToSection('#testimonios')}
                className="text-gray-700 hover:text-kilowatt-primary transition-colors font-medium"
              >
                Testimonios
              </button>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-kilowatt-primary transition-colors font-medium"
              >
                Blog Solar
              </Link>
              <Link
                to="/preguntas-frecuentes"
                className="text-gray-700 hover:text-kilowatt-primary transition-colors font-medium"
              >
                FAQ
              </Link>
              <a
                href="tel:+17874312275"
                className="text-gray-700 hover:text-kilowatt-primary transition-colors font-medium"
              >
                (787) 431-2275
              </a>
              <Button 
                onClick={scrollToQuote}
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Cotización Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="p-6 pt-20">
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors cursor-pointer">
                    Servicios
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/servicios/instalacion-placas-solares-residencial" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      Instalación residencial
                    </Link>
                    <Link to="/servicios/baterias-almacenamiento-lfp" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      Baterías LFP / backup
                    </Link>
                    <Link to="/servicios/mantenimiento-solar" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      Mantenimiento
                    </Link>
                    <Link to="/servicios/limpieza-de-placas" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      Limpieza de placas
                    </Link>
                    <Link to="/servicios/net-metering-luma" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      Net Metering LUMA
                    </Link>
                    <Link to="/servicios/eg4-hibrido-boss18" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      Inversor híbrido EG4/Enphase
                    </Link>
                    <Link to="/servicios" className="block py-2 text-kilowatt-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                      Ver todos los servicios →
                    </Link>
                  </div>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors cursor-pointer">
                    Áreas que servimos
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/aguada" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>Aguada</Link>
                    <Link to="/aguadilla" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>Aguadilla</Link>
                    <Link to="/isabela" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>Isabela</Link>
                    <Link to="/mayaguez" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>Mayagüez</Link>
                    <Link to="/san-juan" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>San Juan</Link>
                    <Link to="/bayamon" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>Bayamón</Link>
                    <Link to="/carolina" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>Carolina</Link>
                    <Link to="/ponce" className="block py-2 text-gray-600 hover:text-kilowatt-primary" onClick={() => setIsMobileMenuOpen(false)}>Ponce</Link>
                    <Link to="/puerto-rico" className="block py-2 text-kilowatt-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                      Ver todas las ciudades →
                    </Link>
                  </div>
                </details>

                <button
                  onClick={() => scrollToSection('#testimonios')}
                  className="block w-full text-left py-3 text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors"
                >
                  Testimonios
                </button>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-3 text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors"
                >
                  Blog Solar
                </Link>
                <Link
                  to="/preguntas-frecuentes"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-3 text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
                <a
                  href="tel:+17874312275"
                  className="block w-full text-left py-3 text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors"
                >
                  Llamar: (787) 431-2275
                </a>
                <Button 
                  onClick={scrollToQuote}
                  className="w-full bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-primary/90 hover:to-kilowatt-secondary/90 text-white py-3 rounded-full font-bold"
                >
                  Cotización Gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
