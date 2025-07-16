import { Star, Quote, ExternalLink } from "lucide-react";

// Import review images
import mariaGonzalezImg from "@/assets/reviews/maria-gonzalez.jpg";
import carlosMendozaImg from "@/assets/reviews/carlos-mendoza.jpg";
import anaRiveraImg from "@/assets/reviews/ana-rivera.jpg";
import luisMoralesImg from "@/assets/reviews/luis-morales.jpg";
import sandraVegaImg from "@/assets/reviews/sandra-vega.jpg";

const GoogleReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "María González",
      rating: 5,
      text: "Excelente servicio! Instalaron mis placas solares en Aguada y ahora pago $50 menos al mes. El equipo fue muy profesional y terminaron en 2 días.",
      location: "Aguada, PR",
      date: "2024-03-10",
      avatar: mariaGonzalezImg
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      rating: 5,
      text: "Increíble ahorro! Mis placas solares han reducido mi factura de luz en un 85%. Kilowatt PR hizo todo el proceso súper fácil y rápido.",
      location: "Mayagüez, PR",
      date: "2024-03-05",
      avatar: carlosMendozaImg
    },
    {
      id: 3,
      name: "Ana Rivera",
      rating: 5,
      text: "Recomiendo 100% a Kilowatt PR. Sellaron mi techo y luego instalaron las placas solares. El trabajo fue impecable y con garantía de 25 años.",
      location: "San Juan, PR",
      date: "2024-02-28",
      avatar: anaRiveraImg
    },
    {
      id: 4,
      name: "Luis Morales",
      rating: 5,
      text: "Después del huracán, decidí instalar placas solares con batería. Kilowatt PR me ayudó con todo el proceso y ahora tengo energía 24/7.",
      location: "Ponce, PR",
      date: "2024-02-20",
      avatar: luisMoralesImg
    },
    {
      id: 5,
      name: "Sandra Vega",
      rating: 5,
      text: "¡Fantástico! Mi sistema solar ya se pagó solo en 3 años. El equipo de Kilowatt PR es súper profesional y el servicio post-instalación es excelente.",
      location: "Caguas, PR",
      date: "2024-02-15",
      avatar: sandraVegaImg
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reseñas Verificadas de Google
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Descubre por qué somos la empresa #1 en <strong>placas solares Puerto Rico</strong> según nuestros clientes
          </p>
          
          {/* Google Rating Summary */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-50 rounded-2xl p-6 inline-flex items-center space-x-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">4.9</div>
                <div className="flex justify-center mb-1">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-gray-600">147 reseñas</div>
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <div className="text-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                  alt="Google"
                  className="w-8 h-8 mx-auto mb-2"
                />
                <div className="text-sm text-gray-600">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={`${review.name} - Cliente satisfecho placas solares Puerto Rico`}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.location}</div>
                </div>
                <div className="text-right">
                  <div className="flex mb-1">
                    {renderStars(review.rating)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString('es-PR', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center">
          <a 
            href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;