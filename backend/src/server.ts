// ============================================
// FILE: src/server.ts
// ============================================

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";

import Booking from "./models/Booking";

import authRoutes from "./routes/auth.routes";

// LOAD ENV
dotenv.config();

// CONNECT DATABASE
connectDB();

// INITIALIZE EXPRESS
const app = express();

// ============================================
// MIDDLEWARE
// ============================================

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",

      // ADD YOUR DEPLOYED FRONTEND URL
      "https://nestsure.vercel.app",
    ],

    credentials: true,
  })
);

// BODY PARSER
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ============================================
// ROUTES
// ============================================

// ROOT TEST ROUTE
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "NestSure Backend Running",
  });
});

// AUTH ROUTES
app.use("/api/auth", authRoutes);

// ============================================
// BOOKING ROUTES
// ============================================

// CREATE BOOKING
app.post("/api/bookings", async (req, res) => {
  try {

    const {
      service,
      name,
      phone,
      address,
      issue,
    } = req.body;

    // VALIDATION
    if (
      !service ||
      !name ||
      !phone ||
      !address ||
      !issue
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // CREATE BOOKING
    const booking = await Booking.create({
      service,
      name,
      phone,
      address,
      issue,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });

  } catch (error) {

    console.log("BOOKING ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Booking Failed",
    });
  }
});

// GET ALL BOOKINGS
app.get("/api/bookings", async (req, res) => {
  try {

    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });

  } catch (error) {

    console.log("FETCH BOOKINGS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    });
  }
});

// ============================================
// 404 ROUTE
// ============================================

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});


const PORT = process.env.PORT || 5001;

app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(
    `🚀 NestSure Server running on port ${PORT}`
  );
});