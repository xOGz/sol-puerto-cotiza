
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Guía Completa: Costo de Placas Solares en Puerto Rico 2024",
      excerpt: "Descubre los precios reales de instalación de paneles solares en Puerto Rico, incluyendo incentivos federales, financiamiento y ROI proyectado.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      date: "2024-03-15",
      author: "Kilowatt PR",
      slug: "costo-placas-solares-puerto-rico-2024",
      category: "Precios y Costos",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Placas Solares vs Generador: ¿Cuál es Mejor Durante Apagones en PR?",
      excerpt: "Comparación detallada entre sistemas solares con batería y generadores para mantener energía durante apagones de LUMA Energy.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop",
      date: "2024-03-10",
      author: "Kilowatt PR",
      slug: "placas-solares-vs-generador-apagones",
      category: "Comparativas",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "Los Mejores Municipios para Placas Solares en Puerto Rico",
      excerpt: "Análisis de radiación solar, incentivos locales y costos de instalación en Aguada, Mayagüez, San Juan, Ponce y otros municipios.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      date: "2024-03-05",
      author: "Kilowatt PR", 
      slug: "mejores-municipios-placas-solares-puerto-rico",
      category: "Ubicaciones",
      readTime: "10 min"
    },
    {
      id: 4,
      title: "Mantenimiento de Placas Solares: Lavado y Cuidado en Puerto Rico",
      excerpt: "Todo lo que necesitas saber sobre limpieza, mantenimiento preventivo y cuidado de paneles solares en clima tropical.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop",
      date: "2024-02-28",
      author: "Kilowatt PR",
      slug: "mantenimiento-placas-solares-puerto-rico",
      category: "Mantenimiento",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Sellado de Techo Antes de Instalar Placas Solares: Guía Completa",
      excerpt: "Por qué es esencial sellar el techo antes de la instalación, materiales recomendados y proceso paso a paso.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      date: "2024-02-20",
      author: "Kilowatt PR",
      slug: "sellado-techo-placas-solares",
      category: "Instalación",
      readTime: "9 min"
    }
  ];

  const categories = ["Todos", "Precios y Costos", "Comparativas", "Ubicaciones", "Mantenimiento", "Instalación"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const scrollToQuote = () => {
    window.location.href = "/#cotizacion";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog de Energía Solar Puerto Rico
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Guías completas, comparativas y consejos expertos sobre <strong>placas solares en Puerto Rico</strong>. 
              Aprende todo sobre instalación, costos, mantenimiento y ahorros.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar artículos sobre placas solares..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 focus:border-green-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-green-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('es-PR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">
                      ⏱️ {post.readTime} lectura
                    </span>
                    <Button 
                      variant="ghost" 
                      className="text-green-600 hover:text-green-700 hover:bg-green-50 p-2"
                    >
                      Leer más <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">
                No encontramos artículos que coincidan con tu búsqueda
              </p>
              <Button 
                onClick={() => {setSearchTerm(""); setSelectedCategory("Todos");}}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                Ver todos los artículos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para instalar placas solares en tu hogar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Después de leer nuestros artículos, da el siguiente paso hacia el ahorro energético
            </p>
            <Button 
              onClick={scrollToQuote}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              🔥 Obtén tu cotización gratuita
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
