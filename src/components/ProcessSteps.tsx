import { Check, FileText, Wrench, CheckCircle, Phone } from "lucide-react";

interface ProcessStepsProps {
  title?: string;
  steps?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const defaultSteps = [
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Consulta y Levantamiento",
    description: "Visitamos su propiedad para evaluar el techo, consumo eléctrico y necesidades específicas. Totalmente gratis y sin compromiso."
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Diseño y Propuesta",
    description: "Creamos un diseño personalizado con proyecciones de ahorro, opciones de financiamiento y cotización detallada."
  },
  {
    icon: <Check className="h-8 w-8" />,
    title: "Permisos y Aprobaciones",
    description: "Gestionamos todos los permisos municipales y de LUMA Energy. Nos encargamos de todo el papeleo por usted."
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Instalación Profesional",
    description: "Nuestro equipo certificado instala el sistema completo en 2-4 días, cumpliendo todos los códigos de seguridad."
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Activación y Monitoreo",
    description: "Coordinamos la inspección final, activamos net metering con LUMA y configuramos el monitoreo remoto de su sistema."
  }
];

export default function ProcessSteps({ 
  title = "Nuestro Proceso en 5 Pasos", 
  steps = defaultSteps 
}: ProcessStepsProps) {
  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-kilowatt-primary/10 flex items-center justify-center text-kilowatt-primary mb-4">
                  {step.icon}
                </div>
                <div className="absolute top-6 left-[60%] w-full h-0.5 bg-kilowatt-primary/20 hidden lg:block last:hidden" />
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}