import { useEffect } from "react";

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  areaServed?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function ServiceSchema({
  serviceName,
  serviceDescription,
  areaServed = "Puerto Rico",
  faqs = []
}: ServiceSchemaProps) {
  useEffect(() => {
    // LocalBusiness Schema
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Kilowatt PR LLC",
      "image": "https://kilowattpr.com/kilowatt-logo.png",
      "@id": "https://kilowattpr.com",
      "url": "https://kilowattpr.com",
      "telephone": "+1-787-123-4567",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Carretera 110",
        "addressLocality": "Aguadilla",
        "addressRegion": "PR",
        "postalCode": "00603",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.4274,
        "longitude": -67.1541
      },
      "areaServed": {
        "@type": "State",
        "name": areaServed
      },
      "sameAs": [
        "https://www.facebook.com/kilowattpr"
      ]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceName,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Kilowatt PR LLC"
      },
      "description": serviceDescription,
      "areaServed": {
        "@type": "State",
        "name": areaServed
      }
    };

    // FAQPage Schema (if FAQs provided)
    const faqSchema = faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    } : null;

    // Inject schemas
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    const schemas: any[] = [businessSchema, serviceSchema];
    if (faqSchema) schemas.push(faqSchema);
    schemaScript.text = JSON.stringify(schemas);
    schemaScript.id = "service-schema";
    
    // Remove existing schema if present
    const existing = document.getElementById("service-schema");
    if (existing) existing.remove();
    
    document.head.appendChild(schemaScript);

    return () => {
      const script = document.getElementById("service-schema");
      if (script) script.remove();
    };
  }, [serviceName, serviceDescription, areaServed, faqs]);

  return null;
}