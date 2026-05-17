import { getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const requiredFirebaseEnv = [
  ["VITE_FIREBASE_API_KEY", firebaseConfig.apiKey],
  ["VITE_FIREBASE_AUTH_DOMAIN", firebaseConfig.authDomain],
  ["VITE_FIREBASE_PROJECT_ID", firebaseConfig.projectId],
  ["VITE_FIREBASE_APP_ID", firebaseConfig.appId],
];

export const getFirebaseAuth = () => {
  const missingEnv = requiredFirebaseEnv.find(([, value]) => !value);

  if (missingEnv) {
    throw new Error(
      `${missingEnv[0]} is missing. Add your Firebase web app config to frontend/.env and restart Vite.`
    );
  }

  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

  return getAuth(app);
};

export const googleProvider = new GoogleAuthProvider();
