
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
      question: "¿Cuánto cuestan las placas solares en Puerto Rico?",
      answer: "El costo promedio de un sistema solar residencial en Puerto Rico varía entre $15,000-$35,000 antes de incentivos. Con los créditos federales y locales, el costo neto puede reducirse significativamente. Ofrecemos planes de financiamiento desde $0 inicial. Nuestra cotización gratuita incluye un análisis detallado de costos y ahorros proyectados específico para tu hogar."
    },
    {
      question: "¿Qué incluye el sellado de techo con la instalación de placas solares?",
      answer: "Nuestro servicio de sellado de techo incluye: inspección completa de la estructura, sellado profesional de todas las penetraciones, aplicación de materiales impermeabilizantes de alta calidad (Sika, Henry, GAF), garantía de 2 años en mano de obra, y certificado de impermeabilización. Esto protege tu inversión solar y evita filtraciones futuras."
    },
    {
      question: "¿Con qué frecuencia debo lavar las placas solares en Puerto Rico?",
      answer: "En Puerto Rico recomendamos lavar las placas solares cada 6-8 meses debido al polvo del Sahara, sal marina y lluvia frecuente. En zonas costeras como Rincón, Aguadilla o Cabo Rojo, puede ser necesario cada 4-6 meses. Nuestro servicio de lavado especializado puede aumentar la eficiencia hasta 15% y incluye inspección de conexiones."
    },
    {
      question: "¿Funcionan las placas solares durante apagones de LUMA Energy?",
      answer: "Con nuestros sistemas solares con batería de respaldo (baterías e inversor), tendrás electricidad durante los apagones de LUMA. Las placas cargan las baterías durante el día y puedes usar esa energía cuando se va la luz. Es como tener tu propia planta eléctrica personal las 24 horas."
    },
    {
      question: "¿Qué incluye la cotización gratuita de placas solares?",
      answer: "Nuestra cotización 100% gratuita incluye: evaluación completa de tu consumo eléctrico, diseño 3D personalizado del sistema, cálculo exacto de ahorros proyectados a 25 años, análisis del techo y recomendaciones de sellado si es necesario, estimado de instalación, opciones de financiamiento, y seguimiento personalizado. Sin letra pequeña ni costos ocultos."
    },
    {
      question: "¿Cuánto tiempo toma instalar placas solares en Puerto Rico?",
      answer: "El proceso completo desde la firma del contrato hasta que tu sistema está produciendo energía limpia toma 6-10 semanas. Esto incluye: instalación física (1-2 días), inspecciones (1 semana), y conexión final. La instalación en tu techo, incluyendo sellado, toma solo 1-2 días con nuestro equipo certificado."
    },
    {
      question: "¿Qué garantías ofrecen en las placas solares?",
      answer: "Ofrecemos garantías líderes en la industria: 25 años en paneles solares (producción), 25 años en microinversores Enphase, 10 años en baterías e inversor, 1 mes de garantía en instalación, y 2 años en sellado de techo. Además, monitoreo 24/7 del sistema y servicio técnico local en Puerto Rico."
    },
    {
      question: "¿Aumentan las placas solares el valor de mi casa en Puerto Rico?",
      answer: "Sí, estudios muestran que las placas solares aumentan el valor de tu propiedad entre $15,000-$25,000 en Puerto Rico. Si decides mudarte, puedes vender la casa con el sistema incluido (aumentando precio de venta), transferir el sistema al nuevo dueño, o en algunos casos mover el sistema a tu nueva residencia. La inversión en energía solar se recupera y genera ganancia."
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
            Preguntas Frecuentes - Placas Solares Puerto Rico
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre instalación de paneles solares, costos, garantías y financiamiento en Puerto Rico
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-r from-kilowatt-primary/10 to-kilowatt-secondary/10 border-0 rounded-2xl px-6 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-kilowatt-primary transition-colors py-6">
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
          <div className="bg-gradient-to-r from-kilowatt-primary to-kilowatt-secondary p-8 rounded-3xl max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para empezar a ahorrar con energía solar?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestros expertos en placas solares están listos para crear tu cotización personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToQuote}
                className="bg-white text-kilowatt-primary hover:bg-gray-100 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300"
              >
                🔥 Cotización Gratis en 24hrs
              </Button>
              <a 
                href="https://wa.me/17874312275?text=Hola,%20quiero%20información%20sobre%20placas%20solares%20para%20mi%20casa%20en%20Puerto%20Rico" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-kilowatt-secondary hover:bg-kilowatt-secondary/90 text-white rounded-full font-bold hover:scale-105 transition-transform duration-300"
              >
                💬 WhatsApp Directo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
