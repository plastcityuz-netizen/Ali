# BALANS AI architecture notes

- Database is PostgreSQL-only via Prisma. The schema is intentionally not imported by client components.
- Tenant identity must be resolved from the authenticated server session; never accept `companyId` from a browser payload.
- Protected route handlers should compose `requireSession()`, `requireMembership(companyId)` and `requirePermission(action, resource)` before any query.
- AI CFO must receive a permission-filtered context, and mutations require explicit confirmation plus approval policy checks.
- Storage integrations are server-only and should use signed URLs. No persistent business data is stored in browser storage.

The dashboard currently runs in an explicitly-labelled demo mode while backend credentials are not configured.
