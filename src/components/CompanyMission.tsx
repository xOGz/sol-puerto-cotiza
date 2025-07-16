
import { Heart, Users, Leaf, Lightbulb } from "lucide-react";

const CompanyMission = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-solar-50 to-ocean-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra misión es clara
            </h2>
            <div className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Hacemos la energía solar <span className="text-gradient font-bold">accesible para todos</span> los puertorriqueños, 
              contribuyendo a un futuro más sostenible y económico para nuestras familias.
            </div>
          </div>

          {/* Mission Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass p-8 rounded-3xl animate-fade-in-up">
              <Heart className="w-12 h-12 text-solar-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compromiso con la comunidad</h3>
              <p className="text-gray-600 leading-relaxed">
                Creemos que cada familia puertorriqueña merece acceso a energía limpia y económica. 
                Por eso trabajamos incansablemente para hacer la energía solar una realidad para todos.
              </p>
            </div>
            
            <div className="glass p-8 rounded-3xl animate-fade-in-up">
              <Leaf className="w-12 h-12 text-kilowatt-secondary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cuidado del medio ambiente</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada instalación solar que realizamos contribuye a reducir las emisiones de carbono 
                y a crear un Puerto Rico más verde para las futuras generaciones.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="glass p-8 md:p-12 rounded-3xl text-center animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Nuestro impacto en Puerto Rico</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-solar-500 mb-2">2.5M</div>
                <div className="text-gray-600">kWh generados anualmente</div>
                <div className="text-sm text-gray-500 mt-2">Equivale a plantar 1,200 árboles</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-kilowatt-primary mb-2">$850K</div>
                <div className="text-gray-600">Ahorrados por nuestros clientes</div>
                <div className="text-sm text-gray-500 mt-2">En facturas eléctricas este año</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-ocean-500 mb-2">78</div>
                <div className="text-gray-600">Municipios servidos</div>
                <div className="text-sm text-gray-500 mt-2">Cubriendo toda la isla</div>
              </div>
            </div>
          </div>

          {/* Team Message */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/e73fded1-23f5-426c-8bd0-c75ad4095e5e.png" 
                  alt="CEO Kilowatt PR"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-900">Xavier Acevedo</h4>
                <p className="text-gray-600">Fundador y CEO</p>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "Fundé Kilowatt PR porque creo firmemente que Puerto Rico puede liderar el Caribe 
                en energía renovable. Cada familia que se une a la revolución solar nos acerca 
                más a esa visión."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMission;
