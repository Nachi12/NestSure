import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../config/firebase";

const provider = new GoogleAuthProvider();

// ============================================
// TYPES
// ============================================

export type AuthUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

export type AuthResponse = {
  success: boolean;
  user: AuthUser;
};

// ============================================
// GOOGLE LOGIN
// ============================================

export const loginWithGoogle = async (): Promise<AuthResponse> => {
  try {
    const result = await signInWithPopup(auth, provider);

    return {
      success: true,
      user: {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ============================================
// EMAIL LOGIN
// ============================================

export const loginWithEmail = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return {
      success: true,
      user: {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
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
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update Firebase display name
    await updateProfile(result.user, {
      displayName: name,
    });

    return {
      success: true,
      user: {
        uid: result.user.uid,
        email: result.user.email,
        displayName: name,
        photoURL: result.user.photoURL,
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};