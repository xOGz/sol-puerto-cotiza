
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Calendar, Eye } from "lucide-react";

const BlogPostsDisplay = () => {
  const { data: blogPosts, isLoading, error } = useBlogPosts();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="glass p-6 rounded-2xl animate-pulse">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    console.error('Error loading blog posts:', error);
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Error cargando artículos del blog</p>
      </div>
    );
  }

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No hay artículos disponibles</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <article key={post.id} className="glass p-6 rounded-2xl hover:shadow-lg transition-shadow">
          {post.imagen_destacada && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src={post.imagen_destacada} 
                alt={post.titulo}
                className="w-full h-40 object-cover"
              />
            </div>
          )}
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {post.titulo}
          </h3>
          
          {post.extracto && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.extracto}
            </p>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.fecha_publicacion || '')}</span>
            </div>
            
            {post.vistas && (
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{post.vistas}</span>
              </div>
            )}
          </div>
          
          <button className="mt-4 text-solar-600 font-medium hover:text-solar-700 transition-colors">
            Leer más →
          </button>
        </article>
      ))}
    </div>
  );
};

export default BlogPostsDisplay;
