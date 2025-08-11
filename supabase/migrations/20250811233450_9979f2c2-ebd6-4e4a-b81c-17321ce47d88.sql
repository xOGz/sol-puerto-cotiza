-- Ensure an explicit deny policy exists to satisfy linter while keeping data private
DROP POLICY IF EXISTS "Deny all selects by default" ON public.configuraciones;
CREATE POLICY "Deny all selects by default"
ON public.configuraciones
FOR SELECT
TO authenticated
USING (false);
