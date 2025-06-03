
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useLeadSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitLead = async (formData: {
    nombre: string;
    telefono: string;
    municipio: string;
    consumo: string;
    email?: string;
    mensaje?: string;
  }) => {
    setIsSubmitting(true);

    try {
      // Get user's IP and user agent for analytics
      const userAgent = navigator.userAgent;
      
      const { data, error } = await supabase
        .from('leads')
        .insert([{
          nombre: formData.nombre,
          telefono: formData.telefono,
          municipio: formData.municipio,
          consumo: formData.consumo,
          email: formData.email || null,
          mensaje: formData.mensaje || null,
          user_agent: userAgent
        }]);

      if (error) {
        console.error('Error submitting lead:', error);
        throw error;
      }

      // Track analytics
      await supabase.from('analytics').insert([{
        pagina: window.location.pathname,
        user_agent: userAgent,
        referrer: document.referrer || null,
        utm_source: new URLSearchParams(window.location.search).get('utm_source'),
        utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign')
      }]);

      toast({
        title: "¡Solicitud enviada!",
        description: "Te contactaremos en menos de 24 horas con tu cotización personalizada.",
      });

      return { success: true, data };
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitLead, isSubmitting };
};
