
import { ClipboardCheck, PenTool, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Solicita tu inspección gratis",
      description: "Nuestros expertos evalúan tu techo y consumo eléctrico para diseñar el sistema perfecto para tu hogar.",
      step: "01"
    },
    {
      icon: PenTool,
      title: "Diseñamos tu sistema ideal",
      description: "Creamos un diseño personalizado que maximiza tu ahorro y se adapta perfectamente a tu techo y necesidades.",
      step: "02"
    },
    {
      icon: Zap,
      title: "Instalamos y conectamos con LUMA",
      description: "Nuestro equipo certificado instala tu sistema y maneja todos los permisos y conexiones con LUMA Energy.",
      step: "03"
    }
  ];

  return (
    <section id="como-funciona" className="section-spacing bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo funciona nuestro proceso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En solo 3 pasos simples, tu hogar estará generando energía solar limpia y ahorrando dinero
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-solar-300 to-solar-400 transform translate-x-4 z-0" />
              )}
              
              {/* Card */}
              <div className="relative glass p-8 rounded-3xl text-center hover:scale-105 transition-all duration-300 group">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-solar-500 to-solar-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-solar-100 to-solar-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-solar-600" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para comenzar tu transformación solar?
            </h3>
            <p className="text-gray-600 mb-6">
              El proceso completo toma entre 4-6 semanas desde la inspección hasta que empiezas a generar tu propia energía.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Sin costos ocultos</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Garantía completa</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">Instalación profesional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
