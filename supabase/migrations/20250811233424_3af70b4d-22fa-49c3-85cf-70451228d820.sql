-- Add an explicit deny policy to satisfy linter while keeping data private
CREATE POLICY IF NOT EXISTS "Deny all selects by default"
ON public.configuraciones
FOR SELECT
TO authenticated
USING (false);

-- Note: No anon policy exists; anon cannot select. Authenticated also cannot select due to false condition.