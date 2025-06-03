
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLeadSubmission } from "@/hooks/useLeadSubmission";

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    municipio: "",
    consumo: ""
  });
  const { submitLead, isSubmitting } = useLeadSubmission();

  const municipios = [
    "San Juan", "Bayamón", "Carolina", "Ponce", "Caguas", "Guaynabo", "Arecibo", 
    "Toa Baja", "Mayagüez", "Trujillo Alto", "Cayey", "Aguadilla", "Humacao", 
    "Vega Alta", "Manati", "Dorado", "Vega Baja", "Coamo", "Cidra", "Fajardo"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitLead(formData);
    
    if (result.success) {
      // Reset form on success
      setFormData({
        nombre: "",
        telefono: "",
        municipio: "",
        consumo: ""
      });
    }
  };

  return (
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
  );
};

export default LeadCaptureForm;
