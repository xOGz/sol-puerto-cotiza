import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import testimonial images
import womanLaptop from "@/assets/testimonials/woman-laptop.jpg";
import womanWhiteShirt from "@/assets/testimonials/woman-white-shirt.jpg";
import manCheckeredShirt from "@/assets/testimonials/man-checkered-shirt.jpg";
import peopleLaptops from "@/assets/testimonials/people-laptops.jpg";
import promoGarantizado from "@/assets/promo-garantizado.png";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Juan R. Pérez",
      location: "Mayagüez, PR",
      image: manCheckeredShirt,
      previousBill: "$280",
      currentBill: "$15",
      text: "Antes pagaba $280 mensual de luz. Ahora solo pago $15. Los muchachos de Kilowatt PR hicieron un trabajo excelente y me explicaron todo paso a paso.",
      rating: 5
    },
    {
      name: "Carmen M. Rivera",
      location: "Caguas, PR",
      image: womanWhiteShirt,
      previousBill: "$350",
      currentBill: "$22",
      text: "Mi factura bajó de $350 a solo $22 al mes. Durante el huracán Fiona tuvimos luz cuando todo el barrio estaba a oscuras. Súper recomendado.",
      rating: 5
    },
    {
      name: "Miguel A. Santos",
      location: "Bayamón, PR",
      image: peopleLaptops,
      previousBill: "$195",
      currentBill: "$8",
      text: "El sistema fue instalado rapidísimo y profesional. Ahorro más de lo que esperaba cada mes. La instalación fue rápida y profesional.",
      rating: 5
    },
    {
      name: "Ana L. Morales",
      location: "Ponce, PR",
      image: womanLaptop,
      previousBill: "$420",
      currentBill: "$35",
      text: "Tengo un negocio en casa y mi factura era altísima. Ahora ahorro más de $380 al mes. Kilowatt PR cumplió todo lo que prometieron.",
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
    <section id="testimonios" className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 to-kilowatt-secondary/10">
      <div className="container mx-auto px-4">
        {/* Promotional Image Section */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <img 
            src={promoGarantizado} 
            alt="100% Garantizado - Kilowatt PR LLC" 
            className="max-w-md w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Familias boricuas ya están ahorrando
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Estos son algunos de nuestros clientes satisfechos en toda la isla
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white p-8 md:p-12 rounded-3xl text-center shadow-2xl animate-fade-in-up">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="flex items-center justify-center mb-6">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full mr-4 object-cover border-4 border-kilowatt-primary/30"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].location}</div>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-sm text-gray-600">Antes</div>
                <div className="text-2xl font-bold text-red-500">{testimonials[currentTestimonial].previousBill}</div>
              </div>
              <div className="text-4xl text-gray-400">→</div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Ahora</div>
                <div className="text-2xl font-bold text-kilowatt-primary">{testimonials[currentTestimonial].currentBill}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border-gray-300 hover:bg-gray-50 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border-gray-300 hover:bg-gray-50 shadow-lg"
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
                  index === currentTestimonial ? 'bg-kilowatt-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
