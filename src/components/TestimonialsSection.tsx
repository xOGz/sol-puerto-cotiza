
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "María González",
      location: "Bayamón, PR",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b734?w=150&h=150&fit=crop&crop=face",
      savings: "$180 menos en la factura mensual",
      text: "Desde que instalamos las placas solares con Kilowatt PR, nuestra factura de luz bajó de $250 a solo $70. El proceso fue súper fácil y el equipo muy profesional.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      location: "Mayagüez, PR",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      savings: "$220 menos en la factura mensual",
      text: "Excelente servicio. Las placas solares han funcionado perfectamente durante dos años. La inversión se pagó sola en menos tiempo del esperado.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      location: "Ponce, PR",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      savings: "$160 menos en la factura mensual",
      text: "Lo mejor de todo es el monitoreo desde el celular. Puedo ver cuánta energía estoy generando en tiempo real. Súper recomendado.",
      rating: 5
    },
    {
      name: "Luis Rivera",
      location: "Caguas, PR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      savings: "$195 menos en la factura mensual",
      text: "El financiamiento que ofrecen es excelente. Pago menos por el préstamo de lo que antes pagaba de luz. Es una decisión inteligente.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de familias puertorriqueñas ya están ahorrando con energía solar
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="glass p-8 md:p-12 rounded-3xl text-center animate-fade-in-up">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-solar-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="flex items-center justify-center mb-4">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].location}</div>
              </div>
            </div>
            
            <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-semibold">
              {testimonials[currentTestimonial].savings}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 glass border-gray-300 hover:bg-white/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 glass border-gray-300 hover:bg-white/50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-solar-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-solar-500 mb-2">98%</div>
            <div className="text-gray-600">Satisfacción del cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-solar-500 mb-2">$189</div>
            <div className="text-gray-600">Ahorro promedio mensual</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-solar-500 mb-2">4.9★</div>
            <div className="text-gray-600">Rating en Google</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
