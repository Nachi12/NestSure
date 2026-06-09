import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../config/firebase";

const provider = new GoogleAuthProvider();

// ============================================
// GOOGLE LOGIN
// ============================================

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(
      auth,
      provider
    );

    return result.user;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

// ============================================
// EMAIL LOGIN
// ============================================

export const loginWithEmail = async (
  email: string,
  password: string
) => {
  try {
    const result =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    return result.user;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

// ============================================
// EMAIL REGISTER
// ============================================

export const registerWithEmail = async (
  email: string,
  password: string
) => {
  try {
    const result =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    return result.user;
  } catch (error) {
    console.log(error);

    throw error;
  }
};