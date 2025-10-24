
import { Shield, Award, Users, Star } from "lucide-react";

// Import logos
import lumaLogo from "@/assets/logos/luma-energy-logo.svg";
import necLogo from "@/assets/logos/nec-logo.png";
import bbbLogo from "@/assets/logos/bbb-accredited.png";
import hudLogo from "@/assets/logos/hud-logo.png";
import elNuevoDiaLogo from "@/assets/logos/el-nuevo-dia-logo.svg";
import telemundoLogo from "@/assets/logos/telemundo-original-logo.svg";
import wapaLogo from "@/assets/logos/wapa-tv-original-logo.png";
import primeraHoraLogo from "@/assets/logos/primera-hora-original-logo.png";

const TrustSection = () => {
  const certifications = [
    { name: "LUMA Energy", logo: lumaLogo },
    { name: "NEC Certified", logo: necLogo },
    { name: "CDBG Approved", logo: hudLogo },
    { name: "Better Business Bureau", logo: bbbLogo }
  ];

  const mediaLogos = [
    { name: "El Nuevo Día", logo: elNuevoDiaLogo },
    { name: "Telemundo PR", logo: telemundoLogo },
    { name: "WAPA TV", logo: wapaLogo },
    { name: "Primera Hora", logo: primeraHoraLogo }
  ];

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Confiado por cientos de familias puertorriqueñas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos la empresa de energía solar más confiable de Puerto Rico, certificada y respaldada por las mejores instituciones.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center glass p-6 rounded-2xl animate-fade-in-up">
            <Users className="w-8 h-8 text-solar-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-gray-600 text-sm">Familias servidas</div>
          </div>
          <div className="text-center glass p-6 rounded-2xl animate-fade-in-up">
            <Star className="w-8 h-8 text-solar-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">4.9</div>
            <div className="text-gray-600 text-sm">Rating promedio</div>
          </div>
          <div className="text-center glass p-6 rounded-2xl animate-fade-in-up">
            <Award className="w-8 h-8 text-solar-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900 mb-1">0</div>
            <div className="text-gray-600 text-sm">Reclamos garantía</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">Certificaciones y acreditaciones</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center glass p-4 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="h-12 flex items-center justify-center mb-3">
                  <img src={cert.logo} alt={`${cert.name} - Certificación placas solares Puerto Rico`} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="text-sm font-medium text-gray-700">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Mentions */}
        <div>
          <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">Mencionados en</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaLogos.map((media, index) => (
              <div key={index} className="text-center glass p-4 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="h-12 flex items-center justify-center mb-3">
                  <img src={media.logo} alt={`${media.name} - Kilowatt PR placas solares Puerto Rico`} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="text-sm font-medium text-gray-700">{media.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
