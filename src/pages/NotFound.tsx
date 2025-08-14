import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEO 
        title="Página no encontrada | Kilowatt PR"
        description="La página que buscas no existe. Regresa al inicio de Kilowatt PR."
        canonicalPath={typeof window !== 'undefined' ? window.location.pathname : '/404'}
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Página No Encontrada - Error 404</h1>
        <p className="text-xl text-gray-600 mb-8">Lo sentimos, la página que buscas no existe en nuestro sitio de placas solares en Puerto Rico.</p>
        <p className="text-lg text-gray-600 mb-4">Esta página puede haber sido movida, eliminada o la URL puede estar incorrecta. Te invitamos a:</p>
        <ul className="text-left text-gray-600 mb-8 space-y-2">
          <li>• Regresar a nuestro <a href="/" className="text-green-600 hover:text-green-700 underline">inicio</a> para ver nuestros servicios de energía solar</li>
          <li>• Visitar nuestro <a href="/blog" className="text-green-600 hover:text-green-700 underline">blog</a> con artículos sobre placas solares</li>
          <li>• <a href="/contact" className="text-green-600 hover:text-green-700 underline">Contactarnos</a> para una cotización gratuita</li>
        </ul>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
