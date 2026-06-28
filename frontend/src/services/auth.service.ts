import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";

import { auth } from "../config/firebase";
import api from "./api";

const provider = new GoogleAuthProvider();

export type AuthUser = {
  id: string;
  name: string | null;
  email: string | null;
  authProvider: string;
};

export type AuthResponse = {
  success: boolean;
  user: AuthUser;
  token: string;
};

// ============================================
// EMAIL LOGIN
// ============================================

export const loginWithEmail = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await api.post("/auth/login", { email, password });

    return {
      success: true,
      user: {
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
        authProvider: response.data.user.authProvider,
      },
      token: response.data.token,
    };
  } catch (error: any) {
    console.error(error);
    // Extract error message from response if available
    const message =
      error.response?.data?.message || "Login failed. Please try again.";
    throw new Error(message);
  }
};

// ============================================
// EMAIL REGISTER
// ============================================

export const registerWithEmail = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });

    return {
      success: true,
      user: {
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
        authProvider: response.data.user.authProvider,
      },
      token: response.data.token,
    };
  } catch (error: any) {
    console.error(error);
    const message =
      error.response?.data?.message || "Registration failed. Please try again.";
    throw new Error(message);
  }
};

// ============================================
// GOOGLE LOGIN
// ============================================

export const loginWithGoogle = async (): Promise<AuthResponse> => {
  try {
    // Use Firebase to get the Google ID token
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();

    // Send the ID token to our backend to verify and get our JWT token
    const response = await api.post("/auth/google", { idToken });

    return {
      success: true,
      user: {
        id: response.data.user.id,
        name: response.data.user.name,
        email: response.data.user.email,
        authProvider: response.data.user.authProvider,
      },
      token: response.data.token,
    };
  } catch (error: any) {
    console.error(error);
    let message = "Google login failed. Please try again.";
    if (error.response?.data?.message) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }
    throw new Error(message);
  }
};