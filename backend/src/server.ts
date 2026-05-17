import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import Booking from "./models/Booking";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();


// DATABASE
connectDB();


// MIDDLEWARE
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);


// TEST
app.get("/", (req, res) => {
  res.send("NestSure Backend Running");
});


// CREATE BOOKING
app.post("/api/bookings", async (req, res) => {
  try {

    const booking = await Booking.create(req.body);

    res.status(201).json({
      success: true,
      booking,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Booking Failed",
    });
  }
});


// GET BOOKINGS
app.get("/api/bookings", async (req, res) => {
  try {

    const bookings = await Booking.find();

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch bookings",
    });
  }
});


// PORT
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
