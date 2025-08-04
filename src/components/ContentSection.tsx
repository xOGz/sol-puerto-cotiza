import { Zap, Shield, Users, DollarSign, Clock, Wrench, MapPin } from "lucide-react";

const ContentSection = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <article className="max-w-6xl mx-auto">
          
          {/* Main Content Header */}
          <header className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Instalación de Placas Solares en Puerto Rico: Guía Completa 2024
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Descubre todo lo que necesitas saber sobre la <strong>instalación de paneles solares en Puerto Rico</strong>. 
              Desde costos y financiamiento hasta garantías y mantenimiento, te explicamos cada detalle para que tomes 
              la mejor decisión sobre energía renovable para tu hogar o negocio.
            </p>
          </header>

          {/* Benefits Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Beneficios de las Placas Solares en Puerto Rico
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-2xl">
                <DollarSign className="w-10 h-10 text-kilowatt-primary mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">Ahorro Inmediato</h4>
                <p className="text-gray-600 leading-relaxed">
                  Reduce tu factura de LUMA Energy hasta un 90%. Con los altos costos de electricidad en Puerto Rico 
                  (promedio $0.22/kWh), las placas solares se pagan solas en 5-7 años.
                </p>
              </div>
              
              <div className="glass p-6 rounded-2xl">
                <Shield className="w-10 h-10 text-kilowatt-secondary mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">Independencia Energética</h4>
                <p className="text-gray-600 leading-relaxed">
                  Con sistemas solares con batería, no dependes de los apagones frecuentes de LUMA. 
                  Mantén tu refrigerador, aires acondicionados y equipos médicos funcionando siempre.
                </p>
              </div>
              
              <div className="glass p-6 rounded-2xl">
                <MapPin className="w-10 h-10 text-kilowatt-primary mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">Clima Ideal</h4>
                <p className="text-gray-600 leading-relaxed">
                  Puerto Rico recibe 350+ días de sol al año, perfecto para placas solares. 
                  Incluso en días nublados, los paneles modernos siguen generando electricidad.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Proceso de Instalación de Placas Solares Paso a Paso
            </h3>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start gap-6 glass p-6 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-kilowatt-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Evaluación Gratuita y Cotización</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Nuestros expertos visitan tu hogar para evaluar el techo, medir el consumo eléctrico y crear un 
                    diseño personalizado. Analizamos factores como orientación, sombras, y condición del techo para 
                    maximizar la eficiencia de tus placas solares.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6 glass p-6 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-kilowatt-secondary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Permisos y Financiamiento</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Nos encargamos de todos los permisos municipales y de LUMA Energy. Ofrecemos múltiples opciones 
                    de financiamiento: cash, préstamos solares con 0% de interés inicial, y planes de pago flexibles 
                    para que puedas instalar placas solares sin pago inicial.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6 glass p-6 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-kilowatt-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Instalación y Sellado</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Instalación profesional en 1-2 días por técnicos certificados. Incluye sellado completo del techo 
                    con materiales Sika y GAF para prevenir filtraciones. Conectamos los paneles, inversores y sistema 
                    de monitoreo para que veas tu producción en tiempo real.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6 glass p-6 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-kilowatt-secondary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Activación y Monitoreo</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Tras la inspección final de LUMA, activamos tu sistema y te entrenamos en el uso del app de monitoreo. 
                    Incluye seguimiento 24/7, alertas de mantenimiento y soporte técnico local en Puerto Rico.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cost and Financing Section */}
          <section className="mb-16 bg-gradient-to-r from-kilowatt-primary/10 to-kilowatt-secondary/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Costos y Financiamiento de Placas Solares en Puerto Rico
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Rangos de Precio por Tamaño de Sistema</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Sistema 5kW (casa pequeña):</span>
                    <span className="font-semibold">$15,000 - $20,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sistema 8kW (casa mediana):</span>
                    <span className="font-semibold">$22,000 - $28,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sistema 12kW (casa grande):</span>
                    <span className="font-semibold">$30,000 - $38,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Batería Tesla Powerwall:</span>
                    <span className="font-semibold">+$12,000 - $15,000</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Opciones de Financiamiento</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Pago en efectivo:</strong> Máximo ahorro, ROI en 5-6 años</li>
                  <li>• <strong>Préstamos solares:</strong> 0% interés primeros 18 meses</li>
                  <li>• <strong>PACE Financing:</strong> Pago a través de CRIM por 20 años</li>
                  <li>• <strong>Power Purchase Agreement (PPA):</strong> $0 de pago inicial</li>
                  <li>• <strong>Crédito federal:</strong> 30% del costo total hasta 2032</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Maintenance Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Mantenimiento de Placas Solares en Puerto Rico
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl">
                <Wrench className="w-10 h-10 text-kilowatt-primary mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">Lavado Regular</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En Puerto Rico, el polvo del Sahara, salitre y lluvia constante requieren lavado cada 6-8 meses. 
                  En zonas costeras como Rincón, Aguadilla o Cabo Rojo, recomendamos cada 4-6 meses.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Aumenta eficiencia hasta 15%</li>
                  <li>• Usa agua desionizada y cepillos suaves</li>
                  <li>• Inspección de conexiones incluida</li>
                </ul>
              </div>
              
              <div className="glass p-6 rounded-2xl">
                <Clock className="w-10 h-10 text-kilowatt-secondary mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">Inspecciones Anuales</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Revisión completa del sistema incluyendo paneles, inversores, cableado y sistema de monitoreo. 
                  Especialmente importante después de temporada de huracanes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Verificación de garantías</li>
                  <li>• Análisis de rendimiento</li>
                  <li>• Reporte detallado con fotos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Local Areas Served */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Instalación de Placas Solares por Municipio en Puerto Rico
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                "San Juan", "Bayamón", "Carolina", "Ponce", "Caguas", "Guaynabo",
                "Mayagüez", "Trujillo Alto", "Arecibo", "Aguadilla", "Dorado", "Cayey",
                "Humacao", "Manatí", "Vega Alta", "Toa Baja", "Isabela", "Rincón",
                "Cabo Rojo", "Yauco", "Juana Díaz", "Cidra", "Fajardo", "Culebra"
              ].map((city, index) => (
                <div key={index} className="glass p-3 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">{city}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
              Servimos todos los municipios de Puerto Rico con equipos locales especializados en instalación 
              de placas solares. Desde las montañas de Cayey hasta las costas de Cabo Rojo, llevamos energía 
              solar a tu hogar con la misma calidad y profesionalismo.
            </p>
          </section>
          
        </article>
      </div>
    </section>
  );
};

export default ContentSection;