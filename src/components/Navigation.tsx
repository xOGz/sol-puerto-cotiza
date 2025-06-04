
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#como-funciona", label: "Cómo Funciona" },
    { href: "#servicios", label: "Servicios" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#precios", label: "Precios" },
    { href: "#contacto", label: "Contacto" }
  ];

  const scrollToSection = (href: string) => {
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
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/35a5cb3f-1dc6-4637-a191-795956768438.png" 
                alt="Kilowatt PR Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">Kilowatt PR LLC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-kilowatt-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#cotizacion')}
                className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-secondary hover:to-kilowatt-primary text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 animate-glow"
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
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6 pt-20">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('#cotizacion')}
                  className="w-full bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary hover:from-kilowatt-secondary hover:to-kilowatt-primary text-white py-3 rounded-full font-medium"
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
