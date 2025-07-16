
import { Shield, Smartphone, Clock, Wrench } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: Shield,
      title: "Garantía de 25 años",
      description: "Protección completa en equipos y mano de obra por un cuarto de siglo",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Monitoreo desde tu celular",
      description: "Ve tu producción de energía en tiempo real desde cualquier lugar",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Instalación rápida",
      description: "Proceso completo en 4-6 semanas, sin interrumpir tu rutina diaria",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Wrench,
      title: "Mantenimiento",
      description: "Servicio técnico especializado para mantener tu sistema funcionando óptimamente",
      color: "from-solar-500 to-solar-600"
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Kilowatt PR?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos la mejor experiencia en energía solar con beneficios que te acompañarán por décadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass p-8 rounded-3xl text-center h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center glass p-6 rounded-2xl animate-fade-in-up">
            <div className="text-3xl font-bold text-solar-500 mb-2">10+</div>
            <div className="text-gray-600">Años de experiencia</div>
          </div>
          <div className="text-center glass p-6 rounded-2xl animate-fade-in-up">
            <div className="text-3xl font-bold text-solar-500 mb-2">500+</div>
            <div className="text-gray-600">Instalaciones completadas</div>
          </div>
          <div className="text-center glass p-6 rounded-2xl animate-fade-in-up">
            <div className="text-3xl font-bold text-solar-500 mb-2">3-5</div>
            <div className="text-gray-600">Años para ROI completo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
