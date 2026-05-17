import admin from "firebase-admin";

const getFirebasePrivateKey = () => {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!privateKey) {
    return undefined;
  }

  return privateKey.replace(/\\n/g, "\n");
};

export const getFirebaseAdmin = () => {
  if (admin.apps.length) {
    return admin;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = getFirebasePrivateKey();

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Firebase admin environment variables are missing");
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });

  return admin;
};
