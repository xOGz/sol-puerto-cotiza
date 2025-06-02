
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const LeadCaptureSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    municipio: "",
    consumo: ""
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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      
      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactaremos en menos de 24 horas con tu cotización personalizada.",
      });

      // Reset form
      setFormData({
        nombre: "",
        telefono: "",
        municipio: "",
        consumo: ""
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cotizacion" className="section-spacing bg-gradient-to-br from-solar-50 to-ocean-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cotización gratis en menos de 24 horas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Completa el formulario y recibe una cotización personalizada para tu hogar. 
              Sin compromiso, sin costos ocultos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="glass p-8 md:p-12 rounded-3xl animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full"
                    placeholder="Ej: María González"
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
                    className="w-full"
                    placeholder="Ej: (787) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="municipio" className="block text-sm font-medium text-gray-700 mb-2">
                    Municipio *
                  </label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, municipio: value }))}>
                    <SelectTrigger className="w-full">
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
                  <label htmlFor="consumo" className="block text-sm font-medium text-gray-700 mb-2">
                    Factura mensual promedio *
                  </label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, consumo: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona tu rango" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="menos-100">Menos de $100</SelectItem>
                      <SelectItem value="100-200">$100 - $200</SelectItem>
                      <SelectItem value="200-300">$200 - $300</SelectItem>
                      <SelectItem value="300-400">$300 - $400</SelectItem>
                      <SelectItem value="400-500">$400 - $500</SelectItem>
                      <SelectItem value="mas-500">Más de $500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-solar-500 to-solar-600 hover:from-solar-600 hover:to-solar-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 animate-glow"
                >
                  {isSubmitting ? "Enviando..." : "Obtener mi cotización gratis"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas que te contactemos para brindarte información sobre nuestros servicios.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  ¿Prefieres hablar directamente?
                </h3>
                <p className="text-gray-600 mb-8">
                  Nuestro equipo de expertos está disponible para resolver todas tus preguntas sobre energía solar.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-solar-500 to-solar-600 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="text-gray-600">(787) 555-0123</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@kilowattpr.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Oficina principal</div>
                    <div className="text-gray-600">123 Calle Solar, San Juan, PR 00926</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Horario</div>
                    <div className="text-gray-600">Lun - Vie: 8:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="glass p-6 rounded-2xl">
                <div className="text-center mb-4">
                  <div className="font-semibold text-gray-900">Respuesta garantizada</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-bold text-solar-500">&lt; 2h</div>
                    <div className="text-gray-600">Respuesta inicial</div>
                  </div>
                  <div>
                    <div className="font-bold text-solar-500">&lt; 24h</div>
                    <div className="text-gray-600">Cotización completa</div>
                  </div>
                  <div>
                    <div className="font-bold text-solar-500">&lt; 48h</div>
                    <div className="text-gray-600">Visita programada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
