import { Button } from "./ui/button";
import { Phone, MessageSquare } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  showWhatsApp?: boolean;
  utmCampaign?: string;
}

export default function CTASection({
  title = "¿Listo para ahorrar con energía solar?",
  description = "Obtenga una cotización gratuita sin compromiso. Nuestro equipo de expertos diseñará un sistema personalizado para sus necesidades.",
  primaryText = "Cotización GRATIS",
  secondaryText = "Llamar Ahora",
  showWhatsApp = true,
  utmCampaign = "cta-section"
}: CTASectionProps) {
  const phoneNumber = "17871234567"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Hola, me interesa obtener una cotización para un sistema de placas solares."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}&utm_source=seo-local&utm_medium=whatsapp&utm_campaign=${utmCampaign}`;

  const handleCTAClick = () => {
    // GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'CTA',
        event_label: utmCampaign,
        value: 1
      });
    }
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-kilowatt-primary/10 via-background to-kilowatt-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 w-full sm:w-auto"
              onClick={() => {
                handleCTAClick();
                document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              {primaryText}
            </Button>
            {showWhatsApp && (
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 w-full sm:w-auto border-2"
                asChild
                onClick={handleCTAClick}
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  {secondaryText}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}