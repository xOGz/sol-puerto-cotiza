import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "¿Cuánto cuestan las placas solares en Puerto Rico?",
      excerpt: "Guía completa sobre precios, financiamiento y retorno de inversión para sistemas solares residenciales en Puerto Rico.",
      content: `
        ## Introducción
        
        El costo de las placas solares en Puerto Rico ha disminuido significativamente en los últimos años, haciendo que la energía solar sea más accesible que nunca para las familias puertorriqueñas.
        
        ## Costos promedio por tipo de sistema
        
        ### Sistema básico (sin batería)
        - **4-6 paneles**: $8,500 - $12,000
        - **6-8 paneles**: $12,000 - $16,000
        - **8-10 paneles**: $16,000 - $20,000
        
        ### Sistema con batería
        - **Sistema completo pequeño**: $15,800 - $22,000
        - **Sistema completo mediano**: $22,000 - $30,000
        - **Sistema completo grande**: $30,000 - $45,000
        
        ## Factores que afectan el precio
        
        1. **Tamaño del sistema**: Más paneles = mayor costo inicial
        2. **Tipo de paneles**: Monocristalinos vs policristalinos
        3. **Inclusión de batería**: Aumenta el costo pero proporciona respaldo
        4. **Complejidad del techo**: Techos complejos requieren más trabajo
        5. **Permisos y conexiones**: Costos administrativos con LUMA
        
        ## Opciones de financiamiento
        
        ### Préstamos solares
        - 0% interés los primeros 12-18 meses
        - Plazos de 10-25 años
        - Pagos mensuales típicos: $80-$200
        
        ### Leasing solar
        - Sin costo inicial
        - Pagos mensuales fijos
        - Mantenimiento incluido
        
        ## Retorno de inversión
        
        El sistema solar promedio se paga solo en 6-8 años y puede generar ahorros de $25,000-$50,000 durante su vida útil de 25+ años.
        
        ### Ejemplo real: Familia en Bayamón
        - **Factura anterior**: $220/mes
        - **Costo del sistema**: $18,500
        - **Nueva factura**: $35/mes
        - **Ahorro mensual**: $185
        - **Periodo de recuperación**: 8.3 años
        
        ## Incentivos disponibles
        
        1. **Crédito federal**: 30% del costo total
        2. **Medición neta**: Vende exceso a LUMA
        3. **Financiamiento CDBG**: Para familias elegibles
        
        ## Conclusión
        
        Invertir en placas solares en Puerto Rico es una decisión financiera inteligente que puede generar ahorros significativos durante décadas mientras contribuyes a un futuro más sostenible.
      `,
      author: "José Rivera",
      date: "15 de Enero, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=400&fit=crop",
      tags: ["Precios", "Financiamiento", "ROI"]
    },
    {
      id: 2,
      title: "Placas solares con batería vs sin batería",
      excerpt: "Análisis completo de las ventajas y desventajas de cada opción para ayudarte a tomar la mejor decisión para tu hogar.",
      content: `
        ## ¿Sistema con o sin batería?
        
        Una de las decisiones más importantes al instalar energía solar es si incluir o no un sistema de batería de respaldo.
        
        ## Sistemas sin batería
        
        ### Ventajas
        - **Menor costo inicial**: 40-50% menos que sistemas con batería
        - **Instalación más simple**: Menos componentes y conexiones
        - **Menos mantenimiento**: Menos elementos que pueden fallar
        - **Retorno de inversión más rápido**: Se paga solo en 5-7 años
        
        ### Desventajas
        - **Sin electricidad durante apagones**: Se desconecta por seguridad
        - **Dependencia de LUMA**: Necesitas la red eléctrica funcionando
        - **Horarios de uso**: Solo generas durante el día
        
        ## Sistemas con batería
        
        ### Ventajas
        - **Electricidad durante apagones**: Mantén lo esencial funcionando
        - **Independencia energética**: Menos dependencia de LUMA
        - **Uso nocturno**: Usa energía solar almacenada por la noche
        - **Protección contra cortes**: Especialmente importante en PR
        
        ### Desventajas
        - **Mayor costo inicial**: $7,000-$15,000 adicionales
        - **Más complejo**: Requiere más espacio y componentes
        - **Reemplazo de batería**: Cada 10-15 años
        - **Retorno más lento**: 8-10 años para recuperar inversión
        
        ## Tipos de baterías disponibles
        
        ### Litio (LiFePO4)
        - **Vida útil**: 10-15 años
        - **Ciclos**: 6,000-8,000
        - **Eficiencia**: 95-98%
        - **Costo**: $800-$1,200 por kWh
        
        ### Gel/AGM
        - **Vida útil**: 5-8 años
        - **Ciclos**: 1,500-3,000
        - **Eficiencia**: 85-90%
        - **Costo**: $300-$500 por kWh
        
        ## ¿Cuál necesitas?
        
        ### Elige SIN batería si:
        - Tu presupuesto es limitado
        - Los apagones son raros en tu área
        - Priorizas el retorno de inversión rápido
        - No tienes equipos críticos
        
        ### Elige CON batería si:
        - Experimentas apagones frecuentes
        - Tienes equipos médicos o críticos
        - Trabajas desde casa
        - Valoras la independencia energética
        - Puedes invertir más inicialmente
        
        ## Dimensionamiento de batería
        
        ### Respaldo básico (4-6 horas)
        - Luces LED
        - Refrigerador
        - Algunos tomacorrientes
        - **Capacidad necesaria**: 5-8 kWh
        
        ### Respaldo completo (8-12 horas)
        - Casa completa excepto A/C
        - Todos los electrodomésticos
        - **Capacidad necesaria**: 15-25 kWh
        
        ## Casos reales
        
        ### Familia Rodríguez (sin batería)
        - **Inversión**: $14,500
        - **Ahorro mensual**: $165
        - **Se pagó solo**: 7.3 años
        - **Satisfacción**: "Excelente para ahorrar dinero"
        
        ### Familia Martínez (con batería)
        - **Inversión**: $24,800
        - **Ahorro mensual**: $180
        - **Se pagó solo**: 11.5 años
        - **Satisfacción**: "Tranquilidad durante apagones invaluable"
        
        ## Conclusión
        
        La decisión depende de tus prioridades: si buscas ahorro máximo, ve sin batería. Si valoras la independencia y tranquilidad, incluye batería.
      `,
      author: "Carlos Méndez",
      date: "10 de Enero, 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=400&fit=crop",
      tags: ["Baterías", "Comparación", "Decisión"]
    },
    {
      id: 3,
      title: "Incentivos solares en Puerto Rico 2025",
      excerpt: "Todo lo que necesitas saber sobre los incentivos federales y locales disponibles para instalaciones solares en Puerto Rico.",
      content: `
        ## Incentivos disponibles en 2025
        
        Puerto Rico ofrece algunos de los mejores incentivos para energía solar en Estados Unidos, haciendo que la inversión sea aún más atractiva.
        
        ## Crédito fiscal federal (ITC)
        
        ### 30% de crédito fiscal
        - **Vigencia**: Hasta diciembre 2032
        - **Aplica a**: Costo total del sistema
        - **Incluye**: Paneles, inversor, batería, instalación
        - **Límite**: Sin límite máximo
        
        ### Ejemplo de ahorro
        Sistema de $20,000:
        - **Crédito fiscal**: $6,000
        - **Costo neto**: $14,000
        
        ### Requisitos
        - Ser propietario de la residencia
        - Tener suficiente obligación tributaria
        - Sistema debe ser para uso residencial
        
        ## Medición neta con LUMA
        
        ### Cómo funciona
        1. Produces más energía de la que usas
        2. El exceso se envía a la red de LUMA
        3. Recibes créditos en tu factura
        4. Usas los créditos cuando necesites energía
        
        ### Tarifas de compensación 2025
        - **Energía solar**: $0.08-$0.12 por kWh
        - **Tarifa retail**: $0.22-$0.28 por kWh
        - **Relación**: Aproximadamente 40-50% de la tarifa retail
        
        ## Programas CDBG-DR
        
        ### Para familias de ingresos bajos-moderados
        - **Cobertura**: Hasta 100% del costo
        - **Límite de ingresos**: Varía por municipio
        - **Incluye**: Sistema completo con batería
        - **Elegibilidad**: Propietarios afectados por huracanes
        
        ### Municipios participantes
        - San Juan, Bayamón, Carolina
        - Ponce, Caguas, Arecibo
        - Mayagüez, Toa Baja
        - Y muchos más
        
        ## Financiamiento especial
        
        ### Préstamos verdes
        - **Tasas**: 2.99% - 6.99% APR
        - **Plazos**: 5-25 años
        - **Sin pago inicial**: En muchos casos
        - **Aprobación rápida**: 24-48 horas
        
        ### Opciones PACE
        - **Financiamiento**: A través de la propiedad
        - **Plazos**: Hasta 25 años
        - **Transferible**: Al nuevo propietario
        - **Sin verificación crediticia**: En algunos casos
        
        ## Incentivos locales
        
        ### Exención de impuestos municipales
        - **Duración**: 5-15 años (varía por municipio)
        - **Aplica a**: Aumento en valor de propiedad
        - **Ahorro típico**: $200-$800 anuales
        
        ### Municipios con exenciones
        - San Juan: 15 años
        - Bayamón: 10 años
        - Ponce: 12 años
        - Carolina: 8 años
        
        ## Cómo maximizar incentivos
        
        ### Timing de instalación
        1. **Planifica antes de fin de año**: Para maximizar crédito fiscal
        2. **Verifica elegibilidad CDBG**: Antes de comprometerte
        3. **Compara financiamiento**: Múltiples opciones
        
        ### Documentación necesaria
        - Prueba de ingresos
        - Escritura de propiedad
        - Facturas eléctricas recientes
        - Identificación válida
        
        ## Cambios para 2025
        
        ### Nuevos programas
        - **Incentivo para baterías**: $1,000 adicional
        - **Programa para veteranos**: 5% descuento extra
        - **Microrredes comunitarias**: Financiamiento especial
        
        ### Programas que expiran
        - **CDBG-DR**: Fondos limitados (aplica pronto)
        - **Algunos municipales**: Verificar vigencia
        
        ## Proceso de aplicación
        
        ### Pasos típicos
        1. **Evaluación inicial**: Determinar elegibilidad
        2. **Solicitud**: Completar formularios necesarios
        3. **Aprobación**: 2-4 semanas típicamente
        4. **Instalación**: Posterior a aprobaciones
        5. **Inspección final**: Para activar incentivos
        
        ## Errores comunes a evitar
        
        - No verificar elegibilidad antes de firmar
        - Esperar hasta último momento del año
        - No considerar todos los incentivos disponibles
        - No entender términos de financiamiento
        
        ## Conclusión
        
        Los incentivos disponibles en Puerto Rico hacen que 2025 sea un año excelente para invertir en energía solar. Con planificación adecuada, puedes maximizar tus ahorros y acelerar tu retorno de inversión.
      `,
      author: "María González",
      date: "5 de Enero, 2024",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop",
      tags: ["Incentivos", "Financiamiento", "2025"]
    },
    {
      id: 4,
      title: "Cómo ahorrar hasta 90% en tu factura con placas solares",
      excerpt: "Estrategias probadas para maximizar tu ahorro con energía solar, incluyendo casos reales de familias puertorriqueñas.",
      content: `
        ## La realidad del ahorro solar
        
        Muchas familias puertorriqueñas están ahorrando entre 70-90% en sus facturas eléctricas con sistemas solares bien dimensionados.
        
        ## Factores clave para máximo ahorro
        
        ### 1. Dimensionamiento correcto
        - **Análisis de consumo**: 12 meses de historial
        - **Patrones de uso**: Cuándo usas más energía
        - **Crecimiento futuro**: Planes de expansión familiar
        - **Eficiencia del hogar**: Aislamiento y electrodomésticos
        
        ### 2. Orientación óptima
        - **Dirección ideal**: Sur o suroeste
        - **Inclinación**: 15-25 grados en Puerto Rico
        - **Sombras**: Minimizar obstrucciones
        - **Espacio disponible**: Maximizar área útil
        
        ### 3. Tecnología adecuada
        - **Paneles eficientes**: Monocristalinos recomendados
        - **Inversores de calidad**: Garantía mínima 10 años
        - **Monitoreo**: Para optimizar producción
        - **Mantenimiento**: Limpieza y inspecciones regulares
        
        ## Estrategias de consumo inteligente
        
        ### Programar electrodomésticos
        - **Lavadora/secadora**: Durante horas pico solar (10am-3pm)
        - **Calentador de agua**: Usar temporizador inteligente
        - **Piscina**: Filtrar durante el día
        - **Carga de vehículos**: Si tienes auto eléctrico
        
        ### Optimización con batería
        - **Almacenar exceso**: Durante sobreproducción
        - **Uso nocturno**: Evitar tarifas altas de LUMA
        - **Respaldo de emergencia**: Para equipos críticos
        - **Arbitraje de tarifas**: Comprar barato, usar cuando es caro
        
        ## Casos reales de ahorro máximo
        
        ### Familia García - Bayamón
        **Antes del solar:**
        - Factura mensual: $285
        - Consumo: 1,200 kWh/mes
        - Uso: Casa completa con A/C
        
        **Sistema instalado:**
        - 16 paneles (6.4 kW)
        - Batería 13.5 kWh
        - Costo: $28,500
        - Incentivos: -$8,550
        - **Costo neto**: $19,950
        
        **Resultados:**
        - Nueva factura: $25/mes
        - **Ahorro**: 91% ($260/mes)
        - Periodo de recuperación: 6.4 años
        - Ahorro proyectado 25 años: $78,000
        
        ### Familia Rodríguez - Ponce
        **Antes del solar:**
        - Factura mensual: $180
        - Consumo: 850 kWh/mes
        - Uso: Casa mediana sin A/C central
        
        **Sistema instalado:**
        - 10 paneles (4 kW)
        - Sin batería
        - Costo: $12,800
        - Incentivos: -$3,840
        - **Costo neto**: $8,960
        
        **Resultados:**
        - Nueva factura: $18/mes
        - **Ahorro**: 90% ($162/mes)
        - Periodo de recuperación: 4.6 años
        - Ahorro proyectado 25 años: $48,600
        
        ## Optimización por tipo de hogar
        
        ### Casa pequeña (< 800 kWh/mes)
        - **Sistema recomendado**: 3-4 kW sin batería
        - **Ahorro típico**: 80-95%
        - **Inversión**: $8,000-$12,000
        
        ### Casa mediana (800-1,200 kWh/mes)
        - **Sistema recomendado**: 4-6 kW con batería opcional
        - **Ahorro típico**: 75-90%
        - **Inversión**: $12,000-$20,000
        
        ### Casa grande (> 1,200 kWh/mes)
        - **Sistema recomendado**: 6-10 kW con batería
        - **Ahorro típico**: 70-85%
        - **Inversión**: $20,000-$35,000
        
        ## Errores que reducen el ahorro
        
        ### Subdimensionamiento
        - **Problema**: Sistema muy pequeño para el consumo
        - **Resultado**: Solo 40-60% de ahorro
        - **Solución**: Análisis detallado de consumo
        
        ### Sobredimensionamiento
        - **Problema**: Sistema innecesariamente grande
        - **Resultado**: ROI más lento
        - **Solución**: Considerar crecimiento realista
        
        ### Ignorar patrones de uso
        - **Problema**: No ajustar hábitos de consumo
        - **Resultado**: Menor aprovechamiento
        - **Solución**: Educación y monitoreo
        
        ## Tecnologías que aumentan ahorro
        
        ### Optimizadores de potencia
        - **Función**: Maximizan producción panel por panel
        - **Beneficio**: 5-15% más producción
        - **Costo adicional**: $30-50 por panel
        
        ### Microinversores
        - **Función**: Cada panel trabaja independiente
        - **Beneficio**: Mejor rendimiento con sombras
        - **Costo adicional**: $400-800 por sistema
        
        ### Sistemas de monitoreo avanzado
        - **Función**: Detecta problemas rápidamente
        - **Beneficio**: Mantiene producción óptima
        - **Costo**: $200-500
        
        ## Mantenimiento para máximo ahorro
        
        ### Limpieza regular
        - **Frecuencia**: Cada 3-4 meses
        - **Impacto**: 5-15% mejora en producción
        - **Costo**: $50-100 por limpieza
        
        ### Inspecciones anuales
        - **Incluye**: Conexiones, cableado, estructura
        - **Previene**: Problemas costosos
        - **Costo**: $150-250 anual
        
        ## Planificación financiera
        
        ### Maximizar incentivos
        - **Timing**: Instalar antes de fin de año fiscal
        - **Documentación**: Mantener todos los recibos
        - **Asesoría**: Consultar con contador
        
        ### Financiamiento inteligente
        - **Comparar opciones**: Préstamos vs leasing
        - **Considerar flujo de caja**: Pago vs ahorro mensual
        - **Planificar**: Para reemplazo futuro de componentes
        
        ## Conclusión
        
        Ahorrar 90% en tu factura eléctrica es totalmente posible con el sistema solar correcto y hábitos de consumo inteligentes. La clave está en el diseño personalizado y la optimización continua.
      `,
      author: "José Rivera",
      date: "1 de Enero, 2024",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
      tags: ["Ahorro", "Optimización", "Casos Reales"]
    }
  ];

  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        {/* Article Header */}
        <article className="pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center text-solar-600 hover:text-solar-700 mb-8 transition-colors"
              >
                <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                Volver al blog
              </button>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-solar-100 text-solar-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {selectedPost.title}
                </h1>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <User className="w-5 h-5 mr-2" />
                  <span className="mr-4">{selectedPost.author}</span>
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="mr-4">{selectedPost.date}</span>
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{selectedPost.readTime} de lectura</span>
                </div>
                
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                />
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="glass p-8 md:p-12 rounded-3xl">
                  <div 
                    className="text-gray-700 leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedPost.content.replace(/\n/g, '<br>').replace(/##\s/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">').replace(/<\/h2>/g, '</h2>').replace(/###\s/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">').replace(/<\/h3>/g, '</h3>')
                    }}
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 text-center">
                <div className="glass p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¿Listo para comenzar tu proyecto solar?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Obtén una cotización personalizada y comienza a ahorrar en tu factura eléctrica
                  </p>
                  <Button 
                    onClick={() => {
                      const element = document.querySelector('#cotizacion');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-to-r from-solar-500 to-solar-600 hover:from-solar-600 hover:to-solar-700 text-white px-8 py-3 rounded-full font-semibold"
                  >
                    Obtener cotización gratis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-solar-50 to-ocean-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog de Energía Solar
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Guías, consejos y noticias sobre energía solar en Puerto Rico. 
              Todo lo que necesitas saber para tomar decisiones informadas.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up"
                onClick={() => setSelectedPost(post)}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-solar-100 text-solar-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 flex items-center text-solar-600 hover:text-solar-700 font-medium transition-colors">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <div className="glass p-8 md:p-12 rounded-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Mantente informado
              </h2>
              <p className="text-gray-600 mb-8">
                Recibe las últimas noticias sobre energía solar, incentivos y consejos para maximizar tu ahorro
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-solar-500"
                />
                <Button className="bg-gradient-to-r from-solar-500 to-solar-600 hover:from-solar-600 hover:to-solar-700 text-white px-6 py-3 rounded-xl font-medium">
                  Suscribirse
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Sin spam. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
