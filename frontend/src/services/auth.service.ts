import { signInWithPopup } from "firebase/auth";

import api from "./api";
import { getFirebaseAuth, googleProvider } from "./firebase";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  authProvider: "local" | "google";
};

export type AuthResponse = {
  success: boolean;
  token: string;
  user: AuthUser;
};

export const loginWithEmail = async (email: string, password: string) => {
  const { data } = await api.post<AuthResponse>("/auth/login", {
    email,
    password,
  });

  return data;
};

export const registerWithEmail = async (
  name: string,
  email: string,
  password: string
) => {
  const { data } = await api.post<AuthResponse>("/auth/register", {
    name,
    email,
    password,
  });

  return data;
};

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(getFirebaseAuth(), googleProvider);
  const idToken = await result.user.getIdToken();

  const { data } = await api.post<AuthResponse>("/auth/google", {
    idToken,
  });

  return data;
};
