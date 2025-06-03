
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ContactInfoCard from "@/components/ContactInfoCard";
import TrustBadges from "@/components/TrustBadges";

const LeadCaptureSection = () => {
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
            <LeadCaptureForm />
            
            <div>
              <ContactInfoCard />
              <div className="mt-8">
                <TrustBadges />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
