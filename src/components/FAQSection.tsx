import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto puedo ahorrar con placas solares?",
      answer: "Nuestros clientes pagan hasta $4 en su factura eléctrica después de instalar paneles solares. El ahorro exacto depende de tu consumo actual, el tamaño del sistema y si incluyes batería de respaldo. Una familia que paga $200 mensuales puede reducir su factura a solo $4-20 al mes."
    },
    {
      question: "¿Necesito permiso de LUMA Energy?",
      answer: "Sí, cualquier sistema solar conectado a la red eléctrica requiere permisos de LUMA Energy. Nosotros nos encargamos de todo el proceso de permisos, incluyendo la interconexión y el acuerdo de medición neta. No tienes que preocuparte por ningún trámite."
    },
    {
      question: "¿Cuál es la garantía de los paneles solares?",
      answer: "Ofrecemos 25 años de garantía en los paneles solares y 10 años en inversores. También incluimos 30 días de garantía en mano de obra y instalación. Los paneles solares están diseñados para durar más de 30 años con mínima degradación."
    },
    {
      question: "¿Funcionan los paneles en días nublados?",
      answer: "Sí, los paneles solares siguen generando energía en días nublados, aunque a menor capacidad (aproximadamente 20-40% de su producción normal). Puerto Rico tiene excelente irradiación solar todo el año, garantizando una producción consistente."
    },
    {
      question: "¿Qué pasa durante un apagón?",
      answer: "Si tienes sistema con batería, tendrás electricidad durante apagones. Los sistemas sin batería se desconectan automáticamente por seguridad cuando hay apagones, pero vuelven a funcionar cuando se restaura la electricidad de LUMA."
    },
    {
      question: "¿Cuánto tiempo toma la instalación?",
      answer: "El proceso completo toma 4-6 semanas desde la evaluación inicial hasta que el sistema está funcionando. La instalación física en tu techo toma 1-2 días, pero los permisos y conexiones con LUMA pueden tomar varias semanas."
    },
    {
      question: "¿Necesito mantenimiento de los paneles?",
      answer: "Los paneles solares requieren muy poco mantenimiento. Recomendamos limpiarlos 2-3 veces al año y una inspección anual. Ofrecemos planes de mantenimiento opcionales y monitoreo remoto para asegurar que tu sistema funcione óptimamente."
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre energía solar en Puerto Rico
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass border-0 rounded-2xl px-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-solar-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestros expertos están listos para resolver cualquier duda específica sobre tu proyecto solar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+17875550123" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-solar-500 to-solar-600 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300"
              >
                Llamar ahora
              </a>
              <a 
                href="https://wa.me/17875550123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
