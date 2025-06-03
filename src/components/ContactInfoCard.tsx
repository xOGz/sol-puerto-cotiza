
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useConfiguration } from "@/hooks/useConfiguration";

const ContactInfoCard = () => {
  const { data: config } = useConfiguration();

  return (
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
            <div className="text-gray-600">{config?.empresa_telefono || "(787) 555-0123"}</div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-xl flex items-center justify-center mr-4">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Email</div>
            <div className="text-gray-600">{config?.empresa_email || "info@kilowattpr.com"}</div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Oficina principal</div>
            <div className="text-gray-600">{config?.empresa_direccion || "123 Calle Solar, San Juan, PR 00926"}</div>
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
    </div>
  );
};

export default ContactInfoCard;
