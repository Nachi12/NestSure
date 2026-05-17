import { Router } from "express";

import { getFirebaseAdmin } from "../config/firebase";
import User from "../models/User";
import generateToken from "../utils/generateToken";

const router = Router();

const sendAuthResponse = (res: any, user: any, statusCode = 200) => {
  const token = generateToken(user._id.toString());

  res.status(statusCode).json({
    success: true,
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      authProvider: user.authProvider,
    },
  });
};

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      authProvider: "local",
    });

    sendAuthResponse(res, user, 201);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    sendAuthResponse(res, user);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
});

router.post("/google", async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "Firebase ID token is required",
      });
    }

    const firebaseUser = await getFirebaseAdmin().auth().verifyIdToken(idToken);

    if (!firebaseUser.email) {
      return res.status(400).json({
        success: false,
        message: "Google account email is required",
      });
    }

    const user = await User.findOneAndUpdate(
      { email: firebaseUser.email },
      {
        $set: {
          name: firebaseUser.name || firebaseUser.email.split("@")[0],
          firebaseUid: firebaseUser.uid,
          authProvider: "google",
        },
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    sendAuthResponse(res, user);
  } catch (error: any) {
    console.log(error);

    if (error.message === "Firebase admin environment variables are missing") {
      return res.status(500).json({
        success: false,
        message:
          "Firebase Admin is not configured on the backend. Add FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY to backend/.env.",
      });
    }

    res.status(401).json({
      success: false,
      message: "Google login failed",
    });
  }
});

router.get("/me", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : undefined;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const jwt = await import("jsonwebtoken");
    const decoded = jwt.default.verify(token, process.env.JWT_SECRET || "") as {
      id: string;
    };

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        authProvider: user.authProvider,
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Not authorized",
    });
  }
});

export default router;
