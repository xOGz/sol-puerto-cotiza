
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "17875550123";
  const message = "Hola, estoy interesado en obtener una cotización para placas solares. ¿Pueden ayudarme?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-float"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* WhatsApp Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:hidden">
          <div className="glass bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">¡Hablemos por WhatsApp!</h3>
                <p className="text-sm text-gray-600">Respuesta inmediata</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-4">
              ¿Tienes preguntas sobre placas solares? Nuestro equipo está listo para ayudarte.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-colors duration-300"
            >
              Chatear ahora
            </button>
            
            <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              En línea ahora
            </div>
          </div>
        </div>
      )}

      {/* Desktop WhatsApp Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 animate-float"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">WhatsApp</span>
        </button>
      </div>
    </>
  );
};

export default WhatsAppButton;
