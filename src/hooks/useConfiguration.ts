
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useConfiguration = () => {
  return useQuery({
    queryKey: ['configuration'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('configuraciones')
        .select('*');

      if (error) {
        console.error('Error fetching configuration:', error);
        throw error;
      }

      // Convert array to object for easier access
      const config: Record<string, string> = {};
      data?.forEach(item => {
        if (item.clave && item.valor) {
          config[item.clave] = item.valor;
        }
      });

      return config;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
