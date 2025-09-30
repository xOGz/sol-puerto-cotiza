
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import kilowattLogo from "@/assets/kilowatt-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src={kilowattLogo} 
                alt="Kilowatt PR Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">Kilowatt PR</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              La empresa líder en instalación de placas solares en Puerto Rico. 
              Hacemos la energía solar accesible para todas las familias puertorriqueñas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/kilowattprllc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-kilowatt-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-kilowatt-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-kilowatt-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instalación residencial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sistemas con batería</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Monitoreo solar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mantenimiento</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de servicio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-kilowatt-primary" />
                <span className="text-gray-400">(787) 431-2275</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-kilowatt-primary" />
                <span className="text-gray-400">kilowattpr@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-kilowatt-primary mt-1" />
                <span className="text-gray-400">
                  HC 3 Box 31767<br />
                  Aguada, PR 00602
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kilowatt PR LLC. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-xs text-gray-500">Licencia ECI #12345</span>
              <span className="text-xs text-gray-500">Certificado LUMA</span>
              <span className="text-xs text-gray-500">NEC Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
