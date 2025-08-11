import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Users, Award, Leaf, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO 
        title="Sobre Kilowatt PR | Empresa de Placas Solares Puerto Rico"
        description="Conoce a Kilowatt PR: expertos en instalación de placas solares en Puerto Rico. Energía renovable, calidad y servicio al cliente."
        canonicalPath="/about"
      />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-solar-50 to-ocean-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre Kilowatt PR
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Somos la empresa líder en energía solar de Puerto Rico, dedicada a hacer 
              la energía renovable accesible para todas las familias puertorriqueñas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra misión</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Transformar Puerto Rico en líder de energía renovable del Caribe, 
                haciendo la energía solar accesible, confiable y económica para 
                cada hogar puertorriqueño.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Creemos que cada familia merece acceso a energía limpia y económica. 
                Por eso trabajamos incansablemente para eliminar las barreras que 
                impiden la adopción masiva de energía solar en la isla.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop" 
                alt="Equipo Kilowatt PR instalando paneles solares"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada instalación que realizamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center glass p-8 rounded-3xl animate-fade-in-up">
              <Heart className="w-12 h-12 text-solar-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compromiso</h3>
              <p className="text-gray-600">
                Con cada cliente, cada proyecto y con el futuro de Puerto Rico
              </p>
            </div>

            <div className="text-center glass p-8 rounded-3xl animate-fade-in-up">
              <Award className="w-12 h-12 text-ocean-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excelencia</h3>
              <p className="text-gray-600">
                En cada instalación, usando solo equipos de la más alta calidad
              </p>
            </div>

            <div className="text-center glass p-8 rounded-3xl animate-fade-in-up">
              <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sostenibilidad</h3>
              <p className="text-gray-600">
                Protegemos el medio ambiente para las futuras generaciones
              </p>
            </div>

            <div className="text-center glass p-8 rounded-3xl animate-fade-in-up">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comunidad</h3>
              <p className="text-gray-600">
                Somos parte de Puerto Rico y trabajamos por su prosperidad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales certificados y apasionados por la energía solar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up">
              <img 
                src="/lovable-uploads/e73fded1-23f5-426c-8bd0-c75ad4095e5e.png" 
                alt="Xavier Acevedo - CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Xavier Acevedo</h3>
              <p className="text-solar-600 font-medium mb-2">Fundador y CEO</p>
              <p className="text-gray-600 text-sm">
                15 años de experiencia en energía renovable y gestión empresarial
              </p>
            </div>

            <div className="text-center animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="Carlos Mendez - CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Carlos Méndez</h3>
              <p className="text-solar-600 font-medium mb-2">Director Técnico</p>
              <p className="text-gray-600 text-sm">
                Ingeniero eléctrico certificado con especialización en sistemas solares
              </p>
            </div>

            <div className="text-center animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b734?w=300&h=300&fit=crop&crop=face" 
                alt="María González - Gerente de Operaciones"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">María González</h3>
              <p className="text-solar-600 font-medium mb-2">Gerente de Operaciones</p>
              <p className="text-gray-600 text-sm">
                Experta en logística y gestión de proyectos de instalación solar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro impacto en números
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-solar-500 mb-2">500+</div>
              <div className="text-gray-600">Familias servidas</div>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-green-500 mb-2">2.5M</div>
              <div className="text-gray-600">kWh generados</div>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-ocean-500 mb-2">78</div>
              <div className="text-gray-600">Municipios</div>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-purple-500 mb-2">5</div>
              <div className="text-gray-600">Años experiencia</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
