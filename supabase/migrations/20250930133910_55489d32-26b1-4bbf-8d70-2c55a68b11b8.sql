-- Add missing RLS policy to prevent public access to newsletter subscriber data
CREATE POLICY "Deny public read on newsletter" 
ON public.newsletter 
FOR SELECT 
USING (false);

-- This ensures subscriber emails and personal information are not exposed to public queries
-- Only authenticated admin users should access this data through secure admin interfaces