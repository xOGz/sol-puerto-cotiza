-- Secure leads table: explicitly deny public SELECT while keeping public INSERT
-- 1) Ensure RLS is enabled
alter table public.leads enable row level security;

-- 2) Remove any permissive SELECT policies if they exist (idempotent)
-- Note: We guard drops to avoid errors if policies are not present
do $$
begin
  if exists (
    select 1 from pg_policies p
    join pg_class c on p.tablename = c.relname
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and p.tablename = 'leads' and p.cmd = 'select' and p.permissive = true
  ) then
    -- Drop all existing SELECT policies on leads
    execute (
      select string_agg('drop policy ' || quote_ident(pol.policyname) || ' on public.leads;', ' ')
      from (
        select p.policyname
        from pg_policies p
        join pg_class c on p.tablename = c.relname
        join pg_namespace n on n.oid = c.relnamespace
        where n.nspname = 'public' and p.tablename = 'leads' and p.cmd = 'select'
      ) as pol
    );
  end if;
exception when others then
  -- If we can't introspect/detect, continue; we'll still add explicit deny policy next
  null;
end $$;

-- 3) Create explicit deny policy for SELECT (defense-in-depth)
-- If a policy with the same name exists, replace it
drop policy if exists "Deny public read on leads" on public.leads;
create policy "Deny public read on leads"
on public.leads
for select
using (false);

-- 4) Ensure public can still INSERT (existing policy may already exist; keep idempotent)
-- Recreate the insert policy to be explicit and safe
drop policy if exists "Allow public insert on leads" on public.leads;
create policy "Allow public insert on leads"
on public.leads
for insert
with check (true);
