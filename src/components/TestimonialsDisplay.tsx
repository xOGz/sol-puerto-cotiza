
import { useTestimonials } from "@/hooks/useTestimonials";
import { Star } from "lucide-react";

const TestimonialsDisplay = () => {
  const { data: testimonials, isLoading, error } = useTestimonials();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="glass p-6 rounded-2xl animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-20 bg-gray-200 rounded mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    console.error('Error loading testimonials:', error);
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Error cargando testimonios</p>
      </div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No hay testimonios disponibles</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonio) => (
        <div key={testimonio.id} className="glass p-6 rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="flex space-x-1">
              {[...Array(testimonio.calificacion || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <blockquote className="text-gray-700 mb-4 italic">
            "{testimonio.testimonio}"
          </blockquote>
          
          <div className="border-t pt-4">
            <div className="font-semibold text-gray-900">{testimonio.nombre}</div>
            <div className="text-sm text-gray-600">{testimonio.municipio}</div>
            {testimonio.ahorro_mensual && (
              <div className="text-sm text-solar-600 font-medium mt-1">
                Ahorro: ${testimonio.ahorro_mensual}/mes
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsDisplay;
