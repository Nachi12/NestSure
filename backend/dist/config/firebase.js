"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirebaseAdmin = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const getFirebasePrivateKey = () => {
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    if (!privateKey) {
        return undefined;
    }
    return privateKey.replace(/\\n/g, "\n");
};
const getFirebaseAdmin = () => {
    if (firebase_admin_1.default.apps.length) {
        return firebase_admin_1.default;
    }
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = getFirebasePrivateKey();
    if (!projectId || !clientEmail || !privateKey) {
        throw new Error("Firebase admin environment variables are missing");
    }
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert({
            projectId,
            clientEmail,
            privateKey,
        }),
    });
    return firebase_admin_1.default;
};
exports.getFirebaseAdmin = getFirebaseAdmin;
