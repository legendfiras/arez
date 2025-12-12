const ADMIN_STORAGE_KEY = 'arez_admin_logged_in';

const ADMIN_EMAIL =
  process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@arezrealestate.com';
const ADMIN_PASSWORD =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

export function loginAdmin(email: string, password: string): boolean {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(ADMIN_STORAGE_KEY, 'true');
    }
    return true;
  }
  return false;
}

export function logoutAdmin(): void {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(ADMIN_STORAGE_KEY);
  }
}

export function isAdminLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
}