
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import kilowattLogo from "@/assets/kilowatt-logo.png";

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
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6 pt-20">
              <div className="space-y-6">
                <button
                  onClick={() => scrollToSection('#testimonios')}
                  className="block w-full text-left text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors"
                >
                  Testimonios
                </button>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors"
                >
                  Blog Solar
                </Link>
                <Link
                  to="/preguntas-frecuentes"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
                <a
                  href="tel:+17874312275"
                  className="block w-full text-left text-lg font-medium text-gray-700 hover:text-kilowatt-primary transition-colors"
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
