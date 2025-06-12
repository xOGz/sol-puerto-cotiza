
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cómo funciona el financiamiento?",
      answer: "Ofrecemos financiamiento desde 0% de pronto y hasta 25 años para pagar. En muchos casos, el pago mensual del préstamo es menor a lo que pagas actualmente de luz. Trabajamos con varios bancos locales para conseguirte las mejores tasas disponibles."
    },
    {
      question: "¿Qué pasa si me mudo de casa?",
      answer: "Las placas solares aumentan el valor de tu propiedad entre $15,000-$25,000. Si te mudas, puedes vender la casa con las placas incluidas o en algunos casos transferir el financiamiento al nuevo dueño. También evaluamos opciones para mover el sistema."
    },
    {
      question: "¿Qué incluye la cotización gratis?",
      answer: "Incluye: evaluación completa del consumo, diseño personalizado del sistema, cálculo exacto de ahorros, opciones de financiamiento, estimado de instalación y todos los permisos necesarios. No hay letra pequeña ni costos ocultos."
    },
    {
      question: "¿Funcionan las placas durante apagones?",
      answer: "Con nuestro sistema de baterías de respaldo, tendrás electricidad durante apagones. Las placas cargan las baterías durante el día y puedes usar esa energía cuando LUMA se va. Es como tener tu propia planta eléctrica."
    },
    {
      question: "¿Cuánto tiempo toma la instalación?",
      answer: "Desde que firmas el contrato hasta que el sistema está produciendo energía: 4-8 semanas. Esto incluye permisos de LUMA, municipio y inspecciones. La instalación física en tu techo toma solo 1-2 días."
    },
    {
      question: "¿Qué garantía tienen las placas?",
      answer: "25 años de garantía del fabricante en las placas, 10 años en inversores y 5 años en baterías. También incluimos 2 años de garantía en mano de obra. Si algo pasa, lo arreglamos sin costo adicional."
    }
  ];

  const scrollToQuote = () => {
    const element = document.querySelector('#cotizacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre placas solares en Puerto Rico
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-r from-yellow-50 to-green-50 border-0 rounded-2xl px-6 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-green-600 transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-yellow-500 to-green-500 p-8 rounded-3xl max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestros expertos están listos para resolver cualquier duda sobre tu proyecto solar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToQuote}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300"
              >
                Obtén tu cotización gratis
              </Button>
              <a 
                href="https://wa.me/17874312275" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold hover:scale-105 transition-transform duration-300"
              >
                Chatea por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
