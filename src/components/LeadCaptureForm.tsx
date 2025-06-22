
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLeadSubmission } from "@/hooks/useLeadSubmission";
import { CheckCircle, Shield, Clock } from "lucide-react";

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    municipio: "",
    consumo: "$200-300",
    tipoPropiedad: "Casa"
  });
  const { submitLead, isSubmitting } = useLeadSubmission();

  const municipios = [
    "Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Arecibo", 
    "Arroyo", "Barceloneta", "Barranquitas", "Bayamón", "Cabo Rojo", "Caguas", 
    "Camuy", "Canóvanas", "Carolina", "Cataño", "Cayey", "Cidra", "Coamo", 
    "Comerío", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guánica", 
    "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", 
    "Humacao", "Isabela", "Jayuya", "Juana Díaz", "Juncos", "Lajas", "Lares", 
    "Las Marías", "Las Piedras", "Loíza", "Luquillo", "Manatí", "Maricao", 
    "Maunabo", "Mayagüez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", 
    "Patillas", "Peñuelas", "Ponce", "Quebradillas", "Rincón", "Río Grande", 
    "Sabana Grande", "Salinas", "San Germán", "San Juan", "San Lorenzo", 
    "San Sebastián", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", 
    "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"
  ];

  const rangosConsumo = [
    "Menos de $100",
    "$100-200", 
    "$200-300",
    "$300-500",
    "Más de $500"
  ];

  const tiposPropiedad = [
    "Casa",
    "Apartamento", 
    "Negocio pequeño",
    "Comercial"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enhanced lead data for automation
    const leadData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: "Website Landing Page",
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'organic',
      page_url: window.location.href
    };
    
    const result = await submitLead(leadData);
    
    if (result.success) {
      // Reset form and show success message
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        municipio: "",
        consumo: "$200-300",
        tipoPropiedad: "Casa"
      });

      // Trigger potential webhook for automation (n8n/Zapier ready)
      try {
        const webhookUrl = process.env.REACT_APP_WEBHOOK_URL;
        if (webhookUrl) {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leadData)
          });
        }
      } catch (error) {
        console.log('Webhook not configured or failed:', error);
      }
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in-up border-4 border-green-200">
      {/* Trust indicators */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <div className="flex items-center text-green-600">
          <Shield className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">100% Seguro</span>
        </div>
        <div className="flex items-center text-green-600">
          <Clock className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Respuesta en 2hrs</span>
        </div>
        <div className="flex items-center text-green-600">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Sin compromiso</span>
        </div>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Cotización Gratuita de Placas Solares
        </h3>
        <p className="text-gray-700">
          Descubre cuánto puedes ahorrar con energía solar en Puerto Rico
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-bold text-gray-900 mb-2">
            Nombre completo *
          </label>
          <Input
            id="nombre"
            type="text"
            required
            value={formData.nombre}
            onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
            className="w-full h-12 text-lg border-2 border-gray-300 focus:border-green-500"
            placeholder="Ej: Juan Pérez Rivera"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-bold text-gray-900 mb-2">
            Teléfono (para WhatsApp) *
          </label>
          <Input
            id="telefono"
            type="tel"
            required
            value={formData.telefono}
            onChange={(e) => setFormData(prev => ({ ...prev, telefono: e.target.value }))}
            className="w-full h-12 text-lg border-2 border-gray-300 focus:border-green-500"
            placeholder="Ej: (787) 555-0123"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full h-12 text-lg border-2 border-gray-300 focus:border-green-500"
            placeholder="Ej: juan@email.com"
          />
        </div>

        <div>
          <label htmlFor="municipio" className="block text-sm font-bold text-gray-900 mb-2">
            Pueblo/Municipio *
          </label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, municipio: value }))}>
            <SelectTrigger className="w-full h-12 text-lg border-2 border-gray-300 focus:border-green-500">
              <SelectValue placeholder="Selecciona tu pueblo" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50 max-h-60">
              {municipios.map((municipio) => (
                <SelectItem key={municipio} value={municipio}>
                  {municipio}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="tipoPropiedad" className="block text-sm font-bold text-gray-900 mb-2">
            Tipo de propiedad *
          </label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, tipoPropiedad: value }))}>
            <SelectTrigger className="w-full h-12 text-lg border-2 border-gray-300 focus:border-green-500">
              <SelectValue placeholder="Selecciona tipo de propiedad" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              {tiposPropiedad.map((tipo) => (
                <SelectItem key={tipo} value={tipo}>
                  {tipo}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="consumo" className="block text-sm font-bold text-gray-900 mb-2">
            ¿Cuánto pagas de luz al mes? *
          </label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, consumo: value }))}>
            <SelectTrigger className="w-full h-12 text-lg border-2 border-gray-300 focus:border-green-500">
              <SelectValue placeholder="Selecciona tu rango" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              {rangosConsumo.map((rango) => (
                <SelectItem key={rango} value={rango}>
                  {rango}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white py-6 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          {isSubmitting ? "Enviando cotización..." : "📞 Obtén tu cotización GRATIS"}
        </Button>

        <div className="text-center">
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            ✓ Información 100% confidencial y segura<br/>
            ✓ Te contactamos en menos de 2 horas<br/>
            ✓ Sin spam, sin compromisos, sin letra pequeña
          </p>
          <div className="flex justify-center items-center text-xs text-gray-500">
            <Shield className="w-3 h-3 mr-1" />
            <span>Protegemos tu privacidad</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
