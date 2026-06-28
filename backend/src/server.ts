// ============================================
// FILE: src/server.ts
// ============================================

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";

import Booking from "./models/Booking";
import Razorpay from "razorpay";
import crypto from "crypto";

import authRoutes from "./routes/auth.routes";

// LOAD ENV
dotenv.config();

// CONNECT DATABASE
connectDB();

// RAZORPAY INSTANCE
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

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
// PAYMENT ROUTES
// ============================================

// CREATE RAZORPAY ORDER
app.post("/api/payments/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid amount is required",
      });
    }

    const options = {
      amount: Math.round(amount * 100), // Razorpay expects amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    console.log("CREATE ORDER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create payment order",
    });
  }
});

// VERIFY PAYMENT & CREATE BOOKING
app.post("/api/payments/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = req.body;

    // Verify signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
      .update(sign)
      .digest("hex");

    if (razorpay_signature !== expectedSign) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    // Create booking with payment details
    const booking = await Booking.create({
      service: bookingData.service,
      name: bookingData.name,
      phone: bookingData.phone,
      address: bookingData.address,
      issue: bookingData.issue,
      totalAmount: bookingData.totalAmount,
      services: bookingData.services,
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
      paymentStatus: "paid",
    });

    res.status(201).json({
      success: true,
      message: "Payment verified and booking confirmed",
      booking,
    });
  } catch (error) {
    console.log("VERIFY PAYMENT ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Payment verification failed",
    });
  }
});

// ============================================
// BOOKING ROUTES
// ============================================

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

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

const PORT = process.env.PORT || 5001;

console.log("PORT ENV:", process.env.PORT);
console.log("FINAL PORT:", PORT);
app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(
    `🚀 NestSure Server running on port ${PORT}`
  );
});