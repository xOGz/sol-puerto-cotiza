import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl' 
          : 'bg-white/80 backdrop-blur-sm'
      }`} style={{ height: '72px' }}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={kilowattLogo} 
                alt="Kilowatt PR LLC Logo - Placas Solares Puerto Rico" 
                className="w-14 h-14 object-contain"
              />
              <span className="font-manrope text-xl font-extrabold text-gray-900 whitespace-nowrap tracking-[0.2px]">
                KILOWATT PR LLC
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-manrope text-base font-semibold text-gray-700 hover:text-kilowatt-primary bg-transparent tracking-[0.2px] leading-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kilowatt-primary">
                      Servicios
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg">
                      <ul className="grid w-[400px] gap-3 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/instalacion-placas-solares-residencial" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              <div className="font-manrope text-sm font-semibold leading-none">Instalación Residencial</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Sistemas solares para hogares
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/baterias-almacenamiento-lfp" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              <div className="font-manrope text-sm font-semibold leading-none">Baterías LFP / Backup</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Almacenamiento de energía
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/mantenimiento-solar" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              <div className="font-manrope text-sm font-semibold leading-none">Mantenimiento</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Servicio y optimización
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/limpieza-de-placas" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              <div className="font-manrope text-sm font-semibold leading-none">Limpieza de Placas</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Maximiza tu producción
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/net-metering-luma" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              <div className="font-manrope text-sm font-semibold leading-none">Net Metering LUMA</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Trámites y permisos
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/servicios/eg4-hibrido-boss18" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              <div className="font-manrope text-sm font-semibold leading-none">Inversor Híbrido EG4/Enphase</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                Tecnología de punta
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-t border-gray-200 pt-2">
                          <NavigationMenuLink asChild>
                            <Link to="/servicios" className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-kilowatt-primary/10 text-kilowatt-primary font-manrope font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              Ver Todos los Servicios →
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-manrope text-base font-semibold text-gray-700 hover:text-kilowatt-primary bg-transparent tracking-[0.2px] leading-tight whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kilowatt-primary">
                      Áreas que Servimos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg">
                      <ul className="grid w-[300px] gap-2 p-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/aguada" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 font-manrope text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              Aguada
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/aguadilla" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 font-manrope text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              Aguadilla
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/isabela" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 font-manrope text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              Isabela
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/mayaguez" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 font-manrope text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              Mayagüez
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/san-juan" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 font-manrope text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              San Juan
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/bayamon" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 font-manrope text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              Bayamón
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/carolina" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 font-manrope text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              Carolina
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link to="/ponce" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 font-manrope text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              Ponce
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-t border-gray-200 pt-2">
                          <NavigationMenuLink asChild>
                            <Link to="/puerto-rico" className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-kilowatt-primary/10 text-kilowatt-primary font-manrope font-semibold text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-kilowatt-primary">
                              Ver Todas las Ciudades →
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
                className="font-manrope text-base font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors tracking-[0.2px] leading-tight whitespace-nowrap underline-offset-[6px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kilowatt-primary"
              >
                Testimonios
              </button>
              <Link
                to="/blog"
                className="font-manrope text-base font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors tracking-[0.2px] leading-tight whitespace-nowrap underline-offset-[6px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kilowatt-primary"
              >
                Blog
              </Link>
              <Link
                to="/preguntas-frecuentes"
                className="font-manrope text-base font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors tracking-[0.2px] leading-tight whitespace-nowrap underline-offset-[6px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kilowatt-primary"
              >
                FAQ
              </Link>
              <a
                href="tel:+17874312275"
                className="font-manrope text-base font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors tracking-[0.2px] leading-tight whitespace-nowrap underline-offset-[6px] hover:underline flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kilowatt-primary"
              >
                <Phone className="h-4 w-4" />
                (787) 431-2275
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menú de navegación"
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
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="p-6 pt-20">
              <div className="space-y-4">
                {/* Phone at the top */}
                <a
                  href="tel:+17874312275"
                  className="font-manrope flex items-center gap-3 py-3 text-lg font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors border-b border-gray-200"
                >
                  <Phone className="h-5 w-5" />
                  (787) 431-2275
                </a>

                <details className="group">
                  <summary className="font-manrope flex items-center justify-between py-3 text-lg font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors cursor-pointer tracking-[0.2px]">
                    Servicios
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/servicios/instalacion-placas-solares-residencial" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                      Instalación Residencial
                    </Link>
                    <Link to="/servicios/baterias-almacenamiento-lfp" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                      Baterías LFP / Backup
                    </Link>
                    <Link to="/servicios/mantenimiento-solar" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                      Mantenimiento
                    </Link>
                    <Link to="/servicios/limpieza-de-placas" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                      Limpieza de Placas
                    </Link>
                    <Link to="/servicios/net-metering-luma" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                      Net Metering LUMA
                    </Link>
                    <Link to="/servicios/eg4-hibrido-boss18" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                      Inversor Híbrido EG4/Enphase
                    </Link>
                    <Link to="/servicios" className="font-manrope block py-2 text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                      Ver Todos los Servicios →
                    </Link>
                  </div>
                </details>

                <details className="group">
                  <summary className="font-manrope flex items-center justify-between py-3 text-lg font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors cursor-pointer tracking-[0.2px] whitespace-nowrap">
                    Áreas que Servimos
                    <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/aguada" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Aguada</Link>
                    <Link to="/aguadilla" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Aguadilla</Link>
                    <Link to="/isabela" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Isabela</Link>
                    <Link to="/mayaguez" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Mayagüez</Link>
                    <Link to="/san-juan" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>San Juan</Link>
                    <Link to="/bayamon" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Bayamón</Link>
                    <Link to="/carolina" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Carolina</Link>
                    <Link to="/ponce" className="font-manrope block py-2 text-gray-600 hover:text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Ponce</Link>
                    <Link to="/puerto-rico" className="font-manrope block py-2 text-kilowatt-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                      Ver Todas las Ciudades →
                    </Link>
                  </div>
                </details>

                <button
                  onClick={() => scrollToSection('#testimonios')}
                  className="font-manrope block w-full text-left py-3 text-lg font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors tracking-[0.2px]"
                >
                  Testimonios
                </button>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-manrope block w-full text-left py-3 text-lg font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors tracking-[0.2px] whitespace-nowrap"
                >
                  Blog
                </Link>
                <Link
                  to="/preguntas-frecuentes"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-manrope block w-full text-left py-3 text-lg font-semibold text-gray-700 hover:text-kilowatt-primary transition-colors tracking-[0.2px]"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
