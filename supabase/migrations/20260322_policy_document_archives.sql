-- Prior PDF versions when a policy document file is replaced (admin-visible archive; public unlisted URLs)
create table if not exists public.policy_document_archives (
  id uuid primary key default gen_random_uuid(),
  policy_document_id uuid not null references public.policy_documents (id) on delete cascade,
  file_url text not null,
  filename text not null,
  archived_at timestamptz not null default now()
);

create index if not exists policy_document_archives_policy_id_idx
  on public.policy_document_archives (policy_document_id);

create index if not exists policy_document_archives_archived_at_idx
  on public.policy_document_archives (archived_at desc);

comment on table public.policy_document_archives is 'Superseded policy PDFs; not listed publicly except via stable /api/.../archive/.../file links.';
