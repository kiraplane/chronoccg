export const localizedCoreRoutes = ['/', '/codes', '/tier-list', '/discord'];

export function isLocalizedCoreRoute(pathname?: string) {
  const normalized = !pathname || pathname === '' ? '/' : pathname;
  return localizedCoreRoutes.includes(normalized.replace(/\/$/, '') || '/');
}
