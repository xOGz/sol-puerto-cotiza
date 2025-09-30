import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es requerido").max(100, "El nombre debe tener menos de 100 caracteres"),
  email: z.string().trim().email("Correo electrónico inválido").max(255, "El correo debe tener menos de 255 caracteres"),
  telefono: z.string().trim().max(20, "El teléfono debe tener menos de 20 caracteres").optional(),
  municipio: z.string().trim().max(100, "El municipio debe tener menos de 100 caracteres").optional(),
  asunto: z.string().trim().max(200, "El asunto debe tener menos de 200 caracteres").optional(),
  mensaje: z.string().trim().min(1, "El mensaje es requerido").max(1000, "El mensaje debe tener menos de 1000 caracteres"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    municipio: "",
    asunto: "",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const municipios = [
    "San Juan", "Bayamón", "Carolina", "Ponce", "Caguas", "Guaynabo", "Arecibo", 
    "Toa Baja", "Mayagüez", "Trujillo Alto", "Cayey", "Aguadilla", "Humacao", 
    "Vega Alta", "Manati", "Dorado", "Vega Baja", "Coamo", "Cidra", "Fajardo"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono || undefined,
        municipio: formData.municipio || undefined,
        asunto: formData.asunto || undefined,
        mensaje: formData.mensaje,
      });

      // Insert into database
      const { error } = await supabase
        .from('contactos')
        .insert([{
          nombre: validatedData.nombre,
          email: validatedData.email,
          telefono: validatedData.telefono || null,
          municipio: validatedData.municipio || null,
          asunto: validatedData.asunto || null,
          mensaje: validatedData.mensaje,
        }]);

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        municipio: "",
        asunto: "",
        mensaje: ""
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error de validación",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO 
        title="Contáctanos | Cotización Placas Solares Puerto Rico"
        description="Solicita tu cotización gratuita de placas solares en Puerto Rico. Te asesoramos en instalación, baterías y ahorro energético."
        canonicalPath="/contact"
      />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-solar-50 to-ocean-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              ¿Listo para comenzar tu transformación solar? Nuestro equipo de expertos está aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="glass p-8 md:p-12 rounded-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Envíanos un mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        id="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData(prev => ({ ...prev, telefono: e.target.value }))}
                        placeholder="(787) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="municipio" className="block text-sm font-medium text-gray-700 mb-2">
                        Municipio
                      </label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, municipio: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu municipio" />
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50">
                          {municipios.map((municipio) => (
                            <SelectItem key={municipio} value={municipio}>
                              {municipio}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto
                      </label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, asunto: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50">
                          <SelectItem value="cotizacion">Cotización</SelectItem>
                          <SelectItem value="informacion">Información general</SelectItem>
                          <SelectItem value="soporte">Soporte técnico</SelectItem>
                          <SelectItem value="financiamiento">Financiamiento</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData(prev => ({ ...prev, mensaje: e.target.value }))}
                      placeholder="Cuéntanos sobre tu proyecto solar..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-solar-500 to-solar-600 hover:from-solar-600 hover:to-solar-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Información de contacto
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Estamos aquí para responder todas tus preguntas sobre energía solar. 
                    Contáctanos por cualquiera de estos medios.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-solar-500 to-solar-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                      <p className="text-gray-600">(787) 555-0123</p>
                      <p className="text-sm text-gray-500">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@kilowattpr.com</p>
                      <p className="text-sm text-gray-500">Respuesta en menos de 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Correo o dirección postal</h3>
                      <p className="text-gray-600">
                        123 Calle Solar<br />
                        San Juan, PR 00926
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Horario de atención</h3>
                      <p className="text-gray-600">
                        Lunes - Viernes: 8:00 AM - 5:00 PM<br />
                        Sábados: 9:00 AM - 2:00 PM<br />
                        Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="glass p-6 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-4">Áreas de servicio</h3>
                  <p className="text-gray-600 mb-4">
                    Ofrecemos servicios de instalación solar en toda la isla de Puerto Rico
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Área Metropolitana</div>
                    <div>• Oeste de PR</div>
                    <div>• Norte de PR</div>
                    <div>• Sur de PR</div>
                    <div>• Este de PR</div>
                    <div>• Región Central</div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="glass p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Emergencias técnicas</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Para problemas urgentes con sistemas ya instalados
                  </p>
                  <a 
                    href="tel:+17875551234" 
                    className="inline-flex items-center text-red-600 font-medium"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (787) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir Kilowatt PR para tu proyecto solar?
              </h2>
              <p className="text-lg text-gray-600">
                Somos la empresa #1 en instalación de placas solares en Puerto Rico, 
                con más de 15 años de experiencia y miles de familias satisfechas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="glass p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">15+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Años de experiencia</h3>
                <p className="text-gray-600 text-sm">
                  Instalando sistemas solares en Puerto Rico desde 2008, conocemos perfectamente 
                  las condiciones climáticas y regulaciones locales.
                </p>
              </div>
              
              <div className="glass p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">3K+</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Familias satisfechas</h3>
                <p className="text-gray-600 text-sm">
                  Más de 3,000 familias en Puerto Rico ya están ahorrando con nuestros 
                  sistemas solares de alta calidad y servicio excepcional.
                </p>
              </div>
              
              <div className="glass p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">25</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Años de garantía</h3>
                <p className="text-gray-600 text-sm">
                  Ofrecemos garantía de 25 años en paneles y 10 años en inversores, 
                  respaldando tu inversión a largo plazo.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nuestro proceso paso a paso
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Consulta inicial</h4>
                  <p className="text-gray-600 text-sm">
                    Evaluamos tu consumo eléctrico, inspeccionamos tu techo y diseñamos el sistema perfecto.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Diseño personalizado</h4>
                  <p className="text-gray-600 text-sm">
                    Creamos un diseño 3D específico para tu hogar y calculamos tus ahorros proyectados.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Instalación profesional</h4>
                  <p className="text-gray-600 text-sm">
                    Nuestro equipo certificado instala tu sistema con los más altos estándares de calidad.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Soporte continuo</h4>
                  <p className="text-gray-600 text-sm">
                    Monitoreo 24/7, mantenimiento programado y soporte técnico de por vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visítanos en Aguada, Puerto Rico</h2>
            <p className="text-lg text-gray-600">
              Nuestra oficina principal está ubicada en Aguada, pero servimos toda la isla de Puerto Rico
            </p>
          </div>
          
          <div className="glass rounded-3xl overflow-hidden h-96 animate-fade-in-up mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8447168123!2d-66.10572!3d18.4655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzU1LjgiTiA2NsKwMDYnMjAuNiJX!5e0!3m2!1sen!2spr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Kilowatt PR en Aguada, Puerto Rico"
            />
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              <strong>Dirección:</strong> HC 3 Box 31767, Aguada, PR 00602<br />
              <strong>Horario:</strong> Lunes a Viernes 8:00 AM - 5:00 PM | Sábados 9:00 AM - 2:00 PM
            </p>
            <p className="text-sm text-gray-500">
              Aunque nuestra oficina está en Aguada, realizamos instalaciones en todos los 78 municipios de Puerto Rico. 
              Nuestro equipo viaja a cualquier lugar de la isla para brindarte el mejor servicio.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
