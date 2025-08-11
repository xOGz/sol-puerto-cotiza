-- Tighten security: remove public read access to configuration data
-- Drop overly permissive public read policy on configuraciones
DROP POLICY IF EXISTS "Allow public read on configuraciones" ON public.configuraciones;

-- Ensure RLS is enabled (it already should be, but keep for safety)
ALTER TABLE public.configuraciones ENABLE ROW LEVEL SECURITY;

-- Note: No public SELECT policy is re-created; table is now non-readable by anon users.
-- If admin access is needed later, implement authenticated policies and auth first.