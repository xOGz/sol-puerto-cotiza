
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLeadSubmission } from "@/hooks/useLeadSubmission";

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    municipio: "",
    consumo: "200-300"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitLead(formData);
    
    if (result.success) {
      // Reset form on success
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        municipio: "",
        consumo: "200-300"
      });
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in-up border-4 border-orange-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Empieza a ahorrar hoy mismo
        </h3>
        <p className="text-gray-700">
          Completa el formulario y recibe tu cotización personalizada
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
            className="w-full h-12 text-lg border-2 border-gray-300 focus:border-orange-500"
            placeholder="Ej: Juan Pérez Rivera"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-bold text-gray-900 mb-2">
            Teléfono *
          </label>
          <Input
            id="telefono"
            type="tel"
            required
            value={formData.telefono}
            onChange={(e) => setFormData(prev => ({ ...prev, telefono: e.target.value }))}
            className="w-full h-12 text-lg border-2 border-gray-300 focus:border-orange-500"
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
            className="w-full h-12 text-lg border-2 border-gray-300 focus:border-orange-500"
            placeholder="Ej: juan@email.com"
          />
        </div>

        <div>
          <label htmlFor="municipio" className="block text-sm font-bold text-gray-900 mb-2">
            Pueblo/Municipio *
          </label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, municipio: value }))}>
            <SelectTrigger className="w-full h-12 text-lg border-2 border-gray-300 focus:border-orange-500">
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
          <label htmlFor="consumo" className="block text-sm font-bold text-gray-900 mb-2">
            ¿Cuánto pagas de luz al mes? *
          </label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, consumo: value }))}>
            <SelectTrigger className="w-full h-12 text-lg border-2 border-gray-300 focus:border-orange-500">
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
          className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white py-6 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          {isSubmitting ? "Enviando..." : "Obtén mi cotización gratis"}
        </Button>

        <p className="text-xs text-gray-600 text-center leading-relaxed">
          Al enviar este formulario, aceptas que te contactemos para brindarte información sobre nuestros servicios de placas solares. 
          <span className="font-bold"> Sin spam, sin compromisos.</span>
        </p>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
