import type {
  AuthResponse,
  AuthUser,
} from "../services/auth.service";

// ============================================
// LOCAL STORAGE
// ============================================

export const saveAuthSession = ({
  user,
  token,
}: {
  user: AuthUser;
  token: string;
}) => {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
  localStorage.setItem("nestsure_token", token);
};

// ============================================
// SESSION STORAGE
// ============================================

export const saveSessionAuth = ({
  user,
  token,
}: {
  user: AuthUser;
  token: string;
}) => {
  sessionStorage.setItem(
    "user",
    JSON.stringify(user)
  );
  sessionStorage.setItem("nestsure_token", token);
};

// ============================================
// GET USER
// ============================================

export const getAuthUser = (): AuthUser | null => {
  const user =
    localStorage.getItem("user") ||
    sessionStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

// ============================================
// GET TOKEN
// ============================================

export const getAuthToken = (): string | null => {
  return (
    localStorage.getItem("nestsure_token") ||
    sessionStorage.getItem("nestsure_token")
  );
};

// ============================================
// LOGOUT
// ============================================

export const clearAuth = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("nestsure_token");

  sessionStorage.removeItem("user");
  sessionStorage.removeItem("nestsure_token");
};