import type {
  AuthResponse,
  AuthUser,
} from "../services/auth.service";

// ============================================
// LOCAL STORAGE
// ============================================

export const saveAuthSession = ({
  user,
}: AuthResponse) => {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
};

// ============================================
// SESSION STORAGE
// ============================================

export const saveSessionAuth = ({
  user,
}: AuthResponse) => {
  sessionStorage.setItem(
    "user",
    JSON.stringify(user)
  );
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
// LOGOUT
// ============================================

export const clearAuth = () => {
  localStorage.removeItem("user");

  sessionStorage.removeItem("user");
};