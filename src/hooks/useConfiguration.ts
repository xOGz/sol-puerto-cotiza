import { useQuery } from "@tanstack/react-query";

export const useConfiguration = () => {
  return useQuery<{ [key: string]: string }>({
    queryKey: ['configuration'],
    queryFn: async () => {
      try {
        const res = await fetch('/config.json', { cache: 'force-cache' });
        if (!res.ok) throw new Error('Failed to load /config.json');
        const json = await res.json();
        const config: Record<string, string> = {};
        Object.entries(json).forEach(([k, v]) => {
          if (v !== undefined && v !== null) config[k] = String(v);
        });
        return config;
      } catch (error) {
        console.warn('Configuration not available, using defaults:', error);
        return {} as Record<string, string>;
      }
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
