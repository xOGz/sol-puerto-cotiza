
const TrustBadges = () => {
  return (
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
  );
};

export default TrustBadges;
